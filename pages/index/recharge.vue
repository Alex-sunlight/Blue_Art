<template>
	<!-- U盾充值 -->
	<view class="pages-recharge">
		<h3 class="top-up">充值金额</h3>
		<input class="inp" type="number" placeholder="请输入充值金额" v-model="aegisAmount" @blur="topupAmount()">
		<h3 class="top-up">- U盾充值规则 -</h3>
		<view class="guiZe">
			<text>
				1.充值金额不可低于200USDT.
			</text>
			<text>
				2.请一次性转账您所输入的充值金额,不可多地址或多次转账.
			</text>
			<text>
				3.为了您的资金安全,目前U盾充值单笔最大金额为20000USDT.
			</text>
			<text>
				4.超出或低于限额会到账充值失败,失败财产无法退回.
			</text>
			<text>
				5.U盾充值仅支持波场链TRC20转账.
			</text>
			<text>
				6.本规则最终解释权由REVA所有.
			</text>
		</view>
		<view class="btn" @click="aegis()">
			申请地址
		</view>
	</view>
</template>

<script>
		const app = getApp().globalData;
	export default {
		data() {
			return {
				aegisAmount:0,
				rechargeData:null,
			}
			
		},
		onLoad() {
			// this.queryOrder()
			this.accessPrepaid()
		},
		methods:{
			
			// 获取充值或提现配置
			accessPrepaid(){
				app.$get('wallet/moneyConfig')
						.then(res => {
							console.log('获取充值或提现配置',res.data.result.config[0].recharge_lower_limit);
							this.rechargeData = res.data.result.config[0].recharge_lower_limit
							console.log('获取充值下限',this.rechargeData);
							// if(res.data.result.flag == 1) {
							// 	uni.navigateTo({
							// 		url: './addressReceipt'
							// 	});
							// }
							// if(res.data.result.flag == 2) {
								
							// }
						})
				
			},
			// 充值金额对比充值下限
			topupAmount(){
				if(this.aegisAmount < this.rechargeData) {
					uni.showToast({
					    title: '充值金额小于充值下限',
					    duration: 2000,
						icon:'none'
					})
				}
			},
			// 申请地址
			// applyAddress(){
				
			// },
			// 申请地址
			aegis(){
				if(this.aegisAmount < this.rechargeData) {
					uni.showToast({
					    title: '充值金额小于充值下限',
					    duration: 2000,
						icon:'none'
					})
					return
				}
				uni.showLoading({
								title: 'loading...'
							});
				const data = {
					amount: this.aegisAmount,
				};
				app.$post('wallet/udunRecharg', data)
									.then(res => {
										console.log('打印申请地址参数',res.data);
										if(res.data.status ==1) {
											let datas = {
												address:res.data.result.address,
												amount:this.aegisAmount,
											}
											uni.navigateTo({
												url: '../../pages/index/addressReceipt?data='+JSON.stringify(datas)
											});
											uni.hideLoading();
										}
									})
				
				// uni.navigateTo({
				// 	url: './aegisTopUp'
				// });
			},
			queryOrder(){
				// app.$post('user/register', data)
				// 					.then(res => {
				// 						console.log(res)
				// 						app.$tips(res.data.info);
				// 						if (res.data.status == 1) {
				// 							this.password = '';
				// 							this.confirmPassword = '';
				// 							this.code = '';
				// 							this.inviteCode = '';
				// 							uni.setStorageSync('token', res.data.result.token);
				// 							app.getUserInfo();
				// 							uni.reLaunch({
				// 								url: '../index/index'
				// 							})
				
				// 						}
				// 					})
				// app.$get('wallet/getLastRecharge')
				// 		.then(res => {
				// 			console.log('打印查询未完成订单数据',res.data.result);
				// 			if(res.data.result.flag == 1) {
				// 				uni.navigateTo({
				// 					url: './addressReceipt'
				// 				});
				// 			}
				// 			if(res.data.result.flag == 2) {
								
				// 			}
				// 		})
				// }
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
		align-items: center;
		background-color: #24315e;
		.top-up {
			margin: 0 auto;
			width: 90%;
			height: 80rpx;
			margin-top: 70rpx;
			line-height: 80rpx;
			color: #fff;
			font-weight: 400;
			font-size: 32rpx;
			// border: 1px solid red;
		}
		.top-up:nth-of-type(2) {
			margin-top: 20rpx;
		}
		.inp {
			width: 85%;
			height: 90rpx;
			margin-top: 20rpx;
			font-size: 32rpx;
			padding-left: 5%;
			color: #fff;
			border: 1px solid #C0C0C0;
			border-radius: 12rpx;
			// background-color: ;
		}
		.guiZe {
			margin: 0 auto;
			width: 90%;
			height: 520rpx;
			display: flex;
			flex-wrap: wrap;
			border: 1px solid #C0C0C0;
			border-radius: 6rpx;
			text {
				margin: 0 auto;
				width: 90%;
				height: 60rpx;
				line-height: 60rpx;
				font-size: 24rpx;
				color: #fff;
				// border: 1px solid red;
			}
			text:nth-of-type(1) {
				margin-top: 20rpx;
			}
			text:nth-of-type(2) {
				height: 60rpx;
				line-height: 40rpx;
			}
			text:nth-of-type(3) {
				height: 80rpx;
				line-height: 40rpx;
			}
			text:nth-of-type(4) {
				height: 60rpx;
				line-height: 40rpx;
			}
		}
		.btn {
			margin: 0 auto;
			position: fixed;
			bottom: 5%;
			width: 90%;
			height: 80rpx;
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