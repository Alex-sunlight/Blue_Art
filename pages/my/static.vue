<template>
	<view class="pages-static">
		<view style="width: 700rpx;padding: 20rpx;">
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
		</view>
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
		background-color: #3972ab;
	}
</style>
