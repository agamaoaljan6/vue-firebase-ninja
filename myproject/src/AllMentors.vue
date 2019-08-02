<template>
  <div id="all-mentors">
    <h2>All Mentors</h2>
    <div v-for="(mentor,index) in mentors" :key="index">
      <!--the :key is the same as v-bind:key="" -->
      <!--if you are looping through array, every item must be unique, thus needing the key -->
      <span>
        {{mentor.name}}
        <button @click="endMentorship(mentor.name)">Delete</button>
      </span>
    </div>
  </div>
</template>


<script>
export default {
  name: "AllMentors",
    props: ["mentors"],
  data() {
    return {};
  },
  methods: {
    endMentorship(name) {
      this.$emit("delete", { name });
      //.$emit = method that can use to emit custom event from this component
      // it has 2 parametes, name of the event(any name you want) and the data
      // you want to send inside the object {}
    }
  }
};
</script>

<style>
</style>