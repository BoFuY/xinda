import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import business from '../components/business.vue';
import List from '../components/list.vue';
import first from '../components/first.vue';
import Sec from '../components/sec.vue';
import Info from '../components/info.vue';
import register from '../components/register.vue';
import login from '../components/login.vue';
Vue.use(Router);

export default new Router({ // 对外暴露接口
  //对象配置参数从
  routes: [{
      path: '/business', //访问的路径
      name: 'business', //路由试图
      component: business, //如果访问/ 会加载hello这个组件
      children: [{
          path: 'first',
          component: first,
        },
        {
          path: 'sec',
          component: Sec,
        }
      ]
    },
    {
      path: '/list', //访问的路径
      name: 'List',
      component: List //如果访问/ 会加载hello这个组件
    },

    {
      path: '/info', //访问的路径
      name: 'Info  ',
      component: Info, //如果访问/ 会加载hello这个组件
      children: [{
          path: 'register',
          component: register,
        },
        {
          path: 'login',
          component: login,
        }
      ]
    }
  ]
})


//组长

// git init 
//git status
//git add --a
//git commit -a -m 'init'
//git remote rm origin           //如果出现fatal: remote origin already exists. 
//git remote add origin '...地址'           ////git config --global user.email '758639611@QQ.com'//git config --global user.name "names"
//git push -u origin master   //分支   -u联系起来


//组员
// git终端  
//git clone   地址
//npm i
