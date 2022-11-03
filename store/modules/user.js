export default {
	state:{
		// 登录状态
		loginStatus:false,
		// token
		token:null,
		// 用户信息(昵称/头像)
		userInfo:{},
		authentication:{}
	},
	getters:{},
	mutations:{
		// 一旦进入app，就需要执行这个方法,把用户信息读取出来
		initUser(state) {
			let userInfo = uni.getStorageSync('userInfo')
			if(userInfo) {
				userInfo = JSON.parse(userInfo);
				state.userInfo = userInfo;
				state.loginStatus = true;
				state.token = uni.getStorageSync('token')
			}
		},
		// 登录后保存用户信息
		logingg(state,result){
			state.userInfo = result.userInfo;
			state.loginStatus = true;
			state.token = result.token;
			// 持久化存储===>把对象转换成字符串
			uni.setStorageSync('token',result.token)
			uni.setStorageSync('userInfo',JSON.stringify(result.userInfo))
		},
		authen(state,authentication){
			state.authentication = authentication
			uni.setStorageSync('authentication',JSON.stringify(authentication))
		},
		loginOut(state) {
			state.loginStatus = false;
			state.userInfo = null;
			state.token = null;
			uni.setStorageSync('userInfo',null)
			uni.setStorageSync('token',null)
		}
	},
	actions:{}
}