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
				this.$http.post('http://localhost:8097/wx/sendMessage', {name: 'www', pwd: '123456'}).then(response => {
					// success callback
					console.log('success')
					console.log(response)
				}, response => {
					// error callback
					console.log('error')
					console.log(response)
				});
			}
		}
	}
</script>