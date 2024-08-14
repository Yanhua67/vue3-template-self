import http from "@/api"

/**
 * @name 用户管理模块
 */
// 获取用户列表
export const getUserList = params => {
  return http.post(`/user/list`, params)
}

// 获取树形用户列表
export const getUserTreeList = params => {
  return http.post(`/user/tree/list`, params)
}

// 新增用户
export const addUser = params => {
  return http.post(`/user/add`, params)
}

// 批量添加用户
export const BatchAddUser = params => {
  return http.post(`/user/import`, params)
}

// 编辑用户
export const editUser = params => {
  return http.post(`/user/edit`, params)
}

// 删除用户
export const deleteUser = params => {
  return http.post(`/user/delete`, params)
}

// 切换用户状态
export const changeUserStatus = params => {
  return http.post(`/user/change`, params)
}

// 重置用户密码
export const resetUserPassWord = params => {
  return http.post(`/user/rest_password`, params)
}

// 导出用户数据
export const exportUserInfo = params => {
  return http.download(`/user/export`, params)
}

// 获取用户状态字典
export const getUserStatus = () => {
  return http.get(`/user/status`)
}

// 获取用户性别字典
export const getUserGender = () => {
  return http.get(`/user/gender`)
}

// 获取用户部门列表
export const getUserDepartment = () => {
  return http.get(`/user/department`, {}, { cancel: false })
}

// 获取用户角色字典
export const getUserRole = () => {
  return http.get(`/user/role`)
}
