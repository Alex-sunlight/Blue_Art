<template>
	<!-- 首页 -->
	<view class="pages-index">
		<!-- 左侧抽屉 -->
		<view class="example-body">
			<uni-drawer ref="showLeft" mode="left" :width="320" @change="change($event,'showLeft')">
				<view class="drawer_top">
					<view class="drawer_imgSize_box">
						<image class="drawer_image" src="../../static/image/stake8.png"></image>
						<view class="drawer_top_size">
							<view class="drawer_name">
								<h3>ikun</h3>
							</view>
							<view class="drawer_id">
								用户账号：3043068032
							</view>
						</view>
					</view>
					<uni-icons type="forward" size="20" color="#fff"></uni-icons>
				</view>
				<!-- 升级 -->
				<view class="drawer_upgrade">
				</view>
				<!-- 资产 -->
				<view class="drawer_assets">
					<view class="assets_box">
						<view class="assets">
							<h3 style="color: #fff;">0.00</h3>
							<h6 style="color: #d9d9d9;">总资产</h6>
						</view>
						<view class="assets">
							<h3 style="color: #fff;">0.00</h3>
							<h6 style="color: #d9d9d9;">可用余额</h6>
						</view>
					</view>
					<view style="width: 80%;margin: 20rpx auto; height: 0.5px;background-color: #fff;opacity: 0.5;">
						<!-- 线条 -->
					</view>
					<view class="assets_box">
						<view class="assets">
							<image src="../../static/image/recharge.png" class="iconImg"></image>
							<h6 style="color: #d9d9d9;">充值</h6>
						</view>
						<view class="assets">
							<image src="../../static/image/withdraw.png" class="iconImg"></image>
							<h6 style="color: #d9d9d9;">提现</h6>
						</view>
					</view>
				</view>
				<!-- 功能 -->
				<view class="drawer_Function">
					<h5 style="color: #fff;margin: 0 0 0 30rpx;">常用功能</h5>
					<view style="width: 80%;margin: 20rpx auto; height: 0.5px;background-color: #fff;opacity: 0.5;">
						<!-- 线条 -->
					</view>
					<view class="">
						<!-- 充值订单 -->
						<view class="to_order">
							<view class="order">
								<image src="../../static/image/Order.png" class="iconImg"></image>
								<view class="">
									充值订单
								</view>
							</view>
							<uni-icons type="forward" size="20" color="#fff"></uni-icons>
						</view>
						<view style="width: 80%;margin: 20rpx auto; height: 0.5px;background-color: #fff;opacity: 0.5;">
							<!-- 线条 -->
						</view>
					</view>
					<view class="">
						<!-- 提现订单 -->
						<view class="to_order">
							<view class="order">
								<image src="../../static/image/WithdrawOrder.png" class="iconImg"></image>
								<view class="">
									提现订单
								</view>
							</view>
							<uni-icons type="forward" size="20" color="#fff"></uni-icons>
						</view>
						<view style="width: 80%;margin: 20rpx auto; height: 0.5px;background-color: #fff;opacity: 0.5;">
							<!-- 线条 -->
						</view>
					</view>
					<view class="">
						<!-- 钱包地址 -->
						<view class="to_order">
							<view class="order">
								<image src="../../static/image/walletAddress.png" class="iconImg"></image>
								<view class="">
									钱包地址
								</view>
							</view>
							<uni-icons type="forward" size="20" color="#fff"></uni-icons>
						</view>
						<!-- 	<view style="width: 100%;margin-top: 30rpx; height: 0.5px;background-color: #fff;">
						</view> -->
					</view>
				</view>
			</uni-drawer>
		</view>
		<!-- 头部轮播图 -->
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item v-for="(item, index) in carousel">
					<view class="swiper-item">
						<image class="swiper_img" :src="item.bbb" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
			<uni-notice-bar show-icon scrollable text="91严先生最新作品火爆来袭" speed=60 />
		</view>

		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="7天" name="first">
				<view v-for="(item, index) in stake" class="stake_area">
					<view class="uni-margin-wrap">
						<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay"
							:interval="interval" :duration="duration">
							<swiper-item>
								<image class="stake_area_img" :src="item.bbb"></image>
							</swiper-item>
							<swiper-item>
								<image class="stake_area_img" :src="item.bbb"></image>
							</swiper-item>
							<swiper-item>
								<image class="stake_area_img" :src="item.bbb"></image>
							</swiper-item>
						</swiper>
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
										{{item.usdt}}
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>

			</el-tab-pane>
			<el-tab-pane label="15天" name="second">
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
			<el-tab-pane label="30天" name="third">
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
			<el-tab-pane label="45天" name="fourth">
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
			<el-tab-pane label="60天" name="day">
				<view v-for="(item, index) in day" class="stake_area">
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
	const app = getApp().globalData
	export default {
		data() {
			return {
				userInfo: app.userInfo,
				carousel: [{
						aaa: "../../static/image/carousel.jpg",
						bbb: "../../static/image/6.jpg",
					},
					{
						aaa: "../../static/image/carousel.jpg",
						bbb: "../../static/image/5.jpg",
					},
					{
						aaa: "../../static/image/carousel.jpg",
						bbb: "../../static/image/4.jpg",
					},
				],
				stake: [{
						aaa: "../../static/image/stake2.png",
						bbb: "../../static/image/2.jpg",
						usdt: "200"
					},
					{
						aaa: "../../static/image/stake3.png",
						bbb: "../../static/image/3.jpg",
						usdt: "400"
					},
					{
						aaa: "../../static/image/stake4.png",
						bbb: "../../static/image/4.jpg",
						usdt: "600"
					},
					{
						aaa: "../../static/image/stake1.png",
						bbb: "../../static/image/5.jpg",
						usdt: "800"
					},
					{
						aaa: "../../static/image/stake3.png",
						bbb: "../../static/image/3.jpg",
						usdt: "1000"
					},
					{
						aaa: "../../static/image/stake2.png",
						bbb: "../../static/image/2.jpg",
						usdt: "1500"
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
				day: [{
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
				activeName: 'first',
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				showLeft: false
			}
		},
		onLoad() {

		},
		created() {
			uni.$on('reWalletList', () => {
				this.currencyList = app.currencyList
			})
			uni.$on('reDriveList', () => {
				this.init()
			})
			uni.$on('userInfoFinish', () => {
				setTimeout(() => {
					this.userInfo = app.userInfo
					this.$forceUpdate()
				}, 100)
			})
			uni.$on('newUserInfo', () => {
				app.getUserInfo()
				this.init()
			})
		},
		onShow() {
			app.getUserInfo()
			this.userInfo = app.userInfo
			let that = this
			uni.getStorage({
				key: 'token',
				success: (res) => {
					if (res) {
						that.getVarsion()
					}
				},
				fail: () => {
					uni.reLaunch({
						url: '../login/login'
					})
				}
			})
			uni.getLocation({
				isHighAccuracy: true,
				accuracy: 'best',
				geocode: true,
				success: (res) => {
					app.locInfo = res
				},
				fail: (err) => {
					// console.log(err);
				}
			});
			this.lg = app.getLg2()
		},
		methods: {
			getVarsion() {
				this.progressError = ''
				let that = this
				let upLoadUrl = this.baseUrl + '/user/update'
				let t = parseInt((new Date().getTime() / 1000).toString());
				let n = Math.floor(Math.random() * 1000) + 1;
				let s = "drivecar2_" + t.toString() + '_' + n;
				let sign = app.secret(s);
				plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
					// console.log(widgetInfo.version);
					uni.request({
						url: upLoadUrl,
						method: 'GET',
						data: {
							version: widgetInfo.version,
						},
						header: {
							'sign': sign
						},
						success: (result) => {
							// console.log(result);
							if (result.data.status == 1) {
								// console.log(result.data);
								that.upUrl = result.data.result.url
								if (that.upUrl != "") {
									that.confirm();
								} else {
									uni.showTabBar()
								}
							}
						},
						fail: (e) => {
							that.progressError = that.lg.drive26
							// console.log('error');
						}
					});
				});
			},
			handleClick(tab, event) {
				// console.log(tab, event);
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			// 打开窗口
			showDrawer(e) {
				this.$refs[e].open()
			},
			// 抽屉状态发生变化触发
			change(e, type) {
				console.log((type === 'showLeft' ? '左窗口' : '右窗口') + (e ? '打开' : '关闭'));
				this[type] = e
			},
			// 关闭左侧抽屉
			closeDrawer(e) {
				this.$refs[e].close()
			},
		},
		onNavigationBarButtonTap(e) {
			// console.log(e.index);
			if (e.index == 0) {
				console.log("第一个按钮");
				this.showDrawer('showLeft')
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

	/deep/ .el-tabs__nav-scroll {
		display: flex;
		justify-content: center;
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

	.example-body {
		padding: 10px;
	}

	.pages-index {
		width: 100%;
		min-height: 100vh;
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
		border-radius: 10px 10px;
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

	// 左侧抽屉
	/deep/ .uni-drawer__content {
		background-color: #2b5783 !important;
	}

	.drawer_image {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		border: 3px solid #fff;
	}

	.drawer_top {
		padding: 50rpx;
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

	.drawer_upgrade {
		width: 540rpx;
		height: 200rpx;
		margin: 0 50rpx;
		border-radius: 8px;
		background-color: #3972ab;
	}

	.drawer_assets {
		width: 540rpx;
		height: 300rpx;
		margin: 20rpx 50rpx;
		padding-top: 30rpx;
		border-radius: 8px;
		background-color: #3972ab;
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
	.drawer_Function {
		width: 540rpx;
		height: 430rpx;
		margin: 20rpx 50rpx;
		padding-top: 30rpx;
		border-radius: 8px;
		background-color: #3972ab;
	}

	.iconImg {
		width: 50rpx;
		height: 50rpx;
	}

	.to_order {
		margin-top: 40rpx;
		padding: 0 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.order {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
	}

	.uni-noticebar {
		height: 70rpx;
		margin-top: 30rpx;
	}
</style>
