/**
 * Created by apple on 2017/2/9.
 */
import Vue          from 'vue'
import VueResource  from 'vue-resource'
import {mapState}   from 'vuex'

import store        from './store'
import router       from './router'

Vue.use(VueResource)

new Vue({
	router,
	store,
	computed: mapState(['isLoading', 'isToasting'])
}).$mount('#monitorSystem')