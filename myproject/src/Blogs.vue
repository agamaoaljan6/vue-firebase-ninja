<template>
  <div class="mentees">
    <h1>{{blogTitle}}</h1>
    <input type="text" v-model="searchTerm" />
    <div v-for="(post) in filteredPosts" :key="post.id">
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
      posts: [],
      searchTerm: ""
    };
  },
  methods: {},
  computed: {
    filteredPosts() {
      return this.posts.filter(post => {
        return post.title.match(this.searchTerm);
      });
    }
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        console.log(res);
        this.posts = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
