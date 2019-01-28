// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import layout from './components/Layout'
import VueRouter from 'vue-router'
import Resource from 'vue-resource'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import DetailAnaPage from './pages/details/analysis'
import DetailCouPage from './pages/details/count'
import DetailForPage from './pages/details/forecast'
import DetailPubPage from './pages/details/publish'
Vue.use(VueRouter)
Vue.use(Resource)
let router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: IndexPage
		},
		{
			path: '/detail',
			component: DetailPage,
			redirect:'/detail/analysis',
			children: [
				{
					path: 'analysis',
					component: DetailAnaPage
				},
				{
					path: 'count',
					component: DetailCouPage
				},
				{
					path: 'forecast',
					component: DetailForPage
				},
				{
					path: 'publish',
					component: DetailPubPage
				}
			]
		}
	]
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { layout },
  template: '<layout/>'
})
