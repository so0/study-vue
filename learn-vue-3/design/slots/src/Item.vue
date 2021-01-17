<template>
  <li>
    <!-- <slot> -->
      <!-- NOTE: 등록하는 곳에서 정의할 화면 영역 -->
      {{item}}
    <!-- </slot> -->
  </li>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style>

</style>