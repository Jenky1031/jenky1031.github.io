import{_ as B,j,p as E,k as L}from"./index.ecaf6c17.js";import{x as i,r as w,o as m,h as v,J as e,Q as f,M as s,y as u,i as I,a0 as z,a1 as C,D as o,ae as F,a3 as V,a9 as Z,aa as M,z as R}from"./vendor.66989adf.js";const O=c=>(z("data-v-167ed3b4"),c=c(),C(),c),q={class:"cy_nr"},J={class:"rwlist_i b_linex_dl_w"},Q={class:"color_cheng"},G=O(()=>e("div",{class:"line"},null,-1)),H={class:"cy_tab text_center"},K={key:0},P={class:"color_cheng"},U={key:1,class:"overtime_w"},W={class:"overtime"},X={class:"color_cheng"},Y=O(()=>e("em",null,"BRL",-1)),ee={class:"color_cheng dt_zw"},te={class:"text_center tishix center"},se={props:{data:{type:Object,required:!0}},setup(c){const n=c,l=i(()=>n.data.typeZn),d=i(()=>n.data.transactionNo),p=i(()=>n.data.isAccept),_=i(()=>n.data.restTime.replace("-","/")),r=i(()=>n.data.brokerage);return(t,h)=>{const y=w("van-count-down"),g=w("SvgIcon");return m(),v("div",q,[e("div",J,[e("dl",null,[e("dt",null,[e("h2",null,[f(s(t.$t("task.ID")),1),e("em",null,s(u(d)),1)]),e("p",null,[f(s(t.$t("task.status"))+": ",1),e("span",Q,s(u(p)?t.$t("task.received"):t.$t("task.ongoing")),1)])])])]),G,e("div",H,[u(_)>0?(m(),v("dl",K,[e("dt",P,[I(y,{class:"count2",time:u(_)},null,8,["time"])]),e("dd",null,s(t.$t("task.countDown")),1)])):(m(),v("dl",U,[e("dd",W,s(t.$t("task.overtime")),1)])),e("dl",null,[e("dt",X,[f(s(u(r)),1),Y]),e("dd",null,s(t.$t("task.reward")),1)]),e("dl",null,[e("dt",ee,s(u(l)),1),e("dd",null,s(t.$t("task.type")),1)])]),e("div",te,[I(g,{name:"rw_tishi",width:"0.52rem",height:"0.52rem",style:{"margin-right":"0.1rem"}}),f(s(t.$t("task.limitSubmit2")),1)])])}}};var ue=B(se,[["__scopeId","data-v-167ed3b4"]]);const ae={class:"xgrw_list"},oe={class:"des_box"},ne={class:"xgrw_kin"},ce={class:"xgrw__list"},le={class:"itb"},re=e("dd",null," \u4EFB\u52A1\u8BF4\u660E\u4EFB\u52A1\u8BF4\u660E\u4EFB\u52A1\u8BF4\u660E\u4EFB\u52A1\u8BF4\u660E\u4EFB\u52A1\u8BF4\u660E\u4EFB\u52A1\u8BF4\u660E\u4EFB\u52A1\u8BF4\u660E\u4EFB\u52A1\u8BF4\u660E\u4EFB\u52A1\u8BF4\u660E\u4EFB\u52A1\u8BF4\u660E\u4EFB\u52A1\u8BF4\u660E\u4EFB\u52A1\u8BF4\u660E\u4EFB\u52A1\u8BF4\u660E ",-1),_e={props:{open:{type:Boolean,default:!0}},setup(c){const l=o(c.open),d=()=>{l.value=!l.value};return(p,_)=>{const r=w("SvgIcon");return m(),v("div",ae,[e("h2",{onClick:d,class:F({this:!l.value})},[e("div",oe,[I(r,{name:"rw_i_2"}),e("span",null,s(p.$t("task.step")),1)]),I(r,{name:l.value?"rw_jg":"rw_jg-1"},null,8,["name"])],2),e("div",ne,[e("div",ce,[(m(),v(V,null,Z(3,t=>e("dl",null,[e("dt",le,s(p.$t("task.stepItem"))+" "+s(t),1),re])),64))])])])}}};function me(){const c=M(),n=R(),{id:l,transactionNo:d,type:p}=c.params,_=p==="pay"?j.global.t("tab.pay"):j.global.t("tab.collect"),r=o(""),t=o(""),h=o(""),y=o(""),g=o(null),b=i(()=>E.get(g.value)),k=o(!1),T=o(""),$=o(""),N=o(""),x=o(null),S=i(()=>{const a=k.value?$.value:T.value;return new Date(a).getTime()-new Date().getTime()}),A=o({}),D=o({});return{amount:r,brokerage:t,payeeAccountNo:h,payTypeName:b,isAccept:k,expireTime:T,createTime:N,isExpired:x,restTime:S,detailInfo:A,detailDescribe:D,fetchOrderTaskInfo:async()=>{n.commit("app/setLoading",!0);try{const a=await L({playerId:n.getters.id,id:l,transactionNo:d});h.value=a.payeeAccountNo,k.value=a.isAccept,y.value=a.payeeName,g.value=a.payType,t.value=parseInt(a.brokerage).toFixed(2),r.value=parseInt(a.amount).toFixed(2),T.value=a.expireTime,$.value=a.acceptExpireTime,N.value=a.createTime,x.value=a.isExpired,A.value={transactionNo:d,typeZn:_,isAccept:k.value,restTime:S.value,brokerage:t.value},D.value={amount:r.value,payeeName:y.value,payeeAccountNo:h.value,payTypeName:b.value}}catch{}n.commit("app/setLoading",!1)}}}export{ue as I,_e as _,me as u};
