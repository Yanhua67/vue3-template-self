<script setup>
import { onMounted } from "vue"
import * as Cesium from "cesium"

onMounted(() => {
  // const esri = new Cesium.ArcGisMapServerImageryProvider({
  //   url: "https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer",
  //   enablePickFeatures: false
  // })
  const viewer = new Cesium.Viewer("cesiumContainer", {
    infoBox: false, // 右侧信息框
    selectionIndicator: false, // 选中状态
    // imageryProvider: esri, // 设置影像地图
    // terrainProvider: Cesium.createWorldTerrain({
    //   requestVertexNormals: true, // 可以增加法线，用于提高光照效果
    //   requestWaterMask: true // 水面特效
    // }), // 地形图层
    scene3DOnly: false,
    timeline: false, // 时间轴控件
    animation: false, // 动画控件
    geocoder: false, // 搜索控件
    homeButton: false, // 主页控件
    sceneModePicker: false, // 投影控件
    baseLayerPicker: false, // 图层控件
    navigationHelpButton: false, // 帮助控件
    fullscreenButton: false // 全屏控件
  })
})
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped>
#cesiumContainer {
  width: 100vw;
  height: 100vh;
}
</style>
