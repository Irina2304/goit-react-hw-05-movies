"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[765],{765:function(t,n,r){r.r(n),r.d(n,{default:function(){return f}});var e=r(439),a=r(854),c=r(791),u=r(600),i=r(505),o=r(368),s=r(184);function f(){var t=(0,c.useState)(!0),n=(0,e.Z)(t,2),r=n[0],f=n[1],p=(0,c.useState)([]),d=(0,e.Z)(p,2),h=d[0],l=d[1],v=(0,c.useState)(!1),x=(0,e.Z)(v,2),g=x[0],w=x[1];return(0,c.useEffect)((function(){w(!1),h.length>0||(0,u.Qd)().then((function(t){l(t.results)})).catch((function(){w(!0)})).finally((function(){f(!1)}))}),[h]),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Trending today"}),r&&(0,s.jsx)(a.a,{}),g&&(0,s.jsx)(i.Z,{title:"Whoops! Error! Please reload this page!"}),(0,s.jsx)(o.Z,{list:h})]})}},600:function(t,n,r){r.d(n,{Bt:function(){return d},DJ:function(){return f},Qd:function(){return o},d5:function(){return p},zy:function(){return s}});var e=r(861),a=r(757),c=r.n(a),u=r(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="024cc5f09908565df80effcaf2ef8e5e",o=function(){var t=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/all/day?language=en-US&api_key=".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(n));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},505:function(t,n,r){r.d(n,{Z:function(){return a}});var e=r(184);function a(t){var n=t.title;return(0,e.jsx)("p",{children:n})}},854:function(t,n,r){r.d(n,{a:function(){return c}});var e=r(881),a=r(184),c=function(){return(0,a.jsx)(e.Y8,{visible:!0,height:"80",width:"80",ariaLabel:"radio-loading",wrapperStyle:{},wrapperClass:"radio-wrapper"})}},368:function(t,n,r){r.d(n,{Z:function(){return u}});var e=r(689),a=r(87),c=r(184);function u(t){var n=t.list,r=(0,e.TH)();return console.log(n),(0,c.jsx)("ul",{children:n.map((function(t){var n=t.id,e=t.title,u=t.name,i=t.poster_path;return(0,c.jsx)(a.rU,{to:"/movies/".concat(n),state:{from:r},children:(0,c.jsxs)("li",{children:[(0,c.jsx)("img",{src:i?"http://image.tmdb.org/t/p/w154".concat(i):"http://placehold.it/154x231&text=no_image",alt:e||u,width:"154",height:"231"}),(0,c.jsx)("div",{children:(0,c.jsx)("h3",{children:e||u})})]},n)},n)}))})}}}]);
//# sourceMappingURL=765.36ab0143.chunk.js.map