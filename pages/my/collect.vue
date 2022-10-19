<template>
	<view class="pages-collect">
		<image src="../../static/image/moon.gif" class="topImg"></image>
		<view class="headBox">
			<view class="collectSize">
				ikun
			</view>
			<image class="drawer_image" src="../../static/image/stake14.png"></image>
		</view>
		<image src="../../static/image/null.png" class="nullImg"></image>
	</view>
</template>

<script>
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
	.nullImg{
		width: 600rpx;
		height: 650rpx;
	}
</style>
