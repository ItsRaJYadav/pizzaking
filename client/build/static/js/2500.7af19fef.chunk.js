"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[2500],{2617:function(e,t,r){r(2791);var n=r(6355),s=r(184);t.Z=function(){return(0,s.jsx)("div",{className:"fixed top-0 left-0 w-full h-full flex items-center justify-center",children:(0,s.jsx)("div",{className:"absolute top-1/2 left-30 transform -translate-y-1/2",children:(0,s.jsx)(n.fCD,{className:"animate-spin text-6xl text-gray-600"})})})}},2500:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(2791),s=r(9434),a=r(8820),c=r(4822),i=r(2617),o=r(4165),d=r(5861),l=r(9439),u=r(1243),h=r(184),p=function(){var e=(0,n.useState)([]),t=(0,l.Z)(e,2),r=t[0],s=t[1];return(0,n.useEffect)((function(){var e=function(){var e=(0,d.Z)((0,o.Z)().mark((function e(){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InRwSXR3TTc4aHZvMkpyV1ozRnFtaSJ9.eyJpc3MiOiJodHRwczovL2Rldi1xd2FtMHBtOGhxcHAwNXRzLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJTc1d3MEFVNzh0MWdVV3hTb2J1WHNkZ3hTNDN2QWJEMUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9kZXYtcXdhbTBwbThocXBwMDV0cy51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTY4NDIzMDI2NywiZXhwIjoxNjg0MzE2NjY3LCJhenAiOiJTc1d3MEFVNzh0MWdVV3hTb2J1WHNkZ3hTNDN2QWJEMSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.SXsBNNQnEbRBo_aU6moUJEmfguWQifiXJtBqW71nKqk_FBU2mHPkIXsF0CkHSAYPVlRW1XVQnWj8zCfiFBFRo5d6EXrk-EC9J1MrD4omFqQ22NFmNuVkQ6A7KScPva9CUkBnzMZZE0bINow0h2WC27LBHt_CtcbxiiFwjp3GgcNXaEIWUhwM641AVELDP80p2O8ZU6n-oRHUE_2kApFdJLF2IxC7a0XO7b0camHDmwl1VDBFQ474zhStXjygw-4CTWmi-8Ovi03bLwqKVtXBHwJmZIVjfOwS4TvbXrVNXnroVMfdbDiB11u6h7UXI23urrJa0AnZC_KGCyqHuoi2ZQ","https://dev-qwam0pm8hqpp05ts.us.auth0.com/api/v2/",e.next=5,u.Z.get("https://dev-qwam0pm8hqpp05ts.us.auth0.com/api/v2/",{headers:{Authorization:"Bearer ".concat("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InRwSXR3TTc4aHZvMkpyV1ozRnFtaSJ9.eyJpc3MiOiJodHRwczovL2Rldi1xd2FtMHBtOGhxcHAwNXRzLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJTc1d3MEFVNzh0MWdVV3hTb2J1WHNkZ3hTNDN2QWJEMUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9kZXYtcXdhbTBwbThocXBwMDV0cy51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTY4NDIzMDI2NywiZXhwIjoxNjg0MzE2NjY3LCJhenAiOiJTc1d3MEFVNzh0MWdVV3hTb2J1WHNkZ3hTNDN2QWJEMSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.SXsBNNQnEbRBo_aU6moUJEmfguWQifiXJtBqW71nKqk_FBU2mHPkIXsF0CkHSAYPVlRW1XVQnWj8zCfiFBFRo5d6EXrk-EC9J1MrD4omFqQ22NFmNuVkQ6A7KScPva9CUkBnzMZZE0bINow0h2WC27LBHt_CtcbxiiFwjp3GgcNXaEIWUhwM641AVELDP80p2O8ZU6n-oRHUE_2kApFdJLF2IxC7a0XO7b0camHDmwl1VDBFQ474zhStXjygw-4CTWmi-8Ovi03bLwqKVtXBHwJmZIVjfOwS4TvbXrVNXnroVMfdbDiB11u6h7UXI23urrJa0AnZC_KGCyqHuoi2ZQ")}});case 5:t=e.sent,s(t.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"User List"}),(0,h.jsx)("ul",{children:r.map((function(e){return(0,h.jsx)("li",{children:e.email},e.user_id)}))})]})},m=function(){var e=(0,s.v9)((function(e){return e.getAllUsersReducer})),t=e.loading,r=e.error,o=e.users,d=(0,s.I0)();(0,n.useEffect)((function(){d((0,c.AW)())}),[d]);var l=function(e){return(e+1).toString()},u=o?o.length:0;return(0,h.jsxs)(h.Fragment,{children:[t&&(0,h.jsxs)("div",{children:[" ",(0,h.jsx)(i.Z,{})," "]}),r&&(0,h.jsx)("div",{error:"Error While Fetching Users"}),(0,h.jsxs)("div",{className:"bg-white shadow-md rounded-md overflow-hidden",children:[(0,h.jsx)("h1",{className:"text-2xl font-bold p-4",children:"User List"}),(0,h.jsxs)("table",{className:"table-auto w-full text-center",children:[(0,h.jsx)("thead",{className:"bg-gray-800 text-white",children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{className:"px-4 py-2",children:"#"}),(0,h.jsx)("th",{className:"px-4 py-2",children:"User ID"}),(0,h.jsx)("th",{className:"px-4 py-2",children:"Name"}),(0,h.jsx)("th",{className:"px-4 py-2",children:"Admin"}),(0,h.jsx)("th",{className:"px-4 py-2",children:"Email"}),(0,h.jsx)("th",{className:"px-4 py-2",children:"createdAt"}),(0,h.jsx)("th",{className:"px-4 py-2",children:"Delete"})]})}),(0,h.jsx)("tbody",{className:"text-gray-700",children:o&&o.map((function(e,t){return(0,h.jsxs)("tr",{className:t%2===0?"bg-gray-200":"",children:[(0,h.jsx)("td",{className:"border px-4 py-2",children:l(t)}),(0,h.jsx)("td",{className:"border px-4 py-2",children:e._id}),(0,h.jsx)("td",{className:"border px-4 py-2",children:e.name}),(0,h.jsx)("td",{className:"border px-4 py-2",children:e.isAdmin?"Yes":"No"}),(0,h.jsx)("td",{className:"border px-4 py-2",children:e.email}),(0,h.jsxs)("td",{className:"border px-4 py-2",children:[new Date(e.createdAt).getDate()," ",new Date(e.createdAt).toLocaleString("default",{month:"long"})]}),(0,h.jsx)("td",{className:"border px-4 py-2",children:(0,h.jsx)(a.YK6,{className:"text-red-600 hover:text-red-800 cursor-pointer",onClick:function(){d((0,c.h8)(e._id))}})})]},e._id)}))})]}),(0,h.jsxs)("div",{className:"mb-4",children:["Total Users: ",u]}),(0,h.jsx)(p,{})]})]})}},4822:function(e,t,r){r.d(t,{AW:function(){return l},TX:function(){return d},a$:function(){return o},h8:function(){return u}});var n=r(4165),s=r(5861),a=r(1243),c=r(2062),i=r.n(c),o=function(e){return function(){var t=(0,s.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"USER_REGISTER_REQUEST"}),t.prev=1,t.next=4,a.Z.post("/api/users/register",e);case 4:r({type:"USER_REGISTER_SUCCESS"}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),t.t0.response&&t.t0.response.data?r({type:"USER_REGISTER_FAIL",payload:t.t0.response.data}):r({type:"USER_REGISTER_FAIL",payload:"An error occurred. Please try again."});case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()},d=function(){return function(e){localStorage.removeItem("currentUser"),window.location.href="/login"}},l=function(){return function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_USERS_REQUEST"}),e.prev=1,e.next=4,a.Z.get("/api/users/getallusers");case 4:r=e.sent,t({type:"GET_USERS_SUCCESS",payload:r.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"GET_USERS_FAIL",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},u=function(e){return function(){var t=(0,s.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.Z.post("/api/users/deleteuser",{userid:e});case 3:i()("User Deleted Succss!","success"),window.location.reload(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),i()("Errro While Deleteing User");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=2500.7af19fef.chunk.js.map