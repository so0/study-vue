<template>
  <div>
    <p>name : {{ this.$store.state.user.id }}</p>
    <p>karma : {{ this.$store.state.user.karma }}</p>
    <p>created : {{ this.$store.state.user.created }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    console.log(this.$route);
    const userName = this.$route.params.id;
    console.log(userName);
    // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
    this.$store.dispatch('FETCH_USER', userName);
  },
};
</script>

<style></style>
