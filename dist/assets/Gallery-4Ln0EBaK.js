function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Paginated-BB8-G-YU.js","assets/index-DRa8BoGL.js","assets/index-BJPltdHG.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{w as h,r as s,_ as x,u as j,g as y,c as T,d as b,e as f,j as e,M as _,C as P,b as L}from"./index-DRa8BoGL.js";const v=s.lazy(()=>x(()=>import("./Paginated-BB8-G-YU.js"),__vite__mapDeps([0,1,2]))),o=({loader:c,galleryImages:m,loadImages:u})=>{const r=j(),[d,w]=s.useState(window.innerWidth<768),[p,l]=s.useState(!0),[g,a]=s.useState(null),t=m[r.pathname.split("/gallery/")[1]],n=[];return t==null||t.map(i=>{n.push(i.img)}),s.useEffect(()=>{l(!0);const i=setTimeout(()=>{switch(l(!1),r.pathname){case"/gallery/projects":a(f);break;case"/gallery/community":a(b);break;case"/gallery/conferences":a(T);break;default:a(y);break}},2e3);return()=>clearTimeout(i)},[r.pathname]),c||p?e.jsx("div",{className:"impact",children:e.jsx(_,{})}):e.jsxs("main",{children:[e.jsx("div",{className:"banner",children:e.jsx(P,{images:n})}),e.jsx("div",{className:"gallery",children:e.jsxs(s.Suspense,{children:[u&&e.jsx("h1",{style:{textAlign:"center"},children:"Loading images..."}),e.jsx(v,{items:t,itemsPerPage:d?4:9,titles:g})]})})]})};o.propTypes={loader:L.bool};const S=h(o);export{S as default};
