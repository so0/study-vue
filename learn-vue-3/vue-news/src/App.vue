<template>
  <div id="app">
    <!-- // 1 Strongly Recommended -->
    <Toolbar></Toolbar>
    <!-- // 2 Essential -->
    <!-- <tool-bar></tool-bar> -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
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

/* router transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
