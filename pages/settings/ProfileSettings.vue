<template>
	<view class="pages-ProfileSettings">
		<view class="drawer_assets">
			<view class="imgBox">
				<image class="drawer_image" src="../../static/image/stake8.png"></image>
			</view>
			<view class="nameBox">
				<view class="name">
					昵称
				</view>
				<input type="text" value="111" />
			</view>
			<view style="width: 80%;margin: 20rpx auto; height: 0.5px;background-color: #fff;opacity: 0.5;">
				<!-- 线条 -->
			</view>
			<button class="myButton" type="primary">保存</button>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.pages-ProfileSettings {
		width: 100%;
		min-height: 100vh;
		padding-bottom: 100rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #3972ab;
	}

	.drawer_assets {
		width: 600rpx;
		height: 500rpx;
		margin: 20rpx 50rpx;
		padding-top: 30rpx;
		border-radius: 8px;
		background-color: #3e7cba;
	}

	.imgBox {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.drawer_image {
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
		border: 3px solid #fff;
	}
	.nameBox{
		margin-top: 50rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
	}
	.name{
		margin-right: 50rpx;
	}
	.myButton{
		width: 90%;
		margin-top: 50rpx;
		font-size: 15px;
	}
</style>
