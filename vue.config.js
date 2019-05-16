module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    devServer: {
        proxy: {
            '^/api' :{
                target:'http://150.95.157.67:4000',
                pathRewrite: {
                    '^/api/': '/'
                }
            }
        },
        overlay: {
            warnings: true,
            errors: true
        }
    }
}