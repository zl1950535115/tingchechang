import request from '@/utils/request'

// 班级接口
export function classList() {
  return request({
    url: '/manger/grade',
    method: 'get'
  })
}

// 对应班级的学生接口
export function StudentList(params) {
  return request({
    url: '/exam/student',
    method: 'get',
    params
  })
}

// 学生试题详情接口
export function StudentDetail(params) {
  return request({
    // url: '/exam/student/4edl4i-k0rr7a-b3yna-f87a9w',
    url: '/exam/student',
    method: 'get',
    params
  })
}

// 批卷成功接口
export function bathchSucceed(params) {
  console.log('bathchSucceed', params)
  return request({
    url: '/exam/student',
    method: 'put',
    data: params
  })
}
