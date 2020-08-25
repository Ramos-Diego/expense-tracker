(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{73:function(e,t,a){e.exports=a(84)},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),i=a(15),l=a(10),s=a(49),m=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(s.a)({},e,{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(s.a)({},e,{transactions:[t.payload].concat(Object(l.a)(e.transactions))});default:return e}},u={transactions:[]},d=Object(n.createContext)(u),p=function(e){var t=e.children,a=Object(n.useReducer)(m,u),c=Object(i.a)(a,2),o=c[0],l=c[1];return r.a.createElement(d.Provider,{value:{transactions:o.transactions,deleteTransaction:function(e){l({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){l({type:"ADD_TRANSACTION",payload:e})}}},t)},E=a(39);function g(){var e=Object(n.useContext)(d).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{variant:"h4",align:"center",gutterBottom:!0},"Finance Tracker"),r.a.createElement(E.a,{gutterBottom:!0},"Your balance:"),r.a.createElement(E.a,{variant:"h4",gutterBottom:!0},"$",e))}var b=a(115),f=a(116),x=a(117),y=Object(b.a)((function(e){return{container:{padding:e.spacing(2,0),marginBottom:e.spacing(2),backgroundColor:e.palette.grey[100],borderRadius:e.shape.borderRadius},grid:{borderRight:"1px solid ".concat(e.palette.divider)},income:{color:e.palette.success.main},expense:{color:e.palette.error.main}}}));function h(){var e=y(),t=Object(n.useContext)(d).transactions.map((function(e){return e.amount})),a=t.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),c=(-1*t.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement(f.a,{maxWidth:"sm",className:e.container},r.a.createElement(x.a,{container:!0,alignItems:"center"},r.a.createElement(x.a,{item:!0,xs:6,className:e.grid},r.a.createElement(E.a,{variant:"h6",align:"center",gutterBottom:!0},"Income"),r.a.createElement(E.a,{align:"center",variant:"body1",className:e.income},"+$",a)),r.a.createElement(x.a,{item:!0,xs:6},r.a.createElement(E.a,{variant:"h6",align:"center",gutterBottom:!0},"Expenses"),r.a.createElement(E.a,{align:"center",variant:"body1",className:e.expense},"-$",c))))}var v=a(118),T=a(86),N=a(119),O=a(120),A=a(121),R=a(62),I=a.n(R),j=a(47),C=a(48),k=Object(b.a)((function(e){return{list:{height:"225px",padding:e.spacing(0,1),marginBottom:e.spacing(2),overflowX:"auto",backgroundColor:e.palette.grey[200],borderRadius:e.shape.borderRadius},listItem:{margin:e.spacing(1,0),backgroundColor:e.palette.grey[50],borderRadius:e.shape.borderRadius},expenseListItem:{color:j.a[600]},incomeListItem:{color:C.a[600]}}}));function B(){var e=k(),t=Object(n.useContext)(d),a=t.transactions,c=t.deleteTransaction;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{variant:"h6",gutterBottom:!0},"History"),r.a.createElement(x.a,{container:!0,spacing:2},r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(v.a,{dense:!0,component:"nav",className:e.list},a.map((function(t){return r.a.createElement(T.a,{key:t.id,className:e.listItem},r.a.createElement(N.a,{primary:t.text,classes:{secondary:"+"===t.type?e.incomeListItem:e.expenseListItem},secondary:"".concat(t.type,"$").concat(Math.abs(t.amount).toFixed(2))}),r.a.createElement(O.a,null,r.a.createElement(A.a,{onClick:function(){return c(t.id)},edge:"end"},r.a.createElement(I.a,null))))}))))))}var F=a(50),D=a(130),L=a(129),S=a(124),W=a(132),$=a(128),q=a(125),w=a(126),M=a(127),_=Object(b.a)((function(e){return{submit:{margin:e.spacing(2,0,1)},errorAlert:{padding:e.spacing(1),margin:e.spacing(1,0),border:"2px solid ".concat(e.palette.error.light),borderRadius:e.shape.borderRadius,color:e.palette.error.main},moneyType:{padding:e.spacing(0,"auto")}}}));function z(){var e=_(),t=Object(F.b)(),a=t.register,c=t.handleSubmit,o=t.errors,i=t.control,l=Object(n.useContext)(d).addTransaction;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{variant:"h6",gutterBottom:!0},"New transaction"),r.a.createElement("form",{onSubmit:c((function(e){var t={id:Math.floor(1e8*Math.random()),text:e.text,amount:"+"===e.type?+e.amount:-1*e.amount,type:e.type};l(t)}))},r.a.createElement(x.a,{container:!0,spacing:2},r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(D.a,{name:"text",label:"Name",variant:"outlined",size:"small",fullWidth:!0,inputRef:a({required:!0})}),o.text&&r.a.createElement(L.a,{className:e.errorAlert},"The expense's name is required.")),r.a.createElement(x.a,{item:!0,xs:4},r.a.createElement(S.a,{fullWidth:!0,variant:"outlined",size:"small"},r.a.createElement(W.a,null,"Type"),r.a.createElement(F.a,{as:$.a,name:"type",label:"Type",control:i,defaultValue:"+"},r.a.createElement(q.a,{value:"+"},"Income"),r.a.createElement(q.a,{value:"-"},"Expense")))),r.a.createElement(x.a,{item:!0,xs:8},r.a.createElement(D.a,{name:"amount",fullWidth:!0,inputMode:"decimal",label:"Amount",InputProps:{startAdornment:r.a.createElement(w.a,{position:"start"},"$")},inputRef:a({required:!0,pattern:/^[0-9]+(\.[0-9]{1,2})?$/}),variant:"outlined",size:"small"}),o.amount&&"pattern"===o.amount.type&&r.a.createElement(L.a,{className:e.errorAlert},"Only insert digits, 0 through 9."),o.amount&&"required"===o.amount.type&&r.a.createElement(L.a,{className:e.errorAlert},"The amount is required."))),r.a.createElement(M.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Add transaction")))}var J={marginTop:"15px",display:"flex",flexDirection:"column"};function P(){return r.a.createElement(p,null,r.a.createElement(f.a,{component:"main",maxWidth:"xs",style:J},r.a.createElement(g,null),r.a.createElement(h,null),r.a.createElement(B,null),r.a.createElement(z,null)))}o.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.82c71e84.chunk.js.map