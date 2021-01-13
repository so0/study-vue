<template>
  <div id="app">
    <!-- // 1 Strongly Recommended -->
    <Toolbar></Toolbar>
    <!-- // 2 Essential -->
    <!-- <tool-bar></tool-bar> -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <spinner :loading="true" />
  </div>
</template>

<script>
import Toolbar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';

export default {
  name: 'App',
  components: {
    Toolbar,
    Spinner,
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
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
