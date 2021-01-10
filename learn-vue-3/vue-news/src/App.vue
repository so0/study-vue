<template>
  <div id="app">
    <!-- // 1 Strongly Recommended -->
    <Toolbar></Toolbar>
    <!-- // 2 Essential -->
    <router-view></router-view>
  </div>
</template>

<script>
import Toolbar from './components/ToolBar.vue';
export default {
  name: 'App',
  components: {
    Toolbar,
  },
};
</script>

<style></style>
