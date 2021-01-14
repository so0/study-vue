import Chart from 'chart.js';

export default {
  install(Vue) {
    console.log('chart plugin loaded');
    // 객체의 속성 확장.
    Vue.prototype.$_Chart = Chart;

    // // BarChart.vue
    // this.$_Chart;

    // // LineChart.Vue
    // this.$_Chart;
  },
};
