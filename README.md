# vue-time

[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![npm](https://img.shields.io/npm/v/vue-time.svg)](https://www.npmjs.com/package/vue-time)
[![download](http://img.shields.io/npm/dt/vue-time.svg)](https://npmcharts.com/compare/vue-time?minimal=true)
[![gzip](http://img.badgesize.io/https://unpkg.com/vue-time/dist/vue-time.js?compression=gzip&label=gzip%20size:%20JS)](http://img.badgesize.io/https://unpkg.com/vue-time/dist/vue-time.js?compression=gzip&label=gzip%20size:%20JS)

> Display current time. [Demo](https://yunyoujun.github.io/vue-time/) (Once Per Second)

In fact, it is just a practice about how to build a lib.

## How to use

```bash
npm install vue-time
```

### Dev

```sh
# if you do not have it
npm install -g @vue/cli
npm install -g @vue/cli-service-global
```

### Example

```html
<template>
  <vue-time :show-date="showDate" :show-day="showDay" :show-time="showTime"></vue-time>
</template>
```

```js
import 'vue-time';
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
```

### Display

`公元2019年1月28日星期一 19:55:13`

### Options

Attribute | Description | Type | Options | Default
---|---|---|---|---
show-date | 显示年份日期 | boolean | —— | true
show-day | 显示星期几 | boolean | —— | true
show-time | 显示时间 | boolean | —— | true
