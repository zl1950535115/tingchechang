import request from '@/utils/request'

export function classList() {
  return request({
    url: '/manger/grade',
    method: 'get'
  })
}

export function StudentList(params) {
  return request({
    url: '/exam/student',
    method: 'get',
    params
  })
}

export function StudentDetail(params) {
  return request({
    url: '/exam/student',
    method: 'get',
    params
  })
}
