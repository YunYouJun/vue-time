(function(e){function t(t){for(var n,s,a=t[0],u=t[1],l=t[2],p=0,c=[];p<a.length;p++)s=a[p],i[s]&&c.push(i[s][0]),i[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);h&&h(t);while(c.length)c.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,a=1;a<o.length;a++){var u=o[a];0!==i[u]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},i={index:0},r=[];function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-time/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var h=u;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("0e75")},"0e75":function(e,t,o){"use strict";o.r(t);var n=o("2b0e"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("vue-time",{attrs:{"show-date":e.showDate,"show-day":e.showDay,"show-time":e.showTime}})},r=[],s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("span",{staticClass:"vue-time"},[e._v("\n    "+e._s(e.time)+"\n  ")])])},a=[],u={name:"VueTime",data(){return{weekday:["日","一","二","三","四","五","六"],now:"",time:""}},props:{locales:{type:String,default:"zh-CN"},options:{type:Object,default(){return{hour12:!1,timeZone:"Asia/Shanghai",era:"long",weekday:"long",year:"numeric",month:"numeric",day:"numeric"}}},showDate:{type:Boolean,default:!0},showDay:{type:Boolean,default:!0},showTime:{type:Boolean,default:!0}},mounted(){this.showNow(),this.showTime&&setInterval(()=>{this.showNow()},1e3)},methods:{showNow(){let e=new Date;this.showDate||(this.options.era=void 0,this.options.year=void 0,this.options.month=void 0,this.options.day=void 0),this.showDay||(this.options.weekday=void 0),this.showTime||(this.options.hour=void 0,this.options.minute=void 0,this.options.second=void 0),this.time=e.toLocaleTimeString(this.locales,this.options)}}},l=u,h=o("a9f7"),p=Object(h["a"])(l,s,a,!1,null,null,null);p.options.__file="App.vue";var c=p.exports,d={components:{vueTime:c},data(){return{showDate:!1,showDay:!0,showTime:!0}}},f=d,v=Object(h["a"])(f,i,r,!1,null,null,null);v.options.__file="App.vue";var w=v.exports;new n["a"]({render:e=>e(w)}).$mount("#app")}});
//# sourceMappingURL=index.9e9bda73.js.map