<template>
  <div>
    <!-- <div v-for="job in this.$store.state.jobs">{{ job.title }}</div> -->
    <p v-for="job in this.$store.state.jobs">
      <a :href="job.url">
        {{ job.title }}
      </a>
      <small>{{ job.time_ago }}, {{ job.domain }}</small>
    </p>
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

<style></style>
