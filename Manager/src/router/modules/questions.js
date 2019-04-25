/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const questionsRouter = {
  path: '/questions',
  component: Layout,
  redirect: 'noredirect',
  name: 'Questions',
  alwaysShow: true,
  meta: {
    title: 'questions',
    icon: 'clipboard'
  },
  children: [{
    path: 'addItem',
    component: () =>
                import('@/views/Questions/addItems'),
    name: 'KeyboardChart',
    meta: { title: 'addItem', noCache: true }
  },
  {
    path: 'questionClassification',
    component: () =>
                import('@/views/Questions/addclassify'),
    name: 'LineChart',
    meta: { title: 'questionClassification', noCache: true }
  },
  {
    path: 'checkTheItem',
    component: () =>
                import('@/views/Questions/addlist'),
    name: 'MixChart',
    meta: { title: 'checkTheItem', noCache: true }
  }, {
    path: 'detial',
    hidden: true,
    component: () =>
                import('@/views/Questions/detial'),
    meta: { title: '', noCache: true }
  }
  ]
}

export default questionsRouter
