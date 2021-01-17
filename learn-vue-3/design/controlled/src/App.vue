<template>
 <!-- 잘못된 방법 -->
  <check-box :checked="checked"></check-box>
</template>

<script>
import CheckBox from './components/CheckBox.vue';

export default {
  components: {
    CheckBox
  },
  data() {
    return {
      checked: false
    }
  },
}
</script>