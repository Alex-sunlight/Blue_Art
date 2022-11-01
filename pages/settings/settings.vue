<template>
	<view class="pages-settings">
		<view class="settingsBox">
			<!-- 资料设置 -->
			<view @tap="ProfileSettings()" class="to_order">
				<view class="order">
					<view class="">
						资料设置
					</view>
				</view>
				<uni-icons type="forward" size="20" color="#fff"></uni-icons>
			</view>
			<view style="width: 90%;margin: 20rpx auto; height: 0.5px;background-color: #fff;opacity: 0.5;">
				<!-- 线条 -->
			</view>
			<!-- 安全设置 -->
			<!-- 线条 -->
			<!-- <view @tap="SecuritySettings()" class="to_order">
				<view class="order">
					<view class="">
						安全设置
					</view>
				</view>
				<uni-icons type="forward" size="20" color="#fff"></uni-icons>
			</view>
			
			<view style="width: 90%;margin: 20rpx auto; height: 0.5px;background-color: #fff;opacity: 0.5;">
				
			</view> -->
			
		</view>
		<view class="logOut" @click="outLogin()">
			退出登录
		</view>
	</view>
</template>

<script>
	const app = getApp().globalData
		import {mapMutations} from 'vuex'
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			...mapMutations(['loginOut']),
			// 资料设置
			ProfileSettings() {
				uni.navigateTo({
					url: './ProfileSettings'
				});
			},
			// 安全设置
			SecuritySettings() {
				uni.navigateTo({
					url: './SecuritySettings'
				});
			},
			// 退出登录
			outLogin(){
				uni.removeStorageSync('userInfo')
				this.loginOut()
				const res = this.loginOut;
				if(res){
					uni.showToast({
						title:'退出成功',
						icon:'none'
					})
					console.log('退出测试');
					// this.loginOut();
					setTimeout(()=>{
							uni.switchTab({
								url:'../../pages/index/index'
							})
					},1000)
				}
				
			}
		},
	}
</script>

<style lang="scss">
	.pages-settings {
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #24315e;
	}

	.settingsBox {
		width: 600rpx;
		height: 180rpx;
		margin-top: 80rpx;
		border-radius: 20rpx;
		background-color: #2f3d6e;
	}
	.logOut {
		width: 600rpx;
		height: 80rpx;
		margin: 0 auto;
		margin-top: 100rpx;
		line-height: 80rpx;
		text-align: center;
		color: #fff;
		font-size: 28rpx;
		// border: 1px solid red;
		border-radius: 12rpx;
		background-color: #13b5db;
	}
	.to_order {
		margin-top: 40rpx;
		padding: 0 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.order {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
	}
</style>
