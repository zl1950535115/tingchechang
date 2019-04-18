import request from "@/utils/request"

export function addUser(data) {
  return request({
    url: '/user',
    method: 'post',
    data:data
  })
}
export function userData() {
  return request({
    url: '/user/identity',
    method: 'get',
  })
}

export function userName() {
  return request({
    url: '/user/user',
    method: 'get',
  })
}

export function updateusername(data) {
  return request({
    url: '/user/user',
    method: 'put',
    data:data
  })
}
export function addUserCard(data) {
  return request({
    url: '/user/identity/edit',
    method: 'get',
    params: {...data}
  })
}
export function addApi(data) {
  return request({
    url: '/user/authorityApi/edit',
    method: 'get',
    params: {...data}
  })
}
export function addView(data) {
  return request({
    url: '/user/view_authority',
    method: 'get',
    params: {...data}
  })
}
