<template>
	<view class="pages-news">
		<uni-list>
			<!-- 头像显示圆点 -->
			<uni-list-chat title="91严先生"
				avatar="../../static/image/6.jpg"
				note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="dot">
			</uni-list-chat>
			<uni-list-chat title="91严先生"
				avatar="../../static/image/5.jpg"
				note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="dot">
			</uni-list-chat>
			<uni-list-chat title="91严先生"
				avatar="../../static/image/4.jpg"
				note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="dot">
			</uni-list-chat>
			<uni-list-chat title="91严先生"
				avatar="../../static/image/2.jpg"
				note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="dot">
			</uni-list-chat>
			<uni-list-chat title="91严先生"
				avatar="../../static/image/3.jpg"
				note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="dot">
			</uni-list-chat>
			<uni-list-chat title="91严先生"
				avatar="../../static/image/4.jpg"
				note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="dot">
			</uni-list-chat>
			<uni-list-chat title="91严先生"
				avatar="../../static/image/5.jpg"
				note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="dot">
			</uni-list-chat>
		</uni-list>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				avatarList: [{
					url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png'
				}, {
					url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png'
				}, {
					url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png'
				}]
			}
		}
	}
</script>

<style lang="scss">
	.pages-news {
		width: 100%;
		min-height: 100vh;

		background-color: #3972ab;
	}

	.chat-custom-right {
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
	}

	.chat-custom-text {
		font-size: 12px;
		color: #999;
	}

	/deep/.uni-list-chat__container {
		background-color: #3972ab;
	}
</style>
