const fs = require('fs');
const path = require('path');

const folderPath = '/Users/nisoeung/Local Sites/rachana/app/public/wp-content/themes/mptc-theme';

function replaceInFiles(folderPath, oldText, newText) {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        files.forEach((file) => {
            const filePath = path.join(folderPath, file);
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error('Error getting file stats:', err);
                    return;
                }

                if (stats.isFile()) {
                    fs.readFile(filePath, 'utf8', (err, data) => {
                        if (err) {
                            console.error('Error reading file:', err);
                            return;
                        }

                        const newData = data.replace(new RegExp(oldText, 'g'), newText);

                        if (newData !== data) {
                            fs.writeFile(filePath, newData, 'utf8', (err) => {
                                if (err) {
                                    console.error('Error writing file:', err);
                                    return;
                                }
                                console.log(`Replaced "${oldText}" with "${newText}" in ${file}`);
                            });
                        }
                    });
                } else if (stats.isDirectory()) {
                    replaceInFiles(filePath, oldText, newText);
                }
            });
        });
    });
}

replaceInFiles(folderPath, 'Rachana_Theme', 'MPTC_THEME');