import { createApp } from "vue";
import setupPlugins from "@/plugins";
import App from "./App.vue";
import "@/styles/index.scss";
import "virtual:svg-icons-register";
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/styles/dark.scss";
createApp(App).use(setupPlugins).mount("#app");
