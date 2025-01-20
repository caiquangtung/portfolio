(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{66677:function(e,t,s){Promise.resolve().then(s.bind(s,73131)),Promise.resolve().then(s.bind(s,28633)),Promise.resolve().then(s.t.bind(s,38173,23)),Promise.resolve().then(s.t.bind(s,231,23)),Promise.resolve().then(s.bind(s,88660))},73131:function(e,t,s){"use strict";s.r(t);var l=s(57437),a=s(2265);t.default=e=>{let{children:t,identifier:s}=e;return(0,a.useEffect)(()=>{let e=document.querySelector(".glow-container-".concat(s)),t=document.querySelectorAll(".glow-card-".concat(s)),l={proximity:40,spread:80,blur:10,gap:32,vertical:!1,opacity:0},a=e=>{for(let s of t){let t=s.getBoundingClientRect();(null==e?void 0:e.x)>t.left-l.proximity&&(null==e?void 0:e.x)<t.left+t.width+l.proximity&&(null==e?void 0:e.y)>t.top-l.proximity&&(null==e?void 0:e.y)<t.top+t.height+l.proximity?s.style.setProperty("--active",1):s.style.setProperty("--active",l.opacity);let a=[t.left+.5*t.width,t.top+.5*t.height],r=180*Math.atan2((null==e?void 0:e.y)-a[1],(null==e?void 0:e.x)-a[0])/Math.PI;r=r<0?r+360:r,s.style.setProperty("--start",r+90)}};return document.body.addEventListener("pointermove",a),e.style.setProperty("--gap",l.gap),e.style.setProperty("--blur",l.blur),e.style.setProperty("--spread",l.spread),e.style.setProperty("--direction",l.vertical?"column":"row"),a(),()=>{document.body.removeEventListener("pointermove",a)}},[s]),(0,l.jsx)("div",{className:"glow-container-".concat(s," glow-container rounded-lg"),children:(0,l.jsxs)("article",{className:"glow-card glow-card-".concat(s," h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full"),children:[(0,l.jsx)("div",{className:"glows"}),t]})})}},28633:function(e,t,s){"use strict";s.d(t,{default:function(){return h}});var l=s(57437);let a=[".NET","React","NextJS","MySql","MongoDB","Postgres","Docker","AWS"];var r=s(66648),n=s(87138),i=s(2265),c=s(45614),d=s(14063),o=s(54018),x=s(65125),m=s(31318),h=function(e){var t;let{profile:s}=e,[h,p]=(0,i.useState)(""),[u,g]=(0,i.useState)(0),j="I'm .NET Dev";return(0,i.useEffect)(()=>{if(u<j.length){let e=setTimeout(()=>{p(e=>e+j[u]),g(e=>e+1)},150);return()=>clearTimeout(e)}{let e=setTimeout(()=>{p(""),g(0)},1e3);return()=>clearTimeout(e)}},[u,j]),(0,l.jsxs)("section",{className:"relative flex flex-col items-center justify-between py-4 lg:py-12",children:[(0,l.jsxs)("div",{className:"overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8",children:[(0,l.jsxs)("h1",{className:"text-white text-center md:text-left text-2xl lg:text-3xl xl:text-4xl font-semibold leading-relaxed",children:["Hello! \uD83D\uDC4B, I'm"," ",(0,l.jsx)("span",{className:"bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-transparent bg-clip-text",children:s.name})]}),(0,l.jsx)("p",{className:"text-gray-300 mt-2 text-center md:text-left",children:"Welcome to my portfolio site, where you can learn more about me."}),(0,l.jsx)("h2",{className:"mt-4 text-white text-center md:text-left text-xl lg:text-2xl font-medium leading-relaxed",style:{minHeight:"40px"},children:h})]}),(0,l.jsxs)("div",{className:"grid grid-cols-1 items-center md:grid-cols-2 lg:gap-12 gap-y-8",children:[(0,l.jsxs)("div",{className:"flex flex-col items-start justify-center rounded-lg p-3 lg:py-5 lg:px-12 bg-primary-bg h-full",children:[(0,l.jsx)("div",{className:"flex w-full justify-center",children:(0,l.jsx)(r.default,{src:s.avatar_url,width:128,height:128,alt:s.name,className:"rounded-full transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"})}),(0,l.jsx)("p",{className:"text-gray-300 text-sm lg:text-base my-4 lg:my-6 text-center",children:s.bio}),(0,l.jsxs)("div",{className:"w-full flex justify-center items-center gap-5",children:[(0,l.jsx)(n.default,{href:"https://github.com/caiquangtung",target:"_blank",className:"transition-all text-teal-500 hover:scale-125 duration-300",children:(0,l.jsx)(c.rFR,{size:24})}),(0,l.jsx)(n.default,{href:"https://www.linkedin.com/in/quangt%C3%B9ng-undefined-b0414a265/",target:"_blank",className:"transition-all text-teal-500 hover:scale-125 duration-300",children:(0,l.jsx)(c.NQh,{size:24})}),(0,l.jsx)(n.default,{href:"https://www.facebook.com/diranguci",target:"_blank",className:"transition-all text-teal-500 hover:scale-125 duration-300",children:(0,l.jsx)(d.Am9,{size:24})}),(0,l.jsx)(n.default,{href:"https://leetcode.com/caiquangtung/",target:"_blank",className:"transition-all text-teal-500 hover:scale-125 duration-300",children:(0,l.jsx)(m.LRI,{size:24})}),(0,l.jsx)(n.default,{href:"https://twitter.com/caiquangtung",target:"_blank",className:"transition-all text-teal-500 hover:scale-125 duration-300",children:(0,l.jsx)(o.lcJ,{size:24})})]}),(0,l.jsx)("div",{className:"w-full justify-center flex items-center gap-3 mt-6",children:(0,l.jsx)(n.default,{target:"_blank",href:"",className:"bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600",children:(0,l.jsxs)("button",{className:"px-3 text-xs md:px-4 py-2 md:py-2.5 bg-[#0d1224] rounded-full border-none text-center font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3",children:[(0,l.jsx)("span",{children:"Get Resume"}),(0,l.jsx)(x.uKn,{size:16})]})})})]}),(0,l.jsxs)("div",{className:"h-full from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]",children:[(0,l.jsxs)("div",{className:"flex flex-row",children:[(0,l.jsx)("div",{className:"h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"}),(0,l.jsx)("div",{className:"h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"})]}),(0,l.jsx)("div",{className:"px-4 lg:px-8 py-5",children:(0,l.jsxs)("div",{className:"flex flex-row space-x-2",children:[(0,l.jsx)("div",{className:"h-3 w-3 rounded-full bg-red-500"}),(0,l.jsx)("div",{className:"h-3 w-3 rounded-full bg-orange-400"}),(0,l.jsx)("div",{className:"h-3 w-3 rounded-full bg-green-400"})]})}),(0,l.jsx)("div",{className:"overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8",children:(0,l.jsxs)("code",{className:"font-mono text-xs md:text-sm lg:text-base",children:[(0,l.jsxs)("div",{className:"blink",children:[(0,l.jsx)("span",{className:"mr-2 text-blue-400",children:"public class"}),(0,l.jsx)("span",{className:"mr-2 text-violet-400",children:"Developer"})]}),(0,l.jsx)("div",{children:(0,l.jsx)("span",{className:"text-gray-400",children:"{"})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"ml-4 lg:ml-8 mr-2 text-blue-400",children:"public string"}),(0,l.jsx)("span",{className:"text-white",children:"Name"}),(0,l.jsx)("span",{className:"mr-2 text-pink-400",children:"="}),(0,l.jsx)("span",{className:"text-green-400",children:'"'.concat((null==s?void 0:s.name)||"",'"')}),(0,l.jsx)("span",{className:"text-gray-400",children:";"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"ml-4 lg:ml-8 mr-2 text-blue-400",children:"public string"}),(0,l.jsx)("span",{className:"text-white",children:"Company"}),(0,l.jsx)("span",{className:"mr-2 text-pink-400",children:"="}),(0,l.jsx)("span",{className:"text-green-400",children:'"'.concat((null==s?void 0:s.company)||"",'"')}),(0,l.jsx)("span",{className:"text-gray-400",children:";"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"ml-4 lg:ml-8 mr-2 text-blue-400",children:"public string"}),(0,l.jsx)("span",{className:"text-white",children:"Location"}),(0,l.jsx)("span",{className:"mr-2 text-pink-400",children:"="}),(0,l.jsx)("span",{className:"text-green-400",children:'"'.concat((null==s?void 0:s.location)||"",'"')}),(0,l.jsx)("span",{className:"text-gray-400",children:";"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"ml-4 lg:ml-8 mr-2 text-blue-400",children:"public int"}),(0,l.jsx)("span",{className:"text-white",children:"Followers"}),(0,l.jsx)("span",{className:"mr-2 text-pink-400",children:"="}),(0,l.jsx)("span",{className:"text-orange-400",children:(null==s?void 0:s.followers)||0}),(0,l.jsx)("span",{className:"text-gray-400",children:";"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"ml-4 lg:ml-8 mr-2 text-blue-400",children:"public int"}),(0,l.jsx)("span",{className:"text-white",children:"Following"}),(0,l.jsx)("span",{className:"mr-2 text-pink-400",children:"="}),(0,l.jsx)("span",{className:"text-orange-400",children:(null==s?void 0:s.following)||0}),(0,l.jsx)("span",{className:"text-gray-400",children:";"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"ml-4 lg:ml-8 mr-2 text-blue-400",children:"public int"}),(0,l.jsx)("span",{className:"text-white",children:"Repositories"}),(0,l.jsx)("span",{className:"mr-2 text-pink-400",children:"="}),(0,l.jsx)("span",{className:"text-orange-400",children:(null==s?void 0:s.public_repos)||0}),(0,l.jsx)("span",{className:"text-gray-400",children:";"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"ml-4 lg:ml-8 mr-2 text-blue-400",children:"public string[]"}),(0,l.jsx)("span",{className:"text-white",children:"Skills"}),(0,l.jsx)("span",{className:"mr-2 text-pink-400",children:"="}),(0,l.jsx)("span",{className:"text-blue-400",children:"new"}),(0,l.jsx)("span",{className:"text-white",children:" string[]"}),(0,l.jsx)("span",{className:"text-gray-400",children:" { "}),a.map((e,t)=>(0,l.jsxs)("span",{children:[(0,l.jsx)("span",{className:"text-green-400",children:'"'.concat(e,'"')}),t!==a.length-1&&(0,l.jsx)("span",{className:"text-gray-400",children:", "})]},t)),(0,l.jsx)("span",{className:"text-gray-400",children:" }"}),(0,l.jsx)("span",{className:"text-gray-400",children:";"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"ml-4 lg:ml-8 mr-2 text-blue-400",children:"public bool"}),(0,l.jsx)("span",{className:"text-white",children:"IsHireable"}),(0,l.jsx)("span",{className:"mr-2 text-pink-400",children:"="}),(0,l.jsx)("span",{className:"text-orange-400",children:String(null!==(t=null==s?void 0:s.hireable)&&void 0!==t&&t).toLowerCase()}),(0,l.jsx)("span",{className:"text-gray-400",children:";"})]}),(0,l.jsx)("div",{children:(0,l.jsx)("span",{className:"text-gray-400",children:"}"})})]})})]})]})]})}}},function(e){e.O(0,[281,582,306,420,447,231,969,971,23,744],function(){return e(e.s=66677)}),_N_E=e.O()}]);