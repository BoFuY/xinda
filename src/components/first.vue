<!-- 不能有两个根元素 只能有一个  -->          
<!-- 这是子路由 -->
<template>
    <div>
        <p>这是首页除去头部的中间内容</p>
        <a href="#/home/sec">跳转到第二个子页面</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // msg:
        }
    }
}
</script>

<style scoped>
p {
    color: green;
}
</style>
