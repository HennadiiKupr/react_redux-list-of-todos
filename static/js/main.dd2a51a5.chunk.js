(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(5),r=c(15),l=c(6),o=c(13),i=c(14),d=function(e){return{type:"currentTodo/set",payload:e}},j=function(){return{type:"currentTodo/remove"}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/set":return t.payload;case"currentTodo/remove":return null;default:return e}},h=c(4),b=function(e){return{type:"filter/set_status",payload:e}},m=function(e){return{type:"filter/set_query",payload:e}},O={query:"",status:"all"},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/set_query":return Object(h.a)(Object(h.a)({},e),{},{query:t.payload});case"filter/set_status":return Object(h.a)(Object(h.a)({},e),{},{status:t.payload});default:return e}},x=function(e){return{type:"todos/set_todos",payload:e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/set_todos"===t.type?t.payload:e},v=Object(l.combineReducers)({currentTodo:u,filter:f,todos:p}),y=Object(l.createStore)(v,Object(o.composeWithDevTools)(Object(l.applyMiddleware)(i.a))),N=c(3),g=c(0),T=(c(23),c(24),c(11)),w=c.n(T),k=n.b,_=n.c,C=c(1),S=function(e){var t=e.todo,c=t.id,s=t.title,a=t.completed,n=k(),r=_((function(e){var t;return(null===(t=e.currentTodo)||void 0===t?void 0:t.id)===c}));return Object(C.jsxs)("tr",{"data-cy":"todo",className:w()({"has-background-info-light":r}),children:[Object(C.jsx)("td",{className:"is-vcentered",children:c}),Object(C.jsx)("td",{className:"is-vcentered",children:a&&Object(C.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(C.jsx)("i",{className:"fas fa-check"})})}),Object(C.jsx)("td",{className:"is-vcentered is-expanded",children:Object(C.jsx)("p",{className:a?"has-text-success":"has-text-danger",children:s})}),Object(C.jsx)("td",{className:"has-text-right is-vcentered",children:Object(C.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return n(d(t))},children:Object(C.jsx)("span",{className:"icon",children:Object(C.jsx)("i",{className:w()("far",r?"fa-eye-slash":"fa-eye")})})})})]})},q=function(e){var t=e.todos;return Object(C.jsx)(C.Fragment,{children:0===t.length?Object(C.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}):Object(C.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"#"}),Object(C.jsx)("th",{children:Object(C.jsx)("span",{className:"icon",children:Object(C.jsx)("i",{className:"fas fa-check"})})}),Object(C.jsx)("th",{children:"Title"}),Object(C.jsx)("th",{children:" "})]})}),Object(C.jsx)("tbody",{children:t.map((function(e){return Object(C.jsx)(S,{todo:e},e.id)}))})]})})},E=function(){var e=k(),t=_((function(e){return e.filter.query})),c=_((function(e){return e.filter.status}));return Object(C.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(C.jsx)("p",{className:"control",children:Object(C.jsx)("span",{className:"select",children:Object(C.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(t){e(b(t.target.value))},children:[Object(C.jsx)("option",{value:"all",children:"All"}),Object(C.jsx)("option",{value:"active",children:"Active"}),Object(C.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(C.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(C.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(t){e(m(t.target.value))}}),Object(C.jsx)("span",{className:"icon is-left",children:Object(C.jsx)("i",{className:"fas fa-magnifying-glass"})}),t.length>0&&Object(C.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(C.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete"})})]})]})};function L(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(26);var B=function(){return Object(C.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(C.jsx)("div",{className:"Loader__content"})})},D=function(){var e=Object(g.useState)(null),t=Object(N.a)(e,2),c=t[0],s=t[1],a=k(),n=_((function(e){return e.currentTodo}));return Object(g.useEffect)((function(){var e;n&&(e=n.userId,L("/users/".concat(e))).then(s)}),[n]),Object(C.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(C.jsx)("div",{className:"modal-background"}),null===c?Object(C.jsx)(B,{}):Object(C.jsxs)("div",{className:"modal-card",children:[Object(C.jsxs)("header",{className:"modal-card-head",children:[Object(C.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===n||void 0===n?void 0:n.id)}),Object(C.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return a(j())}})]}),Object(C.jsxs)("div",{className:"modal-card-body",children:[Object(C.jsx)("p",{className:"block","data-cy":"modal-title",children:null===n||void 0===n?void 0:n.title}),Object(C.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==n&&void 0!==n&&n.completed?Object(C.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(C.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(C.jsx)("a",{href:"mailto:".concat(c.email),children:c.name})]})]})]})]})},I=function(e){var t=e.todos,c=e.filter,s=c.query,a=c.status;return t.filter((function(e){var t=e.title,c=e.completed,n=t.toLowerCase().includes(s.toLowerCase());switch(a){case"active":return n&&!c;case"completed":return n&&c;default:return n}}))},A=function(){var e=Object(g.useState)(!1),t=Object(N.a)(e,2),c=t[0],s=t[1],a=k(),r=Object(n.c)((function(e){return e.currentTodo})),l=_(I);return Object(g.useEffect)((function(){s(!0),L("/todos").then((function(e){a(x(e))})).finally((function(){return s(!1)}))}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"section",children:Object(C.jsx)("div",{className:"container",children:Object(C.jsxs)("div",{className:"box",children:[Object(C.jsx)("h1",{className:"title",children:"Todos:"}),Object(C.jsx)("div",{className:"block",children:Object(C.jsx)(E,{})}),Object(C.jsx)("div",{className:"block",children:c?Object(C.jsx)(B,{}):Object(C.jsx)(q,{todos:l})})]})})}),r&&Object(C.jsx)(D,{})]})},F=function(){return Object(C.jsx)(n.a,{store:y,children:Object(C.jsx)(r.a,{children:Object(C.jsx)(A,{})})})};a.a.render(Object(C.jsx)(F,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.dd2a51a5.chunk.js.map