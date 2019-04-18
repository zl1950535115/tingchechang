import request from '@/utils/request'

export function classify() {
  return request({
    url: '/exam/getQuestionsType',
    method: 'get'
  })
}

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
