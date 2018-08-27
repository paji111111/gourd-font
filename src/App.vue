<template>
  <div id="app">
    <el-container>
      <el-header>
        <vheader />
      </el-header>
      <el-container>
        <el-aside width="200px"><navmenu></navmenu></el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import NavMenu from '@/components/NavMenu'
  import Header from '@/components/Header'

  export default {
    name: 'app',
    components: {
      'navmenu': NavMenu,
      'vheader': Header
    }
  }

</script>

<style>
  .header {
    background-color: #409EFF;
    color: #fff;
    line-height: 60px;
  }
</style>

<!--<template>-->
<!--<div id="app">-->
<!--<img src="./assets/logo.png">-->
<!--<router-view/>-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--name: 'App'-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--#app {-->
<!--font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
<!-- -webkit-font-smoothing: antialiased;-->
<!-- -moz-osx-font-smoothing: grayscale;-->
<!--text-align: center;-->
<!--color: #2c3e50;-->
<!--margin-top: 60px;-->
<!--}-->
<!--</style>-->
