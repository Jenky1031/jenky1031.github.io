import{_ as M}from"./touxiang.06d95f47.js";import{j as P,J as A,r as f,n as I,v as B,o as x,g,k as o,h as m,w as T,F,G as H,l as b,O as j,x as L,t as V}from"./vendor.48188085.js";import{_ as W}from"./index.dfa5a14c.js";const k=({cxt:n,width:_,height:d,r:s,offsetX:i,offsetY:a})=>{const c={x:i,y:a},t={x:i+_,y:a},l={x:i+_,y:a+d},r={x:i,y:a+d},e={x:i+s,y:a},u={x:i+_-s,y:a},p={x:i+_-s,y:a+d},v={x:i+s,y:a+d},y={x:i,y:a+s},h={x:i+_,y:a+s};n.beginPath(),n.moveTo(e.x,e.y),n.lineTo(u.x,u.y),n.arcTo(t.x,t.y,h.x,h.y,s),n.lineTo(h.x,h.y),n.arcTo(l.x,l.y,p.x,p.y,s),n.lineTo(p.x,p.y),n.lineTo(v.x,v.y),n.arcTo(r.x,r.y,y.x,y.y,s),n.lineTo(y.x,y.y),n.arcTo(c.x,c.y,e.x,e.y,s),n.closePath()};const $={class:"imycanvask"},q={class:"canvas_img"},E={class:"poster_box"},G={props:{isPopup:{type:Boolean}},emits:["update:isPopup"],setup(n,{emit:_}){const d=P(null),s=P(null),i=()=>{_("update:isPopup",!1)},a=()=>{const c=d.value,t=c.getContext("2d"),l=new Image;l.src="/src/assets/img/haibao/tx.png",l.onload=()=>{t.drawImage(l,0,0),t.textAlign="center";const r=c.width/2,e="\u626B\u63CF\u4E8C\u7EF4\u7801\u8D5A\u8D4F\u91D1";t.font="bold 28px MicrosoftYaHei";const u=t.measureText(e).width+40,p=t.createLinearGradient(0,0,300,0);p.addColorStop(0,"#FF3A51"),p.addColorStop(1,"#FE9131"),t.fillStyle=p,k({cxt:t,width:u,height:60,r:30,offsetX:(c.width-u)/2,offsetY:750}),t.fill(),t.fillStyle="#fff",t.fillText(e,r,790);const v="\u5206\u4EAB\u5230";t.fillStyle="#858585",t.font="bold 30px MicrosoftYaHei",t.fillText(v,r,200);const y="\u5206\u4EAB\u66F4\u591A\u597D\u53CB";t.fillStyle="#fff",t.font="bold 42px MicrosoftYaHei",t.fillText(y,r,68);const h="\u626B\u63CF\u4E8C\u7EF4\u7801\u8D5A\u8D4F\u91D1";t.fillText(h,r,120);const C=t.measureText(h).width+40;k({cxt:t,width:C,height:60,r:30,offsetX:(c.width-C)/2,offsetY:410}),t.fillStyle="#ff343b",t.strokeStyle="#ff343b",t.fill(),t.stroke();const S="\u63A8\u8350\u7801";t.fillStyle="#fff",t.strokeStyle="#ff343b";const N=t.measureText(S).width+40;k({cxt:t,width:N,height:60,r:30,offsetX:c.width*.3-N/2,offsetY:410}),t.fill(),t.stroke(),t.fillStyle="#ff343b",t.font="bold 32px MicrosoftYaHei",t.fillText(S,c.width*.3,450);const D="32010";t.fillStyle="#fff",t.font="bold 42px MicrosoftYaHei",t.fillText(D,c.width*.6,455);const w=new Image;w.src="/src/assets/img/haibao/ewm.png",w.onload=()=>{t.drawImage(w,230,500,204,204);const R=new Image;R.src=c.toDataURL("image/png"),s.value.appendChild(R),console.log("canvas finished")}}};return A(()=>{a()}),(c,t)=>{const l=f("svg-icon");return I((x(),g("div",$,[I(o("div",q,[o("canvas",{ref_key:"myCanvasDom",ref:d,width:"667",height:"960"},null,512)],512),[[B,!1]]),o("div",E,[o("div",{class:"canvas_box",ref_key:"canvasBoxDom",ref:s},null,512),m(l,{name:"icon_close",onClick:i})]),o("div",{class:"canvas_br",onClick:i})],512)),[[B,n.isPopup]])}}};var U=W(G,[["__scopeId","data-v-037346e2"]]);const J={class:"user_page"},O={class:"bg_chengse_t"},z={class:"t_nav text_left t_nav_tm"},K=o("div",{class:"t_nav_title"},"\u4E2A\u4EBA\u4E2D\u5FC3",-1),Q={class:"t_nav_r"},Z=o("div",{class:"t_nav_br"},null,-1),Y={class:"user_touxiang text_center"},X=o("p",null,[o("span",{class:"ur_touxiang"},[o("img",{src:M,alt:""})])],-1),tt=o("p",null,[o("span",{class:"color_bai"},"\u767B\u5F55")],-1),ot={class:"itb user_kapian"},et={href:"/#/my-level"},nt=o("div",{class:"on_right"},[o("p",null,"\u63A8\u8350\u7801"),o("p",null,[o("b",null,"32101")])],-1),st=b(" \u94DC\u724C\u5408\u4F19\u4EBA "),at={class:"my_l b_linex_li_w"},it={key:0,class:"on_right"},ct=o("a",null,[o("i",{class:"itb my_i_8"}),b(" \u9080\u8BF7\u5F92\u5F1F")],-1),lt=[ct],_t={class:"tuichuw"},rt=b("\u9000\u51FA"),dt=o("div",{class:"h40"},null,-1),ut={setup(n){const _=P(!1),d=async()=>{await j(),_.value=!0},s=[{name:"\u4E2A\u4EBA\u4FE1\u606F",pathName:"myProfile",icon:"my_i_1"},{name:"\u4F59\u989D\u660E\u7EC6",pathName:"myBalance",icon:"my_i_2"},{name:"\u6211\u7684\u5F92\u5F1F",pathName:"myApprentice",icon:"my_i_3"},{name:"\u6211\u7684\u8D26\u6237",rightInfo:"\u6570\u5B57\u8D27\u5E01\u8D26\u6237",pathName:"myAccount",icon:"my_i_4"},{name:"\u4EE3\u4ED8\u8D26\u6237",pathName:"accountPayment",icon:"my_i_5"},{name:"\u627F\u5151\u5546\u8D26\u6237",pathName:"accountAcceptor",icon:"my_i_6"},{name:"\u6D88\u606F",pathName:"myNotice",icon:"my_i_7"}];return(i,a)=>{const c=f("notify-entrance"),t=f("order-set-entrance"),l=f("router-link"),r=f("svg-icon");return x(),g("div",J,[o("div",O,[o("div",z,[K,o("div",Q,[m(c),m(t)])]),Z,o("div",Y,[m(l,{to:{name:"login"}},{default:T(()=>[X,tt]),_:1})]),o("div",ot,[o("a",et,[nt,o("h2",null,[m(r,{name:"vip1",width:"1.2rem",height:"1.2rem",class:"icon_dq"}),st])])])]),o("div",at,[o("ul",null,[(x(),g(F,null,H(s,(e,u)=>o("li",{key:e.path},[m(l,{to:{name:e.pathName}},{default:T(()=>[e.rightInfo?(x(),g("span",it,L(e.rightInfo),1)):V("",!0),m(r,{name:[e.icon],width:"1.08rem",height:"1.08rem",class:"icon_dq"},null,8,["name"]),b(" "+L(e.name),1)]),_:2},1032,["to"])])),64)),o("li",{onClick:d},lt)])]),o("div",_t,[m(l,{class:"itb",to:"/login"},{default:T(()=>[rt]),_:1})]),dt,m(U,{isPopup:_.value,"onUpdate:isPopup":a[0]||(a[0]=e=>_.value=e)},null,8,["isPopup"])])}}};export{ut as default};
