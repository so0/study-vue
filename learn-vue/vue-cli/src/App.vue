<template>
  <div>
    <app-header />
    {{ str }}
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

// var AppHeader = {
//   tempalte: "<header><h1>Header</h1></header>",
// };
// new Vue({
//   data: { str: "hi" },
// });
export default {
  data: function() {
    return {
      str: "hi",
    };
  },
  components: {
    "app-header": AppHeader,
  },
};
</script>

<style></style>
