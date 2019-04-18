import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import exams from './modules/exams'
import user from './modules/user'
import classmanagement from './modules/classmanagement'
import batchStore from './modules/batchStore'
import adduser from './modules/adduser'
// import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', false, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules,
  getters,
  exams,
  user,
  classmanagement,
  batchStore,
  adduser
  // plugins: [createLogger()]
})

export default store
