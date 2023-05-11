"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[813],{6279:function(e,r,t){t(2791);var n=t(2469),a=t(184);r.Z=function(e){var r=e.error;return(0,a.jsx)(n.Z,{variant:"danger",children:r})}},2375:function(e,r,t){t(2791);var n=t(4849),a=t(184);r.Z=function(){return(0,a.jsx)(n.Z,{animation:"border",variant:"info"})}},1689:function(e,r,t){t.d(r,{E:function(){return a},X:function(){return n}});var n=function(e,r,t){return function(n,a){var i={name:e.name,_id:e._id,image:e.image,varient:t,quantity:Number(r),prices:e.prices,price:e.prices[0][t]*r};i.quantity>10?alert("you Can only add 10 pizzas"):i.quantity<1?n({type:"DELETE_FROM_CART",payload:e}):(n({type:"ADD_TO_CART",payload:i}),localStorage.setItem("cartItems",JSON.stringify(a().cartReducer.cartItems)))}},a=function(e){return function(r,t){r({type:"DELETE_FROM_CART",payload:e});var n=t().cartReducer.cartitems;localStorage.setItem("cartItems",JSON.stringify(n))}}},9002:function(e,r,t){t.d(r,{DP:function(){return h},Fn:function(){return u},GF:function(){return p},PW:function(){return l},Ve:function(){return d},bS:function(){return o}});var n=t(4165),a=t(5861),i=t(1243),s=t(2062),c=t.n(s),o=function(){return function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:"GET_PIZZAS_REQUEST"}),e.prev=1,e.next=4,i.Z.get("/api/pizzas/getAllPizzas");case 4:t=e.sent,r({type:"GET_PIZZAS_SUCCESS",payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r({type:"GET_PIZZAS_FAIL",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}()},l=function(e){return function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t({type:"ADD_PIZZAS_REQUEST"}),r.prev=1,r.next=4,i.Z.post("/api/pizzas/addpizza",{pizza:e});case 4:t({type:"ADD_PIZZAS_SUCCESS"}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(1),t({type:"ADD_PIZZAS_FAIL",payload:r.t0});case 10:case"end":return r.stop()}}),r,null,[[1,7]])})));return function(e){return r.apply(this,arguments)}}()},d=function(e){return function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var a;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t({type:"GET_PIZZABYID_REQUEST"}),r.prev=1,r.next=4,i.Z.post("/api/pizzas/getpizzabyid",{pizzaId:e});case 4:a=r.sent,t({type:"GET_PIZZABYID_SUCCESS",payload:a.data}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),t({type:"GET_PIZZABYID_FAIL",payload:r.t0});case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}()},u=function(e){return function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var a;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t({type:"UPDATE_PIZZABYID_REQUEST"}),r.prev=1,r.next=4,i.Z.post("/api/pizzas/updatepizza",{updatedPizza:e});case 4:a=r.sent,t({type:"UPDATE_PIZZABYID_SUCCESS",payload:a.data}),window.location.href="/admin/pizzalist",r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),t({type:"UPDATE_PIZZABYID_FAIL",payload:r.t0});case 12:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}()},p=function(e){return function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.Z.post("/api/pizzas/deletepizza",{pizzaId:e});case 3:c()("Pizza Deleted Succss!","success"),window.location.href="/admin/pizzalist",r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),c()("Errro While Deleteing Pizza");case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},h=function(e,r){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(a){var s,c;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"GET_PIZZAS_REQUEST"}),t.prev=1,t.next=4,i.Z.get("/api/pizzas/getAllPizzas");case 4:c=t.sent,s=c.data.filter((function(r){return r.name.toLowerCase().includes(e)})),"all"!==r&&(s=c.data.filter((function(e){return e.category.toLowerCase()===r}))),a({type:"GET_PIZZAS_SUCCESS",payload:s}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),a({type:"GET_PIZZAS_FAIL",payload:t.t0});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()}},4547:function(e,r,t){var n=t(9439),a=t(2791),i=t(9743),s=t(2677),c=t(3855),o=t(3360),l=t(9434),d=t(9002),u=t(8391),p=t(184);r.Z=function(){var e=(0,a.useState)(""),r=(0,n.Z)(e,2),t=r[0],h=r[1],x=(0,a.useState)("all"),m=(0,n.Z)(x,2),f=m[0],v=m[1],g=(0,l.I0)(),y=function(){g((0,d.DP)(t,f))};return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(u.E.div,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.5},className:"p-4 bg-gray-50 mt-4 rounded-lg shadow-lg",children:[(0,p.jsx)("h3",{className:"text-2xl font-medium mb-4",children:"Filter Pizzas"}),(0,p.jsx)("div",{children:(0,p.jsxs)(i.Z,{className:"mb-4",children:[(0,p.jsx)(s.Z,{xs:8,className:"mb-2 mb-md-0",children:(0,p.jsx)(c.Z.Control,{value:t,onChange:function(e){return h(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&y()},placeholder:"Search for food items",className:"border-0 bg-gray-50 focus:ring-0 focus:border-primary-400 rounded-md shadow-sm"})}),(0,p.jsx)(s.Z,{xs:4,children:(0,p.jsx)(o.Z,{onClick:y,className:"w-100 bg-success-400 text-white px-4 py-2 rounded-md hover:bg-primary-500 focus:ring-0 focus:border-success-500 transition-colors duration-300",children:"Search"})})]})}),(0,p.jsx)("div",{className:"min-h-30vh bg-gray-100 flex items-center justify-center ",children:(0,p.jsxs)("div",{className:"max-w-2xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,p.jsx)("div",{className:"text-center",children:(0,p.jsx)("h2",{className:"text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4",children:"Food Categories"})}),(0,p.jsxs)("div",{className:"grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6",children:[(0,p.jsx)("div",{variant:"pizza"===f?"primary":"outline-primary",onClick:function(){v("pizza"),g((0,d.DP)(t,"pizza"))},className:"bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer ",children:(0,p.jsx)("div",{className:"p-4",children:(0,p.jsx)("div",{className:"uppercase tracking-wide text-gray-600 font-bold text-xs",children:"Pizza"})})}),(0,p.jsx)("div",{variant:"burger"===f?"primary":"outline-primary",onClick:function(){v("burger"),g((0,d.DP)(t,"burger"))},className:"bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer ",children:(0,p.jsx)("div",{className:"p-4",children:(0,p.jsx)("div",{className:"uppercase tracking-wide text-gray-600 font-bold text-xs",children:"Burger"})})}),(0,p.jsx)("div",{variant:"fries"===f?"primary":"outline-primary",onClick:function(){v("fries"),g((0,d.DP)(t,"fries"))},className:"bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer",children:(0,p.jsx)("div",{className:"p-4",children:(0,p.jsx)("div",{className:"uppercase tracking-wide text-gray-600 font-bold text-xs",children:"Fries"})})}),(0,p.jsx)("div",{variant:"drinks"===f?"primary":"outline-primary",onClick:function(){v("drinks"),g((0,d.DP)(t,"drinks"))},className:"bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer",children:(0,p.jsx)("div",{className:"p-4",children:(0,p.jsx)("div",{className:"uppercase tracking-wide text-gray-600 font-bold text-xs",children:"Drinks"})})}),(0,p.jsx)("div",{variant:"thali"===f?"primary":"outline-primary",onClick:function(){v("thali"),g((0,d.DP)(t,"thali"))},className:"bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer",children:(0,p.jsx)("div",{className:"p-4",children:(0,p.jsx)("div",{className:"uppercase tracking-wide text-gray-600 font-bold text-xs",children:"Indian Thali"})})}),(0,p.jsx)("div",{variant:"mix"===f?"primary":"outline-primary",onClick:function(){v("mix"),g((0,d.DP)(t,"mix"))},className:"bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer",children:(0,p.jsx)("div",{className:"p-4",children:(0,p.jsx)("div",{className:"uppercase tracking-wide text-gray-600 font-bold text-xs",children:"Mix Food"})})})]})]})})]})})}},813:function(e,r,t){t.r(r),t.d(r,{default:function(){return E}});var n=t(9439),a=t(2791),i=t(9434),s=t(4266),c=t(2784),o=t(7022),l=t(9743),d=t(2677),u=t(3433),p=t(6355),h=t(5316),x=t(9140),m=t(3360),f=t(1689),v=t(9806),g=t(1632),y=t(8391),Z=t(2469),j=t(184),b=function(e){var r=e.pizza,t=(0,a.useState)("small"),s=(0,n.Z)(t,2),c=s[0],o=s[1],l=(0,a.useState)(1),d=(0,n.Z)(l,2),b=d[0],w=d[1],z=(0,a.useState)(!1),N=(0,n.Z)(z,2),k=N[0],S=N[1],E=(0,a.useState)(!1),I=(0,n.Z)(E,2),P=I[0],C=I[1],_=(0,i.I0)(),A=function(){return S(!1)},D=r.varients.map((function(e){return(0,j.jsx)("option",{children:e},e)})),T=(0,u.Z)(Array(10).keys()).map((function(e,r){return(0,j.jsx)("option",{value:r+1,children:r+1},r+1)}));r.prices[0][c];return(0,a.useEffect)((function(){var e;return P&&(e=setTimeout((function(){C(!1)}),2e3)),function(){return clearTimeout(e)}}),[P]),(0,j.jsxs)(j.Fragment,{children:[P&&(0,j.jsxs)(Z.Z,{variant:"success",onClose:function(){return C(!1)},dismissible:!0,className:"d-flex align-items-center",children:[(0,j.jsx)(p.FJM,{size:20,className:"me-2 d-inline-block"}),(0,j.jsx)("span",{className:"d-inline-block",children:"Pizza added to cart."})]}),(0,j.jsxs)("div",{className:"relative bg-white rounded-lg shadow-lg overflow-hidden my-3 border border-gray-300",children:[(0,j.jsxs)(y.E.div,{className:"relative",whileHover:{scale:1.1},children:[(0,j.jsx)("img",{src:r.image,alt:"Product",className:"w-full",onClick:function(){return S(!0)},style:{cursor:"pointer"}}),(0,j.jsxs)("div",{className:"absolute bottom-0 right-0 mr-2 mb-2 bg-yellow-500 text-black px-2 py-1 rounded-md text-sm font-bold",children:[(0,j.jsx)(v.G,{icon:g.Van})," "," "," ",r.prices[0][c]*b]})]}),(0,j.jsxs)("div",{className:"py-4 px-6",children:[(0,j.jsx)("h2",{className:"text-lg font-semibold text-gray-800 text-center",children:r.name}),(0,j.jsx)("hr",{}),(0,j.jsxs)("div",{className:"mt-4",children:[(0,j.jsx)("label",{htmlFor:"size",className:"block text-gray-700 font-bold",children:"Size"}),(0,j.jsx)("select",{id:"size",name:"size",value:c,onChange:function(e){return o(e.target.value)},className:"block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50",children:D})]}),(0,j.jsxs)("div",{className:"mt-4",children:[(0,j.jsx)("label",{htmlFor:"quantity",className:"block text-gray-700 font-bold",children:"Quantity"}),(0,j.jsx)("select",{className:"block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50",value:b,onChange:function(e){return w(e.target.value)},children:T})]}),(0,j.jsx)("div",{className:"flex justify-center items-center mt-6",children:(0,j.jsxs)("button",{onClick:function(){_((0,f.X)(r,b,c)),C(!0)},className:"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded  ",children:[(0,j.jsx)(p.rI6,{className:"inline-block mr-2 mb-1"}),"Add to Cart"]})})]})]}),(0,j.jsxs)(h.Z,{show:k,onHide:A,backdrop:"static",keyboard:!1,children:[(0,j.jsx)(h.Z.Header,{closeButton:!0,children:(0,j.jsx)(h.Z.Title,{children:r.name})}),(0,j.jsx)(h.Z.Body,{children:(0,j.jsxs)("div",{children:[(0,j.jsx)(x.Z.Img,{variant:"top",src:r.image,style:{height:"250px"}}),(0,j.jsxs)("div",{children:[(0,j.jsx)("h5",{children:"Description About Product :"}),(0,j.jsx)("h6",{children:r.description}),(0,j.jsxs)("h6",{children:[" INR",r.price]})]})]})}),(0,j.jsx)(h.Z.Footer,{children:(0,j.jsx)(m.Z,{variant:"danger",onClick:A,children:"Close"})})]})]})},w=t(9002),z=t(6279),N=t(2375),k=t(4547),S=t(4270),E=function(){var e=(0,i.I0)(),r=(0,i.v9)((function(e){return e.getAllPizzaReducer})),t=r.loading,u=r.pizzas,p=r.error,h=(0,a.useState)(1),x=(0,n.Z)(h,2),m=x[0],f=x[1],v=(0,a.useState)(9),g=(0,n.Z)(v,2),y=g[0],Z=(g[1],(0,a.useState)(null)),E=(0,n.Z)(Z,2),I=E[0],P=E[1];(0,a.useEffect)((function(){e((0,w.bS)())}),[e]);var C=I?u.filter((function(e){return e.category===I})):u;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(S.q,{children:(0,j.jsx)("title",{children:"All Menu"})}),(0,j.jsx)(o.Z,{children:t?(0,j.jsx)(N.Z,{}):p?(0,j.jsxs)(z.Z,{children:["Error while fetching pizzas ",p]}):(0,j.jsxs)(l.Z,{children:[(0,j.jsx)("div",{className:"mt-5",children:(0,j.jsx)(k.Z,{onCategoryChange:P})}),(0,j.jsx)("h3",{className:"text-2xl font-medium mt-4 text-center",children:"Pizza Menu"}),C.slice((m-1)*y,m*y).map((function(e){return(0,j.jsx)(d.Z,{md:4,children:(0,j.jsx)(b,{pizza:e})},e.name)}))]})}),(0,j.jsx)("div",{className:"d-flex justify-content-center mt-3 mb-4",children:(0,j.jsx)(c.Z,{spacing:2,children:(0,j.jsx)(s.Z,{count:Math.ceil(C.length/y),page:m,color:"primary",onChange:function(e,r){return f(r)}})})})]})}}}]);
//# sourceMappingURL=813.a8396cf6.chunk.js.map