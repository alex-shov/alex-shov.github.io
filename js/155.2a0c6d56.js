"use strict";(self["webpackChunkmy_budget"]=self["webpackChunkmy_budget"]||[]).push([[155],{7155:(e,t,n)=>{n.r(t),n.d(t,{default:()=>U});var a=n(3673),l=n(2323);const u=(0,a.Uk)(" Бюджет "),o=(0,a.Uk)(" МЕНЮ ");function r(e,t,n,r,i,c){const s=(0,a.up)("q-btn"),p=(0,a.up)("q-toolbar-title"),d=(0,a.up)("q-toolbar"),m=(0,a.up)("q-header"),w=(0,a.up)("q-item-label"),f=(0,a.up)("EssentialLink"),g=(0,a.up)("q-list"),b=(0,a.up)("q-drawer"),k=(0,a.up)("router-view"),Z=(0,a.up)("q-page-container"),_=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(_,{view:"lHh Lpr lFf"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{elevated:""},{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[u])),_:1}),(0,a._)("div",null,"Реализовано на Quasar v"+(0,l.zw)(e.$q.version),1)])),_:1})])),_:1}),(0,a.Wm)(b,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[0]||(t[0]=t=>e.leftDrawerOpen=t),"show-if-above":"",bordered:""},{default:(0,a.w5)((()=>[(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{header:""},{default:(0,a.w5)((()=>[o])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.essentialLinks,(e=>((0,a.wg)(),(0,a.j4)(f,(0,a.dG)({key:e.title},e),null,16)))),128))])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(k)])),_:1})])),_:1})}function i(e,t,n,u,o,r){const i=(0,a.up)("q-icon"),c=(0,a.up)("q-item-section"),s=(0,a.up)("q-item-label"),p=(0,a.up)("q-item");return(0,a.wg)(),(0,a.j4)(p,{clickable:"",tag:"a",to:e.route.name,exact:""},{default:(0,a.w5)((()=>[e.icon?((0,a.wg)(),(0,a.j4)(c,{key:0,avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{name:e.icon},null,8,["name"])])),_:1})):(0,a.kq)("",!0),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.title),1)])),_:1}),(0,a.Wm)(s,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.caption),1)])),_:1})])),_:1})])),_:1},8,["to"])}const c=(0,a.aZ)({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},route:{type:Object,default:()=>{}},icon:{type:String,default:""}}});var s=n(4260),p=n(3414),d=n(2035),m=n(4554),w=n(2350),f=n(7518),g=n.n(f);const b=(0,s.Z)(c,[["render",i]]),k=b;g()(c,"components",{QItem:p.Z,QItemSection:d.Z,QIcon:m.Z,QItemLabel:w.Z});var Z=n(1959),_=n(3617);const q=[{title:"Бюджет",caption:"Мои доходы и расходы",icon:"savings",route:{name:"/"}},{title:"Валюта",caption:"Пересчёт в валюту",icon:"currency_exchange",route:{name:"currency"}}],v=(0,a.aZ)({name:"MainLayout",components:{EssentialLink:k},setup(){const e=(0,Z.iH)(!1),t=(0,_.oR)();return(0,a.bv)((async()=>{await t.dispatch("getCurrentCurrency")})),{essentialLinks:q,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});var y=n(3066),Q=n(3812),L=n(9570),W=n(8240),h=n(3747),C=n(2428),D=n(7011),j=n(2652);const I=(0,s.Z)(v,[["render",r]]),U=I;g()(v,"components",{QLayout:y.Z,QHeader:Q.Z,QToolbar:L.Z,QBtn:W.Z,QToolbarTitle:h.Z,QDrawer:C.Z,QList:D.Z,QItemLabel:w.Z,QPageContainer:j.Z})}}]);