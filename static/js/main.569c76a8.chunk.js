(this["webpackJsonpreact-task-app"]=this["webpackJsonpreact-task-app"]||[]).push([[0],{13:function(e,t,s){},15:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(7),i=s.n(n),r=(s(13),s(3)),l=s.p+"static/media/delete-itcon.1904aa85.svg",o=s(0),d=function(){var e=Object(c.useContext)(f),t=e.state,s=e.dispatch,a=Object(c.useState)(null),n=Object(r.a)(a,2),i=n[0],l=n[1];return console.log(i),Object(o.jsx)("div",{className:"details",children:Object(o.jsxs)("li",{children:[Object(o.jsxs)("span",{className:"details-btn",onClick:function(){return s({type:"SHOW_ALL"})},children:["ALL ",Object(o.jsx)("span",{className:"details-num",children:t.tasks.length})]}),Object(o.jsxs)("span",{className:"details-btn",onClick:function(){return s({type:"SHOW_ACTIVE",payload:i})},children:["Active"," ",Object(o.jsx)("span",{className:"details-num",children:t.tasks.filter((function(e){return e.isActive})).length})]}),Object(o.jsxs)("span",{className:"details-btn",onClick:function(){l(t),s({type:"SHOW_COMPLETED",payload:i})},children:["Completed"," ",Object(o.jsx)("span",{className:"details-num",children:t.tasks.filter((function(e){return!e.isActive})).length})]})]})})},j=function(){var e=Object(c.useContext)(f),t=e.state,s=e.dispatch;console.log("state is : ",t);var a=t.modifiedTask?t.modifiedTask:t.tasks;return Object(o.jsxs)("ul",{className:"task",children:[a.map((function(e,t){return Object(o.jsxs)("li",{onClick:function(){return s({type:"TOOGLE_ACTIVE",payload:t})},className:"".concat(e.isActive?"":"completed"),children:[Object(o.jsx)("span",{children:e.title}),Object(o.jsx)("img",{src:l,alt:"delete-icon",className:"delete-icon",onClick:function(e){e.stopPropagation(),s({type:"DELETE_TASK",payload:t})}})]},t)})),Object(o.jsx)(d,{})]})},u=function(){return Object(o.jsx)("div",{className:"tasks",children:Object(o.jsx)(j,{})})},O=s(8),b=s(2),p=function(e,t){switch(t.type){case"TOOGLE_ACTIVE":return{tasks:e.tasks.map((function(e,s){return t.payload===s?Object(b.a)(Object(b.a)({},e),{},{isActive:!e.isActive,completed:!e.completed}):e})),modifiedTask:""};case"DELETE_TASK":return{tasks:e.tasks.filter((function(e,s){return t.payload!==s}))};case"SHOW_ALL":return Object(b.a)(Object(b.a)({},e),{},{modifiedTask:""});case"SHOW_COMPLETED":return Object(b.a)(Object(b.a)({},e),{},{modifiedTask:e.tasks.filter((function(e){return e.completed}))});case"SHOW_ACTIVE":return Object(b.a)(Object(b.a)({},e),{},{modifiedTask:e.tasks.filter((function(e){return e.isActive}))});case"ADD_TODO":return{tasks:[].concat(Object(O.a)(e.tasks),[t.payload])};default:return e}},m=function(){var e=Object(c.useContext)(f).dispatch,t=Object(c.useState)(""),s=Object(r.a)(t,2),a=s[0],n=s[1];return Object(o.jsx)("div",{className:"form",children:Object(o.jsxs)("form",{action:"#",onSubmit:function(t){(t.preventDefault(),0!==a.trim().length)&&(e({type:"ADD_TODO",payload:{title:a,isActive:!0,completed:!1}}),n(""))},children:[Object(o.jsx)("input",{type:"text",name:"title",value:a,onChange:function(e){return n(e.target.value)},placeholder:"Create a new task..."}),Object(o.jsx)("button",{className:"add-btn",type:"submit",children:"ADD"})]})})},h=(s(15),function(){return Object(o.jsx)("footer",{children:Object(o.jsxs)("p",{children:["Made with \u2764 by",Object(o.jsx)("a",{href:"https://github.com/mizanmahi",target:"blank",children:"Mizanur Rahman"})]})})}),f=a.a.createContext(),x={tasks:[{title:"Buy some programming books",isActive:!0,completed:!1},{title:"Take a power nap",isActive:!0,completed:!1},{title:"Exercise 1 hours",isActive:!0,completed:!1},{title:"Read quran for 2 hour",isActive:!0,completed:!1}],modifiedTask:""};var k=function(){var e=Object(c.useReducer)(p,x),t=Object(r.a)(e,2),s=t[0],a=t[1];return console.log(s),Object(o.jsx)(f.Provider,{value:{state:s,dispatch:a},children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("div",{className:"top"}),Object(o.jsx)("div",{className:"bottom"}),Object(o.jsx)(m,{}),Object(o.jsx)("h1",{className:"all-task",children:"Task!"}),Object(o.jsx)(u,{}),Object(o.jsx)(h,{})]})})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.569c76a8.chunk.js.map