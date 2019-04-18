import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import getters from './getters'
import exams from './modules/exams/index'
import user from './modules/user'
<<<<<<< HEAD
import classmanagement from './modules/classmanagement'
=======
import batchStore from './modules/batchStore'
>>>>>>> 1bc4ae93b32098a9bb61972160deb8429a4a2340
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
<<<<<<< HEAD
  classmanagement,
  plugins: [createLogger()]
=======
  batchStore
>>>>>>> 1bc4ae93b32098a9bb61972160deb8429a4a2340
})

export default store
