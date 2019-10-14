import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//import 是静态引入，编译时 ， 会事先引入
import Home from '../page/Home/Home.vue'
import Err from "../page/Error/Error.vue"
let routes = [
  {path:'/home',component:Home,name:'home'},
  {path:'/',redirect:'/home'},
  {path:'*',component:Err}
];
let router = new VueRouter({
  routes,
  scrollBehavior:(to,from,savePostion)=>{     //每次路由切换都会置顶页面
    return{x:0,y:0}
  }
});

export default router;
