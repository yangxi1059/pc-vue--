<template>
    <div class="err">
        404
        <input type="button" value="返回首页" @click="gohome">
    </div>
</template>

<script>
export default {
    methods:{
        gohome(){
            this.$router.push("home")
        }
    }
}
</script>