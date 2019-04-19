/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const usersRouter = {
  path: '/exams',
  component: Layout,
  redirect: 'noredirect',
  name: 'Exams',
  meta: {
    title: 'exams',
    icon: 'excel'
  },
  children: [{
    path: 'addTheTest',
    component: () =>
      import('@/views/exams/addTheTest'),
    name: 'AddTheTest',
    meta: { title: 'addTheTest', noCache: true, view_id: 'main-addExam' }
  },
  {
    path: 'examinationPaperList',
    component: () =>
      import('@/views/exams/examinationPaperList'),
    name: 'ExaminationPaperList',
    meta: { title: 'examinationPaperList', noCache: true, view_id: 'main-addQuestions' }
  },
  {
    path: 'detail',
    hidden: true,
    component: () =>
      import('@/views/exams/detail'),
    name: 'detail',
    meta: { title: 'detail', noCache: true }
  },
  {
    path: 'createExam',
    hidden: true,
    component: () =>
      import('@/views/exams/createExam'),
    name: 'createExam',
    meta: { title: 'createExam', noCache: true }
  }
  ]
}

export default usersRouter
