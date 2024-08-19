<template>
  <div id="cesium"></div>
</template>

<script setup>
import { Cartesian3, Color, Math as CesiumMath, Terrain, Viewer, createOsmBuildingsAsync, CustomDataSource } from "cesium"
import { onMounted } from "vue"

onMounted(() => {
  // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
  const viewer = new Viewer("cesium", {
    terrain: Terrain.fromWorldTerrain()
  })

  // Fly the camera to San Francisco at the given longitude, latitude, and height.
  viewer.camera.flyTo({
    destination: Cartesian3.fromDegrees(-122.4175, 37.655, 400),
    orientation: {
      heading: CesiumMath.toRadians(0.0),
      pitch: CesiumMath.toRadians(-15.0)
    }
  })

  // Add Cesium OSM Buildings, a global 3D buildings layer.
  createOsmBuildingsAsync().then(buildingTileset => {
    viewer.scene.primitives.add(buildingTileset)
  })

  const dataSource = new CustomDataSource("sub")

  /* const entityCollection = */
  dataSource.entities.add({
    position: Cartesian3.fromDegrees(-75.59777, 40.03883),
    point: {
      color: Color.RED,
      pixelSize: 80
    }
  })
  dataSource.entities.add({
    position: Cartesian3.fromDegrees(-80.12, 25.46),
    point: {
      color: Color.LIME,
      pixelSize: 32
    }
  })

  viewer.dataSources.add(dataSource)
})
</script>

<style scoped lang="scss">
@import "./index";
</style>
