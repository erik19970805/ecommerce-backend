(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{40:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(2),a=n.n(r),i=n(20),s=n.n(i),o=n(3),u=n(18),l=n(42),d="PRODUCT_LIST_REQUEST",j="PRODUCT_LIST_SUCCESS",p="PRODUCT_DETAILS_REQUEST",b="PRODUCT_DETAILS_SUCCESS",h="PRODUCT_UPDATE_SUCCESS",O="PRODUCT_UPDATE_RESET",f="PRODUCT_FILTERS_CHANGE",x="PRODUCT_CHECKED_CHANGE",m="ERROR",v="MESSAGE",g="AUTH_TOKEN",y="AUTH_ISLOGGED",S="AUTH_ISADMIN",w="AUTH_CART",_="CATEGORY_REQUEST",E="CATEGORY_SUCCESS",k="CATEGORY_LIST_REQUEST",C="CATEGORY_LIST_SUCCESS",T="CART_ADD_ITEM",A="HISTORY_DETAILS_REQUEST",N="HISTORY_DETAILS_SUCCESS",U="HISTORY_LIST_REQUEST",D="HISTORY_LIST_SUCCESS",I="IMAGES_UPLOAD_REQUEST",R="IMAGES_UPLOAD_SUCCESS",P="IMAGES_DESTROY_REQUEST",q="IMAGES_DESTROY_SUCCESS",L="IMAGES_RESET",F=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):null,G=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],B={token:F?F.token:null,isLogged:!!F&&F.isLogged,isAdmin:!!F&&F.isAdmin,cart:G,filters:{category:"",sort:"",search:"",page:1}},H=Object(u.c)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return{loading:!0};case j:case x:return{loading:!1,products:t.payload};default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{filters:t.payload};default:return e}},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return{loading:!0};case b:return{loading:!1,product:t.payload};default:return e}},productUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return{loading:!1,successUpdate:!0};case O:return{};default:return e}},token:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return t.payload;default:return e}},isLogged:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return t.payload;default:return e}},isAdmin:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return t.payload;default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:case T:return t.payload;default:return e}},histories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return{loading:!0};case D:return{loading:!1,histories:t.payload};default:return e}},history:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return{loading:!0};case N:return{loading:!1,history:t.payload};default:return e}},category:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return{loading:!0};case E:return{loading:!1,category:t.payload};default:return e}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return{loading:!0};case C:return{loading:!1,categories:t.payload};default:return e}},images:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return{loadingUpload:!0};case R:return{loadingUpload:!1,images:t.payload};case P:return{loadingUpload:!0};case q:return{loadingUpload:!1,images:t.payload};case L:return{};default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return t.payload;default:return e}},message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return t.payload;default:return e}}}),z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,M=Object(u.e)(H,B,z(Object(u.a)(l.a))),Y=n(8),Q=n(9),J=n(10),X=n(25),$=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("li",{children:Object(c.jsx)(Y.b,{to:"/products/create_product",children:"Create Product"})}),Object(c.jsx)("li",{children:Object(c.jsx)(Y.b,{to:"/category",children:"Categories"})})]})},V=n(4),K=n.n(V),Z=n(5),W=n(43),ee=n.n(W),te=function(){var e=Object(Z.a)(K.a.mark((function e(t,n,c,r){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ee()({method:t,url:"http://localhost:4000"+n,data:c,headers:r}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,c,r){return e.apply(this,arguments)}}(),ne=function(e){return function(t){t({type:e,payload:null})}},ce=function(e){return function(t){!1===e.response.data.isLogged?(t(re()),t({type:m,payload:e.response&&e.response.data.error?e.response.data.error:e.message})):t({type:m,payload:e.response&&e.response.data.error?e.response.data.error:e.message})}},re=function(){return function(){var e=Object(Z.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:g,payload:null}),t({type:y,payload:!1}),t({type:S,payload:!1}),t({type:w,payload:[]}),localStorage.clear();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ae=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e})).isLogged;return Object(c.jsx)(c.Fragment,{children:t?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("li",{children:Object(c.jsx)(Y.b,{to:"/history",children:"History"})}),Object(c.jsx)("li",{children:Object(c.jsx)(Y.b,{to:"/",onClick:function(){e(re())},children:"Sign Out"})})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("li",{children:Object(c.jsx)(Y.b,{to:"/signin",children:"Sign In"})}),Object(c.jsx)("li",{children:Object(c.jsx)(Y.b,{to:"/signup",children:"Sign Up"})})]})})},ie=(n(78),function(){var e=Object(r.useState)(!1),t=Object(J.a)(e,2),n=t[0],a=t[1],i=Object(o.c)((function(e){return e})).isAdmin,s=Object(o.c)((function(e){return e})).cart,u={left:n?0:"-100%"};return Object(c.jsxs)("header",{children:[Object(c.jsx)("div",{className:"menu",onClick:function(){return a(!n)},children:Object(c.jsx)(X.a,{})}),Object(c.jsx)("div",{className:"logo",children:Object(c.jsx)("h1",{children:Object(c.jsx)(Y.b,{to:"/",children:i?"Admin":"Mi Shop"})})}),Object(c.jsxs)("ul",{style:u,children:[Object(c.jsx)("li",{children:Object(c.jsx)(Y.b,{to:"/",children:i?"Products":"Shop"})}),i&&Object(c.jsx)($,{}),Object(c.jsx)(ae,{}),Object(c.jsx)("li",{onClick:function(){return a(!n)},children:Object(c.jsx)(X.c,{className:"menu"})})]}),i?null:Object(c.jsx)("div",{className:"cart",children:Object(c.jsxs)(Y.b,{to:"/cart",children:[Object(c.jsx)("span",{children:s.length}),Object(c.jsx)(X.b,{className:"cart-icon"})]})})]})}),se=n(19),oe=function(e){return function(){var t=Object(Z.a)(K.a.mark((function t(n,c){var r,a,i,s,o,u;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:d}),t.prev=1,r=e.page,a=e.category,i=e.sort,s=e.search,t.next=5,te("GET","/products?limit=".concat(9*r,"&").concat(a,"&").concat(i,"&name[regex]=").concat(s),null,null);case 5:o=t.sent,u=o.data,n({type:j,payload:u.products}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),n(ce(t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()},ue=function(e){return function(){var t=Object(Z.a)(K.a.mark((function t(n){var c,r;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:p}),t.prev=1,t.next=4,te("GET","/products/".concat(e),null,null);case 4:c=t.sent,r=c.data,n({type:b,payload:r.product}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(ce(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},le=function(e){return function(){var t=Object(Z.a)(K.a.mark((function t(n,c){var r,a,i,s;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=c(),a=r.token,t.next=4,te("DELETE","/products/".concat(e),null,{Authorization:"Bearer ".concat(a)});case 4:i=t.sent,s=i.data,n({type:v,payload:s.message}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n(ce(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}()},de=function(e){return function(){var t=Object(Z.a)(K.a.mark((function t(n,c){var r,a;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:P}),t.prev=1,r=c(),a=r.token,t.next=5,te("POST","/upload/destroy",{public_id:e},{Authorization:" Bearer ".concat(a)});case 5:n({type:q,payload:null}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n(ce(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()},je=n(7),pe=function(){var e=Object(Z.a)(K.a.mark((function e(t,n,c){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te("PUT","/cart/addcart",{cart:t},{Authorization:"Bearer ".concat(n)});case 3:c({type:T,payload:Object(se.a)(t)}),localStorage.setItem("cart",JSON.stringify(Object(se.a)(t))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c(ce(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,c){return e.apply(this,arguments)}}(),be=function(e){return function(){var t=Object(Z.a)(K.a.mark((function t(n,c){var r,a,i,s;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=c(),a=r.isLogged,i=r.cart,s=r.token,a){t.next=3;break}return t.abrupt("return",n({type:v,payload:"Debe Iniciar Sesi\xf2n"}));case 3:try{i.every((function(t){return t._id!==e._id}))?pe([].concat(Object(se.a)(i),[Object(je.a)(Object(je.a)({},e),{},{quantity:1})]),s,n):n({type:v,payload:"El producto ya se a\xf1adio al carrito"})}catch(o){n(ce(o))}case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},he=function(e){return function(){var t=Object(Z.a)(K.a.mark((function t(n,c){var r,a,i,s,o,u,l;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c(),a=r.cart,i=r.token,s=e.paymentID,o=e.address,t.prev=2,t.next=5,te("POST","/payment",{cart:a,paymentID:s,address:o},{Authorization:"Bearer ".concat(i)});case 5:u=t.sent,l=u.data,pe([],i,n),n({type:v,payload:l.message}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),n(ce(t.t0));case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e,n){return t.apply(this,arguments)}}()},Oe=Object(Q.f)((function(e){var t=e.product,n=e.history,r=e.deleteProduct,a=Object(o.b)(),i=Object(o.c)((function(e){return e})).isAdmin,s=function(){var e=i?"edit_product":"detail_product";n.push("/products/".concat(e,"/").concat(t._id))};return Object(c.jsx)("div",{className:"row_btn",children:i?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(Y.b,{to:"/",id:"btn_buy",onClick:r,children:"Delete"}),Object(c.jsx)("button",{id:"btn_view",onClick:s,children:"Edit"})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{id:"btn_buy",onClick:function(){a(be(t)),n.push(n.location.pathname)},children:"Buy"}),Object(c.jsx)("button",{id:"btn_view",onClick:s,children:"View"})]})})})),fe=(n(79),function(e){var t=e.product,n=e.callback,r=e.setCallback,a=Object(o.b)(),i=t._id,s=t.images,u=t.name,l=t.price,d=t.description,j=t.checked,p=Object(o.c)((function(e){return e})).isAdmin;return Object(c.jsxs)("div",{className:"product_card",children:[p&&Object(c.jsx)("input",{type:"checkbox",checked:j,onChange:function(){a(function(e,t){return function(n,c){var r=c().products.products;r.forEach((function(n){n._id===e&&(n.checked=!t)})),n({type:x,payload:Object(se.a)(r)})}}(i,j))}}),Object(c.jsx)("img",{src:s.url,alt:u}),Object(c.jsxs)("div",{className:"product_box",children:[Object(c.jsx)("h2",{title:u,children:u}),Object(c.jsxs)("span",{children:["$",l]}),Object(c.jsx)("p",{children:d})]}),Object(c.jsx)(Oe,{product:t,deleteProduct:function(){window.confirm("Esta seguro que desea eliminar el producto selecionado?")&&(a(de(s.public_id)),a(le(i)),r(!n))}})]})}),xe=(n(80),function(){return Object(c.jsx)("div",{className:"load-page",children:Object(c.jsx)("div",{className:"loader",children:Object(c.jsx)("div",{children:Object(c.jsx)("div",{children:Object(c.jsx)("div",{children:Object(c.jsx)("div",{children:Object(c.jsx)("div",{children:Object(c.jsx)("div",{children:Object(c.jsx)("div",{})})})})})})})})})}),me=(n(81),n(15)),ve=function(){var e=Object(Z.a)(K.a.mark((function e(t){var n,c;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te("GET","/category",null,null);case 2:n=e.sent,c=n.data,t({type:C,payload:c.categories});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ge=function(){return function(){var e=Object(Z.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:k});try{ve(t)}catch(n){t(ce(n))}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ye=function(e){var t=e.filters,n=e.setFilters,a=Object(o.b)(),i=Object(o.c)((function(e){return e.categories})),s=i.categories,u=i.loading,l=function(e){var c,r=e.target,a=r.name,i=r.value;n(Object(je.a)(Object(je.a)({},t),{},(c={},Object(me.a)(c,a,i),Object(me.a)(c,"search",""),c)))};return Object(r.useEffect)((function(){a(ge())}),[a]),Object(c.jsxs)("div",{className:"filter_menu",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("span",{children:"Filters: "}),u?Object(c.jsx)(xe,{}):Object(c.jsxs)("select",{name:"category",value:t.category,onChange:l,children:[Object(c.jsx)("option",{value:"",children:"All Products"}),s.map((function(e){return Object(c.jsx)("option",{value:"category="+e._id,children:e.name},e._id)}))]})]}),Object(c.jsx)("input",{name:"search",type:"text",value:t.search,placeholder:"Ingrese su busqueda",onChange:function(e){var c=e.target,r=c.name,a=c.value;n(Object(je.a)(Object(je.a)({},t),{},Object(me.a)({},r,a.toLowerCase())))}}),Object(c.jsxs)("div",{className:"row sort",children:[Object(c.jsx)("span",{children:"Sort By: "}),Object(c.jsxs)("select",{name:"sort",value:t.sort,onChange:l,children:[Object(c.jsx)("option",{value:"",children:"Articulos mas nuevos"}),Object(c.jsx)("option",{value:"sort=createdAt",children:"Articulos mas antiguos"}),Object(c.jsx)("option",{value:"sort=-sold",children:"Articulos mas vendidos"}),Object(c.jsx)("option",{value:"sort=-price",children:"Precios: Altos-Bajos"}),Object(c.jsx)("option",{value:"sort=price",children:"Precios: Bajos-Altos"})]})]})]})},Se=function(e){var t=e.filters,n=e.setFilters,r=e.result;return Object(c.jsx)("div",{className:"load_more",children:r<9*t.page?"":Object(c.jsx)("button",{onClick:function(){return n(Object(je.a)(Object(je.a)({},t),{},{page:t.page+1}))},children:"Load more"})})},we=function(){var e=Object(r.useState)(!1),t=Object(J.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(!1),s=Object(J.a)(i,2),u=s[0],l=s[1],d=Object(o.c)((function(e){return e.filters})),j=Object(r.useState)(d),p=Object(J.a)(j,2),b=p[0],h=p[1],O=Object(o.b)(),f=Object(o.c)((function(e){return e.products})),m=f.loading,v=f.products,g=Object(o.c)((function(e){return e})).isAdmin;return Object(r.useEffect)((function(){O(oe(b)),n&&O(oe(b))}),[O,n,b]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(ye,{filters:b,setFilters:h}),g&&Object(c.jsxs)("div",{className:"delete-all",children:[Object(c.jsx)("span",{children:"Select all"}),Object(c.jsx)("input",{type:"checkbox",checked:u,onChange:function(){var e;O((e=u,function(t,n){var c=n().products.products;c.forEach((function(t){t.checked=!e})),t({type:x,payload:Object(se.a)(c)})})),l(!u)}}),Object(c.jsx)("button",{onClick:function(){window.confirm("Esta seguro que desea eliminar todos los productos selecionados?")&&(v.forEach((function(e){e.checked&&(O(le(e._id)),O(de(e.images.public_id)))})),a(!0))},children:"Delete all"})]}),m?Object(c.jsx)(xe,{}):v&&Object(c.jsx)("div",{className:"products",children:v.map((function(e){return Object(c.jsx)(fe,{product:e,callback:n,setCallback:a},e._id)}))}),v&&Object(c.jsx)(Se,{filters:b,setFilters:h,result:v.length})]})},_e=(n(82),Object(Q.f)((function(e){var t=e.match,n=e.history,a=Object(o.b)(),i=t.params.id,s=Object(o.c)((function(e){return e})).filters,u=Object(o.c)((function(e){return e.products})).products,l=Object(o.c)((function(e){return e.product})).product;return Object(r.useEffect)((function(){a(ue(i)),a(oe(s))}),[a,i,s]),l&&u?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"detail",children:[Object(c.jsx)("img",{src:l.images.url,alt:l.name}),Object(c.jsxs)("div",{className:"box-detail",children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("h2",{children:l.name})}),Object(c.jsxs)("span",{children:["$ ",l.price]}),Object(c.jsx)("p",{children:l.description}),Object(c.jsxs)("p",{children:["Sold: ",l.sold]}),Object(c.jsx)("button",{className:"cart",onClick:function(){a(be(l)),n.push(n.location.pathname)},children:"Buy now"})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Related products"}),Object(c.jsx)("div",{className:"products",children:u.map((function(e){return Object(c.jsx)(fe,{product:e},e._id)}))})]})]}):Object(c.jsx)(xe,{})}))),Ee=(n(40),function(e){var t=e.history,n=Object(r.useState)({email:"",password:""}),a=Object(J.a)(n,2),i=a[0],s=a[1],u=Object(o.b)(),l=Object(o.c)((function(e){return e})).token,d=function(e){var t=e.target,n=t.name,c=t.value;s(Object(je.a)(Object(je.a)({},i),{},Object(me.a)({},n,c)))};return Object(r.useEffect)((function(){l&&t.push("/")}),[t,l]),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"auth-page",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u(function(e){var t=e.email,n=e.password;return function(){var e=Object(Z.a)(K.a.mark((function e(c){var r,a,i,s,o,u;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te("POST","/auth/signin",{email:t,password:n},null);case 3:r=e.sent,a=r.data,c({type:g,payload:a.token}),c({type:y,payload:a.isLogged}),c({type:S,payload:a.isAdmin}),c({type:w,payload:a.cart}),c({type:v,payload:"Se inicio session correctamente"}),i=a.isAdmin,s=a.isLogged,o=a.token,u=a.cart,localStorage.setItem("auth",JSON.stringify({isLogged:s,isAdmin:i,token:o})),localStorage.setItem("cart",JSON.stringify(u)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),c(ce(e.t0));case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}()}(Object(je.a)({},i)))},children:[Object(c.jsx)("h2",{children:"Sign In"}),Object(c.jsx)("input",{type:"email",name:"email",placeholder:"Email",value:i.email,onChange:d,required:!0}),Object(c.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:i.password,onChange:d,required:!0}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("button",{type:"submit",children:"Sign In"}),Object(c.jsx)(Y.b,{to:"/signup",children:"Sign Up"})]})]})})})}),ke=function(e){e.history;var t=Object(r.useState)({name:"",email:"",password:""}),n=Object(J.a)(t,2),a=n[0],i=n[1],s=Object(o.b)(),u=function(e){var t=e.target,n=t.name,c=t.value;i(Object(je.a)(Object(je.a)({},a),{},Object(me.a)({},n,c)))};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"auth-page",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(function(e){var t=e.name,n=e.email,c=e.password;return function(){var e=Object(Z.a)(K.a.mark((function e(r){var a,i;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te("POST","/auth/signup",{name:t,email:n,password:c},null);case 3:a=e.sent,i=a.data,r({type:v,payload:i.message}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),r(ce(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}(Object(je.a)({},a)))},children:[Object(c.jsx)("h2",{children:"Sign Up"}),Object(c.jsx)("input",{type:"text",name:"name",placeholder:"Name",value:a.name,onChange:u,required:!0}),Object(c.jsx)("input",{type:"email",name:"email",placeholder:"Email",value:a.email,onChange:u,required:!0}),Object(c.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:a.password,onChange:u,required:!0}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("button",{type:"submit",children:"Sign Up"}),Object(c.jsx)(Y.b,{to:"/signin",children:"Sign In"})]})]})})})},Ce=n(44),Te=n(45),Ae=n(49),Ne=n(48),Ue=n(46),De=n.n(Ue),Ie=function(e){Object(Ae.a)(n,e);var t=Object(Ne.a)(n);function n(){return Object(Ce.a)(this,n),t.apply(this,arguments)}return Object(Te.a)(n,[{key:"render",value:function(){var e=this,t=this.props.total;return Object(c.jsx)(De.a,{env:"sandbox",client:{sandbox:"Aa91RfeMSnnDTiC1XH0JHHr8CZTGywQAbZrdXhaOf80Xe7efQplbksccJTfmumTwO4ayYhnra_gqmXHz",production:"YOUR-PRODUCTION-APP-ID"},currency:"USD",total:t,onError:function(e){console.log("Error!",e)},onSuccess:function(t){console.log("The payment was succeeded!",t),e.props.tranSuccess(t)},onCancel:function(e){console.log("The payment was cancelled!",e)},style:{size:"small",color:"blue",shape:"rect",label:"checkout",tagline:!1}})}}]),n}(a.a.Component),Re=(n(87),function(){var e=Object(o.b)(),t=Object(r.useState)(0),n=Object(J.a)(t,2),a=n[0],i=n[1],s=Object(o.c)((function(e){return e})).cart,u=function(t){window.confirm("Esta seguro que desea eliminar el producto?")&&e(function(e){return function(t,n){var c=n(),r=c.cart,a=c.token;r.forEach((function(t,n){t._id===e&&r.splice(n,1)})),pe(r,a,t)}}(t))},l=function(t){s.forEach((function(n,c){n._id===t&&1!==n.quantity&&e(function(e){return function(t,n){var c=n(),r=c.cart,a=c.token;r.forEach((function(t,n){t._id===e&&(1===t.quantity?t.quantity=1:t.quantity-=1)})),pe(r,a,t)}}(t))}))},d=function(){var t=Object(Z.a)(K.a.mark((function t(n){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(he(n));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=s.reduce((function(e,t){return e+t.price*t.quantity}),0);i(e)}),[e,s]),Object(c.jsxs)(c.Fragment,{children:[0===s.length?Object(c.jsx)("h2",{className:"empty",children:"Cart Empty"}):s.map((function(t,n){return Object(c.jsxs)("div",{className:"detail cart-items",children:[Object(c.jsx)("img",{src:t.images.url,alt:t.name,className:"img_container"}),Object(c.jsxs)("div",{className:"box-detail",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h2",{children:t.name}),Object(c.jsxs)("h6",{children:["#: ",t._id]})]}),Object(c.jsxs)("h3",{children:["$ ",t.price*t.quantity]}),Object(c.jsx)("p",{children:t.description}),Object(c.jsxs)("div",{className:"amount",children:[Object(c.jsx)("button",{onClick:function(){return l(t._id)},children:"-"}),Object(c.jsx)("span",{children:t.quantity}),Object(c.jsx)("button",{onClick:function(){return e((n=t._id,function(e,t){var c=t(),r=c.cart,a=c.token;r.forEach((function(e){e._id===n&&(e.quantity+=1)})),pe(r,a,e)}));var n},children:"+"})]}),Object(c.jsx)("div",{className:"delete",onClick:function(){return u(t._id)},children:"X"})]})]},n)})),s.length>0&&Object(c.jsxs)("div",{className:"total",children:[Object(c.jsxs)("h3",{children:["Total: $ ",a]}),Object(c.jsx)(Ie,{total:a,tranSuccess:d})]})]})}),Pe=function(){return Object(c.jsx)("div",{children:"404 | Not Found"})},qe=n(47),Le=(n(88),function(e){var t=e.variant,n=e.message,a=e.type,i=Object(o.b)();return Object(r.useEffect)((function(){setTimeout((function(){i(ne(a))}),5e3)}),[i,a]),Object(c.jsx)("div",{className:"alert",children:Object(c.jsxs)("div",{className:"alert-".concat(t||"info"),children:[Object(c.jsx)("h6",{children:n}),Object(c.jsx)(qe.a,{className:"close",onClick:function(){i(ne(a))}})]})})}),Fe=(n(89),Object(Q.f)((function(e){var t=e.history,n=Object(o.b)(),a=Object(o.c)((function(e){return e})).token,i=Object(o.c)((function(e){return e.histories})),s=i.histories,u=i.loading;return Object(r.useEffect)((function(){a&&n(function(){var e=Object(Z.a)(K.a.mark((function e(t,n){var c,r,a,i,s,o;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t({type:U}),e.prev=1,c=n(),r=c.token,!c.isAdmin){e.next=11;break}return e.next=6,te("GET","/payment",null,{Authorization:"Bearer ".concat(r)});case 6:a=e.sent,i=a.data,t({type:D,payload:i.payments}),e.next=16;break;case 11:return e.next=13,te("GET","/history",null,{Authorization:"Bearer ".concat(r)});case 13:s=e.sent,o=s.data,t({type:D,payload:o.histories});case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),t(ce(e.t0));case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t,n){return e.apply(this,arguments)}}())}),[n,a]),Object(c.jsx)(c.Fragment,{children:u?Object(c.jsx)(xe,{}):Object(c.jsxs)("div",{className:"history_page",children:[Object(c.jsx)("h2",{children:"History"}),Object(c.jsxs)("h4",{children:["Usted tiene ",s.length,1===s.length?" orden":" ordenes"]}),Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"ID de pago"}),Object(c.jsx)("th",{children:"Fecha de compra"}),Object(c.jsx)("th",{})]})}),Object(c.jsx)("tbody",{children:s.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.paymentID}),Object(c.jsx)("td",{children:new Date(e.createdAt).toLocaleDateString()}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{onClick:function(){return n=e._id,void t.push("/history/".concat(n));var n},children:"View"})})]},e._id)}))})]})]})})}))),Ge=(n(90),function(e){var t=e.match,n=Object(o.b)(),a=t.params.id,i=Object(o.c)((function(e){return e.history})),s=i.history,u=i.loading;return Object(r.useEffect)((function(){var e;n((e=a,function(){var t=Object(Z.a)(K.a.mark((function t(n,c){var r,a,i,s;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:A}),t.prev=1,r=c(),a=r.token,t.next=5,te("GET","/history/".concat(e),null,{Authorization:"Bearer ".concat(a)});case 5:i=t.sent,s=i.data,n({type:N,payload:s.history}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),n(ce(t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()))}),[n,a]),Object(c.jsx)(c.Fragment,{children:u?Object(c.jsx)(xe,{}):Object(c.jsxs)("div",{className:"history_page",children:[Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Nombre"}),Object(c.jsx)("th",{children:"Direccion"}),Object(c.jsx)("th",{children:"Codigo Postal"}),Object(c.jsx)("th",{children:"Codigo del Pais"})]})}),Object(c.jsx)("tbody",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:s.address.recipient_name}),Object(c.jsx)("td",{children:s.address.line1+" - "+s.address.city}),Object(c.jsx)("td",{children:s.address.postal_code}),Object(c.jsx)("td",{children:s.address.country_code})]})})]}),Object(c.jsxs)("table",{style:{margin:"30px 0"},children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{}),Object(c.jsx)("th",{children:"Productos"}),Object(c.jsx)("th",{children:"Cantidad"}),Object(c.jsx)("th",{children:"Precio"})]})}),Object(c.jsx)("tbody",{children:s.cart.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)("img",{src:e.images.url,alt:e.name})}),Object(c.jsx)("td",{children:e.name}),Object(c.jsx)("td",{children:e.quantity}),Object(c.jsx)("td",{children:e.price*e.quantity})]},e._id)}))})]})]})})}),Be=(n(91),function(){var e=Object(r.useState)(""),t=Object(J.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(!1),s=Object(J.a)(i,2),u=s[0],l=s[1],d=Object(r.useState)(""),j=Object(J.a)(d,2),p=j[0],b=j[1],h=Object(o.b)(),O=Object(o.c)((function(e){return e.categories})),f=O.categories,x=O.loading,m=function(e){window.confirm("Esta seguro que desea eliminar el producto?")&&h(function(e){return function(){var t=Object(Z.a)(K.a.mark((function t(n,c){var r,a,i,s;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=c(),a=r.token,t.next=4,te("DELETE","/category/".concat(e),null,{Authorization:"Bearer ".concat(a)});case 4:i=t.sent,s=i.data,ve(n),n({type:v,payload:s.message}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n(ce(t.t0));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}()}(e))};return Object(r.useEffect)((function(){h(ge())}),[h]),Object(c.jsxs)("div",{className:"categories",children:[Object(c.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),h(u?function(e){var t=e.id,n=e.name;return function(){var e=Object(Z.a)(K.a.mark((function e(c,r){var a,i,s,o;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=r(),i=a.token,e.next=4,te("PUT","/category/".concat(t),{name:n},{Authorization:"Bearer ".concat(i)});case 4:s=e.sent,o=s.data,ve(c),c({type:v,payload:o.message}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),c(ce(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}()}({id:p,name:n}):(t=n,function(){var e=Object(Z.a)(K.a.mark((function e(n,c){var r,a,i,s;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,r=c(),a=r.token,e.next=5,te("POST","/category",{name:t},{Authorization:"Bearer ".concat(a)});case 5:i=e.sent,s=i.data,n({type:v,payload:s.message}),ve(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),n(ce(e.t0));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())),l(!1),a("")},children:[Object(c.jsx)("label",{htmlFor:"category",children:"Category"}),Object(c.jsx)("input",{type:"text",name:"category",value:n,required:!0,onChange:function(e){return a(e.target.value)}}),Object(c.jsx)("button",{type:"submit",children:u?"Update":"Save"})]}),x?Object(c.jsx)(xe,{}):Object(c.jsx)("div",{className:"col",children:f.map((function(e){return Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("p",{children:e.name}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){return function(e,t){b(e),a(t),l(!0)}(e._id,e.name)},children:"Edit"}),Object(c.jsx)("button",{onClick:function(){return m(e._id)},children:"Delete"})]})]},e._id)}))})]})}),He=(n(92),{name:"",description:"",quantity:0,price:0,stock:0,images:{},category:""}),ze=Object(Q.f)((function(e){var t=e.history,n=e.match,a=Object(r.useState)(He),i=Object(J.a)(a,2),s=i[0],u=i[1],l=Object(r.useState)(!0),d=Object(J.a)(l,2),j=d[0],p=d[1],b=n.params.id,f=Object(o.b)(),x=Object(o.c)((function(e){return e.categories})).categories,m=Object(o.c)((function(e){return e.productUpdate})).successUpdate,g=Object(o.c)((function(e){return e.product})).product,y=Object(o.c)((function(e){return e.images})).images,S=function(e){var t=e.target,n=t.name,c=t.value;u(Object(je.a)(Object(je.a)({},s),{},Object(me.a)({},n,c)))},w={display:y||s.images.url?"block":"none"};return Object(r.useEffect)((function(){b?(g&&(g._id!==b||m)&&p(!0),j&&(f(ge()),f(ue(b)),f({type:O}),p(!1)),g&&u(g)):(j&&(f(ge()),p(!1)),u(He))}),[j,f,g,b,m]),Object(c.jsxs)("div",{className:"create_product",children:[Object(c.jsxs)("div",{className:"upload",children:[Object(c.jsx)("input",{type:"file",name:"file",id:"file_up",onChange:function(e){var t=e.target.files[0];f(function(e){return function(){var t=Object(Z.a)(K.a.mark((function t(n,c){var r,a,i,s,o;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:I}),t.prev=1,r=c(),a=r.token,(i=new FormData).append("file",e),i.append("folder","products"),t.next=8,te("POST","/upload",i,{Authorization:" Bearer ".concat(a)});case 8:s=t.sent,o=s.data,n({type:R,payload:o}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),n(ce(t.t0));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,n){return t.apply(this,arguments)}}()}(t))}}),Object(c.jsxs)("div",{id:"file_img",style:w,children:[Object(c.jsx)("img",{src:y?y.url:s.images.url,alt:"images"}),Object(c.jsx)("span",{onClick:function(){b?(f(de(s.images.public_id)),u(Object(je.a)(Object(je.a)({},s),{},{images:{}}))):f(de(y.public_id))},children:"X"})]})]}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f(b?function(e,t){return function(){var n=Object(Z.a)(K.a.mark((function n(c,r){var a,i,s,o;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a=r(),i=a.token,n.next=4,te("PUT","/products/".concat(t),e,{Authorization:"Bearer ".concat(i)});case 4:s=n.sent,o=s.data,c({type:v,payload:o.message}),c({type:h}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),c(ce(n.t0));case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e,t){return n.apply(this,arguments)}}()}(Object(je.a)(Object(je.a)({},s),{},{images:y}),b):function(e){return function(){var t=Object(Z.a)(K.a.mark((function t(n,c){var r,a,i,s;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=c(),a=r.token,t.next=4,te("POST","/products",e,{Authorization:"Bearer ".concat(a)});case 4:i=t.sent,s=i.data,n({type:v,payload:s.message}),n({type:"PRODUCT_CREATE_SUCCESS"}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n(ce(t.t0));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}()}(Object(je.a)(Object(je.a)({},s),{},{images:y}))),f({type:L}),t.push("/")},children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("label",{htmlFor:"name",children:"Nombre"}),Object(c.jsx)("input",{type:"text",name:"name",id:"name",required:!0,value:s.name,onChange:S})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("label",{htmlFor:"description",children:"Descripci\xf2n"}),Object(c.jsx)("textarea",{type:"text",name:"description",id:"description",value:s.description,required:!0,rows:"5",onChange:S})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("label",{htmlFor:"quantity",children:"Cantidad"}),Object(c.jsx)("input",{type:"number",name:"quantity",id:"quantity",required:!0,value:s.quantity,onChange:S})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("label",{htmlFor:"price",children:"Precio"}),Object(c.jsx)("input",{type:"number",name:"price",id:"price",required:!0,value:s.price,onChange:S})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("label",{htmlFor:"stock",children:"Stock"}),Object(c.jsx)("input",{type:"number",name:"stock",id:"stock",required:!0,value:s.stock,onChange:S})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("label",{htmlFor:"categories",children:"Categoria"}),Object(c.jsxs)("select",{name:"category",value:s.category,onChange:S,children:[Object(c.jsx)("option",{value:"",children:"Porfavor seleccione una categoria"}),x&&x.map((function(e){return Object(c.jsx)("option",{value:e._id,children:e.name},e._id)}))]})]}),Object(c.jsx)("button",{type:"submit",children:b?"Update":"Create"})]})]})}));n(93);var Me=function(){var e=Object(o.c)((function(e){return e})),t=e.error,n=e.message,r=e.isLogged,a=e.isAdmin;return Object(c.jsx)(Y.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(ie,{}),t&&Object(c.jsx)(Le,{message:t,variant:"danger",type:"ERROR"}),n&&Object(c.jsx)(Le,{message:n,variant:"info",type:"MESSAGE"}),Object(c.jsxs)(Q.c,{children:[Object(c.jsx)(Q.a,{path:"/",exact:!0,component:we}),Object(c.jsx)(Q.a,{path:"/products/detail_product/:id",exact:!0,component:_e}),Object(c.jsx)(Q.a,{path:"/signin",exact:!0,component:r?Pe:Ee}),Object(c.jsx)(Q.a,{path:"/signup",exact:!0,component:r?Pe:ke}),Object(c.jsx)(Q.a,{path:"/category",exact:!0,component:a?Be:Pe}),Object(c.jsx)(Q.a,{path:"/products/create_product",exact:!0,component:a?ze:Pe}),Object(c.jsx)(Q.a,{path:"/products/edit_product/:id",exact:!0,component:a?ze:Pe}),Object(c.jsx)(Q.a,{path:"/history",exact:!0,component:r?Fe:Pe}),Object(c.jsx)(Q.a,{path:"/history/:id",exact:!0,component:r?Ge:Pe}),Object(c.jsx)(Q.a,{path:"/cart",exact:!0,component:Re}),Object(c.jsx)(Q.a,{path:"*",exact:!0,component:Pe})]})]})})};n(94);s.a.render(Object(c.jsx)(o.a,{store:M,children:Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(Me,{})})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.4c9f2ec4.chunk.js.map