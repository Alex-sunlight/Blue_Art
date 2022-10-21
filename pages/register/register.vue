<template>
	<view class="pages-register">
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
		<h3 style="width: 100%;text-align: left;margin-left: 20%;color: #fff;">{{la.login11}}</h3>
		<br>
		<input class="uni-input" type="text" ref="code" v-model="inviteCode" @input="onInviteCode"
			:placeholder="la.enter" />

		<br>
		<br>
		<br>
		<button @click="onRegister()" type="primary" class="login_bt">{{la.login4}}</button>
		<view class="tap-box" @tap="onType()">
			<text style="width: 100%;text-align: center;color: #007aff;margin-top: 10rpx;">{{la.login7}}</text>
		</view>
	</view>
</template>

<script>
	const app = getApp().globalData;
	export default {
		data() {
			return {
				email: '',
				password: '',
				confirmPassword: '',
				code: '',
				inviteCode: '',
				la: {},
				langType: 'en_US',
				timer:"",
				codeStr:'发送验证码',
			}
		},
		onLoad() {

			const langType = uni.getStorageSync('langType');
			if (langType && langType != '') {
				this.langType = langType;
				app.currentLang2 = this.langType;
			};
			this.la = app.getHwhLang();
			this.codeStr = this.la.active5
			this.codeNum = app.codeNum;
			if (this.codeNum != 60) {
				this.codeStr = this.codeNum;
				this.getCodeTime();
			};
		},
		methods: {
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
					app.$post('user/sendEmail',data)
					.then(res=>{
						console.log(res, '请求');
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
						app.codeNum = 60;
						this.codeStr = this.la.active5;
						clearInterval(this.timer)
					};
				},1000)
			},
			onEmail(ev) {
				this.email = ev.detail.value;
			},
			onPsw(ev) {
				this.password = ev.detail.value;
			},
			onConfirmPsw(ev) {
				this.confirmPassword = ev.detail.value;
			},
			onCode(ev) {
				this.code = ev.detail.value;
			},
			onInviteCode(ev) {
				this.inviteCode = ev.detail.value;
			},
			isEmail(str) {
				if (str.indexOf('@') == -1) {
					return false
				} else {
					return true
				}
				// var reg=/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
				// return reg.test(str);
			},
			// 验证码登录
			onRegister() {

				const isEmail = this.isEmail(this.email);
				if (this.email == '') {
					app.$tips(this.la.give2);
					return
				} else if (!isEmail) {
					app.$tips(this.la.give3)
					return
				} else if (!this.password) {
					app.$tips(this.la.login10)
					return
				} else if (this.password != this.confirmPassword) {
					app.$tips(this.la.login13)
					return
				} else if (!this.code) {
					app.$tips(this.la.login9)
					return
				}
				console.log('app.secret(this.email)', app.secret(this.email));
				const data = {
					email: app.secret(this.email),
					code: app.secret(this.code),
					pwd: app.secret(this.password),
				};
				if (this.inviteCode) {
					data.inviteCode = app.secret(this.inviteCode)
				}
				console.log(data);
				uni.showLoading({
					mask: true
				});
				app.$post('user/register', data)
					.then(res => {
						console.log(res)
						app.$tips(res.data.info);
						if (res.data.status == 1) {
							this.password = '';
							this.confirmPassword = '';
							this.code = '';
							this.inviteCode = '';
							uni.setStorageSync('token', res.data.result.token);
							app.getUserInfo();
							uni.reLaunch({
								url: '../index/index'
							})
						}
					})
			},
			onType() {
				uni.navigateTo({
					url: '../login/login'
				});
			},
		},
	}
</script>

<style lang="scss">
	.pages-register {
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
