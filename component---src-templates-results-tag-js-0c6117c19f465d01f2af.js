(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{J4zp:function(e,t,r){var a=r("wTVA"),n=r("m0LI"),o=r("ZhPi"),i=r("wkBT");e.exports=function(e,t){return a(e)||n(e,t)||o(e,t)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a},e.exports.__esModule=!0,e.exports.default=e.exports},ZhPi:function(e,t,r){var a=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},m0LI:function(e,t){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(a=r.next()).done)&&(o.push(a.value),!t||o.length!==t);i=!0);}catch(s){l=!0,n=s}finally{try{i||null==r.return||r.return()}finally{if(l)throw n}}return o}},e.exports.__esModule=!0,e.exports.default=e.exports},qDPV:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return h}));var a=r("q1tI"),n=r.n(a),o=r("33yf"),i=r.n(o),l=r("Wbzz"),s=r("7oih"),u=r("QS3V"),c=r("tRbT"),p=r("hlFM"),f=r("ofer"),m=r("wb2y"),d=r("ii+/"),x=r.n(d),g=function(e){var t=e.posts,r=e.pathPrefix;return n.a.createElement(c.a,{container:!0,spacing:3},t.map((function(e){var t=e.node,a=t.excerpt,o=t.fileAbsolutePath,l=t.frontmatter,s=l.id,p=l.title,f=l.featuredImage,m=i.a.basename(o).split("-").splice(0,3).join("-");return n.a.createElement(c.a,{item:!0,xs:12,sm:4,key:s},n.a.createElement(u.a,{featuredImage:f,title:p,url:"/"+r+"/"+s,postDate:m,excerpt:a}))})))};function h(e){var t=e.data,r=t.site.siteMetadata.templates.posts,a=r.pathPrefix,o=r.filters.tag,i=o.pathPrefixTag,u=o.pagination.resultsPerPage,c=t.allMdx.edges,d=e.pageContext,h=d.tag,y=d.totalPages,b=d.currentPage;return n.a.createElement(s.a,null,n.a.createElement(p.a,{flexGrow:1,width:"100%",maxWidth:960,marginX:"auto"},n.a.createElement(p.a,{padding:2},n.a.createElement(p.a,{textAlign:"center",padding:4},n.a.createElement(p.a,{marginBottom:4},n.a.createElement(f.a,{color:"primary",variant:"h3",style:{fontWeight:"bold",fontFamily:"Nanum Gothic",marginBottom:4,textDecoration:"none"}},"#",h)),n.a.createElement(m.a,{variant:"middle"})),n.a.createElement(g,{posts:c,pathPrefix:a}),n.a.createElement(f.a,{variant:"caption",color:"textSecondary",style:{display:"block",marginTop:32,marginBottom:4}},"Select page:"),n.a.createElement(x.a,{selectVariant:"tab",page:b,totalPages:Math.ceil(y/u),onChange:function(e){return Object(l.d)("/"+i+"/"+h+"/page/"+e)}}))))}},wTVA:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},wkBT:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-results-tag-js-0c6117c19f465d01f2af.js.map