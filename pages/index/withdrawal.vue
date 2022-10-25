<template>
	<!-- 提现 -->
	<view class="pages-recharge">
		<view class="withdrawal">
			<image src="../../static/image/usdt.png" mode=""></image>
			<text>USDT</text>
		</view>
		<text class="network">
			提现网络
		</text>
		<view class="usdt">
			USDT-TRC20
		</view>
		<text class="network">
			提现地址
		</text>
		<input class="inp" type="text" placeholder="请输入提现地址">
		<text class="network">
			提现金额
		</text>
		<view class="withdrawalAmount">
			<view class="tiXian">
				<input type="text" placeholder="请输入金额">
				<text>全部提现</text>
			</view>
			<view class="tiXians">
				<text>可提现的余额</text>
				<text>0</text>
			</view>
			<view class="tiXians tiXiansg">
				<text>手续费</text>
				<text>0 <span>USDT</span></text>
			</view>
		</view>
		<view class="submitAudit">
			提交审核
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				aegisAmount:0
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
		.withdrawal {
			margin: 0 auto;
			margin-top: 20rpx;
			width: 90%;
			height: 90rpx;
			display: flex;
			// border: 1px solid red;
			// background-color: #0088A8;
			image {
				width: 70rpx;
				height: 70rpx;
				margin-top: 10rpx;
				// border: 1px solid red;
			}
			text {
				width: 100rpx;
				height: 88rpx;
				line-height: 90rpx;
				margin-left: 20rpx;
				color: #fff;
				font-size: 28rpx;
				// border: 1px solid red;
			}
		}
		.network {
			margin: 0 auto;
			margin-top: 40rpx;
			width: 90%;
			color: #fff;
			font-size: 28rpx;
		}
		.usdt {
			
			width: 280rpx;
			height: 80rpx;
			line-height: 80rpx;
			margin-left: 40rpx;
			margin-top: 30rpx;
			text-align: center;
			font-size: 28rpx;
			color: #fff;
			border: 1px solid #29a3dd;
			border-radius: 12rpx;
		}
		.inp {
			width: 85%;
			padding-left: 5%;
			height: 180rpx;
			margin: 0 auto;
			margin-top: 40rpx;
			line-height: 30rpx;
			border: 1px solid #c0c0c0;
			border-radius: 12rpx;
		}
		.withdrawalAmount {
			width: 90%;
			margin: 0 auto;
			margin-top: 30rpx;
			height: 280rpx;
			display: flex;
			flex-wrap: wrap;
			border: 1px solid #c0c0c0;
			border-radius: 12rpx;
			.tiXian {
				width: 95%;
				height: 80rpx;
				display: flex;
				justify-content: space-between;
				margin-left: 20rpx;
				// border: 1px solid red;
				input {
					width: 300rpx;
					height: 78rpx;
					line-height: 78rpx;
					font-size: 28rpx;
					color: #fff;
					// border: 1px solid green;
				}
				text {
					width: 150rpx;
					height: 78rpx;
					font-size: 28rpx;
					line-height: 78rpx;
					text-align: center;
					color: #fbc21d;
					// border: 1px solid green;
				}
			}
			.tiXians {
				width: 95%;
				height: 80rpx;
				display: flex;
				justify-content: space-between;
				margin-left: 20rpx;
				// border: 1px solid red;
				text {
					width: 300rpx;
					height: 78rpx;
					line-height: 78rpx;
					font-size: 28rpx;
					color: #8f8f8f;
					// border: 1px solid green;
					span{	
							margin-left: 10rpx;
							font-size: 28rpx;
					}
				}
				text:nth-of-type(2) {
					width: 180rpx;
					text-align: center;
					color: #d8d8d8;
				}
			}
			.tiXiansg {
				text {
						color: #8f8f8f;
				}
				text:nth-of-type(2) {
					
					color: #8f8f8f;
				}
			}
		}
		.submitAudit {
			width: 90%;
			height: 80rpx;
			margin: 0 auto;
			margin-top: 80rpx;
			text-align: center;
			line-height: 80rpx;
			font-size: 28rpx;
			color: #fff;
			// border: 1px solid red;
			border-radius: 12rpx;
			background-color: #29a3dd;
		}
	}
	

	
</style>