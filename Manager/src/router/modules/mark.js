/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const markRouter = {
  path: '/mark',
  component: Layout,
  redirect: 'noredirect',
  name: 'Mark',
  meta: {
    title: 'marking',
    icon: 'form'
  },
  children: [
    {
      path: 'awaitingApprovalClass',
      component: () => import('@/views/batch/batchRoll'),
      name: 'KeyboardChart',
      meta: { title: 'awaitingApprovalClass', noCache: true }
    },
    {
      path: 'member',
      component: () => import('@/views/batch/member'),
      name: 'KeyboardChart',
      meta: { title: '', noCache: true }
    },
    {
      path: 'member-detail',
      component: () => import('@/views/batch/member-detail'),
      name: 'KeyboardChart',
      meta: { title: '', noCache: true }
    }
  ]
}

export default markRouter
