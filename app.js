new Vue({
    el: '#app',
    data: {
        title: "Vue Ninja",
        showName: true,
        showAge: true
    },
    methods: {
        toggleName() {
            this.showName = !this.showName
        },
        toggleAge() {
            this.showAge = !this.showAge
        }
    }

})