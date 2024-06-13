import shortid from 'shortid';
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