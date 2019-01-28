<template>
  <div>
    <span class="vue-time">
      {{ time }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'VueTime',
  data () {
    return {
      weekday: ['日','一','二','三','四','五','六'],
      now: '',
      time: ''
    }
  },
  props: {
    locales: {
      type: String,
      default: 'zh-CN'
    },
    options: {
      type: Object,
      default() {
        return {
          hour12: false,
          timeZone: 'Asia/Shanghai',
          era: 'long',
          weekday: 'long',
          year: 'numeric',
          month: 'numeric',
          day: 'numeric'
        }
      }
    },
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
    this.showNow()
    if (this.showTime) {
      setInterval(() => {
        this.showNow()
      }, 1000)
    }
  },
  methods: {
    showNow() {
      let now = new Date()
      if (!this.showDate) {
        this.options.era = undefined
        this.options.year = undefined
        this.options.month = undefined
        this.options.day = undefined
      }
      if (!this.showDay) {
        this.options.weekday = undefined
      }
      if (!this.showTime) {
        this.options.hour = undefined
        this.options.minute = undefined
        this.options.second = undefined
      }
      this.time = now.toLocaleTimeString(this.locales, this.options)
    }
  }
}
</script>
