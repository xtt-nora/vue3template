import { createApp } from "vue";
import pinia from "@/store";
import router from "@/router";
import App from "./App.vue";
import i18n from "@/lang/index";
import "virtual:svg-icons-register";
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/styles/dark.scss";
createApp(App).use(pinia).use(i18n).use(router).mount("#app");
