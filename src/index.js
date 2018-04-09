import VueTime from './vue-time.vue'
export default VueTime

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-time', VueTime);
}