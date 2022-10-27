<template>
	<!-- 首页 -->
	<view class="pages-index">
		<!-- 左侧抽屉 -->
		<view class="example-body">
			<uni-drawer ref="showLeft" mode="left" :width="320" @change="change($event,'showLeft')">
				<view class="drawer_top">
					<view class="drawer_imgSize_box">
						<image class="drawer_image" :src="users.avatar"></image>
						<view class="drawer_top_size">
							<view class="drawer_name">
								<h3>{{users.nickname}}</h3>
							</view>
							<view class="drawer_id drawer_ids">
								账号：{{users.email}}
							</view>
						</view>
					</view>
					<uni-icons type="forward" size="20" color="#fff"></uni-icons>
				</view>
				<!-- 升级 -->
				<view class="drawer_upgrade">
					<h4 style="color: gold;margin-right: 120rpx;">初出茅庐</h4>
					<image src="../../static/image/medal1.png" class="drawer_medal"></image>
				</view>
				<!-- 资产 -->
				<view class="drawer_assets">
					<view class="assets_box">
						<view class="assets">
							<h3 style="color: #fff;">{{totalAssets}}</h3>
							<h6 style="color: #d9d9d9;">总资产</h6>
						</view>
						<view class="assets">
							<h3 style="color: #fff;">{{balance}}</h3>
							<h6 style="color: #d9d9d9;">可用余额</h6>
						</view>
					</view>
					<view style="width: 80%;margin: 20rpx auto; height: 0.5px;background-color: #fff;opacity: 0.5;">
						<!-- 线条 -->
					</view>
					<view class="assets_box">
						<view @click="toRecharge()" class="assets assetsg">
							<image src="../../static/image/recharge.png" class="iconImg"></image>
							<h6 style="color: #d9d9d9;">U盾充值</h6>
						</view>
						<view @click="toWithdrawal()" class="assets assetsg">
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
						<view class="to_order" @click="toOrders()">
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
						<view class="to_order" @click="toOrderss()">
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
    <z-paging ref="paging" refresher-only @onRefresh="onRefresh">
      <!-- 头部轮播图 -->
      <view class="uni-margin-wrap">
        <swiper
          class="swiper"
          circular
          :indicator-dots="indicatorDots"
          :autoplay="autoplay"
          :interval="interval"
          :duration="duration"
        >
          <swiper-item v-for="(item, index) in carousel">
            <view class="swiper-item">
              <image class="swiper_img" :src="item.image" mode=""></image>
            </view>
          </swiper-item>
        </swiper>
        <uni-notice-bar show-icon scrollable :text="announcement" />
      </view>

      <uni-section type="line">
        <view class="uni-padding-wrap uni-common-mt">
          <uni-segmented-control
            :current="current"
            :values="products"
            :style-type="styleType"
            :active-color="activeColor"
            @clickItem="onClickItem"
          />
        </view>
        <view class="content">
          <view
            v-for="(items, indexs) in product"
            v-if="current === items.id - 1"
          >
            <view class="content-text">
              <view class="">
                <view
                  @click="toDetails(item)"
                  v-for="(item, index) in stake"
                  class="stake_area"
                >
                  <view class="uni-margin-wrap">
                    <swiper
                      class="swiper"
                      circular
                      :indicator-dots="indicatorDots"
                      :autoplay="autoplay"
                      :interval="interval"
                      :duration="duration"
                    >
                      <swiper-item>
                        <image class="stake_area_img" :src="item.image"></image>
                      </swiper-item>
                    </swiper>
                  </view>
                  <view class="stake_information">
                    <view class="information_bottom">
                      <h3 class="h3">{{ item.name }}</h3>
                      <view class="math_box">
                        <view style="display: flex">
                          <view class="faxingSize"> 发行量 </view>
                          <view class="math">
                            {{ item.has_buy }}/{{ item.fx_num }}
                          </view>
                        </view>
                        <view class="priceBox">
                          <image
                            src="../../static/image/usdt.png"
                            class="usdtIcon"
                          ></image>
                          <view class="price">
                            {{ item.price }}
                          </view>
                        </view>
                      </view>
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </uni-section>
    </z-paging>
  </view>
</template>

