import{e as i,o as c,c as l,a as r,t as p,_,k as h,F as k,l as C,j as v,r as y,b as f,m as D}from"./DG8X6CVM.js";const $=i({__name:"YearPicker",props:["year"],emits:["yearChanged"],setup(n,{emit:a}){const e=n,s=a;function o(){s("yearChanged",e.year-1)}function u(){s("yearChanged",e.year+1)}return(t,m)=>(c(),l("div",null,[r("button",{onClick:o},"Previous"),r("span",null,p(n.year),1),r("button",{onClick:u},"Next")]))}}),x=_($,[["__scopeId","data-v-cdce5ede"]]),b={class:"day-number"},g=i({__name:"Day",props:["day"],emits:["click"],setup(n,{emit:a}){const e=n,s=a;function o(){s("click",e.day)}return(u,t)=>(c(),l("div",{class:"day",onClick:o},[r("div",b,p(n.day.number),1),t[0]||(t[0]=r("button",{class:"expand-btn"},"Expand",-1))]))}}),Y=_(g,[["__scopeId","data-v-a8fe77f4"]]),I={class:"days"},M=i({__name:"MonthDays",props:["year"],emits:["dayClicked"],setup(n,{emit:a}){const e=n,s=a,o=h(()=>{const t=new Date(e.year,1,0).getDate();return Array.from({length:t},(m,d)=>({number:d+1,date:new Date(e.year,0,d+1)}))});function u(t){s("dayClicked",t)}return(t,m)=>(c(),l("div",I,[(c(!0),l(k,null,C(o.value,d=>(c(),v(Y,{key:d.date,day:d,onClick:A=>u(d)},null,8,["day","onClick"]))),128))]))}}),w=_(M,[["__scopeId","data-v-f16a4f8c"]]),B={class:"modal"},F={class:"modal-content"},N=i({__name:"Modal",props:["day"],setup(n){return(a,e)=>(c(),l("div",B,[r("div",F,[r("span",{class:"close",onClick:e[0]||(e[0]=s=>a.$emit("close"))},"×"),r("h2",null,"Details for "+p(n.day.number),1)])]))}}),V=_(N,[["__scopeId","data-v-ff886116"]]),P={class:"weekdays"},S=i({__name:"Weekdays",setup(n){const a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];return(e,s)=>(c(),l("div",P,[(c(),l(k,null,C(a,o=>r("div",{class:"day",key:o},p(o),1)),64))]))}}),W=_(S,[["__scopeId","data-v-c11949c2"]]),E={class:"calendar-container"},T=i({__name:"Calendar",setup(n){const a=y(new Date().getFullYear()),e=y(!1),s=y(null);function o(t){a.value=t}function u(t){s.value=t,e.value=!0}return(t,m)=>(c(),l("div",E,[f(x,{onYearChanged:o}),f(W),f(w,{year:a.value,onDayClicked:u},null,8,["year"]),e.value?(c(),v(V,{key:0,day:s.value,onClose:m[0]||(m[0]=d=>e.value=!1)},null,8,["day"])):D("",!0)]))}}),j=_(T,[["__scopeId","data-v-06b3345d"]]),q=i({__name:"main",setup(n){return(a,e)=>(c(),v(j))}});export{q as default};
