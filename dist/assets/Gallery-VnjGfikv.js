import{j as s,u as g,r as d,g as j,c as u,d as x,e as p,f as v,h as m,i as f,k as N,C as I}from"./index-179M-kde.js";const b=({item:a})=>s.jsxs("div",{className:"gallery-card",children:[s.jsx("div",{className:"gallery-image",children:s.jsx("img",{src:a==null?void 0:a.img,alt:a.title})}),s.jsxs("div",{className:"card-body",children:[s.jsx("h3",{children:a==null?void 0:a.title}),s.jsxs("div",{className:"props",children:[s.jsx("p",{children:a==null?void 0:a.date}),s.jsx("p",{children:a.category})]}),s.jsx("p",{children:a==null?void 0:a.description})]})]}),L=({items:a,itemsPerPage:e})=>{const c=g(),h=Math.ceil((a==null?void 0:a.length)/e),[n,i]=d.useState(()=>1),o=(n-1)*e,y=o+e,t=r=>{i(r)};return d.useEffect(()=>{t(1)},[c.pathname]),s.jsxs("div",{className:"page-container",children:[s.jsx("ul",{className:"list",children:a==null?void 0:a.slice(o,y).map(r=>s.jsx(b,{item:r},r.id))}),s.jsx("div",{className:"page-numbers",children:Array.from({length:h}).map((r,l)=>s.jsx("button",{onClick:()=>{t(l+1)},className:l+1===n?"active":"",children:l+1},l))})]})},P=()=>{const a=g(),e=a.pathname==="/gallery/general"?j:a.pathname==="/gallery/community-activity"?u:a.pathname==="/gallery/conferences"?x:p,c=a.pathname==="/gallery/general"?v:a.pathname==="/gallery/community-activity"?m:a.pathname==="/gallery/conferences"?f:N;return s.jsxs("main",{children:[s.jsx("div",{className:"banner",children:s.jsx(I,{images:c})}),s.jsx("div",{className:"gallery",children:s.jsx(L,{items:e,itemsPerPage:9})})]})};export{P as default};
