export function generateAttributes(defaultAttributes) {
    const attributes = {};
    for (const key in defaultAttributes) {
        attributes[key] = { type: typeof defaultAttributes[key], default: defaultAttributes[key] };
    }
    return attributes;
}

export const onChangeAttribute = (key, value, setAttributes) => {
    setAttributes({ [key]: value });
};

export const addNewBlockItem = (items, defaultItem) => {
    return [...items, { ...defaultItem }];
};

export const customizeBlockItem = (items, index, key, value) => {
    return items.map((item, i) => (
        i === index ? { ...item, [key]: value } : item
    ));
};

export const customizeAttribute = (block, key, value) => {
    return {...block, [key]: value };
};