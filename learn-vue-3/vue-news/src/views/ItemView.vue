<template>
  <div>
    <h3>{{ this.item.title }}</h3>
    <div>{{ this.item.content }}</div>
    <small>{{ this.item.time_ago }}</small>
  </div>
</template>

<script>
export default {
  computed: {
    item() {
      return this.$store.state.item;
    },
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  },
};
</script>

<style></style>
