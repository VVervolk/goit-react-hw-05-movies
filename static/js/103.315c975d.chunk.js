"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[103],{926:function(n,r,e){e.d(r,{DK:function(){return v},FS:function(){return j},KG:function(){return p},Ot:function(){return g},Z5:function(){return m},jh:function(){return Z},vD:function(){return f},zx:function(){return x}});var t,i,o,c,s,a,u,d,l=e(168),h=e(686),x=h.Z.button(t||(t=(0,l.Z)(["\n  background-color: var(--turquoise-color);\n  border-radius: 12px;\n  border-width: 0;\n  margin-bottom: 12px;\n"]))),p=h.Z.div(i||(i=(0,l.Z)(["\n  background-color: var(--white-color);\n  padding: 16px 20px;\n  border-radius: 12px;\n  color: var(--main-bg-color);\n"]))),f=h.Z.div(o||(o=(0,l.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),j=h.Z.div(c||(c=(0,l.Z)(["\n  max-width: 200px;\n"]))),v=h.Z.h3(s||(s=(0,l.Z)(["\n  margin-top: 16px;\n"]))),m=h.Z.div(a||(a=(0,l.Z)(["\n  margin: 20px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),Z=h.Z.ul(u||(u=(0,l.Z)(["\n  display: flex;\n  gap: 12px;\n"]))),g=h.Z.li(d||(d=(0,l.Z)(["\n  background-color: var(--turquoise-color);\n  padding: 4px 8px;\n  border-radius: 12px;\n\n  &:hover,\n  &:focus {\n    color: var(--white-color);\n  }\n"])))},103:function(n,r,e){e.r(r),e.d(r,{default:function(){return l}});var t=e(439),i=e(791),o=e(689),c=e(87),s=e(299),a=e(905),u=e(926),d=e(184);function l(){var n,r,e=(0,o.TH)(),l=(0,o.UO)().movieId,h=(0,i.useState)(),x=(0,t.Z)(h,2),p=x[0],f=x[1];return(0,i.useEffect)((function(){p||(0,s.Z)("movie/".concat(l)).then((function(n){return f(n)})).catch((function(n){return console.error(n)}))}),[p,l]),(0,d.jsx)("main",{children:(0,d.jsxs)(a.W,{children:[(0,d.jsx)(c.rU,{to:null!==(n=null===(r=e.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/",state:{from:e},children:(0,d.jsx)(u.zx,{type:"button",children:"\ud83e\udc14 Go back"})}),p&&(0,d.jsxs)(u.KG,{children:[(0,d.jsxs)(u.vD,{children:[(0,d.jsx)(u.FS,{children:(0,d.jsx)("img",{src:p.poster_path?"https://image.tmdb.org/t/p/w500".concat(p.poster_path):"https://i.imgur.com/Z2MYNbj.png",alt:p.title||p.name})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:p.title||p.name}),(0,d.jsxs)("p",{children:["User score: ",p.vote_average," "]}),(0,d.jsx)(u.DK,{children:"Overview"}),(0,d.jsx)("p",{children:p.overview}),(0,d.jsx)(u.DK,{children:"Genres"}),(0,d.jsx)("p",{children:p.genres.map((function(n,r,e){var t=n.name;return e.length-1===r?t:"".concat(t,", ")}))})]})]}),(0,d.jsxs)(u.Z5,{children:[(0,d.jsx)("h5",{children:"Additional information"}),(0,d.jsxs)(u.jh,{children:[(0,d.jsx)(u.Ot,{children:(0,d.jsx)(c.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)(u.Ot,{children:(0,d.jsx)(c.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,d.jsx)(o.j3,{})]})]})})}},299:function(n,r,e){e.d(r,{Z:function(){return i}});var t={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTY1YjgzZTRlMDY1MGU2ZTJlNzU2YTY3MjVmNTg0OCIsInN1YiI6IjY0OTNlZWNiY2ZlNDhmMDBhY2ExNzBkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wcGxTBKfsLd3h8YX0sgQK0DmVDuLuYq0pCCHV9Po96o"}};function i(n){return fetch("https://api.themoviedb.org/3/".concat(n),t).then((function(n){if(!n.ok)throw new Error("Error load");return n.json()}))}}}]);
//# sourceMappingURL=103.315c975d.chunk.js.map