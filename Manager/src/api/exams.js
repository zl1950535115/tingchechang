import request from '@/utils/request'

export function getExamsList() {
  return request({
    url: '/exam/questions/new',
    method: 'get'
  })
}
