export function generateAttributes(defaultAttributes) {
    const attributes = {};
    for (const key in defaultAttributes) {
        attributes[key] = {
            type: typeof defaultAttributes[key],
            default: defaultAttributes[key]
        };
    }
    return attributes;
}

const addNewBlockItem = (items, defaultItem) => {
    return [...items, { ...defaultItem }];
};

const customizeBlockItem = (items, index, key, value) => {
    return items.map((item, i) => (
        i === index ? { ...item, [key]: value } : item
    ));
};

export { addNewBlockItem, customizeBlockItem };
