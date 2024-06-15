import apiFetch from "@wordpress/api-fetch";
import shortid from "shortid";
import { cleansePostContent, formatDate } from "./blockHelpers";

const fetchData = async (res, resourceType, idField, formatter) => {
    const resourceIds = [...new Set(res.map((post) => post[idField]))];

    const resourceData = await Promise.all(
        resourceIds.map(async (id) => {
            const resource = await apiFetch({ path: `/wp/v2/${resourceType}/${id}` });
            return { [id]: formatter(resource) };
        })
    );

    return Object.assign({}, ...resourceData);
};
export const fetchCategoriesList = async () => {
    const categories = await apiFetch({ path: '/wp/v2/categories' });
    return categories.map(({ name, id, link }) => ({
        label: name,
        value: id,
        link,
    }));
};
export const fetchPosts = async (postCount, categoryId = null) => {
    let path;
    if (categoryId) {
        path = `/wp/v2/posts?order=desc&orderby=date&per_page=${postCount}&categories=${categoryId}`;
    } else {
        path = `/wp/v2/posts?order=desc&orderby=date&per_page=${postCount}`;
    }

    const res = await apiFetch({ path });

    const authors = await fetchData(res, 'users', 'author', (author) => `${author.name} (${author.slug})`);
    const categories = await fetchData(res, 'categories', 'categories', (category) => category);

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

    return { posts: processedPosts, id: shortid.generate() };
};

export const categoryValue = (value, categoriesList) => {
    const intCategoryId = parseInt(value, 10);
    const selectedCategory = categoriesList.find(category => category.value === intCategoryId);
    return {
        link: selectedCategory.link,
        label: selectedCategory.label,
        intCategoryId
    };
};
