<template>
    <router-view></router-view>    
</template>

<script>


export default {
 name:'app',
   watch:{
    $route:{
      handler(
        // {path}
        ){
        
      },
      immediate:true
    }
  }
}
</script>

<style>

</style>
