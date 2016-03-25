import webpack from 'webpack';
import path from 'path';

let isProduction = process.env.NODE_ENV === 'production';

export default {
    context: path.join(__dirname, 'src'),

    entry: './index.js',

    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'index.js'
    },

    plugins: [
        new webpack.NoErrorsPlugin()
    ],

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
