import"./base.28e7a258.js";import{u as K,E as M,a as N,b as P}from"./job.d3dd696b.js";import{_ as R,o as l,c as d,a as e,u as s,j as b,b as _,W as p,X as $,w as y,F as f,Q as x,P as a,p as F,f as H,G as J,e as O,i as V,v as z}from"./index.62626037.js";import{O as i}from"./Objectoriented.484157cd.js";import"./error.7e8331f1.js";import"./arrow-right.a2605b66.js";const k=c=>(F("data-v-4685adc0"),c=c(),H(),c),A=["src"],G=["src","poster"],Q={class:"deliver"},W={class:"deliver-selector box"},X={class:"search-input"},Y={class:"search-content"},q=k(()=>e("div",{class:"category-title"},"\u5C97\u4F4D\u7C7B\u522B",-1)),Z={class:"category-content"},ee={class:"category-wrap"},se={class:"deliver-content"},te={class:"deliver-content-top"},oe={class:"title"},ae={class:"detail-top"},ne={class:"detail-bottom"},le={class:"label"},ie={class:"list"},ce={class:"item-top"},re={class:"item-left"},de={class:"name"},_e={class:"type"},pe=k(()=>e("span",null,"\u6821\u56ED\u62DB\u8058",-1)),ue={class:"small-grey"},ve={class:"item-right"},he=["onClick"],ge=["onClick"],me={class:"item-bottom"},be={class:"post res"},ye=k(()=>e("div",{class:"post-title"},"\u5C97\u4F4D\u804C\u8D23",-1)),fe=["innerHTML"],ke=["onClick"],we={setup(c){const{Search:I,ArrowRight:S,categoryId:u,categoryList:D,limit:v,page:h,total:w,keyword:g,jobsList:E,changePage:L,search:m,postJob:U,toggleShowDetail:C}=K();return(Ce,o)=>{const j=M,B=N,T=P;return l(),d(f,null,[e("img",{class:"nav-bg",src:s(b)("/nav_bg.png"),alt:""},null,8,A),e("video",{class:"banner banner-video",loop:"",autoplay:"",muted:"",src:s(b)("/banner.mp4"),poster:s(b)("/banner.png")}," Your browser does not support the video tag. ",8,G),e("div",Q,[e("div",W,[e("div",X,[_(j,{modelValue:s(g),"onUpdate:modelValue":o[1]||(o[1]=t=>p(g)?g.value=t:null),modelModifiers:{trim:!0,lazy:!0},placeholder:"\u641C\u7D22\u5DE5\u4F5C\u5C97\u4F4D",clearable:"",onKeyup:$(s(m),["enter"])},{prefix:y(()=>[_(s(I),{class:"search-icon"})]),suffix:y(()=>[e("span",{class:"search-label pointer",onClick:o[0]||(o[0]=(...t)=>s(m)&&s(m)(...t))},"\u67E5\u770B"),_(s(S),{class:"arrow-icon"})]),_:1},8,["modelValue","onKeyup"])]),e("div",Y,[q,e("div",Z,[e("div",ee,[(l(!0),d(f,null,x(s(D),t=>(l(),J(B,{key:t.id,label:t.id,modelValue:s(u),"onUpdate:modelValue":o[2]||(o[2]=r=>p(u)?u.value=r:null),size:"large",style:{"font-size":"18px"}},{default:y(()=>[O(a(t.label),1)]),_:2},1032,["label","modelValue"]))),128))])])])]),e("div",se,[e("div",te,[e("div",oe,a(s(i).title),1),e("div",ae,a(s(i).target)+a(s(i).graduationTime),1),e("div",ne,a(s(i).inCert)+a(s(i).outCert),1),e("div",le,"\u5171"+a(s(w))+"\u4E2A\u5C97\u4F4D",1)]),e("div",ie,[(l(!0),d(f,null,x(s(E),(t,r)=>(l(),d("div",{class:"item",key:t.id},[e("div",ce,[e("div",re,[e("div",de,a(t.title),1),e("div",_e,[e("span",null,a(t.zhineng.name),1),pe]),e("div",ue,"\u5DE5\u4F5C\u5730\u70B9\uFF1A"+a(t.locations.map(n=>n.city||n.province).join("/")),1)]),e("div",ve,[e("div",{class:"deliver-btn pointer",onClick:n=>s(U)(t.link)},"\u6295\u9012\u804C\u4F4D",8,he),V(e("div",{class:"pointer small-grey",onClick:n=>s(C)(r)},"\u663E\u793A\u8BE6\u60C5",8,ge),[[z,!t.showDetail]])])]),V(e("div",me,[e("div",be,[ye,e("div",{class:"post-content",innerHTML:t.description},null,8,fe)]),e("div",{class:"small-grey shrink pointer",onClick:n=>s(C)(r)},"\u6536\u8D77",8,ke)],512),[[z,t.showDetail]])]))),128))]),_(T,{"hide-on-single-page":"",background:"",layout:"prev, pager, next",total:s(w),"page-size":s(v),"onUpdate:page-size":o[3]||(o[3]=t=>p(v)?v.value=t:null),"current-page":s(h),"onUpdate:current-page":o[4]||(o[4]=t=>p(h)?h.value=t:null),onCurrentChange:s(L)},null,8,["total","page-size","current-page","onCurrentChange"])])])],64)}}};var Ee=R(we,[["__scopeId","data-v-4685adc0"]]);export{Ee as default};