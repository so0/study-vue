<template>
  <div>
    <ul>
      <li v-for="item in items">
        {{ item }}
      </li>
    </ul>
    <!-- 메서드 없이 바로 상위 컴포넌트로 이벤트 올려 보냄 -->
    <button @click="$emit('renew')">renew items</button>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true, // 필수값
    },
  },
}
</script>