<script>
	const app = getApp().globalData
	export default {
		data() {
			return {
				userInfo: app.userInfo,
				activeName: "1",
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				showLeft: false,
				product: [],
				stake_id: 1,
				stake:[],
				announcement: '',
				items: ['选项卡1', '选项卡2', '选项卡3'],
				// styles: [{
				// 		value: 'button',
				// 		text: '按钮',
				// 		checked: true
				// 	},
				// 	{
				// 		value: 'text',
				// 		text: '文字'
				// 	}
				// ],
				colors: ['#007aff', '#4cd964', '#dd524d'],
				current: 0,
				colorIndex: 0,
				activeColor: '#4cd964',
				styleType: 'button',
				products: [],
				carousel:'',
				// 总资产
				totalAssets:0,
				// 余额
				balance:0,
				// 个人信息
				users:''
			}
		},
		onLoad() {
			this.getNewListByType()
			this.getNewListByTypeGG()
			this.getStakeProduct()
			this.getNftByStakeId()
			// 查询个人资产
			this.theAsset()
			// 查询个人信息
			this.getInformation()
						// getInformation()
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
		// 个人信息
		userInfos() {
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
			// 获取个人信息
			getInformation() {
				app.$get('userCenter/userInfo')
					.then(res => {
						console.log('获取个人信息1', res.data);
						console.log('获取个人信息', res.data.result);
						if (res.data.status == 1) {
							this.users = res.data.result;
						}
			
					})
			
			},
		// 查询资产
		theAsset(){
			app.$get('userCenter/getMyBalance')
					.then(res => {
						console.log('查询个人资产',res.data.result);
						this.totalAssets = res.data.result.data.all_money;
						this.balance = res.data.result.data.can_money;
						// if(res.data.result.flag == 1) {
						// 	uni.navigateTo({
						// 		url: './addressReceipt'
						// 	});
						// }
						// if(res.data.result.flag == 2) {

						// }
					})
		},
		onClickItem(e) {
			if (this.current !== e.currentIndex) {
				this.current = e.currentIndex
				this.stake_id = e.currentIndex + 1
				this.getNftByStakeId()
				console.log(this.stake_id,'---------------------')
			}
		},
		styleChange(e) {
			if (this.styleType !== e.detail.value) {
				this.styleType = e.detail.value
			}
		},
		colorChange(e) {
			if (this.styleType !== e.detail.value) {
				console.log(e.detail.value);
				this.activeColor = e.detail.value
			}
		},
		//下拉刷新被触发
		onRefresh() {
			//以告知z-paging下拉刷新结束，这样才可以开始下一次的下拉刷新
			setTimeout(() => {
				//1.5秒之后停止刷新动画
				this.$refs.paging.complete();
			}, 1500)
		},
		// 轮播图
		getNewListByType() {
			app.$get('news/getNewListByType', {
				page: 1,
				size: 10,
				type: 2
			}).then(res => {
				console.log(res, '资讯')
				this.carousel = res.data.result.data
			})
		},
		// 公告
		getNewListByTypeGG() {
			app.$get('news/getNewListByType', {
				page: 1,
				size: 10,
				type: 1
			}).then(res => {
				console.log(res, '公告')
				this.announcement = res.data.result.data[0].zh_cn_content
				console.log()
			})
		},
		toRecharge() {
			app.$get('wallet/getLastRecharge')
				.then(res => {
					console.log('打印查询未完成订单数据', res.data.result.data);
					// address
					if (res.data.result.flag == 1) {
						let datas = {
							id: res.data.result.data.id,
							address: res.data.result.data.address,
							amount: res.data.result.data.ys_amount,
							ordersn: res.data.result.data.ordersn,

						}
						// JSON.stringify(res.data.result.data.address)
						uni.navigateTo({
							url: '../../pages/index/addressReceipt?data=' + JSON.stringify(datas)
						});
					}
					if (res.data.result.flag == 2) {
						uni.navigateTo({
							url: './recharge'
						});
					}
				})
		},
		toWithdrawal() {
			uni.navigateTo({
				url: './withdrawal'
			})
		},
		toOrders() {
			uni.navigateTo({
				url: './prepaidOrders'
			})
		},
		toOrderss() {
			uni.navigateTo({
				url: './withdrawalOrder'
			})
		},

		toDetails(item) {
			uni.navigateTo({
				url: './details?id=' + item.id
			});
		},
		// 质押产品列表
		getStakeProduct() {
			try {
				app.$get('stake/getStakeProduct').then(res => {
					if (res.data.status == 1) {
						console.log(res.data.result.data, '质押产品列表')
						this.product = res.data.result.data
						for (let i = 0; i < this.product.length; i++) {
							this.products.push(this.product[i].name)
						}
					}
				})
			} catch (e) {
				//TODO handle the exception
			}

		},
		// 根据质押产品获取nft列表
		getNftByStakeId() {
			try {
				app.$get('nft/getNftByStakeId', {
					stake_id: this.stake_id,
					page: 1,
					size: 10
				}).then(res => {
					if (res.data.status == 1) {
						console.log(res.data.result.data, '根据质押产品获取nft列表')
						this.stake = res.data.result.data
					}
				})
			} catch (e) {
				//TODO handle the exception
			}

		},

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
			uni.navigateTo({
				url: './invite'
			});
		}
	},
}
</script>

<style lang="scss">
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
  border-radius: 5px 0 0 5px;
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
  // font-size: 30rpx;
}
.drawer_ids {
	color: #fff;
	font-size: 30rpx;
	margin-top: 10rpx;
	// border: 1px solid red;
}

.drawer_upgrade {
  width: 540rpx;
  height: 200rpx;
  margin: 0 50rpx;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3972ab;
}

	.drawer_id {
		font-size: 10px;
		// border: 1px solid red;
	}
.drawer_medal {
  width: 160rpx;
  height: 160rpx;
  margin-right: 10rpx;
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
  // margin-top: 30rpx;
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
.assetsg {
  margin-top: 20rpx;
}
.assetsg h6 {
  font-size: 26rpx;
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

.example-body {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  padding: 0;
}

.uni-common-mt {
  margin-top: 30px;
}

.uni-padding-wrap {
  // width: 750rpx;
  padding: 0px 30px;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 150px;
  // text-align: center;
}

.content-text {
  font-size: 14px;
  color: #666;
}

.color-tag {
  width: 25px;
  height: 25px;
}

.uni-list {
  flex: 1;
}

.uni-list-item {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex: 1;
  flex-direction: row;
  background-color: #ffffff;
}

.uni-list-item__container {
  padding: 12px 15px;
  width: 100%;
  flex: 1;
  position: relative;
  /* #ifndef APP-NVUE */
  display: flex;
  box-sizing: border-box;
  /* #endif */
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
}

.uni-list-item__content-title {
  font-size: 14px;
}
</style>
