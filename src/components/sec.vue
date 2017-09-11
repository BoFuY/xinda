<!-- 不能有两个根元素 只能有一个  -->          
<!-- 这是子路由 -->
<template>
    <div>
        <p>这是业务内容的第二个页面</p>
        <a href="#/home/first">跳转到第一个页面</a>
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
