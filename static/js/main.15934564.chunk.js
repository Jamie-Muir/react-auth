(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{11:function(e,t,n){e.exports={auth:"AuthForm_auth__1_ygJ",control:"AuthForm_control__1_n7V",actions:"AuthForm_actions__2U8dW",toggle:"AuthForm_toggle__2Fd6Z"}},14:function(e,t,n){e.exports={form:"ProfileForm_form__3SRs8",control:"ProfileForm_control__1fweX",action:"ProfileForm_action__16J4G"}},16:function(e,t,n){e.exports={header:"MainNavigation_header__sivIM",logo:"MainNavigation_logo__3brse"}},21:function(e,t,n){e.exports={profile:"UserProfile_profile__28lsK"}},22:function(e,t,n){e.exports={starting:"StartingPageContent_starting__3zSlU"}},31:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var o,r=n(19),c=n.n(r),i=n(7),a=(n(31),n(1)),s=n.n(a),l=n(2),u=n(8),j=n(0),d=s.a.createContext({token:"",isLoggedIn:!1,login:function(e){},logout:function(){}}),b=function(e){var t=(new Date).getTime();return new Date(e).getTime()-t},h=function(e){var t,n=function(){var e=localStorage.getItem("token"),t=localStorage.getItem("expirationTime"),n=b(t);return n<=3e4?(localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),null):{token:e,duration:n}}();n&&(t=n.token);var r=Object(a.useState)(t),c=Object(u.a)(r,2),i=c[0],s=c[1],l=!!i,h=Object(a.useCallback)((function(){s(null),localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),o&&clearTimeout(o)}),[]);Object(a.useEffect)((function(){n&&(o=setTimeout(h,n.duration))}),[n,h]);var O={token:i,isLoggedIn:l,login:function(e,t){s(e),localStorage.setItem("token",e),localStorage.setItem("expirationTime",t);var n=b(t);o=setTimeout(h,n)},logout:h};return Object(j.jsx)(d.Provider,{value:O,children:e.children})},O=d,g=n(16),m=n.n(g),x=function(){var e=Object(a.useContext)(O);return Object(j.jsxs)("header",{className:m.a.header,children:[Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("div",{className:m.a.logo,children:"React Auth"})}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[!e.isLoggedIn&&Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/auth",children:"Login"})}),e.isLoggedIn&&Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/profile",children:"Profile"})}),e.isLoggedIn&&Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:function(){e.logout()},children:"Logout"})})]})})]})},f=function(e){return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)(x,{}),Object(j.jsx)("main",{children:e.children})]})},p=n(14),v=n.n(p),w=function(){var e=Object(l.g)(),t=Object(a.useRef)(),n=Object(a.useContext)(O);return Object(j.jsxs)("form",{className:v.a.form,onSubmit:function(o){o.preventDefault();var r=t.current.value;fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAoFi3e8-mTtwVKGBrRn7KMJEdZy2GNnfY",{method:"POST",body:JSON.stringify({idToken:n.token,password:r,returnSecureToken:!1}),headers:{"Content-Type":"application/json"}}).then((function(t){e.replace("/")}))},children:[Object(j.jsxs)("div",{className:v.a.control,children:[Object(j.jsx)("label",{htmlFor:"new-password",children:"New Password"}),Object(j.jsx)("input",{type:"password",id:"new-password",minLength:"7",ref:t})]}),Object(j.jsx)("div",{className:v.a.action,children:Object(j.jsx)("button",{children:"Change Password"})})]})},_=n(21),S=n.n(_),k=function(){return Object(j.jsxs)("section",{className:S.a.profile,children:[Object(j.jsx)("h1",{children:"Your User Profile"}),Object(j.jsx)(w,{})]})},y=n(10),I=n(13),T=n(11),N=n.n(T),F=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(null),c=Object(u.a)(r,2),i=c[0],s=c[1],l=Object(a.useCallback)(function(){var e=Object(I.a)(Object(y.a)().mark((function e(t,n){var r,c;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),s(null),e.prev=2,e.next=5,fetch(t.url,{method:t.method?t.method:"GET",headers:t.headers?t.headers:{},body:t.body?JSON.stringify(t.body):null});case 5:if((r=e.sent).ok){e.next=8;break}throw new Error("Request Failed!");case 8:return e.next=10,r.json();case 10:c=e.sent,n(c),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),s(e.t0.message||"Something went wrong!");case 17:o(!1);case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,n){return e.apply(this,arguments)}}(),[]);return{isLoading:n,error:i,sendRequest:l}},C=function(){var e=Object(l.g)(),t=Object(a.useRef)(),n=Object(a.useRef)(),o=Object(a.useContext)(O),r=Object(a.useState)(!0),c=Object(u.a)(r,2),i=c[0],s=c[1],d=F(),b=d.isLoading,h=d.sendRequest,g=function(t){var n=new Date((new Date).getTime()+1e3*+t.expiresIn);o.login(t.idToken,n.toISOString()),e.replace("/")},m=function(){var e=Object(I.a)(Object(y.a)().mark((function e(o){var r,c;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.preventDefault(),r=t.current.value,c=n.current.value,h({url:i?"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAoFi3e8-mTtwVKGBrRn7KMJEdZy2GNnfY":"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAoFi3e8-mTtwVKGBrRn7KMJEdZy2GNnfY",method:"POST",body:{email:r,password:c,returnSecureToken:!0},headers:{"Content-Type":"application/json"}},g);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("section",{className:N.a.auth,children:[Object(j.jsx)("h1",{children:i?"Login":"Sign Up"}),Object(j.jsxs)("form",{onSubmit:m,children:[Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(j.jsx)("input",{type:"email",id:"email",required:!0,ref:t})]}),Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"password",children:"Your Password"}),Object(j.jsx)("input",{type:"password",id:"password",required:!0,ref:n})]}),Object(j.jsxs)("div",{className:N.a.actions,children:[!b&&Object(j.jsx)("button",{children:i?"Login":"Create Account"}),b&&Object(j.jsx)("p",{children:"Sending Request..."}),Object(j.jsx)("button",{type:"button",className:N.a.toggle,onClick:function(){s((function(e){return!e}))},children:i?"Create new account":"Login with existing account"})]})]})]})},L=function(){return Object(j.jsx)(C,{})},P=n(22),R=n.n(P),A=function(){return Object(j.jsx)("section",{className:R.a.starting,children:Object(j.jsx)("h1",{children:"Welcome on Board!"})})},J=function(){return Object(j.jsx)(A,{})};var E=function(){var e=Object(a.useContext)(O);return Object(j.jsx)(f,{children:Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{path:"/",exact:!0,children:Object(j.jsx)(J,{})}),!e.isLoggedIn&&Object(j.jsx)(l.b,{path:"/auth",children:Object(j.jsx)(L,{})}),e.isLoggedIn&&Object(j.jsx)(l.b,{path:"/profile",children:Object(j.jsx)(k,{})}),Object(j.jsx)(l.b,{path:"*",children:Object(j.jsx)(l.a,{to:"/"})})]})})};c.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(h,{children:Object(j.jsx)(i.a,{basename:"/react-auth",children:Object(j.jsx)(E,{})})}))}},[[40,1,2]]]);
//# sourceMappingURL=main.15934564.chunk.js.map