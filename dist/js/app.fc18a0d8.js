(function(e){function t(t){for(var n,i,s=t[0],l=t[1],c=t[2],d=0,f=[];d<s.length;d++)i=s[d],r[i]&&f.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"2a04":function(e,t,a){e.exports=a.p+"img/TensegrityTower.145763ce.png"},"2d73":function(e,t,a){},"3eb6":function(e,t,a){"use strict";var n=a("5810"),r=a.n(n);r.a},"3eca":function(e,t,a){},"46be":function(e,t,a){"use strict";var n=a("2d73"),r=a.n(n);r.a},"54e3":function(e,t,a){e.exports=a.p+"img/sdrcap.c3d5aeca.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=a("ce5b"),o=a.n(r),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-layout",[a("v-flex",[a("v-flex",["About Me"===e.currentSelection?a("div",[a("v-img",{attrs:{height:"300",src:e.bannerImg1}},[a("v-layout",{attrs:{"align-center":"",column:"","justify-center":"","fill-height":"300"}},[a("h1",{staticClass:"text-uppercase display-3",attrs:{id:"Banner-Message"}},[e._v("About Me")])])],1)],1):"Projects"===e.currentSelection?a("div",[a("v-img",{attrs:{height:"300",src:e.bannerImg1}},[a("v-layout",{attrs:{"align-center":"",column:"","justify-center":"","fill-height":"300"}},[a("h1",{staticClass:"text-uppercase display-3",attrs:{id:"Banner-Message"}},[e._v("Projects")])])],1)],1):"Experience"===e.currentSelection?a("div",[a("v-img",{attrs:{height:"300",src:e.bannerImg1}},[a("v-layout",{attrs:{"align-center":"",column:"","justify-center":"","fill-height":"300"}},[a("h1",{staticClass:"text-uppercase display-3",attrs:{id:"Banner-Message"}},[e._v("Experience")])])],1)],1):e._e()]),a("v-toolbar",[a("v-flex",{staticClass:"hidden-xs-only"},[a("v-toolbar-title",{staticClass:"text-uppercase"},[a("span",[e._v("David Fentz")]),a("span",{staticClass:"font-weight-light"},[e._v(" Portfolio")])]),a("v-spacer")],1),a("v-btn",{attrs:{flat:"",target:"_blank"},on:{click:function(t){e.currentSelection="About Me"}}},[a("span",{staticClass:"mr-2",attrs:{xs4:""}},[e._v("About Me")])]),a("v-btn",{attrs:{flat:"",target:"_blank"},on:{click:function(t){e.currentSelection="Projects",e.currentProject="None"}}},[a("span",{staticClass:"mr-2",attrs:{xs4:""}},[e._v("Projects")])]),a("v-btn",{attrs:{flat:"",target:"_blank"},on:{click:function(t){e.currentSelection="Experience"}}},[a("span",{staticClass:"mr-2",attrs:{xs4:""}},[e._v("Experience")])])],1),a("v-card",["About Me"===e.currentSelection?a("v-content",[a("AboutMe")],1):e._e(),"Experience"===e.currentSelection?a("v-content",[a("Experience")],1):e._e(),"Projects"===e.currentSelection?a("v-content",[a("Projects",{attrs:{currentProject:e.currentProject},on:{changeProject:function(t){e.updateProj(t)}}})],1):e._e()],1),a("div",{staticClass:"footer-div"},[a("a",{staticClass:"footer-links",attrs:{href:"https://www.linkedin.com/in/davidfentz/"}},[e._v("LinkedIn")]),a("a",{staticClass:"footer-links",attrs:{href:"https://github.com/bomjumaku"}},[e._v("Github")]),a("a",{staticClass:"footer-links",attrs:{href:"https://github.com/bomjumaku/portfolio"}},[e._v("This Site's Source Code")])])],1)],1)],1)},s=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:"","grid-list-md5":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md4:""}},[a("v-card",[a("v-img",{attrs:{src:e.image1}})],1)],1),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md8:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{id:"AboutMeMessage"}},[a("p",[e._v("\n            Hello there, My name is David and (if you haven't noticed) you're on my portfolio.\n             This isn't LinkedIn,\n             so I'm going to go into a bit more detail about myself, my hobbies, and my\n             experiences. Hopefully a bit more of my personality can shine through here!\n            ")]),a("p",[e._v("\n              This space is built primarily as an exposition of computational prowess.\n              However, I also want to give you some conception of what I'm like as a person.\n              Here are a few fun facts:\n            ")]),a("ul",[a("li",[e._v(" I love to cook. I'm currently perfecting my searing techniques after\n                immersing myself into the world of using sous vide for proteins.\n              ")]),a("li",[e._v(" Mindfulness techniques are an important (and often underutilized)\n                set of tools in my arsenal for maintaining a semblance of sanity in\n                 the modern world.\n              ")]),a("li",[e._v(" If I had it my way, I would only wear toe shoes. I honestly can't stand\n                traditional footwear, so I'm almost always wearing some form of minimalist\n                shoe.\n              ")]),a("li",[e._v(" I love coffee, tea, yerba mate, chocolate, etc. I have a lot of respect\n                for the chemical relationships which are formed between man and plant. I'm\n                really a purist when it comes to psychotropic botanicals, and I'm generally\n                picky about what I put on/into my body, so I geek out about how these substances\n                are grown, processed, transported, served, and consumed.\n              ")]),a("li",[e._v(" I love hacking. My next career goal is to become a penetration tester for\n                an independant security firm or a red teamer for a larger business. I am so\n                interested in how computer (and physical) systems are intended to operate,\n                and how they fail to do so.\n              ")])]),a("p",{attrs:{hidden:""}},[e._v("\n              I'm pretty much always doing something interesting. If you've got interesting\n               problems to solve and you need help, or just have a random question, feel\n               free to contact me.\n            ")])])],1)],1)],1)],1)},c=[],u={data:function(){return{image1:a("6c3b")}}},d=u,f=(a("3eb6"),a("2877")),p=a("6544"),m=a.n(p),v=a("b0af"),h=a("a523"),y=a("0e8f"),g=a("adda"),b=a("a722"),w=Object(f["a"])(d,l,c,!1,null,"faa1c8b2",null);w.options.__file="AboutMe.vue";var _=w.exports;m()(w,{VCard:v["a"],VContainer:h["a"],VFlex:y["a"],VImg:g["a"],VLayout:b["a"]});var x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-container",[a("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[a("a",{attrs:{href:"downloadable/david_fentz_resume_2018_oct.pdf",download:""}},[e._v("Looking for my Resume?")])])],1),a("v-container",{staticClass:"hidden-sm-and-down"},[a("v-timeline",e._l(e.History,function(t){return a("v-timeline-item",{key:t.description,attrs:{color:"red lighten-2",large:""}},[a("span",{attrs:{slot:"opposite"},slot:"opposite"},[e._v(e._s(t.time))]),a("v-card",{staticClass:"elevation-2"},[a("v-card-title",{staticClass:"headline"},[e._v(e._s(t.description))]),a("v-card-text",[e._v("\n            "+e._s(t.details)+"\n          ")])],1)],1)}))],1),a("v-container",{staticClass:"hidden-md-and-up"},[a("v-timeline",{attrs:{dense:""}},e._l(e.History,function(t){return a("v-timeline-item",{key:t.description,attrs:{color:"red lighten-2",large:""}},[a("v-card",{staticClass:"elevation-2"},[a("v-card-title",{staticClass:"headline"},[e._v("\n            "+e._s(t.description)+" ("+e._s(t.time)+")\n          ")]),a("v-card-text",[e._v("\n            "+e._s(t.details)+"\n          ")])],1)],1)}))],1)],1)},j=[],P={data:function(){return{History:[{time:"2011",description:"Purdue University",details:'This was my first foray into academia, and I didn\'t really have any idea what I wanted to do so I studied Mechanical Engineering for a year. In my second year I studied Film & Video before reading "The Way of Zen" by Alan Watts and subsequently dropping out. I built the foundation for my engineering mindset during this period of time, and developed capacities to analyze finer media (which I now consider invaluable) from my studies in liberal arts.'},{time:"2013",description:"Summer Kitchen Family Farm",details:"After dropping out of college with the idea that I would become a buddhist monk (You can draw your own conclusions about how that went, haha), I decided to spend the summer working on organic farms. I got really lucky and landed in Fayetteville Arkansas with Mariah and Ira White. I fed & milked cows, planted basil, learned to brew mead, and hiked in the mountains. I learned a LOT about where my food comes from and what a happy family looks like."},{time:"2014",description:"Starbucks & ASU",details:"After deciding that becoming a farmer was not the optimal path for my life (enjoyable as it was) I joined Starbucks as a Barista and started looking for opportunities to get an education. Starbucks had a minimal tuition assistance program at the time, so I spend about a year re-building my GPA at Purdue before being accepted at ASU as a Software Engineering major. I spent a few years working part time and going to school full time."},{time:"June-August 2018",description:"Application Security Internship",details:"The culmination of all of that work was my internship with the Application Security team at Starbucks. This was an amazing experience inside and outside of the office. I made life-long friends and professional contacts that I still talk with today. I learned the basics of penetration testing web applications and Andriod applications. During this period of time I also built the coolest thing to date, a service/tool which scans GitHub for leaked information. The cherry on top... it actually returns repositories containing sensitive information."},{time:"2018-Present",description:"Keyot",details:"I'm employed as a Software Developer Consultant with Keyot, and will be working with Principal Financial Group in Des Moines, Iowa. I'm finishing up my degree, and plan to pivot my education to offensive security in the near future."}]}}},I=P,k=(a("d40e"),a("99d9")),C=a("12b2"),V=a("8414"),S=a("1e06"),T=Object(f["a"])(I,x,j,!1,null,null,null);T.options.__file="Experience.vue";var M=T.exports;m()(T,{VCard:v["a"],VCardText:k["a"],VCardTitle:C["a"],VContainer:h["a"],VLayout:b["a"],VTimeline:V["a"],VTimelineItem:S["a"]});var A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-flex",["None"===e.currentProject?a("v-container",{attrs:{fluid:"","grid-list-md5":""}},[a("v-layout",{attrs:{row:"",wrap:""}},e._l(e.myProjects,function(t){return a("v-flex",{key:t.Title,attrs:{"d-flex":"",xs12:"",sm6:"",md4:""}},[a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(n){var r=n.hover;return a("v-card",{class:"elevation-"+(r?12:2),on:{click:function(a){e.updateProject(t.Title)}}},[a("v-img",{attrs:{src:t.image,height:"300"}}),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[e._v(e._s(t.Title))]),a("div",[e._v(e._s(t.description))])])])],1)}}])})],1)}))],1):e._e(),"Tensegrity Tower"===e.currentProject?a("v-flex",[a("TowerProject")],1):e._e(),"Lab Bench Power Supply"===e.currentProject?a("v-flex",[a("PowerSupplyProject")],1):e._e(),"RF Replay Attack"===e.currentProject?a("v-flex",[a("RFReplayProject")],1):e._e()],1)},F=[],O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:"","grid-list-md5":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md4:""}},[a("v-card")],1),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md8:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{id:"card-text"}},[a("p",[e._v("\n            Tower Project\n            ")])])],1)],1)],1)],1)},E=[],R={data:function(){return{}}},L=R,H=(a("d50d"),Object(f["a"])(L,O,E,!1,null,null,null));H.options.__file="TowerProject.vue";var B=H.exports;m()(H,{VCard:v["a"],VContainer:h["a"],VFlex:y["a"],VLayout:b["a"]});var $=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:"","grid-list-md5":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md4:""}},[a("v-card")],1),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md8:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{id:"AboutMeMessage"}},[a("p",[e._v("\n            Power Supply Project\n            ")])])],1)],1)],1)],1)},z=[],D={data:function(){return{}}},K=D,q=(a("46be"),Object(f["a"])(K,$,z,!1,null,null,null));q.options.__file="PowerSupplyProject.vue";var G=q.exports;m()(q,{VCard:v["a"],VContainer:h["a"],VFlex:y["a"],VLayout:b["a"]});var J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:"","grid-list-md5":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md4:""}},[a("v-card",{attrs:{height:"300"}},[a("iframe",{attrs:{height:"100%",width:"100%",src:"https://www.youtube-nocookie.com/embed/2QDRJ_KfMeQ",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md8:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{id:"Section1"}},[a("p",[e._v("\n            RF Replay Project\n            ")])])],1)],1)],1)],1)},N=[],U={data:function(){return{}}},W=U,Q=(a("58bb"),Object(f["a"])(W,J,N,!1,null,"0cb5c3ec",null));Q.options.__file="RFReplayProject.vue";var Y=Q.exports;m()(Q,{VCard:v["a"],VContainer:h["a"],VFlex:y["a"],VLayout:b["a"]});var Z={props:["currentProject"],components:{TowerProject:B,PowerSupplyProject:G,RFReplayProject:Y},data:function(){return{image1:a("6c3b"),myProjects:[{Title:"Tensegrity Tower",image:a("2a04"),description:"Building a completely useless and mezmerizing luminescent structure."},{Title:"Lab Bench Power Supply",image:a("b343"),description:"Managing not to electrocute myself while converting a PC power supply to a bench power supply."},{Title:"RF Replay Attack",image:a("54e3"),description:"Capturing Key-FOB RF packets and replaying them at will."}]}},methods:{updateProject:function(e){this.$emit("changeProject",e)}}},X=Z,ee=(a("9801"),a("ce87")),te=Object(f["a"])(X,A,F,!1,null,"00a53712",null);te.options.__file="Projects.vue";var ae=te.exports;m()(te,{VCard:v["a"],VCardTitle:C["a"],VContainer:h["a"],VFlex:y["a"],VHover:ee["a"],VImg:g["a"],VLayout:b["a"]});var ne={name:"App",components:{AboutMe:_,Projects:ae,Experience:M},data:function(){return{bannerImg1:a("df72"),currentSelection:"About Me",currentProject:"None"}},methods:{updateProj:function(e){this.currentProject=e}}},re=ne,oe=(a("a4c3"),a("7496")),ie=a("8336"),se=a("549c"),le=a("9910"),ce=a("71d9"),ue=a("2a7f"),de=Object(f["a"])(re,i,s,!1,null,"39911ad9",null);de.options.__file="App.vue";var fe=de.exports;m()(de,{VApp:oe["a"],VBtn:ie["a"],VCard:v["a"],VContent:se["a"],VFlex:y["a"],VImg:g["a"],VLayout:b["a"],VSpacer:le["a"],VToolbar:ce["a"],VToolbarTitle:ue["a"]});a("bf40");n["default"].config.productionTip=!1,n["default"].use(o.a),new n["default"]({render:function(e){return e(fe)}}).$mount("#app")},5810:function(e,t,a){},"58bb":function(e,t,a){"use strict";var n=a("6153"),r=a.n(n);r.a},"5ac8":function(e,t,a){},6153:function(e,t,a){},"66a2":function(e,t,a){},"6c3b":function(e,t,a){e.exports=a.p+"img/HoldingCoffeeInSeattle.994ff0d1.jpeg"},9801:function(e,t,a){"use strict";var n=a("3eca"),r=a.n(n);r.a},a4c3:function(e,t,a){"use strict";var n=a("fecf"),r=a.n(n);r.a},b343:function(e,t,a){e.exports=a.p+"img/PowerSupply.275f574a.jpg"},d40e:function(e,t,a){"use strict";var n=a("5ac8"),r=a.n(n);r.a},d50d:function(e,t,a){"use strict";var n=a("66a2"),r=a.n(n);r.a},df72:function(e,t,a){e.exports=a.p+"img/myface.bb50d280.jpg"},fecf:function(e,t,a){}});
//# sourceMappingURL=app.fc18a0d8.js.map