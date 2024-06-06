import { RangeControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';
import apiFetch from '@wordpress/api-fetch';
import {cleansePostContent, fetchAuthors, fetchCategories, formatDate} from "../blockHelpers";
import shortid from "shortid";

const edit = ({ attributes, setAttributes }) => {
    const blockProps = useBlockProps();

    const fetchPosts = async () => {
        const res = await apiFetch({
            path: `/wp/v2/posts?order=desc&orderby=date&per_page=${attributes.postCount}`,
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