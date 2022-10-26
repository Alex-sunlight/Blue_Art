import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import linkTo from 'common/tools.js'
import request from 'common/request.js'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.linkTo = linkTo;
Vue.prototype.baseUrl = request.baseUrl;
const app = new Vue({
	...App
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
