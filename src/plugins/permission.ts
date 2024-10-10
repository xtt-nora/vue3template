import { NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw } from "vue-router";

import { TOKEN_KEY } from "@/enums/CacheEnum";
import router from "@/router";
import { usePermissionStore } from "@/store/modules/permission";
export function setupPermission() {
  // 白名单路由
  const whiteList = ["/login"];

  router.beforeEach(async (to, from, next) => {
    const hasToken = localStorage.getItem(TOKEN_KEY);
    if (hasToken) {
      whiteList.includes(to.path) ? next() : redirectToLogin(to, next);
    }
    // to.path === "/login" && next({ path: "/" });
    if (!hasToken) {
      if (to.path === "/login") {
        next({ path: "/" });
      } else {
        const permissionStore = usePermissionStore();
        if (!permissionStore.isRoutesGenerated) {
          // 生成动态路由
          const dynamicRoutes = await permissionStore.generateRoutes();
          dynamicRoutes.forEach((route: RouteRecordRaw) => router.addRoute(route));
          // console.log("动态路由已添加:", dynamicRoutes);
          // 动态路由添加完成后，重新导航到目标路由
          return next({ ...to, replace: true });
        }
        return next();
      }
    }

    // next();
  });

  router.afterEach(() => {});
}

/** 重定向到登录页 */
function redirectToLogin(to: RouteLocationNormalized, next: NavigationGuardNext) {
  const params = new URLSearchParams(to.query as Record<string, string>);
  const queryString = params.toString();
  const redirect = queryString ? `${to.path}?${queryString}` : to.path;
  next(`/login?redirect=${encodeURIComponent(redirect)}`);
}
