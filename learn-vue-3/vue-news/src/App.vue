<template>
  <div id="app">
    <!-- // 1 Strongly Recommended -->
    <Toolbar></Toolbar>
    <!-- // 2 Essential -->
    <tool-bar></tool-bar>
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

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
