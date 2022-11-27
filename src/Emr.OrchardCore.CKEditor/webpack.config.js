// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
let { styles } = require('@ckeditor/ckeditor5-dev-utils');
const isProduction = process.env.NODE_ENV == 'production';


const config = {
    entry: './assets/ckeditor-orchardcore-media.js',
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'wwwroot/scripts/dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            {
                test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
                use: [
                    'style-loader',
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    { loader: 'sass-loader' },
                ]
            },
            {
                test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
                loader: 'raw-loader',
            },
            // {
            //     test: /\.css$/,
            //     use: [
            //         { loader: 'style-loader' },
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 modules: true,
            //             },
            //         },
            //         { loader: 'sass-loader' },
            //     ],
            // }

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';


    } else {
        config.mode = 'development';
    }
    return config;
};
