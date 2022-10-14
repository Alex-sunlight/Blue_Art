<template>
	<view class="pages-index">
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item v-for="(item, index) in carousel">
					<view class="swiper-item">
						<image class="swiper_img" :src="item.aaa" mode=""></image>
					</view>
				</swiper-item>
				
			</swiper>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				carousel: [
					{
						aaa: "../../static/image/carousel.jpg"
					},
					{
						aaa: "../../static/image/carousel.jpg"
					},
					{
						aaa: "../../static/image/carousel.jpg"
					},
				]
			}
		},
		onLoad() {

		},
		methods: {

		},
		onNavigationBarButtonTap(e) {
			// console.log(e.index);
			if (e.index == 0) {
				console.log("第一个按钮");
			};
			if (e.index == 1) {
				console.log("第二个按钮");
			}
		},
	}
</script>

<style lang="scss">
	.pages-index {
		width: 100%;
		height: 100vh;
		padding-top: 30rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #3972ab;
	}

	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}

	.swiper {
		height: 300rpx;
	}

	.swiper-item {
		height: 300rpx;
		text-align: center;
	}
	.swiper_img{
		height: 300rpx;
		border-radius: 20px 20px;
	}
</style>
