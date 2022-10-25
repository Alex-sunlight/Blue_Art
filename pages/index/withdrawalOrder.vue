<template>
	<!-- 提现 -->
	<view class="pages-recharge">
		<select name="" id="">
			<option value="">全部订单</option>
			<option value="">审核中</option>
			<option value="">到账成功</option>
			<option value="">拒绝审核</option>
		</select>
		<view class="prepaidList" v-if="prepaidStatus">
			<view class="uAegisList">
				<image src="../../static/image/usdt.png" mode=""></image>
				<view class="uDun">
					<text>
						U盾充值
					</text>
					<text>
						2022-10-22 10:45:52
					</text>
				</view>
				<view class="priceStatus">
					<text>
						300
					</text>
					<text>
						已取消
					</text>
				</view>
			</view>
		</view>
		
		<view class="dataNull">
			<image src="../../static/image/kongbox.png" mode=""></image>
			<text>空空如也</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				aegisAmount:0,
				prepaidStatus:false
			}
			
		},
		methods:{
			aegis(){
				uni.navigateTo({
					url: './aegisTopUp'
				});
			},
		}
	}
</script>

<style lang="scss">
	.pages-recharge{
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		// align-items: center;
		background-color: #3972ab;
		select {
			width: 180rpx;
			height: 60rpx;
			margin-top: 20rpx;
			margin-left: 20rpx;
			font-size: 24rpx;
			text-align: center;
			background-color: #7f7f7f;
			color: #fff;
			border-radius: 12rpx;
			option {
				width: 100%;
				height: 30rpx;
				color: #c0c0c0;
				background-color: #000;
			}
		}
		.prepaidList {
			width: 100%;
			margin-top: 40rpx;
			display: flex;
			flex-wrap: wrap;
			// background-color: #dee1e6;
			// margin: 0 auto;
			// border: 1px solid red;
			.uAegisList {
				width: 90%;
				margin: 10rpx auto;
				height: 120rpx;
				display: flex;
				border: 1px solid #c0c0c0;
				border-radius: 8rpx;
				image {
					width: 85rpx;
					height: 85rpx;
					margin-left: 10rpx;
					margin-top: 10rpx;
					// border: 1px solid red;
				}
				.uDun {
					width: 300rpx;
					height: 85rpx;
					margin-left: 10rpx;
					margin-top: 10rpx;
					display: flex;
					flex-wrap: wrap;
					// border: 1px solid red;
					text {
						width: 100%;
						height: 40rpx;
						line-height: 40rpx;
						font-size: 24rpx;
						color: #fff;
						// border: 1px solid green;
					}
					text:nth-of-type(2) {
						color: #b2b2b2;
					}
				}
				.priceStatus {
					width: 220rpx;
					height: 100rpx;
					display: flex;
					flex-wrap: wrap;
					margin-left: 20rpx;
					margin-top: 10rpx;
					// border: 1px solid deepskyblue;
					text {
						width: 100%;
						height: 50rpx;
						font-size: 24rpx;
						color: #fff;
						// border: 1px solid red;
					}
					text:nth-of-type(1) {
						font-size: 32rpx;
						font-weight: 600;
						line-height: 50rpx;
						text-align: right;
					}
					text:nth-of-type(2) {
						height: 40rpx;
						line-height: 40rpx;
						text-align: right;
						color: #b2b2b2;
						// border: 1px solid pink;
					}
				}
			}
		}
		.dataNull {
			width: 99%;
			margin: 0 auto;
			// display: flex;
			// flex-wrap: wrap;
			margin-top: 30rpx;
			min-height: 1200rpx;
			// border: 1px solid red;
			image {
				display: block;
				width: 100rpx;
				height: 100rpx;
				margin-left: 50%;
				margin-top: 50%;
				transform: translateX(-50%);
				// border: 1px solid red;
			}
			text {
				display: block;
				width: 150rpx;
				height: 60rpx;
				text-align: center;
				margin-left: 50%;
				font-size: 24rpx;
				line-height: 60rpx;
				color: #fff;
				// margin-top: 10%;
				transform: translateX(-50%);
				// border: 1px solid red;
			}
		}
	}
	

	
</style>