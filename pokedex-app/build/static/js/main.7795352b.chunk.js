(this["webpackJsonppokedex-app"]=this["webpackJsonppokedex-app"]||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),i=n(54),s=n.n(i),o=n(24),l=n(15),d=n(134),j=n(135),b=function(){return Object(r.jsxs)(d.a,{as:"nav",isInline:!0,alignItems:"center",height:12,justifyContent:{base:"center",md:"space-between"},bg:"black",children:[Object(r.jsx)(d.a,{isInline:!0,children:Object(r.jsx)(j.a,{colorScheme:"gray.50",variant:"solid",as:o.b,to:"/home",children:"PokedexApp"})}),Object(r.jsxs)(d.a,{isInline:!0,spacing:2,mr:2,display:{base:"none",md:"flex"},children:[Object(r.jsx)(j.a,{size:"sm",color:"white",bg:"grass",_hover:{color:"black",opacity:.8},as:o.b,to:"/okedex",children:"Pokedex"}),Object(r.jsx)(j.a,{size:"sm",color:"white",bg:"poison",_hover:{color:"black",opacity:.8},as:o.b,to:"/combination",children:"Type Weaks"}),Object(r.jsx)(j.a,{size:"sm",color:"white",bg:"water",_hover:{color:"black",opacity:.8},as:o.b,to:"/search",children:"Search Pokemon"})]})]})},h=n(117),g=function(e){e.textcolor,e.position;return Object(r.jsxs)(h.a,{textAlign:"center",textColor:"white",children:[" PokdexApp  Copyright \xa9 ",Object(r.jsx)(o.b,{to:"/",onClick:function(){return window.open("https://juanmaportfolio.netlify.app/")},children:"Juan Manuel Ibarzabal Salles"})," ",(new Date).getFullYear(),"."]})},u=function(){return Object(r.jsx)(d.a,{isInline:!0,textAlign:"center",justify:"center",bg:"black",paddingY:4,children:Object(r.jsx)(g,{})})},p=n(4),x=n(16),f=n(119),O=n(136),m=n(140),y=n(139),w=n(138),k=n(32),v=n(52),C=n(123),z=n(130),T=n(17),S=n.n(T),I=n(11),_=n(38),W=n(25),A=function(){var e=Object(W.a)(S.a.mark((function e(t){var n,r,a,c,i,s,o,l,d,j,b,h,g,u,p,x;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://pokeapi.co/api/v2/move/".concat(t),e.next=3,fetch(r);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,i=c.accuracy,s=c.damage_class,o=c.name,l=c.priority,d=c.flavor_text_entries,j=c.effect_entries,b=c.effect_chance,h=c.pp,g=c.power,u=c.target,p=c.type,x=s.name,e.abrupt("return",{accuracy:i,dataClass:x,name:o,description:null===(n=d.filter((function(e){return"en"===e.language.name&&"heartgold"===e.version_group.name||"en"===e.language.name&&"emerald"===e.version_group.name||"en"===e.language.name&&"x-y"===e.version_group.name||"en"===e.language.name&&"firered"===e.version_group.name||"en"===e.language.name&&"sword"===e.version_group.name}))[0])||void 0===n?void 0:n.flavor_text,effect:j[0].short_effect,effect_chance:b,pp:h,power:g,priority:l,target:u.name,type:p.name});case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y={bug:{bug:1,dark:1,dragon:1,electric:1,fairy:1,fighting:.5,fire:2,flying:2,ghost:1,grass:.5,ground:.5,ice:1,normal:1,poison:1,psychic:1,rock:2,steel:1,water:1},dark:{bug:2,dark:.5,dragon:1,electric:1,fairy:2,fighting:2,fire:1,flying:1,ghost:.5,grass:1,ground:1,ice:1,normal:1,poison:1,psychic:0,rock:1,steel:1,water:1},dragon:{bug:1,dark:1,dragon:2,electric:.5,fairy:2,fighting:1,fire:.5,flying:1,ghost:1,grass:.5,ground:1,ice:2,normal:1,poison:1,psychic:1,rock:1,steel:1,water:.5},electric:{bug:1,dark:1,dragon:1,electric:.5,fairy:1,fighting:1,fire:1,flying:.5,ghost:1,grass:1,ground:2,ice:1,normal:1,poison:1,psychic:1,rock:1,steel:.5,water:1},fairy:{bug:.5,dark:.5,dragon:0,electric:1,fairy:1,fighting:.5,fire:1,flying:1,ghost:1,grass:1,ground:1,ice:1,normal:1,poison:2,psychic:1,rock:1,steel:2,water:1},fighting:{bug:.5,dark:.5,dragon:1,electric:1,fairy:2,fighting:1,fire:1,flying:2,ghost:1,grass:1,ground:1,ice:1,normal:1,poison:1,psychic:2,rock:.5,steel:1,water:1},fire:{bug:.5,dark:1,dragon:1,electric:1,fairy:.5,fighting:1,fire:.5,flying:1,ghost:1,grass:.5,ground:2,ice:.5,normal:1,poison:1,psychic:1,rock:2,steel:.5,water:2},flying:{bug:.5,dark:1,dragon:1,electric:2,fairy:1,fighting:.5,fire:1,flying:1,ghost:1,grass:.5,ground:0,ice:2,normal:1,poison:1,psychic:1,rock:2,steel:1,water:1},ghost:{bug:.5,dark:2,dragon:1,electric:1,fairy:1,fighting:0,fire:1,flying:1,ghost:2,grass:1,ground:1,ice:1,normal:0,poison:.5,psychic:1,rock:1,steel:1,water:1},grass:{bug:2,dark:1,dragon:1,electric:.5,fairy:1,fighting:1,fire:2,flying:2,ghost:1,grass:.5,ground:.5,ice:2,normal:1,poison:2,psychic:1,rock:1,steel:1,water:.5},ground:{bug:1,dark:1,dragon:1,electric:0,fairy:1,fighting:1,fire:1,flying:1,ghost:1,grass:2,ground:1,ice:2,normal:1,poison:.5,psychic:1,rock:.5,steel:1,water:2},ice:{bug:1,dark:1,dragon:1,electric:1,fairy:1,fighting:2,fire:2,flying:1,ghost:1,grass:1,ground:1,ice:.5,normal:1,poison:1,psychic:1,rock:2,steel:2,water:1},normal:{bug:1,dark:1,dragon:1,electric:1,fairy:1,fighting:2,fire:1,flying:1,ghost:0,grass:1,ground:1,ice:1,normal:1,poison:1,psychic:1,rock:1,steel:1,water:1},poison:{bug:.5,dark:1,dragon:1,electric:1,fairy:.5,fighting:.5,fire:1,flying:1,ghost:1,grass:.5,ground:2,ice:1,normal:1,poison:.5,psychic:2,rock:1,steel:1,water:1},psychic:{bug:2,dark:2,dragon:1,electric:1,fairy:1,fighting:.5,fire:1,flying:1,ghost:2,grass:1,ground:1,ice:1,normal:1,poison:1,psychic:.5,rock:1,steel:1,water:1},rock:{bug:1,dark:1,dragon:1,electric:1,fairy:1,fighting:2,fire:.5,flying:.5,ghost:1,grass:2,ground:2,ice:1,normal:.5,poison:.5,psychic:1,rock:1,steel:2,water:2},steel:{bug:.5,dark:1,dragon:.5,electric:1,fairy:.5,fighting:2,fire:2,flying:.5,ghost:1,grass:.5,ground:2,ice:.5,normal:.5,poison:0,psychic:.5,rock:.5,steel:.5,water:1},water:{bug:1,dark:1,dragon:1,electric:2,fairy:1,fighting:1,fire:.5,flying:1,ghost:1,grass:2,ground:1,ice:.5,normal:1,poison:1,psychic:1,rock:1,steel:.5,water:.5}},F=function(e){var t={};return t=1===e.length?Y[e]:e.reduce((function(e,t){for(var n=0,r=Object.entries(Y[t]);n<r.length;n++){var a=Object(p.a)(r[n],2),c=a[0],i=a[1];e[c]||(e[c]=1),e[c]*=i}return e}),{}),Object.entries(t).reduce((function(e,t){var n=Object(p.a)(t,2),r=n[0],a=n[1];return e[a]?(e[a].push(r),e):Object(_.a)(Object(_.a)({},e),{},Object(I.a)({},a,[].concat(r)))}),{})},R=function(){var e=Object(W.a)(S.a.mark((function e(t){var n,r,a,c,i,s,o,l,d,j,b,h,g,u;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,a=r.abilities,c=r.height,i=r.moves,s=r.name,o=r.species,l=r.stats,d=r.types,j=r.weight,b=d.map((function(e){return e.type.name})),h=i.filter((function(e){return e.version_group_details.find((function(e){return"ultra-sun-ultra-moon"===e.version_group.name}))})),e.next=18,Promise.all(h.map((function(e){var t=e.move;return A(t.name)})));case 18:return g=e.sent,e.next=21,P(o.url);case 21:return u=e.sent,e.abrupt("return",Object(_.a)(Object(_.a)({},u),{},{abilities:a.map((function(e){return e.ability.name})),height:c/10,id:t,image:"https://pokeres.bastionbot.org/images/pokemon/".concat(t,".png"),moves:g,name:s,stats:l.reduce((function(e,t){return Object(_.a)(Object(_.a)({},e),{},Object(I.a)({},t.stat.name,t.base_stat))}),{}),totalStats:l.reduce((function(e,t){return e+t.base_stat}),0),types:b,weaknesses:F(b),weight:j/10}));case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(W.a)(S.a.mark((function e(t){var n,r,a,c,i,s,o,l;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,a=r.egg_groups,c=r.gender_rate,i=r.genera,s=r.generation,o=r.flavor_text_entries,l=r.hatch_counter,e.abrupt("return",{eggs:a.map((function(e){return e.name})),gen:s.name,gender:c,genera:i.find((function(e){return"en"===e.language.name})).genus,description:o.filter((function(e){return"en"===e.language.name&&"heartgold"===e.version.name||"en"===e.language.name&&"emerald"===e.version.name||"en"===e.language.name&&"firered"===e.version.name||"en"===e.language.name&&"sword"===e.version.name})),hatch:l});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=n(118),D=n(51),E=function(e){var t=e.abilities,n=e.eggs,a=e.gen,c=e.genera,i=e.gender,s=e.hatch,o=e.height,l=e.weight,j=100*(8-i)/8,b=100*i/8;return Object(r.jsxs)(d.a,{spacing:3,children:[Object(r.jsx)(B.a,{as:"table",width:"100%",children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)(h.a,{as:"td",color:"gray.500",paddingY:1,width:"40%",textTransform:"capitalize",children:"Species"}),Object(r.jsx)(h.a,{as:"td",paddingY:1,width:"60%",fontWeight:"bold",children:c})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)(h.a,{as:"td",color:"gray.500",paddingY:1,width:"40%",textTransform:"capitalize",children:"Height"}),Object(r.jsx)(h.a,{as:"td",paddingY:1,width:"60%",fontWeight:"bold",children:" ".concat(o," m")})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)(h.a,{as:"td",color:"gray.500",paddingY:1,width:"40%",textTransform:"capitalize",children:"weight"}),Object(r.jsx)(h.a,{as:"td",paddingY:1,width:"60%",fontWeight:"bold",children:"".concat(l," kg")})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)(h.a,{as:"td",color:"gray.500",paddingY:1,width:"40%",textTransform:"capitalize",children:"abilities"}),Object(r.jsx)(h.a,{as:"td",paddingY:1,width:"60%",fontWeight:"bold",textTransform:"capitalize",children:t.map((function(e){return"".concat(e," ")}))})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)(h.a,{as:"td",color:"gray.500",paddingY:1,width:"40%",textTransform:"capitalize",children:"first appearance"}),Object(r.jsx)(h.a,{as:"td",paddingY:1,width:"60%",fontWeight:"bold",textTransform:"capitalize",children:a})]})]})}),Object(r.jsx)(f.a,{size:"md",children:"Breeding"}),Object(r.jsx)(B.a,{as:"table",children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)(h.a,{as:"td",color:"gray.500",paddingY:1,width:"40%",textTransform:"capitalize",children:"Gender"}),Object(r.jsx)(d.a,{as:"td",isInline:!0,paddingY:1,spacing:2,width:"60%",fontWeight:"bold",textTransform:"capitalize",children:i<0?Object(r.jsx)(h.a,{children:"Null"}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(d.a,{isInline:!0,alignItems:"center",children:[Object(r.jsx)(v.a,{as:D.b,color:"blue.500",w:6,h:6}),Object(r.jsxs)(h.a,{children:[j,"%"]})]}),Object(r.jsxs)(d.a,{isInline:!0,alignItems:"center",children:[Object(r.jsx)(v.a,{as:D.c,color:"pink.500",w:6,h:6}),Object(r.jsxs)(h.a,{children:[b,"%"]})]})]})})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)(h.a,{as:"td",color:"gray.500",paddingY:1,width:"40%",textTransform:"capitalize",children:"Egg Groups"}),Object(r.jsx)(h.a,{as:"td",paddingY:1,width:"60%",fontWeight:"bold",textTransform:"capitalize",children:n.map((function(e){return"".concat(e," ")}))})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)(h.a,{as:"td",color:"gray.500",paddingY:1,width:"40%",textTransform:"capitalize",children:"Hatch counter"}),Object(r.jsx)(h.a,{as:"td",paddingY:1,width:"60%",fontWeight:"bold",textTransform:"capitalize",children:"".concat(255*(s+1)," steps")})]})]})})]})},X=n(132),M=n(120),N=function(e){var t=e.stats,n=e.weaknesses,a=e.totalStats,c=function(e){switch(e){case"4":return"Very Weak x4";case"2":return"Weak x2";case"0.5":return"Not Effective x1/2";case"0.25":return"Strong Against x1/4";case"0":return"Immune x0 ";default:return"Error"}},i=function(e){return e<=50?"red":e<=100?"yellow":"green"};return Object(r.jsxs)(d.a,{children:[Object(r.jsx)(B.a,{as:"table",width:"100%",children:Object(r.jsxs)("tbody",{children:[Object.entries(t).map((function(e){var t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("tr",{children:[Object(r.jsx)(h.a,{as:"td",color:"gray.500",paddingY:1,width:"40%",textTransform:"capitalize",children:n}),Object(r.jsx)(h.a,{as:"td",paddingY:1,width:"15%",children:a}),Object(r.jsx)(B.a,{as:"td",paddingY:1,width:"45%",children:Object(r.jsx)(X.a,{colorScheme:i(a),size:"xs",value:a,max:200})})]},n)})),Object(r.jsxs)("tr",{children:[Object(r.jsx)(h.a,{as:"td",color:"gray.500",paddingY:1,width:"40%",textTransform:"capitalize",children:"Total"}),Object(r.jsx)(h.a,{as:"td",paddingY:1,width:"15%",children:a}),Object(r.jsx)(B.a,{as:"td",paddingY:1,width:"45%",children:Object(r.jsx)(X.a,{colorScheme:a>=400?"green":"red",size:"xs",value:a,max:750})})]})]})}),Object(r.jsx)(f.a,{size:"md",children:"Weaknesses"}),Object(r.jsx)(B.a,{as:"table",children:Object(r.jsx)("tbody",{children:function(e){return Object.entries(e).filter((function(e){var t=Object(p.a)(e,2),n=t[0];t[1];return n>1}))}(n).map((function(e){var t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("tr",{children:[Object(r.jsx)(h.a,{as:"td",width:"35%",children:c(n)}),Object(r.jsx)(B.a,{as:"td",width:"65%",children:a.map((function(e){return Object(r.jsx)(M.a,{background:e,borderRadius:9999,paddingX:2,marginX:1,children:e},e)}))})]},n)}))})}),Object(r.jsx)(f.a,{size:"md",children:"Resistance"}),Object(r.jsx)(B.a,{as:"table",children:Object(r.jsx)("tbody",{children:function(e){return Object.entries(e).filter((function(e){var t=Object(p.a)(e,2),n=t[0];t[1];return n<1}))}(n).map((function(e){var t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("tr",{children:[Object(r.jsx)(h.a,{as:"td",width:"35%",children:c(n)}),Object(r.jsx)(B.a,{as:"td",width:"65%",children:a.map((function(e){return Object(r.jsx)(M.a,{background:e,borderRadius:9999,paddingX:2,marginX:1,children:e},e)}))})]},n)}))})})]})},V=n(121),H=function(e){var t=e.description;return Object(r.jsx)(d.a,{children:Object(r.jsx)(V.a,{variant:"striped",colorScheme:"gray",width:"100%",children:Object(r.jsx)(V.b,{children:t.map((function(e,t){return Object(r.jsxs)(V.c,{children:[Object(r.jsx)(h.a,{as:"td",paddingY:4,align:"center",width:"40%",textTransform:"capitalize",fontWeight:"bold",children:e.version.name}),Object(r.jsx)(h.a,{as:"td",paddingY:4,align:"justify",children:e.flavor_text})]},t)}))})})})},J=function(e){var t=e.moves;return Object(r.jsxs)(V.a,{variant:"striped",colorScheme:"gray",children:[Object(r.jsx)("thead",{align:"center",children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"name"}),Object(r.jsx)("th",{children:"power"}),Object(r.jsx)("th",{children:"type"}),Object(r.jsx)("th",{children:"accuracy"}),Object(r.jsx)("th",{children:"class"})]})}),Object(r.jsx)(V.b,{children:t.map((function(e){return Object(r.jsxs)(V.c,{children:[Object(r.jsx)(h.a,{align:"center",textTransform:"capitalize",as:"td",children:e.name}),Object(r.jsx)(h.a,{align:"center",as:"td",children:e.power?e.power:"-"}),Object(r.jsx)(B.a,{as:"td",align:"center",justifyContent:"center",children:Object(r.jsx)(M.a,{bg:e.type,rounded:999,textAlign:"center",children:e.type})}),Object(r.jsx)(h.a,{align:"center",as:"td",children:e.accuracy?e.accuracy:"-"}),Object(r.jsx)(h.a,{align:"center",textTransform:"capitalize",as:"td",children:e.dataClass})]},e.name)}))})]})},q=function(e){var t=e.pokemon,n=t.types,c=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(p.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){R(e).then((function(e){return c({data:e,loading:!1})}))}),[e]),r}(t.id),i=c.data,s=c.loading;return Object(r.jsxs)(z.e,{variant:"unstyled",align:"center",children:[Object(r.jsxs)(z.b,{children:[Object(r.jsx)(z.a,{_selected:{color:n[0],borderBottom:"2px solid"},children:"About"}),Object(r.jsx)(z.a,{_selected:{color:n[0],borderBottom:"2px solid"},children:"Base Stats"}),Object(r.jsx)(z.a,{_selected:{color:n[0],borderBottom:"2px solid"},children:"Description"}),Object(r.jsx)(z.a,{_selected:{color:n[0],borderBottom:"2px solid"},children:"Moves"})]}),s?Object(r.jsx)(O.a,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:n[0],size:"xl"}):Object(r.jsxs)(z.d,{align:"start",paddingX:0,children:[Object(r.jsx)(z.c,{children:Object(r.jsx)(E,{abilities:i.abilities,eggs:i.eggs,gen:i.gen,genera:i.genera,gender:i.gender,hatch:i.hatch,height:i.height,weaknesses:i.weaknesses,weight:i.weight})}),Object(r.jsx)(z.c,{children:Object(r.jsx)(N,{stats:i.stats,totalStats:i.totalStats,weaknesses:i.weaknesses})}),Object(r.jsx)(z.c,{children:Object(r.jsx)(H,{description:i.description})}),Object(r.jsx)(z.c,{children:i.moves.length>0?Object(r.jsx)(J,{moves:i.moves}):Object(r.jsx)(h.a,{color:"crimson",align:"center",children:"No data from PokeApi"})})]})]})},G=function(e){var t=e.onClose,n=e.pokemon;return Object(r.jsx)(w.a,{isOpen:!0,placement:"right",onClose:t,size:"lg",children:Object(r.jsx)(k.c,{children:Object(r.jsxs)(w.b,{overflowY:"auto",children:[Object(r.jsxs)(d.a,{backgroundColor:"".concat(n.types[0]),color:"white",padding:6,spacing:6,children:[Object(r.jsxs)(d.a,{direction:"row",fontSize:"2xl",justify:"space-between",children:[Object(r.jsx)(C.a,{onClick:t,cursor:"pointer"}),Object(r.jsx)(v.a,{as:D.a,w:6,h:6})]}),Object(r.jsx)(d.a,{direction:"row",color:"white",children:Object(r.jsxs)(d.a,{width:"100%",children:[Object(r.jsxs)(d.a,{direction:"row",align:"baseline",justify:"space-between",children:[Object(r.jsx)(f.a,{textTransform:"capitalize",children:n.name}),Object(r.jsxs)(h.a,{fontWeight:600,children:["#",n.id.toString().padStart(3,"0")]})]}),Object(r.jsx)(d.a,{direction:"row",children:n.types.map((function(e){return Object(r.jsx)(h.a,{paddingX:2,paddingY:1,backgroundColor:"rgba(255,255,255,0.2)",borderRadius:9999,width:"fit-content",textTransform:"capitalize",children:e},e)}))}),Object(r.jsx)(y.a,{alignSelf:"center",height:256,marginBottom:-3,maxWidth:256,src:n.image,width:"100%",zIndex:20,className:"animate__animated animate__shakeX"})]})})]}),Object(r.jsx)(d.a,{backgroundColor:"white",borderRadius:24,marginTop:-16,padding:6,paddingTop:12,zIndex:10,children:Object(r.jsx)(q,{pokemon:n})})]})})})},L=function(e){var t=e.pokemon,n=Object(a.useState)(!1),c=Object(p.a)(n,2),i=c[0],s=c[1];return Object(r.jsxs)(d.a,{color:"white",backgroundColor:"".concat(t.types[0]),borderRadius:12,padding:3,onClick:function(){return s(!0)},cursor:"pointer",children:[Object(r.jsxs)(d.a,{direction:"row",align:"baseline",justifyContent:"space-between",children:[Object(r.jsx)(f.a,{textTransform:"capitalize",fontSize:"lg",children:t.name}),Object(r.jsxs)(h.a,{children:["#",t.id.toString().padStart(3,"0")]})]}),Object(r.jsxs)(d.a,{direction:"row",justifyContent:"space-between",children:[Object(r.jsx)(d.a,{children:t.types.map((function(e){return Object(r.jsx)(h.a,{paddingX:2,paddingY:1,backgroundColor:"rgba(255,255,255,0.2)",borderRadius:9999,width:"fit-content",children:e},e)}))}),Object(r.jsx)(y.a,{maxWidth:"100px",width:20,src:t.image})]}),i&&Object(r.jsx)(G,{pokemon:t,onClose:function(){return s(!1)}})]})},$="https://pokeapi.co/api/v2/pokemon",K=function(){var e=Object(W.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat($,"/").concat(t),e.next=3,fetch(n).then((function(e){return e.json()})).then((function(e){var t=e.id,n=e.types,r=e.sprites;return{name:e.name,image:null==r.other["official-artwork"].front_default?r.front_default:r.other["official-artwork"].front_default,id:t,types:n.map((function(e){return e.type.name}))}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(e){return fetch("".concat($,"/?offset=").concat(10*e,"}&limit=").concat(10)).then((function(e){return e.json()})).then((function(e){return Promise.all(e.results.map((function(e){return K(e.name)})))}))},U=function(e){return K(e)},Z=function(){var e=Object(a.useState)(0),t=Object(p.a)(e,2),n=t[0],c=t[1],i=function(e){var t=Object(a.useRef)(!0),n=Object(a.useState)({pokemons:[],loading:!0,error:null}),r=Object(p.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){return function(){t.current=!1}}),[]),Object(a.useEffect)((function(){i({pokemons:[],loading:!0,error:null}),Q(e).then((function(e){return i({pokemons:e,loading:!1})}))}),[e]),c}(n),s=i.pokemons,o=i.loading;return Object(r.jsxs)(d.a,{padding:5,bg:"gray.200",rounded:20,margin:10,children:[Object(r.jsx)(f.a,{fontSize:"4xl",alignSelf:"flex-start",children:"Pokedex"}),o?Object(r.jsx)(O.a,{alignSelf:"center",thickness:"4px",speed:"0.5s",emptyColor:"gray.200",color:"black",size:"xl"}):Object(r.jsx)(m.a,{gap:3,columns:2,children:null===s||void 0===s?void 0:s.map((function(e,t){return Object(r.jsx)(x.b.div,{animate:"visible",custom:t,initial:"hidden",variants:{hidden:{opacity:0,y:150},visible:function(e){return{opacity:1,y:0,transition:{delay:.05*e}}}},children:Object(r.jsx)(L,{pokemon:e})},e.name)}))}),Object(r.jsxs)(d.a,{isInline:!0,justify:"center",alignItems:"center",children:[n>0&&Object(r.jsx)(j.a,{bg:"primary",color:"white",_hover:{color:"black",background:"white",border:"1px"},onClick:function(){return c(n-1)},children:"Prev Page"}),[{name:"I",page:0},{name:"II",page:15},{name:"III",page:25},{name:"IV",page:38},{name:"V",page:49},{name:"VI",page:65},{name:"VII",page:72},{name:"VIII",page:81}].map((function(e){var t=e.name,n=e.page;return Object(r.jsx)(j.a,{size:"sm",onClick:function(){return c(n)},children:t},t)})),n<111&&Object(r.jsx)(j.a,{bg:"primary",color:"white",_hover:{color:"black",background:"white",border:"1px"},onClick:function(){return c(n+1)},children:"Next Page"})]})]})},ee=n(19),te=n(124),ne=n(125),re=n(131),ae=n(126),ce=n(27),ie=n.n(ce),se=function(e){var t=e.setPokemons,n=Object(a.useState)(""),c=Object(p.a)(n,2),i=c[0],s=c[1],o=Object(a.useState)(null),l=Object(p.a)(o,2),d=l[0],j=l[1],b=Object(a.useState)(!1),g=Object(p.a)(b,2),u=g[0],x=g[1],f=function(){var e=Object(W.a)(S.a.mark((function e(n){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),x(!0),j(null),r=i,!(i.trim().length>2)){e.next=9;break}return e.next=7,U(i.toLowerCase()).then((function(e){x(!1),t((function(t){return[e].concat(Object(ee.a)(t))})),s("")})).catch((function(e){x(!1),j("".concat(r," not found"))}));case 7:e.next=10;break;case 9:j("Pokemon name to short");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("form",{onSubmit:f,children:Object(r.jsxs)(te.a,{variant:"filled",children:[Object(r.jsx)(ne.a,{children:Object(r.jsx)(ae.a,{color:"black"}),onClick:f,cursor:"pointer"}),Object(r.jsx)(re.a,{placeholder:"Search Pok\xe9mon",type:"text",isInvalid:d,errorBorderColor:"crimson",value:i,onChange:function(e){s(e.target.value)}})]})}),d&&Object(r.jsx)(h.a,{textColor:"crimson",children:d}),u&&Object(r.jsx)(O.a,{thickness:"4px",speed:"0.65s",emptyColor:"blue.200",color:"black",size:"xl"})]})};se.propType={setPokemons:ie.a.func.isRequired};var oe=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)(d.a,{spacing:4,padding:10,children:[Object(r.jsx)(f.a,{textAlign:"center",children:"What Pokemon are you looking for?"}),Object(r.jsx)(se,{setPokemons:c}),n.length>0&&Object(r.jsx)(m.a,{columns:2,gap:3,borderRadius:20,bg:"gray.200",padding:2,children:n.map((function(e){return Object(r.jsx)(L,{pokemon:e})}))})]})},le=function(){return Object(r.jsxs)(m.a,{gap:3,columns:2,padding:3,margin:10,children:[Object(r.jsxs)(d.a,{align:"center",bg:"grass",borderRadius:20,height:16,isInline:!0,justifyContent:"space-between",overflow:"hidden",padding:3,_hover:{opacity:.8},as:o.b,to:"/pokedex",children:[Object(r.jsx)(h.a,{color:"white",children:"Pok\xe9dex"}),Object(r.jsx)(y.a,{marginRight:-7,opacity:"0.2",src:"../assets/ui/pokeball.svg",width:20})]}),Object(r.jsxs)(d.a,{align:"center",bg:"fire",height:16,overflow:"hidden",borderRadius:20,isInline:!0,justifyContent:"space-between",padding:3,_hover:{opacity:.8},as:o.b,to:"/moves",children:[Object(r.jsx)(h.a,{color:"white",children:"Moves"}),Object(r.jsx)(y.a,{marginRight:-7,opacity:"0.2",src:"../assets/ui/pokeball.svg",width:20})]}),Object(r.jsxs)(d.a,{align:"center",bg:"water",height:16,overflow:"hidden",borderRadius:20,isInline:!0,justifyContent:"space-between",padding:3,_hover:{opacity:.8},as:o.b,to:"/search",children:[Object(r.jsx)(h.a,{color:"white",children:"Search Pokemon"}),Object(r.jsx)(y.a,{marginRight:-7,opacity:"0.2",src:"../assets/ui/pokeball.svg",width:20})]}),Object(r.jsxs)(d.a,{align:"center",bg:"poison",height:16,overflow:"hidden",borderRadius:20,isInline:!0,justifyContent:"space-between",padding:3,_hover:{opacity:.8},as:o.b,to:"/combination",children:[Object(r.jsx)(h.a,{color:"white",children:"Types Weaks"}),Object(r.jsx)(y.a,{marginRight:-7,opacity:.2,src:"../assets/ui/pokeball.svg",width:20})]})]})},de=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(oe,{}),Object(r.jsx)(le,{}),Object(r.jsx)(Z,{})]})},je=function(e){var t=e.setMoves,n=Object(a.useState)(""),c=Object(p.a)(n,2),i=c[0],s=c[1],o=Object(a.useState)(null),l=Object(p.a)(o,2),d=l[0],j=l[1],b=Object(a.useState)(!1),g=Object(p.a)(b,2),u=g[0],x=g[1],f=function(){var e=Object(W.a)(S.a.mark((function e(n){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),x(!0),j(!1),r=i.replace(/ /g,"-").toLowerCase(),console.log(r),!(r.length>2)){e.next=10;break}return e.next=8,A(r).then((function(e){x(!1),t((function(t){return[e].concat(Object(ee.a)(t))})),s("")})).catch((function(e){x(!1),j("".concat(i," not found."))}));case 8:e.next=11;break;case 10:j("Move name to short");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("form",{onSubmit:f,children:Object(r.jsxs)(te.a,{variant:"filled",children:[Object(r.jsx)(ne.a,{children:Object(r.jsx)(ae.a,{color:"black"}),onClick:f,cursor:"pointer"}),Object(r.jsx)(re.a,{placeholder:"Search Move (example: Ember, Thunder, Rain-Dance, Swords-Dance etc)",type:"text",isInvalid:d,errorBorderColor:"crimson",value:i,onChange:function(e){s(e.target.value)}})]})}),d&&Object(r.jsx)(h.a,{textColor:"crimson",children:d}),u&&Object(r.jsx)(O.a,{thickness:"4px",speed:"0.65s",emptyColor:"blue.200",color:"black",size:"xl"})]})},be=je;je.propType={setMoves:ie.a.func.isRequired};var he=function(e){var t=e.move,n=t.accuracy,a=t.dataClass,c=t.description,i=t.name,s=t.pp,o=t.power,l=t.priority,j=t.effect_chance,b=t.effect,g=t.type;return Object(r.jsxs)(d.a,{bg:g,borderRadius:12,padding:3,spacing:6,children:[Object(r.jsxs)(d.a,{isInline:!0,justify:"space-between",alignItems:"center",children:[Object(r.jsx)(f.a,{color:"white",textTransform:"capitalize",fontSize:"xl",children:i}),Object(r.jsxs)(d.a,{isInline:!0,children:[Object(r.jsx)(y.a,{width:7,alt:a,filter:"brightness(0) invert(1)",src:"./assets/moveClass/".concat(a,".png")}),Object(r.jsx)(y.a,{width:7,alt:g,src:"./assets/pokemonTypes/".concat(g,".png")})]})]}),Object(r.jsxs)(d.a,{children:[Object(r.jsx)(f.a,{textTransform:"capitalize",fontSize:"md",children:"Description:"}),Object(r.jsx)(h.a,{children:c})]}),Object(r.jsxs)(d.a,{children:[Object(r.jsx)(f.a,{textTransform:"capitalize",fontSize:"md",children:"Effect:"}),Object(r.jsx)(h.a,{children:b.replace("$effect_chance",j)})]}),Object(r.jsxs)(d.a,{isInline:!0,alignItems:"baseline",justifyContent:"space-between",spacing:3,children:[Object(r.jsxs)(d.a,{justify:"center",textAlign:"center",children:[Object(r.jsx)(h.a,{textTransform:"capitalize",fontWeight:"bold",children:"Power"}),Object(r.jsx)(h.a,{textTransform:"capitalize",children:o||"-"})]}),Object(r.jsxs)(d.a,{justify:"center",textAlign:"center",children:[Object(r.jsx)(h.a,{textTransform:"capitalize",fontWeight:"bold",children:"accuracy"}),Object(r.jsx)(h.a,{textTransform:"capitalize",children:n?"".concat(n,"%"):"-"})]}),Object(r.jsxs)(d.a,{justify:"center",textAlign:"center",children:[Object(r.jsxs)(h.a,{textTransform:"upperCase",fontWeight:"bold",children:[" ","pp"]}),Object(r.jsx)(h.a,{textTransform:"capitalize",children:s})]}),Object(r.jsxs)(d.a,{justify:"center",textAlign:"center",children:[Object(r.jsx)(h.a,{textTransform:"capitalize",fontWeight:"bold",children:"priority"}),Object(r.jsx)(h.a,{textTransform:"capitalize",children:l})]}),Object(r.jsxs)(d.a,{justify:"center",textAlign:"center",children:[Object(r.jsx)(h.a,{textTransform:"capitalize",fontWeight:"bold",children:"Category"}),Object(r.jsx)(h.a,{textTransform:"capitalize",children:a})]})]})]})},ge=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)(d.a,{spacing:7,padding:10,bg:"gray.200",rounded:30,minH:"50vh",children:[Object(r.jsx)(f.a,{textAlign:"center",children:"What move are you looking for?"}),Object(r.jsx)(be,{setMoves:c}),Object(r.jsx)(m.a,{columns:2,gap:3,children:n.map((function(e,t){return Object(r.jsx)(he,{move:e},t)}))})]})},ue=function(){return Object(r.jsxs)(d.a,{bg:"blue.300",children:[Object(r.jsx)(d.a,{bg:"red.600",children:Object(r.jsx)(f.a,{textColor:"white",textAlign:"center",padding:3,children:"Pok\xe9mon Type Calculator"})}),Object(r.jsx)(d.a,{borderBottom:"3px solid",padding:1,children:Object(r.jsx)(h.a,{textAlign:"center",color:"white",children:"Choose Types and Calculate Weaknesses"})})]})},pe=n(127),xe=n(128),fe=function(e){var t=e.firstType,n=e.secondType,c=Object(a.useState)({}),i=Object(p.a)(c,2),s=i[0],o=i[1];Object(a.useEffect)((function(){o(F(null===n?[t]:[t,n]))}),[t,n]);var l=function(e){switch(e){case 4:return"Very Weak x4";case 2:return"Weak x2";case 1:return"Normal x1";case.5:return"Not Effective x1/2";case.25:return"Strong Against x1/4";case 0:return"Immune x0 ";default:return"Error"}};return Object(r.jsxs)(d.a,{spacing:10,children:[Object(r.jsx)(f.a,{textAlign:"center",children:"Weaks Combination:"}),Object(r.jsxs)(d.a,{isInline:!0,justify:"center",alignItems:"baseline",children:[Object(r.jsx)(pe.a,{align:"center",justifyContent:"center",bg:t,width:20,rounded:9999,height:20,children:Object(r.jsx)(h.a,{textTransform:"capitalize",fontWeight:"bold",children:t})}),n&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(pe.a,{justifyContent:"center",children:Object(r.jsx)(h.a,{fontSize:"2rem",fontWeight:"bold",children:"+"})}),Object(r.jsx)(pe.a,{align:"center",justifyContent:"center",width:20,rounded:9999,height:20,bg:n,children:Object(r.jsx)(h.a,{textTransform:"capitalize",fontWeight:"bold",children:n})})]})]}),Object(r.jsx)(d.a,{spacing:4,marginY:2,children:[4,2,1,.5,.25,0].map((function(e){return s[e]&&Object(r.jsxs)(d.a,{marginY:3,justifyItems:"center",alignItems:"center",children:[Object(r.jsx)(h.a,{textAlign:"center",fontWeight:"bold",children:l(e)}),Object(r.jsx)(pe.a,{direction:"row",w:"400px",wrap:"wrap",justifyContent:"center",children:s[e].map((function(e){return Object(r.jsx)(M.a,{rounded:999,maxW:"100px",w:"33%",margin:"8px",textAlign:"center",bg:e,children:Object(r.jsx)(h.a,{children:e})},e)}))})]},e)}))})]})},Oe=function(){var e=["bug","dark","dragon","electric","fairy","fighting","fire","flying","ghost","grass","ground","ice","normal","poison","psychic","rock","steel","water"],t=Object(a.useState)("bug"),n=Object(p.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(null),o=Object(p.a)(s,2),l=o[0],j=o[1];return Object(r.jsxs)(pe.a,{alignItems:"center",bg:"gray.100",borderRadius:8,direction:"row",justify:"center",margin:3,padding:4,wrap:"wrap",children:[Object(r.jsxs)(d.a,{w:{base:"100%",md:"50%"},spacing:10,children:[Object(r.jsxs)(d.a,{paddingX:2,spacing:3,alignItems:"center",children:[Object(r.jsx)(f.a,{textAlign:"center",children:"Choose 1\xb0 Type"}),Object(r.jsx)(pe.a,{direction:"row",w:"400px",wrap:"wrap",justifyContent:"center",children:e.map((function(e){return Object(r.jsxs)(xe.a,{bg:e,cursor:"pointer",margin:"8px",rounded:999,maxW:"100px",w:"33%",onClick:function(){return e!==l||j(null),i(e)},children:[Object(r.jsx)(y.a,{opacity:e!==c&&"0.2",maxWidth:"100px",width:4,src:"../assets/ui/pokeball.svg",ml:-1,mr:3}),Object(r.jsx)(xe.b,{textTransform:"capitalize",fontWeight:"bold",children:e})]},e)}))})]}),Object(r.jsxs)(d.a,{paddingX:2,spacing:3,alignItems:"center",children:[Object(r.jsx)(f.a,{textAlign:"center",children:"Choose 2\xb0 Type"}),Object(r.jsxs)(pe.a,{direction:"row",w:"400px",wrap:"wrap",justifyContent:"center",children:[e.map((function(e){return Object(r.jsxs)(xe.a,{bg:e,cursor:"pointer",margin:"8px",rounded:999,maxW:"100px",w:"33%",onClick:function(){return j(e!==c?e:null)},children:[Object(r.jsx)(y.a,{opacity:e!==l&&"0.2",maxWidth:"100px",width:4,src:"../assets/ui/pokeball.svg",ml:-1,mr:3}),Object(r.jsx)(xe.b,{textTransform:"capitalize",fontWeight:"bold",children:e})]},e)})),Object(r.jsxs)(xe.a,{bg:"grey",cursor:"pointer",margin:"8px",rounded:999,maxW:"100px",w:"33%",onClick:function(){return j(null)},children:[Object(r.jsx)(y.a,{opacity:null!==l&&"0.2",maxWidth:"100px",width:4,src:"../assets/ui/pokeball.svg",ml:-1,mr:3}),Object(r.jsx)(xe.b,{textTransform:"capitalize",fontWeight:"bold",children:"None"})]},"none")]})]})]}),Object(r.jsx)(B.a,{marginTop:{base:"4rem",md:"0px"},w:{base:"100%",md:"50%"},children:Object(r.jsx)(fe,{w:{base:"100%",md:"50%"},firstType:c,secondType:l})})]})},me=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ue,{}),Object(r.jsx)(Oe,{})]})},ye=function(){return Object(r.jsx)(o.a,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)(b,{}),Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{exact:!0,path:"/search",children:Object(r.jsx)(oe,{})}),Object(r.jsx)(l.a,{exact:!0,path:"/moves",children:Object(r.jsx)(ge,{})}),Object(r.jsx)(l.a,{exact:!0,path:"/combination",children:Object(r.jsx)(me,{})}),Object(r.jsx)(l.a,{exact:!0,path:"/pokedex",children:Object(r.jsx)(Z,{})}),Object(r.jsx)(l.a,{path:"/",children:Object(r.jsx)(de,{})})]}),Object(r.jsx)(u,{})]})})},we=function(){return Object(r.jsx)(ye,{})},ke=n(133),ve=n(129),Ce=Object(ve.a)({colors:{grass:"#47CFAF",fire:"#FB6D6C",water:"#74BDFD",dragon:"#8774FF",normal:"#BDBDAE",bug:"#C1D11F",poison:"#AA5DA1",electric:"#FEE63C",ground:"#d3b54a",psychic:"#F562B1",fighting:"#A75545",fairy:"#FAADFF",rock:"#CEBD72",ghost:"#7A76D8",ice:"#96F1FF",steel:"#C4C2DB",flying:"#7AA1FF",dark:"#8A6653",primary:"#ff0050",secondary:"#2667ff"},shadows:{outline:"0"}});s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(ke.a,{resetCSS:!0,theme:Ce,children:Object(r.jsx)(we,{})})}),document.getElementById("root"))}},[[103,1,2]]]);
//# sourceMappingURL=main.7795352b.chunk.js.map