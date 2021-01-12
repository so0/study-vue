<template>
  <div>
    <p v-for="item in fetchedAsk">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['fetchedAsk']),
  },
  created: async function() {
    this.$store.dispatch('FETCH_ASK');
  },
};
</script>

<style></style>
