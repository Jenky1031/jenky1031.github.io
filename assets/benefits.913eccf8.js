import{j as e,h as t,A as p}from"./index.44b897c2.js";const u=e("/benefits_01_a.png"),h=e("/benefits_01_b.png"),m=e("/benefits_02_a.png"),w=e("/benefits_02_b.png"),A=e("/benefits_03_a.png"),d=e("/benefits_03_b.png"),L=e("/benefits_04_a.png"),I=e("/benefits_04_b.png"),R=e("/benefits_bg_01.png"),k=e("/benefits_bg_02.png"),D=e("/benefits_bg_03.png"),x=e("/benefits_bg_04.png");var C=[{id:1,icon:h,iconActive:u,img:R,title:"\u57F9\u517B\u53D1\u5C55",content:"\u7BA1\u57F9\u751F1v1\u57F9\u517B\uFF0C\u5B89\u6392\u7ECF\u53861v1\u5BFC\u5E08\u5E26\u6559\u3001\u591A\u90E8\u95E8\u8F6E\u5C97\u3001\u9879\u76EE\u5386\u7EC3\u3001\u6838\u5FC3\u5C97\u4F4D\u8003\u9A8C\u540E\uFF0C\u9009\u62D4\u6210\u4E3A\u672B\u6765\u516C\u53F8\u7BA1\u7406\u5C42\u7684\u4F18\u79C0\u50A8\u5907\u5E72\u90E8\u4EBA\u624D\u3002",active:!0},{id:2,icon:w,iconActive:m,img:k,title:"\u85AA\u8D44\u6FC0\u52B1",content:"\u516C\u53F8\u5B9E\u884C\u6807\u51C6\u85AA\u916C+\u6708\u5EA6/\u5E74\u5EA6\u7EE9\u6548\u5956\u91D1\uFF0C\u5177\u6709\u5E02\u573A\u7ADE\u4E89\u529B\u7684\u85AA\u916C\u6C34\u5E73\uFF0C\u5E76\u7ED3\u5408\u57CE\u5E02\u793E\u5E73\u5DE5\u8D44\u53D8\u5316\u8FDB\u884C\u5E74\u5EA6\u8C03\u85AA\uFF0C\u8868\u73B0\u4F18\u79C0\u7684\u5458\u5DE5\u8FD8\u4F1A\u6709\u7279\u522B\u52A0\u85AA\u3001\u664B\u5347\u52A0\u85AA\u4EE5\u53CA\u4E30\u539A\u5956\u91D1\uFF1B\u5B8C\u5584\u7684\u85AA\u916C\u548C\u6FC0\u52B1\u4F53\u7CFB\uFF0C\u53EA\u4E3A\u9F13\u52B1\u60A8\u7684\u53D1\u5C55\uFF0C\u56DE\u62A5\u60A8\u7684\u62FC\u640F\u3002",active:!1},{id:3,icon:d,iconActive:A,img:D,title:" \u516C\u53F8\u798F\u5229",content:"\u516C\u53F8\u5177\u6709\u4EBA\u624D\u4FDD\u969C\u623F\u914D\u989D\uFF0C\u4E3A\u521D\u5165\u793E\u4F1A\u7684\u60A8\u5927\u5E45\u964D\u4F4E\u751F\u6D3B\u6210\u672C\uFF1B\u5E74\u5EA6\u514D\u8D39\u4F53\u68C0\uFF0C\u5065\u5EB7\u7684\u4F53\u9B44\u9700\u8981\u6211\u4EEC\u957F\u671F\u5173\u6CE8\uFF1B\u5458\u5DE5\u751F\u65E5\u8D3A\u4EEA\u3001\u8282\u65E5\u5173\u6000\u6D3B\u52A8\u53CA\u793C\u54C1\u3001\u8FCE\u65B0\u665A\u5BB4\u7B49\u591A\u6837\u5316\u798F\u5229\uFF0C\u4F18\u79C0\u7684\u60A8\u503C\u5F97\u65B9\u65B9\u9762\u9762\u7684\u4FDD\u969C\u3002",active:!1},{id:4,icon:I,iconActive:L,img:x,title:"\u5174\u8DA3\u793E\u56E2",content:"\u591A\u4E2A\u8FD0\u52A8\u793E\u56E2\uFF0C\u591A\u6837\u6237\u5916\u56E2\u5EFA\u6D3B\u52A8\u3002",active:!1}];const _=e("/arrow_circle_left.png"),j=e("/arrow_circle_left_dark.png"),r=e("/arrow_circle_right.png"),B=e("/arrow_circle_right_dark.png");function y(){const n=t(C),s=t(0),b=p(()=>n.value[s.value]),i=t(null),f=()=>{i.value.prev()},g=()=>{i.value.next()},l=a=>{s.value=a,n.value.forEach(v=>{v.active=!1}),i.value.setActiveItem(a),n.value[a].active=!0},c=t(_),o=t(r);return{benefitsList:n,benefitsActiveIdx:s,benefitsActiveItem:b,benefitsCarousel:i,prev:f,next:g,changeBenefitsCarousel:l,arrowLeft:c,arrowRight:o,changeArrowLeft:()=>{c.value=c.value===_?j:_},changeArrowRight:()=>{o.value=o.value===r?B:r}}}export{y as b};