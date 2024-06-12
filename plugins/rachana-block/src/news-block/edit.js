import { CheckboxControl, RangeControl, SelectControl, TextControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';
import apiFetch from '@wordpress/api-fetch';
import { cleansePostContent, fetchAuthors, fetchCategories, formatDate } from "../blockHelpers";
import shortid from "shortid";

const edit = ({ attributes, setAttributes }) => {
    const blockProps = useBlockProps();
    const { categoryId, postCount, categoriesList, categoryName } = attributes;

    const fetchCategoriesList = async () => {
        const categories = await apiFetch({ path: '/wp/v2/categories' });
        return categories.map(({ name, id, link }) => ({
            label: name,
            value: id,
            link,
        }));
    };

    const fetchPosts = async () => {
        const res = await apiFetch({
            path: `/wp/v2/posts?order=desc&orderby=date&per_page=${postCount}&categories=${categoryId}`,
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
        setAttributes({ posts: processedPosts, id: shortid.generate() });
    };

    useEffect(() => {
        fetchPosts();
    }, [postCount, categoryId, categoryName]);

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

    const handleCategoryChange = (value) => {
        const intCategoryId = parseInt(value, 10);
        const selectedCategory = categoriesList.find(category => category.value === intCategoryId);
        if (selectedCategory) {
            setAttributes({
                categoryId: intCategoryId,
                categoryLink: selectedCategory.link,
                categoryName: selectedCategory.label,
            });
        }
    };

    return (
        <div {...blockProps}>
            <h2>News Block</h2>
            <RangeControl
                label="Number of Posts"
                value={postCount}
                onChange={handleRangeChange}
                min={6}
                max={30}
            />
            <SelectControl
                label="Category"
                value={categoryId}
                options={categoriesList || []}
                onChange={handleCategoryChange}
            />
            <p>This block will display a slide show of the latest {postCount} posts from the selected category.</p>
        </div>
    );
};

export default edit;
