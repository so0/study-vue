<template>
  <div>
    <div v-for="item in askList">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
  data: function() {
    return {
      askList: [],
    };
  },
  created: async function() {
    fetchAskList()
      .then((response) => {
        this.askList = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
