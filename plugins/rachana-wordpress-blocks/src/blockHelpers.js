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

export const customizeBlockItem = (index, key, value, onChangeAttribute, items) => {
    onChangeAttribute(`items[${index}].${key}`, value);
};

export const onChangeAttribute = (key, value, setAttributes) => {
    setAttributes({ [key]: value });
};


export const addNewBlockItem = (setAttributes, items, defaultItem) => {
    setAttributes({
        items: [...items, { ...defaultItem }]
    });
};

