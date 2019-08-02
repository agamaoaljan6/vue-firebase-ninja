<template>
  <nav class="main-nav">
    <ul>
      <li>
        <router-link to="/">HOME</router-link>
      </li>
      <li>
        <router-link :to="{name: 'About'}">ABOUT</router-link>
      </li>
      <!-- :to="{name: 'About'}" 
            will be calling the name of the router About
      it's also the same as the to="/about"-->
    </ul>
  </nav>
</template>


<script>
export default {
  name: "Navbar",
  data() {},
  methods: {}
};
</script>


<style>
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
