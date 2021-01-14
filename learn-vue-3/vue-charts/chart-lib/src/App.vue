<template>
  <div>
    <h2>Chart.js</h2>
    <bar-chart />
    <line-chart />
  </div>
</template>

<script>
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
export default {
  // 컴포넌트 속성 && 인스턴스 옵션
  components: {
    BarChart,
    LineChart,
  },
};
</script>

<style></style>
