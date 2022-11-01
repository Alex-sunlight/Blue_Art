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
		<input class="inp" type="text" placeholder="请输入提现地址" v-model="awalAddress">
		<text class="network">
			提现金额
		</text>
		<view class="withdrawalAmount">
			<view class="tiXian">
				<input type="text" placeholder="请输入金额" v-model="aegisAmount" @blur="topupAmount()">
				<text @click="allWithdrawal()">全部提现</text>
			</view>
			<view class="tiXians">
				<text>可提现的余额</text>
				<text>{{balance}}</text>
			</view>
			<view class="tiXians tiXiansg">
				<text>手续费</text>
				<view>
				<text class="shouXu">{{this.withdrawType == 1? this.withdraw:this.withdraw*this.aegisAmount}}</text>
				<text class="usdts">USDT</text>
				</view>
				
			</view>
		</view>
		<view class="submitAudit" @click="audit()">
			提交审核
		</view>
	</view>
</template>

<script>
	const app = getApp().globalData;
	export default {
		data() {
			return {
				aegisAmount: 0,
				rechargeData: null,
				aegisAmount: 0,
				withdraw: 0,
				withdrawType: 0,
				withdraws: 0,
				// 可用余额
				balance: 0,
				awalAddress: ''
			}

		},
		onLoad() {
			this.awalLimit()
			this.theAsset()
		},
		methods: {
			aegis() {
				uni.navigateTo({
					url: './aegisTopUp'
				});
			},
			// 获取提现下限及手续费
			awalLimit() {
				app.$get('wallet/moneyConfig')
					.then(res => {
						console.log('获取充值或提现配置', res.data.result.config);
						// 提现下限
						this.rechargeData = res.data.result.config[0].withdraw_lower_limit
						// 提现手续费 withdraw_fee_type
						this.withdraw = res.data.result.config[0].withdraw_fee
						// 手续费类型
						this.withdrawType = res.data.result.config[0].withdraw_fee_type
						
						// if(this.withdrawType == 1){
						// 	this.withdrawNumber = this.withdraw
						// }else {
						// 	this.withdraw =this.withdraw*this.aegisAmount
						// 	this.withdrawNumber =  Math.round(this.withdraw)
						// }
						
						console.log('获取提现下限', this.rechargeData);

					})


			},
			// 提现金额对比提现下限
			topupAmount() {
				if (this.aegisAmount < this.rechargeData) {
					uni.showToast({
						title: '提现金额小于提现下限',
						duration: 2000,
						icon: 'none'
					})
					this.aegisAmount = 0;
				}
			},
			// 获取可用余额
			theAsset() {
				app.$get('userCenter/getMyBalance')
					.then(res => {
						console.log('查询个人资产', res.data.result);
						// this.totalAssets = res.data.result.data.all_money;
						// 可用余额
						this.balance = res.data.result.data.can_money;

						// this.balance =8

						// if(res.data.result.flag == 1) {
						// 	uni.navigateTo({
						// 		url: './addressReceipt'
						// 	});
						// }
						// if(res.data.result.flag == 2) {

						// }
					})
			},
			// 全部提现
			allWithdrawal() {
				console.log('11111');
				// this.aegisAmount=this.balance;
				if (this.balance < this.rechargeData) {
					uni.showToast({
						title: '提现金额小于提现下限',
						duration: 2000,
						icon: 'none'
					})
					this.aegisAmount = 0;
					return false
				} else {
					this.aegisAmount = this.balance;
				}
			},
			// 提交审核
			audit() {
				if (this.aegisAmount == 0) {
					uni.showToast({
						title: '提现金额小于提现下限',
					 duration: 2000,
						icon: 'none'
					})
					return false
				}
				if (this.awalAddress == '') {
					uni.showToast({
						title: '提现地址不能为空',
						duration: 2000,
						icon: 'none'
					})
					return false
				}
				const data = {
					num: this.aegisAmount,
					address: this.awalAddress
				};
				app.$post('wallet/withdraw', data)
					.then(res => {
						console.log('打印提现', res.data);
						if(res.data.status ==1) {
							uni.showToast({
							    title: res.data.info,
							    duration: 500,
								icon:'none'
							})
							setTimeout(()=>{
								uni.switchTab({
									url: './index'
								});
							},1000)
						}
						// 	uni.navigateTo({
						// 		url: '../../pages/index/addressReceipt?data='+JSON.stringify(datas)
						// 	});
						// 	uni.hideLoading();
						// }
					})
			},
			// 
		}
	}
</script>

<style lang="scss">
	.pages-recharge {
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		// align-items: center;
		background-color: #2f3d6e;

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
			height: 80rpx;
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
					span {
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

				view {

					width: 140rpx;
					color: #fff;
					display: flex;
					
					// span {
					// 	color: #8f8f8f;
					// }
					// border: 1px solid red;
					text {
						
							// display: inline-block;
							width: 110rpx;
							overflow: hidden;
							color: #fff;
							// border: 1px solid red;
						
					}
					.usdts {
						color: #fff;
						text-align: left;
										// display: inline-block;
										// margin-top: -90rpx;
										// border: 1px solid red;
									}
				}
				// .shouXu {
				// 	display: inline-block;
				// 	width: 50rpx;
				// 	overflow: hidden;
				// 	border: 1px solid red;
				// }
				// .usdts {
				// 	display: inline-block;
				// 	margin-top: -90rpx;
				// 	border: 1px solid red;
				// }
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
