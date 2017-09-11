<!-- // 单文件组件 -->
<template>                 
  <div id="app">
    <top></top>
    <!-- /localhost 后面加#号控制路由 -->
    <!-- <div>这是页面顶部</div> -->
    <!-- <img src="./assets/logo.png"> -->
    <!-- //组件  vue内置组件  路由组件  -->
    <router-view></router-view> 
    <!-- <div>这是页面的底部</div>    -->
    <buttom></buttom>
  </div>
</template>

<script>
import top from './components/top'      //先引用过来
import buttom from './components/buttom'      //先引用过来
export default {
  name: 'app',
  components:{              //指定top标签
    top,buttom
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
