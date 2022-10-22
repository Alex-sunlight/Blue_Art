<template>
	<!-- U盾充值 -->
	<view class="pages-recharge">
		<br>
		<br>
		<h3 style="width: 100%;text-align: left;margin-left: 20%;color: #fff;">充值金额</h3>
		<br>
		<input class="uni-input" focus v-model="email" />
	</view>
</template>

<script>
</script>

<style lang="scss">
	.pages-recharge{
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #3972ab;
	}
	.uni-input {
		width: 500rpx;
		height: 60rpx;
		color: #fff;
		border: 2px solid #fff;
		border-radius: 10px;
	}

	
</style>