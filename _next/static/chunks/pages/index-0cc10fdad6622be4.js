(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3804)}])},3804:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(4051),o=r.n(n),a=r(5893),u=r(7294),i=r(1163),s=r(9008),c=r(214),l=r.n(c);var f,d=r(6829);function p(e,t,r,n,o,a,u){try{var i=e[a](u),s=i.value}catch(c){return void r(c)}i.done?t(s):Promise.resolve(s).then(n,o)}function _(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function u(e){p(a,n,o,u,i,"next",e)}function i(e){p(a,n,o,u,i,"throw",e)}u(void 0)}))}}function h(e){return m.apply(this,arguments)}function m(){return(m=_(o().mark((function e(t){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=t){e.next=2;break}return e.abrupt("return");case 2:return f=new d.vd({auth:t}),e.next=5,f.rest.users.getAuthenticated();case 5:return r=e.sent,e.next=8,f.rest.repos.listForAuthenticatedUser({sort:"updated"});case 8:return n=e.sent,e.abrupt("return",{repos:n.data,user:r});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e,t,r,n,o,a,u){try{var i=e[a](u),s=i.value}catch(c){return void r(c)}i.done?t(s):Promise.resolve(s).then(n,o)}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],u=!0,i=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(s){i=!0,o=s}finally{try{u||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=function(){var e,t=(0,u.useState)(""),r=(t[0],t[1],g(function(e){var t=(0,u.useState)(null),r=t[0],n=t[1];return(0,u.useEffect)((function(){n(localStorage.getItem(e))}),[n]),[r,(0,u.useCallback)((function(t){localStorage.setItem(e,t),n(t)}),[n])]}("github-token"),2)),n=r[0],c=(r[1],(0,u.useState)([])),f=c[0],d=c[1],p=(0,u.useState)([]),_=(p[0],p[1]),m=null!==(e=(0,i.useRouter)().asPath.split("#")[1])&&void 0!==e?e:"";return(0,u.useEffect)((function(){return(e=o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,h(n);case 4:t=e.sent,console.log(t),d(t.repos),_(t.user);case 8:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function u(e){b(a,n,o,u,i,"next",e)}function i(e){b(a,n,o,u,i,"throw",e)}u(void 0)}))})();var e}),[n]),(0,a.jsxs)("div",{className:l().container,children:[(0,a.jsx)(s.default,{children:(0,a.jsx)("title",{children:"Github Asset Management"})}),(0,a.jsxs)("main",{className:l().main,children:[(0,a.jsx)("p",{children:m}),(0,a.jsx)("div",{className:l().repos,children:f.map((function(e){return(0,a.jsx)("div",{className:l().repo,children:(0,a.jsx)("div",{children:e.full_name})},e.id)}))})]}),(0,a.jsx)("footer",{className:l().footer,children:(0,a.jsxs)("a",{href:"https://github.com/negi0109/github-asset-management",target:"_blank",rel:"noopener noreferrer",children:["Powered by negi0109",(0,a.jsx)("span",{className:l().logo})]})})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",repos:"Home_repos__G0TEv",repo:"Home_repo__BoJp4",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},5696:function(){}},function(e){e.O(0,[895,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);