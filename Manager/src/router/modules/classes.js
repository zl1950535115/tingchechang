/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const classesRouter = {
  path: '/classes',
  component: Layout,
  redirect: 'noredirect',
  name: 'Classes',
  meta: {
    title: 'classes',
    icon: 'chart'
  },
  children: [
    {
      path: 'classManagement',
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'classManagement', noCache: true }
    },
    {
      path: 'classroom',
      component: () => import('@/views/charts/line'),
      name: 'LineChart',
      meta: { title: 'classroom', noCache: true }
    },
    {
      path: 'student',
      component: () => import('@/views/charts/mixChart'),
      name: 'MixChart',
      meta: { title: 'student', noCache: true }
    }
  ]
}

export default classesRouter
