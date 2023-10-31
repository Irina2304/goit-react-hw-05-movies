"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[441],{441:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,i,c=t(439),u=t(854),o=t(505),s=t(174),f=t(168),p=t(867),d=p.ZP.form(r||(r=(0,f.Z)(["\n  padding: 20px;\n  display: flex;\n  gap: 20px;\n"]))),l=p.ZP.button(a||(a=(0,f.Z)(["\n  width: 10%;\n  font-size: 18px;\n  border-radius: 5px;\n  border: solid;\n  border-color: #947150;\n  &:hover,\n  &:focus {\n    background-color: #e4cab3;\n  }\n"]))),h=p.ZP.input(i||(i=(0,f.Z)(["\n  width: 30%;\n  padding: 10px;\n  font-size: 18px;\n  border-radius: 5px;\n  border: solid;\n  border-color: #947150;\n"]))),x=t(184),v=function(n){var e=n.onSubmitSearchBar,t=n.value;return(0,x.jsx)("div",{children:(0,x.jsxs)(d,{onSubmit:function(n){n.preventDefault();var t=n.currentTarget.elements.search.value;e(t)},children:[(0,x.jsx)(l,{children:(0,x.jsx)("span",{children:"Search"})}),(0,x.jsx)(h,{type:"text",name:"search",autoComplete:"off",autoFocus:!0,defaultValue:t,placeholder:"Search movies"})]})})},g=t(686),Z=t.n(g),m=t(600),w=t(791),b=t(87);function y(){var n,e=(0,w.useState)(!1),t=(0,c.Z)(e,2),r=t[0],a=t[1],i=(0,w.useState)(!1),f=(0,c.Z)(i,2),p=f[0],d=f[1],l=(0,w.useState)([]),h=(0,c.Z)(l,2),g=h[0],y=h[1],j=(0,b.lr)(),k=(0,c.Z)(j,2),_=k[0],S=k[1],P=null!==(n=_.get("query"))&&void 0!==n?n:"";(0,w.useEffect)((function(){""!==P&&(a(!0),d(!1),(0,m.zy)(P).then((function(n){y(n.results)})).catch((function(){d(!0)})).finally((function(){a(!1)})))}),[P]);return(0,x.jsxs)("div",{children:[(0,x.jsx)(v,{onSubmitSearchBar:function(n){if(""===n)return S({}),Z().Notify.warning("Please enter search word");S({query:n})},value:P}),(0,x.jsxs)("section",{children:[r&&(0,x.jsx)(u.a,{}),p&&(0,x.jsx)(o.Z,{title:"Whoops! Error! Please reload this page!"}),g.length>0&&(0,x.jsx)(s.Z,{list:g})]})]})}},600:function(n,e,t){t.d(e,{Bt:function(){return d},DJ:function(){return f},Qd:function(){return o},d5:function(){return p},zy:function(){return s}});var r=t(861),a=t(757),i=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="024cc5f09908565df80effcaf2ef8e5e",o=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day?language=en-US&api_key=".concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(u,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},505:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(184);function a(n){var e=n.title;return(0,r.jsx)("p",{children:e})}},854:function(n,e,t){t.d(e,{a:function(){return i}});var r=t(881),a=t(184),i=function(){return(0,a.jsx)(r.Y8,{visible:!0,height:"80",width:"80",ariaLabel:"radio-loading",wrapperStyle:{},wrapperClass:"radio-wrapper"})}},174:function(n,e,t){t.d(e,{Z:function(){return h}});var r,a,i,c=t(689),u=t(87),o=t(168),s=t(867),f=s.ZP.ul(r||(r=(0,o.Z)(["\n  padding: 20px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 15px;\n"]))),p=s.ZP.div(a||(a=(0,o.Z)(["\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),d=s.ZP.h3(i||(i=(0,o.Z)(["\n  text-align: center;\n"]))),l=t(184);function h(n){var e=n.list,t=(0,c.TH)();return(0,l.jsx)(f,{children:e.map((function(n){var e=n.id,r=n.title,a=n.name,i=n.poster_path;return(0,l.jsx)("li",{children:(0,l.jsx)(u.rU,{to:"/movies/".concat(e),state:{from:t},children:(0,l.jsxs)(p,{children:[(0,l.jsx)("img",{src:i?"http://image.tmdb.org/t/p/w154".concat(i):"http://placehold.it/154x231&text=no_image",alt:r||a,width:"154",height:"231"}),(0,l.jsx)(d,{children:r||a})]})})},e)}))})}}}]);
//# sourceMappingURL=441.07edcb6b.chunk.js.map