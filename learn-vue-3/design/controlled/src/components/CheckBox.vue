<template>
<!-- props를 바꾸지말라는 경고메시지가 뜸 -->
  <input type="checkbox" :value="value" @click="toggleCheckBox">
</template>

<script>
export default {
  // @input 이벤트  - 올릴때
  // :value 값  - 내려온 값
  props: ['value'],
  methods: {
    toggleCheckBox() {
      // 기본적인 컴포넌트 통신 방식
      this.$emit('input', !this.value)
    }
  }
}
</script>