<template>
    <div class="header">
        <div class="header-block1"></div>
        <div class="header-top">
            <div class="header-top_icon">
                <a href="#">
                    <img src="../../assets/images/img/WSTlogo1-01.png" alt="">                     <!--公司图标-->                 
                </a>
            </div>
            <div class="header-top_nav">                <!--nav-->    
                <div class="header-nav-block"></div>
                <ul class="header-top_nav__ul">
                    <li class="header-top_nav__ul--li" @mouseenter="e = true" @mouseleave="e = false">
                        <a :class="{active:e}" @mouseenter="e = true" @mouseleave="e = false" >
                            {{homemsg.Enname1}}</a>
                        <ul v-if="navdetail.Home!=0" v-show="e" class="header-top_li__ul" >
                            <li class="header-top_li__ul--li" v-for="(item,index) in navdetail.Home" 
                            :key="index" 
                            :class="{'bor':clicked==index}" 
                            @mouseenter="changeTab(index)"
                            @mouseleave="clicked = -1"
                            >
                                <a href="#">
                                    {{item}}
                                </a>                               
                            </li>
                        </ul>
                    </li>
                    <li class="header-top_nav__ul--li" @mouseover="f = true" @mouseleave="f = false">
                        <a class="" :class="{active:f}" @mouseenter="f = true" @mouseleave="f = false">{{homemsg.Enname2}}</a>
                        <ul v-if="navdetail.VideoStories!=0" v-show="f" class="header-top_li__ul" >
                            <li class="header-top_li__ul--li" v-for="(item,index) in navdetail.VideoStories" 
                            :key="index" :class="{'bor':clicked==index}" @mouseenter="changeTab(index)"
                            >
                                <a href="#">
                                    {{item}}
                                </a>                               
                            </li>
                        </ul>
                    </li>
                    <li class="header-top_nav__ul--li" @mouseover="a = true" @mouseleave="a = false" >
                        <a :class="{active:a}" @mouseenter="a = true" @mouseleave="a = false">{{homemsg.Enname3}}</a>
                        <ul class="header-top_li__ul" v-if="navdetail.Offers!=0"  v-show="a" >
                            <li class="header-top_li__ul--li" v-for="(item,index) in navdetail.Offers" 
                            :key="index" :class="{'bor':clicked==index}" @mouseenter="changeTab(index)"
                            @mouseleave="clicked = -1"
                            >
                                <a href="#">
                                    {{item}}
                                </a>                               
                            </li>
                           
                        </ul>
                    </li>          
                    <li class="header-top_nav__ul--li" @mouseover="b = true" @mouseleave="b = false" >
                        <a :class="{active:b}" @mouseenter="b = true" @mouseleave="b = false">{{homemsg.Enname4}}</a>
                        <ul class="header-top_li__ul" v-if="navdetail.SuccessStories!=0" v-show="b">
                            <li class="header-top_li__ul--li" v-for="(item,index) in navdetail.SuccessStories" 
                            :key="index" :class="{'bor':clicked==index}" @mouseenter="changeTab(index)"
                            @mouseleave="clicked = -1"
                            >
                                <a href="#">
                                    {{item}}
                                </a>                               
                            </li>
                        </ul>
                    </li>
                    <li class="header-top_nav__ul--li" @mouseover="c = true" @mouseleave="c = false" >
                        <a :class="{active:c}" @mouseenter="c = true" @mouseleave="c = false">{{homemsg.Enname5}}</a>
                        <ul class="header-top_li__ul" v-if="navdetail.Services!=0" v-show="c">
                            <li class="header-top_li__ul--li" v-for="(item,index) in navdetail.Services" 
                            :key="index" :class="{'bor':clicked==index}" @mouseenter="changeTab(index)"
                            @mouseleave="clicked = -1"
                            >
                                <a href="#">
                                    {{item}}
                                </a>                               
                            </li>
                        </ul>
                    </li>
                    <li class="header-top_nav__ul--li" @mouseover="d = true" @mouseleave="d = false" > 
                        <a :class="{active:d}" @mouseenter="d = true" @mouseleave="d = false">{{homemsg.Enname6}}</a>
                        <ul class="header-top_li__ul" :v-if="navdetail.About" v-show="d">
                            <li class="header-top_li__ul--li" v-for="(item,index) in navdetail.About" 
                            :key="index" :class="{'bor':clicked==index}" @mouseenter="changeTab(index)"
                            @mouseleave="clicked = -1"
                            >
                                <a href="#">
                                    {{item}}
                                </a>                               
                            </li>
                        </ul>
                    </li>
                    <li class="header-top_nav__ul--lastli2 header-top_nav__ul--li" @mouseover="g = true" @mouseleave="g = false">
                        <a :class="{active:g}" @mouseenter="g = true" @mouseleave="g = false">{{homemsg.Enname7}}</a>
                        <ul class="header-top_li__ul" v-show="g" v-if="navdetail.Blog!=0">
                             <li class="header-top_li__ul--li" v-for="(item,index) in navdetail.Blog" 
                            :key="index" :class="{'bor':clicked==index}" @mouseenter="changeTab(index)"
                            @mouseleave="clicked = -1"
                            >
                                <a href="#">
                                    {{item}}
                                </a>                               
                            </li>
                        </ul>
                    </li>
                </ul>                                    
                <div class="header-top_nav__ul--lastli">
                    <span class="header-top_nav__ul--span">|</span>
                    <i class="header-top_nav--img"></i>
                    <a class="header-top_nav__ul--login" href="#">{{homemsg.Enname8}}</a>
                </div>
            </div>      
        </div>
        <div class="header-block2">
            <span class="header-block2-lang" @click="changelang">
                中文/EN   
            </span> 
        </div>
    </div>
