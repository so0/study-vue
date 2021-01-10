<template>
  <div>
    <div v-for="user in users">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    var vm = this;
    // API 사이트 : https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md
    // axios
    //   .get('https://api.hnpwa.com/v0/news/1.json')

    fetchNewsList()
      .then(function(response) {
        console.log(response);
        vm.users = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
