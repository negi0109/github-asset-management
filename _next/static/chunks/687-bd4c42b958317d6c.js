(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[687],{6818:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Ye}});var r=t(4051),a=t.n(r),o=t(5893),i=t(1864),s=t.n(i),c=t(7294),u=(t(9008),t(214)),l=t.n(u),f=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=(0,c.useState)(null),r=t[0],a=t[1];return(0,c.useEffect)((function(){var t=localStorage.getItem(e);try{t=JSON.parse(t)}catch(r){}a(null===t?n:t)}),[a]),[r,(0,c.useCallback)((function(n){a(n),"string"!=("undefined"===typeof n?"undefined":f(n))&&(n=JSON.stringify(n)),localStorage.setItem(e,n)}),[a])]}var p=t(1163);var h,v=t(6829),m=t(1876).Buffer;function x(e,n,t,r,a,o,i){try{var s=e[o](i),c=s.value}catch(u){return void t(u)}s.done?n(c):Promise.resolve(c).then(r,a)}function g(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){x(o,r,a,i,s,"next",e)}function s(e){x(o,r,a,i,s,"throw",e)}i(void 0)}))}}function j(e){null!=e&&(h=new v.vd({auth:e}))}function b(){return h}function Z(){return(Z=g(a().mark((function e(n,t,r,o,i,s,c,u){var l,f,d,p,v,x;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l={owner:n,repo:t,branch:r,setting:o,currentCommitId:i,onSucceed:c,onFailed:u,octokit:b()},e.prev=1,console.log(l),e.next=5,h.rest.git.getCommit({owner:n,repo:t,commit_sha:i});case 5:return f=e.sent,d=m.from(JSON.stringify(o,null,o.stringifyFormat)).toString("base64"),e.next=9,h.rest.git.createBlob({owner:n,repo:t,content:d,encoding:"base64"});case 9:return p=e.sent,e.next=12,h.rest.git.createTree({owner:n,repo:t,tree:[{path:".asset-management.json",mode:"100644",type:"blob",sha:p.data.sha}],base_tree:f.data.tree.sha});case 12:return v=e.sent,e.next=15,h.rest.git.createCommit({owner:n,repo:t,message:s,tree:v.data.sha,parents:[f.data.sha],author:{name:"github-bot",email:"github-bot@users.noreply.github.com"}});case 15:return x=e.sent,e.next=18,h.rest.git.updateRef({owner:n,repo:t,ref:"heads/".concat(r),sha:x.data.sha});case 18:e.sent,c(x.data.sha),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(1),u(e.t0.message);case 25:case"end":return e.stop()}}),e,null,[[1,22]])})))).apply(this,arguments)}function y(){return k.apply(this,arguments)}function k(){return(k=g(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.rest.users.getAuthenticated();case 2:return n=e.sent,e.next=5,h.rest.repos.listForAuthenticatedUser({sort:"updated"});case 5:return t=e.sent,e.abrupt("return",{repos:t,user:n});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,n){return w.apply(this,arguments)}function w(){return(w=g(a().mark((function e(n,t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.rest.repos.get({owner:n,repo:t});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,n,t){return S.apply(this,arguments)}function S(){return(S=g(a().mark((function e(n,t,r){var o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.rest.git.getRef({owner:n,repo:t,ref:r});case 2:return o=e.sent,e.abrupt("return",o.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,n,t){return R.apply(this,arguments)}function R(){return(R=g(a().mark((function e(n,t,r){var o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.rest.repos.getContent({owner:n,repo:t,path:r});case 2:return o=e.sent,e.abrupt("return",o.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,n,t,r,o){return null==t?null:void 0!==r[t]?r[t]:void g(a().mark((function i(){var s;return a().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r[t]=null,a.next=3,E(e,n,t);case 3:s=a.sent,r[t]=s,o();case 6:case"end":return a.stop()}}),i)})))()}function E(e,n,t){return A.apply(this,arguments)}function A(){return(A=g(a().mark((function e(n,t,r){var o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.rest.git.getBlob({owner:n,repo:t,file_sha:r});case 2:return o=e.sent,e.abrupt("return",o);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,n,t){return P.apply(this,arguments)}function P(){return(P=g(a().mark((function e(n,t,r){var o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.rest.repos.getContent({owner:n,repo:t,path:r});case 2:return o=e.sent,e.abrupt("return",o);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H=t(8358),W=t(7812),T=t(9685),I=t(8108),B=t(760),G=t(326),U=t(3595),J=t(3329),M=t(4957),L=t(6540),D=t(2663),Y=t(1749),Q=t(3832),$=t(9659),q=t(3426),z=t(282),K=t(4436),V=t(6394),X=t(304),ee=t(5639),ne=t(7814),te=t(6083),re=t(9525),ae=t(3086);function oe(e){var n=e.value,t=e.onChange,r=(0,c.useState)(!1),a=r[0],i=r[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ne.G,{onClick:function(e){i(!0)},icon:n}),(0,o.jsxs)(D.Z,{open:a,onClose:function(){i(!1)},maxWidth:"sm",fullWidth:!0,children:[(0,o.jsx)(te.Z,{id:"scroll-dialog-title",children:"Icon Picker"}),(0,o.jsx)(re.Z,{dividers:"paper"===scroll,children:ae.U.map((function(e){return(0,o.jsx)(ne.G,{icon:e,onClick:function(n){i(!1),t(e)}},"".concat(e[0],"/").concat(e[1]))}))})]})]})}var ie=t(3772),se=t(6486),ce=t.n(se);function ue(e){var n,t,r,a,i=e.opened,s=e.file,u=e.onClose,l=e.blobs,f=e.setting,d=e.forceUpdate;return(0,o.jsx)(D.Z,{open:i,onClose:u,maxWidth:"sm",fullWidth:!0,children:(0,o.jsxs)(Y.Z,{container:!0,children:[(0,o.jsx)("img",{width:"66.66666%",src:"data:image/".concat(s.prev,";base64,").concat(null===(t=l[null===(n=s[s.prev])||void 0===n?void 0:n.sha])||void 0===t||null===(r=t.data)||void 0===r?void 0:r.content),alt:s.name,className:"pixelated"}),(0,o.jsx)(Y.Z,{container:!0,item:!0,direction:"column",xs:4,children:(0,o.jsxs)(Q.Z,{children:["name: ",s.name,(0,o.jsx)("hr",{}),(0,o.jsx)(Y.Z,{container:!0,children:null===s||void 0===s||null===(a=s.exts)||void 0===a?void 0:a.map((function(e){return(0,o.jsx)(Y.Z,{container:!0,item:!0,children:(0,o.jsx)($.Z,{href:s[e].html_url,target:"_blank",children:e})},e)}))}),(0,o.jsx)("hr",{}),(0,o.jsxs)(Y.Z,{container:!0,children:[(0,o.jsx)(Y.Z,{container:!0,item:!0,children:void 0!==f.tagRelations[s.name]?f.tagRelations[s.name].map((function(e){return(0,o.jsxs)(c.Fragment,{children:[(0,o.jsx)(Y.Z,{item:!0,xs:2,children:(0,o.jsx)(oe,{value:f.tags[e].icon,onChange:function(n){f.tags[e].icon=n,d({})}})}),(0,o.jsx)(Y.Z,{item:!0,xs:9,children:(0,o.jsx)(q.Z,{type:"text",value:f.tags[e].name,onChange:function(n){f.tags[e].name=n.target.value,d({})}})}),(0,o.jsx)(Y.Z,{item:!0,xs:1,children:(0,o.jsx)(ie.Z,{onClick:function(){ce().remove(f.tagRelations[s.name],(function(n){return n==e})),d({})}})})]},e)})):null}),(0,o.jsxs)(z.Z,{onClick:function(){var e;console.log("add tag");do{e=Math.random().toString(35).slice(-8)}while(void 0!==f.tags[e]);var n={};f.tags[e]=n,void 0===f.tagRelations[s.name]&&(f.tagRelations[s.name]=[]),f.tagRelations[s.name]=f.tagRelations[s.name].concat(e),n.name="new tag",n.icon=ce().sample(ae.U),d({})},children:[(0,o.jsx)(L.Z,{}),"Add Tag"]})]}),(0,o.jsxs)(K.Z,{fullWidth:!0,children:[(0,o.jsx)(V.Z,{id:"new-tag",children:"tag"}),(0,o.jsx)(X.Z,{labelId:"new-tag",value:"",label:"tag",onChange:function(e){var n,t,r=e.target.value;void 0!==f.tags[r]&&((null===f||void 0===f||null===(n=f.tagRelations)||void 0===n||null===(t=n[s.name])||void 0===t?void 0:t.includes(r))||(void 0===f.tagRelations[s.name]&&(f.tagRelations[s.name]=[]),f.tagRelations[s.name]=f.tagRelations[s.name].concat(r),d({})))},children:void 0!==f.tags?Object.keys(f.tags).filter((function(e){var n,t;return!(null===f||void 0===f||null===(n=f.tagRelations)||void 0===n||null===(t=n[s.name])||void 0===t?void 0:t.includes(e))})).map((function(e){return(0,o.jsxs)(ee.Z,{value:e,children:[(0,o.jsx)(ne.G,{icon:f.tags[e].icon}),f.tags[e].name]},e)})):null})]})]})})]})})}var le=t(7212),fe=t(6856);function de(e){var n=e.opened,t=e.onClose,r=e.setGithubToken,a=(0,c.useState)(""),i=a[0],s=a[1];return(0,c.useEffect)((function(){s("")}),[n]),(0,o.jsxs)(D.Z,{open:n,onClose:t,maxWidth:"sm",fullWidth:!0,children:[(0,o.jsx)(te.Z,{children:"Github Personal Access Token"}),(0,o.jsxs)(re.Z,{children:[(0,o.jsx)(le.Z,{children:"\u30d6\u30e9\u30a6\u30b6\u306eLocalStorage\u4e0a\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059"}),(0,o.jsx)(q.Z,{value:i,autoFocus:!0,margin:"dense",label:"Personal Access Token",fullWidth:!0,onChange:function(e){s(e.target.value)}})]}),(0,o.jsxs)(fe.Z,{children:[(0,o.jsx)(z.Z,{onClick:t,children:"Cancel"}),(0,o.jsx)(z.Z,{onClick:function(){r(i),t()},children:"Ok"})]})]})}function pe(e){return Object.assign({paths:[""],prevs:["png"],column:6,pixelated:!0,stringifyFormat:"  ",tags:{},tagRelations:{}},e)}function he(e){var n=ce().cloneDeep(e),t=ce().uniq(ce().flatten(Object.values(n.tagRelations)));return Object.keys(n.tags).forEach((function(e){t.includes(e)||delete n.tags[e]})),n}var ve=t(6562),me=t(6019),xe=t(9122),ge=t(553),je=t(5625),be=t(2659);function Ze(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ye(e,n,t,r,a,o,i){try{var s=e[o](i),c=s.value}catch(u){return void t(u)}s.done?n(c):Promise.resolve(c).then(r,a)}function ke(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _e(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ke(e,n,t[n])}))}return e}function we(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,s=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(c){s=!0,a=c}finally{try{i||null==t.return||t.return()}finally{if(s)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return Ze(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ze(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ce(e){var n,t=e.setting,r=e.setSetting,i=e.hash,s=e.githubToken,u=(0,c.useState)(!1),l=u[0],f=u[1],d=(0,c.useState)({}),p=d[0],h=d[1],v=(0,c.useState)(""),m=v[0],x=v[1],g=(0,c.useState)(!1),b=g[0],y=g[1],k=(0,c.useState)("Update .asset-management.json"),w=k[0],S=k[1],O=(0,c.useState)(""),R=O[0],N=O[1],E=we(null!==(n=null===i||void 0===i?void 0:i.split("/"))&&void 0!==n?n:[],2),A=E[0],F=E[1];return(0,c.useEffect)((function(){var e;(e=a().mark((function e(){var n,t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=i){e.next=2;break}return e.abrupt("return");case 2:if(""!=i){e.next=4;break}return e.abrupt("return");case 4:return j(s),e.next=7,_(A,F);case 7:return n=e.sent,e.next=10,C(A,F,"heads/".concat(n.default_branch));case 10:t=e.sent,r=t.object.sha,h(n),x(r);case 14:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){ye(o,r,a,i,s,"next",e)}function s(e){ye(o,r,a,i,s,"throw",e)}i(void 0)}))})()}),[i,s]),(0,c.useEffect)((function(){N("")}),[b]),(0,o.jsxs)(Q.Z,{children:[(0,o.jsx)(ve.Z,{children:(0,o.jsx)(K.Z,{variant:"standard",children:(0,o.jsxs)(be.Z,{direction:"row",children:[void 0!=(null===t||void 0===t?void 0:t.prevs)?t.prevs.map((function(e,n){var a;return(0,o.jsxs)(c.Fragment,{children:[(0,o.jsx)(q.Z,{value:e,autoFocus:!0,margin:"dense",label:"prev ext",fullWidth:!0,onChange:function(e){var a=e.target.value;r(_e({},t,{prevs:t.prevs.map((function(e,t){return t==n?a:e}))}))}}),(null===t||void 0===t||null===(a=t.prevs)||void 0===a?void 0:a.length)>1&&(0,o.jsx)(ie.Z,{onClick:function(){r(_e({},t,{prevs:t.prevs.filter((function(e,t){return n!=t}))}))}})]},n)})):null,(0,o.jsx)(L.Z,{onClick:function(){r(_e({},t,{prevs:t.prevs.concat("")}))}})]})})}),(0,o.jsx)(ve.Z,{children:(0,o.jsxs)(K.Z,{variant:"standard",children:[(0,o.jsx)(me.Z,{id:"preview-columns",children:"preview columns"}),(0,o.jsx)(xe.Z,{id:"preview-columns",value:t.column,step:1,min:1,max:10,marks:!0,onChange:function(e,n){r(_e({},t,{column:n}))}})]})}),(0,o.jsxs)(Y.Z,{container:!0,spacing:2,children:[(0,o.jsx)(Y.Z,{item:!0,xs:3,children:(0,o.jsx)(ge.Z,{control:(0,o.jsx)(je.Z,{defaultChecked:!0,value:t.pixelated,onChange:function(e,n){r(_e({},t,{pixelated:n}))}}),label:"pixelated"})}),(0,o.jsx)(Y.Z,{item:!0,xs:3,children:(0,o.jsx)(ge.Z,{control:(0,o.jsx)(je.Z,{value:l,onChange:function(e,n){f(n)}}),label:"export"})}),(0,o.jsx)(Y.Z,{item:!0,xs:3,children:(0,o.jsx)(z.Z,{color:"primary",onClick:function(){y(!0)},children:"Save"})})]}),l?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(X.Z,{value:t.stringifyFormat,label:"stringify-format",onChange:function(e){r(_e({},t,{stringifyFormat:e.target.value}))},children:[(0,o.jsx)(ee.Z,{value:0,children:"compressed"}),(0,o.jsx)(ee.Z,{value:" ",children:"space 2"}),(0,o.jsx)(ee.Z,{value:"\t",children:"tab"})]}),(0,o.jsx)("pre",{children:JSON.stringify(he(t),null,t.stringifyFormat)})]}):null,(0,o.jsxs)(D.Z,{open:b,onClose:function(){return y(!1)},maxWidth:"sm",fullWidth:!0,children:[(0,o.jsx)(te.Z,{children:"Commit"}),(0,o.jsxs)(re.Z,{children:[""!=R&&(0,o.jsx)(le.Z,{children:R}),(0,o.jsx)(q.Z,{value:w,autoFocus:!0,margin:"dense",label:"commitMessage",fullWidth:!0,onChange:function(e){S(e.target.value)}})]}),(0,o.jsxs)(fe.Z,{children:[(0,o.jsx)(z.Z,{onClick:function(){return y(!1)},children:"Cancel"}),(0,o.jsx)(z.Z,{disabled:"Succeed"==R,onClick:function(){!function(e,n,t,r,a,o,i,s){Z.apply(this,arguments)}(A,F,p.default_branch,he(t),m,w,(function(e){x(e),N("Succeed")}),(function(e){N(e)}))},children:"Commit"})]})]})]})}var Se=t(2660),Oe=t.n(Se),Re=t(1518),Ne=t(2822),Ee=t(998),Ae=t(5757),Fe=t(7792),Pe=t(796);function He(e){var n=e.opened,t=e.onClose,r=e.setHash,a=(0,c.useState)(""),i=a[0],s=a[1];return(0,c.useEffect)((function(){s("")}),[n]),(0,o.jsxs)(D.Z,{open:n,onClose:t,maxWidth:"sm",fullWidth:!0,children:[(0,o.jsx)(te.Z,{children:"Add Repository"}),(0,o.jsxs)(re.Z,{children:[(0,o.jsx)(le.Z,{children:"UserName/RepositoryName \u306e\u5f62\u5f0f\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"}),(0,o.jsx)(q.Z,{value:i,autoFocus:!0,margin:"dense",label:"repository",fullWidth:!0,onChange:function(e){s(e.target.value)}})]}),(0,o.jsxs)(fe.Z,{children:[(0,o.jsx)(z.Z,{onClick:t,children:"Cancel"}),(0,o.jsx)(z.Z,{onClick:function(){r(i),t()},children:"Ok"})]})]})}var We=t(3199),Te=t(5051),Ie=t(3508);function Be(e){var n=e.open,t=e.repos,r=e.setHash,a=e.toggleSideBar,i=e.favorites,s=(e.setFavorites,(0,c.useState)(!1)),u=s[0],l=s[1],f=(0,c.useState)(!1),d=f[0],p=f[1];return(0,o.jsxs)(Re.ZP,{anchor:"left",open:n,onClose:function(){return a(!1)},children:[(null===i||void 0===i?void 0:i.length)>0?(0,o.jsx)(Ne.Z,{children:null===i||void 0===i?void 0:i.map((function(e){return(0,o.jsx)(Ee.Z,{className:Oe().repo,children:(0,o.jsx)("a",{href:"#".concat(e),onClick:function(){r(e),a(!1)},children:e})},e)}))}):null,(0,o.jsxs)(Fe.Z,{onClick:function(){return p(!0)},className:Oe().flexNone,children:[(0,o.jsx)(Pe.Z,{children:(0,o.jsx)(L.Z,{})}),(0,o.jsx)(Ae.Z,{primary:"Add Repository"})]}),(0,o.jsxs)(Fe.Z,{onClick:function(){return l(!u)},className:Oe().flexNone,children:[(0,o.jsx)(Pe.Z,{children:(0,o.jsx)(We.Z,{})}),(0,o.jsx)(Ae.Z,{primary:"My Repository"}),u?(0,o.jsx)(Te.Z,{}):(0,o.jsx)(Ie.Z,{})]}),u&&(0,o.jsx)(Ne.Z,{children:null===t||void 0===t?void 0:t.map((function(e){return(0,o.jsx)(Ee.Z,{className:Oe().repo,children:(0,o.jsx)("a",{href:"#".concat(e.full_name),onClick:function(){r(e.full_name),a(!1)},children:e.full_name})},e.full_name)}))}),(0,o.jsx)(He,{opened:d,onClose:function(){return p(!1)},setHash:function(e){return r(e)}})]})}var Ge,Ue=t(1876).Buffer;function Je(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Me(e,n,t,r,a,o,i){try{var s=e[o](i),c=s.value}catch(u){return void t(u)}s.done?n(c):Promise.resolve(c).then(r,a)}function Le(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){Me(o,r,a,i,s,"next",e)}function s(e){Me(o,r,a,i,s,"throw",e)}i(void 0)}))}}function De(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,s=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(c){s=!0,a=c}finally{try{i||null==t.return||t.return()}finally{if(s)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return Je(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Je(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Ye=function(){var e,n=(0,c.useState)({}),t=(n[0],n[1]),r=(0,c.useState)(""),i=(r[0],r[1],De(d("github-token"),2)),u=i[0],f=i[1],h=(0,c.useState)([]),v=h[0],m=h[1],x=De(function(e){var n=(0,c.useState)(null),t=n[0],r=n[1],a=(0,p.useRouter)().asPath;return(0,c.useEffect)((function(){var e;r(null!==(e=a.split("#")[1])&&void 0!==e?e:"")}),[]),[t,(0,c.useCallback)((function(e){r(e)}),[r])]}(),2),g=x[0],b=x[1],Z=(0,c.useState)({paths:[""],prevs:["png"],column:6,pixelated:!0,stringifyFormat:"  ",tags:{},tagRelations:{}}),k=Z[0],_=Z[1],w=(0,c.useState)({}),C=w[0],S=w[1],R=(0,c.useState)(!1),A=R[0],P=R[1],L=(0,c.useState)({}),D=L[0],Y=(L[1],(0,c.useState)({})),Q=Y[0],$=Y[1],q=(0,c.useState)(!1),z=q[0],K=q[1],V=(0,c.useState)(!1),X=V[0],ee=V[1],te=De(d("favorites",[]),2),re=te[0],ae=te[1],oe=De(null!==(e=null===g||void 0===g?void 0:g.split("/"))&&void 0!==e?e:[],2),ie=oe[0],se=oe[1];return(0,c.useEffect)((function(){return Le(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=u){e.next=2;break}return e.abrupt("return");case 2:return j(u),e.next=5,y();case 5:n=e.sent,m(n.repos.data);case 7:case"end":return e.stop()}}),e)})))()}),[u]),(0,c.useEffect)((function(){return Le(a().mark((function e(){var n,t,r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=g){e.next=2;break}return e.abrupt("return");case 2:if(""!=g){e.next=4;break}return e.abrupt("return");case 4:return e.prev=5,e.next=8,O(ie,se,".asset-management.json");case 8:return t=e.sent,e.next=11,E(ie,se,t.sha);case 11:r=e.sent,n=pe(JSON.parse(Ue.from(r.data.content,r.data.encoding).toString())),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(5),n={paths:[""],prevs:["png"],column:6,pixelated:!0,stringifyFormat:"  ",tags:{},tagRelations:{}},console.log("no setting blob"),console.error(e.t0);case 20:return console.log("load setting",n),_(n),e.prev=22,o={},e.next=26,F(ie,se,"");case 26:e.sent.data.forEach((function(e){if("file"==e.type){var n,t=s().extname(e.name),r=t.substring(1),a=s().basename(e.name,t);null!==(n=(Ge=o)[a])&&void 0!==n||(Ge[a]={name:a,exts:[]}),o[a][r]=e,o[a].exts=o[a].exts.concat(r)}})),Object.values(o).forEach((function(e){n.prevs.some((function(n){null!=e[n]&&(e.prev=n)}))})),S(o),e.next=36;break;case 32:e.prev=32,e.t1=e.catch(22),console.log("no files"),console.error(e.t1);case 36:case"end":return e.stop()}}),e,null,[[5,15],[22,32]])})))()}),[u,g]),(0,c.useEffect)((function(){Object.values(C).forEach((function(e){e.prev=void 0,k.prevs.some((function(n){null!=e[n]&&(e.prev=n)}))})),S(C),t({})}),[k.prevs]),(0,o.jsxs)("div",{className:"".concat(l().container," ").concat(k.pixelated?"pixelated":""),children:[(0,o.jsxs)(H.Z,{children:[(0,o.jsx)(W.Z,{onClick:function(){return P(!0)},children:(0,o.jsx)(G.Z,{})}),(0,o.jsx)(W.Z,{onClick:function(){return ee(!0)},children:(0,o.jsx)(U.Z,{})}),(0,o.jsx)("p",{children:g}),(null===re||void 0===re?void 0:re.includes(g))?(0,o.jsx)(W.Z,{onClick:function(){return ae(re.filter((function(e){return e!=g})))},children:(0,o.jsx)(M.Z,{})}):(0,o.jsx)(W.Z,{onClick:function(){return ae(re.concat(g))},children:(0,o.jsx)(J.Z,{})})]}),(0,o.jsxs)("main",{className:l().main,children:[(0,o.jsx)(ue,{opened:z,file:Q,onClose:function(){return K(!1)},forceUpdate:function(){return t({})},blobs:D,setting:k}),(0,o.jsx)(de,{opened:X,file:Q,onClose:function(){return ee(!1)},setGithubToken:f}),(0,o.jsx)(Be,{anchor:"left",open:A,repos:v,toggleSideBar:P,setHash:b,favorites:re,setFavorites:ae}),""==g?(0,o.jsx)("div",{className:l().repos,children:v.map((function(e){return(0,o.jsxs)("div",{className:l().repo,children:[(0,o.jsx)("a",{href:"#".concat(e.full_name),onClick:function(){return b(e.full_name)},children:e.full_name}),(0,o.jsx)("a",{href:"https://github.com/".concat(e.full_name)})]},e.id)}))}):null,(0,o.jsx)(Ce,{setting:k,setSetting:_,hash:g,githubToken:u}),(0,o.jsx)(T.Z,{variant:"masonry",cols:k.column,gap:4,children:Object.values(C).filter((function(e){return e.prev})).map((function(e){var n,r,a,i;return(0,o.jsxs)(I.Z,{onClick:function(){K(!0),$(e),t()},children:[(null===(n=k.tagRelations[e.name])||void 0===n?void 0:n.length)>0?(0,o.jsx)("div",{className:l().icons,children:k.tagRelations[e.name].map((function(e){return(0,o.jsx)(ne.G,{icon:k.tags[e].icon},e)}))}):null,(0,o.jsx)("img",{src:"data:image/".concat(e.prev,";base64,").concat((null===(r=e[e.prev])||void 0===r?void 0:r.sha)?null===(a=N(ie,se,e[e.prev].sha,D,(function(){return t({})})))||void 0===a||null===(i=a.data)||void 0===i?void 0:i.content:null),alt:e.name}),(0,o.jsx)(B.Z,{title:e.name})]},e.name)}))})]}),(0,o.jsx)("footer",{className:l().footer,children:(0,o.jsxs)("a",{href:"https://github.com/negi0109/github-asset-management",target:"_blank",rel:"noopener noreferrer",children:["Powered by negi0109",(0,o.jsx)("span",{className:l().logo})]})})]})}},2660:function(e){e.exports={flexNone:"SideBar_flexNone__36fYl",repo:"SideBar_repo__70mze"}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",icons:"Home_icons__MOYrj",repos:"Home_repos__G0TEv",repo:"Home_repo__BoJp4",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},5696:function(){}}]);