import{z as ee,aa as ae,v as te,A as se,D as n,r as b,g as oe,o as u,h as r,i as l,J as e,y as B,M as s,_ as g,Q as _,w as y,ab as L,E as C,H as F,a3 as ne,a9 as le,a0 as ie,a1 as ce,T as v,ad as O}from"./vendor.66989adf.js";import{_ as ue,D as re}from"./Describe.4e101c95.js";import{u as de,I as _e,_ as ve}from"./useDataInit.d5b7ee45.js";/* empty css              */import{_ as me,h as pe,l as he,m as fe}from"./index.ecaf6c17.js";const R=m=>(ie("data-v-b59213d8"),m=m(),ce(),m),ke={class:"idetail"},be=R(()=>e("div",{class:"t_nav_br"},null,-1)),ge={class:"xgrw_list"},ye={class:"des_box"},Ie={class:"xgrw_kin"},Te={class:"xgrw_list"},we={class:"des_box"},Ce={class:"xgrw_kin"},xe={class:"label"},De={key:0,class:"content"},Ne=["src"],Se=["placeholder"],$e=["placeholder"],Ae={class:"ixtijiao clear"},Ve={class:"tan_k_w"},je={class:"tan_k bg_bai"},Be={class:"tan_k_in"},Le={class:"hb_list b_linex_li_w"},Fe=["onClick"],Oe=["src"],Re={class:"color_huise_t"},Ue=R(()=>e("div",{class:"h40"},null,-1)),Ee={key:0,class:"all_br"},Me={setup(m){var V;const x=ee(),U=ae(),D=te(),i=se(),{uploadImg:N}=pe.useUploadImg("voucher"),p=n(!1),{id:E,transactionNo:M}=U.params,{amount:ze,brokerage:qe,payeeAccountNo:He,payeeName:Je,payTypeName:Pe,payType:Qe,isAccept:Ge,expireTime:Ke,createTime:We,isExpired:Xe,restTime:Ye,detailInfo:z,detailDescribe:q,fetchOrderTaskInfo:H}=de();H();const J=async a=>{a instanceof Array?a.forEach(k=>{N(k)}):N(a)},I=n(!1),S=()=>{if(!o||!o.value)return D.push({name:"accountPayAdd"});I.value=!0},$=()=>{I.value=!1},A=n(x.getters.payAccountList),o=n(A.value.find(a=>a.enable)),P=n(((V=o==null?void 0:o.value)==null?void 0:V.id)||""),h=n(""),d=n(!0),f=n(""),T=n([]),w=n(""),Q=a=>{o.value=a,$()},G=async()=>{await fe({playerId:x.getters.id,id:E,transactionNo:M,outTransactionNo:h.value,playerAccountId:P.value,voucherImg:w.value,is_ok:d.value,failDesc:f.value})},K=()=>{if(w.value=he(T.value),!w.value){v.fail(i.t("task.upload"));return}if(!h.value){v.fail(i.t("balance.enterTradeNum"));return}if(!d.value&&!f.value){v.fail(i.t("task.enterFailReason"));return}O.alert({title:i.t("msg.dialogTitle"),message:i.t("task.confirmSubmitTask"),confirmButtonColor:"#000",showCancelButton:!0}).then(async()=>{p.value=!0;try{await G(),v.success(i.t("task.submitTaskSuccess")),D.push({name:"task"})}catch{v.fail(i.t("task.submitTaskFail"))}p.value=!1}).catch(()=>{})},W=()=>{O.alert({title:i.t("msg.dialogTitle"),message:i.t("task.limitSubmit"),confirmButtonColor:"#000",showCancelButton:!0}).then(()=>{}).catch(()=>{})};return(a,c)=>{const k=b("SvgIcon"),X=b("van-uploader"),j=b("van-radio"),Y=b("van-radio-group"),Z=oe("loading");return u(),r("div",ke,[l(ue,{title:a.$t("task.myDetailTitle")},null,8,["title"]),be,e("div",null,[l(_e,{data:B(z)},null,8,["data"]),l(re,{data:B(q),open:!1},null,8,["data"]),l(ve,{open:!1}),e("div",ge,[e("h2",null,[e("div",ye,[l(k,{name:"rw_i_3"}),e("span",null,s(a.$t("task.upload")),1)])]),e("div",Ie,[l(X,{modelValue:T.value,"onUpdate:modelValue":c[0]||(c[0]=t=>T.value=t),multiple:"","max-count":3,"after-read":J},null,8,["modelValue"])])]),e("div",Te,[e("h2",null,[e("div",we,[l(k,{name:"rw_i_3"}),e("span",null,s(a.$t("task.submitInfo")),1)])]),e("div",Ce,[e("div",{class:"imgFieldBox",onClick:S},[e("div",xe,s(a.$t("my.paymentAccount"))+":",1),o.value?(u(),r("div",De,[o.value.img?(u(),r("img",{key:0,src:o.value.img,class:"i_tb icon_dq icon_szhb"},null,8,Ne)):g("",!0),_(" "+s(o.value.accountName),1)])):g("",!0)]),y(e("input",{type:"text",placeholder:a.$t("balance.enterTradeNum"),class:"ixtijiao_input","onUpdate:modelValue":c[1]||(c[1]=t=>h.value=t)},null,8,Se),[[L,h.value]]),l(Y,{class:"radio_group",modelValue:d.value,"onUpdate:modelValue":c[2]||(c[2]=t=>d.value=t),direction:"horizontal"},{default:C(()=>[l(j,{name:!0},{default:C(()=>[_(s(a.$t("task.success")),1)]),_:1}),l(j,{name:!1},{default:C(()=>[_(s(a.$t("task.fail")),1)]),_:1})]),_:1},8,["modelValue"]),y(e("input",{type:"text",placeholder:a.$t("task.enterFailReason"),class:"ixtijiao_input","onUpdate:modelValue":c[3]||(c[3]=t=>f.value=t)},null,8,$e),[[F,!d.value],[L,f.value]]),e("div",Ae,[e("button",{class:"ibtn btn_cheng",onClick:K},s(a.$t("task.submitTask")),1),e("button",{class:"ibtn btn_moren",onClick:W},s(a.$t("task.cancelTask")),1)])])]),y(e("div",Ve,[e("div",je,[e("h1",null,[e("i",{class:"i_close",onClick:$}),_(s(a.$t("my.paymentAccount")),1)]),e("div",Be,[e("div",Le,[e("ul",null,[(u(!0),r(ne,null,le(A.value,(t,Ze)=>(u(),r("li",{onClick:ea=>Q(t)},[t.img?(u(),r("img",{key:0,src:t.img,class:"i_tb icon_dq"},null,8,Oe)):g("",!0),_(s(t.cpf),1),e("span",Re,s(t.accountName),1)],8,Fe))),256))])])])]),e("div",{class:"all_br",onClick:S})],512),[[F,I.value]]),Ue,p.value?y((u(),r("div",Ee,null,512)),[[Z,p.value,"center"]]):g("",!0)])])}}};var la=me(Me,[["__scopeId","data-v-b59213d8"]]);export{la as default};
