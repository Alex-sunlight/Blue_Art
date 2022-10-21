const publicKey = `-----BEGIN PUBLIC KEY-----
			MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC7FiKiZXTMt1miEgX+ZhZ677hH
			hVQIitp/Ks08aBEIHw+lOozrR0aSZQXJ79L+Icsi2YpLbQ3QEXo0EUvlyjS0hovw
			aAqKkzN4yb1Ofoq1KsI/tfB1RJQKRE2akaXigo0MhtplUS7p3m/Mc8SVqoOFtrWk
			Crp3NKGsjBt6WwePDQIDAQAB
			-----END PUBLIC KEY-----`;
function secret(val) {
	//加密
	const Signature = require("fucking-util-signature-all");
	const rsa = new Signature.RSA();
	rsa.setPublicKey(publicKey);
	rsa.keys.setOptions({ encryptionScheme: 'pkcs1' });
	const newVal = rsa.encrypt(val, 'base64');
	return newVal;
};
const baseUrl = 'http://192.168.1.102';//PRO
// const baseUrl = 'https://api.drive2.cc'; // main
// const baseUrl = 'https://driveapi.hitoo.xyz';//DEV
// 接口:http://47.242.54.11:8088
// k线图:http://47.242.54.11:8088
// 交易市场:ws://47.242.54.11:7121
const prefix = '/';
let requestNum = 0;//请求次数
const showToast = (val) => {
	uni.showToast({
		title: val,
		icon: "none"
	})
}
const upload = (url, data = { filePath: '' }, isArray = false) => {
	// const token = '479aXUEFzCy+BYtxAUCBoF/Wbem8fAXr9mBqE1m/a3dT';
	const token = uni.getStorageSync('token');
	let lang = 'zh-cn';
	const langType = uni.getStorageSync('langType');
	if (langType && langType != '') {
		lang = langType
	};
	if (isArray) {
		return new Promise((resolve, reject) => {
			// uni.showLoading();
			console.log(data.filePath)
			uni.uploadFile({
				url: baseUrl + prefix + url,
				files: data.files,
				formData: data.formData,
				// filePath:data.filePath,
				name: "image",
				header: {
					token: token,
					lang: lang
				},
				success: (res) => {
					console.log(res);
					uni.hideLoading();
					const json = JSON.parse(res.data);
					console.log(json)
					if (json.status == 1) {
						//请求成功
						resolve(json);
					} else {
						const app = getApp().globalData;
						app.$tips('网络开小差~');
					};
				},
			})
		})
	} else {
		return new Promise((resolve, reject) => {
			// uni.showLoading();
			uni.uploadFile({
				url: baseUrl + prefix + url,
				filePath: data.filePath,
				formData: data.formData,
				name: "image",
				header: {
					token: token,
				},
				success: (res) => {
					console.log(res)
					const json = JSON.parse(res.data);
					console.log(json)
					uni.hideLoading();
					if (json.status == 1) {
						//请求成功
						resolve(json);
					} else {
						const app = getApp().globalData;
						app.$tips('网络开小差~');
					};
				},
				fail: (err) => {
					console.log(err)
				}
			})
		})
	}

}
const createdPromise = (url, data = {}, method = 'GET') => {
	// uni.setStorageSync('token','MTczOTUyMDkwOS44NjQ1MDg5OjE6M2Y3NTkwY2MzODZkNmFjZmQwZjA4ZWMwN2NhNjA1MWZmZTM4OGIxMg==')
	// uni.setStorageSync('token','MTczOTY0Mjc2My45NTAzMDMzOjEwOjZlNzg2NmMwOTRhYjE0NzBjOTRlZjFlNGM3YzQzN2NmMjNmZmU1YTY=')
	const token = uni.getStorageSync('token');
	let lang = 'en_US';
	// let lang = 'zh_CN';
	const langType = uni.getStorageSync('langType');
	const t = parseInt((new Date().getTime() / 1000).toString());
	const n = Math.floor(Math.random() * 1000) + 1;
	const s = "drivecar2_" + t.toString() + '_' + n;
	const sign = secret(s);
	if (langType && langType != '') {
		lang = langType
	};
	// console.log(lang)
	// console.log(token)
	// let lang = 'en-us';
	// const langType = uni.getStorageSync('langType');
	// if(langType && langType != ''){
	// 	lang = langType
	// };
	// console.log(lang)
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + prefix + url,
			method,
			data,
			header: {
				'token': token, //自定义请求头token信息
				'lang': lang,//自定义请求头token信息
				'sign': sign
			},
			success: (res) => {
				// console.log(res)
				// uni.hideLoading();
				if (res.data.status == 1005) {
					showToast(res.data.info);
					uni.removeStorageSync('token');
					setTimeout(() => {
						uni.reLaunch({
							url: '/pages/login/login'
						})
					}, 1000)

				} else if (res.data.status == 1006) {
					showToast(res.data.info);
					setTimeout(() => {
						uni.reLaunch({
							url: '/pages/index/active/active'
						})
					}, 1000)
				} else {
					resolve(res);
					if (res.data.status != 1) {
						if (res.data.info) {
							showToast(res.data.info);
						};
					}
				};

			},
			fail: (err) => {
				console.log(err);
				uni.hideLoading();
				reject(err);
			}
		});
		// setTimeout(()=>{
		// 	uni.hideLoading();
		// },5000)
	})

};
const get = (url, data) => {
	return createdPromise(url, data, 'GET');
};
const post = (url, data) => {
	return createdPromise(url, data, 'POST');
};
export default {
	get,
	post,
	upload,
	baseUrl
}
