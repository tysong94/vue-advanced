<template>
  <check-box v-model:value="checked"></check-box>
</template>

<script>
import CheckBox from './components/CheckBox.vue';

export default {
  components: {
    CheckBox
  },
  data(){
    return {
      checked: true
    }
  }
}
</script>