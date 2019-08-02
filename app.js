new Vue({
    el: '#app',
    data: {
        title: "Vue Ninja",
        name: "Aljan"
    }, 
    methods: {
        updateName(e) {
            // console.log(e.target.value)
            this.name = e.target.value 
        }
    }

})