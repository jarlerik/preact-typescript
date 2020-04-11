const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.tsx',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        title: 'React Google closure compiler',
        template: "./src/index.html",
        filename: "./index.html"
        }),
    ],
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
        alias: { 
            "react": "preact/compat",
            "react-dom/test-utils": "preact/test-utils",
            "react-dom": "preact/compat",
           // Must be below test-utils
          },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                'style-loader',
                'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader',
            }
        ],
    },
};