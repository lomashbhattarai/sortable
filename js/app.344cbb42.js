(function(t){function n(n){for(var r,a,s=n[0],l=n[1],c=n[2],p=0,f=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(n);while(f.length)f.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],r=!0,s=1;s<e.length;s++){var l=e[s];0!==i[l]&&(r=!1)}r&&(o.splice(n--,1),t=a(a.s=e[0]))}return t}var r={},i={app:0},o=[];function a(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=r,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)a.d(e,r,function(n){return t[n]}.bind(null,r));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/sortable/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var u=l;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var r=e("85ec"),i=e.n(r);i.a},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("Sortable")],1)},o=[],a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-2"},[e("button",{staticClass:"btn btn-secondary button",on:{click:t.sort}},[t._v(" Reset ")])]),e("div",{staticClass:"col-6"},[e("h3",[t._v("Sort by dragging")]),e("draggable",t._b({staticClass:"list-group",attrs:{tag:"ul"},on:{start:function(n){t.isDragging=!0},end:function(n){t.isDragging=!1}},model:{value:t.list,callback:function(n){t.list=n},expression:"list"}},"draggable",t.dragOptions,!1),[e("transition-group",{attrs:{type:"transition",name:"flip-list"}},t._l(t.list,(function(n){return e("li",{key:n.order,staticClass:"list-group-item"},[e("div",[e("img",{staticClass:"img-holder",attrs:{src:"https://lomashbhattarai.github.io/images/pp.jpg"}})]),e("i",{class:n.fixed?"fa fa-anchor":"glyphicon glyphicon-pushpin",attrs:{"aria-hidden":"true"},on:{click:function(t){n.fixed=!n.fixed}}}),t._v(" "+t._s(n.name)+" ")])})),0)],1)],1),e("rawDisplayer",{staticClass:"col-3",attrs:{value:t.list,title:"List"}})],1)},s=[],l=(e("d81d"),e("310e")),c=e.n(l),u=["one","two","three","four","five","six","seven","eight"],p={name:"transition-example",display:"Transition",order:6,components:{draggable:c.a},data:function(){return{list:u.map((function(t,n){return{name:t,order:n+1}}))}},methods:{sort:function(){this.list=this.list.sort((function(t,n){return t.order-n.order}))}},computed:{dragOptions:function(){return{animation:0,group:"description",disabled:!1,ghostClass:"ghost"}}}},f=p,d=(e("cfb6"),e("2877")),g=Object(d["a"])(f,a,s,!1,null,null,null),b=g.exports,h={name:"App",components:{Sortable:b}},v=h,m=(e("034f"),Object(d["a"])(v,i,o,!1,null,null,null)),y=m.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(y)}}).$mount("#app")},5750:function(t,n,e){},"85ec":function(t,n,e){},cfb6:function(t,n,e){"use strict";var r=e("5750"),i=e.n(r);i.a}});
//# sourceMappingURL=app.344cbb42.js.map