<script>
	import https from './common/request.js';
	import tips from './common/t.js';
	import next from './common/router.js';
	import lang2 from './common/lang2.js';
	import lang3 from './common/lang.js';
	import hwhLang from '@/common/hwh_language.js';
	import zI18n from '@/uni_modules/z-paging/components/z-paging/js/z-paging-i18n'
	 
	export default {
		onLaunch: function() {
			console.log('App Launch');
			// const token = 'MTczNzM0OTMyOC40NjI4MzU4OjE6YzFiYzkwMzNmODAyMDRlYTA2OWVjMDM1NjIxNTZjYjQyNzdjZGZiYw==';
			// uni.setStorageSync('token',token);
			const app = getApp().globalData;
			const os = uni.getSystemInfoSync();
			app.osWidth = os.windowWidth; //屏幕可用宽度
			app.osHeight = os.windowHeight; //屏幕可用高度
			app.osStateH = os.statusBarHeight; //状态栏高度
			app.tabbarHeight = app.osHeight - os.safeArea.height
			plus.naigator.closeSplasnScreen();
			uni.getStorage({
				key: 'langType',
				success: (res) => {
					app.setLg2(res.data)
				}
			})
			let token = uni.getStorageSync('token')
			console.log(token);
			if (token) {
				app.getUserInfo()
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData: {
			mainAddress: '',
			tabbarHeight: '36',
			userInfo: {
				"id": '',
				"nickname": '',
				"avatar_id": '',
				"gender": '',
				"email": '',
				"drive_count": '',
				"drive_time": '',
				"drive_distance": '',
				"password": '',
				"wallet_id": '',
				"invite_code": '',
				"avatar": '',
				"url": ''
			},
			publicKey: `-----BEGIN PUBLIC KEY-----
			MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC7FiKiZXTMt1miEgX+ZhZ677hH
			hVQIitp/Ks08aBEIHw+lOozrR0aSZQXJ79L+Icsi2YpLbQ3QEXo0EUvlyjS0hovw
			aAqKkzN4yb1Ofoq1KsI/tfB1RJQKRE2akaXigo0MhtplUS7p3m/Mc8SVqoOFtrWk
			Crp3NKGsjBt6WwePDQIDAQAB
			-----END PUBLIC KEY-----`,
			osHeight: '667', //屏幕可用高度
			osWidth: '340', //屏幕可用宽度
			osStateH: 30, //设备状态栏高度
			pageLock: true,
			$get: https.get,
			$post: https.post,
			$upload: https.upload,
			$tips: tips.$tips,
			$next: next.$next,
			$tab: next.$tab,
			$un: next.$un,
			$back: next.$back,
			parentData: {},
			wordKey: "",
			words: '', //用于导出助记词
			key: "", //用于私钥
			headImg: "",
			la: {}, //语言
			wgtUrl: "", //新版本下载地址
			lang: 'ch', //初始化用得语言
			codeNum: 60,
			codeNum2: 60,
			upDataLock: true,
			timer: '', //定时器方法
			revokeApiLock: false, //用于交易列表执行撤单后返回刷新页面
			addressMsg: {},
			addressLock: false,
			goodsMsg: [], //商品详情
			shopMyOrderIndex: 0,
			//Router,用于销毁
			shopRouterGoodsMsg: {},
			shopRouterPaymentMsg: {},
			shopRouterSuccessMsg: {},
			shopRouterOrdeDetailsrMsg: {}, //订单详情
			shopMyAppealMsg: {},
			shopPage: 0,
			shopCatApiLock: false, //是否刷新购物车
			shopRouterCatLock: false, //是否通过购物车交易
			shopTransactionLock: false, //交易完成后防止路由过渡过剩
			shopRouterMyLock: false, //通过订单进入进行交易
			// addressApiLock:false,en-us
			// currentLang2:'zh-cn',
			currentLang2: 'en_US',
			wallteRefresh: false,
			shopNavNum: 0, //商城下标
			classLists: [],
			carDetailStatus: false, //是否刷新汽车详情页
			embryoInfo: {},
			onSellCarStatus: false, //是否出售车子
			onLangState: false,
			onShear(number) {
				//裁剪
				const str = number + '';
				if (str.indexOf('.') != -1) {
					const left = str.split('.')[0];
					const right = str.split('.')[1];
					console.log(left, right.length);
					if (right.length > 4) {
						const newStr = right.slice(0, 4);
						return (left + '.' + newStr) * 1
					} else {
						return number;
					}
				} else {
					return number;
				}
			},
			setCodeNum() {
				const app = getApp().globalData;
				clearInterval(app.timer)
				app.timer = setInterval(() => {
					app.codeNum--;
					if (app.codeNum <= 0) {
						app.codeNum = 60;
						clearInterval(app.timer)
					};
					// console.log(app.codeNum)
				}, 1000)
			}, //发送验证码时间
			secret(val) {
				//加密
				const app = getApp().globalData;
				const Signature = require("fucking-util-signature-all");
				const rsa = new Signature.RSA();
				rsa.setPublicKey(app.publicKey);
				rsa.keys.setOptions({
					encryptionScheme: 'pkcs1'
				});
				const newVal = rsa.encrypt(val, 'base64');
				return newVal;
			},
			getOsHeight() {
				const os = uni.getSystemInfoSync();
				console.log(os)
				return os.windowHeight; //屏幕可用高度
			},
			getLg2() {
				let currentLang2 = uni.getStorageSync('langType')
				console.log(currentLang2);
				if (currentLang2 == 'zh_CN') {
					zI18n.setLanguage('cn')
					return lang3.lang.ch
				}else if (currentLang2 == 'en_US') {
					zI18n.setLanguage('en')
					return lang3.lang.en
				}else{
					zI18n.setLanguage('en')
					return lang3.lang.en
				}
			},
			setLg2(lg) {
				this.currentLang2 = lg
			},
			getLg3() {
				return this.currentLang2
			},
			getHwhLang() {
				if (this.currentLang2 == 'zh_CN') {
					return hwhLang.cn
				}
				if (this.currentLang2 == 'en_US') {
					return hwhLang.en
				}
			},
			locInfo: '',
			speed: '',
			speedList: [],
			avgSpeed: '',
			speedList2: [],
			allRaw: '',
			polylines: {
				data: {
					id: 'line-1',
					type: 'line',
					width: 5,
					color: '#33A853',
					coordinates: [],
				}
			},
			rallIndex: 0,
			getUserInfo() {
				const app = getApp().globalData
				app.$get('userCenter/userInfo')
					.then(res => {
						if (res.data.status == 1) {
							console.log(res.data.result);
							app.userInfo = res.data.result
							uni.$emit('userInfoFinish', true)
						}
					})
			}
		}
	}
</script>

<style lang="scss">

	page {
		height: 100%;
		background: #FFFFFF;
	}

	.none-box {
		align-items: center;
		justify-content: center;
	}

	
	.none-txt {
		margin-top: 30rpx;
	}

	.pageOut {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		opacity: 0;
		box-sizing: border-box;
		transition: 1s;
	}

	.showPageOut {
		opacity: 1;
	}

	.bH {
		padding-top: var(--status-bar-height) !important;
	}

	.lev {
		width: 750rpx;
		align-items: center;
	}

	.btns {
		width: 750rpx;
		height: 180rpx;
		align-items: center;
	}


	.btn-txt {
		margin-bottom: 20rpx;
	}

	.box {
		width: 750rpx;
		align-items: center;
		margin-top: 100rpx;
	}

	.content {
		//内容
		width: 750rpx;
		flex: 1;
		align-items: center;
	}

	//loading
	.loading {
		width: 750rpx;
		height: 88rpx;
	}


	//head
	.content-head {
		//头部
		width: 750rpx;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 10;
	}

	.content-head-box {
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.content-head-left {
		flex-direction: row;
		height: 88rpx;
		align-items: center;
		left: 32rpx;
		top: 0;
	}



	.content-head-title {
		margin-left: 10rpx;
	}

	.content-head-mid {
		height: 88rpx;
	}

	.content-head-mid-title {
		font-family: PingFang SC;
	}

	.content-head-mid-icon {
		margin-left: 10rpx;
	}

	.content-head-right {
		height: 88rpx;
		right: 20;
		justify-content: center;
	}

	.content-head-right2 {
		height: 88rpx;
		right: 20;
		// justify-content: center;
		flex-direction: row;
		align-items: center;
	}


	.lists-nonemsg-txt {
		margin-left: 10rpx;
		margin-right: 10rpx;
	}

	.fr {
		display: flex;
		flex-direction: row;
	}

	.fc {
		display: flex;
		flex-direction: column;
	}

	.jc {
		justify-content: center;
	}

	.ac {
		align-items: center;
	}

	.jb {
		justify-content: space-between;
	}

	.ae {
		align-items: flex-end;
	}

	//选择
	.choose-box {
		width: 600rpx;
	}

	.choose {
		text-align: center;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding-left: 30rpx;
		padding-right: 39rpx;
		margin-top: 20rpx;
		border-radius: 10rpx;
	}


	.choose-dwon {
		right: 40rpx;
	}

	.btnOuter {
		width: 500rpx !important;
		margin: 0 auto;
		margin-top: 37rpx;
		height: 90rpx !important;
		font-size: 50rpx !important;
		font-weight: bold;
		box-shadow: 0 5rpx 20rpx rgba(59, 160, 235, .5);
	}

	.u-modal,
	.u-popup__content {
		border-radius: 40rpx !important;
	}

	.u-modal__content {
		padding: 40rpx 25rpx !important;
	}

	.modelTitle {
		font-size: 36rpx;
		font-weight: 800;
		color: #111111;
	}

	.u-upload__wrap__preview {
		margin: 0 !important;
	}

	.whiteNav .u-navbar__content__title {
		color: #FFFFFF !important;
	}

	.uni-textarea-textarea {
		color: #999999 !important;
	}

	

	.car-goods {
		top: -40rpx;
		// margin-bottom: 40rpx
	}

	.zoom {
		transform: scale(2);
		margin-top: 70rpx;
	}

	.zoom2 {
		transform: scale(1.5);
		margin-top: 60rpx;
		margin-left: 60rpx;
	}

	.zoom3 {
		transform: scale(1.5);
		margin-top: 40rpx;
		margin-left: 60rpx;
	}

	.needHeight .zp-paging-container-content {
		height: 100% !important;
	}

	.drags {
		width: 750rpx;
		height: 80rpx;
		flex-direction: row;
		align-items: center;
		padding-left: 10rpx;
	}
</style>
