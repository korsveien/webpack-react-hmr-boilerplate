module.exports = {
    context: __dirname,

    entry: {
        javascript: "./js/app.jsx",
        html: "./index.html"
    },

    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loaders: ["react-hot", "babel-loader"]
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
}
