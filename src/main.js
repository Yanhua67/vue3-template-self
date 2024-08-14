import { createApp } from "vue"
import "./style.css"
import router from "@/router"
import pinia from "@/stores"
import ElementPlus from "element-plus"
import "@/styles/reset.scss"
import "@/styles/common.scss"
import * as ElIcons from "@element-plus/icons-vue"
import App from "./App.vue"

const app = createApp(App)

// 全局注册element-plus icon
Object.keys(ElIcons).forEach(key => {
  app.component(key, ElIcons[key])
})

app.use(router)
app.use(pinia)
app.use(ElementPlus)

app.mount("#app")
