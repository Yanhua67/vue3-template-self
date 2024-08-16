<template>
  <div id="cesium"></div>
</template>

<script setup>
import * as Cesium from "cesium"
import MVTImageryProvider from "mvt-imagery-provider"
import styleJson from "./styles/openInframap"

onMounted(() => {
  const cesiumViewer = new Cesium.Viewer("cesium")

  const provider = new MVTImageryProvider({
    // 在线加载
    // style: "https://demotiles.maplibre.org/style.json"
    // 本地加载
    style: styleJson
  })
  provider.readyPromise.then(() => {
    cesiumViewer.imageryLayers.addImageryProvider(provider)
  })
})
</script>

<style scoped lang="scss">
@import "./index";
</style>
