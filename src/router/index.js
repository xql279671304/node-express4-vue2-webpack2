/**
 * Created by apple on 2017/2/9.
 */
import Vue      from 'vue'
import Router   from 'vue-router'
import index  from '../components/front/index.vue'
import home  from '../components/front/home.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{ path: '/a', component: index },
		{ path: '/home', component: home },
	]
})
