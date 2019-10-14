import Vue from 'vue'
import App from './App.vue'
import axios from  './plugins/axios.js';
import VueCookies from 'vue-cookies'
import router from './plugins/router'
import store from './plugins/store'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
const i18n = new VueI18n({
  // locale: LangStorage.getLang('zh'),  // 语言标识，后面会用做切换和将用户习惯存储到本地浏览器
  locale: 'en', // 语言标识
  messages: {
    'zh': require('./common/lang/zh'),
    'en': require('./common/lang/en')
  }})
  // import hook from "vue-hooks"
  Vue.use(VueCookies);
  
  // import "babel-preset-es2015"
  Vue.config.productionTip = false
  let vm = new Vue({
    render: h => h(App),
    router,
    store,
    i18n
  }).$mount('#app')
  axios.setupInterceptors(vm);
  // localStorage.setItem('lang',i18n.locale) //判断当前语言种类 有en zh 存到cookie 其他页判断类型 created
  