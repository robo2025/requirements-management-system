webpackJsonp([42],{695:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),c=n(r),o=a(118),u=n(o),s=a(285);t.default={namespace:"project",state:{notice:[],loading:!0},effects:{fetchNotice:u.default.mark(function e(t,a){var n,r=a.call,c=a.put;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c({type:"changeLoading",payload:!0});case 2:return e.next=4,r(s.queryProjectNotice);case 4:return n=e.sent,e.next=7,c({type:"saveNotice",payload:Array.isArray(n)?n:[]});case 7:return e.next=9,c({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)})},reducers:{saveNotice:function(e,t){return(0,c.default)({},e,{notice:t.payload})},changeLoading:function(e,t){return(0,c.default)({},e,{loading:t.payload})}}},e.exports=t.default}});