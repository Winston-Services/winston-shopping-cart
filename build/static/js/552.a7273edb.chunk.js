"use strict";(self.webpackChunkwinston_shopping_cart=self.webpackChunkwinston_shopping_cart||[]).push([[552],{7552:function(e,t,n){n.r(t),n.d(t,{default:function(){return je}});n(993),n(7394);var i=n(9859),r=n(7758),a=n(5875),s=n(9099),l=n(5801),o=n(6627),c=n(5834),d=n(3269),x=n(39),h=(n(9611),n(4273));function p(){return(0,h.jsx)(h.Fragment,{})}function u(){return(0,h.jsx)(h.Fragment,{})}function j(){return(0,h.jsx)(h.Fragment,{})}function g(){return(0,h.jsx)(h.Fragment,{})}function m(){return(0,h.jsx)(h.Fragment,{})}function y(){return(0,h.jsx)(h.Fragment,{})}function Z(){return(0,h.jsx)(h.Fragment,{})}var f=n(9587),v=n(9562),b=n(4718),w=n(5714),C=n(686),S=n(1343),k=n(2913),I=n(8602),P=n(260),D=n(4261),B=n(1063),F=n(1517),H=n(6623),T=n(1964),W=n(6859),L=n(3507),R=n(7410),O=n(337),_=n(9032),G=n(8581),U=n(5421),A=n(862),E=n(5238),N=n(2121),X=n(1310),Y=n(8670),z=n(176),K=n(429),V=n(4058),$=["children","value","index"];function q(e){var t=e.children,n=e.value,i=e.index,a=(0,b.Z)(e,$);return(0,h.jsx)("div",(0,v.Z)((0,v.Z)({role:"tabpanel",hidden:n!==i,id:"full-width-tabpanel-".concat(i),"aria-labelledby":"full-width-tab-".concat(i)},a),{},{children:n===i&&(0,h.jsx)(r.Z,{sx:{p:3},children:t})}))}function J(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var M=function(e){return(0,h.jsx)(l.ZP,{item:!0,xs:12,sx:{m:".25rem"},children:(0,h.jsxs)(c.Z,{elevation:3,sx:{p:".25rem"},children:[(0,h.jsx)("a",{href:"mailto:".concat(e.review.commenterEmail),children:e.review.commenterName||"User"}),(0,h.jsxs)(o.Z,{variant:"subtitle2",children:[Array(e.review.rating).fill("\ud83c\udf1f").join(""),(0,h.jsxs)("span",{style:{float:"right"},children:[e.review.rating," Stars"]})]}),(0,h.jsxs)(o.Z,{children:["\ud83d\udde3\ufe0f",e.review.comment]})]})})};function Q(e){var t=(0,Y.Z)(),n=i.useState(0),a=(0,X.Z)(n,2),s=a[0],c=a[1];return(0,h.jsxs)(r.Z,{sx:{bgcolor:"background.paper"},children:[(0,h.jsx)(z.Z,{position:"static",children:(0,h.jsxs)(K.Z,{value:s,onChange:function(e,t){c(t)},indicatorColor:"secondary",textColor:"inherit",variant:"fullWidth","aria-label":"full width tabs example",children:[(0,h.jsx)(V.Z,(0,v.Z)({label:"Product Overview"},J(0))),(0,h.jsx)(V.Z,(0,v.Z)({label:"Product Information"},J(1))),(0,h.jsx)(V.Z,(0,v.Z)({label:"Product Reviews"},J(2)))]})}),(0,h.jsx)(q,{value:s,index:0,dir:t.direction,children:(0,h.jsx)(o.Z,{variant:"subtitle1",children:e.overview})}),(0,h.jsx)(q,{value:s,index:1,dir:t.direction,children:"Product Information"}),(0,h.jsx)(q,{value:s,index:2,dir:t.direction,children:(0,h.jsxs)(l.ZP,{container:!0,display:"block",children:[(0,h.jsx)(l.ZP,{item:!0,sm:12,children:(0,h.jsx)(o.Z,{variant:"subtitle1",children:"Reviews"})}),e.reviews.map((function(e,t){return(0,h.jsx)(M,{review:e},"review-".concat(t))}))]})})]})}var ee=["expand"],te=(0,w.ZP)((function(e){e.expand;var t=(0,b.Z)(e,ee);return(0,h.jsx)(B.Z,(0,v.Z)({},t))}))((function(e){var t=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}}));function ne(e){var t=e.children;return(0,h.jsx)(r.Z,{color:"text.secondary",sx:{margin:".05rem",paddingX:".15rem",marginY:"1.75rem",display:"inline"},children:t})}function ie(e){var t=i.useContext(f.h),n=t.state,a=t.dispatch;return(0,h.jsxs)(C.Z,{sx:{borderRadius:"6px",width:"100%"},children:[(0,h.jsx)(S.Z,{sx:{paddingBottom:"10px"},avatar:(0,h.jsx)(D.Z,{sx:{bgcolor:"transparent",border:".05rem solid #e453c6",padding:"1rem",width:"56px",height:"56px",color:{Ho:"#82c6b6",Sp:"#c69382",Cl:"#b2c682",El:"#92c682"}[e.category.substring(0,2)]},"aria-label":"category_brand_logo",children:e.category.substring(0,2)}),action:e.admin?(0,h.jsx)(B.Z,{"aria-label":"manage",children:(0,h.jsx)(W.Z,{})}):null,title:(0,h.jsx)(o.Z,{variant:"h5",color:"text.secondary",sx:{cursor:"pointer",fontWeight:"800"},onClick:function(){a({type:"showProductItemDisplay",payload:{item:e.id,showItemGridDisplay:!n.showItemGridDisplay}})},children:e.title}),subheader:(0,h.jsx)(l.ZP,{container:!0,display:"flex",children:(0,h.jsxs)(l.ZP,{item:!0,xs:12,children:[(0,h.jsx)(o.Z,{variant:"title",color:"text.secondary",sx:{textDecoration:"underline dotted #a166e5",fontWeight:"600"},children:e.category}),(0,h.jsx)(o.Z,{variant:"subtitle2",color:"text.secondary",sx:{p:1,textDecoration:"underline dotted #b96dc9",fontWeight:"500"},children:e.subcategory})]})})}),(0,h.jsxs)(k.Z,{sx:{paddingY:"3px",paddingX:"16px"},children:[(0,h.jsx)(l.ZP,{container:!0,alignItems:"center",children:(0,h.jsx)(l.ZP,{item:!0,xs:12,textAlign:"center",children:(0,h.jsx)(c.Z,{color:"secondary",sx:{p:2},align:"center",elevation:3,onClick:function(){a({type:"showProductItemDisplay",payload:{item:e.id,showItemGridDisplay:!n.showItemGridDisplay}})},children:(0,h.jsx)("img",{src:e.images[0].src,width:"190px",height:"193.15px",alt:e.images[0].alt,className:"productImage"})})})}),(0,h.jsx)(o.Z,{variant:"body2",color:"text.secondary",sx:{p:1,overflow:"hidden",minHeight:"60px"},children:e.shortDescription}),se(e),(0,h.jsx)(l.ZP,{container:!0,display:"flex",alignItems:"center",children:(0,h.jsx)(l.ZP,{item:!0,xs:12,justifyContent:"center",textAlign:"center",children:(0,h.jsx)(c.Z,{color:"secondary",sx:{p:".09rem"},children:(0,h.jsx)(O.Z,{size:"small",sx:{p:"6px",minHeight:"175px",maxHeight:"175px",width:"100%"},children:(0,h.jsxs)(_.Z,{children:[(0,h.jsxs)(G.Z,{children:[(0,h.jsx)(U.Z,{variant:"head",children:"Retail Price"}),(0,h.jsxs)(U.Z,{align:"right",children:["$ ",e.price," USD"]})]}),(0,h.jsx)(G.Z,{children:(0,h.jsxs)(U.Z,{variant:"head",colSpan:2,children:[(0,h.jsx)(A.Z,{id:"currency-select-label",children:"Currency"}),(0,h.jsxs)(E.Z,{labelId:"currency-select-label",id:"currency-select",value:e.currency||"",label:"Currency",onChange:function(t){a({type:"setCurrency",payload:{currency:t.target.value,item:e.id}})},variant:"standard",fullWidth:!0,children:[(0,h.jsx)(N.Z,{value:"BNB",children:"BNB"}),(0,h.jsx)(N.Z,{value:"BUSD",children:"BUSD"}),(0,h.jsx)(N.Z,{value:"USDC",children:"USDC"}),(0,h.jsx)(N.Z,{value:"USDT",children:"USDT"}),(0,h.jsx)(N.Z,{value:"WIN",children:"WIN"}),(0,h.jsx)(N.Z,{value:"RKL",children:"RKL"})]})]})}),e.currency&&(0,h.jsx)(G.Z,{children:(0,h.jsxs)(U.Z,{colSpan:2,children:["0.000000000000000000 ",e.currency]})})]})})})})})]}),(0,h.jsx)(I.Z,{children:(0,h.jsxs)(l.ZP,{container:!0,display:"flex",alignItems:"center",children:[e.showShare&&(0,h.jsxs)(l.ZP,{item:!0,xs:12,textAlign:"center",children:["http://shop.winston.services/?productId=",e.id]}),(0,h.jsxs)(l.ZP,{item:!0,xs:12,children:[(0,h.jsx)(B.Z,{"aria-label":"add to favorites",onClick:function(){-1!==n.favorites.indexOf(e.id)?a({type:"removeFromFavorites",payload:e.id}):a({type:"addToFavorites",payload:e.id})},children:(0,h.jsx)(F.Z,{sx:{color:-1!==n.favorites.indexOf(e.id)?"red":"white"}})}),(0,h.jsx)(B.Z,{"aria-label":"share",onClick:function(){a({type:"setShowShare",payload:e.id})},children:(0,h.jsx)(H.Z,{})}),(0,h.jsx)(B.Z,{"aria-label":"add-to-cart",onClick:function(){-1!==n.cartItems.indexOf(e.id)?a({type:"removeFromCart",payload:e.id}):a({type:"addToCart",payload:e.id})},children:(0,h.jsx)(L.Z,{sx:{color:-1!==n.cartItems.indexOf(e.id)?"#e454c4":"white"}})}),(0,h.jsx)(B.Z,{"aria-label":"add-to-wishlist",onClick:function(){-1!==n.wishlist.indexOf(e.id)?a({type:"removeFromWishList",payload:e.id}):a({type:"addToWishList",payload:e.id})},children:(0,h.jsx)(R.Z,{sx:{color:-1!==n.wishlist.indexOf(e.id)?"#e97793":"white"}})}),(0,h.jsx)("span",{style:{float:"right"},children:(0,h.jsx)(te,{expand:e.expanded,onClick:function(){a({type:"setExpanded",payload:{item:e.id,expanded:e.expanded}})},"aria-expanded":e.expanded,"aria-label":"show more",children:(0,h.jsx)(T.Z,{})})})]})]})}),(0,h.jsx)(P.Z,{in:e.expanded,timeout:"auto",unmountOnExit:!0,children:(0,h.jsxs)(k.Z,{sx:{borderRadius:"3px",minHeight:"400px",maxHeight:"400px",overflowX:"hidden",overflowY:"thin",padding:"0px",scrollbarColor:"red !important",webkitScrollbar:{width:"8px"},webkitScrollbarTrack:{backgroundColor:"red !important",borderRadius:"5px"},webkitScrollbarThumb:{width:"5px",backgroundColor:"green"}},m:2,component:r.Z,color:"secondary",children:[re(n,e,a),(0,h.jsx)(l.ZP,{item:!0,xs:12,sx:{marginBottom:"6px",p:"8px",borderRadius:"6px"},children:(0,h.jsx)(o.Z,{paragraph:!0,children:e.description})}),ae(e)]})})]})}function re(e,t,n){return(0,h.jsxs)(l.ZP,{align:"center",sx:{p:"6px",marginBottom:"6px"},children:[(0,h.jsx)(d.Z,{color:"info",variant:"outlined",onClick:function(){-1!==e.cartItems.indexOf(t.id)?n({type:"removeFromCart",payload:t.id}):n({type:"addToCart",payload:t.id})},children:-1!==e.cartItems.indexOf(t.id)?"Remove From Cart":"Add To Cart"})," ",(0,h.jsx)(d.Z,{color:"success",variant:"outlined",children:"Buy Now"})]})}function ae(e){return(0,h.jsx)(l.ZP,{item:!0,xs:12,sx:{marginBottom:"6px",m:"8px",borderRadius:"0px 0px 6px 6px",backgroundColor:"#a266e3"},children:(0,h.jsx)(Q,{overview:e.overview,reviews:e.reviews,manufactures:e.manufactures})})}function se(e){return(0,h.jsx)(l.ZP,{container:!0,display:"flex",alignItems:"center",children:(0,h.jsx)(l.ZP,{item:!0,xs:12,sx:{maxHeight:"115px",overflow:"hidden",marginY:".25rem",paddingX:"8px"},children:e.tags.map((function(e){return(0,h.jsx)(ne,{children:e},e)}))})})}var le=n(5225),oe=n(2411),ce=[{key:"Category",value:"Category"},{key:"Sports Gear",value:"Sports Gear"},{key:"Houseware",value:"Houseware"},{key:"Clothing",value:"Clothing"},{key:"Electronics",value:"Electronics"}],de=[{key:"Subcategory",value:"Subcategory"},{key:"Water Bottles",value:"Water Bottles"},{key:"Blankets",value:"Blankets"},{key:"T-Shirts",value:"T-Shirts"},{key:"Beenie's",value:"Beenie's"}],xe={Filter:{Select:[{value:"Category",placeholder:"Category",id:"Category-filter",options:[].concat(ce)},{value:"Subcategory",placeholder:"Subcategory",id:"subcategory-filter",options:[].concat(de)}]},Sort:{Select:[{value:"Category",placeholder:"Category",id:"Category-sort",options:[].concat(ce)},{value:"Subcategory",placeholder:"Subcategory",id:"subcategory-sort",options:[].concat(de)}]}};function he(){var e=i.useContext(f.h),t=e.state,n=e.dispatch,o=function(e,n){console.log(e,n),xe[t.page.options].Select[e].value=n};return(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)(r.Z,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",minHeight:"100%",children:(0,h.jsx)(a.Z,{})}),children:(0,h.jsxs)(s.Z,{children:[(0,h.jsx)(l.ZP,{container:!0,display:"flex",spacing:1,children:(0,h.jsx)(l.ZP,{item:!0,xs:12,children:(0,h.jsx)(r.Z,{margin:2,children:(0,h.jsx)(c.Z,{color:"secondary",sx:{p:".15rem",width:"100%"},elevation:6,children:(0,h.jsx)(r.Z,{margin:.75,children:(0,h.jsxs)(l.ZP,{item:!0,xs:12,children:[(0,h.jsx)(d.Z,{onClick:function(){n({type:"togglePageOptionsBar",payload:"Filter"===t.page.options?"Sort":"Filter"})},children:t.page.options}),"  ",(0,h.jsx)(E.Z,{sx:{marginRight:"8px",marginLeft:"16px"},defaultValue:xe[t.page.options].Select[0].value,placeholder:xe[t.page.options].Select[0].placeholder,onChange:function(e){return o(0,e.target.value)},id:xe[t.page.options].Select[0].id,variant:"outlined",children:xe[t.page.options].Select[0].options.map((function(e){return(0,h.jsx)(N.Z,{value:e.value,children:e.key},t.page.options+"_"+e.key)}))}),(0,h.jsx)(E.Z,{sx:{marginX:"8px"},defaultValue:xe[t.page.options].Select[1].value,placeholder:xe[t.page.options].Select[1].placeholder,onChange:function(e){return o(1,e.target.value)},id:xe[t.page.options].Select[1].id,variant:"outlined",children:xe[t.page.options].Select[1].options.map((function(e){return(0,h.jsx)(N.Z,{value:e.value,children:e.key},t.page.options+"_"+e.key)}))}),(0,h.jsx)(le.Z,{sx:{marginX:"8px"},name:"Tags",placeholder:"Tags ie: sports",variant:"outlined"}),(0,h.jsx)(le.Z,{sx:{marginX:"8px"},name:"Search",placeholder:"Search ie: Winston Winter Fleece",variant:"outlined"}),(0,h.jsx)(B.Z,{size:"large",children:(0,h.jsx)(oe.Z,{children:"close"})}),0!==t.cartItems.length&&(0,h.jsx)("span",{style:{float:"right",marginTop:"6px"},children:(0,h.jsx)(B.Z,{size:"large",children:(0,h.jsx)(oe.Z,{children:"shopping_cart"})})})]})})})})})}),(0,h.jsx)(l.ZP,{container:!0,display:"flex",spacing:1,children:t.items.map((function(e){return(0,h.jsx)(l.ZP,{item:!0,xs:12,md:4,children:(0,h.jsx)(c.Z,{color:"secondary",sx:{p:".15rem"},children:(0,h.jsx)(ie,(0,v.Z)({},e))})},e.id)}))})]})})}var pe=n(8415),ue=x.Z.productList;function je(){var e=i.useContext(f.h),t=e.state,n=e.dispatch;i.useEffect((function(){var e=Promise.resolve({data:ue});t.isLoading&&e.then((function(e){return e.data})).then((function(e){n({type:"setItems",payload:e}),n({type:"setIsLoading",payload:!1})})).catch((function(e){console.log(e)}))}),[t.isLoading,n]);var x="Winston Water Bottles",v="While on the go this sports water bottle is sure to help you when your thurst hits, just fill it with your favorite bevereages.",b="Sports Gear",w="Water Bottles",C=function(e){var t=e.product[0];return console.log(t),(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)(r.Z,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",minHeight:"100%",children:(0,h.jsx)(a.Z,{})}),children:(0,h.jsx)(s.Z,{sx:{mt:"100px"},children:(0,h.jsxs)(l.ZP,{container:!0,display:"flex",justifyContent:"center",alignItems:"center",spacing:2,children:[(0,h.jsx)(l.ZP,{item:!0,md:4,textAlign:"center",alignItems:"center",children:t.images[0]?(0,h.jsxs)(i.Fragment,{children:[(0,h.jsx)(o.Z,{variant:"h4",mt:0,children:x}),(0,h.jsx)(c.Z,{sx:{padding:"6px"},elevation:6,children:(0,h.jsx)("img",{src:t.images[0].src,alt:"Product #",width:350,height:350,style:{paddingTop:"4px"}})}),(0,h.jsx)(d.Z,{variant:"contained",color:"secondary",sx:{mt:"30px"},children:"Add To Cart"}),(0,h.jsx)(d.Z,{variant:"contained",color:"secondary",sx:{mt:"30px"},children:"Continue Shopping"})]}):(0,h.jsx)(pe.Z,{animation:"wave",variant:"rounded",width:350,height:350})}),(0,h.jsxs)(l.ZP,{item:!0,md:8,children:[(0,h.jsxs)(o.Z,{variant:"h4",sx:function(e){return{color:e.palette.secondary.contrastText}},children:[(0,h.jsxs)("span",{style:{textDecorationThickness:".01rem",textDecorationLine:"underline",textDecorationStyle:"wavy"},children:[b," "]}),(0,h.jsx)("span",{style:{marginLeft:"16px"},children:(0,h.jsx)("small",{children:w})})]}),(0,h.jsx)(o.Z,{variant:"h4",mt:2,children:v}),(0,h.jsx)(l.ZP,{container:!0,spacing:3})]})]})})})},S={0:(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)(r.Z,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",minHeight:"100%",children:(0,h.jsx)(a.Z,{})}),children:(0,h.jsx)(p,{})}),1:(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)(r.Z,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",minHeight:"100%",children:(0,h.jsx)(a.Z,{})}),children:(0,h.jsx)(p,{})}),2:(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)(r.Z,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",minHeight:"100%",children:(0,h.jsx)(a.Z,{})}),children:(0,h.jsx)(u,{})}),3:(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)(r.Z,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",minHeight:"100%",children:(0,h.jsx)(a.Z,{})}),children:(0,h.jsx)(j,{})}),4:(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)(r.Z,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",minHeight:"100%",children:(0,h.jsx)(a.Z,{})}),children:(0,h.jsx)(g,{})}),5:(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)(r.Z,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",minHeight:"100%",children:(0,h.jsx)(a.Z,{})}),children:(0,h.jsx)(m,{})}),6:(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)(r.Z,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",minHeight:"100%",children:(0,h.jsx)(a.Z,{})}),children:(0,h.jsx)(y,{})}),7:(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)(r.Z,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",minHeight:"100%",children:(0,h.jsx)(a.Z,{})}),children:(0,h.jsx)(Z,{})})};return t.showCheckoutStep?S[t.showCheckoutStep]:t.showItemGridDisplay?(0,h.jsx)(he,{}):(0,h.jsx)(C,{product:t.showProductDisplayItem})}}}]);
//# sourceMappingURL=552.a7273edb.chunk.js.map