<template>
  <div id="available-mentors">
    <h2>Available Mentors</h2>
    <div v-for="(mentor,index) in mentors" :key="index">
      <!--the :key is the same as v-bind:key="" -->
      <!--if you are looping through array, every item must be unique, thus needing the key -->
      <span v-if="mentor.availability">{{mentor.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AvailableMentors",
  props: ['mentors'],
  data() {
    return {

    };
  }
};
</script>

<style>
</style>
