import{l as n,u as o,r,p as c,j as a,P as u,C as m,m as d,S as f}from"./index-nBEuLPBT.js";const x=()=>{const{id:e}=n(),i=o();r.useEffect(()=>{let s;e==="1"?s="Mayuge":e==="2"?s="Masaka":e==="3"?s="Bavuma":e==="4"?s="Kalangala":s="Mukono",document.title=`Project | ${s}`},[i.pathname]);const t=c.find(s=>s.id===parseInt(e));return a.jsxs(u,{myClass:"site-info",children:[a.jsx("h2",{children:t==null?void 0:t.title}),a.jsx("div",{className:"carrousel",children:a.jsx(m,{images:[d]})}),t.bigText.map((s,l)=>a.jsx(f,{start:"1",finish:"1.33",scale:.9,opacity:.8,children:a.jsx("p",{children:s})},l))]})};export{x as default};
