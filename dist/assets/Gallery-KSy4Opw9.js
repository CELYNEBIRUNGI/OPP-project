import{r as s,_ as c,u as o,g as m,c as g,d as u,e as y,f as d,h as f,i as h,k as j,j as e,C as x}from"./index-CDDPko5v.js";const p=s.lazy(()=>c(()=>import("./Paginated-i-IT-uDj.js"),__vite__mapDeps([0,1,2]))),L=()=>{const a=o(),[r,I]=s.useState(window.innerWidth<768),[i,t]=s.useState([]),[n,l]=s.useState([]);return s.useEffect(()=>{a.pathname==="/gallery/general"?(l(m),t(g)):a.pathname==="/gallery/community-activity"?(l(u),t(y)):a.pathname==="/gallery/conferences"?(l(d),t(f)):(l(h),t(j))},[a.pathname]),e.jsxs("main",{children:[e.jsx("div",{className:"banner",children:e.jsx(x,{images:n})}),e.jsx("div",{className:"gallery",children:e.jsx(s.Suspense,{fallback:e.jsx("h1",{children:"Loading..."}),children:e.jsx(p,{items:i,itemsPerPage:r?4:9})})})]})};export{L as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Paginated-i-IT-uDj.js","assets/index-CDDPko5v.js","assets/index-SzcZL9zy.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}