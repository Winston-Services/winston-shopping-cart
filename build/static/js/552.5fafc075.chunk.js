"use strict";(self.webpackChunkwinston_shopping_cart=self.webpackChunkwinston_shopping_cart||[]).push([[552],{7552:function(e,n,i){i.r(n),i.d(n,{default:function(){return ue}});var t=i(993),r=i(7394),s=i.n(r),a=i(9859),l=i(7758),o=i(5875),c=i(9099),d=i(5801),x=i(6627),h=i(5834),p=i(5225),u=i(3269),j=i(39),m=i(9611),g=i(4273);function Z(e){return(0,g.jsx)(m.Z,{sitekey:j.Z.RECAPTCA_KEY,onChange:e.onChange})}function f(){return(0,g.jsx)(g.Fragment,{})}function y(){return(0,g.jsx)(g.Fragment,{})}function v(){return(0,g.jsx)(g.Fragment,{})}function b(){return(0,g.jsx)(g.Fragment,{})}function w(){return(0,g.jsx)(g.Fragment,{})}function C(){return(0,g.jsx)(g.Fragment,{})}function S(){return(0,g.jsx)(g.Fragment,{})}var P=i(4333),k=i(9562),I=i(4718),L=i(5714),H=i(686),D=i(1343),T=i(2913),B=i(8602),E=i(260),F=i(4261),R=i(1063),W=i(1517),A=i(6623),O=i(1964),U=i(6859),Y=i(3507),_=i(7410),z=i(337),G=i(9032),N=i(8581),X=i(5421),q=i(862),K=i(5238),M=i(2121),$=i(1310),J=i(8670),Q=i(176),V=i(429),ee=i(4058),ne=["children","value","index"];function ie(e){var n=e.children,i=e.value,t=e.index,r=(0,I.Z)(e,ne);return(0,g.jsx)("div",(0,k.Z)((0,k.Z)({role:"tabpanel",hidden:i!==t,id:"full-width-tabpanel-".concat(t),"aria-labelledby":"full-width-tab-".concat(t)},r),{},{children:i===t&&(0,g.jsx)(l.Z,{sx:{p:3},children:n})}))}function te(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var re=function(e){return(0,g.jsx)(d.ZP,{item:!0,xs:12,sx:{m:".25rem"},children:(0,g.jsxs)(h.Z,{elevation:3,sx:{p:".25rem"},children:[(0,g.jsx)("a",{href:"mailto:".concat(e.review.commenterEmail),children:e.review.commenterName||"User"}),(0,g.jsxs)(x.Z,{variant:"subtitle2",children:[Array(e.review.rating).fill("\ud83c\udf1f").join(""),(0,g.jsxs)("span",{style:{float:"right"},children:[e.review.rating," Stars"]})]}),(0,g.jsxs)(x.Z,{children:["\ud83d\udde3\ufe0f",e.review.comment]})]})})};function se(e){var n=(0,J.Z)(),i=a.useState(0),t=(0,$.Z)(i,2),r=t[0],s=t[1];return(0,g.jsxs)(l.Z,{sx:{bgcolor:"background.paper"},children:[(0,g.jsx)(Q.Z,{position:"static",children:(0,g.jsxs)(V.Z,{value:r,onChange:function(e,n){s(n)},indicatorColor:"secondary",textColor:"inherit",variant:"fullWidth","aria-label":"full width tabs example",children:[(0,g.jsx)(ee.Z,(0,k.Z)({label:"Product Overview"},te(0))),(0,g.jsx)(ee.Z,(0,k.Z)({label:"Product Information"},te(1))),(0,g.jsx)(ee.Z,(0,k.Z)({label:"Product Reviews"},te(2)))]})}),(0,g.jsx)(ie,{value:r,index:0,dir:n.direction,children:(0,g.jsx)(x.Z,{component:"subtitle1",children:e.overview})}),(0,g.jsx)(ie,{value:r,index:1,dir:n.direction,children:"Product Information"}),(0,g.jsx)(ie,{value:r,index:2,dir:n.direction,children:(0,g.jsxs)(d.ZP,{container:!0,display:"block",children:[(0,g.jsx)(d.ZP,{item:!0,sm:12,children:(0,g.jsx)(x.Z,{component:"subtitle1",children:"Reviews"})}),e.reviews.map((function(e,n){return(0,g.jsx)(re,{review:e},"review-".concat(n))}))]})})]})}var ae=["expand"],le=(0,L.ZP)((function(e){e.expand;var n=(0,I.Z)(e,ae);return(0,g.jsx)(R.Z,(0,k.Z)({},n))}))((function(e){var n=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:n.transitions.create("transform",{duration:n.transitions.duration.shortest})}}));function oe(e){var n=e.children;return(0,g.jsx)(l.Z,{color:"text.secondary",sx:{margin:".05rem",paddingX:".15rem",marginY:"1.75rem",display:"inline"},children:n})}function ce(e){var n=a.useContext(P.h),i=n.state,t=n.dispatch;return(0,g.jsxs)(H.Z,{sx:{borderRadius:"6px",width:"100%"},children:[(0,g.jsx)(D.Z,{sx:{paddingBottom:"10px"},avatar:(0,g.jsx)(F.Z,{sx:{bgcolor:"transparent",border:".05rem solid #e453c6",padding:"1rem",width:"56px",height:"56px",color:{Ho:"#82c6b6",Sp:"#c69382",Cl:"#b2c682",El:"#92c682"}[e.category.substring(0,2)]},"aria-label":"category_brand_logo",children:e.category.substring(0,2)}),action:e.admin?(0,g.jsx)(R.Z,{"aria-label":"manage",children:(0,g.jsx)(U.Z,{})}):null,title:(0,g.jsx)(x.Z,{variant:"h5",color:"text.secondary",sx:{cursor:"pointer",fontWeight:"800"},onClick:function(){t({type:"showProductItemDisplay",payload:{item:e.id,showItemGridDisplay:!i.showItemGridDisplay}})},children:e.title}),subheader:(0,g.jsx)(d.ZP,{container:!0,display:"flex",children:(0,g.jsxs)(d.ZP,{item:!0,xs:12,children:[(0,g.jsx)(x.Z,{variant:"title",color:"text.secondary",sx:{textDecoration:"underline dotted #a166e5",fontWeight:"600"},children:e.category}),(0,g.jsx)(x.Z,{variant:"subtitle2",color:"text.secondary",sx:{p:1,textDecoration:"underline dotted #b96dc9",fontWeight:"500"},children:e.subcategory})]})})}),(0,g.jsxs)(T.Z,{sx:{paddingY:"3px",paddingX:"16px"},children:[(0,g.jsx)(d.ZP,{container:!0,alignItems:"center",children:(0,g.jsx)(d.ZP,{item:!0,xs:12,textAlign:"center",children:(0,g.jsx)(h.Z,{color:"secondary",sx:{p:2},align:"center",elevation:3,children:(0,g.jsx)("img",{src:e.images[0].src,width:"190px",height:"193.15px",alt:e.images[0].alt})})})}),(0,g.jsx)(d.ZP,{container:!0,display:"flex",alignItems:"center",children:(0,g.jsxs)(d.ZP,{item:!0,xs:12,sx:{minHeight:"115px",maxHeight:"115px",overflow:"hidden",marginY:".25rem"},children:[e.tags.map((function(e){return(0,g.jsx)(oe,{children:e},e)})),(0,g.jsx)(x.Z,{variant:"body2",color:"text.secondary",sx:{p:1},children:e.shortDescription})]})}),(0,g.jsx)(d.ZP,{container:!0,display:"flex",alignItems:"center",children:(0,g.jsx)(d.ZP,{item:!0,xs:12,textAlign:"center",children:(0,g.jsx)(h.Z,{color:"secondary",sx:{p:".09rem"},children:(0,g.jsx)(z.Z,{size:"small",sx:{p:"6px",minHeight:"175px",maxHeight:"175px"},children:(0,g.jsxs)(G.Z,{children:[(0,g.jsxs)(N.Z,{children:[(0,g.jsx)(X.Z,{variant:"head",children:"Retail Price"}),(0,g.jsxs)(X.Z,{align:"right",children:["$ ",e.price," USD"]})]}),(0,g.jsxs)(N.Z,{children:[(0,g.jsxs)(X.Z,{variant:"head",children:[(0,g.jsx)(q.Z,{id:"currency-select-label",children:"Currency"}),(0,g.jsxs)(K.Z,{labelId:"currency-select-label",id:"currency-select",value:e.currency||"",label:"Currency",onChange:function(n){t({type:"setCurrency",payload:{currency:n.target.value,item:e.id}})},variant:"standard",fullWidth:!0,children:[(0,g.jsx)(M.Z,{value:"BNB",children:"BNB"}),(0,g.jsx)(M.Z,{value:"BUSD",children:"BUSD"}),(0,g.jsx)(M.Z,{value:"USDC",children:"USDC"}),(0,g.jsx)(M.Z,{value:"USDT",children:"USDT"}),(0,g.jsx)(M.Z,{value:"WIN",children:"WIN"}),(0,g.jsx)(M.Z,{value:"RKL",children:"RKL"})]})]}),(0,g.jsxs)(X.Z,{children:[e.currency?"0.000000000000000000":"Select A Currency"," ",e.currency]})]})]})})})})})]}),(0,g.jsx)(B.Z,{children:(0,g.jsxs)(d.ZP,{container:!0,display:"flex",alignItems:"center",children:[e.showShare&&(0,g.jsxs)(d.ZP,{item:!0,xs:12,textAlign:"center",children:["http://shop.winston.services/?productId=",e.id]}),(0,g.jsxs)(d.ZP,{item:!0,xs:12,children:[(0,g.jsx)(R.Z,{"aria-label":"add to favorites",onClick:function(){-1!==i.favorites.indexOf(e.id)?t({type:"removeFromFavorites",payload:e.id}):t({type:"addToFavorites",payload:e.id})},children:(0,g.jsx)(W.Z,{sx:{color:-1!==i.favorites.indexOf(e.id)?"red":"white"}})}),(0,g.jsx)(R.Z,{"aria-label":"share",onClick:function(){t({type:"setShowShare",payload:e.id})},children:(0,g.jsx)(A.Z,{})}),(0,g.jsx)(R.Z,{"aria-label":"add-to-cart",onClick:function(){-1!==i.cartItems.indexOf(e.id)?t({type:"removeFromCart",payload:e.id}):t({type:"addToCart",payload:e.id})},children:(0,g.jsx)(Y.Z,{sx:{color:-1!==i.cartItems.indexOf(e.id)?"#e454c4":"white"}})}),(0,g.jsx)(R.Z,{"aria-label":"add-to-wishlist",onClick:function(){-1!==i.wishlist.indexOf(e.id)?t({type:"removeFromWishList",payload:e.id}):t({type:"addToWishList",payload:e.id})},children:(0,g.jsx)(_.Z,{sx:{color:-1!==i.wishlist.indexOf(e.id)?"#e97793":"white"}})}),(0,g.jsx)("span",{style:{float:"right"},children:(0,g.jsx)(le,{expand:e.expanded,onClick:function(){t({type:"setExpanded",payload:{item:e.id,expanded:e.expanded}})},"aria-expanded":e.expanded,"aria-label":"show more",children:(0,g.jsx)(O.Z,{})})})]})]})}),(0,g.jsx)(E.Z,{in:e.expanded,timeout:"auto",unmountOnExit:!0,children:(0,g.jsxs)(T.Z,{sx:{borderRadius:"3px",minHeight:"400px",maxHeight:"400px",overflowX:"hidden",overflowY:"thin",padding:"0px",scrollbarColor:"red !important",webkitScrollbar:{width:"8px"},webkitScrollbarTrack:{backgroundColor:"red !important",borderRadius:"5px"},webkitScrollbarThumb:{width:"5px",backgroundColor:"green"}},m:2,component:l.Z,color:"secondary",children:[(0,g.jsxs)(d.ZP,{align:"center",sx:{p:"6px",marginBottom:"6px"},children:[(0,g.jsx)(u.Z,{color:"info",variant:"outlined",onClick:function(){-1!==i.cartItems.indexOf(e.id)?t({type:"removeFromCart",payload:e.id}):t({type:"addToCart",payload:e.id})},children:-1!==i.cartItems.indexOf(e.id)?"Remove From Cart":"Add To Cart"})," ",(0,g.jsx)(u.Z,{color:"success",variant:"outlined",children:"Buy Now"})]}),(0,g.jsx)(d.ZP,{item:!0,xs:12,sx:{marginBottom:"6px",p:"8px",borderRadius:"6px"},children:(0,g.jsx)(x.Z,{paragraph:!0,children:e.description})}),(0,g.jsx)(d.ZP,{item:!0,xs:12,sx:{marginBottom:"6px",m:"8px",borderRadius:"0px 0px 6px 6px",backgroundColor:"#a266e3"},children:(0,g.jsx)(se,{overview:e.overview,reviews:e.reviews,manufactures:e.manufactures})})]})})]})}var de=i(2411);function xe(){var e=a.useContext(P.h),n=e.state;e.dispatch;return(0,g.jsx)(a.Suspense,{fallback:(0,g.jsx)(l.Z,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",minHeight:"100%",children:(0,g.jsx)(o.Z,{})}),children:(0,g.jsxs)(c.Z,{children:[(0,g.jsx)(d.ZP,{container:!0,display:"flex",spacing:1,children:(0,g.jsx)(d.ZP,{item:!0,xs:12,children:(0,g.jsx)(l.Z,{margin:2,children:(0,g.jsx)(h.Z,{color:"secondary",sx:{p:".15rem",width:"100%"},elevation:6,children:(0,g.jsx)(l.Z,{margin:.75,children:(0,g.jsxs)(d.ZP,{item:!0,xs:12,spacing:3,children:["Sort | Filter ","  ",(0,g.jsxs)(K.Z,{sx:{marginRight:"8px",marginLeft:"16px"},value:"Category",placeholder:"Category",id:"category-filter",variant:"outlined",children:[(0,g.jsx)("option",{value:"Category",children:"Category"}),(0,g.jsx)("option",{value:"Sports Gear",children:"Sports Gear"}),(0,g.jsx)("option",{value:"Houseware",children:"Houseware"}),(0,g.jsx)("option",{value:"Clothing",children:"Clothing"}),(0,g.jsx)("option",{value:"Electronics",children:"Electronics"})]}),(0,g.jsxs)(K.Z,{sx:{marginX:"8px"},value:"Subcategory",placeholder:"Subcategory",id:"subcategory-filter",variant:"outlined",children:[(0,g.jsx)("option",{value:"Subcategory",children:"Subcategory"}),(0,g.jsx)("option",{value:"Water Bottles",children:"Water Bottles"}),(0,g.jsx)("option",{value:"Blankets",children:"Blankets"}),(0,g.jsx)("option",{value:"T-Shirts",children:"T-Shirts"}),(0,g.jsx)("option",{value:"Beenie's",children:"Beenie's"})]}),(0,g.jsx)(p.Z,{sx:{marginX:"8px"},name:"Tags",placeholder:"Tags ie: sports",variant:"outlined"}),(0,g.jsx)(p.Z,{sx:{marginX:"8px"},name:"Tags",placeholder:"Tags ie: sports",variant:"outlined"}),(0,g.jsx)("span",{style:{float:"right",marginTop:"6px"},children:(0,g.jsx)(R.Z,{size:"large",children:(0,g.jsx)(de.Z,{children:"shopping_cart"})})})]})})})})})}),(0,g.jsx)(d.ZP,{container:!0,display:"flex",spacing:1,children:n.items.map((function(e){return(0,g.jsx)(d.ZP,{item:!0,xs:12,md:4,children:(0,g.jsx)(h.Z,{color:"secondary",sx:{p:".15rem"},children:(0,g.jsx)(ce,(0,k.Z)({},e))})},e.id)}))})]})})}var he=i(8415),pe=j.Z.productList;function ue(){var e=this,n=a.useContext(P.h),i=n.state,r=n.dispatch;function m(){return(m=(0,t.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),i.captcha){r({type:"setIsLeadLoading",payload:!0});try{r({type:"setResponse",payload:{isError:!1,msg:"Your request has been sent."}}),r({type:"setIsLeadLoading",payload:!1})}catch(n){r({type:"setResponse",payload:{isError:!1,msg:"Your request has not been sent."}}),r({type:"setIsLeadLoading",payload:!1})}}case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){r({type:"setCaptcha",payload:e})}a.useEffect((function(){var e=Promise.resolve({data:pe});i.isLoading&&e.then((function(e){return e.data})).then((function(e){r({type:"setItems",payload:e}),r({type:"setIsLoading",payload:!1})})).catch((function(e){console.log(e)}))}),[i.isLoading,r]);var I=function(n){return(0,g.jsx)(a.Suspense,{fallback:(0,g.jsx)(l.Z,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",minHeight:"100%",children:(0,g.jsx)(o.Z,{})}),children:(0,g.jsx)(c.Z,{sx:{mt:"100px"},children:(0,g.jsxs)(d.ZP,{container:!0,display:"flex",alignItems:"center",children:[(0,g.jsx)(d.ZP,{item:!0,md:4,children:(0,g.jsx)(he.Z,{animation:"wave",variant:"rounded",width:40,height:40})}),(0,g.jsxs)(d.ZP,{item:!0,md:8,children:[(0,g.jsx)(x.Z,{variant:"h4",children:"Coming soon"}),(0,g.jsx)(x.Z,{variant:"subtitle2",mt:2,children:j.Z.launchDescription}),(0,g.jsxs)(d.ZP,{container:!0,spacing:3,children:[(0,g.jsxs)(d.ZP,{item:!0,mt:"50px",children:[(0,g.jsx)(h.Z,{color:"secondary",sx:{p:2},children:(0,g.jsx)(x.Z,{fontSize:96,fontWeight:300})}),(0,g.jsx)(h.Z,{color:"secondary",sx:{py:1,mt:"5px"},children:(0,g.jsx)(x.Z,{variant:"subtitle1",textAlign:"center",children:"Days left"})})]}),(0,g.jsxs)(d.ZP,{item:!0,mt:"50px",children:[(0,g.jsx)(h.Z,{color:"secondary",sx:{p:2},children:(0,g.jsx)(x.Z,{fontSize:96,fontWeight:300})}),(0,g.jsx)(h.Z,{color:"secondary",sx:{py:1,mt:"5px"},children:(0,g.jsx)(x.Z,{variant:"subtitle1",textAlign:"center",children:"Hours left"})})]}),(0,g.jsxs)(d.ZP,{item:!0,mt:"50px",children:[(0,g.jsx)(h.Z,{color:"secondary",sx:{p:2},children:(0,g.jsx)(x.Z,{fontSize:96,fontWeight:300})}),(0,g.jsx)(h.Z,{color:"secondary",sx:{py:1,mt:"5px"},children:(0,g.jsx)(x.Z,{variant:"subtitle1",textAlign:"center",children:"Minutes left"})})]})]}),i.response&&!i.response.isError?(0,g.jsx)(x.Z,{variant:"h6",mt:"100px",mb:2,children:"Your request has been submitted."}):(0,g.jsxs)("form",{onSubmit:function(e){return function(e){return m.apply(this,arguments)}(e)},children:[(0,g.jsx)(x.Z,{variant:"h6",mt:"100px",mb:2,children:"Get notified when we launch"}),(0,g.jsx)(p.Z,{fullWidth:!0,type:"email",value:i.email,onChange:function(e){r({type:"setEmail",payload:e.target.value})},label:"Email address",variant:"outlined",placeholder:"Enter email address",disabled:i.isLeadLoading,helperText:i.response.msg,error:i.response.isError,required:!0}),(0,g.jsx)(d.ZP,{mt:3,children:(0,g.jsx)(Z,{onChange:k.bind(e)})}),(0,g.jsxs)(u.Z,{type:"submit",variant:"contained",color:"secondary",sx:{mt:"30px"},disabled:!i.captcha||i.isLeadLoading,children:[i.isLeadLoading?(0,g.jsx)(o.Z,{size:24,sx:{mr:2}}):null,"Submit"]})]})]})]})})})},L={0:(0,g.jsx)(a.Suspense,{fallback:(0,g.jsx)(l.Z,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",minHeight:"100%",children:(0,g.jsx)(o.Z,{})}),children:(0,g.jsx)(f,{})}),1:(0,g.jsx)(a.Suspense,{fallback:(0,g.jsx)(l.Z,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",minHeight:"100%",children:(0,g.jsx)(o.Z,{})}),children:(0,g.jsx)(f,{})}),2:(0,g.jsx)(a.Suspense,{fallback:(0,g.jsx)(l.Z,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",minHeight:"100%",children:(0,g.jsx)(o.Z,{})}),children:(0,g.jsx)(y,{})}),3:(0,g.jsx)(a.Suspense,{fallback:(0,g.jsx)(l.Z,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",minHeight:"100%",children:(0,g.jsx)(o.Z,{})}),children:(0,g.jsx)(v,{})}),4:(0,g.jsx)(a.Suspense,{fallback:(0,g.jsx)(l.Z,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",minHeight:"100%",children:(0,g.jsx)(o.Z,{})}),children:(0,g.jsx)(b,{})}),5:(0,g.jsx)(a.Suspense,{fallback:(0,g.jsx)(l.Z,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",minHeight:"100%",children:(0,g.jsx)(o.Z,{})}),children:(0,g.jsx)(w,{})}),6:(0,g.jsx)(a.Suspense,{fallback:(0,g.jsx)(l.Z,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",minHeight:"100%",children:(0,g.jsx)(o.Z,{})}),children:(0,g.jsx)(C,{})}),7:(0,g.jsx)(a.Suspense,{fallback:(0,g.jsx)(l.Z,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",minHeight:"100%",children:(0,g.jsx)(o.Z,{})}),children:(0,g.jsx)(S,{})})};return i.showCheckoutStep?L[i.showCheckoutStep]:i.showItemGridDisplay?(0,g.jsx)(xe,{}):(0,g.jsx)(I,{product:i.showProductDisplayItem})}}}]);
//# sourceMappingURL=552.5fafc075.chunk.js.map