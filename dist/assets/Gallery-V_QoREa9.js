import{r as s,_ as o,u as m,g,a as u,c as y,b as d,d as f,e as h,f as j,h as x,j as e,C as p}from"./index-ADqTrzYT.js";const I=s.lazy(()=>o(()=>import("./Paginated-d-vcm6kw.js"),__vite__mapDeps([0,1,2]))),_=()=>{const t=m(),[i,b]=s.useState(window.innerWidth<768),[n,l]=s.useState([]),[c,r]=s.useState([]);return s.useEffect(()=>{let a;t.pathname==="/gallery/general"?(r(g),l(u),a="General"):t.pathname==="/gallery/community-activity"?(r(y),l(d),a="Community Activities"):t.pathname==="/gallery/conferences"?(r(f),l(h),a="Conferences"):(r(j),l(x),a="Project-Hub"),document.title=`Gallery  |  ${a}`},[t.pathname]),e.jsxs("main",{children:[e.jsx("div",{className:"banner",children:e.jsx(p,{images:c})}),e.jsx("div",{className:"gallery",children:e.jsx(s.Suspense,{fallback:e.jsx("h1",{children:"Loading..."}),children:e.jsx(I,{items:n,itemsPerPage:i?4:9})})})]})};export{_ as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Paginated-d-vcm6kw.js","assets/index-ADqTrzYT.js","assets/index-B3zxesNW.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}