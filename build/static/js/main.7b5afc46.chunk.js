(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,n){e.exports=n.p+"static/media/resume.9d630196.pdf"},36:function(e,t,n){e.exports=n.p+"static/media/portrait.1fc03bc7.jpg"},45:function(e,t,n){e.exports=n(85)},52:function(e,t,n){},53:function(e,t,n){e.exports=n.p+"static/media/1.3d7ca4a5.jpg"},54:function(e,t,n){e.exports=n.p+"static/media/2.370c16f3.jpg"},55:function(e,t,n){e.exports=n.p+"static/media/3.346a9de8.jpg"},56:function(e,t,n){e.exports=n.p+"static/media/4.27e43607.jpg"},57:function(e,t,n){e.exports=n.p+"static/media/5.cc339a3c.jpg"},58:function(e,t,n){e.exports=n.p+"static/media/6.f7f4dc4b.jpg"},59:function(e,t,n){e.exports=n.p+"static/media/7.5a8bce06.jpg"},60:function(e,t,n){e.exports=n.p+"static/media/8.f02a43bd.jpg"},61:function(e,t,n){e.exports=n.p+"static/media/9.e34730b7.jpg"},62:function(e,t,n){e.exports=n.p+"static/media/10.6dfe6d3e.jpg"},63:function(e,t,n){e.exports=n.p+"static/media/11.5d6ee329.jpg"},64:function(e,t,n){e.exports=n.p+"static/media/12.be195cf7.jpg"},65:function(e,t,n){e.exports=n.p+"static/media/13.41ed8a2c.jpg"},66:function(e,t,n){e.exports=n.p+"static/media/14.7f3ed760.jpg"},67:function(e,t,n){e.exports=n.p+"static/media/15.d86bd66d.jpg"},68:function(e,t,n){e.exports=n.p+"static/media/16.fdb15928.jpg"},69:function(e,t,n){e.exports=n.p+"static/media/17.14e4c0c1.jpg"},85:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(40),i=n(26),o=n(0),c=n.n(o),l=n(31),u=n.n(l),s=(n(50),n(51),n(52),n(39)),p=n(2),f={githubLink:"https://github.com/jane-le",githubTooltip:"View my projects on Github!",linkedinLink:"https://www.linkedin.com/in/janelamle/",linkedinTooltip:"Here's my LinkedIn!",resumeTooltip:"Check out my resume!",resume:"data",mailLink:"mailto:j39le@edu.uwaterloo.ca",mailTooltip:"Shoot me an email!",headerSubtitle:"Mechatronics Engineering Student",about:{title:"Hey there!\ud83d\udc4b",subtitle:"I'm a ",description:"I have a passion for software development with a soft spot for the end-user. I enjoy leading projects, crafting elegant solutions, and having fun while doing it. Specializing in web/android development, I'm eager to apply my skills and be impactful! "},aboutLoop:["software developer.","mother of two cats.","tetris dominator.","frequent tea drinker.","boiled eggs enthusiast.","sometimes volleyball player.","loser for romcoms."],projects:[{title:"PLACEHODLER",subtitle:"PLACEHOLDER",description:"PLACEHOLDER"},{title:"PLACEHODLER",subtitle:"PLACEHOLDER",description:"PLACEHOLDER"},{title:"PLACEHODLER",subtitle:"PLACEHOLDER",description:"PLACEHOLDER"}],footer:"Jane Le 2020 | Built with \u2764\ufe0f.",darkMode:"\ud83c\udf19",defaultMode:"\u2600\ufe0f",catPhotos:[n(53),n(54),n(55),n(56),n(57),n(58),n(59),n(60),n(61),n(62),n(63),n(64),n(65),n(66),n(67),n(68),n(69)],catBtnText:"\ud83d\ude3a"},d={socialIconSize:"25px",cardBackgroundColor:"#FFFFFF",cardPrimaryHeight:"200px",cardPrimaryWidth:"40%",cardHeight:"200px",cardWidth:"30%",cardLineColor:"#3C00B2",textColor:"black",defaultTheme:{colorBackground:"#FDDF7b",colorPrimary:"#FE898B",textColor:"#580137",font:"Karla",colorAccent:"#000000"},darkTheme:{colorBackground:"#202040",colorPrimary:"#602080",textColor:"#FFFFFF",font:"Karla",colorAccent:"#ffcc00"}},h=n(25),m=n(3),b=n(4),g=n(6),v=n(5),y=n(7),O=n(44),x=n(27),j=n(12),w="",E=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(g.a)(this,Object(v.a)(t).call(this,e))).width=function(){return n.container.current.offsetWidth},n.height=function(){return n.container.current.offsetHeight},n.container=c.a.createRef(),n.state={path:w},n.defaults={height:30,amplitude:20,speed:.4,points:3},n.options=Object(x.a)({},e.options,n.defaults),n.lastUpdate=0,n.elapsed=0,n.step=0,n.update=n.update.bind(Object(j.a)(Object(j.a)(n))),n}return Object(y.a)(t,e),Object(b.a)(t,[{key:"calculateWavePoints",value:function(){for(var e=[],t=0;t<=Math.max(this.options.points,1);t++){var n=t/this.options.points*this.width(),a=(this.step+(t+t%this.options.points))*this.options.speed*100,r=Math.sin(a/100)*this.options.amplitude,i=Math.sin(a/100)*r+this.options.height;e.push({x:n,y:i})}return e}},{key:"buildPath",value:function(e){var t="M ".concat(e[0].x," ").concat(e[0].y),n={x:(e[1].x-e[0].x)/2,y:e[1].y-e[0].y+e[0].y+(e[1].y-e[0].y)},a=function(e,t){return" C ".concat(e.x," ").concat(e.y," ").concat(e.x," ").concat(e.y," ").concat(t.x," ").concat(t.y)};t+=a(n,e[1]);for(var r=n,i=1;i<e.length-1;i++)t+=a(r={x:e[i].x-r.x+e[i].x,y:e[i].y-r.y+e[i].y},e[i+1]);return t+=" L ".concat(this.width()," ").concat(this.height()),t+=" L 0 ".concat(this.height()," Z")}},{key:"redraw",value:function(){this.setState({path:this.buildPath(this.calculateWavePoints())})}},{key:"draw",value:function(){if(!this.props.paused){var e=new Date;this.elapsed+=e-this.lastUpdate,this.lastUpdate=e}this.step=this.elapsed*Math.PI/1e3,this.redraw()}},{key:"update",value:function(){this.draw(),this.frameId&&this.resume()}},{key:"resume",value:function(){this.frameId=window.requestAnimationFrame(this.update),this.lastUpdate=new Date}},{key:"componentDidUpdate",value:function(e){var t=this,n=function(e){"undefined"===typeof t.props.options?t.options[e]=t.defaults[e]:t.options[e]!==t.props.options[e]&&("undefined"===typeof t.props.options[e]?t.options[e]=t.defaults[e]:t.options[e]=t.props.options[e])};n("height"),n("amplitude"),n("speed"),n("points")}},{key:"componentDidMount",value:function(){this.frameId||this.resume()}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.frameId),this.frameId=0,w=this.buildPath(this.calculateWavePoints())}},{key:"render",value:function(){var e=this.props,t=e.style,n=e.className,a=e.fill,r=(e.paused,e.options,e.children),i=e.id,o=Object(O.a)(e,["style","className","fill","paused","options","children","id"]);return c.a.createElement("div",{style:Object(x.a)({width:"100%",display:"inline-block"},t),className:n,id:i,ref:this.container},c.a.createElement("svg",{width:"100%",height:"100%",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r,c.a.createElement("path",Object.assign({d:this.state.path,fill:a},o))))}}]),t}(o.Component);E.defaultProps={paused:!1};var k=E,P=n(41);function C(){var e=Object(a.a)(["\n        color: ",";\n        word-break: break-word;\n        word-wrap: break-word;\n    "]);return C=function(){return e},e}function F(){var e=Object(a.a)(["\n        margin: 0; \n        padding: 0;\n        font-family: ",";\n        font-size: 16px;\n        line-height: 20px;\n        color: ",";\n    "]);return F=function(){return e},e}function L(){var e=Object(a.a)(["\n        margin: 0; \n        font-family: ",";\n        font-size: 24px;\n        line-height: 28px;\n        color: ",";\n    "]);return L=function(){return e},e}function z(){var e=Object(a.a)(["\n        margin: 0; \n        padding: 0;\n        font-family: ",";\n        font-size: 14px;\n        text-align: center;\n        color: ",";\n    \n    "]);return z=function(){return e},e}function M(){var e=Object(a.a)(["\n        margin-top: 20px;\n        margin-bottom: 10px;\n        padding: 0;\n        border-top: 1px solid ",";\n        padding-top: 15px;\n        \n    "]);return M=function(){return e},e}function T(){var e=Object(a.a)(["\n        background: ",";\n        color: ",";\n        flex-direction: column;\n        display: flex; \n        align-items: left;\n        overflow: hidden; \n        border-radius: 30px;\n        opacity: 100%;\n        padding: 10vh;\n        margin: 30px;\n        box-shadow: 1px 1px 8px ",";\n        height: ",";\n        width: ",";\n        @media screen and (max-width: 767px) {\n            height: 50vh;\n            width: 35vh;\n            padding: 5vh;\n        }\n\n        @media screen and (max-width: 320px) {\n            height: 55vh;\n            width: 45vh;\n            padding: 5vh;\n        }\n        \n    "]);return T=function(){return e},e}var R=function(e){function t(){return Object(m.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.subtitle,a=e.description,r=e.isPrimary,i=e.colorTheme,o=p.a.div(T(),i.colorBackground,i.textColor,i.colorBackground,r?d.cardPrimaryHeight:d.cardHeight,r?d.cardPrimaryWidth:d.cardWidth),l=p.a.hr(M(),i.colorPrimary),u=p.a.p(z(),i.font,i.textColor),s=p.a.h2(L(),i.font,i.textColor),h=p.a.h3(F(),i.font,i.textColor),m=Object(p.a)(P.a)(C(),i.colorAccent);return c.a.createElement(o,null,c.a.createElement(s,null,t),c.a.createElement(h,null,n,r?c.a.createElement(m,{children:f.aboutLoop}):c.a.createElement(h,null)),c.a.createElement(l,null),c.a.createElement(u,null,a))}}]),t}(o.Component);function I(){var e=Object(a.a)(["\n      color: #FFFFFF;\n      font-family: ",";\n      margin:0;\n      padding: 10px;\n      font-size: 12px;\n      position: absolute; \n      bottom: 0;\n    "]);return I=function(){return e},e}function H(){var e=Object(a.a)(["\n      color: #FFFFFF;\n      font-family: ",";\n      margin:0;\n      font-size: 34px;\n      font-weight: bold;\n    "]);return H=function(){return e},e}function S(){var e=Object(a.a)(["\n      background-attachment: fixed; \n      background: ",";\n      width: 100%;\n      display: flex;\n      flex-direction: column; \n      align-items: center;\n      height: 100vh;\n      position: relative;\n      justify-content: center;\n    "]);return S=function(){return e},e}var A=function(e){function t(){return Object(m.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.colorTheme,t=p.a.div(S(),e.colorPrimary),n=p.a.h1(H(),e.font),a=p.a.h1(I(),e.font);return c.a.createElement(t,null,c.a.createElement(n,null,"Me"),c.a.createElement(R,{colorTheme:e,description:f.about.description,title:f.about.title,subtitle:f.about.subtitle,isPrimary:!0}),c.a.createElement(a,null,f.footer))}}]),t}(o.Component);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var V=c.a.createElement("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}),N=function(e){var t=e.svgRef,n=D(e,["svgRef"]);return c.a.createElement("svg",B({"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",className:"svg-inline--fa fa-github fa-w-16",role:"img",viewBox:"0 0 496 512",ref:t},n),V)},W=c.a.forwardRef(function(e,t){return c.a.createElement(N,B({svgRef:t},e))});n.p;function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _=c.a.createElement("path",{fill:"currentColor",d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}),q=function(e){var t=e.svgRef,n=J(e,["svgRef"]);return c.a.createElement("svg",U({"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"linkedin-in",className:"svg-inline--fa fa-linkedin-in fa-w-14",role:"img",viewBox:"0 0 448 512",ref:t},n),_)},K=c.a.forwardRef(function(e,t){return c.a.createElement(q,U({svgRef:t},e))});n.p;function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Z(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Q=c.a.createElement("path",{fill:"currentColor",d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"}),X=function(e){var t=e.svgRef,n=Z(e,["svgRef"]);return c.a.createElement("svg",G({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"file",className:"svg-inline--fa fa-file fa-w-12",role:"img",viewBox:"0 0 384 512",ref:t},n),Q)},Y=c.a.forwardRef(function(e,t){return c.a.createElement(X,G({svgRef:t},e))});n.p;function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ee(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var te=c.a.createElement("path",{fill:"currentColor",d:"M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"}),ne=function(e){var t=e.svgRef,n=ee(e,["svgRef"]);return c.a.createElement("svg",$({"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"envelope",className:"svg-inline--fa fa-envelope fa-w-16",role:"img",viewBox:"0 0 512 512",ref:t},n),te)},ae=c.a.forwardRef(function(e,t){return c.a.createElement(ne,$({svgRef:t},e))}),re=(n.p,n(9)),ie=n(35),oe=n.n(ie);function ce(){var e=Object(a.a)(["\n    border: 1px solid ",";\n    transition: all .1s ease;\n    &:hover {\n      background: ",";\n      color: white;\n      transform: scale(1.2);\n    }\n    display: inline-block;\n    padding: 10px;\n    border-radius: 50px;\n    margin: 8px;\n    color: ",";\n    height: ",";\n    width: ",";\n  "]);return ce=function(){return e},e}function le(){var e=Object(a.a)(["\n  list-style: none;\n  display: inline-flex;\n  margin: 0;\n  padding: 0;\n"]);return le=function(){return e},e}var ue=p.a.ul(le()),se=function(e){function t(){return Object(m.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.width,a=e.theme,r=p.a.a(ce(),a.colorAccent,a.colorAccent,a.colorAccent,this.props.width,this.props.width);return c.a.createElement(ue,null,c.a.createElement("li",null,c.a.createElement(r,{"data-tip":t.githubTooltip,target:"_blank",href:t.githubLink},c.a.createElement(W,{height:n,width:n})),c.a.createElement(re.a,{"aria-haspopup":"true"})),c.a.createElement("li",null,c.a.createElement(r,{"data-tip":t.resumeTooltip,target:"_blank",href:oe.a},c.a.createElement(Y,{height:n,width:n})),c.a.createElement(re.a,{"aria-haspopup":"true"})),c.a.createElement("li",null,c.a.createElement(r,{"data-tip":t.linkedinTooltip,target:"_blank",href:t.linkedinLink},c.a.createElement(K,{height:n,width:n})),c.a.createElement(re.a,{"aria-haspopup":"true"})),c.a.createElement("li",null,c.a.createElement(r,{"data-tip":t.mailTooltip,href:t.mailLink},c.a.createElement(ae,{height:n,width:n})),c.a.createElement(re.a,{"aria-haspopup":"true"})))}}]),t}(o.Component),pe=n(36),fe=n.n(pe);function de(){var e=Object(a.a)(["\n            width: 300px;\n        \n        "]);return de=function(){return e},e}function he(){var e=Object(a.a)(["\n            width: 100%;\n            display: flex;\n            flex-direction: column; \n            align-items: center;\n            height: 100%;\n            justify-content: center;\n            position: fixed;\n        "]);return he=function(){return e},e}function me(){var e=Object(a.a)(["\n            color: ",";\n            font-family: ",";\n            margin:0;\n            padding: 0;\n            font-size: 22px;\n            z-index: 100;\n            word-break: break-word;\n            text-align: center;\n            @media screen and (max-width: 767px) {\n                width: 300px;\n                font-size: 12px;\n            }\n        "]);return me=function(){return e},e}function be(){var e=Object(a.a)(["\n            color: ",";\n            font-family: ",";\n            font-weight: bold;\n            margin:0;\n            padding: 30px;\n            font-size: 58px;\n            cursor: pointer;\n            z-index: 100;\n            letter-spacing: 15px;\n        "]);return be=function(){return e},e}var ge=function(e){function t(){return Object(m.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.colorTheme,a=p.a.a(be(),n.colorAccent,n.font),r=p.a.h1(me(),n.colorAccent,n.font),i=p.a.div(he()),o=p.a.img(de());return c.a.createElement(i,null,c.a.createElement(a,{"data-tip":!0,"data-for":"Tooltip"},"Jane Le"),c.a.createElement(re.a,{place:"right",id:"Tooltip"},c.a.createElement(o,{src:fe.a})),c.a.createElement(r,null,t.headerSubtitle),c.a.createElement(se,{theme:n,data:t,width:d.socialIconSize}))}}]),t}(o.Component);function ve(){var e=Object(a.a)(["\n      width: 100%;\n      height: 100%;\n      background: ","\n    "]);return ve=function(){return e},e}function ye(){var e=Object(a.a)(["\n  margin-top: 80vh;\n  position: relative;\n"]);return ye=function(){return e},e}var Oe=Object(p.a)(k)(ye()),xe=function(e){function t(){return Object(m.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.colorTheme,n=e.data,a=p.a.div(ve(),t.colorBackground);return c.a.createElement(a,null,c.a.createElement(ge,{data:n,colorTheme:t}),c.a.createElement(Oe,{fill:t.colorPrimary}),c.a.createElement(A,{colorTheme:t}))}}]),t}(o.Component);function je(){var e=Object(a.a)(["\n    font-family: ",";\n    &:hover {\n      transform: scale(1.1);\n      color: ",";\n      background: #FFFFFF;\n    }\n    background: ",";\n    border: 1px solid ",";\n    border-radius: 130px;\n  "]);return je=function(){return e},e}var we=h.b.img({enter:{opacity:1},exit:{opacity:0}});function Ee(e){var t=e.id,n=e.imageIndex,a=e.deleteImage,r=function(){return a(t)};Object(o.useEffect)(function(){var e=setTimeout(r,3e3);return function(){return clearTimeout(e)}},[]);var i={top:Math.floor(40*Math.random()+5).toString().concat("vh"),right:Math.floor(80*Math.random()).toString().concat("vw")};return c.a.createElement(h.a,null,c.a.createElement(we,{className:"cat-image fade-in",style:i,key:"catImage",src:f.catPhotos[n]}))}var ke=0,Pe=d.defaultTheme,Ce=f.darkMode;function Fe(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],l=Object(o.useState)([]),u=Object(i.a)(l,2),s=u[0],h=u[1],m=function(e){return a(function(t){return t.filter(function(t){return t.id!==e})})},b=p.a.a(je(),Pe.font,Pe.colorPrimary,Pe.colorPrimary,Pe.colorPrimary);return c.a.createElement(c.a.Fragment,null,c.a.createElement(xe,{data:f,colorTheme:Pe}),c.a.createElement(b,{className:"cat-btn",onClick:function(){return e=Math.floor(Math.random()*f.catPhotos.length),a([].concat(Object(r.a)(n),[{id:ke++,imageIndex:e}]));var e}},f.catBtnText),n.map(function(e){return c.a.createElement(Ee,Object.assign({key:e.id},e,{deleteImage:m}))}),c.a.createElement(b,{className:"cat-btn dark-btn",onClick:function(){return h(!s),void(Pe===d.defaultTheme?(Pe=d.darkTheme,Ce=f.defaultMode):(Pe=d.defaultTheme,Ce=f.darkMode))}},Ce))}var Le=document.getElementById("root");u.a.render(c.a.createElement(s.a,null,c.a.createElement(Fe,null)),Le)}},[[45,1,2]]]);
//# sourceMappingURL=main.7b5afc46.chunk.js.map