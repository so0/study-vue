<template>
  <div>
    <div v-for="item in this.$store.state.ask">{{ item.title }}</div>
  </div>
</template>

<script>
export default {
  created: async function() {
    this.$store.dispatch('FETCH_ASK');
  },
};
</script>

<style></style>
