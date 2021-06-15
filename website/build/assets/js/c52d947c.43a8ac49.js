(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4819],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return o},kt:function(){return m}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=a.createContext({}),d=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},o=function(t){var e=d(t.components);return a.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),k=d(r),m=n,u=k["".concat(l,".").concat(m)]||k[m]||c[m]||i;return r?a.createElement(u,s(s({ref:e},o),{},{components:r})):a.createElement(u,s({ref:e},o))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,s=new Array(i);s[0]=k;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:n,s[1]=p;for(var d=2;d<i;d++)s[d]=r[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},7711:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return o}});var a=r(4786),n=r(6843),i=(r(7294),r(3905)),s={id:"rtcdtlstransport",title:"Class: RTCDtlsTransport",sidebar_label:"RTCDtlsTransport",sidebar_position:0,custom_edit_url:null},p={unversionedId:"api/classes/rtcdtlstransport",id:"api/classes/rtcdtlstransport",isDocsHomePage:!1,title:"Class: RTCDtlsTransport",description:"Constructors",source:"@site/docs/api/classes/rtcdtlstransport.md",sourceDirName:"api/classes",slug:"/api/classes/rtcdtlstransport",permalink:"/werift-webrtc/website/build/docs/api/classes/rtcdtlstransport",editUrl:null,version:"current",sidebar_label:"RTCDtlsTransport",sidebarPosition:0,frontMatter:{id:"rtcdtlstransport",title:"Class: RTCDtlsTransport",sidebar_label:"RTCDtlsTransport",sidebar_position:0,custom_edit_url:null},sidebar:"someSidebar",previous:{title:"Class: RTCDtlsParameters",permalink:"/werift-webrtc/website/build/docs/api/classes/rtcdtlsparameters"},next:{title:"Class: RTCIceGatherer",permalink:"/werift-webrtc/website/build/docs/api/classes/rtcicegatherer"}},l=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"certificates",id:"certificates",children:[]},{value:"dataReceiver",id:"datareceiver",children:[]},{value:"dtls",id:"dtls",children:[]},{value:"iceTransport",id:"icetransport",children:[]},{value:"localCertificate",id:"localcertificate",children:[]},{value:"onStateChange",id:"onstatechange",children:[]},{value:"role",id:"role",children:[]},{value:"router",id:"router",children:[]},{value:"srtcp",id:"srtcp",children:[]},{value:"srtp",id:"srtp",children:[]},{value:"srtpStarted",id:"srtpstarted",children:[]},{value:"state",id:"state",children:[]},{value:"transportSequenceNumber",id:"transportsequencenumber",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"localParameters",id:"localparameters",children:[]}]},{value:"Methods",id:"methods",children:[{value:"sendData",id:"senddata",children:[]},{value:"sendRtcp",id:"sendrtcp",children:[]},{value:"sendRtp",id:"sendrtp",children:[]},{value:"setState",id:"setstate",children:[]},{value:"setupCertificate",id:"setupcertificate",children:[]},{value:"start",id:"start",children:[]},{value:"startSrtp",id:"startsrtp",children:[]},{value:"stop",id:"stop",children:[]}]}],d={toc:l};function o(t){var e=t.components,r=(0,n.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new RTCDtlsTransport"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"iceTransport"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"router"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"certificates"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"srtpProfiles?"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"iceTransport")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/werift-webrtc/website/build/docs/api/classes/rtcicetransport"},"RTCIceTransport")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"router")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"RtpRouter")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"certificates")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/werift-webrtc/website/build/docs/api/classes/rtccertificate"},"RTCCertificate"),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"srtpProfiles")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"[]")))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shinyoshiaki/werift-webrtc/blob/32ca930/packages/webrtc/src/transport/dtls.ts#L46"},"packages/webrtc/src/transport/dtls.ts:46")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"certificates"},"certificates"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"certificates"),": ",(0,i.kt)("a",{parentName:"p",href:"/werift-webrtc/website/build/docs/api/classes/rtccertificate"},"RTCCertificate"),"[]"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"datareceiver"},"dataReceiver"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"dataReceiver"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"buf"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"buf"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"buf")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Buffer"))))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shinyoshiaki/werift-webrtc/blob/32ca930/packages/webrtc/src/transport/dtls.ts#L39"},"packages/webrtc/src/transport/dtls.ts:39")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dtls"},"dtls"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"dtls"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"DtlsSocket")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shinyoshiaki/werift-webrtc/blob/32ca930/packages/webrtc/src/transport/dtls.ts#L40"},"packages/webrtc/src/transport/dtls.ts:40")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"icetransport"},"iceTransport"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"iceTransport"),": ",(0,i.kt)("a",{parentName:"p",href:"/werift-webrtc/website/build/docs/api/classes/rtcicetransport"},"RTCIceTransport")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"localcertificate"},"localCertificate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"localCertificate"),": ",(0,i.kt)("a",{parentName:"p",href:"/werift-webrtc/website/build/docs/api/classes/rtccertificate"},"RTCCertificate")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shinyoshiaki/werift-webrtc/blob/32ca930/packages/webrtc/src/transport/dtls.ts#L46"},"packages/webrtc/src/transport/dtls.ts:46")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onstatechange"},"onStateChange"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"onStateChange"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),"<","[",(0,i.kt)("inlineCode",{parentName:"p"},'"closed"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"connecting"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"failed"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"new"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"connected"'),"]",">"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shinyoshiaki/werift-webrtc/blob/32ca930/packages/webrtc/src/transport/dtls.ts#L44"},"packages/webrtc/src/transport/dtls.ts:44")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"role"},"role"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"role"),": ",(0,i.kt)("a",{parentName:"p",href:"/werift-webrtc/website/build/docs/api/modules#dtlsrole"},"DtlsRole"),' = "auto"'),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shinyoshiaki/werift-webrtc/blob/32ca930/packages/webrtc/src/transport/dtls.ts#L35"},"packages/webrtc/src/transport/dtls.ts:35")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"router"},"router"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"router"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"RtpRouter")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"srtcp"},"srtcp"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"srtcp"),": ",(0,i.kt)("a",{parentName:"p",href:"/werift-webrtc/website/build/docs/api/classes/srtcpsession"},"SrtcpSession")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shinyoshiaki/werift-webrtc/blob/32ca930/packages/webrtc/src/transport/dtls.ts#L42"},"packages/webrtc/src/transport/dtls.ts:42")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"srtp"},"srtp"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"srtp"),": ",(0,i.kt)("a",{parentName:"p",href:"/werift-webrtc/website/build/docs/api/classes/srtpsession"},"SrtpSession")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shinyoshiaki/werift-webrtc/blob/32ca930/packages/webrtc/src/transport/dtls.ts#L41"},"packages/webrtc/src/transport/dtls.ts:41")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"srtpstarted"},"srtpStarted"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"srtpStarted"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shinyoshiaki/werift-webrtc/blob/32ca930/packages/webrtc/src/transport/dtls.ts#L36"},"packages/webrtc/src/transport/dtls.ts:36")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"state"},"state"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"state"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"closed"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"connecting"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"failed"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"new"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"connected"'),' = "new"'),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shinyoshiaki/werift-webrtc/blob/32ca930/packages/webrtc/src/transport/dtls.ts#L34"},"packages/webrtc/src/transport/dtls.ts:34")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transportsequencenumber"},"transportSequenceNumber"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"transportSequenceNumber"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = 0"),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shinyoshiaki/werift-webrtc/blob/32ca930/packages/webrtc/src/transport/dtls.ts#L37"},"packages/webrtc/src/transport/dtls.ts:37")),(0,i.kt)("h2",{id:"accessors"},"Accessors"),(0,i.kt)("h3",{id:"localparameters"},"localParameters"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"localParameters"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/werift-webrtc/website/build/docs/api/classes/rtcdtlsparameters"},"RTCDtlsParameters")),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/werift-webrtc/website/build/docs/api/classes/rtcdtlsparameters"},"RTCDtlsParameters")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shinyoshiaki/werift-webrtc/blob/32ca930/packages/webrtc/src/transport/dtls.ts#L55"},"packages/webrtc/src/transport/dtls.ts:55")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"senddata"},"sendData"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"sendData"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Buffer"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shinyoshiaki/werift-webrtc/blob/32ca930/packages/webrtc/src/transport/dtls.ts#L170"},"packages/webrtc/src/transport/dtls.ts:170")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sendrtcp"},"sendRtcp"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"sendRtcp"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"packets"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"packets")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/werift-webrtc/website/build/docs/api/modules#rtcppacket"},"RtcpPacket"),"[]")))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shinyoshiaki/werift-webrtc/blob/32ca930/packages/webrtc/src/transport/dtls.ts#L181"},"packages/webrtc/src/transport/dtls.ts:181")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sendrtp"},"sendRtp"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"sendRtp"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"payload"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"header"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"payload")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Buffer"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"header")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/werift-webrtc/website/build/docs/api/classes/rtpheader"},"RtpHeader"))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shinyoshiaki/werift-webrtc/blob/32ca930/packages/webrtc/src/transport/dtls.ts#L175"},"packages/webrtc/src/transport/dtls.ts:175")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setstate"},"setState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"setState"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"state"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"closed"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"connecting"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"failed"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"new"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"connected"'))))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shinyoshiaki/werift-webrtc/blob/32ca930/packages/webrtc/src/transport/dtls.ts#L191"},"packages/webrtc/src/transport/dtls.ts:191")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setupcertificate"},"setupCertificate"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setupCertificate"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shinyoshiaki/werift-webrtc/blob/32ca930/packages/webrtc/src/transport/dtls.ts#L62"},"packages/webrtc/src/transport/dtls.ts:62")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"start"},"start"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"start"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"remoteParameters"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"remoteParameters")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/werift-webrtc/website/build/docs/api/classes/rtcdtlsparameters"},"RTCDtlsParameters"))))),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shinyoshiaki/werift-webrtc/blob/32ca930/packages/webrtc/src/transport/dtls.ts#L80"},"packages/webrtc/src/transport/dtls.ts:80")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"startsrtp"},"startSrtp"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"startSrtp"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shinyoshiaki/werift-webrtc/blob/32ca930/packages/webrtc/src/transport/dtls.ts#L135"},"packages/webrtc/src/transport/dtls.ts:135")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stop"},"stop"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"stop"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shinyoshiaki/werift-webrtc/blob/32ca930/packages/webrtc/src/transport/dtls.ts#L198"},"packages/webrtc/src/transport/dtls.ts:198")))}o.isMDXComponent=!0}}]);