(this["webpackJsonppokedex-app"]=this["webpackJsonppokedex-app"]||[]).push([[0],{107:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),i=n(50),s=n.n(i),o=n(89),l=n(16),d=n(4),j=n(18),b=n(138),g=n(121),h=n(140),u=n(127),p=n(143),x=n(120),f=n(142),m=n(141),O=n(32),y=n(53),w=n(126),k=n(52),v=n(134),C=n(20),S=n.n(C),z=n(9),I=n(40),T=n(29),_=function(){var e=Object(T.a)(S.a.mark((function e(t){var n,r,a,c,i,s,o,l,d,j,b,g,h,u,p,x;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://pokeapi.co/api/v2/move/".concat(t,"/"),e.next=3,fetch(r);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,i=c.accuracy,s=c.damage_class,o=c.name,l=c.priority,d=c.flavor_text_entries,j=c.effect_entries,b=c.effect_chance,g=c.pp,h=c.power,u=c.target,p=c.type,x=s.name,e.abrupt("return",{accuracy:i,dataClass:x,name:o,description:null===(n=d.filter((function(e){return"en"===e.language.name&&"heartgold"===e.version_group.name||"en"===e.language.name&&"emerald"===e.version_group.name||"en"===e.language.name&&"x-y"===e.version_group.name||"en"===e.language.name&&"firered"===e.version_group.name||"en"===e.language.name&&"sword"===e.version_group.name}))[0])||void 0===n?void 0:n.flavor_text,effect:j[0].short_effect,effect_chance:b,pp:g,power:h,priority:l,target:u.name,type:p.name});case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A={bug:{bug:1,dark:1,dragon:1,electric:1,fairy:1,fighting:.5,fire:2,flying:2,ghost:1,grass:.5,ground:.5,ice:1,normal:1,poison:1,psychic:1,rock:2,steel:1,water:1},dark:{bug:2,dark:.5,dragon:1,electric:1,fairy:2,fighting:2,fire:1,flying:1,ghost:.5,grass:1,ground:1,ice:1,normal:1,poison:1,psychic:0,rock:1,steel:1,water:1},dragon:{bug:1,dark:1,dragon:2,electric:.5,fairy:2,fighting:1,fire:.5,flying:1,ghost:1,grass:.5,ground:1,ice:2,normal:1,poison:1,psychic:1,rock:1,steel:1,water:.5},electric:{bug:1,dark:1,dragon:1,electric:.5,fairy:1,fighting:1,fire:1,flying:.5,ghost:1,grass:1,ground:2,ice:1,normal:1,poison:1,psychic:1,rock:1,steel:.5,water:1},fairy:{bug:.5,dark:.5,dragon:0,electric:1,fairy:1,fighting:.5,fire:1,flying:1,ghost:1,grass:1,ground:1,ice:1,normal:1,poison:2,psychic:1,rock:1,steel:2,water:1},fighting:{bug:.5,dark:.5,dragon:1,electric:1,fairy:2,fighting:1,fire:1,flying:2,ghost:1,grass:1,ground:1,ice:1,normal:1,poison:1,psychic:2,rock:.5,steel:1,water:1},fire:{bug:.5,dark:1,dragon:1,electric:1,fairy:.5,fighting:1,fire:.5,flying:1,ghost:1,grass:.5,ground:2,ice:.5,normal:1,poison:1,psychic:1,rock:2,steel:.5,water:2},flying:{bug:.5,dark:1,dragon:1,electric:2,fairy:1,fighting:.5,fire:1,flying:1,ghost:1,grass:.5,ground:0,ice:2,normal:1,poison:1,psychic:1,rock:2,steel:1,water:1},ghost:{bug:.5,dark:2,dragon:1,electric:1,fairy:1,fighting:0,fire:1,flying:1,ghost:2,grass:1,ground:1,ice:1,normal:0,poison:.5,psychic:1,rock:1,steel:1,water:1},grass:{bug:2,dark:1,dragon:1,electric:.5,fairy:1,fighting:1,fire:2,flying:2,ghost:1,grass:.5,ground:.5,ice:2,normal:1,poison:2,psychic:1,rock:1,steel:1,water:.5},ground:{bug:1,dark:1,dragon:1,electric:0,fairy:1,fighting:1,fire:1,flying:1,ghost:1,grass:2,ground:1,ice:2,normal:1,poison:.5,psychic:1,rock:.5,steel:1,water:2},ice:{bug:1,dark:1,dragon:1,electric:1,fairy:1,fighting:2,fire:2,flying:1,ghost:1,grass:1,ground:1,ice:.5,normal:1,poison:1,psychic:1,rock:2,steel:2,water:1},normal:{bug:1,dark:1,dragon:1,electric:1,fairy:1,fighting:2,fire:1,flying:1,ghost:0,grass:1,ground:1,ice:1,normal:1,poison:1,psychic:1,rock:1,steel:1,water:1},poison:{bug:.5,dark:1,dragon:1,electric:1,fairy:.5,fighting:.5,fire:1,flying:1,ghost:1,grass:.5,ground:2,ice:1,normal:1,poison:.5,psychic:2,rock:1,steel:1,water:1},psychic:{bug:2,dark:2,dragon:1,electric:1,fairy:1,fighting:.5,fire:1,flying:1,ghost:2,grass:1,ground:1,ice:1,normal:1,poison:1,psychic:.5,rock:1,steel:1,water:1},rock:{bug:1,dark:1,dragon:1,electric:1,fairy:1,fighting:2,fire:.5,flying:.5,ghost:1,grass:2,ground:2,ice:1,normal:.5,poison:.5,psychic:1,rock:1,steel:2,water:2},steel:{bug:.5,dark:1,dragon:.5,electric:1,fairy:.5,fighting:2,fire:2,flying:.5,ghost:1,grass:.5,ground:2,ice:.5,normal:.5,poison:0,psychic:.5,rock:.5,steel:.5,water:1},water:{bug:1,dark:1,dragon:1,electric:2,fairy:1,fighting:1,fire:.5,flying:1,ghost:1,grass:2,ground:1,ice:.5,normal:1,poison:1,psychic:1,rock:1,steel:.5,water:.5}},W=function(e){var t={};return t=1===e.length?A[e]:e.reduce((function(e,t){for(var n=0,r=Object.entries(A[t]);n<r.length;n++){var a=Object(d.a)(r[n],2),c=a[0],i=a[1];e[c]||(e[c]=1),e[c]*=i}return e}),{}),Object.entries(t).reduce((function(e,t){var n=Object(d.a)(t,2),r=n[0],a=n[1];return e[a]?(e[a].push(r),e):Object(I.a)(Object(I.a)({},e),{},Object(z.a)({},a,[].concat(r)))}),{})},Y=function(){var e=Object(T.a)(S.a.mark((function e(t){var n,r,a,c,i,s,o,l,d,j,b,g,h,u;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,a=r.abilities,c=r.height,i=r.moves,s=r.name,o=r.species,l=r.stats,d=r.types,j=r.weight,b=d.map((function(e){return e.type.name})),g=i.filter((function(e){return e.version_group_details.find((function(e){return"ultra-sun-ultra-moon"===e.version_group.name}))})),e.next=18,Promise.all(g.map((function(e){var t=e.move;return _(t.name)})));case 18:return h=e.sent,e.next=21,P(o.url);case 21:return u=e.sent,e.abrupt("return",Object(I.a)(Object(I.a)({},u),{},{abilities:a.map((function(e){return e.ability.name})),height:c/10,id:t,image:"https://pokeres.bastionbot.org/images/pokemon/".concat(t,".png"),moves:h,name:s,stats:l.reduce((function(e,t){return Object(I.a)(Object(I.a)({},e),{},Object(z.a)({},t.stat.name,t.base_stat))}),{}),totalStats:l.reduce((function(e,t){return e+t.base_stat}),0),types:b,weaknesses:W(b),weight:j/10}));case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(T.a)(S.a.mark((function e(t){var n,r,a,c,i,s,o,l;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,a=r.egg_groups,c=r.gender_rate,i=r.genera,s=r.generation,o=r.flavor_text_entries,l=r.hatch_counter,e.abrupt("return",{eggs:a.map((function(e){return e.name})),gen:s.name,gender:c,genera:i.find((function(e){return"en"===e.language.name})).genus,description:o.filter((function(e){return"en"===e.language.name&&"heartgold"===e.version.name||"en"===e.language.name&&"emerald"===e.version.name||"en"===e.language.name&&"firered"===e.version.name||"en"===e.language.name&&"sword"===e.version.name})),hatch:l});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=n(119),F=function(e){var t=e.abilities,n=e.eggs,a=e.gen,c=e.genera,i=e.gender,s=e.hatch,o=e.height,l=e.weight,d=100*(8-i)/8,j=100*i/8;return Object(r.jsxs)(b.a,{spacing:3,children:[Object(r.jsx)(E.a,{as:"table",width:"100%",children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)(x.a,{as:"td",color:"gray.500",paddingY:1,width:"40%",textTransform:"capitalize",children:"Species"}),Object(r.jsx)(x.a,{as:"td",paddingY:1,width:"60%",fontWeight:"bold",children:c})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)(x.a,{as:"td",color:"gray.500",paddingY:1,width:"40%",textTransform:"capitalize",children:"Height"}),Object(r.jsx)(x.a,{as:"td",paddingY:1,width:"60%",fontWeight:"bold",children:" ".concat(o," m")})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)(x.a,{as:"td",color:"gray.500",paddingY:1,width:"40%",textTransform:"capitalize",children:"weight"}),Object(r.jsx)(x.a,{as:"td",paddingY:1,width:"60%",fontWeight:"bold",children:"".concat(l," kg")})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)(x.a,{as:"td",color:"gray.500",paddingY:1,width:"40%",textTransform:"capitalize",children:"abilities"}),Object(r.jsx)(x.a,{as:"td",paddingY:1,width:"60%",fontWeight:"bold",textTransform:"capitalize",children:t.map((function(e){return"".concat(e," ")}))})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)(x.a,{as:"td",color:"gray.500",paddingY:1,width:"40%",textTransform:"capitalize",children:"first appearance"}),Object(r.jsx)(x.a,{as:"td",paddingY:1,width:"60%",fontWeight:"bold",textTransform:"capitalize",children:a})]})]})}),Object(r.jsx)(g.a,{size:"md",textAlign:"start",children:"Breeding"}),Object(r.jsx)(E.a,{as:"table",children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)(x.a,{as:"td",color:"gray.500",paddingY:1,width:"40%",textTransform:"capitalize",children:"Gender"}),Object(r.jsx)(b.a,{as:"td",isInline:!0,paddingY:1,spacing:2,width:"60%",fontWeight:"bold",textTransform:"capitalize",children:i<0?Object(r.jsx)(x.a,{children:"Null"}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(b.a,{isInline:!0,alignItems:"center",children:[Object(r.jsx)(y.a,{as:k.b,color:"blue.500",w:6,h:6}),Object(r.jsxs)(x.a,{children:[d,"%"]})]}),Object(r.jsxs)(b.a,{isInline:!0,alignItems:"center",children:[Object(r.jsx)(y.a,{as:k.c,color:"pink.500",w:6,h:6}),Object(r.jsxs)(x.a,{children:[j,"%"]})]})]})})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)(x.a,{as:"td",color:"gray.500",paddingY:1,width:"40%",textTransform:"capitalize",children:"Egg Groups"}),Object(r.jsx)(x.a,{as:"td",paddingY:1,width:"60%",fontWeight:"bold",textTransform:"capitalize",children:n.map((function(e){return"".concat(e," ")}))})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)(x.a,{as:"td",color:"gray.500",paddingY:1,width:"40%",textTransform:"capitalize",children:"Hatch counter"}),Object(r.jsx)(x.a,{as:"td",paddingY:1,width:"60%",fontWeight:"bold",textTransform:"capitalize",children:"".concat(255*(s+1)," steps")})]})]})})]})},R=n(136),B=n(122),G=function(e){var t=e.stats,n=e.weaknesses,a=e.totalStats,c=function(e){switch(e){case"4":return"Very Weak x4";case"2":return"Weak x2";case"0.5":return"Not Effective x1/2";case"0.25":return"Strong Against x1/4";case"0":return"Immune x0 ";default:return"Error"}},i=function(e){return e<=50?"red":e<=100?"yellow":"green"};return Object(r.jsxs)(b.a,{spacing:4,children:[Object(r.jsx)(E.a,{as:"table",width:"100%",children:Object(r.jsxs)("tbody",{children:[Object.entries(t).map((function(e){var t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("tr",{children:[Object(r.jsx)(x.a,{as:"td",color:"gray.500",paddingY:1,width:"40%",textTransform:"capitalize",children:n}),Object(r.jsx)(x.a,{as:"td",paddingY:1,width:"15%",children:a}),Object(r.jsx)(E.a,{as:"td",paddingY:1,width:"45%",children:Object(r.jsx)(R.a,{colorScheme:i(a),size:"xs",value:a,max:200})})]},n)})),Object(r.jsxs)("tr",{children:[Object(r.jsx)(x.a,{as:"td",color:"gray.500",paddingY:1,width:"40%",textTransform:"capitalize",children:"Total"}),Object(r.jsx)(x.a,{as:"td",paddingY:1,width:"15%",children:a}),Object(r.jsx)(E.a,{as:"td",paddingY:1,width:"45%",children:Object(r.jsx)(R.a,{colorScheme:a>=400?"green":"red",size:"xs",value:a,max:750})})]})]})}),Object(r.jsx)(g.a,{size:"md",textAlign:"start",children:"Weaknesses"}),Object(r.jsx)(E.a,{as:"table",children:Object(r.jsx)("tbody",{children:function(e){return Object.entries(e).filter((function(e){var t=Object(d.a)(e,2),n=t[0];t[1];return n>1}))}(n).map((function(e){var t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("tr",{children:[Object(r.jsx)(x.a,{as:"td",width:"35%",children:c(n)}),Object(r.jsx)(E.a,{as:"td",width:"65%",children:a.map((function(e){return Object(r.jsx)(B.a,{background:e,borderRadius:9999,paddingX:2,marginX:1,children:e},e)}))})]},n)}))})}),Object(r.jsx)(g.a,{size:"md",textAlign:"start",children:"Resistance"}),Object(r.jsx)(E.a,{as:"table",children:Object(r.jsx)("tbody",{children:function(e){return Object.entries(e).filter((function(e){var t=Object(d.a)(e,2),n=t[0];t[1];return n<1}))}(n).map((function(e){var t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("tr",{children:[Object(r.jsx)(x.a,{as:"td",width:"35%",children:c(n)}),Object(r.jsx)(E.a,{as:"td",width:"65%",children:a.map((function(e){return Object(r.jsx)(B.a,{background:e,borderRadius:9999,paddingX:2,marginX:1,children:e},e)}))})]},n)}))})})]})},D=n(123),N=function(e){var t=e.description;return Object(r.jsx)(b.a,{children:Object(r.jsx)(D.a,{variant:"striped",colorScheme:"gray",width:"100%",children:Object(r.jsx)(D.b,{children:t.map((function(e,t){return Object(r.jsxs)(D.c,{children:[Object(r.jsx)(x.a,{as:"td",paddingY:4,align:"center",width:"40%",textTransform:"capitalize",fontWeight:"bold",children:e.version.name}),Object(r.jsx)(x.a,{as:"td",paddingY:4,align:"justify",children:e.flavor_text})]},t)}))})})})},M=function(e){var t=e.moves;return Object(r.jsxs)(D.a,{variant:"striped",colorScheme:"gray",w:"100%",children:[Object(r.jsx)("thead",{align:"center",children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"name"}),Object(r.jsx)("th",{children:"power"}),Object(r.jsx)("th",{children:"type"}),Object(r.jsx)("th",{children:"accuracy"}),Object(r.jsx)("th",{children:"class"})]})}),Object(r.jsx)(D.b,{children:t.map((function(e){return Object(r.jsxs)(D.c,{children:[Object(r.jsx)(x.a,{align:"center",textTransform:"capitalize",as:"td",children:e.name}),Object(r.jsx)(x.a,{align:"center",as:"td",children:e.power?e.power:"-"}),Object(r.jsx)(E.a,{as:"td",align:"center",justifyContent:"center",children:Object(r.jsx)(B.a,{bg:e.type,rounded:999,textAlign:"center",children:e.type})}),Object(r.jsx)(x.a,{align:"center",as:"td",children:e.accuracy?e.accuracy:"-"}),Object(r.jsx)(x.a,{align:"center",textTransform:"capitalize",as:"td",children:e.dataClass})]},e.name)}))})]})},V=function(e){var t=e.pokemon,n=t.types,c=function(e){var t=Object(a.useRef)(!0),n=Object(a.useState)({data:[],loading:!0}),r=Object(d.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){return function(){t.current=!1}}),[]),Object(a.useEffect)((function(){Y(e).then((function(e){t.current&&i({data:e,loading:!1})}))}),[e]),c}(t.id),i=c.data,s=c.loading;return Object(r.jsxs)(v.e,{variant:"unstyled",align:"center",children:[Object(r.jsxs)(v.b,{children:[Object(r.jsx)(v.a,{_selected:{color:n[0],borderBottom:"2px solid"},children:"About"}),Object(r.jsx)(v.a,{_selected:{color:n[0],borderBottom:"2px solid"},children:"Base Stats"}),Object(r.jsx)(v.a,{_selected:{color:n[0],borderBottom:"2px solid"},children:"Description"}),Object(r.jsx)(v.a,{_selected:{color:n[0],borderBottom:"2px solid"},children:"Moves"})]}),s?Object(r.jsx)(h.a,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:n[0],size:"xl"}):Object(r.jsxs)(v.d,{align:"center",children:[Object(r.jsx)(v.c,{children:Object(r.jsx)(F,{abilities:i.abilities,eggs:i.eggs,gen:i.gen,genera:i.genera,gender:i.gender,hatch:i.hatch,height:i.height,weaknesses:i.weaknesses,weight:i.weight})}),Object(r.jsx)(v.c,{children:Object(r.jsx)(G,{stats:i.stats,totalStats:i.totalStats,weaknesses:i.weaknesses})}),Object(r.jsx)(v.c,{children:Object(r.jsx)(N,{description:i.description})}),Object(r.jsx)(v.c,{paddingX:2,children:i.moves.length>0?Object(r.jsx)(M,{moves:i.moves}):Object(r.jsx)(x.a,{color:"crimson",align:"center",children:"No data from PokeApi"})})]})]})},X=function(e){var t=e.onClose,n=e.pokemon;return Object(r.jsx)(m.a,{isOpen:!0,placement:"right",onClose:t,size:"lg",children:Object(r.jsx)(O.c,{children:Object(r.jsxs)(m.b,{overflowY:"auto",children:[Object(r.jsxs)(b.a,{backgroundColor:"".concat(n.types[0]),color:"white",padding:6,spacing:6,children:[Object(r.jsxs)(b.a,{direction:"row",fontSize:"2xl",justify:"space-between",children:[Object(r.jsx)(w.a,{onClick:t,cursor:"pointer"}),Object(r.jsx)(y.a,{as:k.a,w:6,h:6})]}),Object(r.jsx)(b.a,{direction:"row",color:"white",children:Object(r.jsxs)(b.a,{width:"100%",children:[Object(r.jsxs)(b.a,{direction:"row",align:"baseline",justify:"space-between",children:[Object(r.jsx)(g.a,{textTransform:"capitalize",children:n.name}),Object(r.jsxs)(x.a,{fontWeight:600,children:["#",n.id.toString().padStart(3,"0")]})]}),Object(r.jsx)(b.a,{direction:"row",children:n.types.map((function(e){return Object(r.jsx)(x.a,{paddingX:2,paddingY:1,backgroundColor:"rgba(255,255,255,0.2)",borderRadius:9999,width:"fit-content",textTransform:"capitalize",children:e},e)}))}),Object(r.jsx)(f.a,{alignSelf:"center",height:256,marginBottom:-3,maxWidth:256,src:n.image,width:"100%",zIndex:20,className:"animate__animated animate__shakeX"})]})})]}),Object(r.jsx)(b.a,{backgroundColor:"white",borderRadius:24,marginTop:-16,padding:6,paddingTop:12,zIndex:10,children:Object(r.jsx)(V,{pokemon:n})})]})})})},U=function(e){var t=e.pokemon,n=Object(a.useState)(!1),c=Object(d.a)(n,2),i=c[0],s=c[1];return Object(r.jsxs)(b.a,{color:"white",backgroundColor:"".concat(t.types[0]),borderRadius:12,padding:2,onClick:function(){return s(!0)},cursor:"pointer",children:[Object(r.jsxs)(b.a,{direction:"row",align:"baseline",justifyContent:"space-between",children:[Object(r.jsx)(g.a,{textTransform:"capitalize",fontSize:"lg",children:t.name}),Object(r.jsxs)(x.a,{children:["#",t.id.toString().padStart(3,"0")]})]}),Object(r.jsxs)(b.a,{direction:"row",justifyContent:"space-between",children:[Object(r.jsx)(b.a,{children:t.types.map((function(e){return Object(r.jsx)(x.a,{paddingX:2,paddingY:1,backgroundColor:"rgba(255,255,255,0.2)",borderRadius:9999,width:"fit-content",children:e},e)}))}),Object(r.jsx)(f.a,{maxWidth:"100px",width:20,alt:t.name,src:t.image})]}),i&&Object(r.jsx)(X,{pokemon:t,onClose:function(){return s(!1)}})]})},q="https://pokeapi.co/api/v2/pokemon",L=function(){var e=Object(T.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(q,"/").concat(t),e.next=3,fetch(n).then((function(e){return e.json()})).then((function(e){var t=e.id,n=e.types,r=e.sprites;return{name:e.name,image:r.other["official-artwork"].front_default,id:t,types:n.map((function(e){return e.type.name}))}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(e){return fetch("".concat(q,"/?offset=").concat(10*e,"}&limit=").concat(10)).then((function(e){return e.json()})).then((function(e){return Promise.all(e.results.map((function(e){return L(e.name)})))}))},H=function(e){return L(e)},$=function(e){var t=e.componentPathName,n=Object(l.g)().pathname,a=Object(l.f)();return t===n&&Object(r.jsx)(w.a,{alignSelf:"start","aria-label":"go home",as:"button",cursor:"pointer",height:{base:6,md:8},width:{base:6,md:8},onClick:function(){a.push("/home")}})},K=function(){var e=Object(a.useState)(0),t=Object(d.a)(e,2),n=t[0],c=t[1],i=function(e){var t=Object(a.useRef)(!0),n=Object(a.useState)({pokemons:[],loading:!0,error:null}),r=Object(d.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){return function(){t.current=!1}}),[]),Object(a.useEffect)((function(){i({pokemons:[],loading:!0,error:null}),J(e).then((function(e){t.current&&i({pokemons:e,loading:!1})}))}),[e]),c}(n),s=i.pokemons,o=i.loading;return Object(r.jsxs)(b.a,{align:"center",bg:"gray.200",paddingX:{base:0,sm:1,md:4},paddingY:{base:0,md:3},rounded:20,spacing:2,paddingBottom:2,children:[Object(r.jsx)($,{componentPathName:"/pokedex"}),Object(r.jsx)(g.a,{fontSize:"4xl",alignSelf:"flex-start",children:"Pokedex"}),o?Object(r.jsx)(h.a,{thickness:"4px",speed:"0.5s",emptyColor:"gray.200",color:"black",size:"xl"}):Object(r.jsx)(u.a,{gap:3,columns:2,w:"100%",children:null===s||void 0===s?void 0:s.map((function(e,t){return Object(r.jsx)(j.b.div,{animate:"visible",custom:t,initial:"hidden",variants:{hidden:{opacity:0,y:150},visible:function(e){return{opacity:1,y:0,transition:{delay:.05*e}}}},children:Object(r.jsx)(U,{pokemon:e})},e.name)}))}),Object(r.jsxs)(b.a,{isInline:!0,justify:"center",alignItems:"center",children:[n>0&&Object(r.jsx)(p.a,{bg:"primary",color:"white",_hover:{bgGradient:"linear(to-r, red.500, yellow.500)"},onClick:function(){return c(n-1)},children:"Prev Page"}),[{name:"I",page:0},{name:"II",page:15},{name:"III",page:25},{name:"IV",page:38},{name:"V",page:49},{name:"VI",page:65},{name:"VII",page:72},{name:"VIII",page:81}].map((function(e){var t=e.name,n=e.page;return Object(r.jsx)(p.a,{display:{base:"none",md:"inline-block"},size:"md",onClick:function(){return c(n)},bg:"secondary",color:"white",_hover:{background:"crimson"},children:t},t)})),n<111&&Object(r.jsx)(p.a,{bg:"primary",color:"white",_hover:{bgGradient:"linear(to-r, red.500, yellow.500)"},onClick:function(){return c(n+1)},children:"Next Page"})]})]})},Q=n(17),Z=n(128),ee=n(129),te=n(135),ne=n(130),re=n(26),ae=n.n(re),ce=function(e){var t=e.setPokemons,n=Object(a.useState)(""),c=Object(d.a)(n,2),i=c[0],s=c[1],o=Object(a.useState)(null),l=Object(d.a)(o,2),j=l[0],g=l[1],u=Object(a.useState)(!1),p=Object(d.a)(u,2),f=p[0],m=p[1],O=function(){var e=Object(T.a)(S.a.mark((function e(n){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),m(!0),g(null),r=i.replace(/ /g,"-").toLowerCase(),e.next=6,H(r).then((function(e){m(!1),t((function(t){return[e].concat(Object(Q.a)(t))})),s("")})).catch((function(e){m(!1),g("".concat(r," not found"))}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(b.a,{width:"100%",children:[Object(r.jsx)("form",{onSubmit:O,children:Object(r.jsxs)(Z.a,{variant:"filled",children:[Object(r.jsx)(ee.a,{children:Object(r.jsx)(ne.a,{color:"black"}),onClick:O,cursor:"pointer"}),Object(r.jsx)(te.a,{placeholder:"Search Pok\xe9mon by name or number",type:"text",isInvalid:j,errorBorderColor:"crimson",value:i,onChange:function(e){return s(e.target.value)}})]})}),j&&Object(r.jsx)(x.a,{textColor:"crimson",children:j}),f&&Object(r.jsx)(h.a,{alignSelf:"center",thickness:"4px",speed:"0.65s",emptyColor:"blue.200",color:"black",size:"xl"})]})};ce.propType={setPokemons:ae.a.func.isRequired};var ie=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)(b.a,{alignContent:"center",bg:"white",margin:{base:0,sm:1,md:4},padding:{base:0,md:4},rounded:30,spacing:3,children:[Object(r.jsx)($,{componentPathName:"/search"}),Object(r.jsx)(g.a,{textAlign:"center",mt:4,children:"What Pok\xe9mon are you looking for?"}),Object(r.jsx)(ce,{setPokemons:c}),n.length>0&&Object(r.jsx)(u.a,{columns:2,gap:2,bg:"gray.200",borderRadius:20,padding:2,children:n.map((function(e,t){return Object(r.jsx)(U,{pokemon:e},t)}))})]})},se=n(24),oe=function(){return Object(r.jsxs)(u.a,{bg:"#fff",columns:2,gap:3,paddingX:4,children:[[{name:"Pok\xe9dex",bgColor:"grass",route:"/pokedex"},{name:"Search Moves",bgColor:"fire",route:"/moves"},{name:"Search Pok\xe9mon",bgColor:"water",route:"/search"},{name:"Who's that Pok\xe9mon?",bgColor:"ground",route:"/quiz"},{name:"Types Weaks?",bgColor:"poison",route:"/combination"}].map((function(e){return Object(r.jsxs)(b.a,{align:"center",as:se.b,bg:e.bgColor,borderRadius:20,boxShadow:"0px 5px  3px #ccc",height:16,isInline:!0,justifyContent:"space-between",overflow:"hidden",padding:3,_hover:{opacity:.8},to:e.route,children:[Object(r.jsx)(x.a,{color:"white",children:e.name}),Object(r.jsx)(f.a,{alt:"pokeball",marginRight:-7,opacity:"0.2",src:"../assets/ui/pokeball.svg",width:20})]},e.name)})),Object(r.jsxs)(b.a,{align:"center",bg:"fighting",borderRadius:20,boxShadow:"0px 5px  3px #ccc",height:16,overflow:"hidden",isInline:!0,justifyContent:"space-between",padding:3,_hover:{opacity:.8},cursor:"pointer",onClick:function(){return window.open("https://juanmaportfolio.netlify.app/","_blank")},children:[Object(r.jsx)(x.a,{color:"white",children:"About Me"}),Object(r.jsx)(f.a,{alt:"pokeball",marginRight:-7,opacity:.2,src:"../assets/ui/pokeball.svg",width:20})]})]})},le=function(){return Object(r.jsxs)(b.a,{alignItems:"stretch",bg:"#fff",rounded:30,children:[Object(r.jsx)(ie,{}),Object(r.jsx)(oe,{}),Object(r.jsx)(K,{})]})},de=function(e){var t=e.setMoves,n=Object(a.useState)(""),c=Object(d.a)(n,2),i=c[0],s=c[1],o=Object(a.useState)(null),l=Object(d.a)(o,2),j=l[0],b=l[1],g=Object(a.useState)(!1),u=Object(d.a)(g,2),p=u[0],f=u[1],m=function(){var e=Object(T.a)(S.a.mark((function e(n){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),f(!0),b(!1),!((r=i.replace(/ /g,"-").toLowerCase()).length>1)){e.next=9;break}return e.next=7,_(r).then((function(e){f(!1),t((function(t){return[e].concat(Object(Q.a)(t))})),s("")})).catch((function(e){f(!1),b("".concat(i," not found."))}));case 7:e.next=11;break;case 9:f(!1),b("Move name to short");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("form",{onSubmit:m,children:Object(r.jsxs)(Z.a,{variant:"filled",children:[Object(r.jsx)(ee.a,{children:Object(r.jsx)(ne.a,{color:"black"}),onClick:m,cursor:"pointer"}),Object(r.jsx)(te.a,{placeholder:"Search Move (example: Ember, Thunder, Rain-Dance, Swords-Dance etc)",type:"text",isInvalid:j,errorBorderColor:"crimson",value:i,onChange:function(e){return s(e.target.value)}})]})}),j&&Object(r.jsx)(x.a,{textColor:"crimson",children:j}),p&&Object(r.jsx)(h.a,{thickness:"4px",speed:"0.85s",emptyColor:"blue.200",color:"black",size:"xl"})]})},je=de;de.propType={setMoves:ae.a.func.isRequired};var be=function(e){var t=e.move,n=t.accuracy,a=t.dataClass,c=t.description,i=t.name,s=t.pp,o=t.power,l=t.priority,d=t.effect_chance,j=t.effect,h=t.type;return Object(r.jsxs)(b.a,{bg:h,borderRadius:12,padding:3,spacing:6,marginBottom:{base:4,md:0},children:[Object(r.jsxs)(b.a,{isInline:!0,justify:"space-between",alignItems:"center",children:[Object(r.jsx)(g.a,{color:"white",textTransform:"capitalize",fontSize:"xl",children:i}),Object(r.jsxs)(b.a,{isInline:!0,children:[Object(r.jsx)(f.a,{width:7,alt:a,filter:"brightness(0) invert(1)",src:"./assets/moveClass/".concat(a,".png")}),Object(r.jsx)(f.a,{width:7,alt:h,src:"./assets/pokemonTypes/".concat(h,".png")})]})]}),Object(r.jsxs)(b.a,{children:[Object(r.jsx)(g.a,{textTransform:"capitalize",fontSize:"md",children:"Description:"}),Object(r.jsx)(x.a,{children:c})]}),Object(r.jsxs)(b.a,{children:[Object(r.jsx)(g.a,{textTransform:"capitalize",fontSize:"md",children:"Effect:"}),Object(r.jsx)(x.a,{children:j.replace("$effect_chance",d)})]}),Object(r.jsxs)(b.a,{isInline:!0,alignItems:"baseline",justifyContent:"space-between",spacing:3,children:[Object(r.jsxs)(b.a,{justify:"center",textAlign:"center",children:[Object(r.jsx)(x.a,{textTransform:"capitalize",fontWeight:"bold",children:"Power"}),Object(r.jsx)(x.a,{textTransform:"capitalize",children:o||"-"})]}),Object(r.jsxs)(b.a,{justify:"center",textAlign:"center",children:[Object(r.jsx)(x.a,{textTransform:"capitalize",fontWeight:"bold",children:"accuracy"}),Object(r.jsx)(x.a,{textTransform:"capitalize",children:n?"".concat(n,"%"):"-"})]}),Object(r.jsxs)(b.a,{justify:"center",textAlign:"center",children:[Object(r.jsx)(x.a,{textTransform:"upperCase",fontWeight:"bold",children:"pp"}),Object(r.jsx)(x.a,{textTransform:"capitalize",children:s})]}),Object(r.jsxs)(b.a,{justify:"center",textAlign:"center",children:[Object(r.jsx)(x.a,{textTransform:"capitalize",fontWeight:"bold",children:"priority"}),Object(r.jsx)(x.a,{textTransform:"capitalize",children:l})]}),Object(r.jsxs)(b.a,{justify:"center",textAlign:"center",children:[Object(r.jsx)(x.a,{textTransform:"capitalize",fontWeight:"bold",children:"Category"}),Object(r.jsx)(x.a,{textTransform:"capitalize",children:a})]})]})]})},ge=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)(b.a,{alignContent:"center",bg:"white",margin:{base:0,sm:1,md:4},padding:{base:0,md:4},rounded:30,spacing:3,children:[Object(r.jsx)($,{componentPathName:"/moves"}),Object(r.jsx)(g.a,{children:"What move are you looking for?"}),Object(r.jsx)(je,{setMoves:c}),Object(r.jsx)(u.a,{columns:{base:1,md:2},gap:3,children:n.map((function(e,t){return Object(r.jsx)(be,{move:e},t)}))})]})},he=n(131),ue=function(e){var t=e.firstType,n=e.secondType,c=Object(a.useState)({}),i=Object(d.a)(c,2),s=i[0],o=i[1];Object(a.useEffect)((function(){o(W(null===n||t===n?[t]:[t,n]))}),[t,n]);var l=function(e){switch(e){case 4:return"Very Weak x4";case 2:return"Weak x2";case 1:return"Normal x1";case.5:return"Not Effective x1/2";case.25:return"Strong Against x1/4";case 0:return"Immune x0 ";default:return"Error"}};return Object(r.jsxs)(b.a,{spacing:4,marginBottom:{base:2,md:0},children:[Object(r.jsx)(g.a,{textAlign:"center",children:"Weaks Combination:"}),Object(r.jsxs)(b.a,{isInline:!0,justify:"center",alignItems:"baseline",textTransform:"capitalize",fontSize:"lg",fontWeight:"bold",children:[Object(r.jsx)(he.a,{align:"center",justifyContent:"center",bg:t,width:20,rounded:9999,height:20,children:Object(r.jsx)(x.a,{children:t})}),n&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(he.a,{justifyContent:"center",children:Object(r.jsx)(x.a,{fontSize:"2em",children:"+"})}),Object(r.jsx)(he.a,{align:"center",bg:n,height:20,justifyContent:"center",rounded:9999,width:20,children:Object(r.jsx)(x.a,{children:n})})]})]}),Object(r.jsx)(he.a,{direction:"column",children:[4,2,1,.5,.25,0].map((function(e){return s[e]&&Object(r.jsxs)(b.a,{alignItems:"center",justifyItems:"center",spacing:0,children:[Object(r.jsx)(x.a,{textAlign:"center",fontSize:"md",fontWeight:"bold",children:l(e)}),Object(r.jsx)(he.a,{direction:"row",wrap:"wrap",justifyContent:"center",children:s[e].map((function(e){return Object(r.jsx)(B.a,{bg:e,margin:1,rounded:999,textAlign:"center",w:"100px",children:Object(r.jsx)(x.a,{fontSize:"sm",textTransform:"capitalize",fontWeight:"bold",children:e})},e)}))})]},e)}))})]})},pe=n(132),xe=function(e){var t=e.type,n=e.selectedType,a=e.changeSelectedType;return Object(r.jsxs)(pe.a,{as:"button",bg:null!==t?t:"grey",cursor:"pointer",margin:1,rounded:999,value:t,w:"90px",onClick:function(){return a(t)},children:[Object(r.jsx)(f.a,{mr:3,ml:-1,src:"../assets/ui/pokeball.svg",opacity:t!==n?"0.1":"1",width:4}),Object(r.jsx)(pe.b,{textTransform:"capitalize",fontWeight:"bold",children:null===t?"None":t})]})},fe=function(){var e=["bug","dark","dragon","electric","fairy","fighting","fire","flying","ghost","grass","ground","ice","normal","poison","psychic","rock","steel","water"],t=Object(a.useState)("bug"),n=Object(d.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(null),o=Object(d.a)(s,2),l=o[0],j=o[1],h=function(e){e!==l?i(e):(i(e),j(null))},u=function(e){e!==c?j(e):(i(e),j(null))};return Object(r.jsxs)(b.a,{bg:"gray.100",borderRadius:20,align:"center",alignItems:"center",justify:"center",spacing:2,paddingY:2,children:[Object(r.jsxs)(b.a,{direction:{base:"column",md:"row"},spacing:2,children:[Object(r.jsxs)(b.a,{children:[Object(r.jsx)(g.a,{textAlign:"center",children:"Choose First"}),Object(r.jsx)(he.a,{direction:"row",wrap:"wrap",justifyContent:"center",children:e.map((function(e){return Object(r.jsx)(xe,{changeSelectedType:h,selectedType:c,type:e},e)}))})]}),Object(r.jsxs)(b.a,{children:[Object(r.jsx)(g.a,{textAlign:"center",children:"Choose Second"}),Object(r.jsxs)(he.a,{direction:"row",wrap:"wrap",justifyContent:"center",children:[e.map((function(e){return Object(r.jsx)(xe,{changeSelectedType:u,selectedType:l,type:e},e)})),Object(r.jsx)(xe,{changeSelectedType:u,type:null,selectedType:l},"null")]})]})]}),Object(r.jsx)(ue,{firstType:c,secondType:l})]})},me=function(){return Object(r.jsxs)(b.a,{alignContent:"center",bg:"white",margin:{base:0,sm:1,md:4},padding:{base:0,md:4},rounded:30,spacing:3,children:[Object(r.jsx)($,{componentPathName:"/combination"}),Object(r.jsxs)(b.a,{spacing:0,children:[Object(r.jsx)(g.a,{children:"Pok\xe9mon Type Calculator"}),Object(r.jsx)(g.a,{size:"sm",as:"h6",fontWeight:"normal",color:"gray.500",children:"Choose Types and Calculate Weaknesses"})]}),Object(r.jsx)(fe,{})]})},Oe=function(e){var t=e.pokemon,n=e.nextPokemon,c=Object(a.useState)("GUESSING"),i=Object(d.a)(c,2),s=i[0],o=i[1],l=Object(a.useState)(""),j=Object(d.a)(l,2),h=j[0],u=j[1],m=Object(a.useState)(0),O=Object(d.a)(m,2),y=O[0],w=O[1],k=function(e){e.preventDefault();var n=h.replace(/ /g,"-").toLowerCase();w((function(e){return e+1})),o(n===t.name?"SUCCESS":"FAIL")};return Object(a.useEffect)((function(){o("GUESSING"),u(""),w(0)}),[t]),Object(r.jsxs)(b.a,{justify:"center",children:[Object(r.jsx)(f.a,{alignSelf:"center",alt:"pokemon",className:"SUCCESS"===s&&"animate__animated animate__shakeX",height:350,draggable:"false",style:{imageRendering:"".concat("SUCCESS"===s?"auto":"pixelated"),filter:"brightness(".concat("SUCCESS"===s?1:0,")"),transition:"".concat("SUCCESS"===s?"filter 0.7s":"fliter 0s")},src:t.image,width:350}),"SUCCESS"===s?Object(r.jsxs)(b.a,{children:[Object(r.jsx)(g.a,{textTransform:"capitalize",size:"4xl",textAlign:"center",children:t.name}),Object(r.jsxs)(x.a,{textAlign:"center",children:[y," Attempts"]}),Object(r.jsx)(E.a,{as:"button",p:2,color:"white",fontWeight:"bold",borderRadius:"md",bgGradient:"linear(to-r, teal.500,green.500)",_hover:{bgGradient:"linear(to-r, red.500, yellow.500)"},onClick:n,children:"Next Pokemon"})]}):Object(r.jsxs)(b.a,{children:[Object(r.jsxs)("form",{onSubmit:k,children:[Object(r.jsx)(te.a,{variant:"filled",textAlign:"center",placeholder:"Write the answer",type:"text",isInvalid:"FAIL"===s,errorBorderColor:"crimson",value:h,onChange:function(e){return u(e.target.value)}}),"FAIL"===s&&Object(r.jsx)(x.a,{color:"primary",textAlign:"center",children:"Wrong Answer"})]}),Object(r.jsxs)(b.a,{isInline:!0,children:[Object(r.jsx)(p.a,{p:2,color:"white",fontWeight:"bold",borderRadius:"md",bgGradient:"linear(to-r, red.400,red.600)",_hover:{bgGradient:"linear(to-r, red.500, yellow.500)"},onClick:n,width:"50%",children:"Next"}),Object(r.jsx)(p.a,{p:2,color:"white",fontWeight:"bold",borderRadius:"md",bgGradient:"linear(to-r, teal.500,green.500)",_hover:{bgGradient:"linear(to-r,  teal.500,teal.700)"},onClick:k,width:"50%",children:"Try"})]})]})]})},ye=function(e){var t=e.setGeneration,n=e.generation;return Object(r.jsxs)(b.a,{bg:"gray.200",padding:3,rounded:22,children:[Object(r.jsx)(g.a,{textAlign:"center",fontWeight:"extrabold",bgGradient:"linear(to-l, #7928CA,#FF0080)",bgClip:"text",children:"Select Generation"}),Object(r.jsx)(u.a,{columns:3,gap:3,borderRadius:20,bg:"gray.200",padding:2,children:[{name:"I",min:1,max:151},{name:"II",min:152,max:251},{name:"III",min:252,max:386},{name:"IV",min:387,max:494},{name:"V",min:495,max:649},{name:"VI",min:650,max:721},{name:"VII",min:722,max:809},{name:"VIII",min:810,max:897},{name:"All Gens",min:1,max:897}].map((function(e){return Object(r.jsx)(p.a,{size:"md",bgGradient:e.name!==n.name?"linear-gradient(to-r, #3a7bd5, #3a6073)":"linear-gradient(to-r, crimson, crimson)",color:"white",_hover:{bgGradient:"linear(to-r, red.500, orange.500)"},onClick:function(){return t(e)},children:e.name},e.name)}))})]})},we=function(){var e=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},t=Object(a.useState)(null),n=Object(d.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)({name:"I",min:1,max:151}),o=Object(d.a)(s,2),l=o[0],j=o[1],u=function(e){var t=Object(a.useRef)(!0),n=Object(a.useState)({pokemon:[],loading:!0}),r=Object(d.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){return function(){t.current=!1}}),[]),Object(a.useEffect)((function(){null!==e&&(i({pokemon:null,loading:!0}),H(e).then((function(e){t.current&&i({pokemon:e,loading:!1})})))}),[e]),c}(c),p=u.pokemon,x=u.loading;return Object(a.useEffect)((function(){var t=e(l.min,l.max);i(t)}),[l]),Object(r.jsxs)(b.a,{alignContent:"center",bg:"white",margin:{base:0,sm:1,md:4},padding:{base:0,md:4},rounded:30,spacing:3,children:[Object(r.jsx)($,{componentPathName:"/quiz"}),Object(r.jsx)(g.a,{textAlign:"center",mt:4,children:"Who's that Pok\xe9mon?"}),x?Object(r.jsx)(b.a,{alignItems:"center",children:Object(r.jsx)(h.a,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"blue.500",size:"xl",textAlign:"center"})}):Object(r.jsx)(Oe,{pokemon:p,nextPokemon:function(){return i(e(l.min,l.max))}}),Object(r.jsx)(ye,{setGeneration:j,generation:l})]})},ke=function(){return Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{exact:!0,path:"/search",children:Object(r.jsx)(ie,{})}),Object(r.jsx)(l.a,{exact:!0,path:"/quiz",children:Object(r.jsx)(we,{})}),Object(r.jsx)(l.a,{exact:!0,path:"/moves",children:Object(r.jsx)(ge,{})}),Object(r.jsx)(l.a,{exact:!0,path:"/combination",children:Object(r.jsx)(me,{})}),Object(r.jsx)(l.a,{exact:!0,path:"/pokedex",children:Object(r.jsx)(K,{})}),Object(r.jsx)(l.a,{path:"/",children:Object(r.jsx)(le,{})})]})},ve=function(){return Object(r.jsxs)(b.a,{as:"nav",isInline:!0,alignItems:"center",height:12,justifyContent:{base:"center",md:"space-between"},bg:"gray.900",zIndex:200,children:[Object(r.jsx)(b.a,{isInline:!0,children:Object(r.jsx)(p.a,{colorScheme:"gray.50",variant:"solid",as:se.b,to:"/home",children:"PokedexApp"})}),Object(r.jsxs)(b.a,{isInline:!0,mr:2,display:{base:"none",md:"inline-flex"},children:[Object(r.jsx)(p.a,{size:"sm",color:"white",bg:"grass",_hover:{color:"black",opacity:.8},as:se.b,to:"/pokedex",children:"Pokedex"}),Object(r.jsx)(p.a,{size:"sm",color:"white",bg:"fire",_hover:{color:"black",opacity:.8},as:se.b,to:"/moves",children:"Moves"}),Object(r.jsx)(p.a,{size:"sm",color:"white",bg:"water",_hover:{color:"black",opacity:.8},as:se.b,to:"/search",children:"Find Pokemon"}),Object(r.jsx)(p.a,{size:"sm",color:"white",bg:"ground",_hover:{color:"black",opacity:.8},as:se.b,to:"/quiz",children:"Who's that Pokemon?"}),Object(r.jsx)(p.a,{size:"sm",color:"white",bg:"poison",_hover:{color:"black",opacity:.8},as:se.b,to:"/combination",children:"Types Weaks"})]})]})},Ce=function(e){e.textcolor,e.position;return Object(r.jsxs)(x.a,{cursor:"pointer",onClick:function(){return window.open("https://juanmaportfolio.netlify.app/")},textAlign:"center",textColor:"white",children:["PokdexApp Copyright \xa9 Juan Manuel Ibarzabal Salles"," ",(new Date).getFullYear(),"."]})},Se=function(){return Object(r.jsx)(b.a,{textAlign:"center",justify:"center",bg:"black",paddingY:4,as:"footer",children:Object(r.jsx)(Ce,{})})},ze=function(){return Object(r.jsxs)(o.a,{height:"100vh",templateColumns:"1fr",templateRows:"auto 1fr auto",width:"100vw",children:[Object(r.jsx)(ve,{}),Object(r.jsx)(o.a,{backgroundImage:{base:"none",md:"url(/assets/ui/background.png)"},justifyItems:"center",overflowY:"auto",overflowX:"hidden",children:Object(r.jsx)(o.a,{maxW:"680px",w:"100%",marginY:{base:0,sm:2,md:4},children:Object(r.jsx)(ke,{})})}),Object(r.jsx)(Se,{})]})},Ie=n(137),Te=n(133),_e=Object(Te.a)({colors:{grass:"#47CFAF",fire:"#FB6D6C",water:"#74BDFD",dragon:"#8774FF",normal:"#BDBDAE",bug:"#C1D11F",poison:"#AA5DA1",electric:"#FEE63C",ground:"#d3b54a",psychic:"#F562B1",fighting:"#B1746D",fairy:"#FAADFF",rock:"#CEBD72",ghost:"#7A76D8",ice:"#96F1FF",steel:"#C4C2DB",flying:"#7AA1FF",dark:"#8A6653",primary:"#ff0050",secondary:"#2667ff"},shadows:{outline:"0"}});n(107);s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Ie.a,{resetCSS:!0,theme:_e,children:Object(r.jsx)(se.a,{children:Object(r.jsx)(ze,{})})})}),document.getElementById("root"))}},[[108,1,2]]]);
//# sourceMappingURL=main.a8b7686b.chunk.js.map