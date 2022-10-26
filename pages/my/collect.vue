<template>
	<view class="pages-collect">
		<image src="../../static/image/moon.gif" class="topImg"></image>
		<view class="headBox">
			<view class="collectSize">
				ikun
			</view>
			<image class="drawer_image" src="../../static/image/stake14.png"></image>
		</view>
		<image v-if="!nftList" src="../../static/image/null.png" class="nullImg"></image>
		<view class="nftBox">
			<view v-for="(item, index) in nftList" class="nft">
				<image :src="item.image" class="Img"></image>
				<view class="nameIcon">
					<text style="color: gold;margin-left: 20rpx;">{{item.english_name}}</text>
					<view class="nameIcon">
						<image src="../../static/image/usdt.png" class="usdtIcon"></image>
						<view style="font-size: 10rpx;margin: 0  20rpx 0 10rpx;">
							{{item.price}}
						</view>
					</view>
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
				nftList: []
			}
		},
		onLoad() {
			this.getMyNftList()
		},
		methods: {
			getMyNftList() {
				try {
					app.$get('nft/getMyNftList').then(res => {
						if (res.data.status == 1) {
							this.nftList = res.data.result.data
							console.log(res.data.result.data, '查询我的藏品')
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
	.pages-collect {
		position: relative;

		>* {
			z-index: 0;
		}

		width: 100%;
		min-height: 100vh;
		padding-bottom: 100rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #3972ab;
	}

	.topImg {
		width: 100%;
		opacity: 0.7;
	}

	.headBox {
		width: 100%;
		right: 50rpx;
		top: 400rpx;
		display: flex;
		justify-content: right;
		// align-items: center;
		position: absolute;
		z-index: 10;
	}

	.drawer_image {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		border: 3px solid #fff;
	}

	.collectSize {
		margin-right: 20rpx;
		font-size: 40rpx;
		color: #fff;
	}

	.nullImg {
		width: 600rpx;
		height: 650rpx;
	}

	.nftBox {
		width: 650rpx;
		padding: 0rpx 20rpx 20rpx 20rpx;
		margin-top: 100rpx;
		border-radius: 20rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: top;
		background-color: #3e7cba;
	}

	.nft {
		width: 48%;
		height: 280rpx;
		margin-top: 20rpx;
		border-radius: 20rpx;
		background-color: #fff;
	}

	.Img {
		width: 100%;
		height: 200rpx;
		border-radius: 20rpx 20rpx 0 0;
	}

	.usdtIcon {
		width: 40rpx;
		height: 40rpx;
	}

	.nameIcon {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
