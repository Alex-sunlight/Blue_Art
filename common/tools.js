// import Language from './language.js'

let navTo = (url, type = "slide-in-right") => {
	uni.navigateTo({
		url,
		animationType: type
	})
}


let backTo = (delta = 1, type = "slide-out-right") => {
	uni.navigateBack({
		delta,
		animationType: type
	})
}

let $noToast = (title, icon = "none") => {
	uni.showToast({
		title,
		icon
	})
}
let showHtml = (str) => { //富文本解析
	return str

		.replace(str ? /&(?!#?\w+;)/g : /&/g, '&amp;')

		.replace(/&amp;nbsp;/g, "")

		.replace(/&lt;/g, "<")

		.replace(/&gt;/g, ">")

		.replace(/&quot;/g, "\"")

		.replace(/&#39;/g, "\'")

}
function parsNum(num,fix){
	let lNum = Number(num)
	let res = parseInt(num * fix) / fix
	return res
}

function decimalsToFractional(decimals){
    const formatDecimals = decimals
    let denominator = 1000 //初始化分母
    let numerator  = formatDecimals * 1000 //初始化分子
    // let bigger = 0
    // function  recursion (){
    //     bigger = denominator > numerator ? denominator : numerator
    //     for(let i = bigger; i > 1; i--){
    //         if(
    //             Number.isInteger(numerator/i)
    //             && Number.isInteger(denominator/i)){
    //             numerator=numerator/i
    //             denominator=denominator/i
    //             recursion()
    //         }
    //     }
    // }
    // recursion()
    return `${numerator}/${denominator}`
}

export default {
	navTo,
	backTo,
	showHtml,
	$noToast,
	parsNum,
	decimalsToFractional,
	// showLanguage
}
