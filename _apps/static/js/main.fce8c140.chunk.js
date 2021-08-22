(this["webpackJsonpdev-pages"]=this["webpackJsonpdev-pages"]||[]).push([[0],{230:function(e,t,r){},231:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),o=r(48),i=r.n(o),c=r(17),s=r(104),l=r(21),d=r(4),u=r(6),m=r(7),f=r(10),p=r(11),j=r(14),b="UI/SET_MONTH";var h,x=r(32),v=r(18),O=null!==(h=Object({NODE_ENV:"production",PUBLIC_URL:"/apps",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).JC_CALENDAR_APP_LOCALE)&&void 0!==h?h:"en-US",g="yyyy-MM",y="yyyy-MM-dd",w="hh:mm",k=Object.freeze([7,1]);function N(e){return e%7+1}function C(e){return e.toFormat(y,{locale:O})}function T(e){return e.toLocaleString(j.DateTime.TIME_24_SIMPLE)}var E=function(e){return e.ui.month},S=Object(x.a)([E],(function(e){return null!==e?(t=e,j.DateTime.fromFormat(t,g).toLocaleString({locale:O,year:"numeric",month:"long"})):"";var t})),R="UI/NEW_REMINDER",L="UI/EDIT_REMINDER",_="UI/SUBMIT_REMINDER",M="UI/OPEN_REMINDER",D="UI/CLOSE_REMINDER";function F(e){return{type:R,payload:e}}function I(e){return{type:L,payload:e}}function A(e){return{type:_,payload:e}}function P(e){return{type:M,payload:e}}function W(){return{type:D}}var U=r(0),q=function(e){return Object(U.jsx)("i",{className:e.className,children:Object(U.jsxs)("svg",{className:e.svgClassName,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",children:[Object(U.jsx)("path",{d:"M12 5.5V19.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(U.jsx)("path",{d:"M5 12.5H19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})})};var V=Object(l.b)((function(e){return{month:S(e)}}),(function(e){return Object(c.b)({newReminder:F},e)}))((function(e){var t=e.month,r=e.newReminder;return Object(U.jsxs)("div",{className:"flex px-8 py-4 flex-row gap-4 flex-nowrap shadow-lg items-center",children:[Object(U.jsx)("div",{className:"w-64",children:Object(U.jsxs)("button",{onClick:function(){return r()},type:"button",className:"uppercase flex flex-row flex-nowrap items-center gap-2 p-3 lg:px-4 lg:py-2 shadow rounded-full lg:rounded text-lg font-medium bg-white hover:bg-gray-200 text-indigo-700 hover:text-indigo-900 transition-colors duration-150",children:[Object(U.jsx)(q,{svgClassName:"w-6 h-6"}),Object(U.jsx)("span",{className:"hidden lg:inline",children:"New Reminder"})]})}),Object(U.jsx)("h1",{className:"flex-grow text-center text-2xl font-medium",children:t}),Object(U.jsx)("div",{className:"w-64"})]})}));var B=function(e){var t=e.weekDays;return Object(U.jsx)("div",{className:"w-full flex-shrink p-1 bg-gradient-to-r from-indigo-700 to-purple-800 text-white shadow-md grid grid-cols-7 gap-1",children:t.map((function(e){return Object(U.jsxs)("h3",{className:"px-2 py-2 text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center flex items-center justify-center",children:[Object(U.jsx)("span",{className:"hidden lg:inline",children:e.long}),Object(U.jsx)("span",{className:"hidden md:inline lg:hidden",children:e.short}),Object(U.jsx)("span",{className:"inline md:hidden",children:e.narrow})]},e.short)}))})},H=r(13),K=r.n(H),z="indigo-600",J=Object.freeze([z,"green-600","red-500","pink-600","purple-500","yellow-400","blue-500"]);function Y(e){return"bg-".concat(e)}K.a.shape({key:K.a.string.isRequired,text:K.a.string.isRequired,trailing:K.a.bool.isRequired,isWeekend:K.a.bool.isRequired}),K.a.shape({id:K.a.string,description:K.a.string.isRequired,color:K.a.oneOf(J).isRequired,dateTime:K.a.number.isRequired,displayTime:K.a.string.isRequired,city:K.a.string.isRequired});var G=r(16),$=r.n(G),Q=Object(x.a)([E],(function(e){return null!==e?function(e){var t=j.DateTime.fromFormat(e,g),r=j.Interval.fromDateTimes(t.startOf("month"),t.endOf("month")),n=N(r.start.weekday)-1,a=7-N(r.end.weekday),o=j.Interval.fromDateTimes(r.start.minus({days:n>0?n:0}),r.end.plus({days:a})),i=o.count("days"),c=o.start;return Array(i).fill(null).map((function(e,r){var n=c.plus({days:r});return{key:n.toFormat(y),text:n.toLocaleString({locale:O,day:"numeric"}),trailing:!t.hasSame(n,"month"),isWeekend:k.includes(N(n.weekday))}}))}(e):[]})),X=Object(x.a)([function(e,t){var r,n;return null===(r=e.dates)||void 0===r||null===(n=r[t.dateId])||void 0===n?void 0:n.reminders},function(e){return e.reminders}],(function(e,t){return e&&t?e.reduce((function(e,r){var n,a=t[r];return a?[].concat(Object(v.a)(e),[Object(d.a)(Object(d.a)({},a),{},{displayTime:(n=a.dateTime,j.DateTime.fromMillis(n).toLocaleString(Object(d.a)(Object(d.a)({},j.DateTime.TIME_SIMPLE),{},{locale:O})))})]):e}),[]).sort((function(e,t){return e.dateTime-t.dateTime})):[]}));var Z=function(e){var t,r=e.reminder,n=e.onClick;return Object(U.jsxs)("li",{tabIndex:0,onClick:n,title:"".concat(r.displayTime," - ").concat(r.description,"\nClick to Edit."),className:$()("py-px hover:bg-gray-200 text-gray-900 rounded cursor-pointer text-xs font-normal truncate flex flex-row flex-nowrap items-center gap-2","hover:".concat((t=r.color,"text-".concat(t)))),children:[Object(U.jsx)("div",{className:$()("w-2 h-2 rounded-full flex-shrink-0",Y(r.color))}),r.displayTime," - ",r.description]})};var ee=Object(l.b)((function(e,t){return{reminders:X(e,{dateId:t.date.key})}}),(function(e){return Object(c.b)({editReminder:I,newReminder:F},e)}))((function(e){var t=e.date,r=e.reminders,n=e.editReminder,a=e.newReminder;return Object(U.jsxs)("li",{onClick:function(){return a(t.key)},className:$()("h-auto px-3 py-2 bg-white text-lg overflow-hidden",{"font-normal":!t.isWeekend,"text-indigo-600 font-bold":t.isWeekend&&!t.trailing,"text-gray-400":t.trailing}),children:[t.text,Object(U.jsx)("ol",{children:r.map((function(e){return Object(U.jsx)(Z,{reminder:e,onClick:function(t){t.stopPropagation(),n(e)}},e.id)}))})]},t.key)}));var te=function(e){var t=e.dates;return Object(U.jsx)("ol",{className:"w-full flex-grow overflow-y-auto px-1 pt-0 pb-1 bg-gray-200 grid grid-cols-7 auto-rows-fr gap-1",children:t.map((function(e){return Object(U.jsx)(ee,{date:e},e.key)}))})},re=function(){var e={locale:O},t=j.Info.weekdaysFormat("long",e),r=j.Info.weekdaysFormat("short",e),n=j.Info.weekdaysFormat("narrow",e),a=Array(7).fill(null).map((function(e,a){return{long:t[a],short:r[a],narrow:n[a]}}));return[a[6]].concat(Object(v.a)(a.slice(0,6)))}();var ne=Object(l.b)((function(e,t){var r=Q(e);return Object(d.a)(Object(d.a)({},t),{},{dates:r})}))((function(e){var t=e.dates;return Object(U.jsxs)("div",{className:"w-full flex-grow overflow-hidden flex flex-col",children:[Object(U.jsx)(B,{weekDays:re}),Object(U.jsx)(te,{dates:t})]})})),ae=Object(x.a)([function(e){return e.ui.reminder}],(function(e){return e?Object(d.a)({id:e.id,description:e.description,color:e.color,city:e.city},function(e){var t=j.DateTime.fromMillis(e);return{date:C(t),time:T(t)}}(e.dateTime)):null})),oe=function(e){return Object(U.jsx)("i",{className:e.className,children:Object(U.jsxs)("svg",{className:e.svgClassName,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[Object(U.jsx)("path",{d:"M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(U.jsx)("path",{d:"M6 6L18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})})};var ie=function(e){var t=e.children,r=e.onClose;return Object(U.jsxs)("div",{className:"flex flex-row flex-nowrap items-center justify-between",children:[Object(U.jsx)("div",{className:"truncate",children:t}),Object(U.jsx)("button",{type:"button",className:"p-1",onClick:r,children:Object(U.jsx)(oe,{svgClassName:"w-6 h-6"})})]})},ce=function(e){Object(f.a)(r,e);var t=Object(p.a)(r);function r(e){var a;return Object(u.a)(this,r),(a=t.call(this,e)).handleClick=function(e){e.target===a.ref.current&&a.props.onClick()},a.ref=Object(n.createRef)(),a}return Object(m.a)(r,[{key:"render",value:function(){return Object(U.jsx)("div",{ref:this.ref,onClick:this.handleClick,className:"fixed top-0 left-0 flex flex-col lg:py-28 h-full w-full bg-black z-20 bg-opacity-30",children:this.props.children})}}]),r}(n.Component);var se=function(e){var t=e.children,r=e.onClose;return Object(U.jsx)(ce,{onClick:r,children:Object(U.jsx)("div",{className:"z-30 mx-auto w-full lg:max-w-2xl h-auto flex-grow lg:flex-grow-0 overflow-hidden overflow-y-scroll bg-white lg:shadow-lg lg:rounded-md",children:t})})},le=r(19),de=r(37),ue=r(29),me=["field","form","className"];var fe=function(e){var t=e.field,r=e.form,n=r.touched,a=r.errors,o=e.className,i=Object(ue.a)(e,me),c=n[t.name]&&Boolean(a[t.name]);return Object(U.jsx)("input",Object(d.a)(Object(d.a)({type:"text",className:$()("placeholder-gray-400 bg-white border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-auto shadow-sm rounded-md",{"ring-2 ring-red-500":c},o)},t),i))},pe=["field","form","className"];var je=function(e){var t=e.field,r=e.form,n=r.touched,a=r.errors,o=e.className,i=Object(ue.a)(e,pe),c=n[t.name]&&Boolean(a[t.name]);return Object(U.jsx)("input",Object(d.a)(Object(d.a)({type:"date",className:$()("placeholder-gray-400 bg-white border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm rounded-md",{"ring-2 ring-red-500":c},o)},t),i))};var be=function(e){var t=e.children;return Object(U.jsx)("div",{className:"text-xs sm:text-sm block text-red-500",children:t})};var he=function(e){var t=e.children,r=e.htmlFor;return Object(U.jsx)("label",{htmlFor:r,className:"block font-medium text-gray-700 ",children:t})};var xe=function(e){var t=e.children;return Object(U.jsx)("div",{className:"flex flex-col gap-1",children:t})},ve=["children","className"];var Oe=function(e){var t=e.children,r=e.className,n=Object(ue.a)(e,ve);return Object(U.jsx)("button",Object(d.a)(Object(d.a)({type:"button",className:$()("uppercase w-full sm:w-auto flex flex-row flex-nowrap items-center justify-center gap-2 px-4 py-2 shadow rounded text-lg font-medium transition-colors duration-150",r)},n),{},{children:t}))};var ge=function(e){var t=e.children;return Object(U.jsx)("div",{className:"mt-4 flex flex-row flex-wrap items-center justify-end",children:t})},ye=function(e){return Object(U.jsx)("i",{className:e.className,children:Object(U.jsx)("svg",{className:e.svgClassName,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:Object(U.jsx)("path",{d:"M20 6L9 17L4 12",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})},we=["field","form","className"];var ke=function(e){var t=e.field,r=e.form,n=r.touched,a=r.errors,o=e.className,i=Object(ue.a)(e,we),c=n[t.name]&&Boolean(a[t.name]);return Object(U.jsx)("input",Object(d.a)(Object(d.a)({type:"time",className:$()("placeholder-gray-400 bg-white border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm rounded-md",{"ring-2 ring-red-500":c},o)},t),i))};var Ne=function(e){var t=e.colorName;return Object(U.jsx)("div",{className:$()("w-6 h-6 rounded-full",Y(t)),children:Object(U.jsxs)("span",{className:"sr-only",children:["Color: ",t]})})},Ce=function(e){return Object(U.jsx)("i",{className:e.className,children:Object(U.jsx)("svg",{className:e.svgClassName,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:Object(U.jsx)("path",{fillRule:"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})})})};var Te=function(e){var t=e.colorName,r=e.onClick;return Object(U.jsx)("li",{tabIndex:"0",id:"listbox-item-0",role:"option","aria-selected":!1,className:"cursor-pointer select-none relative p-2 transition duration-200 hover:bg-indigo-100",onClick:r,children:Object(U.jsx)("div",{className:"flex items-center justify-center",children:Object(U.jsx)(Ne,{colorName:t})})})},Ee=function(e){Object(f.a)(r,e);var t=Object(p.a)(r);function r(e){var a;return Object(u.a)(this,r),(a=t.call(this,e)).state={open:!1},a.toggleOpen=function(){a.setState((function(e){return{open:!e.open}}))},a.close=function(){a.setState((function(){return{open:!1}}))},a.handleOutsideClick=function(e){null===a.ref.current||a.ref.current.contains(e.target)||a.close()},a.handleSelectColor=function(e){a.props.onChange({target:{name:a.props.name,value:e}}),a.close()},a.renderColorList=function(){var e=a.props.value;return Object(U.jsx)("div",{className:"absolute mt-1 w-full rounded-md bg-white shadow-lg",children:Object(U.jsx)("ul",{tabIndex:"0",role:"listbox","aria-labelledby":"listbox-label","aria-activedescendant":"listbox-item-3",className:"max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm",children:J.filter((function(t){return t!==e})).map((function(e){return Object(U.jsx)(Te,{colorName:e,onClick:function(){return a.handleSelectColor(e)}},e)}))})})},a.ref=Object(n.createRef)(),a}return Object(m.a)(r,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleOutsideClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleOutsideClick)}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.name,n=e.value;return Object(U.jsxs)("div",{ref:this.ref,name:r,className:"relative",children:[Object(U.jsxs)("button",{type:"button","aria-haspopup":"listbox","aria-expanded":"true","aria-labelledby":"listbox-label",className:$()("relative w-auto bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",t),onClick:this.toggleOpen,children:[Object(U.jsx)("span",{className:"flex items-center",children:Object(U.jsx)(Ne,{colorName:n})}),Object(U.jsx)("span",{className:"ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",children:Object(U.jsx)(Ce,{svgClassName:"h-5 w-5 text-gray-400"})})]}),this.state.open&&this.renderColorList()]})}}]),r}(n.Component),Se=(K.a.shape({id:K.a.string,description:K.a.string.isRequired,color:K.a.oneOf(J).isRequired,date:K.a.string.isRequired,time:K.a.string.isRequired,city:K.a.string.isRequired}),"UI/GET_FORECAST"),Re="UI/SET_FORECAST",Le="UI/RESET_FORECAST";function _e(e){var t=e.city,r=e.date;return{type:Se,payload:{city:t,date:r}}}function Me(){return{type:Le}}var De=function(e){var t;return null===(t=e.ui.forecast)||void 0===t?void 0:t.forecast},Fe=function(e){return Object(U.jsx)("i",{className:e.className,children:Object(U.jsxs)("svg",{className:e.svgClassName,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",children:[Object(U.jsx)("path",{d:"M17 11.5L12 6.5L7 11.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(U.jsx)("path",{d:"M17 18.5L12 13.5L7 18.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})})},Ie=function(e){return Object(U.jsx)("i",{className:e.className,children:Object(U.jsxs)("svg",{className:e.svgClassName,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[Object(U.jsx)("path",{d:"M7 13L12 18L17 13",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(U.jsx)("path",{d:"M7 6L12 11L17 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})})};var Ae=function(e){var t,r,n=e.forecast,a=Boolean(n);return Object(U.jsx)("div",{className:$()("w-full h-auto transition-all duration-1000",{"max-h-96 opacity-100":a,"max-h-0 opacity-0":!a}),children:a&&Object(U.jsxs)("div",{className:"border border-gray-300 rounded-md p-4 flex flex-row flex-wrap gap-x-12 gap-y-4 items-center",children:[Object(U.jsxs)("div",{className:"flex flex-col gap-2 justify-center items-end",children:[n.maxTemp&&Object(U.jsxs)("div",{className:"flex gap-1 items-start",children:[Object(U.jsxs)("p",{title:"Max. Temp.",className:"text-3xl font-medium",children:[n.maxTemp.toFixed(1),"\xb0F"]}),Object(U.jsx)(Fe,{svgClassName:"w-6 h-6"})]}),n.minTemp&&Object(U.jsxs)("div",{className:"flex gap-1 items-center text-gray-700",children:[Object(U.jsxs)("p",{title:"Min. Temp.",className:"text-2xl",children:[n.minTemp.toFixed(1),"\xb0F"]}),Object(U.jsx)(Ie,{svgClassName:"w-5 h-5"})]})]}),(null===(t=n.condition)||void 0===t?void 0:t.text)&&Object(U.jsxs)("div",{className:"flex flex-row gap-2 items-center justify-start",children:[(null===(r=n.condition)||void 0===r?void 0:r.icon)&&Object(U.jsx)("img",{alt:n.condition.text,src:n.condition.icon,className:"w-16 h-16"}),Object(U.jsx)("p",{title:"Condition",className:"text-xl font-medium",children:n.condition.text})]})]})})},Pe=function(e){Object(f.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).isValid=function(){var t=e.props,n=t.names,a=t.formik;return Object.keys(n).every((function(e){var t=le.f(a.errors,e);return("undefined"===typeof t||0===Object.keys(t).length)&&0!==r.getFieldValue(e,a).length}))},e}return Object(m.a)(r,[{key:"componentDidMount",value:function(){this.isValid()?this.props.getForecast(r.getAllValues(this.props.names,this.props.formik)):this.props.resetForecast()}},{key:"componentDidUpdate",value:function(e){var t=r.getAllValues(e.names,e.formik),n=r.getAllValues(this.props.names,this.props.formik);t.city===n.city&&t.date===n.date||(this.isValid()?this.props.getForecast(n):this.props.resetForecast())}},{key:"componentDidCatch",value:function(e,t){console.error("Uncaught error in forecast container component",{error:e,info:t})}},{key:"render",value:function(){return Object(U.jsx)(Ae,{forecast:this.props.forecast})}}],[{key:"getFieldValue",value:function(e,t){return String(le.f(t.values,e)).trim()}}]),r}(n.Component);Pe.getAllValues=function(e,t){return{city:Pe.getFieldValue(e.city,t),date:Pe.getFieldValue(e.date,t)}};var We=le.e(Pe),Ue=Object(l.b)((function(e){return{forecast:De(e)}}),(function(e){return Object(c.b)({getForecast:_e,resetForecast:Me},e)}))(We),qe=de.a().shape({description:de.b().max(30,"No more than 30 character, please.").required("Please describe your reminder (max. 30 characters)."),color:de.b().oneOf(J,"Color is invalid.").required("Please inform a color."),date:de.b().matches(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,"Date must be valid (".concat(y,").")).required("Please inform the day you want to get reminded."),time:de.b().matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,"Time must be valid (".concat(w,").")).required("Please inform the time of the day you want to get reminded.")}),Ve=function(e){Object(f.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).getInitialValues=function(){var t=e.props.reminder;return{description:t.description,color:t.color,date:t.date,time:t.time,city:t.city}},e.handleSubmit=function(t){e.props.onSubmit({id:e.props.reminder.id,description:t.description,color:t.color,city:t.city,date:t.date,time:t.time})},e}return Object(m.a)(r,[{key:"render",value:function(){return Object(U.jsx)(le.d,{initialValues:this.getInitialValues(),validationSchema:qe,onSubmit:this.handleSubmit,children:Object(U.jsxs)(le.c,{className:"w-full flex flex-col gap-3",children:[Object(U.jsxs)(xe,{children:[Object(U.jsx)(he,{htmlFor:"description",children:"What do you want to remember?"}),Object(U.jsxs)("div",{className:"flex flex-row flex-wrap gap-2",children:[Object(U.jsx)(le.b,{id:"description",name:"description",component:fe,placeholder:"e.g.: Buy milk",className:"flex-grow"}),Object(U.jsx)(le.b,{name:"color",as:Ee,className:"flex-shrink"})]}),Object(U.jsx)(le.a,{component:be,name:"description"}),Object(U.jsx)(le.a,{component:be,name:"color"})]}),Object(U.jsxs)(xe,{children:[Object(U.jsx)(he,{htmlFor:"date",children:"When?"}),Object(U.jsxs)("div",{className:"flex flex-row flex-wrap gap-2",children:[Object(U.jsx)(le.b,{id:"date",name:"date",component:je,className:"flex-grow"}),Object(U.jsx)(le.b,{id:"time",name:"time",component:ke,className:"w-full sm:w-44"})]}),Object(U.jsx)(le.a,{component:be,name:"date"}),Object(U.jsx)(le.a,{component:be,name:"time"})]}),Object(U.jsxs)(xe,{children:[Object(U.jsx)(he,{htmlFor:"city",children:"Where?"}),Object(U.jsx)(le.b,{id:"city",name:"city",component:fe,placeholder:"e.g.: New York City"}),Object(U.jsx)(le.a,{component:be,name:"city"})]}),Object(U.jsx)(Ue,{names:{city:"city",date:"date"}}),Object(U.jsx)(ge,{children:Object(U.jsxs)(Oe,{type:"submit",className:"bg-indigo-700 hover:bg-indigo-500 text-white",children:[Object(U.jsx)(ye,{svgClassName:"w-6 h-6"}),"Confirm"]})})]})})}}]),r}(n.Component),Be=function(e){Object(f.a)(r,e);var t=Object(p.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(m.a)(r,[{key:"render",value:function(){var e=this.props,t=e.reminder,r=e.onClose,n=e.onSubmit,a=!Boolean(t.id);return Object(U.jsx)(se,{onClose:r,children:Object(U.jsxs)("div",{className:"w-full h-full overflow-y-auto p-8 flex flex-col gap-8",children:[Object(U.jsx)(ie,{onClose:r,children:Object(U.jsxs)("h2",{className:"uppercase font-medium text-xl",children:[a?"New":"Edit"," Reminder"]})}),Object(U.jsx)(Ve,{reminder:t,onSubmit:n})]})})}}]),r}(n.Component);var He=Object(l.b)((function(e){return{reminder:ae(e)}}),(function(e){return Object(c.b)({closeReminder:W,submitReminder:A},e)}))((function(e){var t=e.reminder,r=e.closeReminder,n=e.submitReminder;return t?Object(U.jsx)(Be,{reminder:t,onClose:r,onSubmit:n}):null}));function Ke(){document.documentElement.style.setProperty("--vh","1px")}var ze=function(e){Object(f.a)(r,e);var t=Object(p.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(m.a)(r,[{key:"componentDidMount",value:function(){var e;window.addEventListener("resize",Ke),null===this.props.month&&this.props.dispatch((e=j.DateTime.local().toFormat("yyyy-MM"),{type:b,payload:e}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",Ke)}},{key:"render",value:function(){return Object(U.jsx)("div",{className:"h-screen-nav-fix w-screen font-montserrat overflow-hidden bg-gray-50 text-gray-900",children:Object(U.jsxs)("div",{className:"w-full h-full flex flex-col",children:[Object(U.jsx)(V,{}),Object(U.jsx)(ne,{}),Object(U.jsx)(He,{})]})})}}]),r}(n.Component);var Je=Object(l.b)((function(e,t){return Object(d.a)(Object(d.a)({},t),{},{month:E(e)})}))(ze),Ye=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,232)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),o(e),i(e)}))};var Ge=Object(c.c)({month:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return t.payload;default:return e}},reminder:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return t.payload;case D:return null;default:return e}},forecast:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errorMessage:null,forecast:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Re:return t.payload;case Le:return{errorMessage:null,forecast:null};default:return e}}}),$e=r(31),Qe="ADD_DATE_REMINDER";function Xe(e){var t=e.date,r=e.reminderId;return{type:Qe,payload:{date:t,reminderId:r}}}function Ze(e,t){return Object.values(e).reduce((function(e,r){return Object(d.a)(Object(d.a)({},e),{},Object($e.a)({},r.id,Object(d.a)(Object(d.a)({},r),{},{reminders:r.reminders.filter((function(e){return e!==t}))})))}),{})}var et="SET_REMINDER";function tt(e){return{type:et,payload:e}}var rt=Object(c.c)({ui:Ge,dates:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;switch(r.type){case Qe:var n=null!==(e=t[r.payload.date])&&void 0!==e?e:{id:r.payload.date,reminders:[]};return Object(d.a)(Object(d.a)({},Ze(t,r.payload.reminderId)),{},Object($e.a)({},n.id,Object(d.a)(Object(d.a)({},n),{},{reminders:Array.from(new Set([].concat(Object(v.a)(n.reminders),[r.payload.reminderId])))})));default:return t}},reminders:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case et:return Object(d.a)(Object(d.a)({},e),{},Object($e.a)({},t.payload.id,t.payload));default:return e}}}),nt=r(5),at=r.n(nt),ot=r(9);var it,ct=r(103),st=r(66),lt=r.n(st),dt=null!==(it=Object({NODE_ENV:"production",PUBLIC_URL:"/apps",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FORECAST_API_BASE_URL)&&void 0!==it?it:"https://api.weatherapi.com/v1",ut=Object({NODE_ENV:"production",PUBLIC_URL:"/apps",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FORECAST_API_KEY,mt=lt.a.create({baseURL:dt});function ft(e){return{errorMessage:'An unexpected error ocurred while trying to get forecast data: "'.concat(e,'".'),forecast:null}}function pt(e){return e.response?ft(function(e){var t,r;return null===(t=e.data)||void 0===t||null===(r=t.error)||void 0===r?void 0:r.message}(e.response)):e.request?ft(e.request.statusText):ft(e.message)}function jt(e,t){var r,n,a=null===e||void 0===e||null===(r=e.data)||void 0===r||null===(n=r.forecast)||void 0===n?void 0:n.forecastday;if(!Array.isArray(a))return{errorMessage:null,forecast:null};var o=a.find((function(e){return(null===e||void 0===e?void 0:e.date)===t}));return(null===o||void 0===o?void 0:o.day)?function(e){var t,r,n;return{errorMessage:null,forecast:{maxTemp:Number(e.maxtemp_f)||null,minTemp:Number(e.mintemp_f)||null,avgTemp:Number(e.avgtemp_f)||null,condition:{code:String(null===(t=e.condition)||void 0===t?void 0:t.code)||null,text:String(null===(r=e.condition)||void 0===r?void 0:r.text)||null,icon:String(null===(n=e.condition)||void 0===n?void 0:n.icon)||null}}}}(o.day):{errorMessage:null,forecast:null}}function bt(e,t){return ht.apply(this,arguments)}function ht(){return(ht=Object(ct.a)(at.a.mark((function e(t,r){var n,a,o;return at.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=j.DateTime.fromFormat(r,y).startOf("day")).isValid){e.next=3;break}return e.abrupt("return",{errorMessage:null,forecast:null});case 3:if(!((a=n.diff(j.DateTime.local().startOf("day"),"days").days)>10||a<0)){e.next=6;break}return e.abrupt("return",{errorMessage:null,forecast:null});case 6:return e.prev=6,e.next=9,mt.get("forecast.json",{params:{key:ut,q:t,days:Math.ceil(a)+1}});case 9:return o=e.sent,e.abrupt("return",jt(o,r));case 13:return e.prev=13,e.t0=e.catch(6),e.abrupt("return",lt.a.isCancel(e.t0)?{errorMessage:null,forecast:null}:pt(e.t0));case 16:case"end":return e.stop()}}),e,null,[[6,13]])})))).apply(this,arguments)}var xt=at.a.mark(yt),vt=at.a.mark(wt),Ot=at.a.mark(kt),gt=at.a.mark(Nt);function yt(e){return at.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(ot.h)({result:e,reset:Object(ot.k)(Le)});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),xt)}function wt(e){var t,r;return at.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,yt(Object(ot.c)(bt,e.payload.city,e.payload.date));case 2:if(t=n.sent,r=t.result,t.reset){n.next=8;break}return n.next=8,Object(ot.g)({type:Re,payload:r});case 8:case"end":return n.stop()}}),vt)}function kt(e){var t;return at.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,yt(Object(ot.e)(1e3));case 2:if(t=r.sent,t.reset){r.next=7;break}return r.next=7,wt(e);case 7:case"end":return r.stop()}}),Ot)}function Nt(){var e,t;return at.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,Object(ot.k)(Se);case 3:if(t=r.sent,!e){r.next=7;break}return r.next=7,Object(ot.d)(e);case 7:return r.next=9,Object(ot.f)(kt,t);case 9:e=r.sent,r.next=0;break;case 12:case"end":return r.stop()}}),gt)}function Ct(){return Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)}var Tt=at.a.mark(Dt),Et=at.a.mark(Ft),St=at.a.mark(It),Rt=at.a.mark(At),Lt=at.a.mark(Pt),_t=at.a.mark(Wt),Mt=at.a.mark(Ut);function Dt(e){return at.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(ot.g)(P(e));case 2:case"end":return t.stop()}}),Tt)}function Ft(e){var t,r,n,a;return at.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,o.next=3,Object(ot.b)(j.DateTime,"local");case 3:return r=o.sent,t&&(n=j.DateTime.fromFormat(t,y)).isValid&&(r=r.set({year:n.year,month:n.month,day:n.day})),z,a={id:null,description:"",color:"indigo-600",dateTime:r.toMillis(),city:""},o.next=9,Object(ot.c)(Dt,a);case 9:case"end":return o.stop()}}),Et)}function It(e){return at.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(ot.c)(Dt,e.payload);case 2:case"end":return t.stop()}}),St)}function At(e){var t,r,n,a;return at.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(t=e.payload,r=t.id){o.next=6;break}return o.next=5,Object(ot.c)(Ct);case 5:r=o.sent;case 6:return n={id:r,description:t.description,color:t.color,dateTime:(i=t.date,c=t.time,j.DateTime.fromFormat("".concat(i," ").concat(c),"".concat(y," ").concat(w),{locale:O}).toMillis()),city:t.city},a={date:t.date,reminderId:n.id},o.next=10,Object(ot.g)(tt(n));case 10:return o.next=12,Object(ot.g)(Xe(a));case 12:return o.next=14,Object(ot.g)(W());case 14:case"end":return o.stop()}var i,c}),Rt)}function Pt(){return at.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ot.l)(R,Ft);case 2:case"end":return e.stop()}}),Lt)}function Wt(){return at.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ot.l)(L,It);case 2:case"end":return e.stop()}}),_t)}function Ut(){return at.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ot.l)(_,At);case 2:case"end":return e.stop()}}),Mt)}var qt=at.a.mark(Bt),Vt=at.a.mark(Ht);function Bt(){var e,t,r,n=arguments;return at.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:for(e=n.length,t=new Array(e),r=0;r<e;r++)t[r]=n[r];return a.next=3,Object(ot.a)(t.map((function(e){return Object(ot.j)(at.a.mark((function t(){return at.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,Object(ot.c)(e);case 4:return t.abrupt("break",14);case 7:t.prev=7,t.t0=t.catch(1),console.groupCollapsed("%cSaga ".concat(e.name," crashed and will be restarted..."),"\n                font-size: 600;\n                color: #DC2626;\n                background-color: #FECACA;\n                padding: 0.125rem 0.25rem;\n                border-radius: 0.125rem;\n              "),console.error(t.t0),console.groupEnd();case 12:t.next=0;break;case 14:case"end":return t.stop()}}),t,null,[[1,7]])})))})));case 3:case"end":return a.stop()}}),qt)}function Ht(){var e;return at.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[Pt,Wt,Ut,Nt],t.next=4,Bt.apply(void 0,e);case 4:case"end":return t.stop()}}),Vt)}r(230);var Kt=Object(s.a)(),zt=Object(c.e)(rt,Object(c.a)(Kt));Kt.run(Ht),i.a.render(Object(U.jsx)(a.a.StrictMode,{children:Object(U.jsx)(l.a,{store:zt,children:Object(U.jsx)(Je,{})})}),document.getElementById("root")),Ye()}},[[231,1,2]]]);
//# sourceMappingURL=main.fce8c140.chunk.js.map