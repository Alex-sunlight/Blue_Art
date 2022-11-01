<template>
	<view class="pages-my">
		<view @click="ProfileSettings()" class="drawer_top">
			<view class="drawer_imgSize_box">
				<image class="drawer_image" :src="userInfoTou"></image>
				<view class="drawer_top_size">
					<view class="drawer_name">
						<h3>{{userInfoName}}</h3>
					</view>
					<view class="drawer_id drawer_ids">
						用户账号：{{userInfoEmail}}
					</view>
				</view>
			</view>
			<uni-icons type="forward" size="20" color="#fff"></uni-icons>
		</view>
		<!-- 静态收益 -->
		<view @click="toStatic()" class="drawer_assets">
			<h4 style="color: #fff;margin-left: 30rpx;">收藏收益</h4>
			<br>
			<view class="assets_box">
				<view class="assets">
					<h3 style="color: #fff;">{{money_yests}}</h3>
					<h6 style="color: #d9d9d9;">昨日收益</h6>
				</view>
				<view class="assets">
					<h3 style="color: #fff;">{{money_alls}}</h3>
					<h6 style="color: #d9d9d9;">累计收益</h6>
				</view>
			</view>
		</view>
		<!-- 动态收益 -->
		<view @click="toDynamic()" class="drawer_assets">
			<h4 style="color: #fff;margin-left: 30rpx;">分享收益</h4>
			<br>
			<view class="assets_box">
				<view class="assets">
					<h3 style="color: #fff;">{{money_yest}}</h3>
					<h6 style="color: #d9d9d9;">昨日收益</h6>
				</view>
				<view class="assets">
					<h3 style="color: #fff;">{{money_all}}</h3>
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
			<!-- 热门资讯 -->
			<!-- 线条 -->
			<!-- <view class="">
				
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
					
				</view>
			</view> -->
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
				<!-- 联系我们 -->
				<view class="to_order" @click="myTeam()">
					<view class="order">
						<image src="../../static/image/tuanduns.png" class="iconImg"></image>
						<view class="">
							我的团队
						</view>
					</view>
					<uni-icons type="forward" size="20" color="#fff"></uni-icons>
				</view>
				<view style="width: 80%;margin: 20rpx auto; height: 0.5px;background-color: #fff;opacity: 0.5;">
					<!-- 线条 -->
				</view>
			</view>
			
			<!-- 防骗指南 -->
			<!-- 线条 -->
			<!-- <view class="">
				
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
					
				</view>
			</view> -->

			<!-- 关于我们 -->
			<!-- 线条 -->
			<!-- <view class="">
				
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
				
				</view>
			</view> -->
			<!-- 联系我们 -->
			<!-- 线条 -->
			<!-- <view class="">
				
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
					
				</view>
			</view> -->
			<view class="">
				<!-- 联系我们 -->
				<view class="to_order">
					<view class="order orders">
						<image src="../../static/image/banben02.png" class="iconImg"></image>
						<view class="">
							版本信息
						</view>
					</view>
					<!-- <uni-icons type="forward" size="20" color="#fff"></uni-icons> -->
					<text class="banben">{{versionNumber}}</text>
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
	import {
		mapState
	} from 'vuex';
	import {
		mapMutations
	} from 'vuex'
	
	export default {
		data() {
			return {
				user: [],
				avatar: '../../static/image/stake8.png',
				award_type0: '',
				award_type2: '',
				versionNumber: '',
				userStroeInfo: [],
				userInfoTou: null,
				userInfoName: null,
				userInfoEmail: null,
				money_all:0.00,
				money_yest:0.00,
				money_alls:0.00,
				money_yests:0.00
			}
		},
		onLoad() {
			// this.userInfog()
			// 查询质押收益
			this.getStakeReward()
			this.getStakeReward2()
			// 查询收益总额
			this.getMy()
			// 获取版本号
			this.guanYu()
			// 获取个人信息
			// this.getUsrInfos()
			// 查询收益总额
			// this.getMyRewardsg()
		
		},
		onShow() {
			// this.userInfog()
			// 查询收益总额
			this.getMy()
			this.guanYu()
		
		},
		computed: {
			...mapState({
				loginStatusg: state => state.user.loginStatus,
				userInfo: state => state.user.userInfo,
				// loginStatuso: state => state.user.loginStatus,
			})
		},
		methods: {
			...mapMutations(['logingg']),
			
			// 获取个人信息
			// getUsrInfos(){
			// 	console.log('打印vuex个他信息2',this.userInfo);
			// 	console.log('打印vuex个人信息',this.userInfo.userInfo);
			// },
			// 获取版本号
			guanYu() {
				const userInfo = uni.getStorageSync('userInfo');    //同步获取本地数据
				
				console.log('打印测试用户退出APP重新登录',userInfo);
				// console.log('打印测试用户退出APP重新登录22',users);
							// 判断本地缓存是否存在数据
							if (userInfo !=="") {
								let users = JSON.parse(userInfo)
								console.log('222',222)
								//传到vuex里面储存起来,并改变登录状态
								this.logingg(users)
							}
				
				console.log('打印vuex个他信息2', this.userInfo);
				console.log('打印vuex个人信息3', this.loginStatusg);
				this.userStroeInfo = this.userInfo
				if(this.loginStatusg == true) {
					this.userInfoTou = this.userInfo.user_info.avatar
					console.log('打印用户头像', this.userInfoTou);
					this.userInfoName = this.userInfo.user_info.nickname
					this.userInfoEmail = this.userInfo.user_info.email
				}else {
					console.log('测试未登录');
					this.userInfoTou = null;
					this.userInfoName ='暂未登录';
					this.userInfoEmail ='暂未登录'
				}
				
				const that = this
				plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
					console.log('自动更新600', widgetInfo.version);
					that.versionNumber = widgetInfo.version;
					console.log('版本号', that.versionNumber);
				})

			},
			toStatic() {
				uni.navigateTo({
					url: './static'
				})
			},
			toDynamic() {
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
			userInfog() {
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
			ProfileSettings() {
				console.log('11');
				if(this.loginStatusg == false) {
					uni.navigateTo({
						url: '../login/login'
					});
				}else {
					uni.navigateTo({
						url: '../settings/ProfileSettings'
					});
				}
				
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
			// 我的团队
			myTeam(){
				uni.navigateTo({
					url: '../my/myQrCode'
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
			// 查询收益总额
			getMy(){
				console.log('查询收益总额');
				app.$get("userCenter/getMyRewards").then((res) => {
					console.log('查询收益总额',res);
					if (res.data.status == 1) {
						// this.users = res.data.result;
						this.money_all=res.data.result.data.dynamic_money_all,
						this.money_yest=res.data.result.data.dynamic_money_yest,
						this.money_alls=res.data.result.data.static_money_all,
						this.money_yests=res.data.result.data.static_money_yest
					}
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
		background-color: #24315e;
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

	.drawer_ids {
		margin-top: 5rpx;
		color: #fff;
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
		background-color: #2f3d6e;
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
		width: 600rpx;
		height: 580rpx;
		margin: 20rpx 50rpx;
		padding-top: 30rpx;
		border-radius: 8px;
		background-color: #2f3d6e;
	}

	.iconImg {
		width: 50rpx;
		height: 50rpx;
		margin-right: 10rpx;
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

	.orders {
		// border: 1px solid red;
	}

	.banben {
		margin-right: 30rpx;
		color: #fff;
		font-size: 30rpx;
	}
</style>
