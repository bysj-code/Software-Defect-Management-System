(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0a85":function(n,t,e){"use strict";e.r(t);var o=e("519f"),c=e.n(o);for(var r in o)"default"!==r&&function(n){e.d(t,n,(function(){return o[n]}))}(r);t["default"]=c.a},"519f":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(e("a34a")),c=r(e("0150"));function r(n){return n&&n.__esModule?n:{default:n}}function u(n,t){var e;if("undefined"===typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=a(n))||t&&n&&"number"===typeof n.length){e&&(n=e);var o=0,c=function(){};return{s:c,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,u=!0,i=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return u=n.done,n},e:function(n){i=!0,r=n},f:function(){try{u||null==e.return||e.return()}finally{if(i)throw r}}}}function a(n,t){if(n){if("string"===typeof n)return i(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(n,t):void 0}}function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function l(n,t,e,o,c,r,u){try{var a=n[r](u),i=a.value}catch(l){return void e(l)}a.done?t(i):Promise.resolve(i).then(o,c)}function s(n){return function(){var t=this,e=arguments;return new Promise((function(o,c){var r=n.apply(t,e);function u(n){l(r,o,c,u,a,"next",n)}function a(n){l(r,o,c,u,a,"throw",n)}u(void 0)}))}}e("f62f");var f=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(e("ee0b"))}.bind(null,e)).catch(e.oe)},d={components:{uniIcons:f},data:function(){return{iconArr:["cuIcon-same","cuIcon-deliver","cuIcon-evaluate","cuIcon-shop","cuIcon-ticket","cuIcon-cascades","cuIcon-discover","cuIcon-question","cuIcon-pic","cuIcon-filter","cuIcon-footprint","cuIcon-pulldown","cuIcon-pullup","cuIcon-moreandroid","cuIcon-refund","cuIcon-qrcode","cuIcon-remind","cuIcon-profile","cuIcon-home","cuIcon-message","cuIcon-link","cuIcon-lock","cuIcon-unlock","cuIcon-vip","cuIcon-weibo","cuIcon-activity","cuIcon-friendadd","cuIcon-friendfamous","cuIcon-friend","cuIcon-goods","cuIcon-selection"],role:"",menuList:[],user:{},tableName:"",autoplaySwiper:!0,intervalSwiper:5e3,swiperList:[],news:[]}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=this;return s(o.default.mark((function e(){var r,u,a;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.role=n.getStorageSync("role"),r=n.getStorageSync("nowTable"),e.next=4,t.$api.session(r);case 4:u=e.sent,t.user=u.data,t.tableName=r,a=c.default.list(),t.menuList=a;case 9:case"end":return e.stop()}}),e)})))()},onShow:function(){var n=this;return s(o.default.mark((function t(){var e,c,r,a,i;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=[],t.next=3,n.$api.page("config",{page:1,limit:5});case 3:c=t.sent,r=u(c.data.list);try{for(r.s();!(a=r.n()).done;)i=a.value,i.name.indexOf("picture")>=0&&i.value&&""!=i.value&&null!=i.value&&e.push({img:i.value,title:i.name})}catch(o){r.e(o)}finally{r.f()}return e&&(n.swiperList=e),t.next=9,n.$api.list("news",{page:1,limit:6});case 9:c=t.sent,n.news=c.data.list;case 11:case"end":return t.stop()}}),t)})))()},methods:{onSwiperTap:function(n){},onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,t){this.$utils.jump("../".concat(n,"/detail?id=").concat(t))},onPageTap:function(t){n.navigateTo({url:"../".concat(t,"/list"),fail:function(){n.switchTab({url:"../".concat(t,"/list")})}})},onPageTap2:function(t){n.navigateTo({url:t,fail:function(){n.switchTab({url:t})}})}}};t.default=d}).call(this,e("543d")["default"])},"9c68":function(n,t,e){"use strict";var o;e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return o}));var c=function(){var n=this,t=n.$createElement,e=(n._self._c,null),o=n.__map(n.news,(function(t,e){var o=n.__get_orig(t),c=t.addtime.split(" ");return{$orig:o,g1:c}}));n.$mp.data=Object.assign({},{$root:{l2:e,l3:o}})},r=[]},af8a:function(n,t,e){"use strict";(function(n){e("99fc");o(e("66fd"));var t=o(e("c71b"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},b234:function(n,t,e){},c71b:function(n,t,e){"use strict";e.r(t);var o=e("9c68"),c=e("0a85");for(var r in c)"default"!==r&&function(n){e.d(t,n,(function(){return c[n]}))}(r);e("fb27");var u,a=e("f0c5"),i=Object(a["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);t["default"]=i.exports},fb27:function(n,t,e){"use strict";var o=e("b234"),c=e.n(o);c.a}},[["af8a","common/runtime","common/vendor"]]]);