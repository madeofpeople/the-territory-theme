(()=>{var e={214:()=>{"use strict";const e=window.wp.blocks,t=window.wp.i18n;[{name:"list",title:(0,t.__)("Basic List","the-territory"),description:(0,t.__)("Display a basic list.","the-territory"),isDefault:!0,icon:"editor-ul",attributes:{className:"basic",placeholder:(0,t.__)("Add list items ...","the-territory")},example:{attributes:{className:"basic"}},scope:["block","inserter","transform"],isActive:(e,t)=>e.className===t.className},{name:"bullet-list-columns",title:(0,t.__)("Columned Bullet List","the-territory"),description:(0,t.__)("A list displayed in 2 columns.","the-territory"),attributes:{className:"bullet-list-columns",placeholder:(0,t.__)("Add list items ...","the-territory")},icon:"columns",scope:["transform"],isActive:(e,t)=>e.className===t.className},{name:"bullet-list",title:(0,t.__)("Bullet List","the-territory"),description:(0,t.__)("A regular list, with fancy bullets.","the-territory"),icon:"list-view",attributes:{className:"bullet-list",placeholder:(0,t.__)("Add list items ...","the-territory")},scope:["transform"],isActive:(e,t)=>e.className===t.className},{name:"icon-list",title:(0,t.__)("Icon List","the-territory"),description:(0,t.__)("A regular with icon.","the-territory"),icon:"star-filled",attributes:{className:"icon-list",placeholder:(0,t.__)("Add list items ...","the-territory")},scope:["transform"],isActive:(e,t)=>e.className===t.className}].forEach((t=>{(0,e.registerBlockVariation)("core/list",t)})),[{name:"paragraph",title:(0,t.__)("Paragraph","the-territory"),description:(0,t.__)("A standard paragraph.","the-territory"),isDefault:!0,category:"text",keywords:[(0,t.__)("intro","the-territory"),(0,t.__)("paragraph","the-territory"),(0,t.__)("sentence","the-territory")],icon:"editor-alignleft",attributes:{className:"ptag",placeholder:(0,t.__)("Add content...","the-territory")},example:{attributes:{content:(0,t.__)("This is a bock for displaying the opening paragraph, the big idea, the tl;dr.","the-territory")}},scope:["block","inserter","transform"]},{name:"lede",title:(0,t.__)("Lede","the-territory"),description:(0,t.__)("Add opening sentence or paragraph.","the-territory"),icon:"editor-justify",attributes:{className:"lede",placeholder:(0,t.__)("Add content...","the-territory")},scope:["transform"]}].forEach((t=>{(0,e.registerBlockVariation)("core/paragraph",t)}));const o=[{name:"testimonial",title:(0,t.__)("Testimonial","debtcollective"),description:(0,t.__)("Large quote with background image.","the-territory"),keywords:[(0,t.__)("image","debtcollective"),(0,t.__)("quote","debtcollective"),(0,t.__)("callout","debtcollective")],category:"media",icon:"format-quote",attributes:{className:"testimonial",type:"image",parallax:"scroll",parallaxSpeed:.25,parallaxMobile:!0,ghostkitClassname:"testimonial-parallax",backgroundColor:"rgba(128, 173, 108, 0.25)"},innerBlocks:[["core/quote",{className:"content",textColor:"white"}]],example:{attributes:{type:"image",image:129,imageTag:"%3Cimg%20src%3D%22https%3A%2F%2Fthe-territory.test%2Fwp-content%2Fuploads%2F2022%2F07%2Fbackground-7.jpg%22%20class%3D%22wp-image-129%20jarallax-img%22%20width%3D%224096%22%20height%3D%222160%22%20%2F%3E",parallax:"scroll",parallaxSpeed:.25,parallaxMobile:!0,ghostkitStyles:{},ghostkitClassname:"testimonial-parallax",backgroundColor:"rgba(128, 173, 108, 0.25)"},innerBlocks:[{name:"core/quote",attributes:{className:"content",citation:(0,t.__)("Bitaté Uru-eu-wau-wau","the-territory")},innerBlocks:[{name:"core/paragraph",attributes:{content:(0,t.__)("“historically, our existence has been marginalized and erased. through this film we're changing that.”","the-territory")}}]}]}}];(0,e.getBlockType)("nk/awb")&&o.forEach((t=>{(0,e.registerBlockVariation)("nk/awb",t)}));const i=[{name:"parallax-text-overlay",title:(0,t.__)("Tout - Parallax Background","the-territory"),description:(0,t.__)("A large tout with parallax background and text overlay.","the-territory"),category:"design",keywords:[(0,t.__)("tout","the-territory"),(0,t.__)("image","the-territory"),(0,t.__)("callout","the-territory")],icon:"format-image",attributes:{className:"tout parallax-text-overlay"},innerBlocks:[["nk/awb",{type:"image",parallax:"scroll",parallaxSpeed:.25,parallaxMobile:!0,ghostkitClassname:"testimonial-parallax",backgroundColor:"rgba(128, 173, 108, 0.25)"},[["core/group",{className:"tout__content"},[["core/heading",{placeholder:(0,t.__)("Add Heading...","the-territory"),level:3}],["core/paragraph",{placeholder:(0,t.__)("Add content...","the-territory")}],["core/buttons",{},[["core/button",{placeholder:(0,t.__)("Add Button Text...","the-territory")}]]]]]]]],example:{attributes:{type:"image",imageTag:"%3Cimg%20src%3D%22https%3A%2F%2Fthe-territory.test%2Fwp-content%2Fuploads%2F2022%2F07%2Fbackground-7.jpg%22%20class%3D%22wp-image-129%20jarallax-img%22%20width%3D%224096%22%20height%3D%222160%22%20%2F%3E",parallax:"scroll",parallaxSpeed:.25,parallaxMobile:!0,ghostkitClassname:"testimonial-parallax",backgroundColor:"rgba(128, 173, 108, 0.25)"},innerBlocks:[{name:"core/group",attributes:{className:"tout__content"},innerBlocks:[{name:"core/paragraph",attributes:{content:(0,t.__)("To protect the Earth from climate catastrophe we need to fight back against deforestation. Stand with us to demand that national, regional and international politicians and businesses respect and protect the land and rights of Indigenous Peoples.","the-territory")}},{name:"core/heading",attributes:{content:(0,t.__)("Indigenous-led Monitoring and Surveillance","the-territory"),level:3}},{name:"core/paragraph",attributes:{content:(0,t.__)("We are calling on governments and businesses to work together to finance and empower indigenous-led monitoring for deforestation-free supply chains.","the-territory")}},{name:"core/buttons",attributes:{},innerBlocks:[{name:"core/button",attributes:{text:(0,t.__)("Find Out More and Support Our Call for Action","the-territory"),url:"#"}}]}]}]},scope:["block","inserter","transform"]}];(0,e.getBlockType)("nk/awb")&&(0,e.getBlockType)("site-functionality/tout")&&i.forEach((t=>{(0,e.registerBlockVariation)("site-functionality/tout",t)}))},73:()=>{document.body.className=document.body.className.replace("no-js","js")},299:()=>{const e={threshold:0};document.addEventListener("DOMContentLoaded",(function(){document.querySelector(".site-header .page__nav")&&function(t){const o=document.querySelectorAll(t),i=document.querySelector(".site-header .page__nav");let a=null;const n=new IntersectionObserver((e=>{e.forEach((e=>{var t;e.isIntersecting?(e.target.classList.add("in-view"),e.target.classList.remove("out-of-view"),"SECTION"===(t=e.target).tagName&&(a&&a.classList.remove("active"),a&&a.classList.remove("active"),a=i.querySelector(`a[href="#${t.querySelector("h2").id}"]`),a&&a.classList.add("active"))):(e.target.classList.remove("in-view"),e.target.classList.add("out-of-view"))}))}),e);o.forEach((e=>{const t=e.getAttribute("data-delay");e.classList.add("out-of-view"),e.style.transitionDelay=t+"ms",n.observe(e)}))}(".entry-content > section, .site-header")}))},74:()=>{function e(){document.body.classList.add("ready")}"complete"!==document.readyState&&"loading"===document.readyState||document.documentElement.doScroll?document.addEventListener("DOMContentLoaded",e):e()},242:()=>{function e(){function e(e){e.preventDefault();const o=e.target.parentNode.closest(".menu-item-has-children"),i=o.querySelector("ul.sub-menu");!function(e){t(e).forEach((e=>{e.classList.remove("is-visible"),e.querySelector(".parent-indicator")&&e.querySelector(".parent-indicator").setAttribute("aria-expanded",!1),e.querySelector(".sub-menu")&&e.querySelector(".sub-menu").classList.remove("is-visible","animated","slideInLeft")}))}(o),function(e,t){e.classList.contains("is-visible")?function(e,t){e.classList.remove("is-visible"),e.querySelector(".parent-indicator").setAttribute("aria-expanded",!1),t.classList.remove("is-visible","animated","slideInLeft")}(e,t):(e.classList.add("is-visible"),e.querySelector(".parent-indicator").setAttribute("aria-expanded",!0),t.classList.add("is-visible","animated","slideInLeft"))}(o,i)}document.querySelectorAll(".mobile-menu li.menu-item-has-children, .utility-navigation li.menu-item-has-children").forEach((t=>{t.querySelector("a").innerHTML+='<button type="button" aria-expanded="false" class="parent-indicator caret-down" aria-label="Open submenu"><span class="down-arrow"></span></button>',document.querySelectorAll(".parent-indicator").forEach((t=>{t.addEventListener("click",e)}))}));const t=function(e){const t=[];let o=e.parentNode.firstChild;for(;o;)1===o.nodeType&&o!==e&&t.push(o),o=o.nextSibling;return t}}"complete"!==document.readyState&&"loading"===document.readyState||document.documentElement.doScroll?document.addEventListener("DOMContentLoaded",e):e()},276:()=>{function e(){const e=document.querySelectorAll(".modal-trigger"),t=document.querySelectorAll(".modal .close"),o=document.body;function i(e){const t=e.target.getAttribute("data-target"),i=document.querySelector(t),a=i.querySelectorAll("a, input, button");o.classList.add("modal-open"),i.classList.add("modal-open"),i.setAttribute("aria-hidden",!1),0<a.length&&a[0].focus()}function a(e){const t=e.target.getAttribute("data-target"),i=document.querySelector(t),a=i.querySelector("iframe");if(o.classList.remove("modal-open"),i.classList.remove("modal-open"),i.setAttribute("aria-hidden",!0),a){const e=a.getAttribute("src");a.setAttribute("src",""),a.setAttribute("src",e)}}e.forEach((e=>{e.addEventListener("click",i)})),t.forEach((e=>{e.addEventListener("click",a)})),o.addEventListener("keydown",(function(e){if(!o.classList.contains("modal-open"))return;const t=document.querySelector(".modal.modal-open"),i=t.querySelector("iframe");if(27===e.keyCode&&(t.setAttribute("aria-hidden",!0),t.classList.remove("modal-open"),o.classList.remove("modal-open"),i)){const e=i.getAttribute("src");i.setAttribute("src",""),i.setAttribute("src",e)}})),o.addEventListener("click",(function(e){const t=e.target;if(o.classList.contains("modal-open")&&t.classList.contains("modal-open")){const e=t.querySelector("iframe");if(o.classList.remove("modal-open"),t.classList.remove("modal-open"),t.setAttribute("aria-hidden",!0),e){const t=e.getAttribute("src");e.setAttribute("src",""),e.setAttribute("src",t)}}}))}"complete"!==document.readyState&&"loading"===document.readyState||document.documentElement.doScroll?document.addEventListener("DOMContentLoaded",e):e()},531:()=>{!function(){const e=document.querySelectorAll(".main-navigation .menu-item-has-children");function t(e){i(e.target.parentNode,".menu-item-has-children").forEach((e=>{e.classList.add("focus")}))}function o(e){i(e.target.parentNode,".menu-item-has-children").forEach((e=>{e.classList.remove("focus")}))}document.addEventListener("DOMContentLoaded",(function(){e.forEach((e=>{e.querySelector("a").innerHTML+='<span class="caret-down" aria-hidden="true"></span>'}))})),document.addEventListener("DOMContentLoaded",(function(){e.forEach((e=>{e.addEventListener("focusin",t),e.addEventListener("focusout",o)}))}));const i=function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){const t=(this.document||this.ownerDocument).querySelectorAll(e);let o=t.length;for(;0>=--o&&t.item(o)!==this;);return-1>o});const o=[];for(;e&&e!==document;e=e.parentNode)t?e.matches(t)&&o.push(e):o.push(e);return o}}()},188:()=>{document.querySelectorAll("table").forEach((e=>{const t=e.querySelectorAll("th");0!==t.length&&e.querySelectorAll("tbody tr").forEach((e=>{e.querySelectorAll("td").forEach(((e,o)=>{t[o].textContent&&e.setAttribute("data-label",t[o].textContent)}))}))}))},869:()=>{!function(){function e(e){const t=e.target.parentNode,o=t.querySelector(".video-background");t.classList.toggle("video-toggled"),t.classList.contains("video-toggled")?o.pause():o.play()}document.querySelectorAll(".video-toggle").forEach((t=>{t.addEventListener("click",e)}))}()}},t={};function o(i){var a=t[i];if(void 0!==a)return a.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,o),n.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{"use strict";let e;o(73),o(74),o(299),e="undefined"!=typeof window?window:void 0!==o.g?o.g:"undefined"!=typeof self?self:{};var t=e;const{navigator:i}=t,a=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(i.userAgent);let n,r;function s(){a?(!n&&document.body&&(n=document.createElement("div"),n.style.cssText="position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;",document.body.appendChild(n)),r=(n?n.clientHeight:0)||t.innerHeight||document.documentElement.clientHeight):r=t.innerHeight||document.documentElement.clientHeight}var l;s(),t.addEventListener("resize",s),t.addEventListener("orientationchange",s),t.addEventListener("load",s),l=()=>{s()},"complete"===document.readyState||"interactive"===document.readyState?l():document.addEventListener("DOMContentLoaded",l,{capture:!0,once:!0,passive:!0});const c=[];function d(){c.length&&(c.forEach(((e,o)=>{const{instance:i,oldData:a}=e,n=i.$item.getBoundingClientRect(),s={width:n.width,height:n.height,top:n.top,bottom:n.bottom,wndW:t.innerWidth,wndH:r},l=!a||a.wndW!==s.wndW||a.wndH!==s.wndH||a.width!==s.width||a.height!==s.height,d=l||!a||a.top!==s.top||a.bottom!==s.bottom;c[o].oldData=s,l&&i.onResize(),d&&i.onScroll()})),t.requestAnimationFrame(d))}let m=0;class p{constructor(e,t){const o=this;o.instanceID=m,m+=1,o.$item=e,o.defaults={type:"scroll",speed:.5,imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,disableVideo:!1,videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoLoop:!0,videoPlayOnlyVisible:!0,videoLazyLoading:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null};const a=o.$item.dataset||{},n={};if(Object.keys(a).forEach((e=>{const t=e.substr(0,1).toLowerCase()+e.substr(1);t&&void 0!==o.defaults[t]&&(n[t]=a[e])})),o.options=o.extend({},o.defaults,n,t),o.pureOptions=o.extend({},o.options),Object.keys(o.options).forEach((e=>{"true"===o.options[e]?o.options[e]=!0:"false"===o.options[e]&&(o.options[e]=!1)})),o.options.speed=Math.min(2,Math.max(-1,parseFloat(o.options.speed))),"string"==typeof o.options.disableParallax&&(o.options.disableParallax=new RegExp(o.options.disableParallax)),o.options.disableParallax instanceof RegExp){const e=o.options.disableParallax;o.options.disableParallax=()=>e.test(i.userAgent)}if("function"!=typeof o.options.disableParallax&&(o.options.disableParallax=()=>!1),"string"==typeof o.options.disableVideo&&(o.options.disableVideo=new RegExp(o.options.disableVideo)),o.options.disableVideo instanceof RegExp){const e=o.options.disableVideo;o.options.disableVideo=()=>e.test(i.userAgent)}"function"!=typeof o.options.disableVideo&&(o.options.disableVideo=()=>!1);let r=o.options.elementInViewport;r&&"object"==typeof r&&void 0!==r.length&&([r]=r),r instanceof Element||(r=null),o.options.elementInViewport=r,o.image={src:o.options.imgSrc||null,$container:null,useImgTag:!1,position:"fixed"},o.initImg()&&o.canInitParallax()&&o.init()}css(e,o){return"string"==typeof o?t.getComputedStyle(e).getPropertyValue(o):(Object.keys(o).forEach((t=>{e.style[t]=o[t]})),e)}extend(e,...t){return e=e||{},Object.keys(t).forEach((o=>{t[o]&&Object.keys(t[o]).forEach((i=>{e[i]=t[o][i]}))})),e}getWindowData(){return{width:t.innerWidth||document.documentElement.clientWidth,height:r,y:document.documentElement.scrollTop}}initImg(){const e=this;let t=e.options.imgElement;return t&&"string"==typeof t&&(t=e.$item.querySelector(t)),t instanceof Element||(e.options.imgSrc?(t=new Image,t.src=e.options.imgSrc):t=null),t&&(e.options.keepImg?e.image.$item=t.cloneNode(!0):(e.image.$item=t,e.image.$itemParent=t.parentNode),e.image.useImgTag=!0),!(!e.image.$item&&(null===e.image.src&&(e.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",e.image.bgImage=e.css(e.$item,"background-image")),!e.image.bgImage||"none"===e.image.bgImage))}canInitParallax(){return!this.options.disableParallax()}init(){const e=this,o={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"};let i={pointerEvents:"none",transformStyle:"preserve-3d",backfaceVisibility:"hidden"};if(!e.options.keepImg){const t=e.$item.getAttribute("style");if(t&&e.$item.setAttribute("data-jarallax-original-styles",t),e.image.useImgTag){const t=e.image.$item.getAttribute("style");t&&e.image.$item.setAttribute("data-jarallax-original-styles",t)}}if("static"===e.css(e.$item,"position")&&e.css(e.$item,{position:"relative"}),"auto"===e.css(e.$item,"z-index")&&e.css(e.$item,{zIndex:0}),e.image.$container=document.createElement("div"),e.css(e.image.$container,o),e.css(e.image.$container,{"z-index":e.options.zIndex}),"fixed"===this.image.position&&e.css(e.image.$container,{"-webkit-clip-path":"polygon(0 0, 100% 0, 100% 100%, 0 100%)","clip-path":"polygon(0 0, 100% 0, 100% 100%, 0 100%)"}),e.image.$container.setAttribute("id",`jarallax-container-${e.instanceID}`),e.$item.appendChild(e.image.$container),e.image.useImgTag?i=e.extend({"object-fit":e.options.imgSize,"object-position":e.options.imgPosition,"max-width":"none"},o,i):(e.image.$item=document.createElement("div"),e.image.src&&(i=e.extend({"background-position":e.options.imgPosition,"background-size":e.options.imgSize,"background-repeat":e.options.imgRepeat,"background-image":e.image.bgImage||`url("${e.image.src}")`},o,i))),"opacity"!==e.options.type&&"scale"!==e.options.type&&"scale-opacity"!==e.options.type&&1!==e.options.speed||(e.image.position="absolute"),"fixed"===e.image.position){const o=function(e){const t=[];for(;null!==e.parentElement;)1===(e=e.parentElement).nodeType&&t.push(e);return t}(e.$item).filter((e=>{const o=t.getComputedStyle(e),i=o["-webkit-transform"]||o["-moz-transform"]||o.transform;return i&&"none"!==i||/(auto|scroll)/.test(o.overflow+o["overflow-y"]+o["overflow-x"])}));e.image.position=o.length?"absolute":"fixed"}i.position=e.image.position,e.css(e.image.$item,i),e.image.$container.appendChild(e.image.$item),e.onResize(),e.onScroll(!0),e.options.onInit&&e.options.onInit.call(e),"none"!==e.css(e.$item,"background-image")&&e.css(e.$item,{"background-image":"none"}),e.addToParallaxList()}addToParallaxList(){c.push({instance:this}),1===c.length&&t.requestAnimationFrame(d)}removeFromParallaxList(){const e=this;c.forEach(((t,o)=>{t.instance.instanceID===e.instanceID&&c.splice(o,1)}))}destroy(){const e=this;e.removeFromParallaxList();const t=e.$item.getAttribute("data-jarallax-original-styles");if(e.$item.removeAttribute("data-jarallax-original-styles"),t?e.$item.setAttribute("style",t):e.$item.removeAttribute("style"),e.image.useImgTag){const o=e.image.$item.getAttribute("data-jarallax-original-styles");e.image.$item.removeAttribute("data-jarallax-original-styles"),o?e.image.$item.setAttribute("style",t):e.image.$item.removeAttribute("style"),e.image.$itemParent&&e.image.$itemParent.appendChild(e.image.$item)}e.image.$container&&e.image.$container.parentNode.removeChild(e.image.$container),e.options.onDestroy&&e.options.onDestroy.call(e),delete e.$item.jarallax}clipContainer(){}coverImage(){const e=this,t=e.image.$container.getBoundingClientRect(),o=t.height,{speed:i}=e.options,a="scroll"===e.options.type||"scroll-opacity"===e.options.type;let n=0,s=o,l=0;return a&&(0>i?(n=i*Math.max(o,r),r<o&&(n-=i*(o-r))):n=i*(o+r),1<i?s=Math.abs(n-r):0>i?s=n/i+Math.abs(n):s+=(r-o)*(1-i),n/=2),e.parallaxScrollDistance=n,l=a?(r-s)/2:(o-s)/2,e.css(e.image.$item,{height:`${s}px`,marginTop:`${l}px`,left:"fixed"===e.image.position?`${t.left}px`:"0",width:`${t.width}px`}),e.options.onCoverImage&&e.options.onCoverImage.call(e),{image:{height:s,marginTop:l},container:t}}isVisible(){return this.isElementInViewport||!1}onScroll(e){const o=this,i=o.$item.getBoundingClientRect(),a=i.top,n=i.height,s={};let l=i;if(o.options.elementInViewport&&(l=o.options.elementInViewport.getBoundingClientRect()),o.isElementInViewport=0<=l.bottom&&0<=l.right&&l.top<=r&&l.left<=t.innerWidth,!e&&!o.isElementInViewport)return;const c=Math.max(0,a),d=Math.max(0,n+a),m=Math.max(0,-a),p=Math.max(0,a+n-r),u=Math.max(0,n-(a+n-r)),g=Math.max(0,-a+r-n),h=1-(r-a)/(r+n)*2;let y=1;if(n<r?y=1-(m||p)/n:d<=r?y=d/r:u<=r&&(y=u/r),"opacity"!==o.options.type&&"scale-opacity"!==o.options.type&&"scroll-opacity"!==o.options.type||(s.transform="translate3d(0,0,0)",s.opacity=y),"scale"===o.options.type||"scale-opacity"===o.options.type){let e=1;0>o.options.speed?e-=o.options.speed*y:e+=o.options.speed*(1-y),s.transform=`scale(${e}) translate3d(0,0,0)`}if("scroll"===o.options.type||"scroll-opacity"===o.options.type){let e=o.parallaxScrollDistance*h;"absolute"===o.image.position&&(e-=a),s.transform=`translate3d(0,${e}px,0)`}o.css(o.image.$item,s),o.options.onScroll&&o.options.onScroll.call(o,{section:i,beforeTop:c,beforeTopEnd:d,afterTop:m,beforeBottom:p,beforeBottomEnd:u,afterBottom:g,visiblePercent:y,fromViewportCenter:h})}onResize(){this.coverImage()}}const u=function(e,t,...o){("object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)&&(e=[e]);const i=e.length;let a,n=0;for(;n<i;n+=1)if("object"==typeof t||void 0===t?e[n].jarallax||(e[n].jarallax=new p(e[n],t)):e[n].jarallax&&(a=e[n].jarallax[t].apply(e[n].jarallax,o)),void 0!==a)return a;return e};let g;u.constructor=p,g="undefined"!=typeof window?window:void 0!==o.g?o.g:"undefined"!=typeof self?self:{};const h=u;console.log("jarallax invocation",h);const y={type:"scroll",speed:.85,imgSize:"cover",imgPosition:"50% 50%"};document.addEventListener("DOMContentLoaded",(function(){document.querySelector(".wp-block-cover.lax")&&function(e,t){const o=document.querySelectorAll(".wp-block-cover.lax");o.forEach((function(e){e.classList.add("jarallax"),e.querySelector(".wp-block-cover__image-background").classList.add("jarallax-img")})),h(o,y)}()})),o(242),o(276),o(531),o(188),o(869),o(214)})()})();