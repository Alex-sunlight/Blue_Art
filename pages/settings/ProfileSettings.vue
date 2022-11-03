<template>
	<view class="pages-ProfileSettings">
		<view class="drawer_assets">
			<view class="imageBox">
				<!-- <image @click="xc()" class="drawer_image" :src="avatar"></image> -->
				<uni-file-picker del-icon=false mode="grid" file-extname="png,jpg" :limit="1"
					@progress="progress" @success="success" @fail="fail" @select="selectimg" />
			</view>

			<view class="nameBox">
				<view class="name">
					昵称
				</view>
				<input v-model="nickname" type="text" />
			</view>
			<view style="width: 80%;margin: 20rpx auto; height: 0.5px;background-color: #fff;opacity: 0.5;">
				<!-- 线条 -->
			</view>
			<button @click="save()" class="myButton" type="primary">保存</button>
		</view>
	</view>
</template>

<script>
	const app = getApp().globalData
	export default {
		data() {
			return {
				user: [],
				avatar: "../../static/image/stake8.png",
				nickname: 'BlueArt',
				userInfo:'',
				img_url:'',
				p_url:''
			}
		},
		onLoad() {
			this.userInfo = uni.getStorageSync('userInfo');  
			this.nickname = this.userInfo.nickname
			this.token = uni.getStorageSync('token');  
			if(!this.token) {
				uni.navigateTo({
					url: '../login/login'
				});
				return
			}
		},
		methods: {
			
			// 修改个人信息
			editInfo() {
				try {
					const that = this
					app.$post('userCenter/editInfo', {
						nickname: that.nickname,
						avatar: that.img_url
					}).then(res => {
						if (res.data.status == 1) {
							that.userInfo.avatar = that.p_url
							that.userInfo.nickname = that.nickname
							uni.setStorageSync('userInfo',that.userInfo);  
							console.log(res, '修改个人信息')
							uni.showToast({
							    title: '修改成功',
							    duration: 500,
								icon:'none'
							})
							setTimeout(()=>{
								uni.switchTab({
									url:'../../pages/my/my'
								})
							},1000)
							
							
						}else {
							uni.showToast({
							    title: res.data.info,
							    duration: 500,
								icon:'none'
							})
						}
					})
				} catch (e) {
					//TODO handle the exception
				}
			},
			// 上传头像
			uploadAvatar() {
				try {
					app.$post('userCenter/uploadAvatar', {
						image: this.avatar,
					}).then(res => {
						if (res.data.status == 1) {
							console.log(res, '上传头像')
						}
					})
				} catch (e) {
					//TODO handle the exception
				}
			},
			save() {
				this.editInfo()
			},
			selectimg(callback) {
				console.log('callback', callback)
				let that = this;
				const data = {
					filePath: callback.tempFilePaths[0]
				}
				app.$upload('userCenter/uploadAvatar', data).then(res => {
					console.log('res.data.result.file_url', res)
					if (res.status == 1) {
						that.avatar = res.result.url
						console.log(res, '上传头像')
						that.img_url = res.result.file_url
						that.p_url = res.result.url
					
					}
				})
			},
			uploadImg() {
				console.log('this.headerImage[0]', this.headerImage[0]);
				// let formData = new FormData()
				// formData.append('file', this.headerImage[0])
				// formData.append('type', this.types)
				// // formData.append('file','111')
				// console.log('formData', formData.get('file'));

				try {
					app.$post('userCenter/uploadAvatar', {
						image: this.avatar,
			 	}).then(res => {
						if (res.data.status == 1) {
							console.log(res, '上传头像')
						}
					})
				} catch (e) {
					//TODO handle the exception
				}

			},

		},
	}
</script>

<style lang="scss">
	.pages-ProfileSettings {
		width: 100%;
		min-height: 100vh;
		padding-bottom: 100rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #24315e;
	}

	.drawer_assets {
		width: 600rpx;
		height: 500rpx;
		margin: 20rpx 50rpx;
		padding-top: 30rpx;
		border-radius: 8px;
		background-color: #2f3d6e;
	}

	.imgBox {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.drawer_image {
		width: 150rpx;
		height: 150rpx;
		border: 3px solid #fff;
	}

	.nameBox {
		margin-top: 50rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
	}

	.name {
		margin-right: 50rpx;
		white-space: nowrap;
	}

	.myButton {
		width: 90%;
		margin-top: 50rpx;
		font-size: 15px;
	}

	.example-body {
		padding: 10px;
		padding-top: 0;
	}

	/deep/ .uni-file-picker__container {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.imageBox {
		width: 100%;
		display: flex;
		justify-content: center;
	}
</style>
