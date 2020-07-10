import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./mock";
import "view-design/dist/styles/iview.css";
import "./assets/styles/common.less";
import "./assets/styles/index.less";
import "./iview.js";

// Vue.use(ViewUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
