(this["webpackJsonpwords.feli.page"]=this["webpackJsonpwords.feli.page"]||[]).push([[0],{55:function(e,t,n){},57:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var r=n(8),c=n(0),a=n.n(c),i=n(9),s=n.n(i),o=(n(55),n(21)),l=n.n(o),u=n(27),j=n(33),d=(n(57),n(104)),b=n(105),p=n(106),f=n(114),h=n(100),O=n(108),x=n(109),g=n(111),m=n(110),v=n(113),w=n(107),y=n(40),S=n(41),k=function(){function e(){Object(y.a)(this,e)}return Object(S.a)(e,null,[{key:"getWord",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.feli.page/v1/words/define?word=".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),console.log("Error while fetching word definition: ".concat(e.t0)),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()}]),e}();var W=function(){var e=Object(c.useState)((function(){return!1})),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)((function(){return""})),s=Object(j.a)(i,2),o=s[0],y=s[1],S=Object(c.useState)(null),W=Object(j.a)(S,2),F=W[0],T=W[1];return Object(c.useEffect)((function(){o&&(console.log("New word ".concat(o)),Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.next=3,k.getWord(o);case 3:t=e.sent,a(!1),T(t);case 6:case"end":return e.stop()}}),e)})))())}),[o]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(h.a,{}),Object(r.jsx)(d.a,{position:"sticky",color:"primary",children:Object(r.jsx)(b.a,{children:Object(r.jsx)(p.a,{variant:"h6",children:"Words"})})}),n?Object(r.jsx)(w.a,{}):Object(r.jsx)("div",{style:{height:"4px"}}),Object(r.jsxs)(O.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{marginTop:"16px"},children:[Object(r.jsx)(x.a,{width:"100%",style:{minWidth:"350px"},children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y(e.target.word.value)},children:[Object(r.jsx)(m.a,{children:Object(r.jsx)(v.a,{id:"word",label:"Word",variant:"filled",fullWidth:!0,required:!0,disabled:n})}),Object(r.jsx)(g.a,{children:Object(r.jsx)(f.a,{color:"primary",variant:"contained",type:"submit",style:{marginTop:"16px"},disabled:n,children:"Define"})})]})}),F?Object(r.jsx)(x.a,{style:{marginTop:"16px",marginBottom:"16px"},children:Object(r.jsx)(m.a,{children:Object(r.jsx)(p.a,{variant:"body1",children:Object(r.jsx)("pre",{style:{whiteSpace:"pre-wrap"},children:JSON.stringify(F,null,4)})})})}):""]})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,115)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},T=n(43),B=n(112),C=Object(T.a)({palette:{primary:{main:"#f9a825"}}});s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(B.a,{theme:C,children:Object(r.jsx)(W,{})})}),document.getElementById("root")),F()}},[[61,1,2]]]);
//# sourceMappingURL=main.dcb197a5.chunk.js.map