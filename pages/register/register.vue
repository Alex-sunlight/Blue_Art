<template>
	<view class="pages-register">
		<el-input placeholder="请输入邮箱" v-model="input1" clearable>
		</el-input>
		<el-input placeholder="登录密码" v-model="input2" clearable>
		</el-input>
		<el-input placeholder="确认登录密码" v-model="input3" clearable>
		</el-input>
		<view class="codeBox">
			<el-input class="input4" placeholder="验证码" v-model="input4" clearable>
			</el-input>
			发送
		</view>
		<el-input placeholder="邀请码" v-model="input1" clearable>
		</el-input>
		<button @click="toTest()">注册</button>
	</view>
</template>

<script>
		
	export default {
		data() {
			return {
				input1: '',
				input2: '',
				input3: '',
				input4: '',
				input5: ''
			}
		},
		onLoad(){
			
		},
		methods:{
			toTest(){
				try{
					app.$post('user/sendEmail', {
						email:'3043068032@qq.com',
					}).then(res => {
						console.log(res,'****************************')
					})
				}catch(e){
					//TODO handle the exception
				}
			}
		},
	}
</script>

<style lang="scss">
	.pages-register {
		width: 100%;
		min-height: 100vh;
		padding-bottom: 200rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #3972ab;
	}

	.codeBox {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.input4 {
		width: 70%;
	}
</style>
