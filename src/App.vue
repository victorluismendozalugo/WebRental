<template>
  <div id="app">
    <router-view/>    
    <loader></loader>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
export default {
  components:{
    Loader
  }
}
</script>

<style>
body{
  width:100%;
  height: 100%;
  position: absolute;
  background: #eee;
}

table{
  background: #fff;
}

</style>

