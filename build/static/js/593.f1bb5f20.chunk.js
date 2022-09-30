"use strict";(self.webpackChunkwinston_shopping_cart=self.webpackChunkwinston_shopping_cart||[]).push([[593],{5240:function(e,r,i){i.d(r,{Z:function(){return K}});var t=i(9562),n=i(4718),a=i(9859),o=i(5714),s=i(3269),d=i(5801),l=i(686),c=i(1343),u=i(5834),x=i(2913),m=i(8602),p=i(260),h=i(4261),f=i(1063),v=i(6627),Z=i(1517),j=i(6623),y=i(1964),g=i(6859),b=i(3507),w=i(7410),C=i(7758),S=i(337),P=i(9032),I=i(8581),k=i(5421),D=i(862),R=i(8316),B=i(1776),N=i(1310),T=i(8670),_=i(176),U=i(429),O=i(4058),L=i(4273),W=["children","value","index"];function E(e){var r=e.children,i=e.value,a=e.index,o=(0,n.Z)(e,W);return(0,L.jsx)("div",(0,t.Z)((0,t.Z)({role:"tabpanel",hidden:i!==a,id:"full-width-tabpanel-".concat(a),"aria-labelledby":"full-width-tab-".concat(a)},o),{},{children:i===a&&(0,L.jsx)(C.Z,{sx:{p:3},children:r})}))}function M(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var A=function(e){return(0,L.jsx)(d.ZP,{item:!0,xs:12,sx:{m:".25rem"},children:(0,L.jsxs)(u.Z,{elevation:3,sx:{p:".25rem"},children:[(0,L.jsx)("a",{href:"mailto:".concat(e.review.commenterEmail),children:e.review.commenterName||"User"}),(0,L.jsxs)(v.Z,{variant:"subtitle2",children:[Array(e.review.rating).fill("\ud83c\udf1f").join(""),(0,L.jsxs)("span",{style:{float:"right"},children:[e.review.rating," Stars"]})]}),(0,L.jsxs)(v.Z,{children:["\ud83d\udde3\ufe0f",e.review.comment]})]})})};function F(e){var r=(0,T.Z)(),i=a.useState(0),n=(0,N.Z)(i,2),o=n[0],s=n[1];return(0,L.jsxs)(C.Z,{sx:{bgcolor:"background.paper"},children:[(0,L.jsx)(_.Z,{position:"static",children:(0,L.jsxs)(U.Z,{value:o,onChange:function(e,r){s(r)},indicatorColor:"secondary",textColor:"inherit",variant:"fullWidth","aria-label":"full width tabs example",children:[(0,L.jsx)(O.Z,(0,t.Z)({label:"Product Overview"},M(0))),(0,L.jsx)(O.Z,(0,t.Z)({label:"Product Information"},M(1))),(0,L.jsx)(O.Z,(0,t.Z)({label:"Product Reviews"},M(2)))]})}),(0,L.jsx)(E,{value:o,index:0,dir:r.direction,children:(0,L.jsx)(v.Z,{component:"subtitle1",children:e.overview})}),(0,L.jsx)(E,{value:o,index:1,dir:r.direction,children:"Product Information"}),(0,L.jsx)(E,{value:o,index:2,dir:r.direction,children:(0,L.jsxs)(d.ZP,{container:!0,display:"block",children:[(0,L.jsx)(d.ZP,{item:!0,sm:12,children:(0,L.jsx)(v.Z,{component:"subtitle1",children:"Reviews"})}),e.reviews.map((function(e,r){return(0,L.jsx)(A,{review:e},"review-".concat(r))}))]})})]})}var q=i(8176),H=["expand"],V=(0,o.ZP)((function(e){e.expand;var r=(0,n.Z)(e,H);return(0,L.jsx)(f.Z,(0,t.Z)({},r))}))((function(e){var r=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:r.transitions.create("transform",{duration:r.transitions.duration.shortest})}}));function J(e){var r=e.children;return(0,L.jsx)(C.Z,{color:"text.secondary",sx:{margin:".05rem",paddingX:".15rem",marginY:"1.75rem",display:"inline"},children:r})}function K(e){var r=a.useContext(q.h),i=r.state,t=r.dispatch;return(0,L.jsxs)(l.Z,{sx:{borderRadius:"6px",width:"100%"},children:[(0,L.jsx)(c.Z,{sx:{paddingBottom:"10px"},avatar:(0,L.jsx)(h.Z,{sx:{bgcolor:"transparent",padding:"1rem",width:"56px",height:"56px"},"aria-label":"category_brand_logo",children:(0,L.jsx)("img",{src:e.thumbnail,width:"42px",alt:"Product Thumbnail"})}),action:e.admin?(0,L.jsx)(f.Z,{"aria-label":"manage",children:(0,L.jsx)(g.Z,{})}):null,title:(0,L.jsx)(v.Z,{variant:"h5",color:"text.secondary",sx:{cursor:"pointer",fontWeight:"800"},onClick:function(){t({type:"showProductItemDisplay",payload:{item:e.id,showItemGridDisplay:!i.showItemGridDisplay}})},children:e.title}),subheader:(0,L.jsx)(d.ZP,{container:!0,display:"flex",children:(0,L.jsxs)(d.ZP,{item:!0,xs:12,children:[(0,L.jsx)(v.Z,{variant:"title",color:"text.secondary",sx:{textDecoration:"underline dotted #a166e5",fontWeight:"600"},children:e.category}),(0,L.jsx)(v.Z,{variant:"subtitle2",color:"text.secondary",sx:{p:1,textDecoration:"underline dotted #b96dc9",fontWeight:"500"},children:e.subcategory})]})})}),(0,L.jsxs)(x.Z,{sx:{paddingY:"3px",paddingX:"16px"},children:[(0,L.jsx)(d.ZP,{container:!0,alignItems:"center",children:(0,L.jsx)(d.ZP,{item:!0,xs:12,textAlign:"center",children:(0,L.jsx)(u.Z,{color:"secondary",sx:{p:2},align:"center",elevation:3,children:(0,L.jsx)("img",{src:e.images[0].src,width:"190px",height:"193.15px",alt:e.images[0].alt})})})}),(0,L.jsx)(d.ZP,{container:!0,display:"flex",alignItems:"center",children:(0,L.jsxs)(d.ZP,{item:!0,xs:12,sx:{minHeight:"115px",maxHeight:"115px",overflow:"hidden",marginY:".25rem"},children:[e.tags.map((function(e){return(0,L.jsx)(J,{children:e},e)})),(0,L.jsx)(v.Z,{variant:"body2",color:"text.secondary",sx:{p:1},children:e.shortDescription})]})}),(0,L.jsx)(d.ZP,{container:!0,display:"flex",alignItems:"center",children:(0,L.jsx)(d.ZP,{item:!0,xs:12,textAlign:"center",children:(0,L.jsx)(u.Z,{color:"secondary",sx:{p:".09rem"},children:(0,L.jsx)(S.Z,{size:"small",sx:{p:"6px",minHeight:"175px",maxHeight:"175px"},children:(0,L.jsxs)(P.Z,{children:[(0,L.jsxs)(I.Z,{children:[(0,L.jsx)(k.Z,{variant:"head",children:"Retail Price"}),(0,L.jsxs)(k.Z,{align:"right",children:["$ ",e.price," USD"]})]}),(0,L.jsxs)(I.Z,{children:[(0,L.jsxs)(k.Z,{variant:"head",children:[(0,L.jsx)(D.Z,{id:"currency-select-label",children:"Currency"}),(0,L.jsxs)(R.Z,{labelId:"currency-select-label",id:"currency-select",value:e.currency||"",label:"Currency",onChange:function(r){t({type:"setCurrency",payload:{currency:r.target.value,item:e.id}})},variant:"standard",fullWidth:!0,children:[(0,L.jsx)(B.Z,{value:"BNB",children:"BNB"}),(0,L.jsx)(B.Z,{value:"BUSD",children:"BUSD"}),(0,L.jsx)(B.Z,{value:"USDC",children:"USDC"}),(0,L.jsx)(B.Z,{value:"USDT",children:"USDT"}),(0,L.jsx)(B.Z,{value:"WIN",children:"WIN"}),(0,L.jsx)(B.Z,{value:"RKL",children:"RKL"})]})]}),(0,L.jsxs)(k.Z,{children:[e.currency?"0.000000000000000000":"Select A Currency"," ",e.currency]})]})]})})})})})]}),(0,L.jsx)(m.Z,{children:(0,L.jsxs)(d.ZP,{container:!0,display:"flex",alignItems:"center",children:[e.showShare&&(0,L.jsxs)(d.ZP,{item:!0,xs:12,textAlign:"center",children:["http://shop.winston.services/?productId=",e.id]}),(0,L.jsxs)(d.ZP,{item:!0,xs:12,children:[(0,L.jsx)(f.Z,{"aria-label":"add to favorites",onClick:function(){-1!==i.favorites.indexOf(e.id)?t({type:"removeFromFavorites",payload:e.id}):t({type:"addToFavorites",payload:e.id})},children:(0,L.jsx)(Z.Z,{sx:{color:-1!==i.favorites.indexOf(e.id)?"red":"white"}})}),(0,L.jsx)(f.Z,{"aria-label":"share",onClick:function(){t({type:"setShowShare",payload:e.id})},children:(0,L.jsx)(j.Z,{})}),(0,L.jsx)(f.Z,{"aria-label":"add-to-cart",onClick:function(){-1!==i.cartItems.indexOf(e.id)?t({type:"removeFromCart",payload:e.id}):t({type:"addToCart",payload:e.id})},children:(0,L.jsx)(b.Z,{sx:{color:-1!==i.cartItems.indexOf(e.id)?"#e454c4":"white"}})}),(0,L.jsx)(f.Z,{"aria-label":"add-to-wishlist",onClick:function(){-1!==i.wishlist.indexOf(e.id)?t({type:"removeFromWishList",payload:e.id}):t({type:"addToWishList",payload:e.id})},children:(0,L.jsx)(w.Z,{sx:{color:-1!==i.wishlist.indexOf(e.id)?"#e97793":"white"}})}),(0,L.jsx)("span",{style:{float:"right"},children:(0,L.jsx)(V,{expand:e.expanded,onClick:function(){t({type:"setExpanded",payload:{item:e.id,expanded:e.expanded}})},"aria-expanded":e.expanded,"aria-label":"show more",children:(0,L.jsx)(y.Z,{})})})]})]})}),(0,L.jsx)(p.Z,{in:e.expanded,timeout:"auto",unmountOnExit:!0,children:(0,L.jsxs)(x.Z,{sx:{borderRadius:"3px",minHeight:"400px",maxHeight:"400px",overflowX:"hidden",overflowY:"thin",padding:"0px",scrollbarColor:"red !important",webkitScrollbar:{width:"8px"},webkitScrollbarTrack:{backgroundColor:"red !important",borderRadius:"5px"},webkitScrollbarThumb:{width:"5px",backgroundColor:"green"}},m:2,component:C.Z,color:"secondary",children:[(0,L.jsxs)(d.ZP,{align:"center",sx:{p:"6px",marginBottom:"6px"},children:[(0,L.jsx)(s.Z,{color:"info",variant:"outlined",onClick:function(){-1!==i.cartItems.indexOf(e.id)?t({type:"removeFromCart",payload:e.id}):t({type:"addToCart",payload:e.id})},children:-1!==i.cartItems.indexOf(e.id)?"Remove From Cart":"Add To Cart"})," ",(0,L.jsx)(s.Z,{color:"success",variant:"outlined",children:"Buy Now"})]}),(0,L.jsx)(d.ZP,{item:!0,xs:12,sx:{marginBottom:"6px",p:"8px",borderRadius:"6px"},children:(0,L.jsx)(v.Z,{paragraph:!0,children:e.description})}),(0,L.jsx)(d.ZP,{item:!0,xs:12,sx:{marginBottom:"6px",m:"8px",borderRadius:"0px 0px 6px 6px",backgroundColor:"#a266e3"},children:(0,L.jsx)(F,{overview:e.overview,reviews:e.reviews,manufactures:e.manufactures})})]})})]})}},593:function(e,r,i){i.r(r),i.d(r,{default:function(){return g}});var t,n=i(9562),a=(i(993),i(1310)),o=(i(7394),i(9859)),s=i(9099),d=i(5801),l=i(5834),c=(i(39),i(9611),new Uint8Array(16));function u(){if(!t&&!(t="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(c)}var x=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var m=function(e){return"string"===typeof e&&x.test(e)},p=[],h=0;h<256;++h)p.push((h+256).toString(16).substr(1));var f=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=(p[e[r+0]]+p[e[r+1]]+p[e[r+2]]+p[e[r+3]]+"-"+p[e[r+4]]+p[e[r+5]]+"-"+p[e[r+6]]+p[e[r+7]]+"-"+p[e[r+8]]+p[e[r+9]]+"-"+p[e[r+10]]+p[e[r+11]]+p[e[r+12]]+p[e[r+13]]+p[e[r+14]]+p[e[r+15]]).toLowerCase();if(!m(i))throw TypeError("Stringified UUID is invalid");return i};var v=function(e,r,i){var t=(e=e||{}).random||(e.rng||u)();if(t[6]=15&t[6]|64,t[8]=63&t[8]|128,r){i=i||0;for(var n=0;n<16;++n)r[i+n]=t[n];return r}return f(t)},Z=i(5240),j=i(8306),y=i(4273);function g(){var e=(0,o.useState)(""),r=(0,a.Z)(e,2),i=(r[0],r[1],(0,o.useState)("")),t=(0,a.Z)(i,2),c=(t[0],t[1],(0,o.useState)(!1)),u=(0,a.Z)(c,2),x=(u[0],u[1],(0,o.useState)("")),m=(0,a.Z)(x,2);m[0],m[1];var p=new Set,h=function e(){var r=v();return p.has(r)?e():(p.add(r),r)},f=[{id:h(),title:"Membership Role",shortDescription:"Get a yearly membership role.",description:"Purchase your members role for the rickle server and link your account to get the role. This is a yearly membership and does not auto renew.",downloadable:!0,thumbnail:j,images:[{src:j,alt:"Winston Services Placeholder"}],category:"Subscriptions",subcategory:"Membership",overview:"Consequat culpa voluptate Lorem dolore aliquip sit pariatur. In do tempor reprehenderit sint excepteur labore est duis cillum. Do excepteur anim dolore ad nostrud fugiat mollit nisi. Occaecat deserunt consequat minim minim Lorem magna ex laborum reprehenderit nulla irure cillum. Deserunt excepteur sit enim fugiat exercitation ullamco elit tempor qui nulla cillum. Minim laboris pariatur eiusmod et enim incididunt occaecat cupidatat sint reprehenderit qui. Est incididunt ex dolor in enim fugiat proident pariatur officia aliquip duis.",reviews:[{comment:"Love the rewards",commenterName:"Jane Mary",commenterEmail:"",rating:5},{comment:"Love the rewards",commenterName:"Jane Mary",commenterEmail:"",rating:3},{comment:"Can't get it to work.",commenterName:"Jane Mary",commenterEmail:"",rating:1},{comment:"Love the rewards",commenterName:"Jane Mary",commenterEmail:"",rating:5}],tags:["subscriptions","membership","rickle"],shipsFrom:{address_1:"",address_2:"",address_3:"",address_4:""},manufactures:[{name:"",address_1:"",address_2:"",address_3:"",address_4:""}],attributes:[{}],options:[{isDefault:!0,name:"Duration",type:"ChooseOne",options:[{name:"Annual Members Role",value:"annual",label:"Annual Membership",acceptCurrencies:["USDC","BNB","WBNB","BUSD","RICKLE","WINSTON"],price:"1.00",priceInUSD:"1.00"},{name:"Trial Members Role",value:"trial",label:"Trial Membership",acceptCurrencies:["RICKLE","WINSTON"],price:"1.60",priceInUSD:"1.60"}]}]}];return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(s.Z,{sx:{mt:"100px"},children:(0,y.jsx)(d.ZP,{container:!0,display:"flex",justifyContent:"center",children:Array(12).fill(f[0]).map((function(e){return e.id=h(),e})).map((function(e){return(0,y.jsx)(d.ZP,{item:!0,sm:12,md:4,children:(0,y.jsx)(l.Z,{color:"secondary",sx:{p:".25rem"},children:(0,y.jsx)(Z.Z,(0,n.Z)({handleCartMethods:function(){return{method_1:function(){},method_2:function(){}}}},e))})},e.id)}))})})})}}}]);
//# sourceMappingURL=593.f1bb5f20.chunk.js.map