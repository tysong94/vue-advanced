(function(t){function e(e){for(var r,a,i=e[0],c=e[1],u=e[2],f=0,p=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},s={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},1886:function(t,e,n){"use strict";n("3770")},"1f6b":function(t,e,n){},3770:function(t,e,n){},"398d":function(t,e,n){"use strict";n("aa25")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("tool-bar"),n("transition",{attrs:{name:"page"}},[n("router-view")],1),n("spinner",{attrs:{loading:t.loadingStatus}})],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("router-link",{attrs:{to:"/news"}},[t._v("News")]),t._v(" | "),n("router-link",{attrs:{to:"/ask"}},[t._v("Ask")]),t._v(" | "),n("router-link",{attrs:{to:"/jobs"}},[t._v("Jobs")])],1)},i=[],c={},u=c,l=(n("398d"),n("2877")),f=Object(l["a"])(u,a,i,!1,null,"232eabb6",null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading?n("div",{staticClass:"lds-facebook"},[n("div"),n("div"),n("div")]):t._e()},m=[],h={props:{loading:{type:Boolean,required:!0}}},v=h,_=(n("f22a"),Object(l["a"])(v,d,m,!1,null,null,null)),b=_.exports,g=new r["a"],j={components:{ToolBar:p,Spinner:b},data:function(){return{loadingStatus:!1}},methods:{startSpinner:function(){this.loadingStatus=!0,console.log(this.loadingStatus)},endSpinner:function(){this.loadingStatus=!1,console.log(this.loadingStatus)}},created:function(){g.$on("start:spinner",this.startSpinner),g.$on("end:spinner",this.endSpinner)},beforeDestroy:function(){g.$off("start:spinner",this.startSpinner),g.$off("end:spinner",this.endSpinner)}},E=j,S=(n("034f"),Object(l["a"])(E,s,o,!1,null,null,null)),w=S.exports,x=(n("b0c0"),n("8c4f")),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("list-item")],1)},T=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"list"},t._l(t.fetchedList,(function(e){return n("li",{staticClass:"post"},[n("div",{staticClass:"points"},[t._v(" "+t._s(e.points||0)+" ")]),n("div",[n("p",{staticClass:"title"},[e.domain?[n("a",{attrs:{href:e.url}},[t._v(" "+t._s(e.title)+" ")])]:[n("router-link",{attrs:{to:"/item/"+e.id}},[t._v(" "+t._s(e.title)+" ")])]],2),n("small",{staticClass:"link-text"},[t._v(" "+t._s(e.time_ago)+" by "),e.user?n("router-link",{staticClass:"link-text",attrs:{to:"/user/"+e.user}},[t._v(" "+t._s(e.user)+" ")]):n("a",{attrs:{href:e.url}},[t._v(" "+t._s(e.domain)+" ")])],1)])])})),0)])},y=[],$=n("5530"),C=n("2f62"),I={computed:Object($["a"])({},Object(C["b"])(["fetchedList"]))},U=I,L=(n("1886"),Object(l["a"])(U,k,y,!1,null,"d34f2ad8",null)),R=L.exports,P={mounted:function(){g.$emit("end:spinner")}},H={components:{ListItem:R},mixins:[P]},M=H,F=Object(l["a"])(M,O,T,!1,null,null,null),J=F.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("list-item")],1)},q=[],A={components:{ListItem:R},mixins:[P]},D=A,N=Object(l["a"])(D,B,q,!1,null,null,null),z=N.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("list-item")],1)},K=[],Q={components:{ListItem:R},mixins:[P]},V=Q,W=Object(l["a"])(V,G,K,!1,null,null,null),X=W.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("user-profile",[n("div",{attrs:{slot:"username"},slot:"username"},[t._v(t._s(t.fetchedUser.id))]),n("span",{attrs:{slot:"time"},slot:"time"},[t._v(t._s("Joined "+t.fetchedUser.created)+", ")]),n("span",{attrs:{slot:"karma"},slot:"karma"},[t._v(t._s(t.fetchedUser.karma))])])],1)},Z=[],tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"user-container"},[t._m(0),n("div",{staticClass:"user-description"},[t._t("username"),n("div",{staticClass:"detail"},[t._t("time"),t._t("karma")],2)],2)])])},et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"fas fa-user"})])}],nt={},rt=nt,st=(n("ce34"),Object(l["a"])(rt,tt,et,!1,null,"4cf21f34",null)),ot=st.exports,at={components:{UserProfile:ot},computed:Object($["a"])({},Object(C["b"])(["fetchedUser"])),created:function(){var t=this.$route.params.user;this.$store.dispatch("FETCH_USER",t)}},it=at,ct=Object(l["a"])(it,Y,Z,!1,null,null,null),ut=ct.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",[n("user-profile",[n("router-link",{attrs:{slot:"username",to:"/user/"+t.fetchedItem.user},slot:"username"},[t._v(t._s(t.fetchedItem.user))]),n("template",{slot:"time"},[t._v(t._s("Posted "+t.fetchedItem.time_ago))])],2)],1),n("section",[n("h2",[t._v(t._s(t.fetchedItem.title))])]),n("section",[n("div",{domProps:{innerHTML:t._s(t.fetchedItem.content)}})])])},ft=[],pt={components:{UserProfile:ot},computed:Object($["a"])({},Object(C["b"])(["fetchedItem"])),created:function(){var t=this.$route.params.id;this.$store.dispatch("FETCH_ITEM",t)}},dt=pt,mt=Object(l["a"])(dt,lt,ft,!1,null,null,null),ht=mt.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{on:{click:t.loginUser1}},[t._v("login")]),n("h1",[t._v("List")]),n("ul",t._l(t.items,(function(e){return n("li",[t._v(t._s(e))])})),0)])},_t=[],bt=n("1da1"),gt=(n("96cf"),n("bc3a")),jt=n.n(gt);function Et(t){}var St={data:function(){return{items:[]}},methods:{loginUser:function(){jt.a.get("")},loginUser1:function(){var t=this;return Object(bt["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,jt.a.get("https://jsonplaceholder.typicode.com/users/1");case 3:if(n=e.sent,1!==n.data.id){e.next=10;break}return console.log("사용자가 인증되었습니다."),e.next=8,jt.a.get("https://jsonplaceholder.typicode.com/todos");case 8:r=e.sent,t.items=r.data;case 10:e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](0),Et(e.t0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))()}}},wt=St,xt=Object(l["a"])(wt,vt,_t,!1,null,null,null),Ot=xt.exports,Tt={SET_LIST:function(t,e){t.list=e},SET_USER:function(t,e){t.user=e},SET_ITEM:function(t,e){t.item=e}},kt=(n("99af"),{baseUrl:"https://api.hnpwa.com/v0/"});function yt(t){try{return jt.a.get("".concat(kt.baseUrl).concat(t,"/1.json"))}catch(e){console.log(e)}}function $t(t){return jt.a.get("".concat(kt.baseUrl,"user/").concat(t,".json"))}function Ct(t){return jt.a.get("".concat(kt.baseUrl,"item/").concat(t,".json"))}var It={FETCH_LIST:function(t,e){return Object(bt["a"])(regeneratorRuntime.mark((function n(){var r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,n.prev=1,n.next=4,yt(e);case 4:return s=n.sent,r("SET_LIST",s.data),n.abrupt("return",s);case 9:n.prev=9,n.t0=n["catch"](1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()},FETCH_USER:function(t,e){return Object(bt["a"])(regeneratorRuntime.mark((function n(){var r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,n.prev=1,n.next=4,$t(e);case 4:return s=n.sent,r("SET_USER",s.data),n.abrupt("return",s);case 9:n.prev=9,n.t0=n["catch"](1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()},FETCH_ITEM:function(t,e){return Object(bt["a"])(regeneratorRuntime.mark((function n(){var r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,n.prev=1,n.next=4,Ct(e);case 4:return s=n.sent,r("SET_ITEM",s.data),n.abrupt("return",s);case 9:n.prev=9,n.t0=n["catch"](1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()}};r["a"].use(C["a"]),r["a"].config.devtools=!0;var Ut=new C["a"].Store({state:{list:[],user:{},item:{}},getters:{fetchedList:function(t){return t.list},fetchedUser:function(t){return t.user},fetchedItem:function(t){return t.item}},mutations:Tt,actions:It});r["a"].use(x["a"]);var Lt=new x["a"]({mode:"history",routes:[{path:"/",redirect:"/news"},{path:"/news",name:"news",component:J,beforeEnter:function(t,e,n){g.$emit("start:spinner"),Ut.dispatch("FETCH_LIST",t.name).then((function(t){console.log("fetched",t),n()})).catch((function(t){console.log(t)}))}},{path:"/ask",name:"ask",component:z,beforeEnter:function(t,e,n){g.$emit("start:spinner"),Ut.dispatch("FETCH_LIST",t.name).then((function(t){console.log("fetched",t),n()})).catch((function(t){console.log(t)}))}},{path:"/jobs",name:"jobs",component:X,beforeEnter:function(t,e,n){g.$emit("start:spinner"),Ut.dispatch("FETCH_LIST",t.name).then((function(t){console.log("fetched",t),n()})).catch((function(t){console.log(t)}))}},{path:"/user/:user",component:ut},{path:"/item/:id",component:ht},{path:"/async",component:Ot}]});r["a"].config.devtools=!0,r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(w)},router:Lt,store:Ut}).$mount("#app")},"85ec":function(t,e,n){},aa25:function(t,e,n){},bc8e:function(t,e,n){},ce34:function(t,e,n){"use strict";n("bc8e")},f22a:function(t,e,n){"use strict";n("1f6b")}});
//# sourceMappingURL=app.5ce23c56.js.map