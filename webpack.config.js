var path = require('path');

var publicPath = path.join(__dirname, 'builds');

module.exports = {
    eslint: {
        configFile: path.join(__dirname, '.eslintrc')
    },
    entry: path.join(__dirname, 'src' , 'index.js'),
    output: {
        path: publicPath,
        filename: '[name].bundle.js',
        chunkFilename: 'common-[id].js',
        // publicPath: publicPath
    },
    devtool: 'source-map',
    debug: true,
    progress: true,
    colors: true,
    devServer: {
        port: 2323,
        contentBase: publicPath,
        inline: true
    },
    module: {
        loaders: [

            {
                test: /\.scss$/i,
                loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
            },

            {
                test: /\.css$/i,
                loaders: ['style', 'css?sourceMap']
            },

            {
                test: /\.js$/i,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },

            {
                test: /\.html$/i,
                loader: 'html'
            },

            {
                test: /\.(png|gif|jpe?g|svg|woff2?|otf|eot|tiff|wav|mp3|ttf)$/i,
                loaders: [
                    {
                        loader: 'url',
                        query: {
                            limit: 10000
                        },
                        name: '[hash].[ext]'
                    }
                ]

            }

        ],
        preloaders: [
            {
                test: /\.js$/i,
                exclude: /node_modules|bower_components|web_modules/,
                loader: 'eslint'
            }
        ]
    },
    resolve: {
        extensions: ['', '.json', '.scss', '.sass', '.less', '.css', '.js', '.jsx', '.html'],
        modulesDirectories: ['node_modules', 'bower_components', 'web_modules']
    }

};
