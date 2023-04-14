const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
module.exports = {
    plugins:{
        autoprefixer:{},
        'postcss-pxtorem':{
            'rootValue': 37.5,
            'propList': ['*']
        }
    },
    configureWebpack: {
        plugins: [
          ComponentsPlugin({
            resolvers: [VantResolver()],
          }),
        ],
      },
}