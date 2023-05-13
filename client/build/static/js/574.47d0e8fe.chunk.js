"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[574],{4822:function(e,t,r){r.d(t,{AW:function(){return d},TX:function(){return u},a$:function(){return c},h8:function(){return x},pH:function(){return o}});var s=r(4165),n=r(5861),l=r(1243),a=r(2062),i=r.n(a),c=function(e){return function(){var t=(0,n.Z)((0,s.Z)().mark((function t(r){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"USER_REGISTER_REQUEST"}),t.prev=1,t.next=4,l.Z.post("/api/users/register",e);case 4:r({type:"USER_REGISTER_SUCCESS"}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),r({type:"USER_REGISTER_FAIL",payload:t.t0});case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()},o=function(e){return function(){var t=(0,n.Z)((0,s.Z)().mark((function t(r){var n;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"USER_LOGIN_REQUEST"}),t.prev=1,t.next=4,l.Z.post("/api/users/login",e);case 4:n=t.sent,r({type:"USER_LOGIN_SUCCESS",payload:n.data}),localStorage.setItem("currentUser",JSON.stringify(n.data)),window.location.href="/",t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),r({type:"USER_LOGIN_FAIL",payload:t.t0});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},u=function(){return function(e){localStorage.removeItem("currentUser"),window.location.href="/login"}},d=function(){return function(){var e=(0,n.Z)((0,s.Z)().mark((function e(t){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_USERS_REQUEST"}),e.prev=1,e.next=4,l.Z.get("/api/users/getallusers");case 4:r=e.sent,t({type:"GET_USERS_SUCCESS",payload:r.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"GET_USERS_FAIL",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},x=function(e){return function(){var t=(0,n.Z)((0,s.Z)().mark((function t(r){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.Z.post("/api/users/deleteuser",{userid:e});case 3:i()("User Deleted Succss!","success"),window.location.reload(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),i()("Errro While Deleteing User");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},1574:function(e,t,r){r.r(t);var s=r(9439),n=r(2791),l=r(9434),a=r(4822),i=r(7689),c=r(1087),o=r(8617),u=r(6355),d=r(3728),x=r(7425),m=r(6856),f=r(4270),h=r(184);t.default=function(){var e=(0,l.v9)((function(e){return e.registerUserReducer})),t=(0,n.useState)(""),r=(0,s.Z)(t,2),p=r[0],b=r[1],g=(0,n.useState)(""),y=(0,s.Z)(g,2),v=y[0],j=y[1],N=(0,n.useState)(""),w=(0,s.Z)(N,2),k=w[0],S=w[1],E=(0,n.useState)(!1),Z=(0,s.Z)(E,2),U=Z[0],C=Z[1],R=(0,n.useState)(""),_=(0,s.Z)(R,2),F=_[0],G=_[1],T=(0,n.useState)(!1),I=(0,s.Z)(T,2),A=I[0],L=I[1],P=function(){C((function(e){return!e}))},q=U?m.wqE:m.t2l,O=(0,l.I0)(),W=(0,i.s0)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f.q,{children:(0,h.jsx)("title",{children:"Registration"})}),(0,h.jsx)("section",{className:"bg-white min-h-screen",children:(0,h.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2",children:[(0,h.jsxs)("div",{className:"relative px-4 pt-60 pb-10 bg-gray-50 sm:px-6 lg:px-8 lg:pb-24 md:justify-center",children:[(0,h.jsx)("div",{className:"absolute inset-0",children:(0,h.jsx)("img",{className:"object-cover w-full h-full",src:"https://img.freepik.com/free-vector/fast-food-menu-colorful-icons-set_1284-14584.jpg?size=626&ext=jpg&ga=GA1.1.1927059429.1683979638&semt=ais",alt:""})}),(0,h.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-black to-transparent"}),(0,h.jsx)("div",{className:"relative",children:(0,h.jsxs)("div",{className:"w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl",children:[(0,h.jsxs)("h3",{className:"text-4xl font-bold text-gray lg:text-center",children:["Food delivered fresh, fast, and to your door & ",(0,h.jsx)("br",{className:"hidden xl:block"}),"5000+ Happy Customer"]}),(0,h.jsxs)("ul",{className:"grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4",children:[(0,h.jsxs)("li",{className:"flex items-center space-x-3",children:[(0,h.jsx)("div",{className:"inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full",children:(0,h.jsx)(o.dZ6,{})}),(0,h.jsxs)("span",{className:"text-lg font-medium text-white",children:[" ","Food delivery made easy "," "]})]}),(0,h.jsxs)("li",{className:"flex items-center space-x-3",children:[(0,h.jsx)("div",{className:"inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full",children:(0,h.jsx)(o.dZ6,{})}),(0,h.jsxs)("span",{className:"text-lg font-medium text-white",children:[" ","From our kitchen to your table"," "]})]}),(0,h.jsxs)("li",{className:"flex items-center space-x-3",children:[(0,h.jsx)("div",{className:"inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full",children:(0,h.jsx)(o.dZ6,{})}),(0,h.jsxs)("span",{className:"text-lg font-medium text-white",children:[" ","We bring the restaurant to you"," "]})]}),(0,h.jsxs)("li",{className:"flex items-center space-x-3",children:[(0,h.jsx)("div",{className:"inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full",children:(0,h.jsx)(o.dZ6,{})}),(0,h.jsxs)("span",{className:"text-lg font-medium text-white",children:[" ","Good food, great service, delivered"," "]})]})]})]})})]}),(0,h.jsx)("div",{className:"flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24",children:(0,h.jsxs)("div",{className:"xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto",children:[(0,h.jsx)("h2",{className:"text-3xl font-bold leading-tight text-black sm:text-4xl",children:"Sign up to Celebration"}),(0,h.jsxs)("p",{className:"mt-2 text-base text-gray-600",children:["Already have an account?"," ",(0,h.jsx)(c.rU,{to:"/login",title:"",className:"font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline",children:(0,h.jsx)("button",{type:"button",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Login"})})]}),(0,h.jsx)("form",{className:"mt-8",children:(0,h.jsxs)("div",{className:"space-y-5",children:[(0,h.jsxs)("div",{children:[(0,h.jsxs)("label",{htmlFor:"",className:"text-base font-medium text-gray-900",children:[" ","Enter Your Full Name"," "]}),(0,h.jsxs)("div",{className:"mt-2.5 relative text-gray-400 focus-within:text-gray-600",children:[(0,h.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:(0,h.jsx)(u.m3W,{})}),(0,h.jsx)("input",{placeholder:"Enter your Full Name",type:"text",id:"form3Example1c",required:!0,value:p,onChange:function(e){return b(e.target.value)},className:"block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"})]})]}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("label",{htmlFor:"",className:"text-base font-medium text-gray-900",children:[" ","Email address"," "]}),(0,h.jsxs)("div",{className:"mt-2.5 relative text-gray-400 focus-within:text-gray-600",children:[(0,h.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:(0,h.jsx)(m.g5G,{})}),(0,h.jsx)("input",{required:!0,placeholder:"example@example.com",type:"email",id:"form3Example33",value:v,onChange:function(e){return j(e.target.value)},className:"block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"})]})]}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("label",{htmlFor:"",className:"text-base font-medium text-gray-900",children:[" ","Password"," "]}),(0,h.jsxs)("div",{className:"mt-2.5 relative text-gray-400 focus-within:text-gray-600",children:[(0,h.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:(0,h.jsx)(x.xuE,{})}),(0,h.jsx)("input",{required:!0,type:U?"text":"password",id:"form3Example3",value:k,onChange:function(e){return S(e.target.value)},className:"block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"}),(0,h.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer",onClick:P,children:(0,h.jsx)(q,{})})]}),(0,h.jsxs)("div",{className:"mt-2.5 relative text-gray-400 focus-within:text-gray-600",children:[(0,h.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:(0,h.jsx)(x.xuE,{})}),(0,h.jsx)("input",{type:U?"text":"password",id:"form3Example",required:!0,value:F,onChange:function(e){return G(e.target.value)},className:"block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"}),(0,h.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer",onClick:P,children:(0,h.jsx)(q,{})})]})]}),(0,h.jsxs)("div",{className:"form-check d-flex justify-content-center mb-5",children:[(0,h.jsx)("input",{className:"form-check-input me-2",type:"checkbox",defaultValue:"",id:"form2Example3cg",checked:A,onChange:function(e){L(e.target.checked)}}),(0,h.jsxs)("label",{className:"form-check-label",htmlFor:"form2Example3g",children:["I agree all statements in"," ",(0,h.jsx)("a",{href:"#!",className:"text-body",children:(0,h.jsx)("u",{children:"Terms of service"})})]})]}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{onClick:function(){if(A)if(k!==F)alert("Passwords do not match.");else{var t={name:p,email:v,password:k,confrimPassword:F};O((0,a.a$)(t)).then((function(){console.log("User registered successfully."),e.success&&W.push("/login")})).catch((function(e){console.log(e)}))}else alert("Please agree to the terms of service.")},className:"inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80",children:"Sign up"})})]})}),(0,h.jsxs)("div",{className:"mt-3 space-y-3",children:[(0,h.jsxs)("button",{type:"button",className:"relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none",children:[(0,h.jsx)("div",{className:"absolute inset-y-0 left-0 p-4",children:(0,h.jsx)(d.JM8,{})}),"Sign up with Google"]}),(0,h.jsxs)("button",{type:"button",className:"relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none",children:[(0,h.jsx)("div",{className:"absolute inset-y-0 left-0 p-4",children:(0,h.jsx)(u.Am9,{})}),"Sign up with Facebook"]})]}),(0,h.jsxs)("p",{className:"mt-5 text-sm text-gray-600",children:["This site is protected by reCAPTCHA and the Google"," ",(0,h.jsx)(c.rU,{title:"",className:"text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700",children:"Privacy Policy"})," ","&",(0,h.jsx)(c.rU,{title:"",className:"text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700",children:"Terms of Service"})]})]})})]})})]})}}}]);
//# sourceMappingURL=574.47d0e8fe.chunk.js.map