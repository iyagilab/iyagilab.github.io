(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"6qSS":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return D}));var o=a("q1tI"),r=a.n(o),n=a("Wbzz"),l=a("RD7I"),i=a("9eSz"),c=a.n(i),d=a("A2+M"),p=a("7oih"),s=a("wd/R"),m=a.n(s),u=a("hlFM"),b=a("wx14"),f=a("Ff2n"),y=a("iuhU"),g=a("H2TA"),h=a("NqtD"),v=o.forwardRef((function(e,t){var a=e.children,r=e.classes,n=e.className,l=e.color,i=void 0===l?"inherit":l,c=e.component,d=void 0===c?"svg":c,p=e.fontSize,s=void 0===p?"medium":p,m=e.htmlColor,u=e.titleAccess,g=e.viewBox,v=void 0===g?"0 0 24 24":g,x=Object(f.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return o.createElement(d,Object(b.a)({className:Object(y.a)(r.root,n,"inherit"!==i&&r["color".concat(Object(h.a)(i))],"default"!==s&&"medium"!==s&&r["fontSize".concat(Object(h.a)(s))]),focusable:"false",viewBox:v,color:m,"aria-hidden":!u||void 0,role:u?"img":void 0,ref:t},x),a,u?o.createElement("title",null,u):null)}));v.muiName="SvgIcon";var x=Object(g.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(v);var S,O,k=(S=o.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),(O=function(e,t){return r.a.createElement(x,Object(b.a)({ref:t},e),S)}).muiName=x.muiName,r.a.memo(r.a.forwardRef(O))),C=a("ye/S"),j=a("bfFb"),w=a("VD++");function E(e){return"Backspace"===e.key||"Delete"===e.key}var z=o.forwardRef((function(e,t){var a=e.avatar,r=e.classes,n=e.className,l=e.clickable,i=e.color,c=void 0===i?"default":i,d=e.component,p=e.deleteIcon,s=e.disabled,m=void 0!==s&&s,u=e.icon,g=e.label,v=e.onClick,x=e.onDelete,S=e.onKeyDown,O=e.onKeyUp,C=e.size,z=void 0===C?"medium":C,R=e.variant,I=void 0===R?"default":R,P=Object(f.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),N=o.useRef(null),L=Object(j.a)(N,t),T=function(e){e.stopPropagation(),x&&x(e)},$=!(!1===l||!v)||l,D="small"===z,M=d||($?w.a:"div"),_=M===w.a?{component:"div"}:{},A=null;if(x){var B=Object(y.a)("default"!==c&&("default"===I?r["deleteIconColor".concat(Object(h.a)(c))]:r["deleteIconOutlinedColor".concat(Object(h.a)(c))]),D&&r.deleteIconSmall);A=p&&o.isValidElement(p)?o.cloneElement(p,{className:Object(y.a)(p.props.className,r.deleteIcon,B),onClick:T}):o.createElement(k,{className:Object(y.a)(r.deleteIcon,B),onClick:T})}var F=null;a&&o.isValidElement(a)&&(F=o.cloneElement(a,{className:Object(y.a)(r.avatar,a.props.className,D&&r.avatarSmall,"default"!==c&&r["avatarColor".concat(Object(h.a)(c))])}));var W=null;return u&&o.isValidElement(u)&&(W=o.cloneElement(u,{className:Object(y.a)(r.icon,u.props.className,D&&r.iconSmall,"default"!==c&&r["iconColor".concat(Object(h.a)(c))])})),o.createElement(M,Object(b.a)({role:$||x?"button":void 0,className:Object(y.a)(r.root,n,"default"!==c&&[r["color".concat(Object(h.a)(c))],$&&r["clickableColor".concat(Object(h.a)(c))],x&&r["deletableColor".concat(Object(h.a)(c))]],"default"!==I&&[r.outlined,{primary:r.outlinedPrimary,secondary:r.outlinedSecondary}[c]],m&&r.disabled,D&&r.sizeSmall,$&&r.clickable,x&&r.deletable),"aria-disabled":!!m||void 0,tabIndex:$||x?0:void 0,onClick:v,onKeyDown:function(e){e.currentTarget===e.target&&E(e)&&e.preventDefault(),S&&S(e)},onKeyUp:function(e){e.currentTarget===e.target&&(x&&E(e)?x(e):"Escape"===e.key&&N.current&&N.current.blur()),O&&O(e)},ref:L},_,P),F||W,o.createElement("span",{className:Object(y.a)(r.label,D&&r.labelSmall)},g),A)})),R=Object(g.a)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=Object(C.a)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(C.c)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(C.c)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(C.c)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(C.c)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(C.c)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(C.c)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(C.a)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(C.a)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(C.a)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(C.a)(a,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(C.a)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(C.a)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(C.a)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(C.a)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(z),I=a("ofer"),P=a("Z3vd"),N=a("ma3e"),L=a("qhky"),T=Object(l.a)((function(){return{article:{lineHeight:1.6,fontFamily:"Nanum Gothic",fontSize:"1.1rem","& blockquote":{borderLeft:"3px solid #303032",marginLeft:-16,paddingLeft:13,fontStyle:"italic"}},chip:{marginRight:4}}})),$=function(e){var t=e.tags,a=T();return r.a.createElement(u.a,{marginY:1},t.map((function(e){return r.a.createElement(R,{color:"primary",variant:"outlined",classes:{root:a.chip},label:e,key:e,component:n.Link,to:"/tag/"+e,onClick:function(){}})})))};function D(e){var t=e.data,a=e.pageContext,o=T(),l=t.mdx,i=l.frontmatter,s=i.featuredImage,b=i.title,f=i.tags,y=l.body,g=a.previousPath,h=a.nextPath,v=a.postDate;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,null,r.a.createElement("title",null,b),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),r.a.createElement("meta",{httpEquiv:"Content-Type",content:"text/html;charset=UTF-8"}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:b}),r.a.createElement("meta",{property:"og:image",content:c.a}),r.a.createElement("meta",{property:"og:site_name",content:b})),r.a.createElement(p.a,null,r.a.createElement(u.a,{flexGrow:1,width:"100%",maxWidth:960,marginX:"auto"},r.a.createElement(u.a,{padding:2},r.a.createElement(u.a,{marginBottom:1},r.a.createElement(I.a,{variant:"h5",style:{fontFamily:"Nanum Gothic",fontWeight:"bold"}},b),r.a.createElement(I.a,{variant:"body2"},m()(v).format("LL")),r.a.createElement($,{tags:f})),r.a.createElement(c.a,{fluid:s.childImageSharp.fluid,style:{borderRadius:2}}),r.a.createElement("article",{className:o.article},r.a.createElement(d.MDXRenderer,null,y)),r.a.createElement(u.a,{display:"flex"},r.a.createElement(u.a,{flexGrow:1},g&&r.a.createElement(P.a,{component:n.Link,to:g,variant:"outlined",color:"secondary"},r.a.createElement(N.a,{size:8}),r.a.createElement(u.a,{marginLeft:.5},"Previous"))),h&&r.a.createElement(P.a,{component:n.Link,to:h,variant:"outlined",color:"secondary"},r.a.createElement(u.a,{marginRight:.5},"Next"),r.a.createElement(N.b,{size:8})))))))}},"A2+M":function(e,t,a){var o=a("X8hv");e.exports={MDXRenderer:o}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},Ijbi:function(e,t,a){var o=a("WkPL");e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},RIqP:function(e,t,a){var o=a("Ijbi"),r=a("EbDI"),n=a("ZhPi"),l=a("Bnag");e.exports=function(e){return o(e)||r(e)||n(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,o=new Array(t);a<t;a++)o[a]=e[a];return o},e.exports.__esModule=!0,e.exports.default=e.exports},X8hv:function(e,t,a){var o=a("sXyB"),r=a("RIqP"),n=a("lSNA"),l=a("8OQS"),i=["scope","children"];function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p=a("q1tI"),s=a("7ljp").mdx,m=a("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,a=e.children,n=l(e,i),c=m(t),u=p.useMemo((function(){if(!a)return null;var e=d({React:p,mdx:s},c),t=Object.keys(e),n=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(r(t),[""+a])).apply(void 0,[{}].concat(r(n)))}),[a,t]);return p.createElement(u,d({},n))}},Z3vd:function(e,t,a){"use strict";var o=a("Ff2n"),r=a("wx14"),n=a("q1tI"),l=a("iuhU"),i=a("H2TA"),c=a("ye/S"),d=a("VD++"),p=a("NqtD"),s=n.forwardRef((function(e,t){var a=e.children,i=e.classes,c=e.className,s=e.color,m=void 0===s?"default":s,u=e.component,b=void 0===u?"button":u,f=e.disabled,y=void 0!==f&&f,g=e.disableElevation,h=void 0!==g&&g,v=e.disableFocusRipple,x=void 0!==v&&v,S=e.endIcon,O=e.focusVisibleClassName,k=e.fullWidth,C=void 0!==k&&k,j=e.size,w=void 0===j?"medium":j,E=e.startIcon,z=e.type,R=void 0===z?"button":z,I=e.variant,P=void 0===I?"text":I,N=Object(o.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),L=E&&n.createElement("span",{className:Object(l.a)(i.startIcon,i["iconSize".concat(Object(p.a)(w))])},E),T=S&&n.createElement("span",{className:Object(l.a)(i.endIcon,i["iconSize".concat(Object(p.a)(w))])},S);return n.createElement(d.a,Object(r.a)({className:Object(l.a)(i.root,i[P],c,"inherit"===m?i.colorInherit:"default"!==m&&i["".concat(P).concat(Object(p.a)(m))],"medium"!==w&&[i["".concat(P,"Size").concat(Object(p.a)(w))],i["size".concat(Object(p.a)(w))]],h&&i.disableElevation,y&&i.disabled,C&&i.fullWidth),component:b,disabled:y,focusRipple:!x,focusVisibleClassName:Object(l.a)(i.focusVisible,O),ref:t,type:R},N),n.createElement("span",{className:i.label},L,a,T))}));t.a=Object(i.a)((function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(c.a)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(c.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(c.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(c.a)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(c.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(c.a)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(c.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(s)},ZhPi:function(e,t,a){var o=a("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},lSNA:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},e.exports.__esModule=!0,e.exports.default=e.exports},sXyB:function(e,t,a){var o=a("SksO"),r=a("b48C");function n(t,a,l){return r()?(e.exports=n=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=n=function(e,t,a){var r=[null];r.push.apply(r,t);var n=new(Function.bind.apply(e,r));return a&&o(n,a.prototype),n},e.exports.__esModule=!0,e.exports.default=e.exports),n.apply(null,arguments)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-post-js-fd954e86d5ec3774e46d.js.map