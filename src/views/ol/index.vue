<template>
  <div id="map"></div>
</template>

<script setup>
import { onMounted } from "vue"
import Map from "ol/Map.js"
import View from "ol/View.js"
import OSM from "ol/source/OSM.js"
import TileLayer from "ol/layer/Tile.js"
import VectorLayer from "ol/layer/Vector.js"
import VectorSource from "ol/source/Vector.js"
import Point from "ol/geom/Point.js"
import Feature from "ol/Feature.js"
import "ol/ol.css"

let map

const initMap = () => {
  const mapInstance = new Map({
    layers: [new TileLayer({ source: new OSM() })],
    view: new View({
      center: [0, 0],
      zoom: 2,
      projection: "EPSG:4326"
    }),
    target: "map"
  })
  return mapInstance
}

const renderCameraFeatures = () => {
  const vectorLayer = new VectorLayer({
    source: new VectorSource({
      features: [
        new Feature({
          geometry: new Point([0, 0])
        })
      ]
    })
  })
  map.addLayer(vectorLayer)
}

onMounted(() => {
  map = initMap()
  renderCameraFeatures()
})
</script>

<style lang="scss" scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
