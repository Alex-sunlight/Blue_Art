<template>
	<view class="pages-ProfileSettings">
		<view class="drawer_assets">
			<uni-section type="line">
				<view class="example-body">
					<uni-file-picker limit="1" :del-icon="false" disable-preview imageStyles="drawer_image"
						file-mediatype="image">
						<image class="drawer_image" src="../../static/image/stake8.png"></image>
					</uni-file-picker>
				</view>
			</uni-section>
			<view class="nameBox">
				<view class="name">
					昵称
				</view>
				<input v-model="nickname" type="text" />
			</view>
			<view style="width: 80%;margin: 20rpx auto; height: 0.5px;background-color: #fff;opacity: 0.5;">
				<!-- 线条 -->
			</view>
			<button class="myButton" type="primary">保存</button>
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
				nickname: 'BlueArt'
			}
		},
		onLoad() {
			this.userInfo()
		},
		methods: {
			// 个人信息
			userInfo() {
				try {
					app.$get('userCenter/userInfo').then(res => {
						if (res.data.status == 1) {
							this.user = res.data.result
							console.log(this.user, '个人信息')
						}
					})
				} catch (e) {
					//TODO handle the exception
				}
			},
			// 修改个人信息
			editInfo() {
				try {
					app.$post('userCenter/editInfo', {
						nickname: this.nickname,
						avatar: ''
					}).then(res => {
						if (res.data.status == 1) {
							console.log(res, '修改个人信息')
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
						image: '',
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
		background-color: #3972ab;
	}

	.drawer_assets {
		width: 600rpx;
		height: 500rpx;
		margin: 20rpx 50rpx;
		padding-top: 30rpx;
		border-radius: 8px;
		background-color: #3e7cba;
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
</style>
