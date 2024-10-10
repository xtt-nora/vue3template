import { createPinia } from "pinia";
// Pinia的持久化存储插件
import type { App } from "vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
// 全局注册 store
export function setupStore(app: App<Element>) {
  app.use(pinia);
}

export default pinia;
