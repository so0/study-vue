<template>
  <div>
    <!-- 1,2 -->
    <!-- <div v-for="item in ask">{{ item.title }}</div> -->
    <!-- 3 -->
    <!-- <div v-for="item in askItems">{{ item.title }}</div> -->
    <!-- 4 -->
    <div v-for="item in fetchedAsk">{{ item.title }}</div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
  computed: {
    ...mapGetters(['fetchedAsk']),
    //3
    // ...mapGetters({
    //   askItems: 'fetchedAsk', // 속성명 : vuex d이름
    // }),
    // //2
    // ...mapState({
    //   ask: (state) => state.ask,
    // }),
    // // 1
    // ask() {
    //   return this.$store.state.ask;
    // },
  },
  created: async function() {
    this.$store.dispatch('FETCH_ASK');
  },
};
</script>

<style></style>
