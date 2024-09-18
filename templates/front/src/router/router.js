import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import yinlefenleiList from '../pages/yinlefenlei/list'
import yinlefenleiDetail from '../pages/yinlefenlei/detail'
import yinlefenleiAdd from '../pages/yinlefenlei/add'
import yinlexinxiList from '../pages/yinlexinxi/list'
import yinlexinxiDetail from '../pages/yinlexinxi/detail'
import yinlexinxiAdd from '../pages/yinlexinxi/add'
import gequxinxiList from '../pages/gequxinxi/list'
import gequxinxiDetail from '../pages/gequxinxi/detail'
import gequxinxiAdd from '../pages/gequxinxi/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discussyinlexinxiList from '../pages/discussyinlexinxi/list'
import discussyinlexinxiDetail from '../pages/discussyinlexinxi/detail'
import discussyinlexinxiAdd from '../pages/discussyinlexinxi/add'
import discussgequxinxiList from '../pages/discussgequxinxi/list'
import discussgequxinxiDetail from '../pages/discussgequxinxi/detail'
import discussgequxinxiAdd from '../pages/discussgequxinxi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'yinlefenlei',
					component: yinlefenleiList
				},
				{
					path: 'yinlefenleiDetail',
					component: yinlefenleiDetail
				},
				{
					path: 'yinlefenleiAdd',
					component: yinlefenleiAdd
				},
				{
					path: 'yinlexinxi',
					component: yinlexinxiList
				},
				{
					path: 'yinlexinxiDetail',
					component: yinlexinxiDetail
				},
				{
					path: 'yinlexinxiAdd',
					component: yinlexinxiAdd
				},
				{
					path: 'gequxinxi',
					component: gequxinxiList
				},
				{
					path: 'gequxinxiDetail',
					component: gequxinxiDetail
				},
				{
					path: 'gequxinxiAdd',
					component: gequxinxiAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discussyinlexinxi',
					component: discussyinlexinxiList
				},
				{
					path: 'discussyinlexinxiDetail',
					component: discussyinlexinxiDetail
				},
				{
					path: 'discussyinlexinxiAdd',
					component: discussyinlexinxiAdd
				},
				{
					path: 'discussgequxinxi',
					component: discussgequxinxiList
				},
				{
					path: 'discussgequxinxiDetail',
					component: discussgequxinxiDetail
				},
				{
					path: 'discussgequxinxiAdd',
					component: discussgequxinxiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
