const path = require('path');
// console.log(__dirname);
// console.log(path);

module.exports = {
    entry: "./app/assets/js/App.js",
    output: {
        // path: "./app/temp/scripts",
        path: path.resolve(__dirname, "app/temp/scripts/"),
        filename: "App.js"
    }
    ,
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            },
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
}