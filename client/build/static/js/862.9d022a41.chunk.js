"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[862],{2469:function(e,a,s){var i=s(1413),r=s(5987),l=s(1694),o=s.n(l),t=s(2791),n=s(239),c=s(9007),d=s(6445),f=s(162),v=s(2709),m=s(473),u=s(7472),p=s(6543),b=s(184),x=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],Z=(0,u.Z)("h4");Z.displayName="DivStyledAsH4";var h=(0,p.Z)("alert-heading",{Component:Z}),N=(0,p.Z)("alert-link",{Component:d.Z}),y={variant:"primary",show:!0,transition:v.Z,closeLabel:"Close alert"},j=t.forwardRef((function(e,a){var s=(0,n.Ch)(e,{show:"onClose"}),l=s.bsPrefix,t=s.show,d=s.closeLabel,u=s.closeVariant,p=s.className,Z=s.children,h=s.variant,N=s.onClose,y=s.dismissible,j=s.transition,w=(0,r.Z)(s,x),P=(0,f.vE)(l,"alert"),I=(0,c.Z)((function(e){N&&N(!1,e)})),k=!0===j?v.Z:j,C=(0,b.jsxs)("div",(0,i.Z)((0,i.Z)({role:"alert"},k?void 0:w),{},{ref:a,className:o()(p,P,h&&"".concat(P,"-").concat(h),y&&"".concat(P,"-dismissible")),children:[y&&(0,b.jsx)(m.Z,{onClick:I,"aria-label":d,variant:u}),Z]}));return k?(0,b.jsx)(k,(0,i.Z)((0,i.Z)({unmountOnExit:!0},w),{},{ref:void 0,in:t,children:C})):t?C:null}));j.displayName="Alert",j.defaultProps=y,a.Z=Object.assign(j,{Link:N,Heading:h})},2677:function(e,a,s){var i=s(9439),r=s(1413),l=s(5987),o=s(1694),t=s.n(o),n=s(2791),c=s(162),d=s(184),f=["as","bsPrefix","className"],v=["className"];var m=n.forwardRef((function(e,a){var s=function(e){var a=e.as,s=e.bsPrefix,i=e.className,o=(0,l.Z)(e,f);s=(0,c.vE)(s,"col");var n=(0,c.pi)(),d=(0,c.zG)(),v=[],m=[];return n.forEach((function(e){var a,i,r,l=o[e];delete o[e],"object"===typeof l&&null!=l?(a=l.span,i=l.offset,r=l.order):a=l;var t=e!==d?"-".concat(e):"";a&&v.push(!0===a?"".concat(s).concat(t):"".concat(s).concat(t,"-").concat(a)),null!=r&&m.push("order".concat(t,"-").concat(r)),null!=i&&m.push("offset".concat(t,"-").concat(i))})),[(0,r.Z)((0,r.Z)({},o),{},{className:t().apply(void 0,[i].concat(v,m))}),{as:a,bsPrefix:s,spans:v}]}(e),o=(0,i.Z)(s,2),n=o[0],m=n.className,u=(0,l.Z)(n,v),p=o[1],b=p.as,x=void 0===b?"div":b,Z=p.bsPrefix,h=p.spans;return(0,d.jsx)(x,(0,r.Z)((0,r.Z)({},u),{},{ref:a,className:t()(m,!h.length&&Z)}))}));m.displayName="Col",a.Z=m},3855:function(e,a,s){s.d(a,{Z:function(){return ae}});var i=s(1413),r=s(5987),l=s(1694),o=s.n(l),t=s(2007),n=s.n(t),c=s(2791),d=s(184),f=["as","className","type","tooltip"],v={type:n().string,tooltip:n().bool,as:n().elementType},m=c.forwardRef((function(e,a){var s=e.as,l=void 0===s?"div":s,t=e.className,n=e.type,c=void 0===n?"valid":n,v=e.tooltip,m=void 0!==v&&v,u=(0,r.Z)(e,f);return(0,d.jsx)(l,(0,i.Z)((0,i.Z)({},u),{},{ref:a,className:o()(t,"".concat(c,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=v;var u=m,p=c.createContext({}),b=s(162),x=["id","bsPrefix","className","type","isValid","isInvalid","as"],Z=c.forwardRef((function(e,a){var s=e.id,l=e.bsPrefix,t=e.className,n=e.type,f=void 0===n?"checkbox":n,v=e.isValid,m=void 0!==v&&v,u=e.isInvalid,Z=void 0!==u&&u,h=e.as,N=void 0===h?"input":h,y=(0,r.Z)(e,x),j=(0,c.useContext)(p).controlId;return l=(0,b.vE)(l,"form-check-input"),(0,d.jsx)(N,(0,i.Z)((0,i.Z)({},y),{},{ref:a,type:f,id:s||j,className:o()(t,l,m&&"is-valid",Z&&"is-invalid")}))}));Z.displayName="FormCheckInput";var h=Z,N=["bsPrefix","className","htmlFor"],y=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,t=e.htmlFor,n=(0,r.Z)(e,N),f=(0,c.useContext)(p).controlId;return s=(0,b.vE)(s,"form-check-label"),(0,d.jsx)("label",(0,i.Z)((0,i.Z)({},n),{},{ref:a,htmlFor:t||f,className:o()(l,s)}))}));y.displayName="FormCheckLabel";var j=y;var w=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],P=c.forwardRef((function(e,a){var s=e.id,l=e.bsPrefix,t=e.bsSwitchPrefix,n=e.inline,f=void 0!==n&&n,v=e.reverse,m=void 0!==v&&v,x=e.disabled,Z=void 0!==x&&x,N=e.isValid,y=void 0!==N&&N,P=e.isInvalid,I=void 0!==P&&P,k=e.feedbackTooltip,C=void 0!==k&&k,F=e.feedback,g=e.feedbackType,R=e.className,E=e.style,z=e.title,L=void 0===z?"":z,V=e.type,S=void 0===V?"checkbox":V,T=e.label,O=e.children,H=e.as,G=void 0===H?"input":H,A=(0,r.Z)(e,w);l=(0,b.vE)(l,"form-check"),t=(0,b.vE)(t,"form-switch");var M=(0,c.useContext)(p).controlId,D=(0,c.useMemo)((function(){return{controlId:s||M}}),[M,s]),_=!O&&null!=T&&!1!==T||function(e,a){return c.Children.toArray(e).some((function(e){return c.isValidElement(e)&&e.type===a}))}(O,j),q=(0,d.jsx)(h,(0,i.Z)((0,i.Z)({},A),{},{type:"switch"===S?"checkbox":S,ref:a,isValid:y,isInvalid:I,disabled:Z,as:G}));return(0,d.jsx)(p.Provider,{value:D,children:(0,d.jsx)("div",{style:E,className:o()(R,_&&l,f&&"".concat(l,"-inline"),m&&"".concat(l,"-reverse"),"switch"===S&&t),children:O||(0,d.jsxs)(d.Fragment,{children:[q,_&&(0,d.jsx)(j,{title:L,children:T}),F&&(0,d.jsx)(u,{type:g,tooltip:C,children:F})]})})})}));P.displayName="FormCheck";var I=Object.assign(P,{Input:h,Label:j}),k=s(4942),C=(s(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),F=c.forwardRef((function(e,a){var s,l,t=e.bsPrefix,n=e.type,f=e.size,v=e.htmlSize,m=e.id,u=e.className,x=e.isValid,Z=void 0!==x&&x,h=e.isInvalid,N=void 0!==h&&h,y=e.plaintext,j=e.readOnly,w=e.as,P=void 0===w?"input":w,I=(0,r.Z)(e,C),F=(0,c.useContext)(p).controlId;(t=(0,b.vE)(t,"form-control"),y)?s=(0,k.Z)({},"".concat(t,"-plaintext"),!0):(l={},(0,k.Z)(l,t,!0),(0,k.Z)(l,"".concat(t,"-").concat(f),f),s=l);return(0,d.jsx)(P,(0,i.Z)((0,i.Z)({},I),{},{type:n,size:v,ref:a,readOnly:j,id:m||F,className:o()(u,s,Z&&"is-valid",N&&"is-invalid","color"===n&&"".concat(t,"-color"))}))}));F.displayName="FormControl";var g=Object.assign(F,{Feedback:u}),R=(0,s(6543).Z)("form-floating"),E=["controlId","as"],z=c.forwardRef((function(e,a){var s=e.controlId,l=e.as,o=void 0===l?"div":l,t=(0,r.Z)(e,E),n=(0,c.useMemo)((function(){return{controlId:s}}),[s]);return(0,d.jsx)(p.Provider,{value:n,children:(0,d.jsx)(o,(0,i.Z)((0,i.Z)({},t),{},{ref:a}))})}));z.displayName="FormGroup";var L=z,V=s(2677),S=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],T=c.forwardRef((function(e,a){var s=e.as,l=void 0===s?"label":s,t=e.bsPrefix,n=e.column,f=e.visuallyHidden,v=e.className,m=e.htmlFor,u=(0,r.Z)(e,S),x=(0,c.useContext)(p).controlId;t=(0,b.vE)(t,"form-label");var Z="col-form-label";"string"===typeof n&&(Z="".concat(Z," ").concat(Z,"-").concat(n));var h=o()(v,t,f&&"visually-hidden",n&&Z);return m=m||x,n?(0,d.jsx)(V.Z,(0,i.Z)({ref:a,as:"label",className:h,htmlFor:m},u)):(0,d.jsx)(l,(0,i.Z)({ref:a,className:h,htmlFor:m},u))}));T.displayName="FormLabel",T.defaultProps={column:!1,visuallyHidden:!1};var O=T,H=["bsPrefix","className","id"],G=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,t=e.id,n=(0,r.Z)(e,H),f=(0,c.useContext)(p).controlId;return s=(0,b.vE)(s,"form-range"),(0,d.jsx)("input",(0,i.Z)((0,i.Z)({},n),{},{type:"range",ref:a,className:o()(l,s),id:t||f}))}));G.displayName="FormRange";var A=G,M=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],D=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.size,t=e.htmlSize,n=e.className,f=e.isValid,v=void 0!==f&&f,m=e.isInvalid,u=void 0!==m&&m,x=e.id,Z=(0,r.Z)(e,M),h=(0,c.useContext)(p).controlId;return s=(0,b.vE)(s,"form-select"),(0,d.jsx)("select",(0,i.Z)((0,i.Z)({},Z),{},{size:t,ref:a,className:o()(n,s,l&&"".concat(s,"-").concat(l),v&&"is-valid",u&&"is-invalid"),id:x||h}))}));D.displayName="FormSelect";var _=D,q=["bsPrefix","className","as","muted"],B=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,t=e.as,n=void 0===t?"small":t,c=e.muted,f=(0,r.Z)(e,q);return s=(0,b.vE)(s,"form-text"),(0,d.jsx)(n,(0,i.Z)((0,i.Z)({},f),{},{ref:a,className:o()(l,s,c&&"text-muted")}))}));B.displayName="FormText";var J=B,K=c.forwardRef((function(e,a){return(0,d.jsx)(I,(0,i.Z)((0,i.Z)({},e),{},{ref:a,type:"switch"}))}));K.displayName="Switch";var Q=Object.assign(K,{Input:I.Input,Label:I.Label}),U=["bsPrefix","className","children","controlId","label"],W=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,t=e.children,n=e.controlId,c=e.label,f=(0,r.Z)(e,U);return s=(0,b.vE)(s,"form-floating"),(0,d.jsxs)(L,(0,i.Z)((0,i.Z)({ref:a,className:o()(l,s),controlId:n},f),{},{children:[t,(0,d.jsx)("label",{htmlFor:n,children:c})]}))}));W.displayName="FloatingLabel";var X=W,Y=["className","validated","as"],$={_ref:n().any,validated:n().bool,as:n().elementType},ee=c.forwardRef((function(e,a){var s=e.className,l=e.validated,t=e.as,n=void 0===t?"form":t,c=(0,r.Z)(e,Y);return(0,d.jsx)(n,(0,i.Z)((0,i.Z)({},c),{},{ref:a,className:o()(s,l&&"was-validated")}))}));ee.displayName="Form",ee.propTypes=$;var ae=Object.assign(ee,{Group:L,Control:g,Floating:R,Check:I,Switch:Q,Label:O,Text:J,Range:A,Select:_,FloatingLabel:X})},9743:function(e,a,s){var i=s(1413),r=s(5987),l=s(1694),o=s.n(l),t=s(2791),n=s(162),c=s(184),d=["bsPrefix","className","as"],f=t.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,t=e.as,f=void 0===t?"div":t,v=(0,r.Z)(e,d),m=(0,n.vE)(s,"row"),u=(0,n.pi)(),p=(0,n.zG)(),b="".concat(m,"-cols"),x=[];return u.forEach((function(e){var a,s=v[e];delete v[e],a=null!=s&&"object"===typeof s?s.cols:s;var i=e!==p?"-".concat(e):"";null!=a&&x.push("".concat(b).concat(i,"-").concat(a))})),(0,c.jsx)(f,(0,i.Z)((0,i.Z)({ref:a},v),{},{className:o().apply(void 0,[l,m].concat(x))}))}));f.displayName="Row",a.Z=f}}]);
//# sourceMappingURL=862.9d022a41.chunk.js.map