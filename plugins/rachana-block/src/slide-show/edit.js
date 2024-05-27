import { RangeControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';
import apiFetch from '@wordpress/api-fetch';
import {cleansePostContent} from "../blockHelpers";

const edit = ({ attributes, setAttributes }) => {
    const blockProps = useBlockProps();
    const [posts, setPosts] = useState([]);
    const [authors, setAuthors] = useState({});
    const [categories, setCategories] = useState({});

    const fetchPosts = async () => {
        const res = await apiFetch({
            path: `/wp/v2/posts?order=desc&orderby=date&per_page=${attributes.postCount}`,
        });
        const authors = await fetchAuthors(res);
        const categories = await fetchCategories(res);
        const processedPosts = res.map((post) => {
            const { cleanContent, imageLink } = cleansePostContent(post.content.rendered);
            const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            }).replace(/ /g, '/');
            return {
                ...post,
                author: authors[post.author],
                categories: post.categories.map((id) => categories[id]),
                cleanContent,
                imageLink,
                formattedDate,
                link: post.link,
            };
        });
        setPosts(processedPosts);
        setAuthors(authors);
        setCategories(categories);
        setAttributes({ posts: processedPosts });
    };

    const fetchAuthors = async (posts) => {
        const authorIds = [...new Set(posts.map((post) => post.author))];
        const authors = await Promise.all(
            authorIds.map(async (id) => {
                const author = await apiFetch({ path: `/wp/v2/users/${id}` });
                return { [id]: `${author.name} (${author.slug})` };
            })
        );
        return Object.assign({}, ...authors);
    };

    const fetchCategories = async (posts) => {
        const categoryIds = [...new Set(posts.flatMap((post) => post.categories))];
        const categories = await Promise.all(
            categoryIds.map(async (id) => {
                const category = await apiFetch({ path: `/wp/v2/categories/${id}` });
                return { [id]: category.name };
            })
        );
        return Object.assign({}, ...categories);
    };

    useEffect(() => {
        fetchPosts();
    }, [attributes.postCount]);

    return (
        <div {...blockProps}>
            <h2>Latest Posts Slide Show</h2>
            <RangeControl
                label="Number of Posts"
                value={attributes.postCount}
                onChange={(value) => setAttributes({ postCount: value })}
                min={1}
                max={20}
            />
            <p>This block will display a slide show of the latest {attributes.postCount} posts.</p>
        </div>
    );
}

export default edit;