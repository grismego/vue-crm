import 'materialize-css/dist/js/materialize.min'
// import i18n from '../src/locale/config'
import 'firebase/auth'
import 'firebase/database'

import App from './App.vue'
import Loader from './components/app/Loader'
import Paginate from 'vuejs-paginate'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Vuelidate from 'vuelidate'
import currencyFilter from './filters/currency.filter'
import dateFilter from './filters/date.filter'
import firebase from 'firebase/app'
import localizeFilter from './filters/localize.filter'
import messagePlugin from './utils/message.plugin'
import { messages } from '../src/locale/messages'
import router from './router'
import store from './store'
import tooltipDirecitve from './directives/tooltip.directive'

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)
Vue.directive('tooltip', tooltipDirecitve)

const i18n = new VueI18n({
  locale: 'en',
  messages
})

const firebaseConfig = {
  apiKey: 'AIzaSyBJYF5QKUukEDIM0BtbrEYFBuqwTCLq5HM',
  authDomain: 'vue-awesome-crm.firebaseapp.com',
  databaseURL: 'https://vue-awesome-crm.firebaseio.com',
  projectId: 'vue-awesome-crm',
  storageBucket: 'vue-awesome-crm.appspot.com',
  messagingSenderId: '487712676218',
  appId: '1:487712676218:web:3be23795ad87dbfd40dec3'
}

firebase.initializeApp(firebaseConfig)

let app = null

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      i18n,
      render: h => h(App)
    }).$mount('#app')
  }
})
