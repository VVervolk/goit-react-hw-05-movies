"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[939],{653:function(n,t,r){r.d(t,{Z:function(){return s}});var e,o,i=r(168),c=r(686),a=c.Z.li(e||(e=(0,i.Z)(["\n  padding: 12px 16px;\n  border-radius: 12px;\n  align-self: stretch;\n  min-height: 430px;\n  background-color: var(--white-color);\n"]))),u=c.Z.p(o||(o=(0,i.Z)(["\n  text-align: center;\n  margin-top: 12px;\n  color: var(--main-bg-color);\n"]))),l=r(184);function s(n){var t=n.options,r=t.name,e=t.title,o=t.poster_path;return(0,l.jsxs)(a,{children:[(0,l.jsx)("img",{src:o?"https://image.tmdb.org/t/p/w500".concat(o):"https://i.imgur.com/Z2MYNbj.png",alt:e||r}),(0,l.jsx)(u,{children:e||r})]})}},575:function(n,t,r){r.d(t,{Dx:function(){return s},GK:function(){return h},aV:function(){return p}});var e,o,i,c,a=r(168),u=r(686),l=r(87),s=u.Z.h2(e||(e=(0,a.Z)(["\n  color: var(--white-color);\n  margin-bottom: 20px;\n"]))),p=u.Z.ul(o||(o=(0,a.Z)(["\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n"]))),h=(0,u.Z)(l.rU)(i||(i=(0,a.Z)(["\n  width: calc(25% - 15px);\n"])));u.Z.ul(c||(c=(0,a.Z)(["\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n"])))},939:function(n,t,r){r.r(t),r.d(t,{default:function(){return p}});var e=r(439),o=r(653),i=r(689),c=r(299),a=r(791),u=r(575),l=r(905),s=r(184);function p(){var n=(0,i.TH)(),t=(0,a.useState)([]),r=(0,e.Z)(t,2),p=r[0],h=r[1];return(0,a.useEffect)((function(){console.log("1"),(0,c.Z)("trending/all/day").then((function(n){return h(n.results)})).catch((function(n){return console.error(n)}))}),[]),(0,s.jsx)("main",{children:(0,s.jsxs)(l.W,{children:[(0,s.jsx)(u.Dx,{children:"Trending today"}),(0,s.jsx)(u.aV,{children:p.map((function(t){var r=t.id,e=t.name,i=t.poster_path,c=t.title;return(0,s.jsx)(u.GK,{to:"/movies/".concat(r),state:{from:n},children:(0,s.jsx)(o.Z,{options:{name:e,title:c,poster_path:i}})},r)}))})]})})}},299:function(n,t,r){r.d(t,{Z:function(){return o}});var e={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTY1YjgzZTRlMDY1MGU2ZTJlNzU2YTY3MjVmNTg0OCIsInN1YiI6IjY0OTNlZWNiY2ZlNDhmMDBhY2ExNzBkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wcGxTBKfsLd3h8YX0sgQK0DmVDuLuYq0pCCHV9Po96o"}};function o(n){return fetch("https://api.themoviedb.org/3/".concat(n),e).then((function(n){if(!n.ok)throw new Error("Error load");return n.json()}))}}}]);
//# sourceMappingURL=939.c12b06ed.chunk.js.map