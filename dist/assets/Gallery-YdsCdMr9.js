import{w as g,r as s,_ as x,c as t,u as h,j as e,M as j,C as _,b as f,s as o}from"./index-d0baRWkG.js";const P=s.lazy(()=>x(()=>import("./Paginated-9dSZPAsj.js"),__vite__mapDeps([0,1,2])));t(o,"gen/");t(o,"con/");t(o,"proj/");t(o,"com/");const c=({loader:d,galleryImages:m})=>{const i=h(),[u,y]=s.useState(window.innerWidth<768),[p,n]=s.useState(!0),a=m[i.pathname.split("/gallery/")[1]],l=[];return a==null||a.map(r=>{l.push(r.img)}),s.useEffect(()=>{n(!0);const r=setTimeout(()=>{n(!1)},2e3);return()=>clearTimeout(r)},[i.pathname]),d||p?e.jsx("div",{className:"impact",children:e.jsx(j,{})}):e.jsxs("main",{children:[e.jsx("div",{className:"banner",children:e.jsx(_,{images:l})}),e.jsx("div",{className:"gallery",children:e.jsx(s.Suspense,{fallback:e.jsx("h1",{children:"Loading..."}),children:e.jsx(P,{items:a,itemsPerPage:u?4:9})})})]})};c.propTypes={loader:f.bool};const b=g(c);export{b as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Paginated-9dSZPAsj.js","assets/index-d0baRWkG.js","assets/index-7v2-Ncx5.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}