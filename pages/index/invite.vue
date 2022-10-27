<template>
	<view class="pages-invite">
		<view class="inviteBox">
			<view class="nviteImg">
				<image :src="user.avatar" class="img"></image>
				<h5>{{user.nickname}}</h5>
			</view>
			<image :src="erWeiMaData.qrcode" @longtap="longtap" class="erWeiMa" mode=""></image>
			<view class="tuiGuan">
				<span>推广码:</span>{{user.invite_code}}
			</view>
			<view class="faxian">
				发现你热爱的艺术品
			</view>
			<view class="faxian faxians">
				扫码下载APP,搜索有趣的艺术品
			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp().globalData;
	export default {
		data() {
			return {
				user: '',
				erWeiMaData: ''
			}

		},
		onLoad() {
			this.getInformation()
			this.getErWeiMa()
		},
		methods: {
			// 获取个人信息
			getInformation() {
				app.$get('userCenter/userInfo')
					.then(res => {
						console.log('获取个人信息1', res.data);
						console.log('获取个人信息', res.data.result);
						if (res.data.status == 1) {
							this.user = res.data.result;
						}

					})

			},
			// 获取二维码
			getErWeiMa() {
				app.$get('userCenter/GetInviteInfo')
					.then(res => {
						console.log('获取二维码1', res.data);
						// console.log('获取个人信息', res.data.result);
						if (res.data.status == 1) {
							// this.user = res.data.result;
							this.erWeiMaData = res.data.result
						}

					})
			},
			// 保存分享二维码
			longtap() {
				uni.downloadFile({
					url: this.erWeiMaData.qrcode,
					success: (res) => {
						if (res.statusCode === 200) {
							uni.saveImageToPhotosAlbum({
								filePath: res.tempFilePath,
								success: function() {
									uni.showToast({
										title: "保存成功",
										duration: 2000
									});
								},
								fail: function() {
									uni.showToast({
										title: "保存失败，请稍后重试",
										icon: "none"
									});
								}
							});
						}
					}
				})
			},
		}
	}
</script>


<style lang="scss">
	.pages-invite {
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #3972ab;
	}

	.inviteBox {
		// position: relative;
		width: 600rpx;
		// height: 800rpx;
		border-radius: 20rpx;
		margin-top: 150rpx;
		background-color: #3e7cba;

		.erWeiMa {
			margin: 0 auto;
			margin-top: 40rpx;
			margin-left: 50%;
			transform: translateX(-50%);
			width: 380rpx;
			height: 380rpx;
			// border: 1px solid red;
		}

		.tuiGuan {
			width: 320rpx;
			height: 60rpx;
			line-height: 60rpx;
			font-weight: 600;
			font-size: 28rpx;
			display: flex;
			margin: 30rpx auto;
			// margin-bottom: 20rpx;
			background-color: #d0d9fa;
			border-radius: 8rpx;

			// border: 1px solid red;
			span {
				width: 130rpx;
				height: 58rpx;
				line-height: 58rpx;
				text-align: center;
				font-size: 28rpx;
				font-weight: 600;
				// border: 1px solid red;
			}
		}

		.faxian {
			width: 220rpx;
			height: 40rpx;
			margin: 0 auto;
			line-height: 40rpx;
			// font-weight: 600;
			font-size: 24rpx;
			color: #a5b0ce;
			// border: 1px solid red;
		}

		.faxians {
			width: 380rpx;
			height: 60rpx;
			text-align: center;
			line-height: 60rpx;
			font-size: 24rpx;
			
		}
	}

	.nviteImg {
		// position: absolute;
		margin-top: -80rpx;
		// left: 40%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		// border: 1px solid red;
		h5 {
			margin-top: 20rpx;
		}
	}

	.img {
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
	}
</style>
