if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const m=e=>t(e,i),o={module:{uri:i},exports:c,require:m};s[i]=Promise.all(n.map((e=>o[e]||m(e)))).then((e=>(a(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/github-asset-management/_next/static/2D_k1Pm6hm-cNCbktfhGh/_buildManifest.js",revision:"2D_k1Pm6hm-cNCbktfhGh"},{url:"/github-asset-management/_next/static/2D_k1Pm6hm-cNCbktfhGh/_middlewareManifest.js",revision:"2D_k1Pm6hm-cNCbktfhGh"},{url:"/github-asset-management/_next/static/2D_k1Pm6hm-cNCbktfhGh/_ssgManifest.js",revision:"2D_k1Pm6hm-cNCbktfhGh"},{url:"/github-asset-management/_next/static/chunks/679-6282433a95201d71.js",revision:"2D_k1Pm6hm-cNCbktfhGh"},{url:"/github-asset-management/_next/static/chunks/866-907af409872491c7.js",revision:"2D_k1Pm6hm-cNCbktfhGh"},{url:"/github-asset-management/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"2D_k1Pm6hm-cNCbktfhGh"},{url:"/github-asset-management/_next/static/chunks/main-8b1ba861968c0341.js",revision:"2D_k1Pm6hm-cNCbktfhGh"},{url:"/github-asset-management/_next/static/chunks/pages/_app-01bf0174968df9e8.js",revision:"2D_k1Pm6hm-cNCbktfhGh"},{url:"/github-asset-management/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"2D_k1Pm6hm-cNCbktfhGh"},{url:"/github-asset-management/_next/static/chunks/pages/_online-fabe7a3d5b5842c3.js",revision:"2D_k1Pm6hm-cNCbktfhGh"},{url:"/github-asset-management/_next/static/chunks/pages/index-b50ba272ced68cd9.js",revision:"2D_k1Pm6hm-cNCbktfhGh"},{url:"/github-asset-management/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"2D_k1Pm6hm-cNCbktfhGh"},{url:"/github-asset-management/_next/static/chunks/webpack-f30904eea0fd8a27.js",revision:"2D_k1Pm6hm-cNCbktfhGh"},{url:"/github-asset-management/_next/static/css/429e900efc0562e3.css",revision:"2D_k1Pm6hm-cNCbktfhGh"},{url:"/github-asset-management/_next/static/css/d7799e022ba09b15.css",revision:"2D_k1Pm6hm-cNCbktfhGh"},{url:"/github-asset-management/icons/favicon.ico",revision:"934ef625238e87625f8c67213f059203"},{url:"/github-asset-management/icons/icon-192x192.png",revision:"3c1844a436b6806de676ceab7045c1e2"},{url:"/github-asset-management/icons/icon-256x256.png",revision:"c19f33362bf9f748152deffadc2b9033"},{url:"/github-asset-management/icons/icon-384x384.png",revision:"1940b7146926313a95d105bd0bf8770c"},{url:"/github-asset-management/icons/icon-512x512.png",revision:"78d19af4dac8120ba5764560b89a072a"},{url:"/github-asset-management/manifest.json",revision:"7e0c425f7a42d79900395cfbff8e8c7b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/github-asset-management",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
