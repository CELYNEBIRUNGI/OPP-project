import{j as s,u as i,r as o,g as j,c as u,d as x,e as p,f as v,h as m,i as f,k as N,C as b}from"./index-oHoqJ0jj.js";const I=({item:a})=>s.jsxs("div",{className:"gallery-card",children:[s.jsx("div",{className:"gallery-image",children:s.jsx("img",{src:a==null?void 0:a.img,alt:a.title})}),s.jsxs("div",{className:"card-body",children:[s.jsx("h3",{children:a==null?void 0:a.title}),s.jsxs("div",{className:"props",children:[s.jsx("p",{children:a==null?void 0:a.date}),s.jsx("p",{children:a.category})]}),s.jsx("p",{children:a==null?void 0:a.description})]})]}),L=({items:a,itemsPerPage:e})=>{const t=i(),c=Math.ceil((a==null?void 0:a.length)/e),[l,h]=o.useState(()=>1),d=(l-1)*e,y=d+e,g=r=>{h(r)};return o.useEffect(()=>{g(1)},[t.pathname]),s.jsxs("div",{className:"page-container",children:[s.jsx("ul",{className:"list",children:a==null?void 0:a.slice(d,y).map(r=>s.jsx(I,{item:r},r.id))}),s.jsx("div",{className:"page-numbers",children:Array.from({length:c}).map((r,n)=>s.jsx("button",{onClick:()=>{g(n+1)},className:n+1===l?"active":"",children:n+1},n))})]})},P=()=>{const a=i(),[e,t]=o.useState(window.innerWidth<768),c=a.pathname==="/gallery/general"?j:a.pathname==="/gallery/community-activity"?u:a.pathname==="/gallery/conferences"?x:p,l=a.pathname==="/gallery/general"?v:a.pathname==="/gallery/community-activity"?m:a.pathname==="/gallery/conferences"?f:N;return s.jsxs("main",{children:[s.jsx("div",{className:"banner",children:s.jsx(b,{images:l})}),s.jsx("div",{className:"gallery",children:s.jsx(L,{items:c,itemsPerPage:e?4:9})})]})};export{P as default};
