(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-08ecace0","chunk-2d0da6e6"],{"6c25":function(n,t,r){"use strict";r.r(t),t.default='\r\n\r\n\r\n```html vue-run\r\n<template>\r\n  <a-button class="btn btn-blue" @click="test" type="primary">打开console，点击看看效果</a-button>\r\n</template>\r\n<script>\r\n  export default {\r\n    data() {\r\n      return {};\r\n    },\r\n    methods: {\r\n      test() {\r\n        console.log(\'你点击了按钮\');\r\n      }\r\n    }\r\n  }\r\n<\/script>\r\n```'},ba8b:function(n,t,r){"use strict";r.r(t);var e=r("6c25"),a={data:function(){return{tel:"18999999999",markdown:e.default}},mounted:function(){}},c=r("2877"),l=Object(c.a)(a,function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("v-card",[r("p",[n._v("\n手机号码格式化\n"),r("br"),n._v("\n    "+n._s(n._f("telFormat")(n.tel))+"\n    ")]),r("p",[n._v("\n      数据脱敏"),r("br"),n._v("\n    "+n._s(n._f("telFormat")(n.tel,!0))+"\n    ")]),r("p",[n._v("\n      车牌格式化\n      "),r("br"),n._v(n._s(n._f("carIdFormat")("粤A00000"))+"\n    ")])])},[],!1,null,null,null);t.default=l.exports}}]);