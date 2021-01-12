<template>
  <div>
    <ul class="news-list">
      <li v-for="item in this.$store.state.jobs" class="post">
        <!-- 포인트 영역 -->
        <div class="points">{{ item.points || 0 }}</div>
        <div>
          <!-- 기타 정보 영역 -->
          <p class="news-title">
            <a v-bind:href="item.url">{{ item.title }}</a>
          </p>
          <small class="link-test"
            >{{ item.time_ago }} by
            <a :href="item.url">
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      jobs: [],
    };
  },
  // 라이프사이클 훅.
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
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
