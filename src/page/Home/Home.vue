<template>
    <div class="Home">
        <Header>     
        </Header>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide swiper-slide1" v-for="(item) in homemsg.swiper" :key="item.index">
                    <div class="swiper-img1"></div>
                    <div class="swiper-text">
                        <a href="#">
                            {{item.swiperheaderEn}}
                        </a>
                    </div>
                    <div class="swiper-text2">
                        <p class="swiper-text2_p">
                            {{item.swipermsgEn}}
                        </p>
                    </div>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            
            <!-- 如果需要导航按钮 -->
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->

        </div>
        <div class="index-about">
            <div class="index-about_left">
                <div class="about-left_left"></div>
                <div class="about-left_main">
                    <div class="about-left_main__top">
                    <div class="about-left_main__top-comp1">
                        <a href="#">    
                            {{homemsg.aboutname}}
                        </a>
                    </div>
                    <p class="about-left_main__top-comp2">
                            {{homemsg.abouth3}}
                    </p>
                    </div>
                    <div class="about-left_main__mid">
                    <p class="about-left_main__mid--p">
                            {{homemsg.aboutmain}}
                    </p>
                    </div>
                    <div class="about-left_main__bottom">

                    </div>
                </div>
                <div class="about-left_right"></div>        
            </div>
            <div class="index-about_right">
                <video :src="homemsg.aboutVideo" class="about_right-video"></video>
                <div class="about-right__playerbtn">
                    <div class="about-right__playerbtn--circle">
                        <div class="about-right__playerbtn--Triangle">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="index-school">
            <h3 class="school-h3">
                    {{homemsg.Schoolsname}}
            </h3>
            <span class="school-span"></span>
            <div class="school-img-cover">
                <img src="../../assets/images/img/logo.png" alt="" class="school-img" >
            </div>
        </div>
        <div class="contactUs">
            <h3 class="contactUs-h3">{{homemsg.Schoolsmore}}</h3>
            <div class="contactUs-main">
                <div class="contactUs-block1"></div>

                <div class="contactUs-main_cover">
                    <div class="contactUs-main_left">
                        <div class="contactUs-main_left-img">
                            <img src="../../assets/images/img/WSTQR.png" alt="" class="contactUs-main_left--wechat">
                            
                        </div>
                        <div class="contactUs-main_left-p">
                            <p class="contactUs-main_left--p">
                                {{homemsg.Schoolswechat}}
                            </p>
                        </div>
                    </div>
                    <div class="contactUs-main_mid">
                        <h4 class="contactUs-main_mid--h4">{{homemsg.Schoolscontact}}</h4>
                        <span class="contactUs-main_mid--span"></span>
                    </div>
                    <div class="contactUs-main_right">
                        <div class="contactUs-main_right-img">
                            <img src="../../assets/images/img/73299cedcd9e728e824e59ca13b93f4_看图王.png" alt="" class="contactUs-main_right--app">
                        </div>
                        <div class="contactUs-main_right-p">
                            <p class="contactUs-main_right--p">
                                {{homemsg.Schoolsteam}}
                            </p>
                        </div>
                    </div>  
                </div>
                
            <div class="contactUs-block2"></div>
            </div>
        </div>
        <Footer ></Footer>
    </div>
</template>
<script>
import Swiper from "swiper"
import Header from "../../components/header/header.vue"
import Footer from "../../components/footer/footer.vue"
import { mapGetters } from 'vuex'
export default {
    data(){
        return{
            
        }
    },
    methods:{
      
    },
    created(){
       
    },
    mounted(){

    },
    updated(){
        new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        // autoplay: {
        //     disableOnInteraction: false,
        // },
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable :true
        }
        })
    },
    computed:mapGetters(["homemsg"]),
    watch:{

    },
    components:{
        Header,Footer
    }
}
</script>
<style scoped>
    @import url("../../assets/css/common.css");
    @import url("./Home.css");
</style>
