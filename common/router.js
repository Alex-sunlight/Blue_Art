const parsingData = (data)=>{
	//解析传参data对象
	// console.log(data)
	let param = '?';
	const keys = Object.keys(data);
	const len = keys.length;
	for(let i = 0;i<len;i++){
		if(i === len -1){
			param += keys[i] + '=' + data[keys[i]];
		}else{
			param += keys[i] + '=' + data[keys[i]] +'&';
		}
	}
	// console.log(param)
	return param;
}
const $next = (url,data,time)=>{
	uni.hideLoading();
	let param = '';
	const app = getApp().globalData;
	// if(app.update) return;
	if(data){
		param = parsingData(data);
	};
	if(time){
		setTimeout(()=>{
			uni.navigateTo({
				url:'/pages/' + url + param,
			})
		},time)
	}else{
		if(app.pageLock){
			app.pageLock = false;
			uni.preloadPage({
				url:'/pages/' + url + param,
				success(){
					// console.log('预加载成功');
					setTimeout(()=>{
						uni.navigateTo({
							url:'/pages/' + url + param,
							complete(){
								app.pageLock = true;
							},
							
						})
						
					},300)
				},
				fail(){
					
				}
			})
		}
		
		
	}
}
const $tab = (url,data,time)=>{
	if(time){
		setTimeout(()=>{
			uni.switchTab({
				url:"/pages/" + url,
			})
		},time)
	}else{
		uni.switchTab({
			url:"/pages/" + url,
		})
	}
	
}
const $back = (num=1,time)=>{
	if(time){
		console.log('dasdsa')
		setTimeout(()=>{
			uni.navigateBack({
				delta:num
			})
		},time);
	}else{
		uni.navigateBack({
			delta:num
		})
	}
}
const $un = (url,data,time)=>{
	let param = '';
	if(data){
		param = parsingData(data);
	};
	if(time){
		setTimeout(()=>{
			uni.unPreloadPage({
				url: "/pages/" + url + param
			})
		},time);
	}else{
		uni.unPreloadPage({
			url: "/pages/" + url + param,
			success(){
				// console.log('销毁成功')
			},
			fail(err){
				// console.log(err)
			}
		})
	}
}
export default {
	$next,
	$tab,
	$back,
	$un
}