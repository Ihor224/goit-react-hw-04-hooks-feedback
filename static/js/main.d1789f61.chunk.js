(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,,function(e,t,n){e.exports={warning:"Notification_warning__cdNf8",message:"Notification_message__Rf3w1"}},,function(e,t,n){e.exports={container:"Container_container__1Clfk"}},function(e,t,n){e.exports={section:"Section_section__vmxQ2"}},function(e,t,n){e.exports={list:"Statistics_list__c2MAv"}},function(e,t,n){e.exports={btn:"FeedbackOptions_btn__2AcnC"}},,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),i=n(5),r=n.n(i),o=(n(15),n(2)),l=n(6),j=n.n(l),b=function(e){var t=e.children;return Object(c.jsx)("div",{className:j.a.container,children:t})},d=n(7),u=n.n(d),f=function(e){var t=e.title,n=e.children;return Object(c.jsxs)("section",{className:u.a.section,children:[t,n]})},h=n(8),O=n.n(h),x=function(e){var t=e.good,n=e.neutral,s=e.bad,a=e.total,i=e.percent;return Object(c.jsxs)("ul",{className:O.a.list,children:[Object(c.jsxs)("li",{children:["Good: ",t]}),Object(c.jsxs)("li",{children:["Neutral: ",n]}),Object(c.jsxs)("li",{children:["Bad: ",s]}),Object(c.jsxs)("li",{children:["Total: ",a]}),Object(c.jsxs)("li",{children:["Positive precentage: ",i,"%"]})]})},p=n(4),_=n.n(p),g=function(e){var t=e.message;return Object(c.jsx)("div",{className:_.a.warning,children:Object(c.jsx)("span",{className:_.a.message,children:t})})},m=n(9),k=n.n(m),v=function(e){return Object(c.jsx)("div",{children:e.options.map((function(t){return Object(c.jsx)("button",{"data-action":t,type:"button",className:k.a.btn,onClick:function(){return e.onIncrement(t)},children:t},t)}))})};function N(){var e=Object(s.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)(0),r=Object(o.a)(i,2),l=r[0],j=r[1],d=Object(s.useState)(0),u=Object(o.a)(d,2),h=u[0],O=u[1],p=function(){return n+l+h};return Object(c.jsxs)(b,{children:[Object(c.jsx)(f,{title:"Please leave feedback",children:Object(c.jsx)(v,{options:["good","neutral","bad"],onIncrement:function(e){switch(e){case"good":a(n+1);break;case"neutral":j(l+1);break;case"bad":O(h+1);break;default:return}}})}),Object(c.jsx)(f,{title:"Statistic",children:0!==p()?Object(c.jsx)(x,{good:n,neutral:l,bad:h,total:p(),percent:Math.round(n/p()*100)}):Object(c.jsx)(g,{message:"No feedback given"})})]})}r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.d1789f61.chunk.js.map