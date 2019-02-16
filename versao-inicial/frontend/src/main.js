import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/messages'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// FIXME: TEMPORÁRIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ik1hdGhldXMgTWFnaG9zdCIsImVtYWlsIjoibWF0aGV1czkxQG91dGxvb2suY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTU1MDMyNzU0MSwiZXhwIjoxNTU4ODgxMTQxfQ.47Q_8CcuHlvSoV7HtXWvrHe8KfeBlgIvPT1Dw_FtrPM'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')