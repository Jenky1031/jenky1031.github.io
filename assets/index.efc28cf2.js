import{z as N,aa as j,A as L,D as d,r as p,o as M,h as P,J as e,Q as g,M as l,i as t,w as a,H as $,ab as f,E as C,ah as U,a2 as S,a0 as z,a1 as D}from"./vendor.66989adf.js";import{_ as R}from"./index.ecaf6c17.js";const r=c=>(z("data-v-1822a7d7"),c=c(),D(),c),T={class:"login_k"},q={class:"login_title"},E={class:"login_tp"},x={class:"from_inputw"},A=["placeholder"],H=r(()=>e("div",{class:"line"},null,-1)),J=["placeholder"],Q=r(()=>e("div",{class:"line"},null,-1)),F={class:"radio_k on_left"},G=["onClick"],K=["placeholder"],O=r(()=>e("div",{class:"line"},null,-1)),W=["placeholder"],X=r(()=>e("div",{class:"line"},null,-1)),Y=["onClick"],Z={class:"or_line"},ee=r(()=>e("div",{class:"line"},null,-1)),oe={setup(c){const _=N(),y=j();L();const{loginName:V=""}=y.query,h=d(V),m=d(""),b=d(""),v=d(!1),i=d(!0),w=async()=>{_.commit("app/setLoading",!0),await _.dispatch("user/login",{loginNo:h.value,loginPwd:m.value,redirect:y.query.redirect,isRemember:v.value}),_.commit("app/setLoading",!1)};return(o,n)=>{const I=p("lang-select"),u=p("SvgIcon"),k=p("router-link"),B=p("send-verify-code");return M(),P("div",T,[e("div",q,[g(l(i.value?o.$t("login.password"):o.$t("login.verifyCode")),1),t(I)]),e("p",E,[e("span",null,l(o.$t("login.changeTypeRemind")),1),e("span",{class:"color_cheng",onClick:n[0]||(n[0]=s=>i.value=!i.value)},l(i.value?o.$t("login.verifyCode"):o.$t("login.password")),1)]),e("div",x,[a(e("form",null,[e("label",null,[t(u,{class:"i_icon",name:"icon_shouji",width:"0.88rem",height:"0.88rem"}),a(e("input",{type:"text",placeholder:o.$t("msg.enterLoginName"),"onUpdate:modelValue":n[1]||(n[1]=s=>h.value=s)},null,8,A),[[f,h.value]])]),H,e("label",null,[t(u,{class:"i_icon",name:"icon_mima",width:"0.88rem",height:"0.88rem"}),a(e("input",{type:"text",placeholder:o.$t("login.enterPassword"),"onUpdate:modelValue":n[2]||(n[2]=s=>m.value=s)},null,8,J),[[f,m.value]])]),Q,t(k,{to:"/password",class:"on_right yzm_a"},{default:C(()=>[g(l(o.$t("login.forget")),1)]),_:1}),e("label",F,[a(e("input",{type:"checkbox","onUpdate:modelValue":n[3]||(n[3]=s=>v.value=s)},null,512),[[U,v.value]]),e("span",null,l(o.$t("login.remember")),1)]),e("button",{class:"ibtn btn_cheng",onClick:S(w,["prevent"])},l(o.$t("login.loginBlank")),9,G)],512),[[$,i.value]]),a(e("form",null,[e("label",null,[t(u,{class:"i_icon",name:"icon_shouji",width:"0.88rem",height:"0.88rem"}),e("input",{type:"text",placeholder:o.$t("msg.enterPhone")},null,8,K)]),O,e("label",null,[t(B),t(u,{class:"i_icon",name:"icon_yzm",width:"0.88rem",height:"0.88rem"}),a(e("input",{type:"text",placeholder:o.$t("login.enterVerifyCode"),"onUpdate:modelValue":n[4]||(n[4]=s=>b.value=s)},null,8,W),[[f,b.value]])]),X,e("button",{class:"ibtn btn_cheng",onClick:S(w,["prevent"])},l(o.$t("login.loginBlank")),9,Y)],512),[[$,!i.value]]),e("div",Z,[ee,e("span",null,l(o.$t("login.or")),1)]),t(k,{class:"ibtn btn_moren",to:"/register"},{default:C(()=>[g(l(o.$t("login.registerBlank")),1)]),_:1})])])}}};var se=R(oe,[["__scopeId","data-v-1822a7d7"]]);export{se as default};
