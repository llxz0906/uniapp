<template>
	<view class="home">
		<!-- <view class="row" v-for="item in listArr":key="item.id">
			<image :src="item.picurl" mode=""></image>
			<view>{{item.title}}</view>
		</view> -->
		<!-- <view v-for="item in userArr":key="item._id">
			<view>姓名:{{item.name}}</view>
			<view>职位:{{item.zhiwei}}</view>
			<view>电话:{{item.tel}}</view>
			<view>邮箱:{{item.email}}</view>
		</view> -->
		<!-- 填写表格提交到数据库
			<form @submit="onsubmit">
			<input type="text" name="name">
			<input type="text" name="zhiwei">
			<button form-type="submit">提交</button>
		</form> -->
		<view class="out">
		<view class ="row" v-for="item in listArr":key="item._id">
			姓名：{{item.name}}-年龄{{item.age}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				listArr:[],
				userArr:[]
			}
		},
		onLoad() {
			// uniCloud.callFunction({
			// 	name:"clouddemo1",
			// 	data:{}
			// }).then(res=>{
			// 	console.log(res),
			// 	this.userArr=res.result.data
			// })
			this.getData()
		},
		methods: {
		// 	onsubmit(e){
		// 		console.log(e);
		// 		let obj=e.detail.value;
		// 		uniCloud.callFunction({
		// 			name:"clouddemo1",
		// 			data:obj
		// 	}).then(res=>{
		// 		console.log(res)
		// 	})
		// }
		getData(){
			uniCloud.callFunction({
				name:"cloudDemoGet"
			}).then(res=>{
				console.log(res)
				this.listArr=res.result.data
			})
			
		}
	},
	}
</script>

<style lang="scss">
	// .row{
	// 	border-bottom: 1px solid #ccc;
	// 	padding: 30rpx;
	// }
	.out{
		padding: 30rpx;
		.row{
			border-bottom: 1px solid #ccc;
			padding:20rpx 0;
		}
	}
</style>
