<template>
 <!-- 잘못된 방법 -->
  <!-- <check-box :checked="checked"></check-box> -->

  <check-box v-model="checked"></check-box>
</template>

<script>
import CheckBox from './components/CheckBox.vue';

// 세부 컴포넌트 쪼갤 때 유용한 방식.
// 데이트피커, 모달, 입력 폼.. 등
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