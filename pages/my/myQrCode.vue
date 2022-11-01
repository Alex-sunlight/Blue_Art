<template>
	<view class="pages-invite">
		<view class="myTeam">
			<view class="tuandun">
				<text>
					我的团队
				</text>
				<text>
					lv0
				</text>
			</view>
			<view class="myTeamBox">
				<view class="runShu">
					<text>{{tuanDunRun.team_num}}</text>
					<text>团队人数</text>
				</view>
				<view class="runShu">
					<text>{{tuanDunRun.direct_num}}</text>
					<text>直推人数</text>
				</view>
				<view class="runShu runShuS">
					<text>{{tuanDunRun.valid_num}}</text>
					<text>有效会员</text>
				</view>
				<view class="runShu">
					<text>{{tuanDunRun.all_money}}</text>
					<text>总业绩</text>
				</view>
				<!-- <view class="runShu">
					<text>{{tuanDunRun.all_money}}</text>
					<text>业绩</text>
				</view> -->
			</view>
			<view class="juli">
				距离下一等级还差30.00k
			</view>
		</view>
		<view class="gunDongBox">
			<scroll-view scroll-x="true">
				<view class="gunDong" style="display: flex;">
					<view class="gunZi" v-for="(item, index) in list" :key="index">
						<image :src="item.thumb"></image>
						<text>{{item.lv/1000}}k</text>
					</view>
				</view>
			</scroll-view>

			<!-- 筛选数据 -->
			<view class="box-bg">
				<view class="timerSorting" @click="getTimer()">
					<span>全部会员</span>
					<view class="jianBox">
						<image src="../../static/image/shajians.png" mode="" class="shajian"></image>
						<image src="../../static/image/xiajians.png" mode="" class="xiajian"></image>
					</view>
				</view>
				<view class="timerSorting" @click="priceSort()">
					<span>业绩</span>
					<view class="jianBox">
						<image src="../../static/image/shajians.png" mode="" class="shajian"></image>
						<image src="../../static/image/xiajians.png" mode="" class="xiajian"></image>
					</view>
				</view>
				<view class="timerSorting" @click="priceSort()">
					<span>注册时间</span>
					<view class="jianBox">
						<image src="../../static/image/shajians.png" mode="" class="shajian"></image>
						<image src="../../static/image/xiajians.png" mode="" class="xiajian"></image>
					</view>
				</view>
			</view>
			<!-- 表格 -->
			<view class="warp">
				<view class="box">
					<!-- <view class="title">默认效果</view> -->
					<t-table @change="change">
						<!-- <t-tr>
							<t-th>序号</t-th>
							<t-th>姓名</t-th>
							<t-th>年龄</t-th>
							<t-th>爱好</t-th>
						</t-tr> -->
						<t-tr  v-for="item in tableList" :key="item.id">
						<!-- 	<t-td>{{ item.id + 1 }}</t-td> -->
							<t-td>{{ item.nickname }}</t-td>
							<t-td>{{ item.money }}</t-td>
							<t-td>{{ item.create_at }}</t-td>
						</t-tr>
					</t-table>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	const app = getApp().globalData;
	import tTable from '@/components/t-table/t-table.vue';
	import tTh from '@/components/t-table/t-th.vue';
	import tTr from '@/components/t-table/t-tr.vue';
	import tTd from '@/components/t-table/t-td.vue';
	export default {
		components: {
			tTable,
			tTh,
			tTr,
			tTd
		},
		data() {
			return {
				user: '',
				erWeiMaData: '',
				indicatorStatus: false,
				list: [{
						thumb: "../../static/image/dj01.png",
						lv: '30k'
					}, {
						thumb: "../../static/image/dji02.png",
						lv: '100k'
					}, {
						thumb: "../../static/image/dj03.png",
						lv: '500k'
					}, {
						thumb: "../../static/image/dj04.png",
						lv: '2000k'
					}, {
						thumb: "../../static/image/dj05.png",
						lv: '5000k'
					},
					{
						thumb: "../../static/image/dj06.png",
						lv: '12000k'
					}
				],
				tiemrStatus: true,
				tableList: [{
						id: 0,
						name: '张三',
						age: '19',
						hobby: '游泳'
					},
					{
						id: 1,
						name: '李四',
				  age: '21',
						hobby: '绘画'
					},
					{
						id: 2,
						name: '王二',
						age: '29',
						hobby: '滑板'
					},
					{
						id: 3,
						name: '码字',
						age: '20',
						hobby: '蹦极'
					}
				],
				jiBie:[],
				tuanDunRun:[],
				invitationList:[]
			}

		},
		onLoad() {
			this.getInformation()
			this.getErWeiMa()
			this.getLeve()
			this.getTeamNum()
			this.getMyChildList()
		},
		methods: {
			// 表格方法
			change(e) {
				console.log(e.detail);
			},
			edit(item) {
				uni.showToast({
					title: item.name,
					icon: 'none'
				});
			},
			// 获取个人信息
			getInformation() {
				app.$get('userCenter/userInfo')
					.then(res => {
						console.log('获取个人信息1', res.data);
						console.log('获取个人信息', res.data.result);
						if (res.data.status == 1) {
							this.user = res.data.result;
						}

					})

			},
			// 获取二维码
			getErWeiMa() {
				app.$get('userCenter/GetInviteInfo')
					.then(res => {
						console.log('获取二维码1', res.data);
						// console.log('获取个人信息', res.data.result);
						if (res.data.status == 1) {
							// this.user = res.data.result;
							this.erWeiMaData = res.data.result
						}

					})
			},
			// 保存分享二维码
			longtap() {
				uni.downloadFile({
					url: this.erWeiMaData.qrcode,
					success: (res) => {
						if (res.statusCode === 200) {
							uni.saveImageToPhotosAlbum({
								filePath: res.tempFilePath,
								success: function() {
									uni.showToast({
										title: "保存成功",
										duration: 2000
									});
								},
								fail: function() {
									uni.showToast({
										title: "保存失败，请稍后重试",
										icon: "none"
									});
								}
							});
						}
					}
				})
			},
			// 时间排序
			getTimer() {
				console.log(111);
				if (this.tiemrStatus == true) {
					this.tiemrDatas = 0;
					this.tiemrStatus = false
				} else {
					this.tiemrDatas = 1;
					this.tiemrStatus = true
				}
				$http.request({
					url: '/commoditySku/getList',
					header: {
						token: true
					},
					data: {
						sort: this.tiemrDatas, // 1 按时间排序 2按价格从低到高 3按价格从高到低 4按人气由高到低
						isRecommend: this.isRecommend, // 1 首页推荐
						artistId: this.artistId, //艺术家ID
						marketType: this.marketType, // 1版权品 2衍生品
						cateId: this.cateId, // 分类ID
					}
				}).then((res) => {
					this.imges = res.data.list
					// console.log(res.data.list, '打印排序')
				})
			},
			// 获取业绩
			getLeve(){
				app.$get('userCenter/getLevelList')
					.then(res => {
						console.log('获取业绩级别', res.data);
						// console.log('获取个人信息', res.data.result);
						if (res.data.status == 1) {
							this.jiBie= res.data.result.data
							console.log('打印this.jiBie',this.jiBie);
							// this.user = res.data.result;
							// this.erWeiMaData = res.data.result
							// this.list
							for(let i=0; i <this.jiBie.length; i++){
								console.log(111,i);
								if(i != 0){
									this.list[i-1].lv = this.jiBie[i].amount;
									console.log('this.list[i].lv',this.list[i].lv);
									console.log('this.jiBie[i].amount',this.jiBie[i].amount);
								}
								
								
							}
						}
				
					})
			},
			// 获取我的团队
			getTeamNum(){
				app.$get('userCenter/getTeamNum')
					.then(res => {
						console.log('获取团队数据', res.data);
						// console.log('获取个人信息', res.data.result);
						if (res.data.status == 1) {
							this.tuanDunRun = res.data.result.data
						}
				
					})
			},
			// 获取邀请人数
			getMyChildList(){
				app.$get('userCenter/getMyChildList')
					.then(res => {
						console.log('获取我的邀请列表', res.data);
						// console.log('获取个人信息', res.data.result);
						if (res.data.status == 1) {
							this.tableList = res.data.result.data
						}
				
					})
			}
		},
		onNavigationBarButtonTap(e) {
			// console.log(e.index);
			if (e.index == 0) {
				console.log("第一个按钮");
				uni.switchTab({
					url: "./index",
				});
				// this.showDrawer("showLeft");
			}
			// if (e.index == 1) {
			//   console.log("第二个按钮");
			//   uni.switchTab({
			//     url: "./index",
			//   });
			// }
		},

	}
