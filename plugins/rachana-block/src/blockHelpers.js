import shortid from 'shortid';
import apiFetch from "@wordpress/api-fetch";
export const generateAttributes = (defaultAttributes) =>{
    const id = shortid.generate();
    const attributes = { id };

    for (const key in defaultAttributes) {
        attributes[key] = {
            type: typeof defaultAttributes[key],
            default: defaultAttributes[key]
        };
    }

    return attributes;
}

export const onChangeAttribute = (key, value, setAttributes) => {
    setAttributes({ [key]: value });
};

export const addNewBlockItem = (items, defaultItem) => {
    return [...items, { ...defaultItem, id: shortid.generate() }];
};

export const customizeBlockItem = (items, itemId, key, value) => {
    return items.map(item => (
        item.id === itemId ? { ...item, [key]: value } : item
    ));
};
export const getDefaultAttributesWithId = (defaultAttr) => {
    const attributesWithId = { id: shortid.generate() };

    Object.keys(defaultAttr).forEach(key => {
        attributesWithId[key] = defaultAttr[key];
    });

    return attributesWithId;
};

export const customizeAttribute = (block, key, value) => {
    return {...block, [key]: value };
};

export const cleansePostContent = (dirtyContent) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = dirtyContent;
    const cleanContent = tempDiv.textContent || tempDiv.innerText || '';
    const imageLink = tempDiv.querySelector('img') ? tempDiv.querySelector('img').src : null;
    return { cleanContent, imageLink };
}

export const formatDate = (date) =>{
    return (new Date(date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    }).replace(/ /g, '/'))
}

export const fetchCategories = async (posts) => {
    const categoryIds = [...new Set(posts.flatMap((post) => post.categories))];
    const categories = await Promise.all(
        categoryIds.map(async (id) => {
            const category = await apiFetch({ path: `/wp/v2/categories/${id}` });
            return { [id]: category };
        })
    );
    return Object.assign({}, ...categories);
};

export const fetchAuthors = async (posts) => {
    const authorIds = [...new Set(posts.map((post) => post.author))];
    const authors = await Promise.all(
        authorIds.map(async (id) => {
            const author = await apiFetch({ path: `/wp/v2/users/${id}` });
            return { [id]: `${author.name} (${author.slug})` };
        })
    );
    return Object.assign({}, ...authors);
};
const fetchCategoriesList = async () => {
    const categories = await apiFetch({ path: '/wp/v2/categories' });
    return categories.map((category) => ({
        label: category.name,
        value: category.id,
    }));
};
export const fetchPosts = async (includeCategory = false) => {
    const categoryIDs = includeCategory ? attributes.categoryId : [];
    const path = includeCategory
        ? `/wp/v2/posts?order=desc&orderby=date&per_page=${attributes.postCount}&categories=${categoryIDs.join(',')}`
        : `/wp/v2/posts?order=desc&orderby=date&per_page=${attributes.postCount}`;

    const res = await apiFetch({ path });
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
