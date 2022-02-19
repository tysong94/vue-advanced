<template>
  <div>
    <h1>Chart.js</h1>
    <bar-chart v-bind:barData=barData></bar-chart>
    <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue';
import LineChart from './components/LineChart.vue';

export default {
  // 컴포넌트 속성 && 인스턴스 옵션
  components: {
    BarChart,
    LineChart,
  },
  data() {
    return {
      barData: [12, 19, 3, 5, 2, 3],
    }
  },
}
</script>

<style>

</style>
