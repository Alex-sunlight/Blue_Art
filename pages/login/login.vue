<template>
	<view class="pages-login">
		<br>
		<br>
		<br>
		<br>
		<h3 style="width: 100%;text-align: left;margin-left: 20%;color: #fff;">邮箱账号</h3>
		<br>
		<input class="uni-input"  focus v-model="email" />
		<br>
		<br>
		<h3 style="width: 100%;text-align: left;margin-left: 20%;color: #fff;">登录密码</h3>
		<br>
		<input class="uni-input"  password  v-model="password" />
		<h6 @tap="onFind()" style="width: 100%;text-align: right;margin-right: 30%;color: #fff;margin-top: 10rpx;">忘记密码？</h6>
		<br>
		<br>
		<br>
		<button @click="onSend()" type="primary" class="login_bt">登录</button>
		<h6 @click="toRegister()" style="width: 100%;text-align: center;color: #007aff;margin-top: 10rpx;">立即注册</h6>
		<!-- <view class="lang-box" @tap="onCheckLang">
			<image class="lang-icon" v-if="langType=='zh_CN'" src="/static/ch.png" mode=""></image>
			<image class="lang-icon" v-if="langType=='en_US'" src="/static/us.png" mode=""></image>
		</view> -->
	</view>


</template>
<script>
	const app = getApp().globalData;
	export default {
		data() {
			return {
				email: '',
				password: "",
				type: 0,
				code: "",
				codeStr: "发送验证码",
				timer: "",
				la: {},
				langType: 'en_US',
				confirmPassword: "",
				inviteCode: "",
				getHwhLang
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

			app.$post('user/register', {
					sss: 1
				})
				.then(res => {
					console.log(res)
				})
		},
		methods: {

			onFind() {
				app.$next('pages/register/register');
				uni.navigateTo({
					url: '../register/register'
				});
			},
			onInviteCode(ev) {
				this.inviteCode = ev.detail.value;
			},
			onConfirmPsw(ev) {
				this.confirmPassword = ev.detail.value;
			},
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
								url: '/pages/drive/drive'
							})

						}
						// if(res.data.status == 1){
						// 	this.password = '';
						// 	this.confirmPassword = '';
						// 	this.code = '';
						// 	this.inviteCode ='';
						// 	this.onType(0)
						// }
					})
			},
			onCheckLang() {
				if (this.langType == 'en_US') {
					this.langType = 'zh_CN';
				} else {
					this.langType = 'en_US';
				};
				uni.setStorageSync('langType', this.langType);
				app.currentLang2 = this.langType;
				this.la = app.getHwhLang();
				if (this.codeStr * 0 != 0) {
					//不是数字
					this.codeStr = this.la.active5;
				}
				// 

			},
			onCode(ev) {
				this.code = ev.detail.value;
			},
			onType(type) {
				// uni.request({
				//     url:'http://pv.sohu.com/cityjson?ie=utf-8',
				// 	method:'POST',
				// 	success: (res) => {
				//         const reg = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
				// 		let ip = reg.exec(res.data);
				// 		console.log('打印ip地址',ip[0]);
				// 	}
				// })

				this.type = type
			},
			onEmail(ev) {
				this.email = ev.detail.value;
			},
			onPsw(ev) {
				this.password = ev.detail.value;
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
			getCode() {
				this.$refs.code.blur();
				this.$refs.email.blur();
				this.$refs.password.blur();
				const isEmail = this.isEmail(this.email);
				if (this.email == '') {
					app.$tips(this.la.give2);
					return
				} else if (!isEmail) {
					app.$tips(this.la.give3)
					return
				}

				if (this.codeStr == this.la.active5) {
					//API
					uni.showLoading({
						mask: true
					});
					const data = {
						email: app.secret(this.email)
					};
					//登录验证码
					app.$post('user/sendEmail', data)
						.then(res => {
							console.log(res, '请求');
							app.$tips(res.data.info);
							if (res.data.status == 1) {
								this.codeStr = 59;
								this.getCodeTime();
							}
						})
				} else {
					app.$tips(this.la.login8)
				}
			},
			getCodeTime() {
				clearInterval(app.timer)
				this.timer = setInterval(() => {
					this.codeStr--;
					if (this.codeStr <= 0) {
						app.codeNum = 60;
						this.codeStr = this.la.active5;
						clearInterval(this.timer)
					};
				}, 1000)
			},
			onSendCode() {
				const isEmail = this.isEmail(this.email);
				if (!this.email) {
					app.$tips(this.la.give2)
					return
				} else if (!isEmail) {
					app.$tips(this.la.give3)
					return
				} else if (!this.code) {
					app.$tips(this.la.login9)
					return
				}
				const data = {
					code: app.secret(this.code),
					email: app.secret(this.email)
				};
				uni.showLoading({
					mask: true
				});
				app.$post('user/loginCode', data)
					.then(res => {
						uni.hideLoading();
						console.log('登录:', res);

						if (res.data.status == 1) {
							this.code = '';
							uni.setStorageSync('token', res.data.result.token);
							app.getUserInfo()
							if (res.data.result.status == 1) {
								app.$next('index/active/active');
							} else if (res.data.result.status == 2) {
								uni.reLaunch({
									url: '/pages/drive/drive'
								})
							}

						}
					})
			},
			// 登录
			onSend() {
				const isEmail = this.isEmail(this.email);
				if (!this.email) {
					app.$tips(this.la.give2)
					return
				} else if (!isEmail) {
					app.$tips(this.la.give3)
					return
				} else if (!this.password) {
					app.$tips(this.la.login10)
					return
				}
				const data = {
					password: app.secret(this.password),
					email: app.secret(this.email)
				};
				console.log(this.password, this.email)
				uni.showLoading({
					mask: true
				});
				app.$post('user/loginPass', data)
					.then(res => {
						uni.hideLoading();
						console.log('登录:', res);
						app.$tips(res.data.info);
						if (res.data.status == 1) {
							this.password = '';
							uni.setStorageSync('token', res.data.result.token);
							// const ooo = uni.getStorageSync('token');
							// 	console.log(ooo,'打印token')
							app.getUserInfo()
							if (res.data.result.status == 1) {
								app.$next('index/active/active');
							} else if (res.data.result.status == 2) {
								uni.reLaunch({
									url: '/pages/drive/drive'
								})
							};

						}
					})
			},
		}
	}
</script>

<style lang="scss">
	.pages-login {
		width: 100%;
		min-height: 100vh;
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
	.login_bt{
		width: 500rpx;
		font-size: 30rpx;
		border-radius: 10px;
	}
</style>
