(this.webpackJsonphw5=this.webpackJsonphw5||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(7),s=n.n(i),r=n.p+"static/media/1592412723965.60a757b7.jpg",o=n(5),a=n(6),u=n(0),j=function(e){var t=e.item,n=e.index,c=e.removeItem,i=e.handleChange;return console.log("This is item: ",t),Object(u.jsx)("div",{children:Object(u.jsxs)("p",{style:t.isComplete?{textDecoration:"line-through"}:null,children:[Object(u.jsx)("input",{type:"checkbox",checked:t.isComplete,onChange:function(){return i(n)}}),Object(u.jsx)("span",{children:t.name}),Object(u.jsx)("button",{onClick:function(){return c(n)},children:"X"})]})})},l=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(""),r=Object(a.a)(s,2),l=r[0],b=r[1],m=function(e){var t=n.filter((function(t,n){return e!==n}));i(t)},p=function(e){var t=Object(o.a)(n);t[e].isComplete=!t[e].isComplete,i(t)};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Today To Do List"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),e.persist(),i([].concat(Object(o.a)(n),[{name:l,isComplete:!1}])),b("")},children:[Object(u.jsx)("input",{type:"text",name:"item",value:l,onChange:function(e){e.persist(),b(e.target.value)}}),Object(u.jsx)("input",{type:"submit",value:"Submit"})]}),n.map((function(e,t){return Object(u.jsx)(j,{item:e,index:t,removeItem:m,handleChange:p})}))]})};n(13);function b(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("img",{src:r,alt:"funny"}),Object(u.jsx)(l,{})]})}var m=document.getElementById("root");s.a.render(Object(u.jsx)(b,{}),m)}},[[14,1,2]]]);
//# sourceMappingURL=main.dda3b876.chunk.js.map