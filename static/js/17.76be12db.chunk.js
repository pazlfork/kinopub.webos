(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[17],{1111:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n(11),c=n(58),i=n(2),a=n(946),u=n.n(a),o=n(981),l=n(893),s=n(253),d=n(927),b=n(919),v=n(32),f={useHistoryReplace:!1,deserialize:function(e){return e},serialize:function(e){return String(e)}};var j=function(e,t,n){var c=Object(v.h)(),a=Object(i.useMemo)((function(){return Object(r.a)(Object(r.a)({},f),n)}),[n]),u=Object(i.useMemo)((function(){var n=new URLSearchParams(c.location.search).get(e);return n?a.deserialize(n):t}),[e,t,a,c.location.search]),o=Object(i.useCallback)((function(t,n){var r=c.location,i=r.search,u=new URLSearchParams(i),o=a.serialize(t);o?u.set(e,o):u.delete(e);var l="?".concat(u);i!==l&&(n||a.useHistoryReplace?c.replace:c.push)({search:l,hash:r.hash,pathname:r.pathname},r.state)}),[e,a,c]),l=Object(i.useCallback)((function(e){o(t,e)}),[t,o]);return[u,o,l]},O=n(962),m=n(3);function h(e){return u()(e,"year","desc")}var p=function(){var e=Object(O.a)(),t=j("q",""),n=Object(c.a)(t,2),a=n[0],u=n[1],v=Object(b.a)("itemsSearch",[Object(r.a)(Object(r.a)({},e),{},{q:a})]),f=Object(i.useCallback)((function(e){u(e)}),[u]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(l.a,{title:"\u041f\u043e\u0438\u0441\u043a"}),Object(m.jsx)(d.a,{title:Object(m.jsxs)("div",{className:"w-full",children:[Object(m.jsx)("div",{className:"flex justify-between items-center mb-3 h-9",children:Object(m.jsx)(s.a,{children:"\u041f\u043e\u0438\u0441\u043a"})}),Object(m.jsx)(o.a,{autoFocus:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430 \u0438\u043b\u0438 \u0441\u0435\u0440\u0438\u0430\u043b\u0430...",value:a,onChange:f})]}),showResult:a.length>3,queryResult:v,processItems:h})]})}},892:function(e,t,n){"use strict";n.d(t,"b",(function(){return O})),n.d(t,"a",(function(){return j}));var r=n(11),c=n(59),i=n(2),a=n(54),u=n.n(a),o=n(58),l=n(108),s=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},c=t.onEnterViewport,a=t.onLeaveViewport,u=Object(i.useState)(),s=Object(o.a)(u,2),d=s[1],b=Object(i.useRef)(null),v=Object(i.useRef)(!1),f=Object(i.useRef)(!1),j=Object(i.useRef)(0),O=Object(i.useRef)(0),m=Object(i.useCallback)((function(){if(e.current&&b.current){var t=Object(l.findDOMNode)(e.current);t&&b.current.observe(t)}}),[e,b]),h=Object(i.useCallback)((function(){if(e.current&&b.current){var t=Object(l.findDOMNode)(e.current);t&&(b.current.unobserve(t),b.current.disconnect(),b.current=null)}}),[e,b]),p=Object(i.useCallback)((function(e){var t=e[0]||{},n=t.isIntersecting,i=t.intersectionRatio,u="undefined"!==typeof n?n:i>0;if(!f.current&&u)return f.current=!0,null===c||void 0===c||c(),j.current+=1,v.current=u,void d(u);f.current&&!u&&(f.current=!1,null===a||void 0===a||a(),r.disconnectOnLeave&&b.current&&b.current.disconnect(),O.current+=1,v.current=u,d(u))}),[b,r.disconnectOnLeave,c,a]),x=Object(i.useCallback)((function(){b.current||(b.current=new IntersectionObserver(p,n))}),[b,n,p]);return Object(i.useEffect)((function(){return x(),m(),function(){h()}}),[x,m,h]),{inViewport:v.current,enterCount:j.current,leaveCount:O.current}},d=n(1101);var b=function(e){var t=Object(d.a)();return Object(i.useMemo)((function(){return"".concat(e,"-").concat(t)}),[e,t])},v=n(3),f=["children","className","onScrollToEnd"],j=Object(i.createContext)({}),O=function(e){var t=e.children,n=e.className,a=e.onScrollToEnd,o=Object(c.a)(e,f),l=Object(i.useRef)(null),d=b("scrollable"),O=Object(i.useMemo)((function(){return{id:d}}),[d]);return s(l,{onEnterViewport:a}),Object(v.jsxs)("div",Object(r.a)(Object(r.a)({className:u()("overflow-y-auto h-full",n)},o),{},{id:d,children:[Object(v.jsx)(j.Provider,{value:O,children:t}),a&&Object(v.jsx)("div",{className:"h-40",ref:l})]}))}},893:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(11),c=n(897),i=n(3),a=function(e){return Object(i.jsx)(c.a,Object(r.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},894:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(11),c=n(59),i=n(54),a=n.n(i),u=n(253),o=n(3),l=["children","className"],s=function(e){var t=e.children,n=e.className,i=Object(c.a)(e,l);return t?Object(o.jsx)(u.a,Object(r.a)(Object(r.a)({},i),{},{className:a()("flex justify-between items-center m-1 mb-3 min-h-9",n),as:"div",children:t})):null}},896:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n(11),c=n(59),i=n(54),a=n.n(i),u=n(2),o=n(917),l=n.n(o),s=n(892),d=n(3),b=function(e){var t=Object(u.useContext)(s.a).id;return Object(d.jsx)(l.a,Object(r.a)(Object(r.a)({once:!0,offset:100,scrollContainer:t&&"#".concat(t)},e),{},{placeholder:Object(d.jsx)("div",{className:"w-full h-full"})}))};var v=b,f=n(254),j=["className","wrapperClassName","source","caption","children"],O=function(e){var t=e.className,n=e.wrapperClassName,i=e.source,u=e.caption,o=e.children,l=Object(c.a)(e,j);return Object(d.jsxs)(f.a,Object(r.a)(Object(r.a)({},l),{},{className:a()("rounded-xl w-1/5 cursor-pointer",n),children:[Object(d.jsxs)(v,{className:a()("h-40 m-1 flex flex-col relative",t),children:[Object(d.jsx)("img",{loading:"lazy",className:"w-full h-full object-cover rounded-xl border-2 border-gray-300 bg-gray-300",src:i,alt:u}),o]}),u&&Object(d.jsx)("div",{className:"px-2",children:Object(d.jsx)("p",{className:"text-gray-200 text-sm text-center overflow-hidden overflow-ellipsis whitespace-nowrap",children:u})})]}))}},899:function(e,t,n){"use strict";function r(e,t,n){var r=(null===e||void 0===e?void 0:e.title)||"";return n?"".concat(r," (s").concat(n.number,"e").concat((null===t||void 0===t?void 0:t.number)||1,")"):r}function c(e,t,n){var r=(null===t||void 0===t?void 0:t.title)||"",c="s".concat((null===n||void 0===n?void 0:n.number)||1,"e").concat((null===t||void 0===t?void 0:t.number)||1);return n?r?"".concat(r," (").concat(c,")"):c:r}function i(e){return(null===e||void 0===e?void 0:e.quality)?2160===e.quality?"4k":1080===e.quality||720===e.quality?"hd":"sd":null}n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}))},901:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(906),c=n.n(r);function i(e){return c()(e)}},903:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var r,c,i=n(2),a=n(32),u=n(54),o=n.n(u),l=n(255),s=n(256),d=n(896),b=n(6),v=["title","titleId"];function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function O(e,t){var n=e.title,a=e.titleId,u=j(e,v);return i.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:t,"aria-labelledby":a},u),n?i.createElement("title",{id:a},n):null,r||(r=i.createElement("path",{d:"M436.714 26.001H75.287c-27.21 0-49.285 22.075-49.285 49.286v361.427c0 27.211 22.075 49.285 49.285 49.285h361.427c27.211 0 49.284-22.074 49.284-49.285V75.287c0-27.211-22.073-49.286-49.284-49.286z",fill:"#fbbf14"})),c||(c=i.createElement("path",{fill:"#273238",d:"M91.716 190.287h33.883v131.222H91.716zM241.831 321.509h-29.469v-88.714l-11.912 88.714H179.3l-12.528-86.763v86.763h-29.776V190.287h43.947c3.39 20.329 6.16 40.968 8.934 61.504l7.803-61.504h44.152v131.222zM330.544 236.8c0-8.317.31-17.25-1.438-25.055-4.414-23.102-32.24-21.458-50.311-21.458h-25.261v131.222c88.408.103 77.01 6.16 77.01-84.709zm-43.022 61.913v-85.94c12.219 0 10.576 6.47 10.576 16.428v50.622c.001 9.958 1.951 19.199-10.576 18.89zM395.949 223.656c-9.137 0-15.298 2.773-21.457 9.447v-42.816h-32.55v131.222h30.597l1.953-8.317c5.852 6.982 12.218 10.063 21.457 10.063 20.331 0 22.795-15.607 22.795-31.729v-36.963c0-17.763-.821-30.907-22.795-30.907zm-16.427 80.706c-1.642 0-3.081-.823-3.902-2.465-2.26-5.237-1.128-45.281-1.128-45.897 0-3.901-1.132-13.04 5.03-13.04 7.496 0 6.364 7.496 6.364 13.04v33.574c.001 5.546 1.644 14.788-6.364 14.788z"})))}var m,h=i.forwardRef(O),p=(n.p,["title","titleId"]);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function w(e,t){var n=e.title,r=e.titleId,c=g(e,p);return i.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"#ff6600",ref:t,"aria-labelledby":r},c),n?i.createElement("title",{id:r},n):null,m||(m=i.createElement("path",{d:"M15.518 10.736A8 8 0 11.482 5.264a8 8 0 0115.036 5.472zM8.94 8.342a1 1 0 10-1.88-.684 1 1 0 001.88.684zm-2.906 2.135A2 2 0 102.275 9.11a2 2 0 003.76 1.368zM8.086 4.84A2 2 0 104.328 3.47a2 2 0 003.758 1.368zm5.639 2.052a2 2 0 10-3.76-1.368 2 2 0 003.76 1.368zm-2.053 5.638a2 2 0 10-3.758-1.368 2 2 0 003.758 1.368z"})))}var y=i.forwardRef(w),N=(n.p,n(899)),k=n(901),C=n(3),M=function(e){var t=e.item,n=e.className,r=e.wrapperClassName,c=e.showViews,u=e.noCaption,v=e.disableNavigation,f=Object(a.h)(),j=Object(i.useMemo)((function(){var e;return null===t||void 0===t||null===(e=t.title)||void 0===e?void 0:e.split("/")[0]}),[null===t||void 0===t?void 0:t.title]),O=Object(i.useMemo)((function(){return c&&(null===t||void 0===t?void 0:t.views)&&Object(k.a)(null===t||void 0===t?void 0:t.views)||""}),[c,null===t||void 0===t?void 0:t.views]),m=Object(i.useCallback)((function(){(null===t||void 0===t?void 0:t.id)&&!v&&f.push(Object(b.b)(b.a.Item,{itemId:t.id}))}),[null===t||void 0===t?void 0:t.id,v,f]),p=Object(N.b)(t);return Object(C.jsxs)(d.a,{onClick:m,source:null===t||void 0===t?void 0:t.posters.medium,caption:u?"":j,className:o()("h-72",n),wrapperClassName:r,children:[(null===t||void 0===t?void 0:t.new)&&Object(C.jsx)("div",{className:"absolute bg-red-600 border-gray-300 border-t-2 border-r-2 text-gray-200 px-2 py-1 rounded-bl rounded-tr-xl top-0 right-0",children:null===t||void 0===t?void 0:t.new}),O&&Object(C.jsxs)("div",{className:"absolute top-2 right-2 h-6 pr-2 text-xs text-gray-200 bg-black bg-opacity-50 rounded flex items-center",children:[Object(C.jsx)(s.a,{name:"visibility"}),O]}),(p||(null===t||void 0===t?void 0:t.ac3)||(null===t||void 0===t?void 0:t.advert))&&Object(C.jsxs)("div",{className:"absolute top-2 left-2 h-6 bg-black bg-opacity-50 rounded flex items-center",children:[p&&Object(C.jsx)(s.a,{name:p}),(null===t||void 0===t?void 0:t.ac3)===l.a.True&&Object(C.jsx)(s.a,{name:"graphic_eq"}),(null===t||void 0===t?void 0:t.advert)&&Object(C.jsx)(s.a,{name:"report"})]}),((null===t||void 0===t?void 0:t.rating)>0||(null===t||void 0===t?void 0:t.imdb_rating)>0||(null===t||void 0===t?void 0:t.kinopoisk_rating)>0)&&Object(C.jsxs)("div",{className:"absolute bottom-2 left-2 right-2 h-6 px-2 text-xs text-gray-200 bg-black bg-opacity-50 rounded flex justify-between items-center",children:[Object(C.jsxs)("div",{className:"flex items-center justify-start w-1/3",children:[Object(C.jsx)(h,{className:"h-3 w-3 mr-1"}),Object(C.jsx)("span",{children:((null===t||void 0===t?void 0:t.imdb_rating)||0).toFixed(1)})]}),Object(C.jsxs)("div",{className:"flex items-center justify-center w-1/3",children:[Object(C.jsx)(y,{className:"h-3 w-3 mr-1"}),Object(C.jsx)("span",{children:((null===t||void 0===t?void 0:t.kinopoisk_rating)||0).toFixed(1)})]}),Object(C.jsxs)("div",{className:"flex items-center justify-end w-1/3",children:[Object(C.jsx)(s.a,{name:"thumb_up"}),Object(C.jsxs)("span",{children:[(null===t||void 0===t?void 0:t.rating_percentage)||0,"%"]})]})]})]})}},904:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(107),c=(n(2),n(54)),i=n.n(c),a=n(197),u=n.n(a),o=n(892),l=n(894),s=n(903),d=n(3),b=function(e){var t=e.title,n=e.items,c=e.loading,a=e.onScrollToEnd,b=e.scrollable,v=void 0===b||b,f=e.className,j=e.titleClassName,O=Object(d.jsxs)("div",{children:[Object(d.jsx)(l.a,{className:j,children:t}),Object(d.jsxs)("div",{className:i()("flex flex-wrap",f),children:[u()(n,(function(e){return Object(d.jsx)(s.a,{item:e},e.id)})),c&&u()(Object(r.a)(new Array(15)),(function(e,t){return Object(d.jsx)(s.a,{},t)}))]})]});return v?Object(d.jsx)(o.b,{onScrollToEnd:a,children:O}):O}},918:function(e,t,n){"use strict";var r=n(58),c=n(2),i=n(907),a=n.n(i),u=n(925),o=n.n(u),l=n(916),s=n.n(l);t.a=function(e,t){var n=e.data,i=e.isLoading,u=e.isFetchingNextPage,l=e.fetchNextPage,d=Object(c.useState)(!1),b=Object(r.a)(d,2),v=b[0],f=b[1],j=Object(c.useMemo)((function(){return s()(a()(o()(null===n||void 0===n?void 0:n.pages,(function(e){return e.items}))),"id")}),[null===n||void 0===n?void 0:n.pages]),O=Object(c.useMemo)((function(){return t?t(j):j}),[j,t]),m=Object(c.useCallback)((function(){v&&(l(),f(!1))}),[v,l]);return Object(c.useEffect)((function(){f(!0)}),[j.length]),[O,i||u,m]}},919:function(e,t,n){"use strict";var r=n(11),c=n(107),i=n(2),a=n(979),u=n(255);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,o=Object(i.useMemo)((function(){return new u.c}),[]),l=Object(a.a)([e].concat(Object(c.a)(t)),(function(n){var r=n.pageParam;return o[e].apply(o,Object(c.a)(t).concat([r]))}),Object(r.a)({getNextPageParam:function(e){var t;return(null===e||void 0===e||null===(t=e.pagination)||void 0===t?void 0:t.current)+1||1}},n));return l}},927:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(58),c=n(904),i=n(918),a=n(3),u=function(e){var t=e.title,n=e.showResult,u=void 0===n||n,o=e.queryResult,l=e.processItems,s=Object(i.a)(o,l),d=Object(r.a)(s,3),b=d[0],v=d[1],f=d[2];return Object(a.jsx)(c.a,{title:t,items:b,loading:u&&v,onScrollToEnd:f})}},946:function(e,t,n){var r=n(956),c=n(60);e.exports=function(e,t,n,i){return null==e?[]:(c(t)||(t=null==t?[]:[t]),c(n=i?void 0:n)||(n=null==n?[]:[n]),r(e,t,n))}},956:function(e,t,n){var r=n(265),c=n(266),i=n(379),a=n(399),u=n(957),o=n(398),l=n(958),s=n(396),d=n(60);e.exports=function(e,t,n){t=t.length?r(t,(function(e){return d(e)?function(t){return c(t,1===e.length?e[0]:e)}:e})):[s];var b=-1;t=r(t,o(i));var v=a(e,(function(e,n,c){return{criteria:r(t,(function(t){return t(e)})),index:++b,value:e}}));return u(v,(function(e,t){return l(e,t,n)}))}},957:function(e,t){e.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}},958:function(e,t,n){var r=n(959);e.exports=function(e,t,n){for(var c=-1,i=e.criteria,a=t.criteria,u=i.length,o=n.length;++c<u;){var l=r(i[c],a[c]);if(l)return c>=o?l:l*("desc"==n[c]?-1:1)}return e.index-t.index}},959:function(e,t,n){var r=n(198);e.exports=function(e,t){if(e!==t){var n=void 0!==e,c=null===e,i=e===e,a=r(e),u=void 0!==t,o=null===t,l=t===t,s=r(t);if(!o&&!s&&!a&&e>t||a&&u&&l&&!o&&!s||c&&u&&l||!n&&l||!i)return 1;if(!c&&!a&&!s&&e<t||s&&n&&i&&!c&&!a||o&&n&&i||!u&&i||!l)return-1}return 0}},962:function(e,t,n){"use strict";var r=n(2),c=n(32);t.a=function(){var e=Object(c.i)();return Object(r.useMemo)((function(){return t=e.search,Object.fromEntries(new URLSearchParams(t).entries());var t}),[e.search])}},981:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(11),c=n(59),i=n(2),a=n(108),u=n(1002),o=n.n(u),l=n(54),s=n.n(l),d=n(3),b=["className","onChange","autoFocus"],v=function(e){var t=e.className,n=e.onChange,u=e.autoFocus,l=Object(c.a)(e,b),v=Object(i.useRef)(null),f=Object(i.useCallback)((function(e){var t=e.value;null===n||void 0===n||n(t)}),[n]);return Object(i.useEffect)((function(){var e;return u&&(e=requestAnimationFrame((function(){var e,t=Object(a.findDOMNode)(v.current);null===t||void 0===t||null===(e=t.querySelector("input"))||void 0===e||e.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[v,u]),Object(d.jsx)(o.a,Object(r.a)(Object(r.a)({},l),{},{ref:v,className:s()("w-full",t),onChange:f}))}}}]);
//# sourceMappingURL=17.76be12db.chunk.js.map