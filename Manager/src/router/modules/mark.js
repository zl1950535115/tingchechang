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
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'awaitingApprovalClass', noCache: true }
    }
  ]
}

export default markRouter
