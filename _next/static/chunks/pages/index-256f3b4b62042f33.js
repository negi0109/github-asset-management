(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2e3)}])},2e3:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return be}});var r=t(4051),a=t.n(r),o=t(5893),i=t(1864),s=t.n(i),c=t(7294),l=t(9008),u=t(214),f=t.n(u);var d=t(1163);var p,h=t(6829);function m(e,n,t,r,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,a)}function x(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){m(o,r,a,i,s,"next",e)}function s(e){m(o,r,a,i,s,"throw",e)}i(void 0)}))}}function v(e){return g.apply(this,arguments)}function g(){return(g=x(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=n){e.next=2;break}return e.abrupt("return");case 2:return p=new h.vd({auth:n}),e.next=5,p.rest.users.getAuthenticated();case 5:return t=e.sent,e.next=8,p.rest.repos.listForAuthenticatedUser({sort:"updated"});case 8:return r=e.sent,e.abrupt("return",{repos:r,user:t});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,n,t){return b.apply(this,arguments)}function b(){return(b=x(a().mark((function e(n,t,r){var o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.rest.repos.getContent({owner:n,repo:t,path:r});case 2:return o=e.sent,e.abrupt("return",o.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,n,t){return y.apply(this,arguments)}function y(){return(y=x(a().mark((function e(n,t,r){var o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.rest.git.getBlob({owner:n,repo:t,file_sha:r});case 2:return o=e.sent,e.abrupt("return",o);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,n,t){return k.apply(this,arguments)}function k(){return(k=x(a().mark((function e(n,t,r){var o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.rest.repos.getContent({owner:n,repo:t,path:r});case 2:return o=e.sent,e.abrupt("return",o);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=t(8358),C=t(7812),S=t(1518),O=t(9685),R=t(8108),E=t(760),P=t(326),N=t(3595),A=t(6540),F=t(2663),H=t(1749),T=t(3832),G=t(9659),I=t(3426),W=t(282),U=t(4436),L=t(6394),M=t(4105),B=t(7702),D=t(7814),J=t(6083),Q=t(9525),X=t(3086);function Y(e){var n=e.value,t=e.onChange,r=(0,c.useState)(!1),a=r[0],i=r[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(D.G,{onClick:function(e){i(!0)},icon:n}),(0,o.jsxs)(F.Z,{open:a,onClose:function(){i(!1)},maxWidth:"sm",fullWidth:!0,children:[(0,o.jsx)(J.Z,{id:"scroll-dialog-title",children:"Icon Picker"}),(0,o.jsx)(Q.Z,{dividers:"paper"===scroll,children:X.U.map((function(e){return(0,o.jsx)(D.G,{icon:e,onClick:function(n){i(!1),t(e)}},"".concat(e[0],"/").concat(e[1]))}))})]})]})}var q=t(3772),K=t(6486),$=t.n(K);function z(e){var n,t,r,a,i=e.opened,s=e.file,l=e.onClose,u=e.blobs,f=e.setting,d=e.forceUpdate;return(0,o.jsx)(F.Z,{open:i,onClose:l,maxWidth:"sm",fullWidth:!0,children:(0,o.jsxs)(H.Z,{container:!0,children:[(0,o.jsx)("img",{width:"66.66666%",src:"data:image/".concat(s.prev,";base64,").concat(null===(t=u[null===(n=s[s.prev])||void 0===n?void 0:n.sha])||void 0===t||null===(r=t.data)||void 0===r?void 0:r.content),alt:s.name,className:"pixelated"}),(0,o.jsx)(H.Z,{container:!0,item:!0,direction:"column",xs:4,children:(0,o.jsxs)(T.Z,{children:["name: ",s.name,(0,o.jsx)("hr",{}),(0,o.jsx)(H.Z,{container:!0,children:null===s||void 0===s||null===(a=s.exts)||void 0===a?void 0:a.map((function(e){return(0,o.jsx)(H.Z,{container:!0,item:!0,children:(0,o.jsx)(G.Z,{href:s[e].html_url,target:"_blank",children:e})},e)}))}),(0,o.jsx)("hr",{}),(0,o.jsxs)(H.Z,{container:!0,children:[(0,o.jsx)(H.Z,{container:!0,item:!0,children:void 0!==f.tagRelations[s.name]?f.tagRelations[s.name].map((function(e){return(0,o.jsxs)(c.Fragment,{children:[(0,o.jsx)(H.Z,{item:!0,xs:2,children:(0,o.jsx)(Y,{value:f.tags[e].icon,onChange:function(n){f.tags[e].icon=n,d({})}})}),(0,o.jsx)(H.Z,{item:!0,xs:9,children:(0,o.jsx)(I.Z,{type:"text",value:f.tags[e].name,onChange:function(n){f.tags[e].name=n.target.value,d({})}})}),(0,o.jsx)(H.Z,{item:!0,xs:1,children:(0,o.jsx)(q.Z,{onClick:function(){$().remove(f.tagRelations[s.name],(function(n){return n==e})),d({})}})})]},e)})):null}),(0,o.jsxs)(W.Z,{onClick:function(){var e;console.log("add tag");do{e=Math.random().toString(35).slice(-8)}while(void 0!==f.tags[e]);var n={};f.tags[e]=n,void 0===f.tagRelations[s.name]&&(f.tagRelations[s.name]=[]),f.tagRelations[s.name]=f.tagRelations[s.name].concat(e),n.name="new tag",n.icon=$().sample(X.U),d({})},children:[(0,o.jsx)(A.Z,{}),"Add Tag"]})]}),(0,o.jsxs)(U.Z,{fullWidth:!0,children:[(0,o.jsx)(L.Z,{id:"new-tag",children:"tag"}),(0,o.jsx)(M.Z,{labelId:"new-tag",value:"",label:"tag",onChange:function(e){var n,t,r=e.target.value;void 0!==f.tags[r]&&((null===f||void 0===f||null===(n=f.tagRelations)||void 0===n||null===(t=n[s.name])||void 0===t?void 0:t.includes(r))||(void 0===f.tagRelations[s.name]&&(f.tagRelations[s.name]=[]),f.tagRelations[s.name]=f.tagRelations[s.name].concat(r),d({})))},children:void 0!==f.tags?Object.keys(f.tags).filter((function(e){var n,t;return!(null===f||void 0===f||null===(n=f.tagRelations)||void 0===n||null===(t=n[s.name])||void 0===t?void 0:t.includes(e))})).map((function(e){return(0,o.jsxs)(B.Z,{value:e,children:[(0,o.jsx)(D.G,{icon:f.tags[e].icon}),f.tags[e].name]},e)})):null})]})]})})]})})}var V=t(7212),ee=t(6856);function ne(e){var n=e.opened,t=e.onClose,r=e.setGithubToken,a=(0,c.useState)(""),i=a[0],s=a[1];return(0,c.useEffect)((function(){s("")}),[n]),(0,o.jsxs)(F.Z,{open:n,onClose:t,maxWidth:"sm",fullWidth:!0,children:[(0,o.jsx)(J.Z,{children:"Github Personal Access Token"}),(0,o.jsxs)(Q.Z,{children:[(0,o.jsx)(V.Z,{children:"\u30d6\u30e9\u30a6\u30b6\u306eLocalStorage\u4e0a\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059"}),(0,o.jsx)(I.Z,{value:i,autoFocus:!0,margin:"dense",label:"Personal Access Token",fullWidth:!0,onChange:function(e){s(e.target.value)}})]}),(0,o.jsxs)(ee.Z,{children:[(0,o.jsx)(W.Z,{onClick:t,children:"Cancel"}),(0,o.jsx)(W.Z,{onClick:function(){r(i),t()},children:"Ok"})]})]})}function te(e){return Object.assign({paths:[""],prevs:["png"],origin:"png",column:6,pixelated:!0,stringifyFormat:"  ",tags:{},tagRelations:{}},e)}function re(e){var n=$().cloneDeep(e),t=$().uniq($().flatten(Object.values(n.tagRelations)));return Object.keys(n.tags).forEach((function(e){t.includes(e)||delete n.tags[e]})),n}var ae=t(6562),oe=t(6019),ie=t(9122),se=t(553),ce=t(5625);function le(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ue(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){le(e,n,t[n])}))}return e}function fe(e){var n=e.setting,t=e.setSetting,r=(0,c.useState)(!1),a=r[0],i=r[1];return(0,o.jsxs)(T.Z,{children:[(0,o.jsx)(ae.Z,{children:(0,o.jsx)(U.Z,{variant:"standard",children:(0,o.jsx)(I.Z,{value:n.origin,autoFocus:!0,margin:"dense",label:"origin ext",fullWidth:!0,onChange:function(e){t(ue({},n,{origin:e.target.value}))}})})}),(0,o.jsx)(ae.Z,{children:(0,o.jsxs)(U.Z,{variant:"standard",children:[(0,o.jsx)(oe.Z,{id:"preview-columns",children:"preview columns"}),(0,o.jsx)(ie.Z,{id:"preview-columns",value:n.column,step:1,min:1,max:10,marks:!0,onChange:function(e,r){t(ue({},n,{column:r}))}})]})}),(0,o.jsxs)(H.Z,{container:!0,spacing:2,children:[(0,o.jsx)(H.Z,{item:!0,xs:3,children:(0,o.jsx)(se.Z,{control:(0,o.jsx)(ce.Z,{defaultChecked:!0,value:n.pixelated,onChange:function(e,r){t(ue({},n,{pixelated:r}))}}),label:"pixelated"})}),(0,o.jsx)(H.Z,{item:!0,xs:3,children:(0,o.jsx)(se.Z,{control:(0,o.jsx)(ce.Z,{value:a,onChange:function(e,n){i(n)}}),label:"export"})})]}),a?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(M.Z,{value:n.stringifyFormat,label:"stringify-format",onChange:function(e){t(ue({},n,{stringifyFormat:e.target.value}))},children:[(0,o.jsx)(B.Z,{value:0,children:"compressed"}),(0,o.jsx)(B.Z,{value:" ",children:"space 2"}),(0,o.jsx)(B.Z,{value:"\t",children:"tab"})]}),(0,o.jsx)("pre",{children:JSON.stringify(re(n),null,n.stringifyFormat)})]}):null]})}var de,pe=t(1876).Buffer;function he(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function me(e,n,t,r,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,a)}function xe(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){me(o,r,a,i,s,"next",e)}function s(e){me(o,r,a,i,s,"throw",e)}i(void 0)}))}}function ve(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,s=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(c){s=!0,a=c}finally{try{i||null==t.return||t.return()}finally{if(s)throw a}}return o}}(e,n)||je(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ge(e){return function(e){if(Array.isArray(e))return he(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||je(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function je(e,n){if(e){if("string"===typeof e)return he(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?he(e,n):void 0}}var be=function(){var e=(0,c.useState)({}),n=(e[0],e[1]),t=(0,c.useState)(""),r=(t[0],t[1],ve(function(e){var n=(0,c.useState)(null),t=n[0],r=n[1];return(0,c.useEffect)((function(){r(localStorage.getItem(e))}),[r]),[t,(0,c.useCallback)((function(n){localStorage.setItem(e,n),r(n)}),[r])]}("github-token"),2)),i=r[0],u=r[1],p=(0,c.useState)([]),h=p[0],m=p[1],x=(0,c.useState)([]),g=(x[0],x[1]),b=ve(function(e){var n=(0,c.useState)(null),t=n[0],r=n[1],a=(0,d.useRouter)().asPath;return(0,c.useEffect)((function(){var e;r(null!==(e=a.split("#")[1])&&void 0!==e?e:"")}),[]),[t,(0,c.useCallback)((function(e){r(e)}),[r])]}(),2),y=b[0],k=b[1],A=(0,c.useState)({paths:[""],prevs:["png"],origin:"png",column:6,pixelated:!0,stringifyFormat:"  ",tags:{},tagRelations:{}}),F=A[0],H=A[1],T=(0,c.useState)({}),G=T[0],I=T[1],W=(0,c.useState)(!1),U=W[0],L=W[1],M=(0,c.useState)({}),B=M[0],J=M[1],Q=(0,c.useState)({}),X=Q[0],Y=Q[1],q=(0,c.useState)(!1),K=q[0],$=q[1],V=(0,c.useState)(!1),ee=V[0],re=V[1];return(0,c.useEffect)((function(){return xe(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=i){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,v(i);case 4:n=e.sent,m(n.repos.data),g(n.user.data);case 7:case"end":return e.stop()}}),e)})))()}),[i]),(0,c.useEffect)((function(){return xe(a().mark((function e(){var t,r,o,i,c,l,u,f;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=y){e.next=2;break}return e.abrupt("return");case 2:if(""!=y){e.next=4;break}return e.abrupt("return");case 4:return t=ve(y.split("/"),2),r=t[0],o=t[1],e.prev=6,e.next=9,j(r,o,".asset-management.json");case 9:return c=e.sent,e.next=12,_(r,o,c.sha);case 12:l=e.sent,i=te(JSON.parse(pe.from(l.data.content,l.data.encoding).toString())),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(6),i={paths:[""],prevs:["png"],origin:"png",column:6,pixelated:!0,stringifyFormat:"  ",tags:{},tagRelations:{}},console.log("no setting blob"),console.error(e.t0);case 21:return console.log("load setting",i),H(i),e.prev=23,u={},e.next=27,Z(r,o,"");case 27:(f=e.sent).data.forEach((function(e){if("file"==e.type){var n,t=s().extname(e.name),r=t.substring(1),a=s().basename(e.name,t);null!==(n=(de=u)[a])&&void 0!==n||(de[a]={name:a,exts:[]}),u[a][r]=e,u[a].exts=u[a].exts.concat(r)}})),Object.values(u).forEach((function(e){i.prevs.some((function(n){null!=e[n]&&(e.prev=n)}))})),I(u),Promise.all(f.data.map(function(){var e=xe(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("file"==t.type){e.next=2;break}return e.abrupt("return");case 2:if([i.origin].concat(ge(i.prevs)).includes(s().extname(t.name).substring(1))){e.next=4;break}return e.abrupt("return");case 4:if(void 0!=B[t.sha]){e.next=10;break}return e.next=7,_(r,o,t.sha);case 7:B[t.sha]=e.sent,J(B),n({});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())),e.next=38;break;case 34:e.prev=34,e.t1=e.catch(23),console.log("no files"),console.error(e.t1);case 38:case"end":return e.stop()}}),e,null,[[6,16],[23,34]])})))()}),[i,y]),(0,o.jsxs)("div",{className:"".concat(f().container," ").concat(F.pixelated?"pixelated":""),children:[(0,o.jsx)(l.default,{children:(0,o.jsx)("title",{children:"Github Asset Management"})}),(0,o.jsxs)(w.Z,{children:[(0,o.jsx)(C.Z,{onClick:function(){return L(!0)},children:(0,o.jsx)(P.Z,{})}),(0,o.jsx)(C.Z,{onClick:function(){return re(!0)},children:(0,o.jsx)(N.Z,{})}),(0,o.jsx)("p",{children:y})]}),(0,o.jsxs)("main",{className:f().main,children:[(0,o.jsx)(z,{opened:K,file:X,onClose:function(){return $(!1)},forceUpdate:function(){return n({})},blobs:B,setting:F}),(0,o.jsx)(ne,{opened:ee,file:X,onClose:function(){return re(!1)},setGithubToken:u}),(0,o.jsx)(S.ZP,{anchor:"left",open:U,onClose:function(){return L(!1)},children:h.map((function(e){return(0,o.jsxs)("div",{className:f().repo,children:[(0,o.jsx)("a",{href:"#".concat(e.full_name),onClick:function(){k(e.full_name),L(!1)},children:e.full_name}),(0,o.jsx)("a",{href:"https://github.com/".concat(e.full_name)})]},e.id)}))}),""==y?(0,o.jsx)("div",{className:f().repos,children:h.map((function(e){return(0,o.jsxs)("div",{className:f().repo,children:[(0,o.jsx)("a",{href:"#".concat(e.full_name),onClick:function(){return k(e.full_name)},children:e.full_name}),(0,o.jsx)("a",{href:"https://github.com/".concat(e.full_name)})]},e.id)}))}):null,(0,o.jsx)(fe,{setting:F,setSetting:H}),(0,o.jsx)(O.Z,{variant:"masonry",cols:F.column,gap:4,children:Object.values(G).filter((function(e){return e.exts.includes(F.origin)})).map((function(e){var t,r,a,i;return(0,o.jsxs)(R.Z,{onClick:function(){$(!0),Y(e),n()},children:[(null===(t=F.tagRelations[e.name])||void 0===t?void 0:t.length)>0?(0,o.jsx)("div",{className:f().icons,children:F.tagRelations[e.name].map((function(e){return(0,o.jsx)(D.G,{icon:F.tags[e].icon},e)}))}):null,(0,o.jsx)("img",{src:"data:image/".concat(e.prev,";base64,").concat(null===(a=B[null===(r=e[e.prev])||void 0===r?void 0:r.sha])||void 0===a||null===(i=a.data)||void 0===i?void 0:i.content),alt:e.name}),(0,o.jsx)(E.Z,{title:e.name})]},e.name)}))})]}),(0,o.jsx)("footer",{className:f().footer,children:(0,o.jsxs)("a",{href:"https://github.com/negi0109/github-asset-management",target:"_blank",rel:"noopener noreferrer",children:["Powered by negi0109",(0,o.jsx)("span",{className:f().logo})]})})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",icons:"Home_icons__MOYrj",repos:"Home_repos__G0TEv",repo:"Home_repo__BoJp4",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},5696:function(){}},function(e){e.O(0,[283,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);