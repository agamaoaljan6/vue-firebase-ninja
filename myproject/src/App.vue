
<template>
  <div id="app">
    <h1>{{title}}</h1>
    <Navbar />
    <AllMentors :mentors="mentors" @delete="deleteMentor" />
    <AvailableMentors :mentors="mentors" />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import AllMentors from "./AllMentors";
import AvailableMentors from "./AvailableMentors";
export default {
  name: "app",
  components: {
    Navbar,
    AvailableMentors,
    AllMentors
  },
  data() {
    return {
      title: "My first Vue App",
      mentors: [
        // I can fetch the mentors that i set up in firebase database in here
        { name: "Aljan", email: "agamaoaljan@gmail.com", availability: true },
        { name: "Jon", email: "jonsnow@gmail.com", availability: false },
        { name: "Mike", email: "mikemiller@gmail.com", availability: true },
        { name: "John", email: "johnsmith@gmail.com", availability: false }
      ]
    };
  },
  methods: {
    deleteMentor(payload) {
      // naming convention payload
      // console.log(payload)
      this.mentors = this.mentors.filter(mentor => {
        return mentor.name !== payload.name
      })
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
