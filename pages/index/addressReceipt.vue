<template>
	<view class="pages-recharge">
		<view class="instructions">
			U盾充值仅支持波场链TRC20转账USDT币种。请仔细核对应转账金额和货币提网络类型,错误的支付将导致
			充值无法到账!请不要通过任何其他网络向这个地址发送其他币种,否则您的资金可能会丢失。复制充值地址
			后请于2小时内转账交易完成,若需要取消交易请点击下方取消交易。请妥善保存此地址,付款后有若任何问题,
			以此咨询客服寻求帮助。
		</view>
		<view class="topupHints">
			<text>
				本次需充值
			</text>
			<text>
				300USDT
			</text>
		</view>
		<view class="knowThe">
			<radio-group @change="chan" class="inp">
			                        <label>
			                            <radio  :value="radio"  />我知道了
			                        </label>
			                    </radio-group>
		</view>
		<view class="address" v-if="addressStatus">
			<text>充值地址</text>
			<text>TKcjsfhVBGFfHr317TLijGK99Qryao274G</text>
			<text>
				复制地址
			</text>
		</view>
		<view class="topupOption">
			<text>取消充值</text>
			<text>我已充值</text>
		</view>
		<view class="hasPrepaid" v-if="prepaid">
			第三方充值需要一定时间,正在等待第三方回执
		</view>
		<text class="matters">注意事项</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				radio:1,
				addressStatus:false,
				prepaid:false
			}
			
		},
		methods:{
			chan(e) {
			                this.activeRadio = e.detail.value;
			
			                //this.activeRadio存的是选中的Value的值
			                console.log(this.activeRadio);
			            }
	
		}
	}
</script>

<style lang="scss" scoped>
	.pages-recharge{
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #3972ab;
		.instructions {
			margin: 0 auto;
			margin-top: 40rpx;
			width: 80%;
			padding-left: 5%;
			padding-right: 5%;
			padding-top: 20rpx;
			height: 300rpx;
			font-size: 28rpx;
			color: #fff;
			border: 1px solid #c0c0c0;
			border-radius: 12rpx;
		}
		.topupHints {
			margin: 0 auto;
			margin-top: 30rpx;
			width: 90%;
			height: 90rpx;
			display: flex;
			border: 1px solid #c0c0c0;
			border-radius: 12rpx;
			text {
				width: 330rpx;
				height: 88rpx;
				line-height: 88rpx;
				font-size:32rpx;
				text-align: right;
				color: #8e8e8e;
				// border: 1px solid red;
			}
			text:nth-of-type(2) {
				width: 300rpx;
				margin-left: 20rpx;
				font-size: 34rpx;
				text-align: left;
				color: #fff;
			}
		}
		.knowThe {
			width: 90%;
			margin: 0 auto;
			margin-top: 20rpx;
			height: 80rpx;
			display: flex;
			flex-direction: row-reverse;
			// border: 1px solid red;
			.inp {
				width: 200rpx;
				height: 78rpx;
				line-height: 78rpx;
				// border: 1px solid red;
				label {
					color: #949393;
					font-size: 28rpx;
					
				}
			}
		}
		.address {
			width: 90%;
			margin: 0 auto;
			margin-top: 20rpx;
			height: 200rpx;
			display: flex;
			flex-wrap: wrap;
			border: 1px solid #c0c0c0;
			border-radius: 12rpx;
			text {
				width: 95%;
				padding-left: 5%;
				height: 60rpx;
				line-height: 60rpx;
				color: #fff;
				font-size: 30rpx;
				// border: 1px solid red;
			}
			text:nth-of-type(2) {
				color: #a6a6a6;
				font-size: 28rpx;
			}
			text:nth-of-type(3) {
				color: #29a3dd;
				text-align: center;
				font-size: 26rpx;
			}
		}
		.topupOption {
			width: 90%;
			margin: 0 auto;
			margin-top: 20rpx;
			height: 80rpx;
			display: flex;
			justify-content: space-between;
			// border: 1px solid red;
			text:nth-of-type(1) {
				color: #29a3dd;
			}
			text {
				width: 160rpx;
				height: 78rpx;
				text-align: center;
				line-height: 78rpx;
				font-size: 28rpx;
				color: #fff;
				// border: 1px solid red;
			}
		}
		.hasPrepaid {
			width: 90%;
			margin: 0 auto;
			margin-top: 20rpx;
			height: 80rpx;
			text-align: center;
			font-size: 28rpx;
			line-height: 80rpx;
			color: #fff;
			border: 1px solid #c0c0c0;
			border-radius: 12rpx;
		}
		.matters {
			width: 90%;
			margin: 0 auto;
			margin-top: 20rpx;
			height: 60rpx;
			line-height: 60rpx;
			font-size: 28rpx;
			color: #fff;
			border: 1px solid red;
		}
		}
		
	
</style>