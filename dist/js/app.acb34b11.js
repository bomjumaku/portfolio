(function(e){function t(t){for(var n,o,s=t[0],l=t[1],c=t[2],u=0,h=[];u<s.length;u++)o=s[u],i[o]&&h.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(h.length)h.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"15f3":function(e,t,a){},"24cd":function(e,t,a){"use strict";var n=a("6028"),i=a.n(n);i.a},"25ca":function(e,t,a){"use strict";var n=a("7ec7"),i=a.n(n);i.a},"25f6":function(e,t,a){},"2a04":function(e,t,a){e.exports=a.p+"img/TensegrityTower.145763ce.png"},"30b2":function(e,t,a){"use strict";var n=a("15f3"),i=a.n(n);i.a},"54e3":function(e,t,a){e.exports=a.p+"img/sdrcap.c3d5aeca.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),i=a("ce5b"),r=a.n(i),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-layout",[a("v-flex",[a("v-flex",["About Me"===e.currentSelection?a("div",[a("v-img",{attrs:{height:"300",src:e.bannerImg1}},[a("v-layout",{attrs:{"align-center":"",column:"","justify-center":"","fill-height":"300"}},[a("h1",{staticClass:"text-uppercase display-3",attrs:{id:"Banner-Message"}},[e._v("About Me")])])],1)],1):"Projects"===e.currentSelection?a("div",[a("v-img",{attrs:{height:"300",src:e.bannerImg1}},[a("v-layout",{attrs:{"align-center":"",column:"","justify-center":"","fill-height":"300"}},[a("h1",{staticClass:"text-uppercase display-3",attrs:{id:"Banner-Message"}},[e._v("Projects")])])],1)],1):"Experience"===e.currentSelection?a("div",[a("v-img",{attrs:{height:"300",src:e.bannerImg1}},[a("v-layout",{attrs:{"align-center":"",column:"","justify-center":"","fill-height":"300"}},[a("h1",{staticClass:"text-uppercase display-3",attrs:{id:"Banner-Message"}},[e._v("Experience")])])],1)],1):e._e()]),a("v-toolbar",[a("v-flex",{staticClass:"hidden-xs-only"},[a("v-toolbar-title",{staticClass:"text-uppercase"},[a("span",[e._v("David Fentz")]),a("span",{staticClass:"font-weight-light"},[e._v(" Portfolio")])]),a("v-spacer")],1),a("v-btn",{attrs:{flat:"",target:"_blank"},on:{click:function(t){e.currentSelection="About Me"}}},[a("span",{attrs:{xs3:""}},[e._v("About Me")])]),a("v-btn",{attrs:{flat:"",target:"_blank"},on:{click:function(t){e.currentSelection="Projects",e.currentProject="None"}}},[a("span",{attrs:{xs3:""}},[e._v("Projects")])]),a("v-btn",{attrs:{flat:"",target:"_blank"},on:{click:function(t){e.currentSelection="Experience"}}},[a("span",{attrs:{xs3:""}},[e._v("Experience")])])],1),a("v-card",["About Me"===e.currentSelection?a("v-content",[a("AboutMe")],1):e._e(),"Experience"===e.currentSelection?a("v-content",[a("Experience")],1):e._e(),"Projects"===e.currentSelection?a("v-content",[a("Projects",{attrs:{currentProject:e.currentProject},on:{changeProject:function(t){e.updateProj(t)}}})],1):e._e()],1),a("div",{staticClass:"hidden-xs-only",attrs:{id:"footer-div"}},[a("a",{staticClass:"footer-links",attrs:{href:"https://www.linkedin.com/in/davidfentz/"}},[e._v("LinkedIn")]),a("a",{staticClass:"footer-links",attrs:{href:"https://github.com/bomjumaku"}},[e._v("Github")]),a("a",{staticClass:"footer-links",attrs:{href:"https://github.com/bomjumaku/portfolio"}},[e._v("This Site's Source Code")])]),a("div",{staticClass:"hidden-sm-and-up",attrs:{id:"footer-div"}},[a("a",{staticClass:"footer-links",attrs:{href:"https://www.linkedin.com/in/davidfentz/"}},[e._v("LinkedIn")]),a("br"),a("a",{staticClass:"footer-links",attrs:{href:"https://github.com/bomjumaku"}},[e._v("Github")]),a("br"),a("a",{staticClass:"footer-links",attrs:{href:"https://github.com/bomjumaku/portfolio"}},[e._v("This Site's Source Code")])])],1)],1)],1)},s=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:"","grid-list-md5":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md4:""}},[a("v-card",[a("v-img",{attrs:{src:e.image1}})],1)],1),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md8:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{id:"Section1"}},[a("p",[e._v("\n            Hello there, My name is David and (if you haven't noticed) you're on my portfolio.\n             This isn't LinkedIn,\n             so I'm going to go into a bit more detail about myself, my hobbies, and my\n             experiences. Hopefully a bit more of my personality can shine through here!\n            ")]),a("p",[e._v("\n              This space is built primarily as an exposition of computational prowess.\n              However, I also want to give you some conception of what I'm like as a person.\n              Here are a few fun facts:\n            ")]),a("ul",[a("li",[e._v(" I love to cook. I'm currently perfecting my searing techniques after\n                immersing myself into the world of using sous vide for proteins.\n              ")]),a("li",[e._v(" Mindfulness techniques are an important (and often underutilized)\n                set of tools in my arsenal for maintaining a semblance of sanity in\n                 the modern world.\n              ")]),a("li",[e._v(" If I had it my way, I would only wear toe shoes. I honestly can't stand\n                traditional footwear, so I'm almost always wearing some form of minimalist\n                shoe.\n              ")]),a("li",[e._v(" I love coffee, tea, yerba mate, chocolate, etc. I have a lot of respect\n                for the chemical relationships which are formed between man and plant. I'm\n                really a purist when it comes to psychotropic botanicals, and I'm generally\n                picky about what I put on/into my body, so I geek out about how these substances\n                are grown, processed, transported, served, and consumed.\n              ")]),a("li",[e._v(" I love hacking. My next career goal is to become a penetration tester for\n                an independant security firm or a red teamer for a larger business. I am so\n                interested in how computer (and physical) systems are intended to operate,\n                and how they fail to do so.\n              ")])]),a("p",{attrs:{hidden:""}},[e._v("\n              I'm pretty much always doing something interesting. If you've got interesting\n               problems to solve and you need help, or just have a random question, feel\n               free to contact me.\n            ")])])],1)],1)],1)],1)},c=[],d={data:function(){return{image1:a("6c3b")}}},u=d,h=(a("714f"),a("2877")),f=a("6544"),p=a.n(f),m=a("b0af"),v=a("a523"),g=a("0e8f"),y=a("adda"),w=a("a722"),b=Object(h["a"])(u,l,c,!1,null,"4584b3dc",null);b.options.__file="AboutMe.vue";var _=b.exports;p()(b,{VCard:m["a"],VContainer:v["a"],VFlex:g["a"],VImg:y["a"],VLayout:w["a"]});var x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-container",[a("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[a("a",{attrs:{href:"downloadable/david_fentz_resume_2018_oct.pdf",download:""}},[e._v("Looking for my Resume?")])])],1),a("v-container",{staticClass:"hidden-sm-and-down",attrs:{id:"Timeline"}},[a("v-timeline",e._l(e.History,function(t){return a("v-timeline-item",{key:t.description,attrs:{color:"red lighten-2",large:""}},[a("span",{attrs:{slot:"opposite"},slot:"opposite"},[e._v(e._s(t.time))]),a("v-card",{staticClass:"elevation-2"},[a("v-card-title",{staticClass:"headline"},[e._v(e._s(t.description))]),a("v-card-text",[e._v("\n            "+e._s(t.details)+"\n          ")])],1)],1)}))],1),a("v-container",{staticClass:"hidden-md-and-up",attrs:{id:"Timeline"}},[a("v-timeline",{attrs:{dense:""}},e._l(e.History,function(t){return a("v-timeline-item",{key:t.description,attrs:{color:"red lighten-2",large:""}},[a("v-card",{staticClass:"elevation-2"},[a("v-card-title",{staticClass:"headline"},[e._v("\n            "+e._s(t.description)+" ("+e._s(t.time)+")\n          ")]),a("v-card-text",[e._v("\n            "+e._s(t.details)+"\n          ")])],1)],1)}))],1)],1)},k=[],I={data:function(){return{History:[{time:"2011",description:"Purdue University",details:'This was my first foray into academia, and I didn\'t really have any idea what I wanted to do so I studied Mechanical Engineering for a year. In my second year I studied Film & Video before reading "The Way of Zen" by Alan Watts and subsequently dropping out. I built the foundation for my engineering mindset during this period of time, and developed capacities to analyze finer media (which I now consider invaluable) from my studies in liberal arts.'},{time:"2013",description:"Summer Kitchen Family Farm",details:"After dropping out of college with the idea that I would become a buddhist monk (You can draw your own conclusions about how that went, haha), I decided to spend the summer working on organic farms. I got really lucky and landed in Fayetteville Arkansas with Mariah and Ira White. I fed & milked cows, planted basil, learned to brew mead, and hiked in the mountains. I learned a LOT about where my food comes from and what a happy family looks like."},{time:"2014",description:"Starbucks & ASU",details:"After deciding that becoming a farmer was not the optimal path for my life (enjoyable as it was) I joined Starbucks as a Barista and started looking for opportunities to get an education. Starbucks had a minimal tuition assistance program at the time, so I spend about a year re-building my GPA at Purdue before being accepted at ASU as a Software Engineering major. I spent a few years working part time and going to school full time."},{time:"June-August 2018",description:"Application Security Internship",details:"The culmination of all of that work was my internship with the Application Security team at Starbucks. This was an amazing experience inside and outside of the office. I made life-long friends and professional contacts that I still talk with today. I learned the basics of penetration testing web applications and Andriod applications. During this period of time I also built the coolest thing to date, a service/tool which scans GitHub for leaked information. The cherry on top... it actually returns repositories containing sensitive information."},{time:"2018-Present",description:"Keyot",details:"I'm employed as a Software Developer Consultant with Keyot, and will be working with Principal Financial Group in Des Moines, Iowa. I'm finishing up my degree, and plan to pivot my education to offensive security in the near future."}]}}},j=I,S=(a("d40e"),a("99d9")),T=a("12b2"),P=a("8414"),C=a("1e06"),V=Object(h["a"])(j,x,k,!1,null,null,null);V.options.__file="Experience.vue";var F=V.exports;p()(V,{VCard:m["a"],VCardText:S["a"],VCardTitle:T["a"],VContainer:v["a"],VLayout:w["a"],VTimeline:P["a"],VTimelineItem:C["a"]});var A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-flex",["None"===e.currentProject?a("v-container",{attrs:{fluid:"","grid-list-md5":""}},[a("v-layout",{attrs:{row:"",wrap:""}},e._l(e.myProjects,function(t){return a("v-flex",{key:t.Title,attrs:{"d-flex":"",xs12:"",sm6:"",md4:""}},[a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(n){var i=n.hover;return a("v-card",{class:"elevation-"+(i?12:2),on:{click:function(a){e.updateProject(t.Title)}}},[a("v-img",{attrs:{src:t.image,height:"300"}}),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[e._v(e._s(t.Title))]),a("div",[e._v(e._s(t.description))])])])],1)}}])})],1)}))],1):e._e(),"Tensegrity Tower"===e.currentProject?a("v-flex",[a("TowerProject")],1):e._e(),"Lab Bench Power Supply"===e.currentProject?a("v-flex",[a("PowerSupplyProject")],1):e._e(),"RF Replay Attack"===e.currentProject?a("v-flex",[a("RFReplayProject")],1):e._e()],1)},M=[],E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{"d-flex":""}},[a("v-card",{attrs:{id:"card-with-image",height:"300"}},[a("iframe",{attrs:{width:"100%",height:"100%",src:"https://www.youtube-nocookie.com/embed/WSAjLlHCzkE",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),a("p",{staticStyle:{"text-indent":"0em"},attrs:{id:"image-captions"}},[e._v("\n        (figure 1)\n        ")])])],1),a("v-flex",{attrs:{"d-flex":""}},[a("v-flex",{attrs:{id:"Section1"}},[a("p",[e._v("\n            I have been fascinated with "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Tensegrity"}},[e._v("\n            tensegrity")]),e._v(" ever since I first cracked open my\n            copy of "),a("a",{attrs:{href:"https://www.amazon.com/Synergetics-Explorations-Geometry-Buckminster-Fuller/dp/002541870X/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1546279637&sr=8-2"}},[e._v("\n            Synergetics")]),e._v(" by Buckminster Fuller. If you've never encountered his work,\n            and you're courageous I highly reccomend this tome. It is, hands down, the most\n            important work of literature that I have ever (partailly) read. I'd put it on the\n            same level as the Bhagavad Gita.\n            ")]),a("p",[e._v("\n              I really wanted to explore the possibilities of building tensegrity structures,\n              but I also wanted to play with microcontrollers and learn to solder as I had\n              just gotten my Hakko FX-888D(and I am still in love years later). So, why not\n              combine the two interests? The video in figure 1 shows my first test of\n              "),a("a",{attrs:{href:"https://github.com/bomjumaku/Tensegrity_Tower/blob/master/main.c"}},[e._v("\n              the C code which is running the animations")]),e._v(".\n            ")]),a("p",[e._v("\n              This was really just to ensure that I was driving the LEDs properly becore soldering\n              on the other lengths.\n            ")])])],1),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm12:"",md12:""}},[a("v-card",{attrs:{id:"card-with-image",height:"300"}},[a("iframe",{attrs:{width:"100%",height:"100%",src:"https://www.youtube-nocookie.com/embed/1Yq-MAyzhYM",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),a("p",{staticStyle:{"text-indent":"0em"},attrs:{id:"image-captions"}},[e._v("\n        (figure 2)\n        ")])])],1),a("v-flex",{attrs:{"d-flex":""}},[a("v-flex",{attrs:{id:"Section1"}},[a("p",[e._v("\n            Figure 2 shows the second test. The tower, once built, was to be 4 stories\n             tall, requiring 4 segments of LEDs. I needed to verify that I could run\n             animations across all 4 segments.\n            ")])])],1),a("v-flex",{attrs:{"d-flex":""}},[a("v-card",{attrs:{id:"card-with-image",height:"300"}},[a("iframe",{attrs:{width:"100%",height:"100%",src:"https://www.youtube-nocookie.com/embed/3sNhw1Zoaao",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),a("p",{staticStyle:{"text-indent":"0em"},attrs:{id:"image-captions"}},[e._v("\n        (figure 3)\n        ")])])],1),a("v-flex",{attrs:{"d-flex":""}},[a("v-flex",{attrs:{id:"Section1"}},[a("p",[e._v("\n            Figure 3 is really a combination of the first two tests, just to verify that\n            all my connections were mechanically and electrically stable before building\n            the tower and attaching the LED strips.\n            ")])])],1),a("v-flex",{attrs:{"d-flex":""}},[a("v-card",{attrs:{id:"card-with-image",height:"300"}},[a("iframe",{attrs:{width:"100%",height:"100%",src:"https://www.youtube-nocookie.com/embed/zWC6X0GnAXY",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),a("p",{staticStyle:{"text-indent":"0em"},attrs:{id:"image-captions"}},[e._v("\n        (figure 4)\n        ")])])],1),a("v-flex",{attrs:{"d-flex":""}},[a("v-flex",{attrs:{id:"Section1"}},[a("p",[e._v("\n            Figure 4 is the final product. The code linked above is exactly what you see running\n            in this video. Building the tower and learning how to tie a\n            "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Trucker%27s_hitch"}},[e._v("truker's hitch")]),e._v("\n            was 1/2 of the challenge and the fun. Unfortunately I didn't capture any of\n            the knotty business on video.\n            ")])])],1)],1)],1)},R=[],L={data:function(){return{}}},O=L,D=(a("30b2"),Object(h["a"])(O,E,R,!1,null,"3ed4b568",null));D.options.__file="TowerProject.vue";var H=D.exports;p()(D,{VCard:m["a"],VContainer:v["a"],VFlex:g["a"],VLayout:w["a"]});var q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:"","grid-list-md5":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md4:""}},[a("v-card",{attrs:{id:"card-with-image",height:"300"}},[a("iframe",{attrs:{width:"100%",height:"100%",src:"https://www.youtube-nocookie.com/embed/7lWcj_Bjz60",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),a("p",{staticStyle:{"text-indent":"0em"},attrs:{id:"image-captions"}},[e._v("\n        (figure 1)\n        ")])])],1),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md8:""}},[a("v-flex",{attrs:{id:"Section1"}},[a("p",[e._v("\n            This was a pragmatically driven project. I had just bought some soldering equipment,\n            and was really getting into electronics as a hobby. I needed a power supply to test\n            circuits before final deployment, and I needed a fume extractor to save my lungs.\n            Venting to the outdoors was not an option, so filtering was the next best thing.\n            ")]),a("p",[e._v("\n            Figure 1 shows me testing the PC power supply that I had converted to a lab power\n            supply\n            with one of the 12v fans that are used in the fume extractor shown in figure 2. It's a\n            pretty simple power supply. It's got 12v, 5v, 3.3v, and ground (with a few connections\n            for each). I added an LED to indicate when everything is hot, and a switch so that I\n            can power everything off without unplugging it.\n            ")])])],1),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md4:""}},[a("v-card",{attrs:{id:"card-with-image",height:"300"}},[a("iframe",{attrs:{width:"100%",height:"100%",src:"https://www.youtube-nocookie.com/embed/5Cfl4ms9bu8",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),a("p",{staticStyle:{"text-indent":"0em"},attrs:{id:"image-captions"}},[e._v("\n        (figure 2)\n        ")])])],1),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md8:""}},[a("v-flex",{attrs:{id:"Section1"}},[a("p",[e._v("\n            Figure 2 shows my fume extractor, which takes the cake for the most\n            hideous thing I have ever built with my hands. However, as you can see it\n            is practical. It's using 3 12v fans from an old server so it's got a lot\n            of power. In addition to that, the front swings open so that I can change\n            out the layers of carbon/HEPA filters really quickly.\n            ")]),a("p",[e._v("\n            And before you ask, no, I don't vape. That thing is used exclusively for\n            testing airflow.\n            ")])])],1)],1)],1)},z=[],B={data:function(){return{}}},G=B,$=(a("c6c3"),Object(h["a"])(G,q,z,!1,null,"2e40a07e",null));$.options.__file="PowerSupplyProject.vue";var K=$.exports;p()($,{VCard:m["a"],VContainer:v["a"],VFlex:g["a"],VLayout:w["a"]});var U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:"","grid-list-md5":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md4:""}},[a("v-card",{attrs:{height:"300"}},[a("iframe",{attrs:{height:"100%",width:"100%",src:"https://www.youtube-nocookie.com/embed/2QDRJ_KfMeQ",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md8:""}},[a("v-flex",{attrs:{id:"Section1"}},[a("p",[e._v("\n            The video there is the end product of a process that lasted months, and took me\n             from 100% noob to 90% noob within the world of software defined radio (SDR).\n            ")]),a("p",[e._v("\n               There's actually a lot of work that goes into SDR projects. You need to understand\n               the software portion (be that "),a("a",{attrs:{href:"https://www.gnuradio.org/"}},[e._v("GNU Radio")]),e._v(",\n                "),a("a",{attrs:{href:"https://airspy.com/download/"}},[e._v("SDR#")]),e._v(" , or \n               "),a("a",{attrs:{href:"https://github.com/jopohl/urh"}},[e._v("Universal Radio Hacker")]),e._v("), you need to\n               understand the fundamental principles of radio frequency communication protocols,\n               and ideally, you'll have some understanding digital signal processing. I had\n               none of those when I started, so this was a rough process to say the least. Luckilly\n               I had a ton of help from the guys over at "),a("a",{attrs:{href:"https://greatscottgadgets.com/sdr/"}},[e._v("\n               Great Scott Gadgets")]),e._v(".\n            ")])])],1),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md8:""}},[a("v-flex",{attrs:{id:"Section1"}},[a("p",[e._v("\n             Instead of providing a complete tutorial on how to pull off the attack, I'll go over the general\n             technique at a high level. Here's the deal, your KeyFob produces specific vibrations in the\n             electromagnetic material within which we are all immersed. The first step in being able to\n             mimic the behaviour of the Fob is to find the frequency that it comminicates at. There are\n             standards which you could look into, but it always best to look up the FCC ID of\n             your target device.\n            ")]),a("p",[e._v("\n               If you look at your Fob, you'll see an FCC ID printed somewhere (though it may be hidden). It's\n               mandated by law that any device communicating within a specified set of radio frequencies\n               define its behaviour and publish it publicly on the FCC's website. (it's necessary for \n               various reasons, but it's also good news for hackers) There are searchable\n                "),a("a",{attrs:{href:"https://fccid.io/"}},[e._v("databases")]),e._v(" of all of this information, and there is a TON\n                of information.\n             ")])])],1),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md4:""}},[a("v-card",{attrs:{id:"card-with-image",height:"300"}},[a("v-img",{attrs:{src:e.sdrcap,width:"100%",height:"90%"}}),a("p",{staticStyle:{"text-indent":"0em"},attrs:{id:"image-captions"}},[e._v("\n      (figure 1)\n      ")])],1)],1),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md4:""}},[a("v-card",{attrs:{id:"card-with-image",height:"300"}},[a("v-img",{attrs:{src:e.image2,width:"100%",height:"90%"}}),a("p",{staticStyle:{"text-indent":"0em"},attrs:{id:"image-captions"}},[e._v("\n      (figure 2)\n      ")])],1)],1),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md8:""}},[a("v-flex",{attrs:{id:"Section1"}},[a("p",[e._v("\n             Once you've identified the rough frequency range that your device is operating\n              on, and you've set up a SDR to listen around that range, you can actually \n              start listening to, or watching (figure 1) it! What you see in that image is\n              the RF packet that the Fob is sending. This, in and of itself, is a\n              lot of fun. \n            ")]),a("p",[e._v("\n              However, this information is not sufficient to manipulate all systems. For \n              older cars you can actually just record this packet, replay it over a tansmitter,\n              and enjoy all the privelages of that Fob indefinitely. For newer systems, or to\n              reverse engineer the communication protocols being used, it's probably best to\n              take a look at the actual message. Luckily, that's pretty easy too.\n            ")])])],1),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm12:"",md12:""}},[a("v-flex",{attrs:{id:"Section1"}},[a("p",[e._v("\n             SDR# is the program that I used to listen to the Fob signal originally. It's free and\n             with a lot of very cheap recieving antennas out of the box. This program can capture \n             data from the reciever and record it as a .wav file. The great thing about this is \n             we can just open it up in "),a("a",{attrs:{href:"https://www.audacityteam.org/"}},[e._v("Audacity")]),e._v(" \n             and investigate/manipulate the packet manually. \n            ")]),a("p",[e._v("\n              You can see the detailed signal in figure 2. This signal is using \n              "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Amplitude-shift_keying"}},[e._v("Amplitude Shift Keying")]),e._v(".\n              The binary bits are, examining the signal visually, \"short pulse\" and \"long pulse\". It doesn't \n              matter which is '0' and which is '1', only that they are distinct. \n            ")]),a("p",[e._v(" \n              You can see that there is this span of short pulses at the beginning of the packet (figure 2 is\n              actually showing three instances of the same packet sent at different times) which is suspiciously \n              long. This is for synchronization of the Fob transmitter and the vehicle's reciever. It's impossible\n              to determing where the data starts without comparing 2 or more unique packets with eachother. \n            ")]),a("p",[e._v("\n              The last step of this attack on my vehicle (which does not use\n               "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Rolling_code"}},[e._v("rolling codes")]),e._v("), is to replay the\n               packets from the Fob. This is what's shown in the video at the top of the write-up.\n            ")])])],1)],1)],1)},W=[],Y={data:function(){return{sdrcap:a("54e3"),image2:a("7c65")}}},N=Y,J=(a("25ca"),Object(h["a"])(N,U,W,!1,null,"632f95b2",null));J.options.__file="RFReplayProject.vue";var X=J.exports;p()(J,{VCard:m["a"],VContainer:v["a"],VFlex:g["a"],VImg:y["a"],VLayout:w["a"]});var Q={props:["currentProject"],components:{TowerProject:H,PowerSupplyProject:K,RFReplayProject:X},data:function(){return{image1:a("6c3b"),myProjects:[{Title:"Tensegrity Tower",image:a("2a04"),description:"Building a completely useless and mezmerizing luminescent structure."},{Title:"Lab Bench Power Supply",image:a("b343"),description:"Managing not to electrocute myself while converting a PC power supply to a bench power supply."},{Title:"RF Replay Attack",image:a("54e3"),description:"Capturing Key-FOB RF packets and replaying them at will."}]}},methods:{updateProject:function(e){this.$emit("changeProject",e)}}},Z=Q,ee=(a("60cd"),a("ce87")),te=Object(h["a"])(Z,A,M,!1,null,"217e4f02",null);te.options.__file="Projects.vue";var ae=te.exports;p()(te,{VCard:m["a"],VCardTitle:T["a"],VContainer:v["a"],VFlex:g["a"],VHover:ee["a"],VImg:y["a"],VLayout:w["a"]});var ne={name:"App",components:{AboutMe:_,Projects:ae,Experience:F},data:function(){return{bannerImg1:a("df72"),currentSelection:"About Me",currentProject:"None"}},methods:{updateProj:function(e){this.currentProject=e}}},ie=ne,re=(a("24cd"),a("7496")),oe=a("8336"),se=a("549c"),le=a("9910"),ce=a("71d9"),de=a("2a7f"),ue=Object(h["a"])(ie,o,s,!1,null,"d9a03bee",null);ue.options.__file="App.vue";var he=ue.exports;p()(ue,{VApp:re["a"],VBtn:oe["a"],VCard:m["a"],VContent:se["a"],VFlex:g["a"],VImg:y["a"],VLayout:w["a"],VSpacer:le["a"],VToolbar:ce["a"],VToolbarTitle:de["a"]});a("bf40");n["default"].config.productionTip=!1,n["default"].use(r.a),new n["default"]({render:function(e){return e(he)}}).$mount("#app")},"5ac8":function(e,t,a){},6028:function(e,t,a){},"60cd":function(e,t,a){"use strict";var n=a("25f6"),i=a.n(n);i.a},"6c3b":function(e,t,a){e.exports=a.p+"img/HoldingCoffeeInSeattle.994ff0d1.jpeg"},"714f":function(e,t,a){"use strict";var n=a("d87c"),i=a.n(n);i.a},"7c65":function(e,t,a){e.exports=a.p+"img/signal_image2.ffdd6126.png"},"7ec7":function(e,t,a){},b343:function(e,t,a){e.exports=a.p+"img/PowerSupply.275f574a.jpg"},c6c3:function(e,t,a){"use strict";var n=a("e7cc"),i=a.n(n);i.a},d40e:function(e,t,a){"use strict";var n=a("5ac8"),i=a.n(n);i.a},d87c:function(e,t,a){},df72:function(e,t,a){e.exports=a.p+"img/myface.bb50d280.jpg"},e7cc:function(e,t,a){}});
//# sourceMappingURL=app.acb34b11.js.map