(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2905)}])},2905:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return le}});var r=t(4051),a=t.n(r),o=t(5893),i=t(1864),s=t.n(i),c=t(7294),u=t(9008),l=t(214),f=t.n(l);var d=t(1163);var p,m=t(6829);function h(e,n,t,r,a,o,i){try{var s=e[o](i),c=s.value}catch(u){return void t(u)}s.done?n(c):Promise.resolve(c).then(r,a)}function v(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){h(o,r,a,i,s,"next",e)}function s(e){h(o,r,a,i,s,"throw",e)}i(void 0)}))}}function g(e){return x.apply(this,arguments)}function x(){return(x=v(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=n){e.next=2;break}return e.abrupt("return");case 2:return p=new m.vd({auth:n}),e.next=5,p.rest.users.getAuthenticated();case 5:return t=e.sent,e.next=8,p.rest.repos.listForAuthenticatedUser({sort:"updated"});case 8:return r=e.sent,e.abrupt("return",{repos:r,user:t});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,n,t){return j.apply(this,arguments)}function j(){return(j=v(a().mark((function e(n,t,r){var o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.rest.repos.getContent({owner:n,repo:t,path:r});case 2:return o=e.sent,e.abrupt("return",o.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,n,t){return y.apply(this,arguments)}function y(){return(y=v(a().mark((function e(n,t,r){var o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.rest.git.getBlob({owner:n,repo:t,file_sha:r});case 2:return o=e.sent,e.abrupt("return",o);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,n,t){return k.apply(this,arguments)}function k(){return(k=v(a().mark((function e(n,t,r){var o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.rest.repos.getContent({owner:n,repo:t,path:r});case 2:return o=e.sent,e.abrupt("return",o);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z=t(8358),S=t(7812),C=t(1518),O=t(9685),R=t(8108),E=t(760),N=t(326),P=t(6540),A=t(2663),H=t(1749),I=t(3832),T=t(3426),G=t(282),U=t(4436),B=t(6394),D=t(4105),J=t(7702),L=t(7814),M=t(3086),W=t(6486),F=t.n(W);function Q(e){var n,t,r,a=e.opened,i=e.file,s=e.onClose,c=e.blobs,u=e.setting,l=e.forceUpdate;return(0,o.jsx)(A.Z,{open:a,onClose:s,maxWidth:"sm",fullWidth:!0,children:(0,o.jsxs)(H.Z,{container:!0,children:[(0,o.jsx)("img",{width:"66.66666%",src:"data:image/".concat(i.prev,";base64,").concat(null===(t=c[null===(n=i[i.prev])||void 0===n?void 0:n.sha])||void 0===t||null===(r=t.data)||void 0===r?void 0:r.content),alt:i.name,className:"pixelated"}),(0,o.jsx)(H.Z,{container:!0,item:!0,flexDirection:"column",xs:4,children:(0,o.jsxs)(I.Z,{children:["name: ",i.name,(0,o.jsxs)(H.Z,{container:!0,children:[(0,o.jsx)(H.Z,{container:!0,item:!0,children:void 0!==u.tagRelations[i.name]?u.tagRelations[i.name].map((function(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(H.Z,{item:!0,xs:2,children:(0,o.jsx)(L.G,{icon:u.tags[e].icon})},e),(0,o.jsx)(H.Z,{item:!0,xs:10,children:(0,o.jsx)(T.Z,{type:"text",value:u.tags[e].name,onChange:function(n){u.tags[e].name=n.target.value,l({})}})},e)]})})):null}),(0,o.jsxs)(G.Z,{onClick:function(){var e;console.log("add tag");do{e=Math.random().toString(35).slice(-8)}while(void 0!==u.tags[e]);var n={};u.tags[e]=n,void 0===u.tagRelations[i.name]&&(u.tagRelations[i.name]=[]),console.log(u),u.tagRelations[i.name]=u.tagRelations[i.name].concat(e),n.name="new tag",n.icon=F().sample(M.U),l({})},children:[(0,o.jsx)(P.Z,{}),"Add Tag"]})]}),(0,o.jsxs)(U.Z,{fullWidth:!0,children:[(0,o.jsx)(B.Z,{id:"new-tag",children:"tag"}),(0,o.jsx)(D.Z,{labelId:"new-tag",value:"",label:"tag",onChange:function(e){var n,t,r=e.target.value;void 0!==u.tags[r]&&((null===u||void 0===u||null===(n=u.tagRelations)||void 0===n||null===(t=n[i.name])||void 0===t?void 0:t.includes(r))||(void 0===u.tagRelations[i.name]&&(u.tagRelations[i.name]=[]),u.tagRelations[i.name]=u.tagRelations[i.name].concat(r),l({})))},children:void 0!==u.tags?Object.keys(u.tags).filter((function(e){var n,t;return!(null===u||void 0===u||null===(n=u.tagRelations)||void 0===n||null===(t=n[i.name])||void 0===t?void 0:t.includes(e))})).map((function(e){return(0,o.jsxs)(J.Z,{value:e,children:[(0,o.jsx)(L.G,{icon:u.tags[e].icon}),u.tags[e].name]},e)})):null})]})]})})]})})}function X(e){setting=Object.assign({paths:[""],tags:{},tagRelations:{},prevs:["png"],origin:"png",column:6,pixelated:!0},e)}var K=t(6562),Y=t(6019),$=t(9122),q=t(9306),z=t(5625);function V(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ee(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){V(e,n,t[n])}))}return e}function ne(e){var n=e.setting,t=e.setSetting,r=(0,c.useState)(!1),a=r[0],i=r[1];return(0,o.jsxs)(I.Z,{children:[(0,o.jsx)(K.Z,{children:(0,o.jsxs)(U.Z,{variant:"standard",children:[(0,o.jsx)(Y.Z,{id:"preview-columns",children:"preview columns"}),(0,o.jsx)($.Z,{id:"preview-columns",value:n.column,step:1,min:1,max:10,marks:!0,onChange:function(e,r){t(ee({},n,{column:r}))}})]})}),(0,o.jsxs)(H.Z,{container:!0,spacing:2,children:[(0,o.jsx)(H.Z,{item:!0,xs:3,children:(0,o.jsx)(q.Z,{control:(0,o.jsx)(z.Z,{defaultChecked:!0,value:n.pixelated,onChange:function(e,r){t(ee({},n,{pixelated:r}))}}),label:"pixelated"})}),(0,o.jsx)(H.Z,{item:!0,xs:3,children:(0,o.jsx)(q.Z,{control:(0,o.jsx)(z.Z,{value:a,onChange:function(e,n){i(n)}}),label:"export setting"})})]}),a?(0,o.jsx)("pre",{children:JSON.stringify(n,null,"\t")}):null]})}var te,re=t(1876).Buffer;function ae(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function oe(e,n,t,r,a,o,i){try{var s=e[o](i),c=s.value}catch(u){return void t(u)}s.done?n(c):Promise.resolve(c).then(r,a)}function ie(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){oe(o,r,a,i,s,"next",e)}function s(e){oe(o,r,a,i,s,"throw",e)}i(void 0)}))}}function se(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,s=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(c){s=!0,a=c}finally{try{i||null==t.return||t.return()}finally{if(s)throw a}}return o}}(e,n)||ue(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(e){return function(e){if(Array.isArray(e))return ae(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ue(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ue(e,n){if(e){if("string"===typeof e)return ae(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ae(e,n):void 0}}var le=function(){var e=(0,c.useState)({}),n=(e[0],e[1]),t=(0,c.useState)(""),r=(t[0],t[1],se(function(e){var n=(0,c.useState)(null),t=n[0],r=n[1];return(0,c.useEffect)((function(){r(localStorage.getItem(e))}),[r]),[t,(0,c.useCallback)((function(n){localStorage.setItem(e,n),r(n)}),[r])]}("github-token"),2)),i=r[0],l=(r[1],(0,c.useState)([])),p=l[0],m=l[1],h=(0,c.useState)([]),v=(h[0],h[1]),x=se(function(e){var n=(0,c.useState)(null),t=n[0],r=n[1],a=(0,d.useRouter)().asPath;return(0,c.useEffect)((function(){var e;r(null!==(e=a.split("#")[1])&&void 0!==e?e:"")}),[]),[t,(0,c.useCallback)((function(e){r(e)}),[r])]}(),2),j=x[0],y=x[1],k=(0,c.useState)({paths:[""],tags:{},tagRelations:{},prevs:["png"],origin:"png",column:6,pixelated:!0}),P=k[0],A=k[1],H=(0,c.useState)({}),I=H[0],T=H[1],G=(0,c.useState)(!1),U=G[0],B=G[1],D=(0,c.useState)({}),J=D[0],L=D[1],M=(0,c.useState)({}),W=M[0],F=M[1],K=(0,c.useState)(!1),Y=K[0],$=K[1];return(0,c.useEffect)((function(){return ie(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=i){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,g(i);case 4:n=e.sent,m(n.repos.data),v(n.user.data);case 7:case"end":return e.stop()}}),e)})))()}),[i]),(0,c.useEffect)((function(){return ie(a().mark((function e(){var t,r,o,i,c,u,l,f;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=j){e.next=2;break}return e.abrupt("return");case 2:if(""!=j){e.next=4;break}return e.abrupt("return");case 4:return t=se(j.split("/"),2),r=t[0],o=t[1],e.prev=6,e.next=9,b(r,o,".asset-management.json");case 9:return c=e.sent,e.next=12,_(r,o,c.sha);case 12:u=e.sent,i=X(JSON.parse(re.from(u.data.content,u.data.encoding).toString())),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(6),i={paths:[""],tags:{},tagRelations:{},prevs:["png"],origin:"png",column:6,pixelated:!0},console.log("no setting blob"),console.error(e.t0);case 21:return console.log("load setting",i),A(i),e.prev=23,l={},e.next=27,w(r,o,"");case 27:(f=e.sent).data.forEach((function(e){var n,t=s().extname(e.name),r=t.substring(1),a=s().basename(e.name,t);[i.origin].concat(ce(i.prevs)).includes(r)&&(null!==(n=(te=l)[a])&&void 0!==n||(te[a]={name:a}),l[a][r]=e)})),Object.values(l).forEach((function(e){i.prevs.some((function(n){null!=e[n]&&(e.prev=n)}))})),T(l),Promise.all(f.data.map(function(){var e=ie(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("file"==t.type){e.next=2;break}return e.abrupt("return");case 2:if([i.origin].concat(ce(i.prevs)).includes(s().extname(t.name).substring(1))){e.next=4;break}return e.abrupt("return");case 4:if(void 0!=J[t.sha]){e.next=10;break}return e.next=7,_(r,o,t.sha);case 7:J[t.sha]=e.sent,L(J),n({});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())),e.next=38;break;case 34:e.prev=34,e.t1=e.catch(23),console.log("no files"),console.error(e.t1);case 38:case"end":return e.stop()}}),e,null,[[6,16],[23,34]])})))()}),[i,j]),(0,o.jsxs)("div",{className:"".concat(f().container," ").concat(P.pixelated?"pixelated":""),children:[(0,o.jsx)(u.default,{children:(0,o.jsx)("title",{children:"Github Asset Management"})}),(0,o.jsxs)(Z.Z,{children:[(0,o.jsx)(S.Z,{onClick:function(){return B(!0)},children:(0,o.jsx)(N.Z,{})}),(0,o.jsx)("p",{children:j})]}),(0,o.jsxs)("main",{className:f().main,children:[(0,o.jsx)(Q,{opened:Y,file:W,onClose:function(){return $(!1)},forceUpdate:function(){return n({})},blobs:J,setting:P}),(0,o.jsx)(C.ZP,{anchor:"left",open:U,onClose:function(){return B(!1)},children:p.map((function(e){return(0,o.jsxs)("div",{className:f().repo,children:[(0,o.jsx)("a",{href:"#".concat(e.full_name),onClick:function(){y(e.full_name),B(!1)},children:e.full_name}),(0,o.jsx)("a",{href:"https://github.com/".concat(e.full_name)})]},e.id)}))}),""==j?(0,o.jsx)("div",{className:f().repos,children:p.map((function(e){return(0,o.jsxs)("div",{className:f().repo,children:[(0,o.jsx)("a",{href:"#".concat(e.full_name),onClick:function(){return y(e.full_name)},children:e.full_name}),(0,o.jsx)("a",{href:"https://github.com/".concat(e.full_name)})]},e.id)}))}):null,(0,o.jsx)(ne,{setting:P,setSetting:A}),(0,o.jsx)(O.Z,{variant:"masonry",cols:P.column,gap:4,children:Object.values(I).map((function(e){var t,r,a;return(0,o.jsxs)(R.Z,{onClick:function(){$(!0),F(e),n()},children:[(0,o.jsx)("img",{src:"data:image/".concat(e.prev,";base64,").concat(null===(r=J[null===(t=e[e.prev])||void 0===t?void 0:t.sha])||void 0===r||null===(a=r.data)||void 0===a?void 0:a.content),alt:e.name}),(0,o.jsx)(E.Z,{title:e.name})]},e.name)}))})]}),(0,o.jsx)("footer",{className:f().footer,children:(0,o.jsxs)("a",{href:"https://github.com/negi0109/github-asset-management",target:"_blank",rel:"noopener noreferrer",children:["Powered by negi0109",(0,o.jsx)("span",{className:f().logo})]})})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",repos:"Home_repos__G0TEv",repo:"Home_repo__BoJp4",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},5696:function(){}},function(e){e.O(0,[662,237,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);