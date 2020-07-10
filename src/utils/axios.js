import axios from "axios";
// import { Message } from "element-ui";
// import store from "../store/index";
import { BASE_URL } from "../config/app";
// import router from "../router/index";

// 创建axios实例
const service = axios.create({
  baseURL: BASE_URL, // api的base_url
  timeout: 20000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    // if (store.getters.adminId && store.getters.token) {
    //     config.params = {
    //         ADMIN_ID: store.getters.adminId,
    //         ADMIN_TOKEN: store.getters.token,
    //         ...config.params
    //     };
    // }
    console.log("config", config);
    if (config.method === "post") {
      // 序列化
      config.headers = {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      };
      // console.log(config.data);
      // console.log(qs.stringify(config.data));
      let ret = "";
      for (const it in config.data) {
        ret +=
          encodeURIComponent(it) +
          "=" +
          encodeURIComponent(config.data[it]) +
          "&";
      }
      // config.data = qs.stringify(config.data);
      // config.data = JSON.stringify(config.data);
      config.data = ret;
    }
    return config;
  },
  error => {
    // Do something with request error
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    const data = response.data;
    if (data.code) {
      //   if (data.code === 2) {
      //     // store.dispatch("fedLogout").then(() => {
      //     //   Message.error("验证失败,请重新登录");
      //     //   router.push({
      //     //     path: "/login",
      //     //     query: {
      //     //       redirect: router.currentRoute.fullPath
      //     //     } // 从哪个页面跳转过来
      //     //   });
      //     // });
      //   }
    }
    return data;
  },
  error => {
    console.log(error);
    // Message({
    //   message: error.message,
    //   type: "error",
    //   duration: 5 * 1000
    // });
    return Promise.reject(error);
  }
);

export default service;
