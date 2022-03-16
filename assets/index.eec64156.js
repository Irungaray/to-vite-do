var O=Object.defineProperty;var N=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var _=(e,t,o)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,L=(e,t)=>{for(var o in t||(t={}))$.call(t,o)&&_(e,o,t[o]);if(N)for(var o of N(t))E.call(t,o)&&_(e,o,t[o]);return e};import{l as m,y,j as V,a as H,F as j,D as R,b as S,P as w,W as P,S as G}from"./vendor.f2ebbf87.js";const Z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}};Z();const k=(e,t)=>{const[o,l]=m(t),[r,s]=m(!0);return y(()=>{const c=localStorage.getItem(e);let u=JSON.stringify(t),h;c?h=JSON.parse(c):(localStorage.setItem(e,u),h=t),l(h),s(!0)},[r,e]),[o,c=>{let u=JSON.stringify(c);localStorage.setItem(e,u),l(c)},c=>{s(!1)},r]},n=V,i=H,I=j,b=R(),q=e=>{const[t,o,l]=k(e.pointer,[]),[r,s]=m(""),[d,a]=m(!1),c=t.filter(f=>!!f.completed).length,u=t.length,h=t.filter(f=>f.text.toLowerCase().includes(r.toLowerCase()));let p=t;r.length>=1&&(p=h);const F={completed:c,total:u,searchValue:r,setSearchValue:s,searchedTodos:p,toggleComplete:f=>{let C=[...t],B=t.findIndex(D=>D.id===f);C[B].completed=!C[B].completed,o(C)},handleDelete:f=>{o(t.filter(C=>C.id!=f))},openModal:d,setOpenModal:a,handleAdd:f=>{let C=[...t];C.push({id:Date.now(),completed:!1,text:f}),o(C)},syncTodos:l};return n(b.Provider,{value:F,children:e.children})},x=()=>{const[e,t,o,l]=k("crumbs",["Main"]),[r,s]=k("selectedCrumb","Main"),[d,a]=m(!1);return r===void 0&&s(e[0]),[e,r,s,h=>{t([...e,h]),s(h),a(!1)},h=>{localStorage.removeItem(h),t(e.filter(v=>v!=h));let p=e[e.indexOf(h)-1];s(p)},d,a,o]},g=(e,t)=>{const{addEventListener:o,removeEventListener:l}=window,r=s=>{s.key==e&&t()};o("keyup",r),y(()=>()=>l("keyup",r))};const A=e=>n("button",{onClick:e.onClick,className:"AddButton",children:i("svg",{width:"67",height:"79",viewBox:"0 0 67 79",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i("g",{filter:"url(#filter0_d_20_2)",children:[n("path",{d:"M33.5 67L62.5118 16.75H4.48815L33.5 67Z",fill:"#35E7DC"}),n("path",{d:"M7.95225 18.75L33.5 63L59.0477 18.75H7.95225Z",stroke:"black","stroke-width":"4"})]}),n("path",{d:"M33.4951 29.4756C33.8776 29.4756 34.1665 29.5041 34.3618 29.561C34.5571 29.6099 34.6873 29.6872 34.7524 29.793C34.8257 29.8988 34.8623 30.0493 34.8623 30.2446V33.5161H38.146C38.3413 33.5161 38.4919 33.5527 38.5977 33.626C38.7035 33.6992 38.7808 33.8335 38.8296 34.0288C38.8866 34.2241 38.915 34.513 38.915 34.8955C38.915 35.278 38.8866 35.5669 38.8296 35.7622C38.7808 35.9575 38.7035 36.0918 38.5977 36.165C38.4919 36.2301 38.3413 36.2627 38.146 36.2627H34.8623V39.5464C34.8623 39.7417 34.8257 39.8923 34.7524 39.998C34.6873 40.1038 34.5571 40.1852 34.3618 40.2422C34.1665 40.291 33.8776 40.3154 33.4951 40.3154C33.1126 40.3154 32.8237 40.291 32.6284 40.2422C32.4331 40.1852 32.2988 40.1038 32.2256 39.998C32.1523 39.8923 32.1157 39.7417 32.1157 39.5464V36.2627H28.8442C28.6489 36.2627 28.4984 36.2301 28.3926 36.165C28.2868 36.0918 28.2054 35.9575 28.1484 35.7622C28.0996 35.5669 28.0752 35.278 28.0752 34.8955C28.0752 34.513 28.0996 34.2241 28.1484 34.0288C28.2054 33.8335 28.2868 33.6992 28.3926 33.626C28.4984 33.5527 28.6489 33.5161 28.8442 33.5161H32.1157V30.2446C32.1157 30.0493 32.1523 29.8988 32.2256 29.793C32.2988 29.6872 32.4331 29.6099 32.6284 29.561C32.8237 29.5041 33.1126 29.4756 33.4951 29.4756Z",fill:"black"}),n("defs",{children:i("filter",{id:"filter0_d_20_2",x:"0.488281",y:"16.75",width:"66.0234",height:"62.25",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[n("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),n("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),n("feOffset",{dy:"8"}),n("feGaussianBlur",{stdDeviation:"2"}),n("feComposite",{in2:"hardAlpha",operator:"out"}),n("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.636029 0 0 0 0 0.4375 0 0 0 0 1 0 0 0 1 0"}),n("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_20_2"}),n("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_20_2",result:"shape"})]})})]})});const U=({crumbs:e,selectedCrumb:t,setSelectedCrumb:o,deleteCrumb:l,setShowForm:r})=>{const s=()=>{r(a=>!a)};return[1,2,3,4,5,6,7,8,9].forEach(a=>{a>e.length||g(a,()=>o(e[a-1]))}),g("C",()=>s()),g("ArrowRight",()=>o(e[e.indexOf(t)+1])),g("ArrowLeft",()=>o(e[e.indexOf(t)-1])),i("div",{className:"container",children:[e.map((a,c)=>i("section",{className:"crumbs",children:[t===a&&t!="Main"&&n("h2",{onClick:()=>l(t),className:"del",children:"X"}),i("h2",{className:t===a?"breadcrumb active":"breadcrumb",onClick:()=>o(a),children:[a,t===a&&n("div",{className:"border"})]},c)]})),n(A,{onClick:s})]})};const J=e=>{const{completed:t,total:o}=S(b);return n("h1",{className:"Title",children:o>=1?`[ ${t} out of ${o} ]`:"No ToDos on sight."})};const K=e=>n("button",{onClick:e.onClick,className:"SearchButton",children:i("svg",{width:"67",height:"79",viewBox:"0 0 67 79",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i("g",{filter:"url(#filter0_d_20_5)",children:[n("path",{d:"M33.5 67L62.5118 16.75H4.48815L33.5 67Z",fill:"#35E7DC"}),n("path",{d:"M7.95225 18.75L33.5 63L59.0477 18.75H7.95225Z",stroke:"black","stroke-width":"4"})]}),n("path",{d:"M36.9531 36.9531L40.1406 40.1406",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),n("path",{d:"M32.9688 38.0156C35.7561 38.0156 38.0156 35.7561 38.0156 32.9688C38.0156 30.1814 35.7561 27.9219 32.9688 27.9219C30.1814 27.9219 27.9219 30.1814 27.9219 32.9688C27.9219 35.7561 30.1814 38.0156 32.9688 38.0156Z",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),n("defs",{children:i("filter",{id:"filter0_d_20_5",x:"0.488281",y:"16.75",width:"66.0234",height:"62.25",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[n("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),n("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),n("feOffset",{dy:"8"}),n("feGaussianBlur",{stdDeviation:"2"}),n("feComposite",{in2:"hardAlpha",operator:"out"}),n("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.636029 0 0 0 0 0.4375 0 0 0 0 1 0 0 0 1 0"}),n("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_20_5"}),n("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_20_5",result:"shape"})]})})]})});const M=e=>n("div",{className:"Trap",children:n("input",L({type:"text",onInput:e.onInput,value:e.value,placeholder:e.placeholder,className:e.className,autoFocus:"true"},e))});const W=()=>{const{searchValue:e,setSearchValue:t,setOpenModal:o}=S(b),[l,r]=m(!1),s=c=>{t(c.target.value)},d=()=>{o(c=>!c)},a=()=>{r(c=>!c)};return g("A",()=>d()),g("S",()=>a()),y(()=>{l&&document.getElementById("search").focus()}),i("div",{className:"container",children:[n(A,{onClick:()=>d()}),n(K,{onClick:()=>a()}),l&&n(M,{onInput:s,value:e,placeholder:"Search...",id:"search"})]})};const T=e=>i("li",{className:"Item",children:[n("span",{className:`Icon Icon-check ${e.completed&&"Icon-check--active"}`,onClick:e.handleComplete,children:"\u221A"}),n("p",{className:`Item-p ${e.completed&&"Item-p--complete"}`,children:e.text}),n("span",{className:"Icon Icon-delete",onClick:e.handleDelete,children:"X"})]});T.propTypes={handleComplete:w.func.isRequired,handleDelete:w.func.isRequired,completed:w.bool.isRequired,text:w.string.isRequired};const X=()=>{const{searchedTodos:e,toggleComplete:t,handleDelete:o}=S(b);return n("section",{className:"List",children:n("ul",{children:e.map(l=>n(T,{text:l.text,completed:l.completed,handleComplete:r=>t(l.id),handleDelete:r=>o(l.id)},l.id))})})},z=({component:e})=>{const t=document.getElementById("modals");return P(n(I,{children:e}),t)};const Q=()=>{const[e,t]=m(""),{handleAdd:o,setOpenModal:l}=S(b),r=c=>{t(c.target.value)},s=c=>{l(u=>!u)},d=c=>{c.preventDefault(),o(e),s()},a=e.length<1||e=="crumbs";return g("Escape",()=>s()),y(()=>{document.getElementById("addTodo").focus()}),i("form",{className:"Form",onSubmit:d,children:[n("label",{children:"Add new To Do"}),n("textarea",{placeholder:"Add ToDo...",value:e,onInput:r,id:"addTodo"}),i("div",{className:"buttonContainer",children:[n("button",{type:"button",className:"cancel",onClick:s,children:"Cancel"}),n("button",{type:"submit",className:"add",disabled:a,children:"Add"})]})]})},Y=e=>t=>{const[o,l]=m(!1),[r,s]=m(""),{addEventListener:d,removeEventListener:a,location:c}=window,u=v=>{(v.key==t.pointer||v.key=="crumbs")&&(s(v.key),l(!0))};d("storage",u);const h=()=>{l(!1),t.syncTodos()},p=()=>{c.reload()};return y(()=>()=>a("storage",u)),n(e,{changesOn:r,storageChange:o,handleSyncTodos:h,handleSyncCrumbs:p})},ee=({changesOn:e,storageChange:t,handleSyncTodos:o,handleSyncCrumbs:l})=>t&&i("acronym",{children:[i("h4",{children:["Changes were made on ",e,"."]}),e=="crumbs"?n("button",{onClick:l,children:"Reload"}):n("button",{onClick:o,children:"Sync"})]}),te=Y(ee);const ne=()=>{const{openModal:e,syncTodos:t}=S(b),[,o,,,,,,l]=x();return i(I,{children:[n(J,{}),n(W,{}),n(X,{}),!!e&&n(z,{component:n(Q,{})}),n(te,{pointer:o,syncTodos:t,syncCrumbs:l})]})};const oe=e=>n("button",{className:"Button",onClick:e.onClick,type:e.type,disabled:e.disabled,children:"+"});const re=e=>{const[t,o]=m(""),[l,r]=m(!1),[s]=x(),d=u=>{o(u.target.value)},a=u=>{if(u.preventDefault(),s.find(p=>p==t))return r(!0);e.saveCrumb(t)},c=t.length<1||t=="crumbs";return y(()=>{document.getElementById("crumbInput").focus()}),i(I,{children:[i("form",{className:"AddCrumbForm",onSubmit:a,children:[n(M,{onInput:d,placeholder:"Add crumb...",id:"crumbInput"}),n(oe,{type:"submit",disabled:c})]}),l&&n("p",{className:"err",children:"Choose another name."})]})},se=()=>{const[e,t,o,l,r,s,d]=x();return i(q,{pointer:t,children:[n(U,{crumbs:e,selectedCrumb:t,setSelectedCrumb:o,deleteCrumb:r,setShowForm:d}),s&&n(re,{saveCrumb:l}),n(ne,{})]})};G(n(se,{}),document.getElementById("app"));
