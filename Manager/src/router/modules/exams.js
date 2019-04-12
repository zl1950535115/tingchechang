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
  children: [
    {
      path: 'addTheTest',
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'addTheTest', noCache: true }
    },
    {
      path: 'examinationPaperList',
      component: () => import('@/views/charts/line'),
      name: 'LineChart',
      meta: { title: 'examinationPaperList', noCache: true }
    }
  ]
}

export default usersRouter
