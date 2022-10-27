<template>
	<!-- 提现 -->
	<view class="pages-recharge">
		<view class="select">
				<option value="">全部订单</option>
		</view>
		<!-- <select name="" id="">
			<option value="">全部订单</option>
			<option value="">审核中</option>
			<option value="">到账成功</option>
			<option value="">拒绝审核</option>
		</select> -->
		<view class="prepaidList">
			<view class="uAegisList" @click="prepiDetails(item)" v-for="(item, index) in prepaidDataList" :key = "index">
				<image src="../../static/image/usdt.png" mode=""></image>
				<view class="uDun">
					<text>
						U盾充值
					</text>
					<text>
						{{item.create_at}}
					</text>
				</view>
				<view class="priceStatus">
					<text>
						{{item.ys_amount}}
					</text>
					<text v-if="item.status == 0">
						待充值
					</text>
					<text v-if="item.status == 1">
						充值成功
					</text>
					<text v-if="item.status == 2">
						取消充值
					</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
		const app = getApp().globalData;
	export default {
		data() {
			return {
				aegisAmount:0,
				prepaidDataList:null
			}
			
		},
		onLoad() {
			// this.queryOrder()
			this.prepaidList()
		},
		methods:{
			aegis(){
				uni.navigateTo({
					url: './aegisTopUp'
				});
			},
			// 获取充值订单列表
			prepaidList(){
				app.$get('wallet/WithdrawLog')
					.then(res => {
						console.log('获取充值订单列表', res.data.result);
						// address
						this.prepaidDataList = res.data.result.data
					})
			},
			// 充值订单详情
			prepiDetails(val){
				let datas = {
					amount:val.amount,
					fee:val.fee,
					actual:val.actual,
					trans_hash: val.trans_hash,
					status:val.status,
					address:val.address
					// create_at:val.create_at,
					// currency_id:val.amount,
					// fee:val.fee,
					// id:val.id,
					// ordersn:val.ordersn,
					
					// tradeId:val.tradeId,
					
					// user_id:val.user_id,
					// wallet_id:val.wallet_id,
					// ys_amount:val.ys_amount
				}
				// JSON.stringify(res.data.result.data.address)
				uni.navigateTo({
					url: '../../pages/index/uWithdrawalOrder?data='+JSON.stringify(datas)
				});
			}
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
		.select {
			width: 180rpx;
			height: 60rpx;
			line-height: 60rpx;
			margin-top: 20rpx;
			margin-left: 20rpx;
			font-size: 24rpx;
			text-align: center;
			background-color: #7f7f7f;
			color: #fff;
			border-radius: 12rpx;
			// option {
			// 	width: 100%;
			// 	height: 30rpx;
			// 	color: #c0c0c0;
			// 	background-color: #000;
			// }
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
	}
	

	
</style>