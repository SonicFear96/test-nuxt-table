(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3],{284:function(t,e,n){var content=n(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(78).default)("7a36986f",content,!0,{sourceMap:!1})},285:function(t,e,n){var content=n(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(78).default)("0b7770be",content,!0,{sourceMap:!1})},286:function(t,e,n){"use strict";n(284)},287:function(t,e,n){var r=n(77)(!1);r.push([t.i,".header-sorting-list-wrapper[data-v-7aac16af]{max-width:800px;margin:0 auto}.header-sorting-list[data-v-7aac16af]{list-style:none;margin:0;display:flex;flex-direction:row;justify-content:space-between;padding:0 20px}.header-sorting-item[data-v-7aac16af]{font-size:18px;line-height:14px;font-weight:700;text-transform:uppercase;color:#9ea1ae}",""]),t.exports=r},288:function(t,e,n){"use strict";n(285)},289:function(t,e,n){var r=n(77)(!1);r.push([t.i,".card-item[data-v-3c762aca]{display:flex;flex-direction:row;justify-content:space-between;min-height:50px;align-items:center;background-color:rgba(234,210,168,.2);border-radius:8px;padding:0 20px}.card-item__id[data-v-3c762aca]{font-weight:700;color:grey}.card-item__email[data-v-3c762aca],.card-item__name[data-v-3c762aca]{color:grey}",""]),t.exports=r},291:function(t,e,n){var content=n(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(78).default)("2d140a9b",content,!0,{sourceMap:!1})},292:function(t,e,n){"use strict";n.r(e);var r={name:"header-sorting-list",data:function(){return{sortingList:[{title:"id",sort:!0},{title:"name",sort:!1},{title:"email",sort:!1}]}}},c=(n(286),n(30)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-sorting-list__wrapper"},[e("ul",{staticClass:"header-sorting-list"},t._l(t.sortingList,(function(n){return e("li",{key:n.title,staticClass:"header-sorting-item"},[t._v("\n      "+t._s(n.title)+"\n    ")])})),0)])}),[],!1,null,"7aac16af",null);e.default=component.exports},293:function(t,e,n){"use strict";n.r(e);n(39);var r={name:"sorting-card",props:{data:Object}},c=(n(288),n(30)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-item"},[e("div",{staticClass:"card-item__id"},[t._v("\n    "+t._s(t.data.id)+"\n  ")]),t._v(" "),e("div",{staticClass:"card-item__name"},[t._v("\n    "+t._s(t.data.name)+"\n  ")]),t._v(" "),e("div",{staticClass:"card-item__email"},[t._v("\n    "+t._s(t.data.email)+"\n  ")])])}),[],!1,null,"3c762aca",null);e.default=component.exports},296:function(t,e,n){"use strict";n(291)},297:function(t,e,n){var r=n(77)(!1);r.push([t.i,".comment-list__wrapper[data-v-3a2258ac]{margin-top:50px}.comment__card-list[data-v-3a2258ac]{list-style:none;margin-top:20px;display:flex;flex-direction:column;grid-gap:20px;gap:20px}.comment__card-item[data-v-3a2258ac]:hover{cursor:pointer;opacity:.5}",""]),t.exports=r},299:function(t,e,n){"use strict";n.r(e);var r=n(9),c=(n(47),n(292)),o=n(293),l={name:"index-page",components:{headerSortingList:c.default,cardItem:o.default},data:function(){return{comments:[],start:0}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,r=[],0,e.next=5,n.dispatch("getComments",0);case 5:return r=n.getters.comments,e.abrupt("return",{comments:r});case 7:case"end":return e.stop()}}),e)})))()},methods:{openComment:function(data){this.$router.push("comments/".concat(data.id))},getComments:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t?e.start+=10:e.start-=10,n.next=3,e.$store.dispatch("getComments",e.start);case 3:e.comments=e.$store.getters.comments;case 4:case"end":return n.stop()}}),n)})))()}}},d=(n(296),n(30)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-page"},[e("div",{staticClass:"comment-list__wrapper wrapper"},[e("headerSortingList"),t._v(" "),e("ul",{staticClass:"comment__card-list"},t._l(t.comments,(function(n){return e("li",{key:n.id,staticClass:"comment__card-item",on:{click:function(e){return t.openComment(n)}}},[e("cardItem",{attrs:{data:n}})],1)})),0),t._v(" "),e("div",[e("button",{staticClass:"button-pagination",attrs:{disabled:0===t.start},on:{click:function(e){return e.preventDefault(),t.getComments(t.more=!1)}}},[t._v("prev")]),t._v(" "),e("button",{staticClass:"button-pagination",on:{click:function(e){return e.preventDefault(),t.getComments(t.more=!0)}}},[t._v("next")])])],1)])}),[],!1,null,"3a2258ac",null);e.default=component.exports}}]);