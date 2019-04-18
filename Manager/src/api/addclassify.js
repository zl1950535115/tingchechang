import request from '@/utils/request'
// 试题分类
export function classify() {
  return request({
    url: '/exam/getQuestionsType',
    method: 'get'
  })
}
//
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

export function getQuestionsType() {
  return request({
    url: '/exam/getQuestionsType',
    method: 'get'
  })
}

export function userIfo() {
  return request({
    url: '/user/userInfo',
    method: 'get'
  })
}

export const questions = params => {
  return request.post('/exam/questions', params)
}

