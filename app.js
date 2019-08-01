new Vue({
    el: '#app',
    data: {
        title: "Hello World",
        name: "Aljan", 
        url: "https://www.facebook.com",
        classes:['one', 'two']
    }, 
    methods: {
        greet(time) {
            return `Hello and good${time}, ${this.name}.`

        }
    }
})