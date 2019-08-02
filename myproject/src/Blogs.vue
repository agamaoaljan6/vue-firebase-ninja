<template>
  <div class="mentees">
    <h1>{{blogTitle}}</h1>
    <div v-for="(post) in posts" :key="post.id">
      <h2>
        <strong>{{post.title}}</strong>
      </h2>
      <p>{{post.body | snippet}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "mentees",
  data() {
    return {
      blogTitle: "Blogs",
      posts: []
    };
  },
  methods: {},
  created() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      console.log(res);
      this.posts = res.data;
    }).catch(err =>{
      console.log(err)
    })
  }
};
</script>
