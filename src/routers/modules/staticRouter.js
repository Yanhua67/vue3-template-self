import { HOME_URL, LOGIN_URL } from "@/config/index"

/**
 * staticRouter (静态路由)
 */
export const staticRouter = [
  {
    path: "/",
    redirect: HOME_URL
  },
  {
    path: "/home/index",
    name: "Home",
    component: () => import("@/views/home/index.vue")
  },
  {
    path: "/pinia/index",
    name: "pinia",
    component: () => import("@/views/pinia/index.vue")
  },
  {
    path: "/axios/index",
    name: "axios",
    component: () => import("@/views/axios/index.vue")
  },
  {
    path: "/cesium/index",
    name: "cesium",
    component: () => import("@/views/cesium/index.vue")
  },
  {
    path: "/ol/index",
    name: "ol",
    component: () => import("@/views/ol/index.vue")
  }
  // {
  //   path: LOGIN_URL,
  //   name: "login",
  //   component: () => import("@/views/login/index.vue"),
  //   meta: {
  //     title: "登录"
  //   }
  // }
]

/**
 * errorRouter (错误页面路由)
 */
export const errorRouter = [
  {
    path: "/403",
    name: "403",
    component: () => import("@/components/ErrorMessage/403.vue"),
    meta: {
      title: "403页面"
    }
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/components/ErrorMessage/404.vue"),
    meta: {
      title: "404页面"
    }
  },
  {
    path: "/500",
    name: "500",
    component: () => import("@/components/ErrorMessage/500.vue"),
    meta: {
      title: "500页面"
    }
  },
  // Resolve refresh page, route warnings
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/components/ErrorMessage/404.vue")
  }
]
