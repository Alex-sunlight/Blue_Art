<template>
	<view class="pages-index">
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item v-for="(item, index) in carousel">
					<view class="swiper-item">
						<image class="swiper_img" :src="item.bbb" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="质押区" name="first">
				<view v-for="(item, index) in stake" class="stake_area">
					<image class="stake_area_img" :src="item.bbb"></image>
					<view class="stake_information">
						<view class="information_bottom">
							<h3 class="h3">Doreen</h3>
							<view class="math_box">
								<view style="display: flex;">
									<view class="faxingSize">
										发行量
									</view>
									<view class="math">
										5500
									</view>
								</view>
								<view class="priceBox">
									<image src="../../static/image/usdt.png" class="usdtIcon"></image>
									<view class="price">
										19500
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>

			</el-tab-pane>
			<el-tab-pane label="拍卖担保区" name="second">
				<view v-for="(item, index) in paimai" class="stake_area">
					<image class="stake_area_img" :src="item.aaa"></image>
					<view class="stake_information">
						<view class="information_bottom">
							<h3 class="h3">Doreen</h3>
							<view class="math_box">
								<view style="display: flex;">
									<view class="faxingSize">
										发行量
									</view>
									<view class="math">
										5500
									</view>
								</view>
								<view class="priceBox">
									<image src="../../static/image/usdt.png" class="usdtIcon"></image>
									<view class="price">
										19500
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</el-tab-pane>
			<el-tab-pane label="托管区" name="third">
				<view v-for="(item, index) in tuoguan" class="stake_area">
					<image class="stake_area_img" :src="item.aaa"></image>
					<view class="stake_information">
						<view class="information_bottom">
							<h3 class="h3">Doreen</h3>
							<view class="math_box">
								<view style="display: flex;">
									<view class="faxingSize">
										发行量
									</view>
									<view class="math">
										5500
									</view>
								</view>
								<view class="priceBox">
									<image src="../../static/image/usdt.png" class="usdtIcon"></image>
									<view class="price">
										19500
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</el-tab-pane>
			<el-tab-pane label="nft体验区" name="fourth">
				<view v-for="(item, index) in nft" class="stake_area">
					<image class="stake_area_img" :src="item.aaa"></image>
					<view class="stake_information">
						<view class="information_bottom">
							<h3 class="h3">Doreen</h3>
							<view class="math_box">
								<view style="display: flex;">
									<view class="faxingSize">
										发行量
									</view>
									<view class="math">
										5500
									</view>
								</view>
								<view class="priceBox">
									<image src="../../static/image/usdt.png" class="usdtIcon"></image>
									<view class="price">
										19500
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</el-tab-pane>
		</el-tabs>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				carousel: [{
						aaa: "../../static/image/carousel.jpg",
						bbb:"../../static/image/6.jpg",
					},
					{
						aaa: "../../static/image/carousel.jpg",
						bbb:"../../static/image/5.jpg",
					},
					{
						aaa: "../../static/image/carousel.jpg",
						bbb:"../../static/image/4.jpg",
					},
				],
				stake: [
					{
						aaa: "../../static/image/stake2.png",
						bbb:"../../static/image/2.jpg",
					},
					{
						aaa: "../../static/image/stake3.png",
						bbb:"../../static/image/3.jpg",
					},
					{
						aaa: "../../static/image/stake4.png",
						bbb:"../../static/image/4.jpg",
					},
					{
							aaa: "../../static/image/stake1.png",
							bbb:"../../static/image/5.jpg",
						},
				],
				paimai: [{
						aaa: "../../static/image/stake5.png"
					},
					{
						aaa: "../../static/image/stake6.png"
					},
					{
						aaa: "../../static/image/stake15.png"
					},
					{
						aaa: "../../static/image/stake16.png"
					},
				],
				tuoguan: [{
						aaa: "../../static/image/stake7.png"
					},
					{
						aaa: "../../static/image/stake8.png"
					},
					{
						aaa: "../../static/image/stake9.png"
					},
					{
						aaa: "../../static/image/stake10.png"
					},
				],
				nft: [{
						aaa: "../../static/image/stake11.png"
					},
					{
						aaa: "../../static/image/stake12.png"
					},
					{
						aaa: "../../static/image/stake13.png"
					},
					{
						aaa: "../../static/image/stake14.png"
					},
				],
				activeName: 'first'
			}
		},
		onLoad() {

		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
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
	@import url("//unpkg.com/element-ui@2.15.10/lib/theme-chalk/index.css");

	/deep/ .el-tabs__item.is-active {
		color: #fff;
	}

	/deep/ .el-tabs__item {
		padding: 0 20px;
		height: 40px;
		box-sizing: border-box;
		line-height: 40px;
		display: inline-block;
		list-style: none;
		font-size: 14px;
		font-weight: 500;
		color: #c0c4cc;
		position: relative;
	}

	/deep/ .el-tabs__nav-wrap {
		margin: 30rpx 0;
	}

	.pages-index {
		width: 100%;
		min-height: 100vh;
		padding-top: 30rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #3972ab;
	}

	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.swiper {
		width: 700rpx;
		height: 300rpx;

	}

	.swiper-item {
		width: 700rpx;
		height: 300rpx;
		text-align: center;
	}

	.swiper_img {
		width: 700rpx;
		height: 300rpx;
		border-radius: 20px 20px;
	}

	.stake_area {
		margin-top: 50rpx;
		display: flex;
		flex-direction: column;
	}

	.stake_area_img {
		width: 700rpx;
		border-radius: 10px 10px 0 0;
	}

	.information_bottom {
		padding: 30rpx;
		border-radius: 0 0 10px 10px;
		background-color: #8f91b0;
	}

	.h3 {
		color: #fff;
	}

	.math_box {
		display: flex;
		justify-content: space-between;
	}

	.faxingSize {
		background-color: gold;
		padding: 7rpx;
		font-size: 13rpx;
		border-radius: 5px 0 0 5px
	}

	.math {
		background-color: #8f91b0;
		padding: 7rpx;
		font-size: 13rpx;
		color: #fff;
		border-radius: 0 5px 5px 0;
	}

	.priceBox {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.usdtIcon {
		width: 40rpx;
		height: 40rpx;
	}

	.price {
		color: #fff;
	}
</style>
