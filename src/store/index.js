/**
 * Created by apple on 2017/2/9.
 */
import Vue        from 'vue'
import Vuex       from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		isLoading: false,
		isToasting: false,
		articles: [],
		article: {},
		user: {name: '', pwd: ''},
		links: [],
		toast: {
			promise: null,
			info: '',
			btnNum: 1,
			toastResolve () {
			},
			toastReject () {
			}
		}
	}
})
export default store
