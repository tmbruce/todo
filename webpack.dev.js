const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common,{
    mode: 'development',
    entry: './src/index.ts',
    devServer: {
        static: './dist'
    },
    devtool: 'inline-source-map',
    plugins: [

    ]
});
