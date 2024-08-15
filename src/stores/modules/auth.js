import { defineStore } from "pinia"
import { getFlatMenuList, getShowMenuList } from "@/utils"
import { getAuthMenuListApi } from "@/api/modules/login"

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    // 菜单权限列表
    authMenuList: []
  }),
  getters: {
    // 菜单权限列表 ==> 这里的菜单没有经过任何处理
    authMenuListGet: state => state.authMenuList,
    // 菜单权限列表 ==> 左侧菜单栏渲染，需要剔除 isHide == true
    showMenuListGet: state => getShowMenuList(state.authMenuList),
    // 菜单权限列表 ==> 扁平化之后的一维数组菜单，主要用来添加动态路由
    flatMenuListGet: state => getFlatMenuList(state.authMenuList)
  },
  actions: {
    // Get AuthMenuList
    async getAuthMenuList() {
      const { data } = await getAuthMenuListApi()
      this.authMenuList = data
    }
  }
})
