(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(12),s=c.n(r),l=(c(36),c(37),c(7)),i=c(66),j=c(6),o=c(10),b=c.n(o),d=c(67),h=c(1);var O=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){b.a.get("http://localhost:8000/api").then((function(e){console.log(e.data),n(e.data.pets)})).catch((function(e){return console.log(e)}))}),[]),Object(h.jsxs)(i.a,{style:{border:"1px solid gray",padding:"20px"},children:[Object(h.jsx)("h1",{children:"Pet Shelter"}),Object(h.jsx)(l.a,{to:"/pets/new",children:"add a pet to the shelter"}),Object(h.jsx)("h3",{children:"These pets are looking for a good home"}),Object(h.jsx)("div",{children:Object(h.jsxs)(d.a,{striped:!0,bordered:!0,hover:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Name "}),Object(h.jsx)("th",{children:"Type"}),Object(h.jsx)("th",{children:"Actions"})]})}),Object(h.jsx)("tbody",{children:c.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{children:e.type}),Object(h.jsxs)("td",{children:[Object(h.jsx)(l.a,{to:"/pets/".concat(e._id),children:"Details"})," | ",Object(h.jsx)(l.a,{to:"/pets/".concat(e._id,"/edit"),children:"Edit"})]})]},t)}))})]})})]})},u=c(69),x=c(70),p=c(68);var g=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),s=Object(j.a)(r,2),o=s[0],d=s[1],O=Object(a.useState)(""),g=Object(j.a)(O,2),f=g[0],m=g[1],v=Object(a.useState)(""),y=Object(j.a)(v,2),S=y[0],k=y[1],C=Object(a.useState)(""),T=Object(j.a)(C,2),E=T[0],L=T[1],P=Object(a.useState)(""),B=Object(j.a)(P,2),I=B[0],G=B[1],N=Object(a.useState)([]),w=Object(j.a)(N,2),D=w[0],A=w[1],F=Object(a.useState)(""),J=Object(j.a)(F,2),_=J[0],K=J[1],M=Object(a.useState)(""),q=Object(j.a)(M,2),z=q[0],H=q[1],Q=Object(a.useState)(""),R=Object(j.a)(Q,2),U=R[0],V=R[1];return Object(h.jsxs)(i.a,{style:{border:"1px solid gray",padding:"20px"},children:[Object(h.jsx)("h1",{children:"Pet Shelter"}),Object(h.jsx)(l.a,{to:"/",children:"back to home"}),Object(h.jsx)("h3",{children:"Know a pet needing a home?"}),Object(h.jsxs)("div",{style:{border:"1px solid black",padding:"10px"},children:[D.length>0&&Object(h.jsx)(u.a,{variant:"danger",children:D.map((function(e,t){return Object(h.jsx)("p",{children:e},t)}))}),Object(h.jsxs)(x.a,{onSubmit:function(e){return e.preventDefault(),c.length<3?K("Name should be at least 3 characters"):o.length<3?H("Type should be at least 3 characters"):f.length<3?V("Description should be at least 3 characters"):void b.a.post("http://localhost:8000/api/new/pet",{name:c,type:o,description:f,skillOne:S,skillTwo:E,skillThree:I}).then((function(e){return Object(l.c)("/")})).catch((function(e){for(var t=e.response.data,c=[],a=0,n=Object.keys(t);a<n.length;a++){var r=n[a];c.push(t[r].message)}A(c)}))},children:[Object(h.jsxs)(x.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(x.a.Label,{children:"Pet Name: "}),Object(h.jsx)(x.a.Control,{type:"text",onChange:function(e){return n(e.target.value)}}),Object(h.jsx)(x.a.Text,{className:"text-danger",children:_||""})]}),Object(h.jsxs)(x.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(x.a.Label,{children:"Pet Type: "}),Object(h.jsx)(x.a.Control,{type:"text",onChange:function(e){return d(e.target.value)}}),Object(h.jsx)(x.a.Text,{className:"text-danger",children:z||""})]}),Object(h.jsxs)(x.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(x.a.Label,{children:"Pet Description: "}),Object(h.jsx)(x.a.Control,{type:"text",onChange:function(e){return m(e.target.value)}}),Object(h.jsx)(x.a.Text,{className:"text-danger",children:U||""})]}),Object(h.jsx)("h4",{children:"Skills (optional):"}),Object(h.jsxs)(x.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(x.a.Label,{children:"Skill 1: "}),Object(h.jsx)(x.a.Control,{type:"text",onChange:function(e){return k(e.target.value)}})]}),Object(h.jsxs)(x.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(x.a.Label,{children:"Skill 2: "}),Object(h.jsx)(x.a.Control,{type:"text",onChange:function(e){return L(e.target.value)}})]}),Object(h.jsxs)(x.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(x.a.Label,{children:"Skill 3: "}),Object(h.jsx)(x.a.Control,{type:"text",onChange:function(e){return G(e.target.value)}})]}),Object(h.jsx)(p.a,{variant:"primary",type:"submit",children:"Add Pet"})]})]})]})};var f=function(e){var t=e.id,c=Object(a.useState)(),n=Object(j.a)(c,2),r=n[0],s=n[1],o=Object(a.useState)(),d=Object(j.a)(o,2),O=d[0],g=d[1],f=Object(a.useState)(),m=Object(j.a)(f,2),v=m[0],y=m[1],S=Object(a.useState)(),k=Object(j.a)(S,2),C=k[0],T=k[1],E=Object(a.useState)(),L=Object(j.a)(E,2),P=L[0],B=L[1],I=Object(a.useState)(),G=Object(j.a)(I,2),N=G[0],w=G[1],D=Object(a.useState)([]),A=Object(j.a)(D,2),F=A[0],J=A[1],_=Object(a.useState)(""),K=Object(j.a)(_,2),M=K[0],q=K[1],z=Object(a.useState)(""),H=Object(j.a)(z,2),Q=H[0],R=H[1],U=Object(a.useState)(""),V=Object(j.a)(U,2),W=V[0],X=V[1];return Object(a.useEffect)((function(){b.a.get("http://localhost:8000/api/"+t).then((function(e){console.log(e.data),s(e.data.pet.name),g(e.data.pet.type),y(e.data.pet.description),T(e.data.pet.skillOne),B(e.data.pet.skillTwo),w(e.data.pet.skillThree)})).catch((function(e){return console.log(e)}))}),[t]),Object(h.jsxs)(i.a,{style:{border:"1px solid gray",padding:"20px"},children:[Object(h.jsx)("h1",{children:"Pet Shelter"}),Object(h.jsx)(l.a,{to:"/",children:"back to home"}),Object(h.jsxs)("h3",{children:["Edit ",r," "]}),Object(h.jsxs)("div",{style:{border:"1px solid black",padding:"10px"},children:[F.length>0&&Object(h.jsx)(u.a,{variant:"danger",children:F.map((function(e,t){return Object(h.jsxs)("p",{children:[e," hi"]},t)}))}),Object(h.jsxs)(x.a,{onSubmit:function(e){return e.preventDefault(),r.length<3?q("Name should be at least 3 characters"):O.length<3?R("Type should be at least 3 characters"):v.length<3?X("Description should be at least 3 characters"):void b.a.put("http://localhost:8000/api/"+t+"/edit",{name:r,type:O,description:v,skillOne:C,skillTwo:P,skillThree:N}).then((function(e){console.log(e.data),Object(l.c)("/")})).catch((function(e){for(var t=e.response.data,c=[],a=0,n=Object.keys(t);a<n.length;a++){var r=n[a];c.push(t[r].message)}J(c),console.log(c)}))},children:[Object(h.jsxs)(x.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(x.a.Label,{children:"Pet Name: "}),Object(h.jsx)(x.a.Control,{type:"text",value:r,onChange:function(e){return s(e.target.value)}}),Object(h.jsx)(x.a.Text,{className:"text-danger",children:M||""})]}),Object(h.jsxs)(x.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(x.a.Label,{children:"Pet Type: "}),Object(h.jsx)(x.a.Control,{type:"text",value:O,onChange:function(e){return g(e.target.value)}}),Object(h.jsx)(x.a.Text,{className:"text-danger",children:Q||""})]}),Object(h.jsxs)(x.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(x.a.Label,{children:"Pet Description: "}),Object(h.jsx)(x.a.Control,{type:"text",value:v,onChange:function(e){return y(e.target.value)}}),Object(h.jsx)(x.a.Text,{className:"text-danger",children:W||""})]}),Object(h.jsx)("h4",{children:"Skills (optional):"}),Object(h.jsxs)(x.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(x.a.Label,{children:"Skill 1: "}),Object(h.jsx)(x.a.Control,{type:"text",value:C,onChange:function(e){return T(e.target.value)}})]}),Object(h.jsxs)(x.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(x.a.Label,{children:"Skill 2: "}),Object(h.jsx)(x.a.Control,{type:"text",value:P,onChange:function(e){return B(e.target.value)}})]}),Object(h.jsxs)(x.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(x.a.Label,{children:"Skill 3: "}),Object(h.jsx)(x.a.Control,{type:"text",value:N,onChange:function(e){return w(e.target.value)}})]}),Object(h.jsx)(p.a,{variant:"primary",type:"submit",children:"Edit Pet"})]})]})]})};var m=function(e){var t=e.id,c=Object(a.useState)({}),n=Object(j.a)(c,2),r=n[0],s=n[1];return Object(a.useEffect)((function(){b.a.get("http://localhost:8000/api/"+t).then((function(e){console.log(e.data),s(e.data.pet)})).catch((function(e){return console.log(e)}))}),[t]),Object(h.jsxs)(i.a,{style:{padding:"20px"},children:[Object(h.jsx)("h1",{children:"Pet Shelter"}),Object(h.jsx)(l.a,{to:"/",children:"back to home"}),Object(h.jsxs)("h3",{children:["Details About: ",r.name," "]}),Object(h.jsxs)(p.a,{variant:"danger",type:"submit",onClick:function(){b.a.delete("http://localhost:8000/api/"+t+"/delete").then((function(e){console.log(e.data),Object(l.c)("/")})).catch((function(e){return console.log(e)}))},children:["Adopt ",r.name]}),Object(h.jsxs)("div",{style:{border:"1px solid black",padding:"10px",marginTop:"20px"},children:[Object(h.jsx)("h4",{children:"Pet type:"})," ",Object(h.jsx)("p",{children:r.type}),Object(h.jsx)("h4",{children:"Description:"})," ",Object(h.jsx)("p",{children:r.description}),Object(h.jsx)("h4",{children:"Skills:"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:r.skillOne}),Object(h.jsx)("li",{children:r.skillTwo}),Object(h.jsx)("li",{children:r.skillThree})]}),Object(h.jsxs)(p.a,{variant:"success",type:"submit",children:["Like ",r.name]})]})]})};var v=function(){return Object(h.jsx)(i.a,{children:Object(h.jsxs)(l.b,{children:[Object(h.jsx)(O,{path:"/"}),Object(h.jsx)(g,{path:"/pets/new"}),Object(h.jsx)(f,{path:"/pets/:id/edit"}),Object(h.jsx)(m,{path:"/pets/:id"})]})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};c(63);s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),y()}},[[64,1,2]]]);
//# sourceMappingURL=main.590debd4.chunk.js.map