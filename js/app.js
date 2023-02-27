const { createApp } = Vue

createApp({
	data() {
		return {
            emailList : [],
		}
	},
	methods: {
		randomEmail() {
			axios
				.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then((res) => {
                    this.emailList.push(res.data.response)
				})

		},
	},

    mounted() {
		for (let i = 0; i < 10; i++) {
			this.randomEmail()
            console.log(this.emailList)
		}
	},
}).mount('#app')