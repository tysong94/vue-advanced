import Chart from 'chart.js/auto';

export default {
  install(Vue) {
    Vue.prototype.$_Chart = Chart; // $_ : Vue.js에서 권고하는 플러그인 변수 네이밍
    // $, _는 이미 쓰고 있으므로
  }
}