</template>

<script>
import $ from "jquery"
import axios from "axios"
export default {
    props:{
       
    },
    data(){
        return{
            a:false,         
            b:false,
            c:false,
            d:false,
            e:false,
            f:false,
            g:false,
            clicked:-1,
            homemsg:{},
            navdetail:{}
        }
    },
    methods:{
       changeTab(index){
            this.clicked = index;
        },
        changelang(){
            if(localStorage.getItem('lang')==="zh"){
                localStorage.setItem("lang",'en')
                axios.get("/api/home").then((res)=>{
                    this.homemsg = res.data.data;
                    this.$store.dispatch('homemsg',this.homemsg)
                })
                axios.get("/api/header").then((res)=>{
                    this.navdetail = res.data.data;
                })
                this.footermsg = "Shanghai: Tianshan Road, Changning District <br/> Beijing: Guanghua Road, Chaoyang District";
                this.$store.dispatch('footermsg',this.footermsg)

            }else{
                localStorage.setItem("lang",'zh')
                axios.get("/api/homemainCn").then((res)=>{
                    this.homemsg = res.data.data;
                    this.$store.dispatch('homemsg',this.homemsg)
                })
                axios.get("/api/headerCn").then((res)=>{
                    this.navdetail = res.data.data;
                })
                this.footermsg = "上海：长宁区天山路 </br> 北京：朝阳区光华路";
                this.$store.dispatch('footermsg',this.footermsg)
            }
        }
    },
    mounted(){
        if(!localStorage.getItem('lang')){
            localStorage.setItem('lang',this.$i18n.locale) //判断当前语言种类 有en zh 存到cookie 其他页判断类型 created
        }
        if(localStorage.getItem('lang')==='en'){
            axios.get("/api/home").then((res)=>{
                this.homemsg = res.data.data;
                this.$store.dispatch('homemsg',this.homemsg)
            })
            axios.get("/api/header").then((res)=>{
                this.navdetail = res.data.data;
            })
        }else{
            axios.get("/api/homemainCn").then((res)=>{
                this.homemsg = res.data.data;
                this.$store.dispatch('homemsg',this.homemsg)
            })
            axios.get("/api/headerCn").then((res)=>{
                this.navdetail = res.data.data;
            })
        }
        // 头部滚动粘性定位70px
        $(document).scroll(function(){
            if($(document).scrollTop() > 80){
                $(".header").css("position","fixed")
            }else{
                $(".header").css("position","relative")
            }
        });

    },
    updated(){
        // 点击字体变色
        $(".header-top_nav__ul--li").find("a").click(function(){
            $(this).attr("class","clickactive").parent(".header-top_nav__ul--li").siblings(".header-top_nav__ul--li").children("a").removeClass("clickactive");
        })
    },
    computed:{
       
    },
    watch:{
     
    }
}
</script>


<style scoped>
    @import url("../../assets/css/common.css");
    @import url("./header.css");
    .bor a{
      color:#7d0022 !important;
    }
</style>
