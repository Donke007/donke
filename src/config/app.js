/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */
let BASE_URL = process.env.VUE_APP_API_BASE;
let ROOT_URL = process.env.VUE_APP_API_BASE;
let API_URL = process.env.VUE_APP_API_URL;
let WS_URL = process.env.VUE_APP_WS_URL;
// console.log(BASE_URL);
console.log("base", BASE_URL);
if (process.env.NODE_ENV == "development") {
  ROOT_URL = "/";
  BASE_URL = "/";
} else {
  API_URL = location.origin + location.pathname;
  WS_URL = "ws://" + location.host + "/";
}
// let ROUTER_MODE = "history";
let ROUTER_MODE = "";
let IMG_BASE_URL = BASE_URL;
export { BASE_URL, ROUTER_MODE, IMG_BASE_URL, ROOT_URL, API_URL, WS_URL };
