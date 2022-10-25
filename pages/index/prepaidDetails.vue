<template>
	<view class="pages-recharge">
		<view class="details">
			<view class="detailsList">
				<text>
					U盾订单编号
				</text>
				<text>
					{{this.prepaidData.tradeId == null?'暂无数据':this.prepaidData.tradeId}}
				</text>
			</view>
			<view class="detailsList">
				<text>
					预设充值金额
				</text>
				<text>
					{{this.prepaidData.ys_amount}}
				</text>
			</view>
			<view class="detailsList">
				<text>
					实际充值金额
				</text>
				<text>
					{{this.prepaidData.amount}}
				</text>
			</view>
			<view class="detailsList">
				<text>
					充值状态
				</text>
				<text>
					{{this.prepaidData.status == 0 ? '待充值':'充值成功'}}
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
	</view>
</template>

<script>
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
		}
		
	
</style>