</script>


<style lang="scss">
	.pages-invite {
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #232f5f;

		.myTeam {
			width: 90%;
			margin: 0 auto;
			margin-top: 30rpx;
			height: 360rpx;
			display: flex;
			flex-wrap: wrap;
			background-color: #7287ca;
			// border: 1px solid red;
			border-radius: 12rpx;

			.tuandun {
				width: 100%;
				// padding-left: 10%;
				height: 60rpx;
				line-height: 60rpx;
				margin-top: 20rpx;
				display: flex;
				justify-content: space-between;

				// border: 1px solid red;
				text {
					width: 200rpx;
					padding-left: 10%;
					height: 50rpx;
					line-height: 50rpx;
					text-align: center;
					font-size: 28rpx;
					color: #fff;
					// border: 1px solid red;
				}

				text:nth-of-type(1) {
					width: 120rpx;
				}
			}

			text {
				width: 90%;
				padding-left: 10%;
				height: 50rpx;
				line-height: 50rpx;
				font-size: 28rpx;
				color: #fff;
				// border: 1px solid red;
			}

			.myTeamBox {
				width: 90%;
				// padding-left: 10%;
				margin: 0 auto;
				margin-top: 5rpx;
				height: 150rpx;
				display: flex;
				flex-wrap: wrap;
				background-color: #7287ca;
				border-bottom: 2px solid #c9dcff;

				// border-radius: 12rpx;
				.runShu {
					width: 130rpx;
					height: 128rpx;
					display: flex;
					flex-wrap: wrap;

					// border: 1px solid red;
					text {
						width: 100%;
						height: 50rpx;
						line-height: 50rpx;
						text-align: center;
						font-size: 24rpx;
						color: #c9dcff;
					}

					text:nth-of-type(1) {
						font-size: 32rpx;
						color: #fff;
					}
				}

				.runShuS {
					margin-left: 20rpx;
				}

				.runShu:nth-of-type(2) {
					margin-left: 20rpx;
				}
			}

			.juli {
				width: 90%;
				height: 40rpx;
				line-height: 40rpx;
				padding-left: 10%;
				font-size: 24rpx;
				color: #c9dcff;
				// border: 1px solid red;
			}
		}

		.gunDongBox {
			width: 96%;
			// height: 900rpx;
			margin-top: 40rpx;
			// border: 1px solid red;
			border-radius: 20rpx 20rpx 0rpx 0rpx;
			background-color: #2f3d6e;

			.gunDong {
				width: 99%;
				height: 230rpx;
				display: flex;
				margin: 0 auto;
				margin-top: 30rpx;
				// border: 1px solid red;

				.gunZi {
					width: 320rpx;
					height: 218rpx;
					padding-left: 20rpx;
					padding-right: 20rpx;
					display: flex;
					flex-wrap: wrap;
					margin-left: 30rpx;

					// border: 1px solid red;
					image {
						width: 140rpx;
						height: 140rpx;
						margin-top: 10rpx;
					}

					text {
						width: 100%;
						height: 40rpx;
						line-height: 40rpx;
						font-size: 28rpx;
						text-align: center;
						color: #fff;
						// border: 1px solid red;
					}
				}
			}
		}

		.box-bg {
			// position: fixed;
			width: 100%;
			height: 90rpx;
			margin-top: 10rpx;
			// position: fixed;
			display: flex;
			// top: 89px;
			// z-index: 99;
			background-color: #415385;
		}

		.box-bg .timerSorting {
			width: 190rpx;
			height: 50rpx;
			margin-top: 20rpx;
			// margin-left: 30rpx;
			display: flex;
			flex-wrap: wrap;
			font-size: 24rpx;
			color: #fff;
			// line-height: 30px;
			margin-left: 75rpx;
			// border: 1px solid red;
		}

		.box-bg .timerSorting:nth-of-type(2) {
			width: 120rpx;
			margin-left: 55rpx;
		}

		.box-bg .timerSorting:nth-of-type(2) span {
			width: 60rpx;
		}

		.timerSorting span {
			width: 105rpx;
			height: 54rpx;
			line-height: 54rpx;
			margin-left: 20rpx;
			// border: 1px solid green;
		}

		// .box-bg .timerSorting:nth-of-type(3) {
		// 	margin-left: 70px;
		// 	width: 65px;
		// }

		// .timerSorting:nth-of-type(3) span {
		// 	width: 30px;
		// 	color: #fdd902;
		// }

		// .timerSorting:nth-of-type(3) .jianBox {
		// 	width: 24px;
		// 	height: 22px;
		// 	margin-top: 3px;
		// 	display: flex;
		// 	flex-wrap: wrap;
		// 	// border: 1px solid skyblue;
		// }

		// .timerSorting:nth-of-type(3) .sx {
		// 	width: 22px;
		// 	height: 22px;
		// }

		.timerSorting .jianBox {
			width: 35rpx;
			height: 36rpx;
			margin-top: 10rpx;
			display: flex;
			flex-wrap: wrap;
			// border: 1px solid skyblue;
		}

		.jianBox .shajian {
			width: 20rpx;
			height: 20rpx;
			// margin-left: 10px;
			// border: 1px solid red;
		}

		.jianBox .xiajian {
			width: 20rpx;
			height: 20rpx;
			margin-top: -5px;
			// margin-left: 0px;

		}

		.city {
			width: 40%;
			font-size: 12px;
			/* #ifndef APP-PLUS-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			margin-left: 4px;
		}
		.t-table {
			width: 95%;
		}
		.t-table .t-tr:nth-child(2n) {
			background-color: #2f3d6e;
		}
		.t-table .t-tr .t-td {
			font-size: 20rpx;
			color: #fff;
		}
		.box {
			margin-top: 20rpx;
		}
	}
</style>
