<template>
  <vue-time :show-date="showDate" :show-day="showDay" :show-time="showTime"></vue-time>
</template>

<script>
import vueTime from '../../src/App.vue'
// import '../dist/vueTime.umd.js'
export default {
  components: { 
    vueTime 
  },
  data () {
    return {
      showDate: false,
      showDay: true,
      showTime: true
    }
  }
}
</script>