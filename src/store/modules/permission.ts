import { RouteRecordRaw } from "vue-router";
import { constantRoutes } from "@/router";
import pinia from "@/store";
import MenuAPI, { RouteVO } from "@/api/menu";
import { defineStore } from "pinia";
import { ref } from "vue";
import { isPhone } from "@/utils/index";
const modules = import.meta.glob("../../views/**/**.vue");
const modulesMobile = import.meta.glob("../../views/mobile/**/**.vue");
export const usePermissionStore = defineStore("permission", () => {
  /** 所有路由，包括静态和动态路由 */
  const routes = ref<RouteRecordRaw[]>([]);
  const isRoutesGenerated = ref(false);
  /**
   * 生成动态路由
   */
  function generateRoutes() {
    const dynamicRoutes = transformRoutes(MenuAPI.getRoutes());
    routes.value = constantRoutes.concat(dynamicRoutes);
    // console.log(routes.value, dynamicRoutes, "dynamicRoutes");
    isRoutesGenerated.value = true;
    return dynamicRoutes;
  }

  return {
    routes,
    isRoutesGenerated,
    generateRoutes,
  };
});
let isPc = isPhone();
const transformRoutes = (routes: any[]) => {
  const asyncRoutes: RouteRecordRaw[] = [];
  routes.forEach((route) => {
    const tmpRoute = { ...route } as RouteRecordRaw;
    let component = isPc
      ? modules[`../../views/${tmpRoute.component}.vue`]
      : modulesMobile[`../../views/mobile/${tmpRoute.component}.vue`];
    const path = isPc ? `${tmpRoute.path}` : `/mobile${tmpRoute.path}`;
    if (path) {
      tmpRoute.path = path;
    }
    if (component) {
      tmpRoute.component = component;
    }
    if (tmpRoute.children) {
      tmpRoute.children = transformRoutes(route.children);
    }
    // if (!component && !isPc) {
    //   tmpRoute.component = modules[`../../views/error/404.vue`];
    // }
    asyncRoutes.push(tmpRoute);
  });

  return asyncRoutes;
};

export function usePermissionStoreHook() {
  return usePermissionStore(pinia);
}
