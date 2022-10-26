<template>
	<view class="pages-details">
		<!-- nft详情 -->
		<view class="stake_area">
			<view class="uni-margin-wrap">
				<image class="stake_area_img" :src="nftImg.image"></image>
			</view>
			<view class="stake_information">
				<view class="information_bottom">
					<h3 class="h3">{{nftImg.english_name}}</h3>
					<view class="math_box">
						<view style="display: flex;">
							<view class="faxingSize">
								发行量
							</view>
							<view class="math">
								{{nftImg.has_buy}}/{{nftImg.fx_num}}
							</view>
						</view>
						<view class="priceBox">
							<image src="../../static/image/usdt.png" class="usdtIcon"></image>
							<view class="price">
								{{nftImg.price}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="details_cen">
			<h4>购买须知</h4>
			<br>
			<h5>1.该数字藏品为虚拟数字商品，而非实物，仅限14周岁以上用户购买。一经售出，概不退换。本商品原文件不支持本地下载。</h5>
			<br>
			<h5>2. 公司将严格遵守相关法律法规监管要求，依法使用您的信息，并对所有担保客户以及投资用户信息进行保密。</h5>
			<br>
			<h5>3. 请勿对数字藏品进行炒作、欺诈或以任何其他非法方式进行使用。</h5>
			<br>
			<h5>4. 如有任何疑问请联系我们，最终解释权归BlueArt所有。</h5>
		</view>
		<view class="details_bottom">
			<!-- <view style="width: 100%;height: 20rpx;">
			</view> -->
			<!-- <view class="priceBoxs">
				<image src="../../static/image/usdt.png" class="usdtIcons"></image>
				<view class="price">
					{{nftImg.price}}
				</view>
				<view style="width: 300rpx;">
				</view>
				<view class="">
					<span @click="math--">-</span>
					<span style="margin: 0rpx 20rpx;">{{math}}</span>
					<span @click="math++">+</span>
				</view>
			</view> -->
			<!-- <view style="width: 100%;height: 18rpx;">
			</view> -->
			<button @click="buyNftToStake()" type="primary" class="details_bt">购买</button>
		</view>
	</view>
</template>

<script>
	const app = getApp().globalData
	export default {
		data() {
			return {
				math: 0,
				nftImg: [],
				id: '',
				option: []
			}
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			this.option = option
			this.getNftSkuDetails(this.option.id)
		},
		methods: {
			getNftSkuDetails(option) {
				try {
					app.$get('nft/getNftSkuDetails', {
						nft_id: option
					}).then(res => {
						if (res.data.status == 1) {
							this.nftImg = res.data.result
							this.id = res.data.result.id
							console.log(res.data.result, '获取nft详情')
						}
					})
				} catch (e) {
					//TODO handle the exception
				}
			},
			buyNftToStake() {
				try {
					app.$post('stake/buyNftToStake', {
						nft_id: this.id
					}).then(res => {
						if (res.data.status == 1) {
							app.$tips('success')
							this.getNftSkuDetails(this.option.id)
							console.log(res, '获取购买nft并质押详情')
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
	.pages-details {
		width: 100%;
		min-height: 100vh;
		padding-bottom: 500rpx;
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

	.priceBoxs {
		font-size: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
	}

	.price {
		color: #fff;
	}

	.usdtIcons {
		width: 60rpx;
		height: 60rpx;
	}

	.usdtIcon {
		width: 40rpx;
		height: 40rpx;
	}

	.details_bottom {
		position: fixed;
		bottom: 50rpx;
		width: 100%;
		height: 80rpx;
	}

	.details_bt {
		width: 80%;
		font-size: 30rpx;
	}

	.details_cen {
		width: 700rpx;
		// height: 500rpx;
		border-radius: 20rpx;
		margin-top: 50rpx;
		margin-bottom: 100rpx;
		padding: 20rpx;
		background-color: #8f91b0;
		color: #fff;
	}
</style>
