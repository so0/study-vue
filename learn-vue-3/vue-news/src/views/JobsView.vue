<template>
  <div>
    <div v-for="job in jobs">{{ job.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js';
export default {
  data: function() {
    return {
      jobs: [],
    };
  },
  // 라이프사이클 훅.
  created() {
    fetchJobsList()
      .then((response) => {
        this.jobs = response.data;
      })
      .catch((error) => console.log(error));
  },
  // create, beforeMount : 데이터 요청 많이 함.
};
</script>

<style></style>
