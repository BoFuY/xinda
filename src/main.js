// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',          //el 控制范围
  router,             //router:router
  template: '<App/>',
  components: { App }       //组件
})
import {a,b,c,d} from'./mymode'   //export比较严格
console.log(a,b,c,d)
// import obj from'./mymode'   //export比较严格
// console.log(obj)
// import{a,b}from'./mymode'   //export比较严格
// console.log(a,b)

// let promis = new Promis(function(resolved,rejected){
  
// })
let n = 2
let promis = new Promise((resolved,rejected)=>{
  if(n>3){
    resolved()
  }else{
    rejected()
  }
});
// resolved对应第一个函数hello<3  rejected对应第二个函数hello<3
promis.then(()=>console.log('hello >3'),()=>console.log('hello <3'))

function timeout(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(resolve,ms,'done');                   // setTimeout  多少毫秒后执行函数
    // setTimeout(reject,ms,'doneToo');
  });
}

timeout(500).then((value)=>{
  console.log(value);
});



var getJson