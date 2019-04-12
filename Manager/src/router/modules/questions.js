/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const questionsRouter = {
  path: '/questions',
  component: Layout,
  redirect: 'noredirect',
  name: 'Questions',
  meta: {
    title: 'questions',
    icon: 'clipboard'
  },
  children: [
    {
      path: 'addItem',
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'addItem', noCache: true }
    },
    {
      path: 'questionClassification',
      component: () => import('@/views/charts/line'),
      name: 'LineChart',
      meta: { title: 'questionClassification', noCache: true }
    },
    {
      path: 'checkTheItem',
      component: () => import('@/views/charts/mixChart'),
      name: 'MixChart',
      meta: { title: 'checkTheItem', noCache: true }
    }
  ]
}

export default questionsRouter
