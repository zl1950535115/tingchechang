/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const usersRouter = {
  path: '/users',
  component: Layout,
  redirect: 'noredirect',
  name: 'Users',
  meta: {
    title: 'users',
    icon: 'user'
  },
  children: [
    {
      path: 'addUsers',
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'addUsers', noCache: true }
    },
    {
      path: 'theUserDisplay',
      component: () => import('@/views/charts/line'),
      name: 'LineChart',
      meta: { title: 'theUserDisplay', noCache: true }
    }
  ]
}

export default usersRouter
