<template>
  <div>
    <list-item actionName="FETCH_ASK"></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import { mapGetters } from 'vuex';
export default {
  components: { ListItem },
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
  // computed: {
  //   ...mapGetters(['fetchedAsk']),
  // },
  // created: async function() {
  //   this.$store.dispatch('FETCH_ASK');
  // },
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
