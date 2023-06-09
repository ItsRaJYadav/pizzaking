"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6983],{6983:function(t,e,n){n.d(e,{Z:function(){return b}});var s=n(7462),a=n(3366),i=n(4578);function o(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var r=n(2791),p=n(4164),l=!1,u=n(5545),c=function(t){return t.scrollTop},d="unmounted",f="exited",E="entering",h="entered",m="exiting",x=function(t){function e(e,n){var s;s=t.call(this,e,n)||this;var a,i=n&&!n.isMounting?e.enter:e.appear;return s.appearStatus=null,e.in?i?(a=f,s.appearStatus=E):a=h:a=e.unmountOnExit||e.mountOnEnter?d:f,s.state={status:a},s.nextCallback=null,s}(0,i.Z)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===d?{status:f}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==E&&n!==h&&(e=E):n!==E&&n!==h||(e=m)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,s=this.props.timeout;return t=e=n=s,null!=s&&"number"!==typeof s&&(t=s.exit,e=s.enter,n=void 0!==s.appear?s.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e)if(this.cancelNextCallback(),e===E){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:p.findDOMNode(this);n&&c(n)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===f&&this.setState({status:d})},n.performEnter=function(t){var e=this,n=this.props.enter,s=this.context?this.context.isMounting:t,a=this.props.nodeRef?[s]:[p.findDOMNode(this),s],i=a[0],o=a[1],r=this.getTimeouts(),u=s?r.appear:r.enter;!t&&!n||l?this.safeSetState({status:h},(function(){e.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:E},(function(){e.props.onEntering(i,o),e.onTransitionEnd(u,(function(){e.safeSetState({status:h},(function(){e.props.onEntered(i,o)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),s=this.props.nodeRef?void 0:p.findDOMNode(this);e&&!l?(this.props.onExit(s),this.safeSetState({status:m},(function(){t.props.onExiting(s),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:f},(function(){t.props.onExited(s)}))}))}))):this.safeSetState({status:f},(function(){t.props.onExited(s)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(s){n&&(n=!1,e.nextCallback=null,t(s))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:p.findDOMNode(this),s=null==t&&!this.props.addEndListener;if(n&&!s){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=a[0],o=a[1];this.props.addEndListener(i,o)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===d)return null;var e=this.props,n=e.children,s=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,(0,a.Z)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(u.Z.Provider,{value:null},"function"===typeof n?n(t,s):r.cloneElement(r.Children.only(n),s))},e}(r.Component);function v(){}x.contextType=u.Z,x.propTypes={},x.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:v,onEntering:v,onEntered:v,onExit:v,onExiting:v,onExited:v},x.UNMOUNTED=d,x.EXITED=f,x.ENTERING=E,x.ENTERED=h,x.EXITING=m;var C=x,g=function(t,e){return t&&e&&e.split(" ").forEach((function(e){return s=e,void((n=t).classList?n.classList.remove(s):"string"===typeof n.className?n.className=o(n.className,s):n.setAttribute("class",o(n.className&&n.className.baseVal||"",s)));var n,s}))},N=function(t){function e(){for(var e,n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))||this).appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(t,n){var s=e.resolveArguments(t,n),a=s[0],i=s[1];e.removeClasses(a,"exit"),e.addClass(a,i?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(t,n)},e.onEntering=function(t,n){var s=e.resolveArguments(t,n),a=s[0],i=s[1]?"appear":"enter";e.addClass(a,i,"active"),e.props.onEntering&&e.props.onEntering(t,n)},e.onEntered=function(t,n){var s=e.resolveArguments(t,n),a=s[0],i=s[1]?"appear":"enter";e.removeClasses(a,i),e.addClass(a,i,"done"),e.props.onEntered&&e.props.onEntered(t,n)},e.onExit=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"appear"),e.removeClasses(n,"enter"),e.addClass(n,"exit","base"),e.props.onExit&&e.props.onExit(t)},e.onExiting=function(t){var n=e.resolveArguments(t)[0];e.addClass(n,"exit","active"),e.props.onExiting&&e.props.onExiting(t)},e.onExited=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"exit"),e.addClass(n,"exit","done"),e.props.onExited&&e.props.onExited(t)},e.resolveArguments=function(t,n){return e.props.nodeRef?[e.props.nodeRef.current,t]:[t,n]},e.getClassNames=function(t){var n=e.props.classNames,s="string"===typeof n,a=s?""+(s&&n?n+"-":"")+t:n[t];return{baseClassName:a,activeClassName:s?a+"-active":n[t+"Active"],doneClassName:s?a+"-done":n[t+"Done"]}},e}(0,i.Z)(e,t);var n=e.prototype;return n.addClass=function(t,e,n){var s=this.getClassNames(e)[n+"ClassName"],a=this.getClassNames("enter").doneClassName;"appear"===e&&"done"===n&&a&&(s+=" "+a),"active"===n&&t&&c(t),s&&(this.appliedClasses[e][n]=s,function(t,e){t&&e&&e.split(" ").forEach((function(e){return s=e,void((n=t).classList?n.classList.add(s):function(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}(n,s)||("string"===typeof n.className?n.className=n.className+" "+s:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+s)));var n,s}))}(t,s))},n.removeClasses=function(t,e){var n=this.appliedClasses[e],s=n.base,a=n.active,i=n.done;this.appliedClasses[e]={},s&&g(t,s),a&&g(t,a),i&&g(t,i)},n.render=function(){var t=this.props,e=(t.classNames,(0,a.Z)(t,["classNames"]));return r.createElement(C,(0,s.Z)({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(r.Component);N.defaultProps={classNames:""},N.propTypes={};var b=N},5545:function(t,e,n){var s=n(2791);e.Z=s.createContext(null)},4578:function(t,e,n){n.d(e,{Z:function(){return a}});var s=n(9611);function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,(0,s.Z)(t,e)}}}]);
//# sourceMappingURL=6983.b1ba086a.chunk.js.map