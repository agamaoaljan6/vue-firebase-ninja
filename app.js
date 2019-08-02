new Vue({
    el: '#app',
    data: {
        title: "Vue Ninja",
        wage: "10"
    },
    methods: {
        increaseWage() {
            this.wage ++
        },
        decreaseWage() {
            this.wage --
        }
    }
})