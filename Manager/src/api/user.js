import request from '@/utils/request'
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
// 获取用户信息
export function getInfo() {
  return request({
    url: '/user/userInfo',
    method: 'get'
  })
}
// 获取用户权限
export function getViewAuthority() {
  return request({
    url: '/user/view_authority',
    method: 'get'
  })
}

