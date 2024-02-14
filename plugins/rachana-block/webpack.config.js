const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production', // or 'development'
    entry: './blocks/assets/scss/custom/styles.scss',
    output: {
        path: path.resolve(__dirname, 'blocks/assets/build/css'),
        filename: 'styles.css',
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                // sass -> css -> extract to dist/css
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
};
