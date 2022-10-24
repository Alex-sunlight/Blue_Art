<template>
	<view class="pages-invite">
		<view class="inviteBox">
			<view class="nviteImg">
				<image src="../../static/image/stake8.png" class="img"></image>
				<h5>ikun</h5>
			</view>
			
		</view>
	</view>
</template>

<script>
</script>


<style lang="scss">
	.pages-invite {
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #3972ab;
	}
	.inviteBox{
		position: relative;
		width: 600rpx;
		height: 800rpx;
		border-radius: 20rpx;
		margin-top: 150rpx;
		background-color: #3e7cba;
	}
	.nviteImg{
		position: absolute;
		top: -80rpx;
		left: 40%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.img{
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
	}
	
</style>
