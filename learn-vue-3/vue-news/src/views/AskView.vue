<template>
  <div>
    <list-item actionName="FETCH_ASK"></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';
// import { mapGetters } from 'vuex';

export default {
  components: { ListItem },
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store
        .dispatch('FETCH_ASK')
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
        })
        .catch((error) => {
          console.log(error);
          bus.$emit('end:spinner');
        });
    }, 3000);
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
