import{_ as G,E as O}from"./base.379ff566.js";import{j as Q,E as W,b as X,a as q}from"./job.db932301.js";/* empty css                */import{d as Y,o,c as a,a as e,g as Z,aj as ee,h as k,m as te,u as s,i as T,n as B,F as x,O as $,j as L,v as V,b as d,W as f,X as se,w as g,Q as l,G as j,a6 as ie,J as oe,p as le,f as ae,e as ne}from"./index.ad48d792.js";import{_ as de}from"./plugin-vue_export-helper.21dcd24c.js";import"./error.7e8331f1.js";import"./arrow-right.6a3bd574.js";const re=Y({name:"ArrowLeftBold"}),ce={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},ve=e("path",{fill:"currentColor",d:"M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"},null,-1),_e=[ve];function pe(c,_,n,z,p,E){return o(),a("svg",ce,_e)}var ue=G(re,[["render",pe]]);const r=c=>(le("data-v-7a6e36fc"),c=c(),ae(),c),me={class:"m-deliver"},he=["src"],fe=["src"],ge={class:"m-deliver-main"},be={class:"m-deliver-tabs"},we=["onClick"],ye={class:"m-deliver-content"},Ce=r(()=>e("div",{class:"m-deliver-title m-title"},"\u6821\u56ED\u62DB\u8058",-1)),ke=r(()=>e("div",{class:"m-deliver-top-content"},[e("p",null,"\u6BD5\u4E1A\u65F6\u95F4\uFF1A2021\u30012022\u5C4A\u5E94\u5C4A\u6BD5\u4E1A\u751F\uFF08\u6BD5\u4E1A\u65F6\u95F4\uFF1A2020\u5E749\u6708\uFF0D2022\u5E748\u6708\uFF09"),e("div",{class:"m-deliver-top-content-center"},[e("p",null,"*\u4E2D\u56FD\u5883\u5185\u9AD8\u6821\u7684\u6BD5\u4E1A\u751F\u4EE5\u6BD5\u4E1A\u8BC1\u3001\u5B66\u4F4D\u8BC1\u65F6\u95F4\u4E3A\u51C6\uFF1B"),e("p",null,"\u4E2D\u56FD\u5883\u5916\u9AD8\u6821\u7684\u6BD5\u4E1A\u751F\u4EE5\u6BD5\u4E1A\u8BC1\u3001\u6559\u80B2\u90E8\u5B66\u5386\u8BA4\u8BC1\u4E3A\u51C6\u3002")]),e("p",null,"\u5B9E\u4E60\u751F\u62DB\u8058\uFF1A\u5927\u4E8C\u4EE5\u4E0A\u5728\u6821\u751F\u3002")],-1)),xe=[Ce,ke],$e={class:"m-deliver-content"},Le={class:"search-input"},Ve={class:"m-deliver-top"},ze={class:"m-deliver-total"},Ee={class:"m-deliver-list"},Ie={class:"m-deliver-item-top"},Se={class:"m-deliver-item-left"},Te={class:"m-deliver-item-title"},Be={class:"m-deliver-item-types"},je={class:"m-deliver-item-type"},De=r(()=>e("div",{class:"m-deliver-item-type"},"\u6821\u56ED\u62DB\u8058",-1)),Ae={class:"m-deliver-item-pos"},Ue=["onClick"],Me=r(()=>e("div",{class:"m-deliver-item-line"},null,-1)),Ne={class:"m-deliver-item-detail-wrapper"},He={class:"m-deliver-item-detail"},Je=r(()=>e("div",{class:"m-deliver-item-detail-title"},"\u5C97\u4F4D\u804C\u8D23",-1)),Ke=["innerHTML"],Pe=["onClick"],Re={class:"deliver-cate"},Fe=r(()=>e("div",{class:"deliver-cate-nav-title"},"\u8FD4\u56DE\u5C97\u4F4D\u5217\u8868",-1)),Ge={class:"deliver-cate-content-wrapper"},Oe={class:"deliver-cate-content"},Qe={setup(c){Z(v=>({"595443ef":_.value})),ee("m-deliver-video");const _=k("#fff"),n=k([{id:1,title:"\u516C\u544A",active:!0},{id:2,title:"\u5C97\u4F4D\u5217\u8868",active:!1}]),z=v=>{n.value.forEach(i=>i.active=!1),v.active=!0,v.id===1&&(_.value="#fff"),v.id===2&&(_.value="rgb(240, 240, 240)")},p=k(!1),{Search:E,ArrowRight:D,categoryId:u,categoryList:A,limit:b,page:w,total:I,keyword:y,jobsList:U,getCategoryListApi:We,getJobListApi:M,changePage:N,search:C,postJob:H,toggleShowDetail:J}=Q();M();const S=()=>{p.value=!1,window.scrollTo(0,0)};return te(u,()=>{S()}),(v,i)=>{const K=W,P=X,R=O,F=q;return o(),a("div",me,[e("div",{class:B(["m-deliver-banner","banner",,{isHide:n.value[1].active}])},[e("img",{class:"m-nav-bg",src:s(T)("/nav_bg.png"),alt:""},null,8,he),e("video",{id:"m-deliver-video",class:"m-banner-video",loop:"",autoplay:"",muted:"",src:s(T)("/mobile/banner_video.mp4")},null,8,fe)],2),e("div",ge,[e("div",be,[(o(!0),a(x,null,$(n.value,t=>(o(),a("div",{key:t.id,class:B(["m-deliver-tab",{active:t.active}]),onClick:m=>z(t)},l(t.title),11,we))),128))]),L(e("div",ye,xe,512),[[V,n.value[0].active]]),L(e("div",$e,[e("div",Le,[d(K,{modelValue:s(y),"onUpdate:modelValue":i[1]||(i[1]=t=>f(y)?y.value=t:null),modelModifiers:{trim:!0,lazy:!0},placeholder:"\u641C\u7D22\u5DE5\u4F5C\u5C97\u4F4D",clearable:"",onKeyup:se(s(C),["enter"])},{prefix:g(()=>[d(s(E),{class:"search-icon"})]),suffix:g(()=>[e("span",{class:"search-label pointer",onClick:i[0]||(i[0]=(...t)=>s(C)&&s(C)(...t))},"\u67E5\u770B"),d(s(D),{class:"arrow-icon"})]),_:1},8,["modelValue","onKeyup"])]),e("div",Ve,[e("div",ze,"\u5171"+l(s(I))+"\u4E2A\u5C97\u4F4D",1),e("div",{class:"m-deliver-btn",onClick:i[2]||(i[2]=t=>p.value=!0)},"\u7B5B\u9009\u6761\u4EF6")]),e("div",Ee,[(o(!0),a(x,null,$(s(U),(t,m)=>(o(),a("div",{class:"m-deliver-item",key:t.id},[e("div",Ie,[e("div",Se,[e("div",Te,l(t.title),1),e("div",Be,[e("div",je,l(t.zhineng.name),1),De]),e("div",Ae," \u5DE5\u4F5C\u5730\u70B9\uFF1A"+l(t.locations.map(h=>h.city||h.province).join("/")),1)]),e("div",{class:"m-deliver-item-right",onClick:h=>s(H)(t.link)},"\u6295\u9012\u5C97\u4F4D",8,Ue)]),Me,L(e("div",Ne,[e("div",He,[Je,e("div",{class:"m-deliver-item-detail-content",innerHTML:t.description},null,8,Ke)])],512),[[V,t.showDetail]]),e("div",{class:"m-deliver-item-bottom",onClick:h=>s(J)(m)},l(t.showDetail?"\u6536\u8D77":"\u67E5\u770B\u8BE6\u60C5"),9,Pe)]))),128))]),d(P,{"hide-on-single-page":"",background:"",layout:"prev, pager, next",total:s(I),"page-size":s(b),"onUpdate:page-size":i[3]||(i[3]=t=>f(b)?b.value=t:null),"current-page":s(w),"onUpdate:current-page":i[4]||(i[4]=t=>f(w)?w.value=t:null),onCurrentChange:s(N)},null,8,["total","page-size","current-page","onCurrentChange"])],512),[[V,n.value[1].active]])]),p.value?(o(),j(ie,{key:0,to:"body"},[e("div",Re,[e("div",{class:"deliver-cate-nav",onClick:S},[d(R,null,{default:g(()=>[d(s(ue))]),_:1}),Fe]),e("div",Ge,[e("div",Oe,[(o(!0),a(x,null,$(s(A),t=>(o(),j(F,{key:t.id,label:t.id,modelValue:s(u),"onUpdate:modelValue":i[5]||(i[5]=m=>f(u)?u.value=m:null),size:"large",style:{"font-size":"0.36rem"}},{default:g(()=>[ne(l(t.label),1)]),_:2},1032,["label","modelValue"]))),128))])])])])):oe("",!0)])}}};var it=de(Qe,[["__scopeId","data-v-7a6e36fc"]]);export{it as default};