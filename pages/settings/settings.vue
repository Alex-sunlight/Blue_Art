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
			<view @tap="SecuritySettings()" class="to_order">
				<view class="order">
					<view class="">
						安全设置
					</view>
				</view>
				<uni-icons type="forward" size="20" color="#fff"></uni-icons>
			</view>
			<view style="width: 90%;margin: 20rpx auto; height: 0.5px;background-color: #fff;opacity: 0.5;">
				<!-- 线条 -->
			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp().globalData
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
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
		background-color: #3972ab;
	}

	.settingsBox {
		width: 600rpx;
		height: 500rpx;
		border-radius: 20rpx;
		background-color: #3e7cba;
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
