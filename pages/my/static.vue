<template>
	<view class="pages-static">
		<view class="earnings">
			<text>
				日期
			</text>
			<text>
				订单号
			</text>
			<text>
				收益
			</text>
		</view>
		<view class="returnsBox">
			<view class="returnsItem" v-for="(item, index) in award_type0"
			>
				
				<text>
					{{item.get_day}}
				</text>
				<text>
					{{item.ordersn}}
				</text>
				<!-- <text v-if="item.award_type == 0">
					本金收益
				</text>
				<text v-if="item.award_type == 1">
					推荐收益
				</text>
				<text v-if="item.award_type == 2">
					管理收益
				</text> -->
				<text>
					{{item.bonus}}
				</text>
				</view>
		</view>
		<!-- <view style="width: 700rpx;padding: 20rpx;">
			<view v-for="(item, index) in award_type0"
				style="width: 100%;height: 50rpx;font-size: 15rpx;padding: 5rpx 5rpx; background-color: aquamarine;display: flex;margin-top: 30rpx; justify-content: space-between;align-items: center;">
				<view class="">
					{{item.bonus}}
				</view>
				<view class="">
					{{item.get_day}}
				</view>
				<view v-if="item.award_type == 0">
					本金收益
				</view>
				<view v-if="item.award_type == 1">
					推荐收益
				</view>
				<view v-if="item.award_type == 2">
					管理收益
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	const app = getApp().globalData
	export default {
		data() {
			return {
				award_type0: [],
			}
		},
		onLoad() {
			// 查询质押收益
			this.getStakeReward()
		},
		methods: {
			// 查询质押收益
			getStakeReward() {
				try {
					app.$get('stake/getStakeReward', {
						order_id: '',
						award_type: 0
					}).then(res => {
						if (res.data.status == 1) {
							this.award_type0 = res.data.result.data
							console.log(res.data.result.data, '查询质押收益')
						}
					})
				} catch (e) {
					//TODO handle the exception
				}
			},
		},
	}
</script>

<style lang="scss">
	.pages-static {
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #24315e;
		.earnings {
			margin: 0 auto;
			width: 99%;
			height: 80rpx;
			font-size: 28rpx;
			display: flex;
			margin-top: 40rpx;
			// border: 1px solid red;
			text {
				// width: 200rpx;
				flex: 1;
				height: 78rpx;
				line-height: 78rpx;
				text-align: center;
				color: #fff;
				// border: 1px solid red;
			}
			text:nth-of-type(3) {
				margin-left: 80rpx;
			}
		}
		.returnsBox {
			width: 96%;
			margin: 0 auto;
			// height: 160rpx;
			margin-top: 30rpx;
			border: 1px solid #c0c0c0;
			border-radius: 6rpx;
			background-color: #2f3d6e;
			.returnsItem {
				width: 100%;
				height: 80rpx;
				display: flex;
				// margin: 20rpx auto;
				// border: 1px solid green;
				text{
					flex: 1;
					height: 78rpx;
					line-height: 78rpx;
					text-align: center;
					color: #fff;
					font-size: 28rpx;
				}
			}
		}
	}
</style>
