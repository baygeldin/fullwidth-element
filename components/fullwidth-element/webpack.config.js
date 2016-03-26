import webpack from 'webpack';
import path from 'path';

let isProduction = process.env.NODE_ENV === 'production';

export default {
    context: path.join(__dirname, 'src'),

    entry: {
        "index": './index.js',
        "demo": './demo.js',
        "basic-test": './basic-test.js'
    },

    output: {
        path: path.join(__dirname, 'lib'),
        filename: '[name].js'
    },

    plugins: [
        new webpack.NoErrorsPlugin()
    ],

    externals: {
        'polymer': 'Polymer'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'expose?methods!babel!eslint',
            exclude: /node_modules/,
        }]
    },

    devtool: isProduction ? 'source-map' : 'eval-source-map',

    watchOptions: {
        aggregateTimeout: 100
    }
};
