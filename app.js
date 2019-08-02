new Vue({
    el: '#app',
    data: {
        title: "Vue Ninja",
        coords: {
            x:0,
            y:0
        }
    }, 
    methods: {
        logEvent(e) { // takes the event object as a parameter
            console.log(e)
        },
        logCoords(e) {
            this.coords.x = e.offsetX
            this.coords.y = e.offsetY
        }
    }

})