import { createRouter, createWebHashHistory } from "vue-router"
import Home from "@/views/home/index.vue"
import Pinia from "@/views/pinia/index.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/pinia",
    name: "Pinia",
    component: Pinia
  },
  {
    path: "/axios",
    name: "Axios",
    component: () => import("@/views/axios/index.vue") // 懒加载组件
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
