<template>
	<view class="pages-details">
		<!-- nft详情 -->
		<view class="stake_area">
			<view class="uni-margin-wrap">
				<image class="stake_area_img" src="../../static/image/stake2.png"></image>
			</view>
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
								
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss">
	.pages-details {
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #3972ab;
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

	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
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

	.price {
		color: #fff;
	}

	.usdtIcon {
		width: 40rpx;
		height: 40rpx;
	}
</style>
