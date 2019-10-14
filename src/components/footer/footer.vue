<template>
    <div class="footer">
            <div class="footer-block1"></div>
            <div class="footer-main">
                <div class="footer-main_block1">
                    <a href="#" class="footer-main_in">
                        <i class="footer-main_in__img"></i>
                        <span class="footer-main_in__span">Wall Street Tequila</span>
                    </a>
                </div>
                <div class="footer-main_block2">
                    <a href="#" class="footer-main_in">
                        <i class="footer-main_in__img"></i>
                        <span class="footer-main_in__span">Wall Street Tequila</span>
                    </a>
                </div>
                <div class="footer-main_block3">
                    <a href="#" class="footer-main_in">
                        <i class="footer-main_in__img"></i>
                        <p class="footer-main_in__span">application@wallstreettequila.org</p>
                    </a>
                </div>
                <div class="footer-main_block4">
                        <a href="#" class="footer-main_in">
                            <i class="footer-main_in__img"></i>
                            <span class="footer-main_in__span">021-62081590</span>
                        </a>
                    </div>
                <div class="footer-main_block5">
                    <a href="#" class="footer-main_in">
                        <i class="footer-main_in__img"></i>
                        <p class="footer-main_in__p" v-html="footermsg"></p>
                    </a>
                </div>
            </div>
            <div class="footer-block2"></div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
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
        
    },
    computed:
       mapGetters(['footermsg'])
    ,
    watch:{

    }
}
</script>


<style scoped>
    @import url("../../assets/css/common.css");
    @import url("./footer.css");
</style>
