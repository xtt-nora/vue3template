export const routerArr = [
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
      {
        path: "/dashboard",
        component: "dashboard/index",
        name: "Menu",
        meta: {
          title: "菜单管理",
          icon: "el-icon-Menu",
          hidden: false,
          keepAlive: true,
          type: "pc",
          alwaysShow: false,
          params: null,
        },
      },
    ],
  },
  {
    path: "/mobile/dashboard",
    component: "mobile/dashboard/index",
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
        path: "/mobile/dashboard",
        component: "mobile/dashboard/index",
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
];
