(function(e){function t(t){for(var n,s,a=t[0],u=t[1],l=t[2],c=0,p=[];c<a.length;c++)s=a[c],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);h&&h(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,a=1;a<o.length;a++){var u=o[a];0!==r[u]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},r={index:0},i=[];function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-time/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var h=u;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("0e75")},"0e75":function(e,t,o){"use strict";o.r(t);var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("h1",[e._v("Vue Time")]),o("vue-time",{attrs:{"show-date":e.showDate,"show-day":e.showDay,"show-time":e.showTime}})],1)},i=[],s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("span",{staticClass:"vue-time"},[e._v(" "+e._s(e.time)+" ")])])},a=[],u={name:"VueTime",data(){return{weekday:["日","一","二","三","四","五","六"],now:"",time:""}},props:{locales:{type:String,default:"zh-CN"},options:{type:Object,default(){return{hour12:!1,timeZone:"Asia/Shanghai",era:"long",weekday:"long",year:"numeric",month:"numeric",day:"numeric"}}},showDate:{type:Boolean,default:!0},showDay:{type:Boolean,default:!0},showTime:{type:Boolean,default:!0}},mounted(){this.showNow(),this.showTime&&setInterval(()=>{this.showNow()},1e3)},methods:{showNow(){let e=new Date;this.showDate||(this.options.era=void 0,this.options.year=void 0,this.options.month=void 0,this.options.day=void 0),this.showDay||(this.options.weekday=void 0),this.showTime||(this.options.hour=void 0,this.options.minute=void 0,this.options.second=void 0),this.time=e.toLocaleTimeString(this.locales,this.options)}}},l=u,h=o("2877"),c=Object(h["a"])(l,s,a,!1,null,null,null),p=c.exports,d={components:{vueTime:p},data(){return{showDate:!0,showDay:!0,showTime:!0,locales:"zh-CN",options:{hour12:!1,timeZone:"Asia/Shanghai",era:"long",weekday:"long",year:"numeric",month:"numeric",day:"numeric"}}}},f=d,m=Object(h["a"])(f,r,i,!1,null,null,null),w=m.exports;new n["a"]({render:e=>e(w)}).$mount("#app")}});
//# sourceMappingURL=index.4574ae49.js.map