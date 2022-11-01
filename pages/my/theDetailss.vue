<template>
	<view class="pages-recharge">
		<view class="details">
			<view class="detailsList">
				<text>
					订单编号
				</text>
				<text>
					{{collectionData.order_sn == null?'暂无数据':collectionData.order_sn}}
				</text>
			</view>
			<view class="detailsList">
				<text>
					质押天数
				</text>
				<text>
					{{collectionData.days== null?'暂无数据':collectionData.days}}天
				</text>
			</view>
			<view class="detailsList">
				<text>
					质押日利率
				</text>
				<text>
					{{collectionData.daily_bonus_rate== null?'暂无数据':collectionData.daily_bonus_rate}}
				</text>
			</view>
			<view class="detailsList">
				<text>
					已获得收益
				</text>
				<text>
					{{collectionData.award== null?'暂无数据':collectionData.award}}
				</text>
			</view>
			<view class="detailsList">
				<text>
					状态
				</text>
			<!-- 	<text v-if="collectionData.status == 0">
					待充值
				</text> -->
				<text v-if="collectionData.status == 1">
					质押中
				</text>
				<text v-if="collectionData.status == 2">
					质押结束
				</text>
			</view>
			<!-- <view class="detailsList">
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
			</view> -->
		</view>
		<view class="cancelTopup" v-if="this.prepaidData.status == 0? true:false" @click="cancel()">
			取消充值
		</view>
	</view>
</template>

<script>
	const app = getApp().globalData;
	export default {
		data() {
			return {
				prepaidData:null,
				collectionData:null
			}
			
		},
		onLoad(option) {
			this.options= JSON.parse(option.data)
				console.log("充值传参", this.options)
				if (this.options != null) {
				   this.prepaidData=this.options
				   console.log('打印传值金额',this.prepaidData);
				}
				this.cancel()
			},
			
		methods:{
			// 获取藏品详情
			cancel(){
				app.$get('nft/getNftOrder', {
					token_id:this.prepaidData.id,
				}).then(res => {
					if (res.data.status == 1) {
						console.log('查询nft详情',res)
						this.collectionData = res.data.result.data
						
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