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

export const customizeBlockItem = (index, key, value, setAttributes, items) => {
    setAttributes({
        items: items.map((item, i) => (i === index ? { ...item, [key]: value } : item)),
    });
};

export const addNewBlockItem = (setAttributes, items, defaultItem) => {
    setAttributes({ items: [...items, { ...defaultItem }] });
};
