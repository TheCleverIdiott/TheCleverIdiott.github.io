"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[209],{808:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function a(e){return e&&e.__esModule?e:{default:e}}var s=n(791),u=a(s),l=a(n(7)),i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,n){for(var r=!0;r;){var o=e,a=t,s=n;r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,a);if(void 0!==u){if("value"in u)return u.value;var l=u.get;if(void 0===l)return;return l.call(s)}var i=Object.getPrototypeOf(o);if(null===i)return;e=i,t=a,n=s,r=!0,u=i=void 0}}(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state={hover:!1}}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"getLineStyle",value:function(e){return r({position:"absolute",height:"20%",left:0,right:0,top:2*e*20+"%",opacity:this.state.hover?.6:1},this.state.hover&&this.props.styles.bmBurgerBarsHover)}},{key:"render",value:function(){var e=this,t=void 0;if(this.props.customIcon){var n={className:("bm-icon "+(this.props.customIcon.props.className||"")).trim(),style:r({width:"100%",height:"100%"},this.props.styles.bmIcon)};t=u.default.cloneElement(this.props.customIcon,n)}else t=u.default.createElement("span",null,[0,1,2].map((function(t){return u.default.createElement("span",{key:t,className:("bm-burger-bars "+e.props.barClassName+" "+(e.state.hover?"bm-burger-bars-hover":"")).trim(),style:r({},e.getLineStyle(t),e.props.styles.bmBurgerBars)})})));return u.default.createElement("div",{className:("bm-burger-button "+this.props.className).trim(),style:r({zIndex:1e3},this.props.styles.bmBurgerButton)},u.default.createElement("button",{type:"button",id:"react-burger-menu-btn",onClick:this.props.onClick,onMouseOver:function(){e.setState({hover:!0}),e.props.onIconHoverChange&&e.props.onIconHoverChange({isMouseIn:!0})},onMouseOut:function(){e.setState({hover:!1}),e.props.onIconHoverChange&&e.props.onIconHoverChange({isMouseIn:!1})},style:{position:"absolute",left:0,top:0,zIndex:1,width:"100%",height:"100%",margin:0,padding:0,border:"none",fontSize:0,background:"transparent",cursor:"pointer"}},"Open Menu"),t)}}]),t}(s.Component);t.default=i,i.propTypes={barClassName:l.default.string,customIcon:l.default.element,styles:l.default.object},i.defaultProps={barClassName:"",className:"",styles:{}},e.exports=t.default},869:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e,t,n){for(var r=!0;r;){var o=e,a=t,s=n;r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,a);if(void 0!==u){if("value"in u)return u.value;var l=u.get;if(void 0===l)return;return l.call(s)}var i=Object.getPrototypeOf(o);if(null===i)return;e=i,t=a,n=s,r=!0,u=i=void 0}};function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var l=n(791),i=s(l),c=s(n(7)),f=function(e){function t(){u(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"getCrossStyle",value:function(e){return{position:"absolute",width:3,height:14,transform:"before"===e?"rotate(45deg)":"rotate(-45deg)"}}},{key:"render",value:function(){var e,t=this;if(this.props.customIcon){var n={className:("bm-cross "+(this.props.customIcon.props.className||"")).trim(),style:r({width:"100%",height:"100%"},this.props.styles.bmCross)};e=i.default.cloneElement(this.props.customIcon,n)}else e=i.default.createElement("span",{style:{position:"absolute",top:"6px",right:"14px"}},["before","after"].map((function(e,n){return i.default.createElement("span",{key:n,className:("bm-cross "+t.props.crossClassName).trim(),style:r({},t.getCrossStyle(e),t.props.styles.bmCross)})})));return i.default.createElement("div",{className:("bm-cross-button "+this.props.className).trim(),style:r({},{position:"absolute",width:24,height:24,right:8,top:8},this.props.styles.bmCrossButton)},i.default.createElement("button",r({type:"button",id:"react-burger-cross-btn",onClick:this.props.onClick,style:{position:"absolute",left:0,top:0,zIndex:1,width:"100%",height:"100%",margin:0,padding:0,border:"none",fontSize:0,background:"transparent",cursor:"pointer"}},!this.props.isOpen&&{tabIndex:-1}),"Close Menu"),e)}}]),t}(l.Component);t.default=f,f.propTypes={crossClassName:c.default.string,customIcon:c.default.element,isOpen:c.default.bool,styles:c.default.object},f.defaultProps={crossClassName:"",className:"",styles:{},isOpen:!1},e.exports=t.default},344:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});t.default={overlay:function(e){return{position:"fixed",zIndex:1e3,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.3)",opacity:e?1:0,MozTransform:e?"":"translate3d(100%, 0, 0)",MsTransform:e?"":"translate3d(100%, 0, 0)",OTransform:e?"":"translate3d(100%, 0, 0)",WebkitTransform:e?"":"translate3d(100%, 0, 0)",transform:e?"":"translate3d(100%, 0, 0)",transition:e?"opacity 0.3s":"opacity 0.3s, transform 0s 0.3s"}},menuWrap:function(e,t,n){return{position:"fixed",right:n?0:"inherit",zIndex:1100,width:t,height:"100%",MozTransform:e?"":n?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",MsTransform:e?"":n?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",OTransform:e?"":n?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",WebkitTransform:e?"":n?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transform:e?"":n?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transition:"all 0.5s"}},menu:function(){return{height:"100%",boxSizing:"border-box",overflow:"auto"}},itemList:function(){return{height:"100%"}},item:function(){return{display:"block"}}},e.exports=t.default},22:function(e,t){function n(){var e=Array.from(document.getElementsByClassName("bm-item")).shift();e&&e.focus()}function r(){var e=Array.from(document.getElementsByClassName("bm-item")).pop();e&&e.focus()}function o(){var e=document.getElementById("react-burger-cross-btn");e&&e.focus()}function a(e){if(document.activeElement.className.includes("bm-item")){var t=document.activeElement[e];t?t.focus():o()}else"previousElementSibling"===e?r():n()}Object.defineProperty(t,"__esModule",{value:!0}),t.focusOnFirstMenuItem=n,t.focusOnLastMenuItem=r,t.focusOnCrossButton=o,t.focusOnMenuButton=function(){var e=document.getElementById("react-burger-menu-btn");e&&e.focus()},t.focusOnMenuItem=a,t.focusOnNextMenuItem=function(){a("nextElementSibling")},t.focusOnPreviousMenuItem=function(){a("previousElementSibling")}},943:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var s,u=e[Symbol.iterator]();!(r=(s=u.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(l){o=!0,a=l}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function a(e){return e&&e.__esModule?e:{default:e}}var s=a(n(791)),u=(a(n(164)),a(n(7))),l=a(n(344)),i=n(22),c=a(n(808)),f=a(n(869));t.default=function(e){if(!e)throw new Error("No styles supplied");var t="ArrowDown",n="ArrowUp";var a=function(a){var u=s.default.useState(!1),m=r(u,2),d=m[0],p=m[1],b=s.default.useRef(),y=s.default.useRef({}),v=function(e){var t=s.default.useRef(e);return s.default.useEffect((function(){t.current=e})),t.current}(a.isOpen);function h(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];y.current=e,I(),setTimeout((function(){p((function(t){return"undefined"!==typeof e.isOpen?e.isOpen:!t}))}))}function g(){"function"===typeof a.onClose?a.onClose():h()}function C(e,t){var n=a.width,r=a.right;return e(d,"string"!==typeof n?n+"px":n,r,t)}function O(t,n,r){var s="bm"+t.replace(t.charAt(0),t.charAt(0).toUpperCase()),u=l.default[t]?C(l.default[t]):{};return e[t]&&(u=o({},u,C(e[t],n+1))),a.styles[s]&&(u=o({},u,a.styles[s])),r&&(u=o({},u,r)),a.noTransition&&delete u.transition,u}function N(e,t,n){var r=document.getElementById(e);if(r){var o=C(t);for(var s in o)o.hasOwnProperty(s)&&(r.style[s]=n?o[s]:"");var u=function(e){return e.style["overflow-x"]=n?"hidden":""};a.htmlClassName||u(document.querySelector("html")),a.bodyClassName||u(document.querySelector("body"))}else console.error("Element with ID '"+e+"' not found")}function I(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0],n=function(e,n){return e.classList[t?"add":"remove"](n)};a.htmlClassName&&n(document.querySelector("html"),a.htmlClassName),a.bodyClassName&&n(document.querySelector("body"),a.bodyClassName),e.pageWrap&&a.pageWrapId&&N(a.pageWrapId,e.pageWrap,t),e.outerContainer&&a.outerContainerId&&N(a.outerContainerId,e.outerContainer,t);var r=document.querySelector(".bm-menu-wrap");r&&(t?r.removeAttribute("hidden"):r.setAttribute("hidden",!0))}function w(){b.current&&clearTimeout(b.current)}function E(e){switch((e=e||window.event).key){case"Escape":a.disableCloseOnEsc||(g(),(0,i.focusOnMenuButton)());break;case t:(0,i.focusOnNextMenuItem)();break;case n:(0,i.focusOnPreviousMenuItem)();break;case"Home":(0,i.focusOnFirstMenuItem)();break;case"End":(0,i.focusOnLastMenuItem)()}}function k(e){if((e=e||window.event).target===document.getElementById("react-burger-menu-btn"))switch(e.key){case t:case" ":h();break;case n:h({focusOnLastItem:!0})}}return s.default.useEffect((function(){return a.isOpen&&h({isOpen:!0,noStateChange:!0}),function(){I(!1),w()}}),[]),s.default.useEffect((function(){"undefined"!==typeof a.isOpen&&a.isOpen!==d&&a.isOpen!==v?h():e.svg&&function(){var t=document.getElementById("bm-morph-shape"),n=e.svg.lib(t).select("path");d?e.svg.animate(n):setTimeout((function(){n.attr("d",e.svg.pathInitial)}),300)}()})),s.default.useEffect((function(){var e=y.current,t=e.noStateChange,n=e.focusOnLastItem;t||a.onStateChange({isOpen:d}),a.disableAutoFocus||(d?n?(0,i.focusOnLastMenuItem)():(0,i.focusOnFirstMenuItem)():document.activeElement?document.activeElement.blur():document.body.blur()),w(),b.current=setTimeout((function(){b.current=null,d||I(!1)}),500);var r=d?E:k,o=a.customOnKeyDown||r;return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}),[d]),s.default.createElement("div",null,!a.noOverlay&&s.default.createElement("div",{className:("bm-overlay "+a.overlayClassName).trim(),onClick:function(){!0===a.disableOverlayClick||"function"===typeof a.disableOverlayClick&&a.disableOverlayClick()||g()},style:O("overlay")}),!1!==a.customBurgerIcon&&s.default.createElement("div",{style:O("burgerIcon")},s.default.createElement(c.default,{onClick:function(){"function"===typeof a.onOpen?a.onOpen():h()},styles:a.styles,customIcon:a.customBurgerIcon,className:a.burgerButtonClassName,barClassName:a.burgerBarClassName,onIconStateChange:a.onIconStateChange})),s.default.createElement("div",{id:a.id,className:("bm-menu-wrap "+a.className).trim(),style:O("menuWrap"),"aria-hidden":!d},e.svg&&s.default.createElement("div",{id:"bm-morph-shape",className:("bm-morph-shape "+a.morphShapeClassName).trim(),style:O("morphShape")},s.default.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 100 800",preserveAspectRatio:"none"},s.default.createElement("path",{d:e.svg.pathInitial}))),s.default.createElement("div",{className:("bm-menu "+a.menuClassName).trim(),style:O("menu")},s.default.createElement(a.itemListElement,{className:("bm-item-list "+a.itemListClassName).trim(),style:O("itemList")},s.default.Children.map(a.children,(function(e,t){if(e){var n=["bm-item",a.itemClassName,e.props.className].filter((function(e){return!!e})).join(" "),r=o({key:t,className:n,style:O("item",t,e.props.style)},!d&&{tabIndex:-1});return s.default.cloneElement(e,r)}})))),!1!==a.customCrossIcon&&s.default.createElement("div",{style:O("closeButton")},s.default.createElement(f.default,{onClick:g,styles:a.styles,customIcon:a.customCrossIcon,className:a.crossButtonClassName,crossClassName:a.crossClassName,isOpen:d}))))};return a.propTypes={bodyClassName:u.default.string,burgerBarClassName:u.default.string,burgerButtonClassName:u.default.string,className:u.default.string,crossButtonClassName:u.default.string,crossClassName:u.default.string,customBurgerIcon:u.default.oneOfType([u.default.element,u.default.oneOf([!1])]),customCrossIcon:u.default.oneOfType([u.default.element,u.default.oneOf([!1])]),customOnKeyDown:u.default.func,disableAutoFocus:u.default.bool,disableCloseOnEsc:u.default.bool,disableOverlayClick:u.default.oneOfType([u.default.bool,u.default.func]),htmlClassName:u.default.string,id:u.default.string,isOpen:u.default.bool,itemClassName:u.default.string,itemListClassName:u.default.string,itemListElement:u.default.oneOf(["div","nav"]),menuClassName:u.default.string,morphShapeClassName:u.default.string,noOverlay:u.default.bool,noTransition:u.default.bool,onClose:u.default.func,onIconHoverChange:u.default.func,onOpen:u.default.func,onStateChange:u.default.func,outerContainerId:e&&e.outerContainer?u.default.string.isRequired:u.default.string,overlayClassName:u.default.string,pageWrapId:e&&e.pageWrap?u.default.string.isRequired:u.default.string,right:u.default.bool,styles:u.default.object,width:u.default.oneOfType([u.default.number,u.default.string])},a.defaultProps={bodyClassName:"",burgerBarClassName:"",burgerButtonClassName:"",className:"",crossButtonClassName:"",crossClassName:"",disableAutoFocus:!1,disableCloseOnEsc:!1,htmlClassName:"",id:"",itemClassName:"",itemListClassName:"",menuClassName:"",morphShapeClassName:"",noOverlay:!1,noTransition:!1,onStateChange:function(){},outerContainerId:"",overlayClassName:"",pageWrapId:"",styles:{},width:300,onIconHoverChange:function(){},itemListElement:"nav"},a},e.exports=t.default},209:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(943),a=(r=o)&&r.__esModule?r:{default:r};t.default=(0,a.default)({}),e.exports=t.default}}]);
//# sourceMappingURL=209.9e8e95d6.chunk.js.map