(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"6VaU":function(t,e,i){"use strict";var n=i("XKFU"),r=i("xF/b"),a=i("S/j/"),o=i("ne8i"),s=i("2OiF"),l=i("zRwo");n(n.P,"Array",{flatMap:function(t){var e,i,n=a(this);return s(t),e=o(n.length),i=l(n,0),r(i,n,n,e,0,1,t,arguments[1]),i}}),i("nGyu")("flatMap")},"7VC1":function(t,e,i){"use strict";var n=i("XKFU"),r=i("Lgjv"),a=i("ol8x"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(a);n(n.P+n.F*o,"String",{padEnd:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},"8SuK":function(t,e,i){"use strict";var n=i("q1tI"),r=i.n(n),a=i("EGbG"),o=i("bsBw"),s=i("NNgJ"),l=i.n(s),c=i("LvDl"),u=i.n(c),d=i("3Z9Z"),p=i("JI6e");var m=function(t){var e,i;function s(e){var i;return(i=t.call(this,e)||this).postList=u.a.cloneDeep(e.list),i.resultList=!!e.result&&e.result,i.state={visiblePosts:[],fullList:!1},i}i=t,(e=s).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i;var c=s.prototype;return c.componentDidMount=function(){this.loadMore()},c.componentWillReceiveProps=function(t){var e=this;this.postList=u.a.cloneDeep(t.list),this.setState({visiblePosts:[],fullList:!1},(function(){return e.loadMore()}))},c.loadMore=function(){var t=this.state.visiblePosts.length;this.setState({visiblePosts:this.postList.allMarkdownRemark.edges.slice(0,t+6),fullList:t==this.postList.allMarkdownRemark.edges.length})},c.render=function(){var t=this;return r.a.createElement(n.Fragment,null,this.state.visiblePosts.map((function(e,i){var s=e.node,l=s.frontmatter,c=l.title,u=l.date,d=l.description,p=l.contentType,m=l.tags,f=l.featuredImage,h=l.type,v=s.fields.slug;return r.a.createElement(n.Fragment,{key:i},r.a.createElement(a.a,{key:v,title:c,date:u,excerpt:d||s.excerpt,contentType:p,tags:m,featuredImage:f?f.childImageSharp.fluid.src:null,type:h,link:v,extended:0==i&&!t.resultList,mobile:t.props.mobile}),4!=i||t.resultList?"":r.a.createElement(o.a,null))})),this.state.fullList?"":r.a.createElement(d.a,{className:"justify-content-center"},r.a.createElement(p.a,{xs:10,sm:10,md:10,lg:12},r.a.createElement("div",{className:l.a.loadPosts,onClick:function(){return t.loadMore()}},"Cargar más"))))},s}(n.Component);e.a=m},"9XZr":function(t,e,i){"use strict";var n=i("XKFU"),r=i("Lgjv"),a=i("ol8x"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(a);n(n.P+n.F*o,"String",{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},AphP:function(t,e,i){"use strict";var n=i("XKFU"),r=i("S/j/"),a=i("apmT");n(n.P+n.F*i("eeVq")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var e=r(this),i=a(e);return"number"!=typeof i||isFinite(i)?e.toISOString():null}})},BiO0:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var n=function(t){this.fluid=new r(t.fluid)},r=function(t){this.aspectRatio=t.aspectRatio,this.sizes=t.sizes,this.src=t.src,this.srcSet=t.srcSet}},FLlr:function(t,e,i){var n=i("XKFU");n(n.P,"String",{repeat:i("l0Rn")})},"HAE/":function(t,e,i){var n=i("XKFU");n(n.S+n.F*!i("nh4g"),"Object",{defineProperty:i("hswa").f})},I74W:function(t,e,i){"use strict";i("qncB")("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},INYr:function(t,e,i){"use strict";var n=i("XKFU"),r=i("CkkT")(6),a="findIndex",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i("nGyu")(a)},Lgjv:function(t,e,i){var n=i("ne8i"),r=i("l0Rn"),a=i("vhPU");t.exports=function(t,e,i,o){var s=String(a(t)),l=s.length,c=void 0===i?" ":String(i),u=n(e);if(u<=l||""==c)return s;var d=u-l,p=r.call(c,Math.ceil(d/c.length));return p.length>d&&(p=p.slice(0,d)),o?p+s:s+p}},NNgJ:function(t,e,i){t.exports={loadPosts:"post-list-module--load-posts--17m4n"}},Nr18:function(t,e,i){"use strict";var n=i("S/j/"),r=i("d/Gc"),a=i("ne8i");t.exports=function(t){for(var e=n(this),i=a(e.length),o=arguments.length,s=r(o>1?arguments[1]:void 0,i),l=o>2?arguments[2]:void 0,c=void 0===l?i:r(l,i);c>s;)e[s++]=t;return e}},SPin:function(t,e,i){"use strict";var n=i("XKFU"),r=i("eyMr");n(n.P+n.F*!i("LyE8")([].reduceRight,!0),"Array",{reduceRight:function(t){return r(this,t,arguments.length,arguments[1],!0)}})},Tze0:function(t,e,i){"use strict";i("qncB")("trim",(function(t){return function(){return t(this,3)}}))},"X/S1":function(t,e,i){t.exports={header:"vitals-module--header--1Y4yR",perspectiveTitle:"vitals-module--perspective-title--3oAj0",moduleTitle:"vitals-module--module-title--3Wn_o",projectTitle:"vitals-module--project-title--2rP9F",perspectiveMobileTitle:"vitals-module--perspective-mobile-title--2sNOn",moduleMobileTitle:"vitals-module--module-mobile-title--2W4b5",projectMobileTitle:"vitals-module--project-mobile-title--3O_pz",preview:"vitals-module--preview--1LR6c",mobilePreview:"vitals-module--mobile-preview--1JoNK",overlay:"vitals-module--overlay--1-yof",currentPerspective:"vitals-module--current-perspective--3DjD2",content:"vitals-module--content--29abK",currentPerspectiveMobile:"vitals-module--current-perspective-mobile--2YXHS",excerpt:"vitals-module--excerpt--1tzBB",button:"vitals-module--button--2A3Wv",buttonMobile:"vitals-module--button-mobile--253Lm",perspectiveScroll:"vitals-module--perspective-scroll--1lFtk",mobilePerspectiveScroll:"vitals-module--mobile-perspective-scroll--miCNw",scrollButton:"vitals-module--scroll-button--3C8zK",readMore:"vitals-module--read-more--24G25",twitter:"vitals-module--twitter--10taj",authorPerspectives:"vitals-module--author-perspectives--HuTMa",perspectivesHeader:"vitals-module--perspectives-header--1R6-F",authorText:"vitals-module--author-text--3-WYj",avatar:"vitals-module--avatar--8Cppo",authorPerspectivesMobile:"vitals-module--author-perspectives-mobile--1lid-"}},YuTi:function(t,e,i){i("HAE/"),t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},a9YW:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i("f3/d");var n=i("BiO0"),r=function(t){this.name=t.name,this.bio=t.bio,this.title=t.title?t.title:"",this.location=t.location?t.location:"",this.id=t.id,this.twitter=t.twitter?t.twitter:"",this.github=t.github?t.github:"",this.avatar=t.avatar?t.avatar:"",this.image=t.image?new a(t.image):null},a=function(t){this.childImageSharp=new n.a(t.childImageSharp)}},bHtr:function(t,e,i){var n=i("XKFU");n(n.P,"Array",{fill:i("Nr18")}),i("nGyu")("fill")},fA63:function(t,e,i){"use strict";i("qncB")("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},gZkK:function(t,e,i){"use strict";i.r(e),i.d(e,"pageQuery",(function(){return m}));var n=i("q1tI"),r=i.n(n),a=i("vNi9"),o=i("7vrA"),s=i("3Z9Z"),l=i("JI6e"),c=i("X/S1"),u=i.n(c),d=i("xqHg"),p=i("8SuK");e.default=function(t){var e=new d.b(t.data);return r.a.createElement(a.a,null,r.a.createElement(o.a,{fluid:!0},r.a.createElement(s.a,{className:"justify-content-md-center"},r.a.createElement(l.a,{lg:10,className:[u.a.header,"d-none d-lg-block p-0"].join(" ")},r.a.createElement("p",{className:["headline-1",u.a.projectTitle].join(" ")},"Proyectos"),r.a.createElement("p",{className:"headline-3"},"Problemas y soluciones escalables para tus primeros proyectos en ciencia de datos.")),r.a.createElement(l.a,{lg:10,className:"d-block d-lg-none"},r.a.createElement("p",{className:["headline-1 text-center",u.a.moduleProjectTitle].join(" ")},"Proyectos"),r.a.createElement("p",{className:"headline-3"},"Problemas y soluciones escalables para tus primeros proyectos en ciencia de datos.")),r.a.createElement(l.a,{lg:10,style:{marginTop:"5vh"},className:"p-0 d-none d-lg-block"},r.a.createElement(p.a,{list:e})),r.a.createElement(l.a,{xs:12,sm:12,style:{marginTop:"5vh"},className:"p-0 d-block d-lg-none"},r.a.createElement(p.a,{list:e,mobile:!0})))))};var m="1561548149"},l0Rn:function(t,e,i){"use strict";var n=i("RYi7"),r=i("vhPU");t.exports=function(t){var e=String(r(this)),i="",a=n(t);if(a<0||a==1/0)throw RangeError("Count can't be negative");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(i+=e);return i}},mGWK:function(t,e,i){"use strict";var n=i("XKFU"),r=i("aCFj"),a=i("RYi7"),o=i("ne8i"),s=[].lastIndexOf,l=!!s&&1/[1].lastIndexOf(1,-0)<0;n(n.P+n.F*(l||!i("LyE8")(s)),"Array",{lastIndexOf:function(t){if(l)return s.apply(this,arguments)||0;var e=r(this),i=o(e.length),n=i-1;for(arguments.length>1&&(n=Math.min(n,a(arguments[1]))),n<0&&(n=i+n);n>=0;n--)if(n in e&&e[n]===t)return n||0;return-1}})},"xF/b":function(t,e,i){"use strict";var n=i("EWmC"),r=i("0/R4"),a=i("ne8i"),o=i("m0Pp"),s=i("K0xU")("isConcatSpreadable");t.exports=function t(e,i,l,c,u,d,p,m){for(var f,h,v=u,g=0,b=!!p&&o(p,m,3);g<c;){if(g in l){if(f=b?b(l[g],g,i):l[g],h=!1,r(f)&&(h=void 0!==(h=f[s])?!!h:n(f)),h&&d>0)v=t(e,i,f,a(f.length),v,d-1)-1;else{if(v>=9007199254740991)throw TypeError();e[v]=f}v++}g++}return v}},xqHg:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"a",(function(){return o}));var n=i("a9YW"),r=i("BiO0"),a=function(t){this.allMarkdownRemark=new s(t.allMarkdownRemark)},o=function(t){this.markdownRemark=new l(t.markdownRemark)},s=function(t){var e=this;this.edges=[],t.edges.map((function(t){e.edges.push(new c(t))}))},l=function(t){this.excerpt=t.excerpt,this.fields=t.fields,this.frontmatter=new d(t.frontmatter),this.id=t.id,this.html=t.html},c=function(t){this.node=new u(t.node)},u=function(t){this.excerpt=t.excerpt,this.fields=t.fields,this.frontmatter=new d(t.frontmatter),this.id=t.id},d=function(t){this.date=t.date,this.title=t.title,this.tags=t.tags?t.tags:[],this.contentType=t.contentType?t.contentType:[],this.featuredImage=t.featuredImage?new p(t.featuredImage):null,this.type=t.type,this.author=t.author?new n.a(t.author):null},p=function(t){this.childImageSharp=new r.a(t.childImageSharp)}},yLpj:function(t,e){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(n){"object"==typeof window&&(i=window)}t.exports=i}}]);
//# sourceMappingURL=component---src-pages-projects-tsx-3b146e45e5f61b4d5c22.js.map