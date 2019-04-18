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
// 删除试题
// export function del() {
//   return request({
//     url: '/exam/exam/w5tcy-g2dts',
//     method: 'DELETE'
//   })
// }

// 创建试题

// 获取试题列表
export function examlist(data) {
  return request.get('/exam/exam', { params: data })
}

// 获取试题列表
export function renewal(str, data) {
  return request({
    url: '/exam/exam' + '/' + str,
    method: 'put',
    data
  })
}
// exam/exam/w5tcy-g2dts
// 获取详情
export function detail(parmas) {
  return request({
    url: '/exam/exam' + '/' + parmas,
    method: 'get'
  })
}
