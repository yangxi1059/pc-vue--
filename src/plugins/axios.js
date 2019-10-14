import Vue from 'vue';
import axios from 'axios';

axios.setupInterceptors = (vm) => {
  
  // console.log('setupInterceptors')
    
  // 推荐一个请求的拦截器
  axios.interceptors.request.use(function (config) {

    // 做点事 config = {header,params,data,method,}
    // console.log('拦截器 go',vm.$data.bLoading)
    vm.$data.bLoading=true;
    // config.baseURL = '/api/'
    // config.withCredentials = true // 允许携带token ,这个是解决跨域产生的相关问题
    // config.timeout = 6000
    // let token = sessionStorage.getItem('access_token')
    // let csrf = store.getters.csrf
    // if (token) {
    // config.headers = {
    //   'access-token': token,
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // }
    // }
    return config;

  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  // catch捕获异常即使error仍然可以
  // 添加一个响应的拦截器
  axios.interceptors.response.use(function (response) {
    // 做点事
    vm.$data.bLoading=false;
    // console.log('拦截器 back',vm.$data.bLoading)
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
}
Vue.prototype.$axios=axios;
window.axios = axios;
export default axios;