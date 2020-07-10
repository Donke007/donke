// const path = require("path");
// const debug = process.env.NODE_ENV !== "production";
//const VueConf = require('./src/assets/js/libs/vue_config_class')
//const vueConf = new VueConf(process.argv)
const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
};

const BASE_URL = process.env.NODE_ENV === "production" ? "/donke/dist" : "/";

module.exports = {
  publicPath: BASE_URL, // 根域上下文目录
  outputDir: "dist", // 构建输出目录
  assetsDir: "./", // 静态资源目录 (js, css, img, fonts)
  indexPath: "index.html",
  productionSourceMap: false, // 设为false打包时不生成.map文件
  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src")) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set("_c", resolve("src/components"));
  },
  // lintOnSave: true, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  // runtimeCompiler: true, // 运行时版本是否需要编译
  // transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
  // productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  // productionSourceMap: true, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  //     css: { // 配置高于chainWebpack中关于css loader的配置
  //     modules: true, // 是否开启支持‘foo.module.css’样式
  //     extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
  //     sourceMap: false, // 是否在构建样式地图，false将提高构建速度
  //     loaderOptions: { // css预设器配置项
  //         sass: {
  //             data: ''//`@import "@/assets/scss/mixin.scss";`
  //         }
  //     }
  // },
  // configureWebpack: config => { // webpack配置，值位对象时会合并配置，为方法时会改写配置
  //     if (debug) { // 开发环境配置
  //         config.devtool = 'cheap-module-eval-source-map'
  //     } else { // 生产环境配置
  //     }
  //      Object.assign(config, { // 开发生产共同配置，配置别名
  //          resolve: {
  //              alias: {
  //                  '@': path.resolve(__dirname, './src'),
  //                  '@c': path.resolve(__dirname, './src/components'),
  //                 'vue$': 'vue/dist/vue.esm.js'
  //             }
  //         }
  //      })
  // },
  // chainWebpack: config => { // webpack链接API，用于生成和修改webapck配置，
  //     if (debug) {
  //         // 本地开发配置
  //     } else {
  //         // 生产开发配置
  //     }
  // },
  // parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
  // pluginOptions: { // 第三方插件配置
  // },
  // pwa: { // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  // },
  devServer: {
    open: true,
    host: "localhost",
    port: 8080,
    // https: false,
    // hotOnly: false,
    // proxy: 'http://127.0.0.1:8080' // 配置跨域处理,只有一个代理
    proxy: {
      // 配置跨域
      "/api": {
        //要访问的跨域的api的域名
        target: "http://127.0.0.1:2233/api",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
    // before: app => { }
  }
};
