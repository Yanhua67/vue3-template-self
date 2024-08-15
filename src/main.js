import { createApp } from "vue"
import router from "@/routers/index"
import pinia from "@/stores"
import ElementPlus from "element-plus"
import "./style.css"
import "@/styles/reset.scss"
import "@/styles/common.scss"
import * as ElIcons from "@element-plus/icons-vue"
import errorHandler from "@/utils/errorHandler"
import App from "./App.vue"

const app = createApp(App)

app.config.errorHandler = errorHandler

// 全局注册element-plus icon
Object.keys(ElIcons).forEach(key => {
  app.component(key, ElIcons[key])
})

app.use(router)
app.use(pinia)
app.use(ElementPlus)

app.mount("#app")
