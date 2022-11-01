import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import linkTo from 'common/tools.js'
import request from 'common/request.js'
import uView from 'uview-ui'

import store from 'store'
Vue.prototype.$store = store;
Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(uView)
Vue.prototype.linkTo = linkTo;
Vue.prototype.baseUrl = request.baseUrl;
const app = new Vue({
	...App,
	store,
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
