<template>
    <div class="mentees">
        <h2>{{menteeName}}</h2>
        <button @click="changeTitle">Change Title</button>
    </div>
</template>


<script>
export default {
    name: 'mentees',
    data() {
        return {
            menteeName: "Aljan"
        }
    },
    methods: {
        changeTitle() {
            this.menteeName = "Nash"
        }
    },

    beforeCreate() {
        alert('beforeCreate hook')
    }, 
    created() {
        alert('created hook')
    }, 
    beforeUpdate() {
        alert('beforeUpdate hook')
    },
    updated() {
        alert('updated hook')
    }
}
</script>
