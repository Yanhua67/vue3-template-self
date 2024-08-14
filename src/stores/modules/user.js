import { defineStore } from "pinia"
import piniaPersistConfig from "@/stores/helper/persist"

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    token: "",
    userInfo: { name: "user1" }
  }),
  getters: {
    userInfoGet: state => state.userInfo,
    tokenGet: state => `Bearer ${state.token}`
  },
  actions: {
    // Set Token
    setToken(token) {
      this.token = token
    },
    // Set setUserInfo
    setUserInfo(userInfo) {
      this.userInfo = userInfo
    }
  },
  persist: piniaPersistConfig("user")
})
