"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[435],{4822:function(e,t,r){r.d(t,{AW:function(){return d},TX:function(){return u},a$:function(){return o},h8:function(){return x},pH:function(){return i}});var n=r(4165),s=r(5861),a=r(1243),l=r(2062),c=r.n(l),o=function(e){return function(){var t=(0,s.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"USER_REGISTER_REQUEST"}),t.prev=1,t.next=4,a.Z.post("/api/users/register",e);case 4:r({type:"USER_REGISTER_SUCCESS"}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),r({type:"USER_REGISTER_FAIL",payload:t.t0});case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()},i=function(e){return function(){var t=(0,s.Z)((0,n.Z)().mark((function t(r){var s;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"USER_LOGIN_REQUEST"}),t.prev=1,t.next=4,a.Z.post("/api/users/login",e);case 4:s=t.sent,r({type:"USER_LOGIN_SUCCESS",payload:s.data}),localStorage.setItem("currentUser",JSON.stringify(s.data)),window.location.href="/",t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),r({type:"USER_LOGIN_FAIL",payload:t.t0});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},u=function(){return function(e){localStorage.removeItem("currentUser"),window.location.href="/login"}},d=function(){return function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_USERS_REQUEST"}),e.prev=1,e.next=4,a.Z.get("/api/users/getallusers");case 4:r=e.sent,t({type:"GET_USERS_SUCCESS",payload:r.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"GET_USERS_FAIL",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},x=function(e){return function(){var t=(0,s.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.Z.post("/api/users/deleteuser",{userid:e});case 3:c()("User Deleted Succss!","success"),window.location.reload(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),c()("Errro While Deleteing User");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},5822:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(4165),s=r(5861),a=r(9439),l=r(2791),c=r(1087),o=r(9434),i=r(4822),u=r(4270),d=r(6856),x=r(6355),p=r(3728),m=r(184),f=function(){var e=(0,l.useState)(""),t=(0,a.Z)(e,2),r=t[0],f=t[1],h=(0,l.useState)(""),g=(0,a.Z)(h,2),y=g[0],b=g[1],v=(0,l.useState)(!1),w=(0,a.Z)(v,2),j=w[0],S=w[1],N=(0,o.I0)();(0,l.useEffect)((function(){localStorage.getItem("currentUser")&&(window.location.href="/")}),[]);var E=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=3;break}return alert("Please check the agreement box!"),e.abrupt("return");case 3:t={email:r,password:y},1===N((0,i.pH)(t)).status?alert("Login not successful!"):alert("Login successful!");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=(0,l.useState)(!1),U=(0,a.Z)(k,2),Z=U[0],R=U[1];return(0,m.jsxs)("div",{children:[(0,m.jsx)(u.q,{children:(0,m.jsx)("title",{children:"Login"})}),(0,m.jsx)("div",{className:"flex justify-center items-centerw-full lg:w-1/2 xl:w-2/5 px-4 mb-16 lg:mb-0 mx-auto  items-center",children:(0,m.jsxs)("div",{className:" lg:py-20 mx-auto lg:mr-0",children:[(0,m.jsx)("h3",{className:"font-heading text-4xl text-gray-900 font-semibold mb-4",children:"Sign in to your account"}),(0,m.jsx)("p",{className:"text-lg text-gray-500 mb-10",children:"Greetings on your return! We kindly request you to enter your details."}),(0,m.jsxs)("div",{className:"flex flex-wrap mb-6 items-center -mx-2",children:[(0,m.jsx)("div",{className:"w-full md:w-1/2 px-2 mb-3 md:mb-0",children:(0,m.jsxs)(c.rU,{className:"inline-flex w-full py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition duration-100",href:"#",children:[(0,m.jsx)(p.JM8,{}),(0,m.jsx)("span",{className:"ml-4 text-sm font-semibold text-gray-500",children:"Login with Google"})]})}),(0,m.jsx)("div",{className:"w-full md:w-1/2 px-2",children:(0,m.jsxs)(c.rU,{className:"inline-flex w-full py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition duration-100",children:[(0,m.jsx)(x.Am9,{color:"blue"}),(0,m.jsx)("span",{className:"ml-4 text-sm font-semibold text-gray-500",children:"Login with FaceBook"})]})})]}),(0,m.jsxs)("div",{className:"flex mb-6 items-center",children:[(0,m.jsx)("div",{className:"w-full h-px bg-gray-300"}),(0,m.jsx)("span",{className:"mx-4 text-sm font-semibold text-gray-500",children:"Or"}),(0,m.jsx)("div",{className:"w-full h-px bg-gray-300"})]}),(0,m.jsxs)("form",{children:[(0,m.jsxs)("div",{className:"mb-6",children:[(0,m.jsx)("label",{className:"block mb-1.5 text-sm text-gray-900 font-semibold",htmlFor:"",children:"Email"}),(0,m.jsx)("input",{type:"email",value:r,onChange:function(e){return f(e.target.value)},className:"w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg",placeholder:"pat@saturn.dev"})]}),(0,m.jsxs)("div",{className:"mb-7",children:[(0,m.jsxs)("div",{className:"flex mb-1.5 items-center justify-between",children:[(0,m.jsx)("label",{className:"block text-sm text-gray-900 font-semibold",htmlFor:"",children:"Password"}),(0,m.jsx)(c.rU,{to:"/abc",className:"inline-block text-xs font-semibold text-orange-900 hover:text-gray-900",children:"Forget password?"})]}),(0,m.jsxs)("div",{className:"relative",children:[(0,m.jsx)("input",{id:"password",type:Z?"text":"password",value:y,onChange:function(e){return b(e.target.value)},className:"w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg",placeholder:"Enter your password"}),(0,m.jsx)("button",{type:"button",onClick:function(){R(!Z)},className:"absolute top-1/2 right-0 transform -translate-y-1/2 mr-3 focus:outline-none",children:Z?(0,m.jsx)(d.wqE,{}):(0,m.jsx)(d.t2l,{})})]}),(0,m.jsx)("small",{className:"block text-center text-gray-500 text-sm mt-2",children:"We'll never share your credential details with anyone else."})]}),(0,m.jsxs)("div",{className:"flex mb-6 items-center",children:[(0,m.jsx)("input",{type:"checkbox",defaultValue:"",id:"",checked:j,onChange:function(e){S(e.target.checked)}}),(0,m.jsx)("label",{className:"ml-2 text-xs text-gray-800",htmlFor:"",children:"Agree to T&C"})]}),(0,m.jsx)("button",{className:"relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-orange-900 rounded-full overflow-hidden",onClick:E,children:"Login"}),(0,m.jsxs)("span",{className:"text-xs font-semibold text-gray-900",children:[(0,m.jsx)("span",{children:"Don\u2019t have an account?"}),(0,m.jsx)(c.rU,{to:"/register",className:"ml-1 inline-block text-orange-900 hover:text-orange-700",href:"#",children:"Sign up"})]})]})]})})]})}}}]);
//# sourceMappingURL=435.d4a2846e.chunk.js.map