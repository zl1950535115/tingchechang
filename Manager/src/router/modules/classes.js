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
      path: 'class',
      component: () => import('@/views/classzl/class'),
      name: 'KeyboardChart',
      meta: { title: 'classManagement', noCache: true, view_id: 'main-grade' }
    },
    {
      path: 'classroom',
      component: () => import('@/views/classzl/classroom'),
      name: 'LineChart',
      meta: { title: 'classroom', noCache: true, view_id: 'main-student' }
    },
    {
      path: 'student',
      component: () => import('@/views/classzl/student'),
      name: 'MixChart',
      meta: { title: 'student', noCache: true, view_id: 'main-room' }
    }
  ]
}

export default classesRouter
