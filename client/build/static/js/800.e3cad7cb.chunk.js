"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[800],{3360:function(e,t,n){var o=n(1413),a=n(9439),r=n(5987),s=n(1694),i=n.n(s),l=n(2791),p=n(5341),c=n(162),d=n(184),u=["as","bsPrefix","variant","size","active","className"],f=l.forwardRef((function(e,t){var n=e.as,s=e.bsPrefix,l=e.variant,f=e.size,h=e.active,g=e.className,b=(0,r.Z)(e,u),v=(0,c.vE)(s,"btn"),m=(0,p.FT)((0,o.Z)({tagName:n},b)),y=(0,a.Z)(m,2),C=y[0],S=y[1].tagName;return(0,d.jsx)(S,(0,o.Z)((0,o.Z)((0,o.Z)({},C),b),{},{ref:t,className:i()(g,v,h&&"active",l&&"".concat(v,"-").concat(l),f&&"".concat(v,"-").concat(f),b.href&&b.disabled&&"disabled")}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=f},8210:function(e,t,n){var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=i(n(2791)),s=i(n(2007));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=!1,c=!1,d=!1,u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onScriptLoaded=function(){t.stripeHandler||(t.stripeHandler=StripeCheckout.configure({key:n.props.stripeKey}),n.hasPendingClick&&n.showStripeDialog())},n.onScriptError=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];n.hideLoadingDialog(),n.props.onScriptError&&n.props.onScriptError.apply(n,t)},n.onClosed=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];n._isMounted&&n.setState({open:!1}),n.props.closed&&n.props.closed.apply(n,t)},n.onOpened=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];n.setState({open:!0}),n.props.opened&&n.props.opened.apply(n,t)},n.getConfig=function(){return["token","image","name","description","amount","locale","currency","panelLabel","zipCode","shippingAddress","billingAddress","email","allowRememberMe","bitcoin","alipay","alipayReusable"].reduce((function(e,t){return o({},e,n.props.hasOwnProperty(t)&&l({},t,n.props[t]))}),{opened:n.onOpened,closed:n.onClosed})},n.onClick=function(){if(!n.props.disabled)if(d)try{throw new Error("Tried to call onClick, but StripeCheckout failed to load")}catch(e){}else t.stripeHandler?n.showStripeDialog():(n.showLoadingDialog(),n.hasPendingClick=!0)},n.handleOnMouseDown=function(){n.setState({buttonActive:!0})},n.handleOnMouseUp=function(){n.setState({buttonActive:!1})},n.state={open:!1,buttonActive:!1},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this;if(this._isMounted=!0,!c&&!p){p=!0;var t=document.createElement("script");"function"===typeof this.props.onScriptTagCreated&&this.props.onScriptTagCreated(t),t.src="https://checkout.stripe.com/checkout.js",t.async=1,this.loadPromise=function(){var n=!1,o=new Promise((function(n,o){t.onload=function(){c=!0,p=!1,n(),e.onScriptLoaded()},t.onerror=function(t){d=!0,p=!1,o(t),e.onScriptError(t)}}));return{promise:new Promise((function(e,t){o.then((function(){return n?t({isCanceled:!0}):e()})),o.catch((function(e){return t(n?{isCanceled:!0}:e)}))})),cancel:function(){n=!0}}}(),this.loadPromise.promise.then(this.onScriptLoaded).catch(this.onScriptError),document.body.appendChild(t)}}},{key:"componentDidUpdate",value:function(){p||this.updateStripeHandler()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.loadPromise&&this.loadPromise.cancel(),t.stripeHandler&&this.state.open&&t.stripeHandler.close()}},{key:"updateStripeHandler",value:function(){t.stripeHandler&&!this.props.reconfigureOnUpdate||(t.stripeHandler=StripeCheckout.configure({key:this.props.stripeKey}))}},{key:"showLoadingDialog",value:function(){if(this.props.showLoadingDialog){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.props.showLoadingDialog.apply(this,t)}}},{key:"hideLoadingDialog",value:function(){if(this.props.hideLoadingDialog){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.props.hideLoadingDialog.apply(this,t)}}},{key:"showStripeDialog",value:function(){this.hideLoadingDialog(),t.stripeHandler.open(this.getConfig())}},{key:"renderDefaultStripeButton",value:function(){return r.default.createElement("button",o({},l({},this.props.triggerEvent,this.onClick),{className:this.props.className,onMouseDown:this.handleOnMouseDown,onFocus:this.handleOnMouseDown,onMouseUp:this.handleOnMouseUp,onMouseOut:this.handleOnMouseUp,onBlur:this.handleOnMouseUp,style:o({},{overflow:"hidden",display:"inline-block",background:"linear-gradient(#28a0e5,#015e94)",border:0,padding:1,textDecoration:"none",borderRadius:5,boxShadow:"0 1px 0 rgba(0,0,0,0.2)",cursor:"pointer",visibility:"visible",userSelect:"none"},this.state.buttonActive&&{background:"#005d93"},this.props.style)}),r.default.createElement("span",{style:o({},{backgroundImage:"linear-gradient(#7dc5ee,#008cdd 85%,#30a2e4)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",color:"#fff",fontWeight:"bold",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",textShadow:"0 -1px 0 rgba(0,0,0,0.25)",borderRadius:4},this.state.buttonActive&&{color:"#eee",boxShadow:"inset 0 1px 0 rgba(0,0,0,0.1)",backgroundImage:"linear-gradient(#008cdd,#008cdd 85%,#239adf)"},this.props.textStyle)},this.props.label))}},{key:"renderDisabledButton",value:function(){return r.default.createElement("button",{disabled:!0,style:{background:"rgba(0,0,0,0.2)",overflow:"hidden",display:"inline-block",border:0,padding:1,textDecoration:"none",borderRadius:5,userSelect:"none"}},r.default.createElement("span",{style:{boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",borderRadius:4,color:"#999",background:"#f8f9fa",textShadow:"0 1px 0 rgba(255,255,255,0.5)"}},this.props.label))}},{key:"render",value:function(){!0!==this.props.desktopShowModal||this.state.open?!1===this.props.desktopShowModal&&this.state.open&&t.stripeHandler.close():this.onClick();var e=this.props.ComponentClass;return this.props.children?r.default.createElement(e,o({},l({},this.props.triggerEvent,this.onClick),{children:this.props.children})):this.props.disabled?this.renderDisabledButton():this.renderDefaultStripeButton()}}]),t}(r.default.Component);u.defaultProps={className:"StripeCheckout",label:"Pay With Card",locale:"auto",ComponentClass:"span",reconfigureOnUpdate:!1,triggerEvent:"onClick"},u.propTypes={desktopShowModal:s.default.bool,triggerEvent:s.default.oneOf(["onClick","onTouchTap","onTouchStart"]),label:s.default.string,style:s.default.object,textStyle:s.default.object,disabled:s.default.bool,ComponentClass:s.default.string,showLoadingDialog:s.default.func,hideLoadingDialog:s.default.func,onScriptError:s.default.func,onScriptTagCreated:s.default.func,reconfigureOnUpdate:s.default.bool,stripeKey:s.default.string.isRequired,token:s.default.func.isRequired,name:s.default.string,description:s.default.string,image:s.default.string,amount:s.default.number,locale:s.default.oneOf(["auto","zh","da","nl","en","fr","de","it","ja","no","es","sv"]),currency:s.default.oneOf(["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BIF","BMD","BND","BOB","BRL","BSD","BWP","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CVE","CZK","DJF","DKK","DOP","DZD","EEK","EGP","ETB","EUR","FJD","FKP","GBP","GEL","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","ISK","JMD","JPY","KES","KGS","KHR","KMF","KRW","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","MAD","MDL","MGA","MKD","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SZL","THB","TJS","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VND","VUV","WST","XAF","XCD","XOF","XPF","YER","ZAR","ZMW"]),panelLabel:s.default.string,zipCode:s.default.bool,billingAddress:s.default.bool,shippingAddress:s.default.bool,email:s.default.string,allowRememberMe:s.default.bool,bitcoin:s.default.bool,alipay:s.default.oneOf(["auto",!0,!1]),alipayReusable:s.default.bool,opened:s.default.func,closed:s.default.func},u._isMounted=!1,t.Z=u},6674:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(7462),a=n(3366),r=n(4578);function s(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var i=n(2791),l=n(8875),p=n(8852),c=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return o=t,void((n=e).classList?n.classList.remove(o):"string"===typeof n.className?n.className=s(n.className,o):n.setAttribute("class",s(n.className&&n.className.baseVal||"",o)));var n,o}))},d=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var o=t.resolveArguments(e,n),a=o[0],r=o[1];t.removeClasses(a,"exit"),t.addClass(a,r?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var o=t.resolveArguments(e,n),a=o[0],r=o[1]?"appear":"enter";t.addClass(a,r,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var o=t.resolveArguments(e,n),a=o[0],r=o[1]?"appear":"enter";t.removeClasses(a,r),t.addClass(a,r,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,o="string"===typeof n,a=o?""+(o&&n?n+"-":"")+e:n[e];return{baseClassName:a,activeClassName:o?a+"-active":n[e+"Active"],doneClassName:o?a+"-done":n[e+"Done"]}},t}(0,r.Z)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var o=this.getClassNames(t)[n+"ClassName"],a=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&a&&(o+=" "+a),"active"===n&&e&&(0,p.Q)(e),o&&(this.appliedClasses[t][n]=o,function(e,t){e&&t&&t.split(" ").forEach((function(t){return o=t,void((n=e).classList?n.classList.add(o):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,o)||("string"===typeof n.className?n.className=n.className+" "+o:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+o)));var n,o}))}(e,o))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],o=n.base,a=n.active,r=n.done;this.appliedClasses[t]={},o&&c(e,o),a&&c(e,a),r&&c(e,r)},n.render=function(){var e=this.props,t=(e.classNames,(0,a.Z)(e,["classNames"]));return i.createElement(l.ZP,(0,o.Z)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(i.Component);d.defaultProps={classNames:""},d.propTypes={};var u=d}}]);
//# sourceMappingURL=800.e3cad7cb.chunk.js.map