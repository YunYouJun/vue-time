<template>
  <div class="container">
    <h1>Vue Time</h1>
    <vue-time 
      :show-date="showDate" 
      :show-day="showDay" 
      :show-time="showTime">
    </vue-time>
  </div>
  
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
      showDate: true,
      showDay: true,
      showTime: true,
      locales: 'zh-CN',
      options: {
        hour12: false,
        timeZone: 'Asia/Shanghai',
        era: 'long',
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      }
    }
  }
}
</script>
