import request from '@/utils/request'

// 获取班级信息
export function getGrade(params) {
  return request({
    url: '/manger/grade',
    method: 'get'
  })
}

// 获取教室信息
export function getRoom(params) {
  return request({
    url: '/manger/room',
    method: 'get'
  })
}

// 添加教室
export function setRoom(params) {
  return request({
    url: '/manger/room',
    method: 'post',
    data: params
  })
}

// 删除教室
export function deleteRoom(params) {
  return request({
    url: '/manger/room/delete',
    method: 'delete',
    data: params
  })
}

// 获取分班学生
export function getStudent(params) {
  return request({
    url: '/manger/student',
    method: 'get'
  })
}

// 获取全部的试卷
export function getSubject() {
  return request({
    url: '/exam/subject',
    method: 'get'
  })
}

// 添加班级信息
export function setGrade(params) {
  return request({
    url: '/manger/grade',
    method: 'post',
    data: params
  })
}
