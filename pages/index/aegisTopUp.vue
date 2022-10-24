<template>
	<view class="pages-recharge">
		<view class="TopupAmount">
			<text>充值金额</text>
			<text>300</text>
			<image src="../../static/image/usdt.png" mode=""></image>
		</view>
		<text class="configuration">正在配置U盾充值地址</text>
		<text class="prompt">
			配置地址需要时间,请在此界面停留1-15分钟后点击刷新
		</text>
		<view class="btn" @click="aegis()">
			刷新
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			aegis(){
				uni.navigateTo({
					url: './addressReceipt'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pages-recharge{
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #3972ab;
		.TopupAmount {
			margin-top: 0px auto;
			width: 90%;
			height: 90rpx;
			display: flex;
			margin-top: 30rpx;
			border: 1px solid #c0c0c0;
			border-radius: 6px;
			text {
				width: 180rpx;
				height: 80rpx;
				margin-top: 4rpx;
				text-align: center;
				line-height: 80rpx;
				font-size: 30rpx;
				color: #c0c0c0;
				// border: 1px solid red;
			}
			text:nth-of-type(1){
				margin-left: 120rpx;
			}
			text:nth-of-type(2) {
				width: 160rpx;
				text-align: left;
				font-size: 36rpx;
				color: #fff;
			}
			image {
				width: 60rpx;
				height: 60rpx;
				margin-top: 10rpx;
				// border: 1px solid red;
			}
		}
		.configuration {
			width: 90%;
			height: 50rpx;
			line-height: 50rpx;
			margin-top: 20rpx;
			text-align: center;
			font-size: 26rpx;
			color: #c0c0c0;
			// border: 1px solid red;
		}
		.prompt {
			width: 90%;
			height: 90rpx;
			line-height: 40rpx;
			margin-top: 20rpx;
			text-align: left;
			font-size: 32rpx;
			color: #fff;
			// border: 1px solid red;
		}
		.btn {
			margin: 0 auto;
			// position: fixed;
			// bottom: 5%;
			width: 90%;
			height: 80rpx;
			margin-top: 30rpx;
			text-align: center;
			font-size: 16px;
			line-height: 80rpx;
			color: #fff;
			background-color: #00FFFF;
			// border: 1px solid red;
			border-radius: 6px;
		}
		}
</style>