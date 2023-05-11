"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[518],{1518:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(9439),a=r(2791),c=r(3855),s=r(9743),i=r(2677),u=r(3360),o=r(9002),l=r(9434),p=r(2617),d=r(6279),Z=r(2469),f=r(184),x=function(e){var t=e.success;return(0,f.jsx)(Z.Z,{variant:"success",children:t})},h=function(){var e=(0,a.useState)(""),t=(0,n.Z)(e,2),r=t[0],Z=t[1],h=(0,a.useState)(),v=(0,n.Z)(h,2),m=v[0],y=v[1],z=(0,a.useState)(),S=(0,n.Z)(z,2),I=S[0],g=S[1],j=(0,a.useState)(),E=(0,n.Z)(j,2),A=E[0],P=E[1],C=(0,a.useState)(""),_=(0,n.Z)(C,2),b=_[0],w=_[1],G=(0,a.useState)(""),D=(0,n.Z)(G,2),T=D[0],k=D[1],L=(0,a.useState)(""),U=(0,n.Z)(L,2),N=U[0],F=U[1],R=(0,l.v9)((function(e){return e.addPizzaReducer})),B=R.loading,Y=R.error,Q=R.success,W=(0,l.I0)();return(0,f.jsxs)("div",{children:[B&&(0,f.jsx)(p.Z,{}),Y&&(0,f.jsx)(d.Z,{error:"add new pizza error"}),Q&&(0,f.jsx)(x,{success:"Pizza Added Successfully"}),(0,f.jsxs)(c.Z,{onSubmit:function(e){e.preventDefault();var t={name:r,image:b,description:T,category:N,prices:{small:m,medium:A,larg:I}};W((0,o.PW)(t))},className:"bg-light p-4",children:[(0,f.jsxs)(s.Z,{className:"mb-3",children:[(0,f.jsxs)(c.Z.Group,{as:i.Z,controlId:"formGridEmail",children:[(0,f.jsx)(c.Z.Label,{children:"Name"}),(0,f.jsx)(c.Z.Control,{type:"text",value:r,onChange:function(e){return Z(e.target.value)},placeholder:"Enter email"})]}),(0,f.jsxs)(s.Z,{className:"mb-3 mt-3",children:[(0,f.jsxs)(c.Z.Group,{as:i.Z,controlId:"formGridCity",children:[(0,f.jsx)(c.Z.Label,{children:"Small Price"}),(0,f.jsx)(c.Z.Control,{type:"text",value:m,onChange:function(e){return y(e.target.value)},placeholder:"Enter Small Price"})]}),(0,f.jsxs)(c.Z.Group,{as:i.Z,controlId:"formGridState",children:[(0,f.jsx)(c.Z.Label,{children:"Medium Price"}),(0,f.jsx)(c.Z.Control,{type:"text",value:A,onChange:function(e){return P(e.target.value)},placeholder:"Enter medium price"})]}),(0,f.jsxs)(c.Z.Group,{as:i.Z,controlId:"formGridZip",children:[(0,f.jsx)(c.Z.Label,{children:"Larg Price"}),(0,f.jsx)(c.Z.Control,{type:"text",value:I,onChange:function(e){return g(e.target.value)},placeholder:"Enter larg price"})]})]}),(0,f.jsxs)(c.Z.Group,{as:i.Z,controlId:"formGridPassword",children:[(0,f.jsx)(c.Z.Label,{children:"Image"}),(0,f.jsx)(c.Z.Control,{ttype:"text",value:b,onChange:function(e){return w(e.target.value)},placeholder:"Add Image URL"})]})]}),(0,f.jsxs)(c.Z.Group,{className:"mb-3",controlId:"formGridAddress1",children:[(0,f.jsx)(c.Z.Label,{children:"Description"}),(0,f.jsx)(c.Z.Control,{type:"text",value:T,onChange:function(e){return k(e.target.value)},placeholder:"Enter Description"})]}),(0,f.jsxs)(c.Z.Group,{className:"mb-3",controlId:"formGridAddress2",children:[(0,f.jsx)(c.Z.Label,{children:"Category"}),(0,f.jsx)(c.Z.Control,{type:"text",value:N,onChange:function(e){return F(e.target.value)},placeholder:"Enter Category"})]}),(0,f.jsx)(u.Z,{variant:"primary",type:"submit",children:"Add New"})]})]})}},2617:function(e,t,r){r(2791);var n=r(6355),a=r(184);t.Z=function(){return(0,a.jsx)("div",{className:"fixed top-0 left-0 w-full h-full flex items-center justify-center",children:(0,a.jsx)("div",{className:"absolute top-1/2 left-30 transform -translate-y-1/2",children:(0,a.jsx)(n.fCD,{className:"animate-spin text-6xl text-gray-600"})})})}},6279:function(e,t,r){r(2791);var n=r(2469),a=r(184);t.Z=function(e){var t=e.error;return(0,a.jsx)(n.Z,{variant:"danger",children:t})}},9002:function(e,t,r){r.d(t,{DP:function(){return Z},Fn:function(){return p},GF:function(){return d},PW:function(){return o},Ve:function(){return l},bS:function(){return u}});var n=r(4165),a=r(5861),c=r(1243),s=r(2062),i=r.n(s),u=function(){return function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_PIZZAS_REQUEST"}),e.prev=1,e.next=4,c.Z.get("/api/pizzas/getAllPizzas");case 4:r=e.sent,t({type:"GET_PIZZAS_SUCCESS",payload:r.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"GET_PIZZAS_FAIL",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},o=function(e){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"ADD_PIZZAS_REQUEST"}),t.prev=1,t.next=4,c.Z.post("/api/pizzas/addpizza",{pizza:e});case 4:r({type:"ADD_PIZZAS_SUCCESS"}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),r({type:"ADD_PIZZAS_FAIL",payload:t.t0});case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()},l=function(e){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){var a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"GET_PIZZABYID_REQUEST"}),t.prev=1,t.next=4,c.Z.post("/api/pizzas/getpizzabyid",{pizzaId:e});case 4:a=t.sent,r({type:"GET_PIZZABYID_SUCCESS",payload:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r({type:"GET_PIZZABYID_FAIL",payload:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){var a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"UPDATE_PIZZABYID_REQUEST"}),t.prev=1,t.next=4,c.Z.post("/api/pizzas/updatepizza",{updatedPizza:e});case 4:a=t.sent,r({type:"UPDATE_PIZZABYID_SUCCESS",payload:a.data}),window.location.href="/admin/pizzalist",t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),r({type:"UPDATE_PIZZABYID_FAIL",payload:t.t0});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.post("/api/pizzas/deletepizza",{pizzaId:e});case 3:i()("Pizza Deleted Succss!","success"),window.location.href="/admin/pizzalist",t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),i()("Errro While Deleteing Pizza");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},Z=function(e,t){return function(){var r=(0,a.Z)((0,n.Z)().mark((function r(a){var s,i;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a({type:"GET_PIZZAS_REQUEST"}),r.prev=1,r.next=4,c.Z.get("/api/pizzas/getAllPizzas");case 4:i=r.sent,s=i.data.filter((function(t){return t.name.toLowerCase().includes(e)})),"all"!==t&&(s=i.data.filter((function(e){return e.category.toLowerCase()===t}))),a({type:"GET_PIZZAS_SUCCESS",payload:s}),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),a({type:"GET_PIZZAS_FAIL",payload:r.t0});case 13:case"end":return r.stop()}}),r,null,[[1,10]])})));return function(e){return r.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=518.ac56488d.chunk.js.map