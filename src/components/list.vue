<!-- 不能有两个根元素 只能有一个  -->
<template>
    <div>
        <!-- <p>欢迎来到Home页面</p> -->
        <p>欢迎来到List页面</p>
        {{msg}}
        <a href="#/business">跳转到business页面</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'hello list'
        }
    }
}
</script>

<style scoped>
   p {
       color: pink;
   }
</style>
