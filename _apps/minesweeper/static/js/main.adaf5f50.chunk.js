(this["webpackJsonpminesweeper-react-typescript"]=this["webpackJsonpminesweeper-react-typescript"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={Field:"style_Field__1uZT2",isSmall:"style_isSmall__3fL8H",isOpened:"style_isOpened__3p0X-",hasOpenedBomb:"style_hasOpenedBomb__3032S",dangerLevel1:"style_dangerLevel1__2uaAi",dangerLevel2:"style_dangerLevel2__1LCeU",dangerLevel3:"style_dangerLevel3__8SuUW",dangerLevel4:"style_dangerLevel4__l9zS5",dangerLevel5:"style_dangerLevel5__u2mBf",dangerLevel6:"style_dangerLevel6__82_li"}},function(e,t,n){e.exports={Game:"style_Game__1hxvS",fields:"style_fields__3IOHZ",aside:"style_aside__jPb3A",button:"style_button__2A5EY",buttonGitHub:"style_buttonGitHub__1c4d3",githubIcon:"style_githubIcon__3A4SH",stats:"style_stats__3Nm0h"}},,,,function(e,t,n){e.exports={Settings:"style_Settings__3LwmE",button:"style_button__1g1Ma",isActive:"style_isActive__2dbMt"}},function(e,t,n){e.exports={Statistics:"style_Statistics__3qKV5",emoji:"style_emoji__1MTQg",value:"style_value__sHPCz"}},function(e,t,n){e.exports={App:"style_App__IcBB-",container:"style_container__3VzXj",title:"style_title__3EZpl"}},,,function(e,t,n){e.exports={Panel:"style_Panel__2HnYF"}},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(14),l=n.n(c),i=n(4),o=n.n(i),r=n(15),u=n.n(r),b=n(1);function d(e){var t=e.className,n=void 0===t?"":t,a=e.children;return Object(b.jsx)("div",{className:o()(u.a.Panel,n),children:a})}var f,O,j=n(3);!function(e){e.Beginner="Beginner",e.Intermediate="Intermediate",e.Expert="Expert",e.SuperExpert="SuperExpert"}(f||(f={})),function(e){e.Idle="Idle",e.Playing="Playing",e.Pause="Pause",e.GameOver="GameOver"}(O||(O={}));var v=n(5),m=n.n(v);function g(e){var t,n=e.field,s=e.isSmall,c=e.gameState,l=e.onOpen,i=e.onSetFlag,r=e.onDeleteFlag,u=c===O.Pause||c===O.GameOver,d="";n.isOpened?n.hasBomb?d="\ud83d\udca3":n.bombsAround&&(d=n.bombsAround):n.hasFlag&&(d="\ud83d\udea9");var f=o()((t={},Object(j.a)(t,m.a.Field,!0),Object(j.a)(t,m.a.isOpened,n.isOpened),Object(j.a)(t,m.a.isSmall,s),Object(j.a)(t,m.a.hasOpenedBomb,n.isOpened&&n.hasBomb),Object(j.a)(t,m.a.dangerLevel1,n.isOpened&&1===n.bombsAround),Object(j.a)(t,m.a.dangerLevel2,n.isOpened&&2===n.bombsAround),Object(j.a)(t,m.a.dangerLevel3,n.isOpened&&3===n.bombsAround),Object(j.a)(t,m.a.dangerLevel4,n.isOpened&&4===n.bombsAround),Object(j.a)(t,m.a.dangerLevel5,n.isOpened&&5===n.bombsAround),Object(j.a)(t,m.a.dangerLevel6,n.isOpened&&n.bombsAround>=6),t)),v=Object(a.useCallback)((function(){n.hasFlag||l(n)}),[n,l]),g=Object(a.useCallback)((function(e){e.preventDefault(),c!==O.Playing||n.isOpened||(n.hasFlag?r(n):i(n))}),[n,i,r,c]);return Object(b.jsx)("button",{className:f,disabled:u,onClick:v,onContextMenu:g,children:d})}var p=s.a.memo(g),_=n(2),h=[{level:f.Beginner,xFieldsCount:8,yFieldsCount:8,bombsCount:10},{level:f.Intermediate,xFieldsCount:16,yFieldsCount:16,bombsCount:40},{level:f.Expert,xFieldsCount:30,yFieldsCount:16,bombsCount:99}];function y(e){return h.find((function(t){return t.level===e}))||h[0]}var C=n(10),x=n.n(C);function F(e){var t=e.className,n=void 0===t?"":t,s=e.level,c=e.onLevelChange,l=Object(a.useCallback)((function(e){return function(){return c(e)}}),[c]);return Object(b.jsx)(d,{className:o()(x.a.Settings,n),children:h.map((function(e){return Object(b.jsx)("button",{className:o()(x.a.button,Object(j.a)({},x.a.isActive,s===e.level)),onClick:l(e.level),children:e.level},e.level)}))})}var S=s.a.memo(F),k=n(11),L=n.n(k);function P(e){var t=e.className,n=void 0===t?"":t,a=e.title,s=e.icon,c=e.value;return Object(b.jsxs)("div",{className:o()(L.a.Statistics,n),title:a,children:[Object(b.jsx)("div",{className:L.a.emoji,children:s}),Object(b.jsx)("div",{className:L.a.value,children:c})]})}var B=s.a.memo(P);var A=n(8),N=n(16),w=0;function M(e){var t=Object(_.a)(e,2),n=t[0],a=t[1];return"[".concat(n,",").concat(a,"]")}function E(){var e=function(e){var t=Object(a.useState)(y(e)),n=Object(_.a)(t,2),s=n[0],c=n[1],l=Object(a.useCallback)((function(e){c(y(e))}),[]);return{settings:s,setSettings:c,setSettingsByLevel:l}}(f.Beginner),t=e.settings,n=e.setSettingsByLevel,s=function(e){var t=Object(a.useState)(new Map),n=Object(_.a)(t,2),s=n[0],c=n[1],l=Object(a.useState)(0),i=Object(_.a)(l,2),o=i[0],r=i[1],u=Object(a.useState)(0),b=Object(_.a)(u,2),d=b[0],f=b[1],O=Object(a.useCallback)((function(t){var n=Object(_.a)(t,2),a=n[0],s=n[1];return a>=1&&a<=e.xFieldsCount&&s>=1&&s<=e.yFieldsCount}),[e]),j=Object(a.useCallback)((function(e){var t=Object(_.a)(e,2),n=t[0],a=t[1];return[[n-1,a-1],[n,a-1],[n+1,a-1],[n-1,a],[n+1,a],[n-1,a+1],[n,a+1],[n+1,a+1]].filter((function(e){var t=Object(_.a)(e,2),n=t[0],a=t[1];return w+=1,O([n,a])}))}),[O]),v=Object(a.useCallback)((function(){for(var t=new Map,n=0;n<e.yFieldsCount;n++)for(var a=0;a<e.xFieldsCount;a++){w+=1;var s=[a+1,n+1];t.set(M(s),{id:a+1+e.xFieldsCount*n,coords:s,isOpened:!1,hasBomb:!1,hasFlag:!1,bombsAround:0})}return t}),[e]),m=Object(a.useCallback)((function(t){for(var n,a,s=v(),c=new Set,l=j(t.coords).map((function(e){var t;return w+=1,null===(t=s.get(M(e)))||void 0===t?void 0:t.id})),i=new Set([t.id].concat(Object(N.a)(l)));c.size<e.bombsCount;){w+=1;var o=(n=1,a=e.xFieldsCount*e.yFieldsCount,Math.floor(Math.random()*(a-n))+n);i.has(o)||c.add(o)}var r,u=Object(A.a)(s.values());try{for(u.s();!(r=u.n()).done;){var b=r.value;w+=1,b.hasBomb=c.has(b.id),b.hasBomb&&j(b.coords).map((function(e){return w+=1,s.get(M(e))})).forEach((function(e){return w+=1,e&&e.bombsAround++}))}}catch(d){u.e(d)}finally{u.f()}return s}),[j,v,e]),g=Object(a.useCallback)((function(e,t){var n=[e],a=new Set,s=0,l=0,i=t.get(M(e.coords));i&&(i.isOpened=!0,s+=1),function e(c){var i,o=j(c.coords),r=Object(A.a)(o);try{var u=function(){var e=i.value;w+=1;var c=t.get(M(e));c&&!c.isOpened&&(c.isOpened=!0,s+=1,c.hasFlag&&(c.hasFlag=!1,l+=1),0!==c.bombsAround||n.find((function(e){return e.id===c.id}))||a.has(c.id)||n.push(c))};for(r.s();!(i=r.n()).done;)u()}catch(b){r.e(b)}finally{r.f()}a.add(c.id),n.shift(),n.length>0&&e(n[0])}(e),l&&f(d-l),c(new Map(t)),r(o+s)}),[j,o,d]),p=Object(a.useCallback)((function(e){var t,n=Object(A.a)(s.values());try{for(n.s();!(t=n.n()).done;){var a=t.value;if(w+=1,e.id===a.id){a.isOpened=!0;break}}}catch(l){n.e(l)}finally{n.f()}c(new Map(s)),r(o+1)}),[s,o]),h=Object(a.useCallback)((function(){var t,n=0,a=Object(A.a)(s.values());try{for(a.s();!(t=a.n()).done;){var l=t.value;if(w+=1,l.hasBomb&&(l.isOpened=!0,n+=1),n>=e.bombsCount)break}}catch(i){a.e(i)}finally{a.f()}c(new Map(s))}),[s,e]),y=Object(a.useCallback)((function(e,t){var n,a=Object(A.a)(s.values());try{for(a.s();!(n=a.n()).done;){var l=n.value;if(w+=1,e.id===l.id){l.hasFlag=t;break}}}catch(i){a.e(i)}finally{a.f()}c(new Map(s)),f(t?d+1:d-1)}),[s,d]),C=Object(a.useCallback)((function(){c(v()),r(0),f(0)}),[v]),x=Object(a.useCallback)((function(e){e.isOpened||(e.hasBomb?h():0===o?g(e,m(e)):0===e.bombsAround?g(e,s):p(e))}),[s,o,m,g,h,p]),F=Object(a.useCallback)((function(t){d>=e.bombsCount||y(t,!0)}),[y,d,e]),S=Object(a.useCallback)((function(e){d<1||y(e,!1)}),[y,d]);return Object(a.useEffect)((function(){console.log("Cycles count: ".concat(w)),w=0}),[s]),{fields:s,fieldsOpened:o,openField:x,initFields:C,flagsCount:d,setFlag:F,deleteFlag:S}}(t),c=s.fields,l=s.fieldsOpened,i=s.openField,o=s.initFields,r=s.flagsCount,u=s.setFlag,b=s.deleteFlag,d=Object(a.useState)(0),j=Object(_.a)(d,2),v=j[0],m=j[1],g=Object(a.useState)("00:00"),p=Object(_.a)(g,2),h=p[0],C=p[1],x=Object(a.useState)(O.Idle),F=Object(_.a)(x,2),S=F[0],k=F[1],L=Object(a.useCallback)((function(){o(),m(0),k(O.Idle)}),[o]),P=Object(a.useCallback)((function(){k(O.Playing)}),[]),B=Object(a.useCallback)((function(){k(O.Pause)}),[]),E=Object(a.useCallback)((function(e){e.hasBomb?k(O.GameOver):0===l&&k(O.Playing),i(e)}),[l,i]);return function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current&&n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){m(v+1)}),S===O.Playing?1e3:null),Object(a.useEffect)((function(){L()}),[L]),Object(a.useEffect)((function(){L()}),[t,L]),Object(a.useEffect)((function(){C(function(e){var t=Math.floor(e/3600),n=Math.floor((e-3600*t)/60),a=e-3600*t-60*n;return t<10&&(t="0".concat(t)),n<10&&(n="0".concat(n)),a<10&&(a="0".concat(a)),"".concat("00"!==t?"".concat(t,":"):"").concat(n,":").concat(a)}(v))}),[v]),Object(a.useEffect)((function(){l+t.bombsCount===t.xFieldsCount*t.yFieldsCount&&(alert("Congratulations! You won!"),k(O.GameOver))}),[l,t]),{settings:t,setSettingsByLevel:n,fields:c,fieldsOpened:l,timer:v,formattedTimer:h,gameState:S,prepareGame:L,continuePlaying:P,pause:B,onFieldOpen:E,flagsCount:r,setFlag:u,deleteFlag:b}}var I=n(6),G=n.n(I);function H(){var e=E(),t=e.settings,n=e.setSettingsByLevel,s=e.fields,c=e.onFieldOpen,l=e.fieldsOpened,i=e.formattedTimer,r=e.prepareGame,u=e.continuePlaying,j=e.pause,v=e.gameState,m=e.flagsCount,g=e.setFlag,_=e.deleteFlag,h=Object(a.useMemo)((function(){return v===O.Idle?"Play":"Play again"}),[v]),y=Object(a.useMemo)((function(){return v===O.Pause?"Continue":"Pause"}),[v]),C=Object(a.useMemo)((function(){return{gridTemplateColumns:"repeat(".concat(t.xFieldsCount,", 1fr)"),gridTemplateRows:"repeat(".concat(t.yFieldsCount,", 1fr)")}}),[t]),x=Object(a.useCallback)((function(){v===O.Pause?u():j()}),[v,j,u]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(S,{level:t.level,onLevelChange:n}),Object(b.jsxs)(d,{className:G.a.Game,children:[Object(b.jsx)("section",{className:G.a.fields,style:C,children:Array.from(s.values()).map((function(e){return Object(b.jsx)(p,{field:e,gameState:v,onOpen:c,onSetFlag:g,onDeleteFlag:_,isSmall:t.level!==f.Beginner},e.id)}))}),Object(b.jsxs)("aside",{className:G.a.aside,children:[Object(b.jsxs)("div",{className:G.a.stats,children:[Object(b.jsx)(B,{value:i,icon:"\ud83d\udd51",title:"Timer"}),Object(b.jsx)(B,{value:"".concat(l,"/").concat(t.xFieldsCount*t.yFieldsCount-t.bombsCount),icon:"\u2705",title:"Opened fields"}),Object(b.jsx)(B,{value:"".concat(t.bombsCount-m,"/").concat(t.bombsCount),icon:"\ud83d\udea9",title:"Free flags count"}),Object(b.jsx)(B,{value:"".concat(t.xFieldsCount,"x").concat(t.yFieldsCount),icon:"\ud83d\udcd0",title:"Cells count"})]}),Object(b.jsxs)("div",{className:G.a.buttonWrapper,children:[v===O.Playing||v===O.Idle||Object(b.jsx)("button",{className:G.a.button,onClick:r,children:h}),(v===O.Playing||v===O.Pause)&&Object(b.jsx)("button",{className:G.a.button,onClick:x,children:y}),Object(b.jsxs)("a",{href:"https://github.com/adlite/minesweeper-react-typescript",className:o()(G.a.button,G.a.buttonGitHub),target:"_blank",rel:"noreferrer",children:[Object(b.jsx)("img",{src:"/assets/img/github.svg",alt:"View source on GitHub",className:G.a.githubIcon}),"View source"]})]})]})]})]})}var T=n(12),z=n.n(T);function V(){return Object(b.jsx)("main",{className:z.a.App,children:Object(b.jsxs)("div",{className:z.a.container,children:[Object(b.jsx)("h1",{className:z.a.title,children:"\ud83d\udca3minesweeper"}),Object(b.jsx)(H,{})]})})}n(22),n(23),n(24);l.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(V,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.adaf5f50.chunk.js.map