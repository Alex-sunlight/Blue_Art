<template>
	<view class="pages-reset">
		<br>
		<br>
		<br>
		<br>
		<h3 style="width: 100%;text-align: left;margin-left: 20%;color: #fff;">{{la.login1}}</h3>
		<br>
		<input type="text" ref="email" class="uni-input" :placeholder="la.enter" @input="onEmail" v-model="email" />
		<br>
		<br>
		<h3 style="width: 100%;text-align: left;margin-left: 20%;color: #fff;">{{la.login2}}</h3>
		<br>
		<input class="uni-input" password ref="password" :placeholder="la.enter" @input="onPsw" v-model="password" />
		<br>
		<br>
		<h3 style="width: 100%;text-align: left;margin-left: 20%;color: #fff;">{{la.login12}}</h3>
		<br>
		<input class="uni-input" @input="onConfirmPsw" :placeholder="la.enter" ref="password" password
			v-model="confirmPassword" />
		<br>
		<br>
		<h3 style="width: 100%;text-align: left;margin-left: 20%;color: #fff;">{{la.login5}}</h3>
		<br>
		<view style="position: relative;;" class="">
			<input type="digit" ref="code" class="uni-input" password v-model="code" @input="onCode"
				:placeholder="la.enter" >
				<view style="position: absolute;top: 10rpx;right: 10rpx;color: #fff;" class="code-btn" @tap="getCode">
					<text class="code-btn-txt">{{codeStr}}</text>
				</view>
		</view>
		<br>
		<br>
		<br>
		<button @click="onRegister()" type="primary" class="login_bt">{{la.login16}}</button>
	</view>
</template>

