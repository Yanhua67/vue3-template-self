import { resolve } from "path"
import { VitePWA } from "vite-plugin-pwa"
import { createHtmlPlugin } from "vite-plugin-html"
import { visualizer } from "rollup-plugin-visualizer"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
// import eslintPlugin from "vite-plugin-eslint"
import viteCompression from "vite-plugin-compression"
import NextDevTools from "vite-plugin-vue-devtools"
import cesium from "vite-plugin-cesium"

/**
 * 创建 vite 插件
 * @param viteEnv
 */
export const createVitePlugins = viteEnv => {
  const { VITE_GLOB_APP_TITLE, VITE_REPORT, VITE_DEVTOOLS, VITE_PWA } = viteEnv
  return [
    vue(),
    // vue 可以使用 jsx/tsx 语法
    vueJsx(),
    // cesium
    cesium(),
    // devTools
    VITE_DEVTOOLS && NextDevTools({ launchEditor: "code" }),
    // esLint 报错信息显示在浏览器界面上
    // eslintPlugin(),
    // 创建打包压缩配置
    createCompression(viteEnv),
    // 注入变量到 html 文件
    createHtmlPlugin({
      minify: true,
      inject: {
        data: { title: VITE_GLOB_APP_TITLE }
      }
    }),
    // 使用 svg 图标
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/assets/icons")],
      symbolId: "icon-[dir]-[name]"
    }),
    // vitePWA
    VITE_PWA && createVitePwa(viteEnv),
    // 是否生成包预览，分析依赖包大小做优化处理
    VITE_REPORT && visualizer({ filename: "stats.html", gzipSize: true, brotliSize: true })
  ]
}

/**
 * @description 根据 compress 配置，生成不同的压缩规则
 * @param viteEnv
 */
const createCompression = viteEnv => {
  const { VITE_BUILD_COMPRESS = "none", VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv
  const compressList = VITE_BUILD_COMPRESS.split(",")
  const plugins = []
  if (compressList.includes("gzip")) {
    plugins.push(
      viteCompression({
        ext: ".gz",
        algorithm: "gzip",
        deleteOriginFile: VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
      })
    )
  }
  if (compressList.includes("brotli")) {
    plugins.push(
      viteCompression({
        ext: ".br",
        algorithm: "brotliCompress",
        deleteOriginFile: VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
      })
    )
  }
  return plugins
}

/**
 * @description VitePwa
 * @param viteEnv
 */
const createVitePwa = viteEnv => {
  const { VITE_GLOB_APP_TITLE } = viteEnv
  return VitePWA({
    registerType: "autoUpdate",
    manifest: {
      name: VITE_GLOB_APP_TITLE,
      short_name: VITE_GLOB_APP_TITLE,
      theme_color: "#ffffff",
      icons: [
        {
          src: "/logo.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/logo.png",
          sizes: "512x512",
          type: "image/png"
        },
        {
          src: "/logo.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable"
        }
      ]
    }
  })
}
