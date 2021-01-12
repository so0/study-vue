<template>
  <div>
    <list-item actionName="FETCH_ASK"></list-item>
    <!-- <ul class="news-list">
      <li v-for="item in fetchedAsk" class="post">
        <div class="points">{{ item.points }}</div>

        <div>
          <p class="news-title">
            <router-link :to="`/item/${item.id}`"> {{ item.title }}</router-link>
          </p>
          <small class="link-test"
            >{{ item.time_ago }} by
            <router-link v-bind:to="`/user/${item.user}`" class="link-test">
              {{ item.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>

    <p v-for="item in fetchedAsk">
      <router-link :to="`/item/${item.id}`"> {{ item.title }}</router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p> -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import { mapGetters } from 'vuex';
export default {
  components: { ListItem },
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
