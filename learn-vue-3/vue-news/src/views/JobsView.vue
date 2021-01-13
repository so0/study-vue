<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import bus from '../utils/bus.js';
import ListMixin from '../mixins/ListMixin.js';

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
  // mounted() {
  //   // 인스턴스가 화면에 나타났을 때
  //   bus.$emit('end:spinner');
  // },

  // created() {
  //   bus.$emit('start:spinner');
  //   setTimeout(() => {
  //     this.$store
  //       .dispatch('FETCH_JOBS')
  //       .then(() => {
  //         console.log('fetched');
  //         bus.$emit('end:spinner');
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         bus.$emit('end:spinner');
  //       });
  //   }, 3000);
  // },

  // data: function() {
  //   return {
  //     jobs: [],
  //   };
  // },
  // 라이프사이클 훅.
  // created() {
  //   this.$store.dispatch('FETCH_JOBS');
  // },
  // create, beforeMount : 데이터 요청 많이 함.
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
