"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{510:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n(87),c=n(689),a=n(791),u="MovieList_searchMovies__UtfED",o="MovieList_searchMovieItem__8aY9H",i=n(184),s=function(t){var e,n=t.listName,s=t.films,f=(0,c.TH)(),p=(0,a.useRef)(null===(e=f.state)||void 0===e?void 0:e.from);return console.log("backPageLocation",p),console.log("MovieList:",f),(0,i.jsxs)("ul",{className:u,children:[n,s.map((function(t){var e=t.title,n=t.id;return(0,i.jsx)("li",{className:o,children:(0,i.jsx)(r.rU,{to:"/movies/".concat(n),state:{from:f},children:e})},n)}))]})}},591:function(t,e,n){n.d(e,{Df:function(){return s},IQ:function(){return p},Pg:function(){return f},Ph:function(){return v},Tn:function(){return l}});var r=n(861),c=n(757),a=n.n(c),u=n(243),o="0cfcdf1e4fa301f56ea0fab1777678b6",i="https://api.themoviedb.org/3/",s=function(){var t=(0,r.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i).concat("trending/movie/week","?api_key=").concat(o));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat("https://api.themoviedb.org/3/movie/").concat(e,"?api_key=").concat(o));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(o,"&page=1&12per_page"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(o));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"search/movie?api_key=").concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(e,"&"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},544:function(t,e,n){n.r(e);var r=n(439),c=n(791),a=n(689),u=n(591),o=n(510),i=n(184);e.default=function(){var t=(0,c.useState)([]),e=(0,r.Z)(t,2),n=e[0],s=e[1],f=(0,a.TH)();return(0,c.useEffect)((function(){(0,u.Df)().then((function(t){var e=t.data.results;s(e)})).catch((function(t){return console.log(t.message)}))}),[]),(0,i.jsx)("main",{children:(0,i.jsx)(o.Z,{listName:"Trending today",films:n,location:f})})}}}]);
//# sourceMappingURL=544.9d6e2a2a.chunk.js.map