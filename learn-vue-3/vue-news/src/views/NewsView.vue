<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus';
import ListMixin from '../mixins/ListMixin.js';
export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
  // created() {

  // }
};
</script>

<style scoped></style>
