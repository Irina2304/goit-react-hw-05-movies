"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[575],{575:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,a,c=e(439),i=e(854),u=e(791),o=e(600),s=e(505),f=e(174),p=e(168),d=e(867),l=d.ZP.section(r||(r=(0,p.Z)(["\n  padding: 20px;\n"]))),h=d.ZP.h2(a||(a=(0,p.Z)([""]))),v=e(184);function x(){var n=(0,u.useState)(!0),t=(0,c.Z)(n,2),e=t[0],r=t[1],a=(0,u.useState)([]),p=(0,c.Z)(a,2),d=p[0],x=p[1],Z=(0,u.useState)(!1),g=(0,c.Z)(Z,2),w=g[0],m=g[1];return(0,u.useEffect)((function(){m(!1),d.length>0||(0,o.Qd)().then((function(n){x(n.results)})).catch((function(){m(!0)})).finally((function(){r(!1)}))}),[d]),(0,v.jsxs)(l,{children:[(0,v.jsx)(h,{children:"Trending today:"}),e&&(0,v.jsx)(i.a,{}),w&&(0,v.jsx)(s.Z,{title:"Whoops! Error! Please reload this page!"}),(0,v.jsx)(f.Z,{list:d})]})}},600:function(n,t,e){e.d(t,{Bt:function(){return d},DJ:function(){return f},Qd:function(){return o},d5:function(){return p},zy:function(){return s}});var r=e(861),a=e(757),c=e.n(a),i=e(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="024cc5f09908565df80effcaf2ef8e5e",o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/all/day?language=en-US&api_key=".concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(u,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/credits?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/reviews?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},505:function(n,t,e){e.d(t,{Z:function(){return a}});var r=e(184);function a(n){var t=n.title;return(0,r.jsx)("p",{children:t})}},854:function(n,t,e){e.d(t,{a:function(){return c}});var r=e(881),a=e(184),c=function(){return(0,a.jsx)(r.Y8,{visible:!0,height:"80",width:"80",ariaLabel:"radio-loading",wrapperStyle:{},wrapperClass:"radio-wrapper"})}},174:function(n,t,e){e.d(t,{Z:function(){return h}});var r,a,c,i=e(689),u=e(87),o=e(168),s=e(867),f=s.ZP.ul(r||(r=(0,o.Z)(["\n  padding: 20px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 15px;\n"]))),p=s.ZP.div(a||(a=(0,o.Z)(["\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),d=s.ZP.h3(c||(c=(0,o.Z)(["\n  text-align: center;\n"]))),l=e(184);function h(n){var t=n.list,e=(0,i.TH)();return(0,l.jsx)(f,{children:t.map((function(n){var t=n.id,r=n.title,a=n.name,c=n.poster_path;return(0,l.jsx)("li",{children:(0,l.jsx)(u.rU,{to:"/movies/".concat(t),state:{from:e},children:(0,l.jsxs)(p,{children:[(0,l.jsx)("img",{src:c?"http://image.tmdb.org/t/p/w154".concat(c):"http://placehold.it/154x231&text=no_image",alt:r||a,width:"154",height:"231"}),(0,l.jsx)(d,{children:r||a})]})})},t)}))})}}}]);
//# sourceMappingURL=575.47eaaffe.chunk.js.map