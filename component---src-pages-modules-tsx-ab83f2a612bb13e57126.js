(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"4XqW":function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),s=a("HpRU"),o=a.n(s),l=a("xHxs"),r=a.n(l),c=a("7HWN"),M=a.n(c),u=function(e){switch(e=e.toLowerCase()){case"artículo":return r.a;case"video":return M.a;default:return r.a}};t.a=function(e){return n.a.createElement("div",{className:o.a.postTypes},e.types.map((function(e){return n.a.createElement("div",{className:o.a.postType,key:e},n.a.createElement("img",{src:u(e),alt:"post type"}),n.a.createElement("label",{className:[o.a.title,"small-text"].join(" ")},e))})))}},"7HWN":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNiAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuMDE3NTggMTAuMzAyN0g5LjE0MDYyQzEwLjU3MDMgMTAuMzAyNyAxMS40MjU4IDkuNDcwNyAxMS40MjU4IDguMDQ2ODhWNy4yMzgyOEwxMy42NDA2IDkuMTEzMjhDMTMuODc1IDkuMzA2NjQgMTQuMTMyOCA5LjQ0MTQxIDE0LjM3MyA5LjQ0MTQxQzE0Ljg4ODcgOS40NDE0MSAxNS4yMjg1IDkuMDYwNTUgMTUuMjI4NSA4LjUxNTYyVjIuNDU3MDNDMTUuMjI4NSAxLjkxMjExIDE0Ljg4ODcgMS41MzEyNSAxNC4zNzMgMS41MzEyNUMxNC4xMzI4IDEuNTMxMjUgMTMuODc1IDEuNjY2MDIgMTMuNjQwNiAxLjg1OTM4TDExLjQyNTggMy43MzQzOFYyLjkzMTY0QzExLjQyNTggMS41MDE5NSAxMC41NzAzIDAuNjY5OTIyIDkuMTQwNjIgMC42Njk5MjJIMy4wMTc1OEMxLjY1MjM0IDAuNjY5OTIyIDAuNzMyNDIyIDEuNTAxOTUgMC43MzI0MjIgMi45MzE2NFY4LjA0Njg4QzAuNzMyNDIyIDkuNDcwNyAxLjU4Nzg5IDEwLjMwMjcgMy4wMTc1OCAxMC4zMDI3Wk0zLjE4MTY0IDkuNDIzODNDMi4yMjA3IDkuNDIzODMgMS42NzU3OCA4LjkyNTc4IDEuNjc1NzggNy45MDYyNVYzLjA2NjQxQzEuNjc1NzggMi4wNTI3MyAyLjIyMDcgMS41NTQ2OSAzLjE4MTY0IDEuNTU0NjlIOC45NzY1NkM5LjkzMTY0IDEuNTU0NjkgMTAuNDgyNCAyLjA1MjczIDEwLjQ4MjQgMy4wNjY0MVY3LjkwNjI1QzEwLjQ4MjQgOC45MjU3OCA5LjkzMTY0IDkuNDIzODMgOC45NzY1NiA5LjQyMzgzSDMuMTgxNjRaTTE0LjA4MDEgOC4zMTY0MUwxMS40MjU4IDYuMTI1VjQuODQ3NjZMMTQuMDgwMSAyLjY1NjI1QzE0LjEzMjggMi42MTUyMyAxNC4xNjggMi41OTE4IDE0LjIyMDcgMi41OTE4QzE0LjI5MSAyLjU5MTggMTQuMzIwMyAyLjY0NDUzIDE0LjMyMDMgMi43MjY1NlY4LjI0NjA5QzE0LjMyMDMgOC4zMjgxMiAxNC4yOTEgOC4zODY3MiAxNC4yMjA3IDguMzg2NzJDMTQuMTY4IDguMzg2NzIgMTQuMTMyOCA4LjM1MTU2IDE0LjA4MDEgOC4zMTY0MVoiIGZpbGw9IiM3NTc1NzUiLz4KPC9zdmc+Cg=="},"8SuK":function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),s=a("EGbG"),o=a("bsBw"),l=a("NNgJ"),r=a.n(l),c=a("LvDl"),M=a.n(c),u=a("3Z9Z"),m=a("JI6e");var N=function(e){var t,a;function l(t){var a;return(a=e.call(this,t)||this).postList=M.a.cloneDeep(t.list),a.resultList=!!t.result&&t.result,a.state={visiblePosts:[],fullList:!1},a}a=e,(t=l).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=l.prototype;return c.componentDidMount=function(){this.loadMore()},c.componentWillReceiveProps=function(e){var t=this;this.postList=M.a.cloneDeep(e.list),this.setState({visiblePosts:[],fullList:!1},(function(){return t.loadMore()}))},c.loadMore=function(){var e=this.state.visiblePosts.length;this.setState({visiblePosts:this.postList.allMarkdownRemark.edges.slice(0,e+6),fullList:e==this.postList.allMarkdownRemark.edges.length})},c.render=function(){var e=this;return n.a.createElement(i.Fragment,null,this.state.visiblePosts.map((function(t,a){var l=t.node,r=l.frontmatter,c=r.title,M=r.date,u=r.description,m=r.contentType,N=r.tags,p=r.featuredImage,g=l.fields.slug;return n.a.createElement(i.Fragment,{key:a},n.a.createElement(s.a,{key:g,title:c,date:M,excerpt:u||l.excerpt,contentType:m,tags:N,featuredImage:p?p.childImageSharp.fluid.src:null,link:g,extended:0==a&&!e.resultList,mobile:e.props.mobile}),4!=a||e.resultList?"":n.a.createElement(o.a,null))})),this.state.fullList?"":n.a.createElement(u.a,{className:"justify-content-center"},n.a.createElement(m.a,{xs:10,sm:10,md:10,lg:12},n.a.createElement("div",{className:r.a.loadPosts,onClick:function(){return e.loadMore()}},"Cargar más"))))},l}(i.Component);t.a=N},"AK/c":function(e,t,a){e.exports={tags:"post-tags-module--tags--17nvN",tag:"post-tags-module--tag--7Q41U"}},BiO0:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var i=function(e){this.fluid=new n(e.fluid)},n=function(e){this.aspectRatio=e.aspectRatio,this.sizes=e.sizes,this.src=e.src,this.srcSet=e.srcSet}},EGbG:function(e,t,a){"use strict";a("tUrg");var i=a("q1tI"),n=a.n(i),s=a("Wbzz"),o=a("7vrA"),l=a("3Z9Z"),r=a("JI6e"),c=a("j8gP"),M=a.n(c),u=a("4XqW"),m=a("tczV"),N=function(e){return n.a.createElement(o.a,{fluid:!0,className:M.a.container},n.a.createElement(l.a,{className:M.a.row},n.a.createElement(r.a,{className:M.a.contentCol},n.a.createElement(s.Link,{className:[M.a.title,"headline-3"].join(" "),to:e.post.link},e.post.title),n.a.createElement("p",{className:[M.a.date,"small-text"].join(" ")},e.post.date),e.post.contentType?n.a.createElement(u.a,{types:e.post.contentType}):"",n.a.createElement("p",{className:[M.a.excerpt,"paragraph"].join(" ")},e.post.excerpt),e.post.tags?n.a.createElement(m.a,{tags:e.post.tags}):""),e.post.featuredImage?n.a.createElement(r.a,{lg:4,xl:4,className:[M.a.imageCol,"p-0"].join(" ")},n.a.createElement(s.Link,{to:e.post.link},n.a.createElement("img",{src:e.post.featuredImage,alt:""}))):""))},p=function(e){return n.a.createElement(o.a,{fluid:!0,className:[M.a.container,M.a.mobile].join(" ")},n.a.createElement(l.a,{className:[M.a.row,"justify-content-center"].join(" ")},n.a.createElement(r.a,{xs:10,sm:10},n.a.createElement(s.Link,{className:[M.a.title,"headline-3"].join(" "),to:e.post.link},e.post.title),n.a.createElement("p",{className:[M.a.date,"small-text"].join(" ")},e.post.date),e.post.contentType?n.a.createElement(u.a,{types:e.post.contentType}):""),e.post.featuredImage?n.a.createElement(r.a,{xs:10,sm:10,className:M.a.imageCol},n.a.createElement(s.Link,{to:e.post.link},n.a.createElement("img",{src:e.post.featuredImage,alt:""}))):"",n.a.createElement(r.a,{xs:10,sm:10},n.a.createElement("p",{className:[M.a.excerpt,"paragraph m-0",M.a.mobileExcerpt].join(" ")},e.post.excerpt),e.post.tags?n.a.createElement(m.a,{tags:e.post.tags}):"")))},g=function(e){return n.a.createElement(o.a,{fluid:!0,className:M.a.extendedContainer},n.a.createElement(l.a,{className:M.a.row},e.post.featuredImage?n.a.createElement(r.a,{lg:5,xl:5,className:[M.a.imageCol,"p-0"].join(" ")},n.a.createElement(s.Link,{to:e.post.link},n.a.createElement("img",{src:e.post.featuredImage,alt:""}))):"",n.a.createElement(r.a,{className:"p-0"},n.a.createElement(s.Link,{className:[M.a.title,"headline-3"].join(" "),to:e.post.link},e.post.title),n.a.createElement("p",{className:[M.a.date,"small-text"].join(" ")},e.post.date),e.post.contentType?n.a.createElement(u.a,{types:e.post.contentType}):"",n.a.createElement("p",{className:[M.a.excerpt,"paragraph"].join(" ")},e.post.excerpt),e.post.tags?n.a.createElement(m.a,{tags:e.post.tags}):"")))};t.a=function(e){return e.mobile?n.a.createElement(p,{post:e}):e.extended?n.a.createElement(g,{post:e}):n.a.createElement(N,{post:e})}},GLzF:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return N}));var i=a("q1tI"),n=a.n(i),s=a("vNi9"),o=a("7vrA"),l=a("3Z9Z"),r=a("JI6e"),c=a("X/S1"),M=a.n(c),u=a("xqHg"),m=a("8SuK");t.default=function(e){var t=new u.b(e.data);return n.a.createElement(s.a,null,n.a.createElement(o.a,{fluid:!0},n.a.createElement(l.a,{className:"justify-content-md-center"},n.a.createElement(r.a,{lg:10,className:[M.a.header,"d-none d-lg-block"].join(" ")},n.a.createElement("p",{className:["headline-1",M.a.moduleTitle].join(" ")},"Módulos"),n.a.createElement("p",{className:"headline-3"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),n.a.createElement(r.a,{lg:10,className:"d-block d-lg-none"},n.a.createElement("p",{className:["headline-1 text-center",M.a.moduleMobileTitle].join(" ")},"Módulos"),n.a.createElement("p",{className:"headline-3"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),n.a.createElement(r.a,{lg:10,style:{marginTop:"5vh"},className:"p-0 d-none d-lg-block"},n.a.createElement(m.a,{list:t})),n.a.createElement(r.a,{xs:12,sm:12,style:{marginTop:"5vh"},className:"p-0 d-block d-lg-none"},n.a.createElement(m.a,{list:t,mobile:!0})))))};var N="535995146"},HpRU:function(e,t,a){e.exports={postTypes:"post-type-module--post-types--1wREI",postType:"post-type-module--post-type--3SYxr",title:"post-type-module--title--28vs0"}},NNgJ:function(e,t,a){e.exports={loadPosts:"post-list-module--load-posts--17m4n"}},OGtf:function(e,t,a){var i=a("XKFU"),n=a("eeVq"),s=a("vhPU"),o=/"/g,l=function(e,t,a,i){var n=String(s(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(i).replace(o,"&quot;")+'"'),l+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),i(i.P+i.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},"X/S1":function(e,t,a){e.exports={header:"vitals-module--header--1Y4yR",perspectiveTitle:"vitals-module--perspective-title--3oAj0",moduleTitle:"vitals-module--module-title--3Wn_o",projectTitle:"vitals-module--project-title--2rP9F",perspectiveMobileTitle:"vitals-module--perspective-mobile-title--2sNOn",moduleMobileTitle:"vitals-module--module-mobile-title--2W4b5",projectMobileTitle:"vitals-module--project-mobile-title--3O_pz",preview:"vitals-module--preview--1LR6c",mobilePreview:"vitals-module--mobile-preview--1JoNK",overlay:"vitals-module--overlay--1-yof",currentPerspective:"vitals-module--current-perspective--3DjD2",content:"vitals-module--content--29abK",currentPerspectiveMobile:"vitals-module--current-perspective-mobile--2YXHS",excerpt:"vitals-module--excerpt--1tzBB",button:"vitals-module--button--2A3Wv",buttonMobile:"vitals-module--button-mobile--253Lm",perspectiveScroll:"vitals-module--perspective-scroll--1lFtk",mobilePerspectiveScroll:"vitals-module--mobile-perspective-scroll--miCNw",scrollButton:"vitals-module--scroll-button--3C8zK",readMore:"vitals-module--read-more--24G25",twitter:"vitals-module--twitter--10taj",authorPerspectives:"vitals-module--author-perspectives--HuTMa",perspectivesHeader:"vitals-module--perspectives-header--1R6-F",authorText:"vitals-module--author-text--3-WYj",avatar:"vitals-module--avatar--8Cppo",authorPerspectivesMobile:"vitals-module--author-perspectives-mobile--1lid-"}},a9YW:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("f3/d");var i=a("BiO0"),n=function(e){this.name=e.name,this.bio=e.bio,this.title=e.title?e.title:"",this.location=e.location?e.location:"",this.id=e.id,this.twitter=e.twitter?e.twitter:"",this.github=e.github?e.github:"",this.avatar=e.avatar?e.avatar:"",this.image=e.image?new s(e.image):null},s=function(e){this.childImageSharp=new i.a(e.childImageSharp)}},j8gP:function(e,t,a){e.exports={container:"post-preview-module--container--cBFSD",title:"post-preview-module--title--1z1l8",contentCol:"post-preview-module--content-col--2RWnd",imageCol:"post-preview-module--image-col--1rAmZ",mobile:"post-preview-module--mobile--9qLgM",extendedContainer:"post-preview-module--extended-container--3XcIZ",date:"post-preview-module--date--3YxcL",contentPreview:"post-preview-module--content-preview--2rNn-",row:"post-preview-module--row--ytMXm",excerpt:"post-preview-module--excerpt--XUNut",mobileExcerpt:"post-preview-module--mobile-excerpt--3GhUP"}},tUrg:function(e,t,a){"use strict";a("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},tczV:function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),s=a("AK/c"),o=a.n(s),l=a("Wbzz");t.a=function(e){return n.a.createElement("div",{className:o.a.tags},e.tags.map((function(e){return n.a.createElement("div",{key:e,onClick:function(){return function(e){Object(l.navigate)("/search-result/",{state:{searchTerm:"",tags:[e]}})}(e)},className:[o.a.tag,"small-text"].join(" ")},e)})))}},xHxs:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMCAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuODg4NjcgMTIuNzY3Nkg4LjExMTMzQzkuMzI0MjIgMTIuNzY3NiA5LjkyNzczIDEyLjE1MjMgOS45Mjc3MyAxMC45MzM2VjUuNjEzMjhDOS45Mjc3MyA0Ljg1NzQyIDkuODM5ODQgNC41MjkzIDkuMzcxMDkgNC4wNDg4M0w2LjE0MjU4IDAuNzYxNzE5QzUuNjk3MjcgMC4zMDQ2ODggNS4zMjgxMiAwLjIwNTA3OCA0LjY3MTg4IDAuMjA1MDc4SDEuODg4NjdDMC42ODE2NDEgMC4yMDUwNzggMC4wNzIyNjU2IDAuODI2MTcyIDAuMDcyMjY1NiAyLjA0NDkyVjEwLjkzMzZDMC4wNzIyNjU2IDEyLjE1ODIgMC42NzU3ODEgMTIuNzY3NiAxLjg4ODY3IDEyLjc2NzZaTTEuOTI5NjkgMTEuODI0MkMxLjMyNjE3IDExLjgyNDIgMS4wMTU2MiAxMS41MDIgMS4wMTU2MiAxMC45MTZWMi4wNjI1QzEuMDE1NjIgMS40ODI0MiAxLjMyNjE3IDEuMTQ4NDQgMS45MzU1NSAxLjE0ODQ0SDQuNTQyOTdWNC41NTI3M0M0LjU0Mjk3IDUuMjkxMDIgNC45MTIxMSA1LjY1NDMgNS42NDQ1MyA1LjY1NDNIOC45ODQzOFYxMC45MTZDOC45ODQzOCAxMS41MDIgOC42NzM4MyAxMS44MjQyIDguMDY0NDUgMTEuODI0MkgxLjkyOTY5Wk01Ljc1IDQuNzY5NTNDNS41MTU2MiA0Ljc2OTUzIDUuNDI3NzMgNC42NzU3OCA1LjQyNzczIDQuNDQxNDFWMS4zMzAwOEw4LjgwMjczIDQuNzY5NTNINS43NVpNNy4xNTYyNSA3LjI2NTYySDIuNzA4OThDMi40OTgwNSA3LjI2NTYyIDIuMzM5ODQgNy40MjM4MyAyLjMzOTg0IDcuNjIzMDVDMi4zMzk4NCA3LjgyODEyIDIuNDk4MDUgNy45ODYzMyAyLjcwODk4IDcuOTg2MzNINy4xNTYyNUM3LjM2MTMzIDcuOTg2MzMgNy41MTM2NyA3LjgyODEyIDcuNTEzNjcgNy42MjMwNUM3LjUxMzY3IDcuNDIzODMgNy4zNjEzMyA3LjI2NTYyIDcuMTU2MjUgNy4yNjU2MlpNNy4xNTYyNSA5LjMxMDU1SDIuNzA4OThDMi40OTgwNSA5LjMxMDU1IDIuMzM5ODQgOS40NzQ2MSAyLjMzOTg0IDkuNjc5NjlDMi4zMzk4NCA5Ljg3ODkxIDIuNDk4MDUgMTAuMDMxMiAyLjcwODk4IDEwLjAzMTJINy4xNTYyNUM3LjM2MTMzIDEwLjAzMTIgNy41MTM2NyA5Ljg3ODkxIDcuNTEzNjcgOS42Nzk2OUM3LjUxMzY3IDkuNDc0NjEgNy4zNjEzMyA5LjMxMDU1IDcuMTU2MjUgOS4zMTA1NVoiIGZpbGw9IiM3NTc1NzUiLz4KPC9zdmc+Cg=="},xqHg:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return o}));var i=a("a9YW"),n=a("BiO0"),s=function(e){this.allMarkdownRemark=new l(e.allMarkdownRemark)},o=function(e){this.markdownRemark=new r(e.markdownRemark)},l=function(e){var t=this;this.edges=[],e.edges.map((function(e){t.edges.push(new c(e))}))},r=function(e){this.excerpt=e.excerpt,this.fields=e.fields,this.frontmatter=new u(e.frontmatter),this.id=e.id,this.html=e.html},c=function(e){this.node=new M(e.node)},M=function(e){this.excerpt=e.excerpt,this.fields=e.fields,this.frontmatter=new u(e.frontmatter),this.id=e.id},u=function(e){this.date=e.date,this.title=e.title,this.tags=e.tags?e.tags:[],this.contentType=e.contentType?e.contentType:[],this.featuredImage=e.featuredImage?new m(e.featuredImage):null,this.author=e.author?new i.a(e.author):null},m=function(e){this.childImageSharp=new n.a(e.childImageSharp)}}}]);
//# sourceMappingURL=component---src-pages-modules-tsx-ab83f2a612bb13e57126.js.map