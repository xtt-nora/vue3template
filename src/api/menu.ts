import request from "@/utils/request";
// 菜单基础URL
const MENU_BASE_URL = "/api/v1/menus";

class MenuAPI {
  /**
   * 获取当前用户的路由列表
   * <p/>
   * 无需传入角色，后端解析token获取角色自行判断是否拥有路由的权限
   *
   * @returns 路由列表
   */
  static getRoutes() {
    // return request<any, RouteVO[]>({
    //   url: `${MENU_BASE_URL}/routes`,
    //   method: "get",
    // });
    return [
      {
        path: "/user",
        component: "user/index",
        name: "user",
        meta: {
          title: "系统管理",
          icon: "system",
          hidden: false,
          alwaysShow: false,
          type: "pc",
          params: null,
        },
        children: [
          {
            path: "/user",
            component: "user/index",
            name: "User",
            meta: {
              title: "用户管理",
              icon: "el-icon-User",
              hidden: false,
              type: "mobile",
              keepAlive: true,
              alwaysShow: false,
              params: null,
            },
          },
        ],
      },
      {
        path: "/dashboard",
        component: "dashboard/index",
        name: "dashboard",
        meta: {
          title: "系统工具",
          icon: "menu",
          hidden: false,
          type: "mobile",
          alwaysShow: false,
          params: null,
        },
        children: [
          {
            path: "/dashboard",
            component: "dashboard/index",
            name: "mobiledashboard",
            meta: {
              title: "代码生成",
              icon: "code",
              hidden: false,
              type: "mobile",
              keepAlive: true,
              alwaysShow: false,
              params: null,
            },
          },
        ],
      },
      {
        path: "/workbench",
        name: "workbench",
        meta: {
          title: "工作台",
          icon: "menu",
          hidden: false,
          type: "mobile",
          alwaysShow: false,
          params: null,
        },
        children: [
          {
            path: "/workbench/myWork",
            component: "workbench/myWork/index",
            name: "myWork",
            meta: {
              title: "我的工作",
              icon: "code",
              hidden: false,
              type: "mobile",
              keepAlive: true,
              alwaysShow: false,
              params: null,
            },
          },
          {
            path: "/workbench/tools",
            component: "workbench/tools/index",
            name: "tools",
            meta: {
              title: "实用工具",
              icon: "code",
              hidden: false,
              type: "mobile",
              keepAlive: true,
              alwaysShow: false,
              params: null,
            },
          },
        ],
      },
    ];
  }
}

export default MenuAPI;
