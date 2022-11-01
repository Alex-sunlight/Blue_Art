<template>
	<view class="pages-recharge">
		<view class="details">
			<view class="detailsList">
				<text>
					提现金额
				</text>
				<text>
					{{this.prepaidData.amount == null?'暂无数据':this.prepaidData.amount}}
				</text>
			</view>
			<view class="detailsList">
				<text>
					实际到账金额
				</text>
				<text>
					{{this.prepaidData.actual == null?'暂无数据':this.prepaidData.actual}}
				</text>
			</view>
			<view class="detailsList">
				<text>
					提现地址
				</text>
				<text>
					{{this.prepaidData.address == null?'暂无数据':this.prepaidData.address}}
				</text>
			</view>
			<view class="detailsList">
				<text>
					充值状态
				</text>
				<text v-if="this.prepaidData.status == 1">
					待处理
				</text>
				<text v-if="this.prepaidData.status == 2">
					打款中
				</text>
				<text v-if="this.prepaidData.status == 3">
					提现成功
				</text>
				<text v-if="this.prepaidData.status == 4">
					提现失败
				</text>
			</view>
			<view class="detailsList">
				<text>
					手续费
				</text>
				<text>
					{{this.prepaidData.fee == null?'暂无数据':this.prepaidData.fee}}
				</text>
			</view>
			<view class="detailsList">
				<text>
					交易哈希
				</text>
				<text>
					{{this.prepaidData.trans_hash == null?'暂无数据':this.prepaidData.trans_hash }}
				</text>
			</view>
		</view>
		<!-- <view class="cancelTopup" v-if="this.prepaidData.status == 0? true:false" @click="cancel()">
			取消充值
		</view> -->
	</view>
</template>

<script>
	const app = getApp().globalData;
	export default {
		data() {
			return {
				prepaidData:null
			}
			
		},
		onLoad(option) {
			this.options= JSON.parse(option.data)
				console.log("充值传参", this.options)
				if (this.options != null) {
				   this.prepaidData=this.options
				   console.log('打印传值金额',this.prepaidData);
				}
			},
		methods:{
			// 取消充值
			cancel(){
				const data = {
					recharge_id: this.prepaidData.id,
				};
				app.$post('wallet/cancelRecharge', data)
									.then(res => {
										console.log('打印取消充值',res.data);
										if(res.data.status ==1) {
											// let datas = {
											// 	address:res.data.result.address,
											// 	amount:this.aegisAmount,
											// }
											uni.showToast({
											    title: '取消充值成功',
											    duration: 500,
												icon:'none'
											})
											setTimeout(()=>{
												uni.switchTab({
													url: './index'
												});
											},1000)
											// uni.hideLoading();
										}else {
											uni.showToast({
											    title: res.data.info,
											    duration: 2000,
												icon:'none'
											})
										}
									})
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
		background-color: #2f3d6e;
		.details {
			width: 90%;
			margin: 0 auto;
			margin-top: 70rpx;
			height: 390rpx;
			display: flex;
			flex-wrap: wrap;
			border: 1px solid #c0c0c0;
			border-radius: 12rpx;
			.detailsList {
				margin: 0 auto;
				width: 90%;
				height: 60rpx;
				overflow: hidden;
				display: flex;
				// border: 1px solid red;
				text {
					width: 140rpx;
					height: 58rpx;
					line-height: 58rpx;
					text-align: left;
					font-size: 24rpx;
					color: #c0c0c0;
					// border: 1px solid red;
				}
				text:nth-of-type(2) {
					margin-left: 20rpx;
					flex: 1;
					font-size: 28rpx;
					color: #fff;
				}
			}
		}
		.cancelTopup {
			width: 90%;
			margin: 0 auto;
			margin-top: 120rpx;
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			font-size: 28rpx;
			// display: flex;
			color: #fff;
			// flex-wrap: wrap;
			border: 1px solid #c0c0c0;
			border-radius: 12rpx;
		}
		}
		
	
</style>