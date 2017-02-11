<template>
	<div>
		index 页面
		<button type="button" @click="sendMessage">button</button>
	</div>
</template>
<script>
	export default{
		data: ()=>({}),
		methods: {
			sendMessage (){
				// GET /someUrl
				this.$http.post('/wx/sendMessage', {name: 'xxxx', pwd: '123456'}).then(response => {
					// success callback
					console.log(response)
				}, response => {
					// error callback
					console.log(response)
				});
			}
		}
	}
</script>