<template>
<!-- props를 바꾸지말라는 경고메시지가 뜸 -->
  <input type="checkbox" v-model="checked">
</template>

<script>
export default {
  props: ['checked']
}
</script>