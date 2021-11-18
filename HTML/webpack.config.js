
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        home: './src/js/index.ts',
        basket: './src/js/basketPage.ts',
        add: './src/js/addPage.ts'

    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        static: './dist',
    },
};
