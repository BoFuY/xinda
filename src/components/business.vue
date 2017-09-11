<!-- 不能有两个根元素 只能有一个  -->
<template>   
    <div>
        <!-- <p>欢迎来到Home页面</p> -->
    <div>
        <div>这是业务内容的头部  搜索框</div>
        <router-view></router-view>
        <div>这是业务内容的脚步  关于我们</div>
    </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                msg:'hello world'
            }
        }
    }
</script>

<style scoped>   
    p{
        color:red;
    }
</style>
