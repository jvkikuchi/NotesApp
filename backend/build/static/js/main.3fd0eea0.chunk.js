(this["webpackJsonppart2-notes"]=this["webpackJsonppart2-notes"]||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n(15),r=n.n(o),a=n(6),i=n(4),u=n(2),s=function(t){var e=t.note,n=t.toggleImportance,o=e.important?"make not important":"make important";return Object(c.jsxs)("li",{className:"note",children:[e.content,Object(c.jsx)("button",{onClick:n,children:o})]})},j=function(t){var e=t.message;return null===e?null:Object(c.jsx)("div",{className:"error",children:e})},l=function(){return Object(c.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(c.jsx)("br",{}),Object(c.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2021"})]})},b=n(3),f=n.n(b),d="/api/notes",p=function(t){return f.a.post(d,t).then((function(t){return t.data}))},m=function(t,e){return f.a.put("".concat(d,"/").concat(t),e).then((function(t){return t.data}))},O=function(){var t=Object(u.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1],r=Object(u.useState)(""),b=Object(i.a)(r,2),d=b[0],O=b[1],h=Object(u.useState)(!1),v=Object(i.a)(h,2),x=v[0],g=v[1],S=Object(u.useState)(null),k=Object(i.a)(S,2),y=k[0],w=k[1];Object(u.useEffect)((function(){f.a.get("http://localhost:3001/api/notes").then((function(t){o(t.data)}))}),[]);var N=x?n:n.filter((function(t){return t.important}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Notes"}),Object(c.jsx)(j,{message:y}),Object(c.jsx)("div",{children:Object(c.jsxs)("button",{onClick:function(){return g(!x)},children:["show ",x?"important":"all"]})}),Object(c.jsx)("ul",{children:N.map((function(t){return Object(c.jsx)(s,{note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),c=Object(a.a)(Object(a.a)({},e),{},{important:!e.important});m(t,c).then((function(e){o(n.map((function(n){return n.id!==t?n:e})))})).catch((function(t){w("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){w(null)}),5e3)}))}(t.id)}},t.id)}))}),Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:d,date:(new Date).toISOString(),important:Math.random()>.5};p(e).then((function(t){o(n.concat(t)),O("")}))},children:[Object(c.jsx)("input",{value:d,onChange:function(t){console.log(t.target.value),O(t.target.value)}}),Object(c.jsx)("button",{type:"submit",children:"save"})]}),Object(c.jsx)(l,{})]})};n(39);r.a.render(Object(c.jsx)(O,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.3fd0eea0.chunk.js.map