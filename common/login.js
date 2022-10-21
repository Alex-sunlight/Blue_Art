import next from './router.js'
const onlogin = (isTo = true)=>{
	//判断是否已经登录.isTo是否跳转
	const token = uni.getStorageSync('token');
	// console.log(token)
	if(token == '' || !token){
		if(isTo){
			next.$next('index/login/login');
		};
		return false;
	}else{
		return true;
	}
}
 export default {
 	onlogin
 }
 