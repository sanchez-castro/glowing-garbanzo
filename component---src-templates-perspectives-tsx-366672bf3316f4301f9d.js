(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"6VaU":function(t,e,n){"use strict";var a=n("XKFU"),r=n("xF/b"),i=n("S/j/"),s=n("ne8i"),o=n("2OiF"),l=n("zRwo");a(a.P,"Array",{flatMap:function(t){var e,n,a=i(this);return o(t),e=s(a.length),n=l(a,0),r(n,a,a,e,0,1,t,arguments[1]),n}}),n("nGyu")("flatMap")},"7VC1":function(t,e,n){"use strict";var a=n("XKFU"),r=n("Lgjv"),i=n("ol8x"),s=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);a(a.P+a.F*s,"String",{padEnd:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},"8SuK":function(t,e,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("EGbG"),s=n("bsBw"),o=n("NNgJ"),l=n.n(o),c=n("LvDl"),u=n.n(c),f=n("3Z9Z"),d=n("JI6e");var h=function(t){var e,n;function o(e){var n;return(n=t.call(this,e)||this).postList=u.a.cloneDeep(e.list),n.resultList=!!e.result&&e.result,n.state={visiblePosts:[],fullList:!1},n}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var c=o.prototype;return c.componentDidMount=function(){this.loadMore()},c.componentWillReceiveProps=function(t){var e=this;this.postList=u.a.cloneDeep(t.list),this.setState({visiblePosts:[],fullList:!1},(function(){return e.loadMore()}))},c.loadMore=function(){var t=this.state.visiblePosts.length;this.setState({visiblePosts:this.postList.allMarkdownRemark.edges.slice(0,t+6),fullList:t==this.postList.allMarkdownRemark.edges.length})},c.render=function(){var t=this;return r.a.createElement(a.Fragment,null,this.state.visiblePosts.map((function(e,n){var o=e.node,l=o.frontmatter,c=l.title,u=l.date,f=l.description,d=l.contentType,h=l.tags,m=l.featuredImage,p=l.type,g=o.fields.slug;return r.a.createElement(a.Fragment,{key:n},r.a.createElement(i.a,{key:g,title:c,date:u,excerpt:f||o.excerpt,contentType:d,tags:h,featuredImage:m?m.childImageSharp.fluid.src:null,type:p,link:g,extended:0==n&&!t.resultList,mobile:t.props.mobile}),4!=n||t.resultList?"":r.a.createElement(s.a,null))})),this.state.fullList?"":r.a.createElement(f.a,{className:"justify-content-center"},r.a.createElement(d.a,{xs:10,sm:10,md:10,lg:12},r.a.createElement("div",{className:l.a.loadPosts,onClick:function(){return t.loadMore()}},"Cargar más"))))},o}(a.Component);e.a=h},"9XZr":function(t,e,n){"use strict";var a=n("XKFU"),r=n("Lgjv"),i=n("ol8x"),s=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);a(a.P+a.F*s,"String",{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},AphP:function(t,e,n){"use strict";var a=n("XKFU"),r=n("S/j/"),i=n("apmT");a(a.P+a.F*n("eeVq")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var e=r(this),n=i(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},BiO0:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a=function(t){this.fluid=new r(t.fluid)},r=function(t){this.aspectRatio=t.aspectRatio,this.sizes=t.sizes,this.src=t.src,this.srcSet=t.srcSet}},FLlr:function(t,e,n){var a=n("XKFU");a(a.P,"String",{repeat:n("l0Rn")})},"HAE/":function(t,e,n){var a=n("XKFU");a(a.S+a.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},I74W:function(t,e,n){"use strict";n("qncB")("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},INYr:function(t,e,n){"use strict";var a=n("XKFU"),r=n("CkkT")(6),i="findIndex",s=!0;i in[]&&Array(1)[i]((function(){s=!1})),a(a.P+a.F*s,"Array",{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")(i)},Lgjv:function(t,e,n){var a=n("ne8i"),r=n("l0Rn"),i=n("vhPU");t.exports=function(t,e,n,s){var o=String(i(t)),l=o.length,c=void 0===n?" ":String(n),u=a(e);if(u<=l||""==c)return o;var f=u-l,d=r.call(c,Math.ceil(f/c.length));return d.length>f&&(d=d.slice(0,f)),s?d+o:o+d}},NNgJ:function(t,e,n){t.exports={loadPosts:"post-list-module--load-posts--17m4n"}},Nr18:function(t,e,n){"use strict";var a=n("S/j/"),r=n("d/Gc"),i=n("ne8i");t.exports=function(t){for(var e=a(this),n=i(e.length),s=arguments.length,o=r(s>1?arguments[1]:void 0,n),l=s>2?arguments[2]:void 0,c=void 0===l?n:r(l,n);c>o;)e[o++]=t;return e}},SPin:function(t,e,n){"use strict";var a=n("XKFU"),r=n("eyMr");a(a.P+a.F*!n("LyE8")([].reduceRight,!0),"Array",{reduceRight:function(t){return r(this,t,arguments.length,arguments[1],!0)}})},Tze0:function(t,e,n){"use strict";n("qncB")("trim",(function(t){return function(){return t(this,3)}}))},YuTi:function(t,e,n){n("HAE/"),t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},a9YW:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("f3/d");var a=n("BiO0"),r=function(t){this.name=t.name,this.bio=t.bio,this.title=t.title?t.title:"",this.location=t.location?t.location:"",this.id=t.id,this.twitter=t.twitter?t.twitter:"",this.github=t.github?t.github:"",this.avatar=t.avatar?t.avatar:"",this.image=t.image?new i(t.image):null},i=function(t){this.childImageSharp=new a.a(t.childImageSharp)}},aS3W:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return h}));n("f3/d");var a=n("q1tI"),r=n.n(a),i=n("vNi9"),s=n("7vrA"),o=n("3Z9Z"),l=n("JI6e"),c=n("hKWV"),u=n.n(c),f=n("8SuK"),d=n("xqHg");e.default=function(t){var e=t.data.allMarkdownRemark.group[0].nodes[0].frontmatter.author,n=new d.b(t.data);return r.a.createElement(i.a,null,r.a.createElement(s.a,{fluid:!0},r.a.createElement(o.a,{className:"justify-content-md-center"},r.a.createElement(l.a,{lg:10,className:"d-none d-lg-block"},r.a.createElement(o.a,{className:u.a.header},r.a.createElement(l.a,{lg:1,className:"p-0"},e.image?r.a.createElement("img",{className:u.a.avatar,src:e.image.childImageSharp.fluid.src,alt:""}):""),r.a.createElement(l.a,{lg:11,className:[u.a.authorData,"p-0"].join(" ")},r.a.createElement("p",{className:u.a.name}," ",r.a.createElement("span",{className:"headline-3"},e.name)," ",r.a.createElement("a",{href:"https://www.twitter.com/"+e.twitter,target:"_blank",rel:"noreferrer",className:["headline-4",u.a.twitter].join(" ")}," ","@",e.twitter)),r.a.createElement("p",{className:"headline-2"},"Perspectivas")))),r.a.createElement(l.a,{lg:10,className:"d-block d-lg-none p-0"},r.a.createElement(o.a,{className:u.a.mobileHeader},r.a.createElement(l.a,{lg:1,className:"p-0 d-flex justify-content-center"},e.image?r.a.createElement("img",{className:u.a.avatar,src:e.image.childImageSharp.fluid.src,alt:""}):""),r.a.createElement(l.a,{lg:11,className:"p-0"},r.a.createElement("p",{className:"headline-3 text-center m-0"},e.name)," ",r.a.createElement("p",{className:"text-center m-0"},r.a.createElement("a",{href:"https://www.twitter.com/"+e.twitter,target:"_blank",rel:"noreferrer",className:["headline-4",u.a.twitter].join(" ")}," ","@",e.twitter)),r.a.createElement("p",{className:"headline-3 text-center m-0"},"Perspectivas")))),r.a.createElement(l.a,{lg:10,className:"d-none d-lg-block"},r.a.createElement(f.a,{result:!0,list:n})),r.a.createElement(l.a,{sm:12,className:"d-block d-lg-none p-0"},r.a.createElement(f.a,{mobile:!0,result:!0,list:n})))))};var h="1722482659"},bHtr:function(t,e,n){var a=n("XKFU");a(a.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},fA63:function(t,e,n){"use strict";n("qncB")("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},hKWV:function(t,e,n){t.exports={header:"perspectives-module--header--1YYUe",mobileHeader:"perspectives-module--mobile-header--2pvKL",authorData:"perspectives-module--author-data--s4Bbv",avatar:"perspectives-module--avatar--LQhwo",twitter:"perspectives-module--twitter--31RoU"}},l0Rn:function(t,e,n){"use strict";var a=n("RYi7"),r=n("vhPU");t.exports=function(t){var e=String(r(this)),n="",i=a(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},mGWK:function(t,e,n){"use strict";var a=n("XKFU"),r=n("aCFj"),i=n("RYi7"),s=n("ne8i"),o=[].lastIndexOf,l=!!o&&1/[1].lastIndexOf(1,-0)<0;a(a.P+a.F*(l||!n("LyE8")(o)),"Array",{lastIndexOf:function(t){if(l)return o.apply(this,arguments)||0;var e=r(this),n=s(e.length),a=n-1;for(arguments.length>1&&(a=Math.min(a,i(arguments[1]))),a<0&&(a=n+a);a>=0;a--)if(a in e&&e[a]===t)return a||0;return-1}})},"xF/b":function(t,e,n){"use strict";var a=n("EWmC"),r=n("0/R4"),i=n("ne8i"),s=n("m0Pp"),o=n("K0xU")("isConcatSpreadable");t.exports=function t(e,n,l,c,u,f,d,h){for(var m,p,g=u,v=0,w=!!d&&s(d,h,3);v<c;){if(v in l){if(m=w?w(l[v],v,n):l[v],p=!1,r(m)&&(p=void 0!==(p=m[o])?!!p:a(m)),p&&f>0)g=t(e,n,m,i(m.length),g,f-1)-1;else{if(g>=9007199254740991)throw TypeError();e[g]=m}g++}v++}return g}},xqHg:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s}));var a=n("a9YW"),r=n("BiO0"),i=function(t){this.allMarkdownRemark=new o(t.allMarkdownRemark)},s=function(t){this.markdownRemark=new l(t.markdownRemark)},o=function(t){var e=this;this.edges=[],t.edges.map((function(t){e.edges.push(new c(t))}))},l=function(t){this.excerpt=t.excerpt,this.fields=t.fields,this.frontmatter=new f(t.frontmatter),this.id=t.id,this.html=t.html},c=function(t){this.node=new u(t.node)},u=function(t){this.excerpt=t.excerpt,this.fields=t.fields,this.frontmatter=new f(t.frontmatter),this.id=t.id},f=function(t){this.date=t.date,this.title=t.title,this.tags=t.tags?t.tags:[],this.contentType=t.contentType?t.contentType:[],this.featuredImage=t.featuredImage?new d(t.featuredImage):null,this.type=t.type,this.author=t.author?new a.a(t.author):null},d=function(t){this.childImageSharp=new r.a(t.childImageSharp)}},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(a){"object"==typeof window&&(n=window)}t.exports=n}}]);
//# sourceMappingURL=component---src-templates-perspectives-tsx-366672bf3316f4301f9d.js.map