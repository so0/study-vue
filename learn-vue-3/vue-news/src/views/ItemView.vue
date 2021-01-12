<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <div>
        <div>User</div>
      </div>
      <div>
        <router-link :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
      </div>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
    </section>
    <div>{{ this.fetchedItem.content }}</div>
    <small>{{ this.fetchedItem.time_ago }}</small>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  },
};
</script>

<style></style>
