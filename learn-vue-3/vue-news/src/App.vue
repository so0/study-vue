<template>
  <div id="app">
    <!-- // 1 Strongly Recommended -->
    <Toolbar></Toolbar>
    <!-- // 2 Essential -->
    <!-- <tool-bar></tool-bar> -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus" />
  </div>
</template>

<script>
import Toolbar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus.js';

export default {
  name: 'App',
  components: {
    Toolbar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  created() {
    // addEventListener 같은 역할
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    // off 꼭 해주기.
    bus.$off('start:spinner');
    bus.$off('end:spinner');
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
