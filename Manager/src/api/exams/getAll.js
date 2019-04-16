import request from '@/utils/request'

export function getAll() {
  return request({
    url: '/exam/questions/new',
    method: 'get'
  })
}
