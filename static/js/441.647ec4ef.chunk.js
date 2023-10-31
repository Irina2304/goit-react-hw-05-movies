"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[441],{441:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,i,c=t(439),u=t(854),o=t(505),s=t(174),f=t(168),p=t(867),d=p.ZP.form(r||(r=(0,f.Z)(["\n  padding: 20px;\n  display: flex;\n  gap: 20px;\n"]))),l=p.ZP.button(a||(a=(0,f.Z)(["\n  width: 10%;\n  font-size: 18px;\n  border-radius: 5px;\n  border: solid;\n  border-color: #947150;\n  &:hover,\n  &:focus {\n    background-color: #e4cab3;\n  }\n"]))),h=p.ZP.input(i||(i=(0,f.Z)(["\n  width: 30%;\n  padding: 10px;\n  font-size: 18px;\n  border-radius: 5px;\n  border: solid;\n  border-color: #947150;\n"]))),x=t(686),v=t.n(x),g=t(184),Z=function(n){var e=n.onSubmitSearchBar,t=n.value;return(0,g.jsx)("div",{children:(0,g.jsxs)(d,{onSubmit:function(n){n.preventDefault();var t=n.currentTarget.elements.search.value;if(""===t)return v().Notify.warning("Please enter search word");e(t)},children:[(0,g.jsx)(l,{children:(0,g.jsx)("span",{children:"Search"})}),(0,g.jsx)(h,{type:"text",name:"search",autoComplete:"off",autoFocus:!0,defaultValue:t,placeholder:"Search movies"})]})})},m=t(600),w=t(791),b=t(87);function y(){var n,e=(0,w.useState)(!1),t=(0,c.Z)(e,2),r=t[0],a=t[1],i=(0,w.useState)(!1),f=(0,c.Z)(i,2),p=f[0],d=f[1],l=(0,w.useState)([]),h=(0,c.Z)(l,2),x=h[0],v=h[1],y=(0,b.lr)(),j=(0,c.Z)(y,2),k=j[0],_=j[1],S=null!==(n=k.get("query"))&&void 0!==n?n:"";(0,w.useEffect)((function(){""!==S&&(a(!0),d(!1),(0,m.zy)(S).then((function(n){v(n.results)})).catch((function(){d(!0)})).finally((function(){a(!1)})))}),[S]);return(0,g.jsxs)("div",{children:[(0,g.jsx)(Z,{onSubmitSearchBar:function(n){_({query:n})},value:S}),(0,g.jsxs)("section",{children:[r&&(0,g.jsx)(u.a,{}),p&&(0,g.jsx)(o.Z,{title:"Whoops! Error! Please reload this page!"}),x.length>0&&(0,g.jsx)(s.Z,{list:x})]})]})}},600:function(n,e,t){t.d(e,{Bt:function(){return d},DJ:function(){return f},Qd:function(){return o},d5:function(){return p},zy:function(){return s}});var r=t(861),a=t(757),i=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="024cc5f09908565df80effcaf2ef8e5e",o=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day?language=en-US&api_key=".concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(u,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},505:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(184);function a(n){var e=n.title;return(0,r.jsx)("p",{children:e})}},854:function(n,e,t){t.d(e,{a:function(){return i}});var r=t(881),a=t(184),i=function(){return(0,a.jsx)(r.Y8,{visible:!0,height:"80",width:"80",ariaLabel:"radio-loading",wrapperStyle:{},wrapperClass:"radio-wrapper"})}},174:function(n,e,t){t.d(e,{Z:function(){return h}});var r,a,i,c=t(689),u=t(87),o=t(168),s=t(867),f=s.ZP.ul(r||(r=(0,o.Z)(["\n  padding: 20px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 15px;\n"]))),p=s.ZP.div(a||(a=(0,o.Z)(["\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),d=s.ZP.h3(i||(i=(0,o.Z)(["\n  text-align: center;\n"]))),l=t(184);function h(n){var e=n.list,t=(0,c.TH)();return(0,l.jsx)(f,{children:e.map((function(n){var e=n.id,r=n.title,a=n.name,i=n.poster_path;return(0,l.jsx)("li",{children:(0,l.jsx)(u.rU,{to:"/movies/".concat(e),state:{from:t},children:(0,l.jsxs)(p,{children:[(0,l.jsx)("img",{src:i?"https://image.tmdb.org/t/p/w154".concat(i):"https://placehold.it/154x231&text=no_image",alt:r||a,width:"154",height:"231"}),(0,l.jsx)(d,{children:r||a})]})})},e)}))})}}}]);
//# sourceMappingURL=441.647ec4ef.chunk.js.map