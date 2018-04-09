# vue-time

[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![npm](https://img.shields.io/npm/v/vue-time.svg)](https://www.npmjs.com/package/vue-time)
[![download](http://img.shields.io/npm/dt/vue-time.svg)](https://npmcharts.com/compare/vue-time?minimal=true)
[![gzip](http://img.badgesize.io/https://unpkg.com/vue-time/dist/vue-time.js?compression=gzip&label=gzip%20size:%20JS)](http://img.badgesize.io/https://unpkg.com/vue-time/dist/vue-time.js?compression=gzip&label=gzip%20size:%20JS)

> Display current time.

## How to use

```bash
npm install vue-time
```

### Example

```vue
<template>
  <vue-time :show-date="showDate" :show-day="showDay" :show-time="showTime"></vue-time>
</template>

<script>
  import vueTime from 'vue-time';
  export default {
    components: { vueTime },
    data () {
      return {
        showDate: false,
        showDay: true,
        showTime: true
      }
    }
  }
</script>
```

### Display

`2018年4月9日 星期一 16:15:24`

### Options

Attribute | Description | Type | Options | Default
---|---|---|---|---
show-date | 显示年份日期 | boolean | —— | true
show-day | 显示星期几 | boolean | —— | true
show-time | 显示时间 | boolean | —— | true
