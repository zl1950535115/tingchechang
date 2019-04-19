import request from '@/utils/request'

export function getClassRoom(params) {
  return request({
    url: '/manger/room',
    method: 'get'
  })
}
