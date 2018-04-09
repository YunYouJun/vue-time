<template>
  <div>
    <span v-if="showDate" class="vue-time-date">{{ now.year + '年' + now.month + '月' + now.date + '日' }}</span>
    <span v-if="showDay" class="vue-time-weekday">{{ '星期' + weekday[now.day] }}</span>
    <span v-if="showTime" class="vue-time-time">{{ now.hour + ':'+ now.minute + ':' + now.second }}</span>
  </div>
</template>

<script>
export default {
  name: 'vue-time',
  data () {
    return {
      weekday: ['日','一','二','三','四','五','六'],
      now: {
        year: '',
        month: '',
        date: '',
        day: '',
        hour: '',
        minute: '',
        second: ''
      }      
    }
  },
  props: {
    showDate: {
      type: Boolean,
      default: true
    },
    showDay: {
      type: Boolean,
      default: true
    },
    showTime: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    let _this = this
    setInterval(_this.showNow, 1000)
  },
  methods: {
    showNow() {
      let now = new Date()
      this.now.year = now.getFullYear()
      this.now.month = now.getMonth() + 1
      this.now.date = now.getDate()
      this.now.day = now.getDay()
      this.now.hour = this.addZero(now.getHours())
      this.now.minute = this.addZero(now.getMinutes())
      this.now.second = this.addZero(now.getSeconds())
    },
    addZero(num) {
      if (num < 10) {
        return '0' + num
      }
      return num
    }
  }
}
</script>