<script>
	const app = getApp().globalData;
	export default {
		data() {
			return {
				topBackgroundColor:'rgba(255,255,255,0)',
						email:'',
						password:"",
						type:0,
						code:"",
						codeStr:"发送验证码",
						timer:"",
						la:{},
						langType:'en_US',
						confirmPassword:"",
						inviteCode:"",
					}
				},
				onBackPress() {
					app.$un('index/find/find');
					return false;
				},
				onLoad() {
					const langType = uni.getStorageSync('langType');
					if(langType && langType !=''){
						this.langType = langType;
						app.currentLang2 = this.langType;
					};
					this.la = app.getHwhLang();
					this.codeStr= this.la.active5
					this.codeNum = app.codeNum2;
					if(this.codeNum != 60){
						this.codeStr = this.codeNum;
						this.getCodeTime();
					};
				},
		methods: {
			onFind(){
				app.$next('index/find/find');
			},
			onInviteCode(ev){
				this.inviteCode = ev.detail.value;
			},
			onConfirmPsw(ev){
				this.confirmPassword = ev.detail.value;
			},
			onRegister(){
				
				const isEmail = this.isEmail(this.email);
				if(this.email == ''){
					app.$tips(this.la.give2);
					return
				}else if(!isEmail){
					app.$tips(this.la.give3)	
					return
				}else if(!this.password){
					app.$tips(this.la.login10)
					return
				}else if(this.password != this.confirmPassword){
					app.$tips(this.la.login13)
					return
				}else if(!this.code){
					app.$tips(this.la.login9)
					return
				}
				const data = {
					email:app.secret(this.email),
					code:app.secret(this.code),
					pwd:app.secret(this.password),
				};
				console.log(data);
				uni.showLoading({mask:true});
				app.$post('user/findPwd',data)
				.then(res=>{
					console.log(res)
					app.$tips(res.data.info)
					if(res.data.status == 1){
						this.password = '';
						this.confirmPassword = '';
						this.code = '';
						this.inviteCode ='';
						setTimeout(()=>{
							uni.navigateBack()
						},500)
					}
				})
			},
			onCheckLang(){
				if(this.langType == 'en_US'){
					this.langType = 'zh_CN';
				}else{
					this.langType = 'en_US';
				};
				uni.setStorageSync('langType',this.langType);
				app.currentLang2 = this.langType;
				this.la = app.getHwhLang();
				if(this.codeStr*0!=0){
					//不是数字
					this.codeStr= this.la.active5;
				}
				// 
				
			},
			onCode(ev){
				this.code = ev.detail.value;
			},
			onType(type){
				this.type = type
			},
			onEmail(ev){
				this.email = ev.detail.value;
			},
			onPsw(ev){
				this.password = ev.detail.value;
			},
			isEmail(str) {
			    if(str.indexOf('@') == -1){
			    	return false
			    }else{
			    	return true
			    }
			},
			getCode(){
				
				const isEmail = this.isEmail(this.email);
				if(this.email == ''){
					app.$tips(this.la.give2);
					return
				}else if(!isEmail){
					app.$tips(this.la.give3)
					return
				}
				
				if(this.codeStr == this.la.active5){
				 //API
					uni.showLoading({mask:true});
					 const data ={
						 email:app.secret(this.email)
					 };
					 //登录验证码
					app.$post('user/sendEmailPwd',data)
					.then(res=>{
						console.log(res);
						app.$tips(res.data.info);
						if(res.data.status == 1){
							this.codeStr = 59;
							this.getCodeTime();
						}
					})
				}else{
					app.$tips(this.la.login8)
				}
			},
			getCodeTime(){
				clearInterval(app.timer)
				this.timer = setInterval(()=>{
					this.codeStr --;
					if(this.codeStr <= 0){
						app.codeNum2 = 60;
						this.codeStr = this.la.active5;
						clearInterval(this.timer)
					};
				},1000)
			},
			onSendCode(){
				const isEmail = this.isEmail(this.email);
				if(!this.email){
					app.$tips(this.la.give2)
					return
				}else if(!isEmail){
					app.$tips(this.la.give3)
					return
				}else if(!this.code){
					app.$tips(this.la.login9)
					return
				}
				const data ={
					code:app.secret(this.code),
					email:app.secret(this.email)
				};
				uni.showLoading({mask:true});
				app.$post('user/loginCode',data)
				.then(res=>{
					uni.hideLoading();
					console.log('登录:',res);
					
					if(res.data.status == 1){
						this.code = '';
						uni.setStorageSync('token',res.data.result.token);
						app.getUserInfo()
						if(res.data.result.status == 1){
							app.$next('index/active/active');
						}else if(res.data.result.status == 2){
							uni.reLaunch({
								url: '../index/index'
							})
						}
						
					}
				})
			},
			onSend(){
				const isEmail = this.isEmail(this.email);
				if(!this.email){
					app.$tips(this.la.give2)
					return
				}else if(!isEmail){
					app.$tips(this.la.give3)
					return
				}else if(!this.password){
					app.$tips(this.la.login10)
					return
				}
				const data ={
					password:app.secret(this.password),
					email:app.secret(this.email)
				};
				console.log(this.password,this.email)
				uni.showLoading({mask:true});
				app.$post('user/loginPass',data)
				.then(res=>{
					uni.hideLoading();
					console.log('登录:',res);
					app.$tips(res.data.info);
					if(res.data.status == 1){
						this.password = '';
						uni.setStorageSync('token',res.data.result.token);
						app.getUserInfo()
						if(res.data.result.status == 1){
							app.$next('index/active/active');
						}else if(res.data.result.status == 2){
							uni.reLaunch({
								url: '../index/index'
							})
						};
					
					}
				})
			},
		},
	}
</script>

<style lang="scss">
	.pages-reset {
		width: 100%;
		min-height: 100vh;
		padding-bottom: 200rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #3972ab;
	}

	.uni-input {
		width: 500rpx;
		height: 60rpx;
		color: #fff;
		border: 2px solid #fff;
		border-radius: 10px;
	}

	.login_bt {
		width: 500rpx;
		font-size: 30rpx;
		border-radius: 10px;
	}
</style>
