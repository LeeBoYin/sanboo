import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const router =  new VueRouter({
	routes: [
		{
			path: '/',
			alias: '/home',
			name: 'Home',
			component: () => import(/* webpackChunkName: 'Home' */ '@views/Home'),
			meta: {
				title: 'Home - Sanboo',
			},
		},
		{
			path: '/:id',
			name: 'Main',
			component: () => import(/* webpackChunkName: 'Main' */ '@views/Main'),
			props: true,
			meta: {
				title: 'Main - Sanboo',
			},
		},
	],
	mode: 'history',
});
export default router;
