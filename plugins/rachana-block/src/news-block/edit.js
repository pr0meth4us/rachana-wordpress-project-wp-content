import { RangeControl, SelectControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';
import apiFetch from '@wordpress/api-fetch';
import { cleansePostContent, fetchAuthors, fetchCategories, formatDate } from "../blockHelpers";
import shortid from "shortid";

const edit = ({ attributes, setAttributes }) => {
    const blockProps = useBlockProps();
    const { categoryId}

    const fetchCategoriesList = async () => {
        const categories = await apiFetch({ path: '/wp/v2/categories' });
        return categories.map(({name, id}) => ({
            label: name,
            value: id,
        }));
    };

    const fetchPosts = async () => {
        const res = await apiFetch({
            path: `/wp/v2/posts?order=desc&orderby=date&per_page=${attributes.postCount}&categories=${categoryIDs.join(',')}`,
        });
        const authors = await fetchAuthors(res);
        const categories = await fetchCategories(res);
        const processedPosts = res.map((post) => {
            const { cleanContent, imageLink } = cleansePostContent(post.content.rendered);
            return {
                ...post,
                author: authors[post.author],
                categories: post.categories.map((id) => categories[id]),
                cleanContent,
                imageLink,
                date: formatDate(post.date),
                link: post.link,
                key: shortid.generate(),
            };
        });
        setAttributes({ posts: processedPosts });
        setAttributes({ id: shortid.generate() });
    };

    useEffect(() => {
        fetchPosts();
    }, [attributes.postCount, attributes.categoryId]);

    useEffect(() => {
        (async () => {
            const categoriesList = await fetchCategoriesList();
            setAttributes({ categoriesList });
        })();
    }, []);

    const handleRangeChange = (value) => {
        const nearestMultipleOfThree = Math.round(value / 3) * 3;
        setAttributes({ postCount: nearestMultipleOfThree });
    };

    return (
        <div {...blockProps}>
            <h2>Latest Posts Slide Show</h2>
            <RangeControl
                label="Number of Posts"
                value={attributes.postCount}
                onChange={handleRangeChange}
                min={6}
                max={30}
            />
            <SelectControl
                label="Category"
                value={attributes.categoryId}
                options={attributes.categoriesList || []}
                onChange={(value) => setAttributes({ categoryId: value })}
            />
            <p>This block will display a slide show of the latest {attributes.postCount} posts from the selected category.</p>
        </div>
    );
}

export default edit;
