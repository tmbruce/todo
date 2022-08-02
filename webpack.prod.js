const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common,{
    mode: 'production',
    entry: './src/index.ts',
    performance: {
        hints: false
    },
});
