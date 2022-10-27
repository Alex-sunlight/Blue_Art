<template>
	<view class="pages-my">
		<view @click="ProfileSettings()" class="drawer_top">
			<view class="drawer_imgSize_box">
				<image class="drawer_image" :src="avatar"></image>
				<view class="drawer_top_size">
					<view class="drawer_name">
						<h3>{{user.nickname}}</h3>
					</view>
					<view class="drawer_id">
						用户账号：{{user.email}}
					</view>
				</view>
			</view>
			<uni-icons type="forward" size="20" color="#fff"></uni-icons>
		</view>
		<!-- 静态收益 -->
		<view @click="toStatic()" class="drawer_assets">
			<h4 style="color: #fff;margin-left: 30rpx;">静态收益</h4>
			<br>
			<view class="assets_box">
				<view class="assets">
					<h3 style="color: #fff;">0.00</h3>
					<h6 style="color: #d9d9d9;">昨日收益</h6>
				</view>
				<view class="assets">
					<h3 style="color: #fff;">0.00</h3>
					<h6 style="color: #d9d9d9;">累计收益</h6>
				</view>
			</view>
		</view>
		<!-- 动态收益 -->
		<view @click="toDynamic()" class="drawer_assets">
			<h4 style="color: #fff;margin-left: 30rpx;">动态收益</h4>
			<br>
			<view class="assets_box">
				<view class="assets">
					<h3 style="color: #fff;">0.00</h3>
					<h6 style="color: #d9d9d9;">昨日收益</h6>
				</view>
				<view class="assets">
					<h3 style="color: #fff;">0.00</h3>
					<h6 style="color: #d9d9d9;">累计收益</h6>
				</view>
			</view>
		</view>
		<!-- 功能 -->
		<view class="drawer_Function">
			<view class="">
				<!-- 我的藏品 -->
				<view @click="toCollect()" class="to_order">
					<view class="order">
						<image src="../../static/image/collect.png" class="iconImg"></image>
						<view class="">
							我的藏品
						</view>
					</view>
					<uni-icons type="forward" size="20" color="#fff"></uni-icons>
				</view>
				<view style="width: 80%;margin: 20rpx auto; height: 0.5px;background-color: #fff;opacity: 0.5;">
					<!-- 线条 -->
				</view>
			</view>
			<view class="">
				<!-- 热门资讯 -->
				<view @click="toNews()" class="to_order">
					<view class="order">
						<image src="../../static/image/WithdrawOrder.png" class="iconImg"></image>
						<view class="">
							热门资讯
						</view>
					</view>
					<uni-icons type="forward" size="20" color="#fff"></uni-icons>
				</view>
				<view style="width: 80%;margin: 20rpx auto; height: 0.5px;background-color: #fff;opacity: 0.5;">
					<!-- 线条 -->
				</view>
			</view>
			<view class="">
				<!-- 资质证书 -->
				<view @click="toCertificate()" class="to_order">
					<view class="order">
						<image src="../../static/image/Certificate.png" class="iconImg"></image>
						<view class="">
							资质证书
						</view>
					</view>
					<uni-icons type="forward" size="20" color="#fff"></uni-icons>
				</view>
				<view style="width: 80%;margin: 20rpx auto; height: 0.5px;background-color: #fff;opacity: 0.5;">
					<!-- 线条 -->
				</view>
			</view>
			<view class="">
				<!-- 防骗指南 -->
				<view class="to_order">
					<view class="order">
						<image src="../../static/image/guide.png" class="iconImg"></image>
						<view class="">
							防骗指南
						</view>
					</view>
					<uni-icons type="forward" size="20" color="#fff"></uni-icons>
				</view>
				<view style="width: 80%;margin: 20rpx auto; height: 0.5px;background-color: #fff;opacity: 0.5;">
					<!-- 线条 -->
				</view>
			</view>
			<view class="">
				<!-- 关于我们 -->
				<view class="to_order">
					<view class="order">
						<image src="../../static/image/about.png" class="iconImg"></image>
						<view class="">
							关于我们
						</view>
					</view>
					<uni-icons type="forward" size="20" color="#fff"></uni-icons>
				</view>
				<view style="width: 80%;margin: 20rpx auto; height: 0.5px;background-color: #fff;opacity: 0.5;">
					<!-- 线条 -->
				</view>
			</view>
			<view class="">
				<!-- 联系我们 -->
				<view class="to_order">
					<view class="order">
						<image src="../../static/image/connect.png" class="iconImg"></image>
						<view class="">
							联系我们
						</view>
					</view>
					<uni-icons type="forward" size="20" color="#fff"></uni-icons>
				</view>
				<view style="width: 80%;margin: 20rpx auto; height: 0.5px;background-color: #fff;opacity: 0.5;">
					<!-- 线条 -->
				</view>
			</view>
			<view class="">
				<!-- 设置 -->
				<view @tap="toSettings()" class="to_order">
					<view class="order">
						<image src="../../static/image/setUp.png" class="iconImg"></image>
						<view class="">
							设置
						</view>
					</view>
					<uni-icons type="forward" size="20" color="#fff"></uni-icons>
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
				user:[],
				avatar:'../../static/image/stake8.png',
				award_type0: '',
				award_type2: ''
			}
		},
		onLoad() {
			this.userInfo()
			// 查询质押收益
			this.getStakeReward()
			this.getStakeReward2()
		},
		methods:{
			toStatic(){
				uni.navigateTo({
					url: './static'
				})
			},
			toDynamic(){
				uni.navigateTo({
					url: './dynamic'
				})
			},
			// 查询质押收益
			getStakeReward() {
				try {
					app.$get('stake/getStakeReward', {
						order_id: '',
						award_type: 0
					}).then(res => {
						if (res.data.status == 1) {
							console.log(res, '查询质押收益')
							this.award_type0 = res.data.result.data.bonus
						}
					})
				} catch (e) {
					//TODO handle the exception
				}
			},
			// 查询质押收益
			getStakeReward2() {
				try {
					app.$get('stake/getStakeReward', {
						order_id: '',
						award_type: 2
					}).then(res => {
						if (res.data.status == 1) {
							console.log(res, '查询质押收益2')
							this.award_type2 = res.data.result.data.bonus
						}
					})
				} catch (e) {
					//TODO handle the exception
				}
			},
			// 个人信息
			userInfo() {
				try {
					app.$get('userCenter/userInfo').then(res => {
						if (res.data.status == 1) {
							this.user = res.data.result
							this.avatar = res.data.result.avatar
							console.log(this.user, '个人信息')
						}
					})
				} catch (e) {
					//TODO handle the exception
				}
			},
			ProfileSettings(){
				uni.navigateTo({
					url: '../settings/ProfileSettings'
				});
			},
			toCollect() {
				uni.navigateTo({
					url: './collect'
				});
			},
			toNews() {
				uni.navigateTo({
					url: './news'
				});
			},
			toCertificate() {
				uni.navigateTo({
					url: './certificate'
				});
			},
			toSettings() {
				uni.navigateTo({
					url: '../settings/settings'
				});
			},
		}
	}
</script>

<style lang="scss">
	.pages-my {
		width: 100%;
		min-height: 100vh;
		padding-bottom: 200rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #3972ab;
	}

	.drawer_top {
		width: 85%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.drawer_imgSize_box {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.drawer_top_size {
		margin-left: 20rpx;
	}

	.drawer_name {
		color: #fff;
	}

	.drawer_id {
		font-size: 10px;
	}

	.drawer_image {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		border: 3px solid #fff;
	}
	// 静态收益
	.drawer_assets {
		width: 600rpx;
		height: 200rpx;
		margin: 20rpx 50rpx;
		padding-top: 30rpx;
		border-radius: 8px;
		background-color: #3e7cba;
	}
	.assets_box {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.assets {
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	// 功能
	.drawer_Function{
		width:600rpx;
		height: 780rpx;
		margin: 20rpx 50rpx;
		padding-top: 30rpx;
		border-radius: 8px;
		background-color: #3e7cba;
	}
	.iconImg{
		width: 50rpx;
		height: 50rpx;
		margin-right: 10rpx;
	}
	.to_order{
		margin-top: 40rpx;
		padding: 0 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.order{
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
	}
</style>
