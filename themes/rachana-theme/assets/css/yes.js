const fs = require('fs');
const cssParser = require('css');

const cssFilePath = 'cgds.css';
const outputDir = '/Users/nisoeung/Documents/code/MPTC/wordpress/cgds-wordpress-theme/themes/rachana-theme/assets/css';

fs.readFile(cssFilePath, 'utf8', (err, cssData) => {
  if (err) {
    console.error('Error reading CSS file:', err);
    return;
  }

  const ast = cssParser.parse(cssData);
  const targetColor = /#344054/i; // Regular expression with 'i' flag for case-insensitive search
  const propertySelectors = {};

  ast.stylesheet.rules.forEach(rule => {
    if (rule.type === 'rule') {
      rule.declarations.forEach(declaration => {
        if (declaration.value.match(targetColor)) { // Using match() with regular expression
          const property = declaration.property;
          const value = declaration.value.replace(targetColor, `var(--cgds-text-color)`);
          if (!propertySelectors[property]) {
            propertySelectors[property] = [];
          }
          rule.selectors.forEach(selector => {
            propertySelectors[property].push(selector);
          });
          propertySelectors[property].value = value; // Assigning value within the loop
        }
      });
    }
  });

  const outputCss = [];

  for (const property in propertySelectors) {
    if (propertySelectors.hasOwnProperty(property)) {
      const selectors = propertySelectors[property];
      const value = selectors.value; // Getting value from propertySelectors
      if (selectors.length > 0) {
        outputCss.push(`.${property}-styles,\n${selectors.join(',\n')} {\n  ${property}: ${value};\n}`);
      }
    }
  }

  if (outputCss.length > 0) {
    const outputFilePath = `${outputDir}/color-styles.css`;
    fs.writeFile(outputFilePath, outputCss.join('\n\n'), err => {
      if (err) {
        console.error('Error writing CSS file:', err);
      } else {
        console.log(`CSS file with styles associated with ${targetColor} written to ${outputFilePath}`);
      }
    });
  } else {
    console.log(`No styling associated with ${targetColor} found in the CSS file.`);
  }
});
