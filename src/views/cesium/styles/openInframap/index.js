import styleJson from "./index.json"
import styleOimPower from "./style_oim_power"
import styleOimTelecoms from "./style_oim_telecoms"
import styleOimPetroleum from "./style_oim_petroleum"
import styleOimWater from "./style_oim_water"

// const os = require("os")

// const isPro = Object.is(process.env.NODE_ENV, "production")

const oimLayers = styleOimPower.concat(styleOimPetroleum, styleOimTelecoms, styleOimWater)
oimLayers.sort((a, b) => {
  if (a.zorder < b.zorder) return -1
  if (a.zorder > b.zorder) return 1
  return 0
})
styleJson.layers = oimLayers
// styleJson.sprite = isPro
//   ? `http://${os.hostname()}:8080/openMap/static/sprite`
//   : "http://172.16.137.92:8080/openMap/static/sprite"
styleJson.sprite = "http://172.16.137.92:8080/openMap/static/sprite"
export default styleJson
