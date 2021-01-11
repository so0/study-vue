<template>
  <div>
    <div v-for="news in this.$store.state.news">{{ news.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');

    //1
    // fetchNewsList()
    //   .then(function(response) {
    //     console.log(response);
    //     //2
    //     vm.users = response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
};
</script>

<style></style>
