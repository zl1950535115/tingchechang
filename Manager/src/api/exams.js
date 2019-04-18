import request from '@/utils/request'

export function examType() {
  return request({
    url: '/exam/examType',
    method: 'get'
  })
}

export function subject() {
  return request({
    url: '/exam/subject',
    method: 'get'
  })
}
// 创建试卷
export function exam(data) {
  return request({
    url: '/exam/exam',
    method: 'post',
    data
  })
}
