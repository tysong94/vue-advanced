<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading=loadingStatus></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus.js';

export default {
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
      console.log(this.loadingStatus);
    },
    endSpinner() {
      this.loadingStatus = false;
      console.log(this.loadingStatus);
    }
  },
  created() {
    console.log('APP_TITLE', process.env.VUE_APP_TITLE);
    bus.$on('start:spinner', this.startSpinner); // $on() : 비동기 함수임
    bus.$on('end:spinner', this.endSpinner); // 비동기 함수임
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner); 
    bus.$off('end:spinner', this.endSpinner); 
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none; /* 밑줄 삭제 */
}
a.router-link-exact-active {
  text-decoration: underline; /* 밑줄 표시 */
}
a:hover {
  color: #42b883; /* 링크에 마우스 올라갔을때 */
  text-decoration: underline; /* 밑줄 표시 */
}

/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
