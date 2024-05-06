export function generateAttributes(defaultAttributes) {
    const attributes = {};

    const generateNestedAttributes = (obj, path = '') => {
        for (const key in obj) {
            const newPath = path ? `${path}.${key}` : key;
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                generateNestedAttributes(obj[key], newPath);
            } else {
                attributes[newPath] = {
                    type: typeof obj[key],
                    default: obj[key],
                };
            }
        }
    };

    generateNestedAttributes(defaultAttributes);
    return attributes;
}


export const onChangeAttribute = (key, value, setAttributes) => {
    setAttributes({ [key]: value });
};

export const addNewBlockItem = (items, defaultItem) => {
    return [...items, { ...defaultItem }];
};

export const customizeBlockItem = (items, index, key, value) => {
    return items.map((item, i) => (i === index ? { ...item, [key]: value } : item));
};

export const generateStyleOptions = (styles) => {
    return Object.entries(styles).map(([key, value]) => ({
        label: key,
        value: value,
    }));
};