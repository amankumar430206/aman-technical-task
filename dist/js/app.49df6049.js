(function(e){function t(t){for(var r,o,c=t[0],i=t[1],u=t[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},s=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-241dbb6a":"ca938720","chunk-c42fd57c":"eb51fc5e"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-241dbb6a":1,"chunk-c42fd57c":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-241dbb6a":"f53ebfc7","chunk-c42fd57c":"6495b981"}[e]+".css",a=i.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],b.parentNode.removeChild(b),n(s)},b.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(b)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var b=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var b=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2a35":function(e,t,n){},"519c":function(e,t,n){"use strict";n("bac2")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,a,s){var c=Object(r["y"])("Navbar"),i=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(c),Object(r["i"])(i)],64)}var a={class:"navbar navbar-expand-lg navbar-light bg-white shadow-sm"},s={class:"container-fluid"},c=Object(r["h"])("Vue"),i=Object(r["g"])("span",{class:"text-primary"},"Task",-1),u=Object(r["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["g"])("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarSupportedContent"},d={class:"navbar-nav ms-auto mb-2 mb-lg-0"},b={class:"nav-item"},m=Object(r["h"])("Home"),f={key:0,class:"nav-item dropdown"},g={tag:"a",class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},p=Object(r["g"])("ul",{class:"dropdown-menu","aria-labelledby":"navbarDropdown"},[Object(r["g"])("li",null,[Object(r["g"])("a",{class:"dropdown-item",href:"#"},"Profile")]),Object(r["g"])("li",null,[Object(r["g"])("a",{class:"dropdown-item",href:"#"},"Notifications")])],-1);function h(e,t,n,o,h,v){var O=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("nav",a,[Object(r["g"])("div",s,[Object(r["i"])(O,{tag:"a",class:"navbar-brand fw-bold",to:{name:"home"}},{default:Object(r["E"])((function(){return[c,i]})),_:1}),u,Object(r["g"])("div",l,[Object(r["g"])("ul",d,[Object(r["g"])("li",b,[e.$store.getters.loggedIn?(Object(r["r"])(),Object(r["d"])(O,{key:0,"exact-active-class":"active",tag:"a",to:"/me",class:"nav-link"},{default:Object(r["E"])((function(){return[m]})),_:1})):Object(r["e"])("",!0)]),e.$store.getters.loggedIn?(Object(r["r"])(),Object(r["f"])("li",f,[Object(r["g"])("a",g,Object(r["A"])(v.currentUser),1),p])):Object(r["e"])("",!0)]),e.$store.getters.loggedIn?(Object(r["r"])(),Object(r["f"])("button",{key:0,onClick:t[0]||(t[0]=function(e){return v.logout()}),class:"btn btn-danger px-4 ms-4"}," Logout ")):Object(r["e"])("",!0),e.$store.getters.loggedIn?Object(r["e"])("",!0):(Object(r["r"])(),Object(r["f"])("button",{key:1,class:"btn btn-primary px-4 ms-2",onClick:t[1]||(t[1]=function(e){return v.signIn()})}," Sign In "))])])])}var v={computed:{currentUser:function(){return this.$store.getters.getCurrentUser}},methods:{logout:function(){this.$store.dispatch("logout"),this.$router.push({name:"home"})},signIn:function(){this.$router.push({name:"home"})}}},O=n("6b0d"),j=n.n(O);const y=j()(v,[["render",h]]);var w=y,k={components:{Navbar:w}};n("519c");const C=j()(k,[["render",o]]);var x=C,I=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),S={class:"home bg-light"};function U(e,t,n,o,a,s){var c=Object(r["y"])("Login");return Object(r["r"])(),Object(r["f"])("div",S,[Object(r["i"])(c)])}var _=function(e){return Object(r["u"])("data-v-df0af95a"),e=e(),Object(r["s"])(),e},P={class:"form-signin"},E={class:"branding text-center my-3 mb-4"},q=Object(r["h"])("Vue"),T=_((function(){return Object(r["g"])("span",{class:"text-primary"},"Task",-1)})),L={class:"form-floating"},$=_((function(){return Object(r["g"])("label",{for:"floatingInput"},"Username",-1)})),A={class:"form-floating"},B=_((function(){return Object(r["g"])("label",{for:"floatingPassword"},"Password",-1)})),N=_((function(){return Object(r["g"])("button",{class:"w-100 btn btn-lg btn-primary",type:"submit"}," Sign in ",-1)})),F=_((function(){return Object(r["g"])("div",{class:"mt-4 text-center"},[Object(r["g"])("p",{class:"p-0 m-0"},"or"),Object(r["g"])("a",{href:"#",class:"text-muted"},"Create an Account")],-1)}));function M(e,t,n,o,a,s){var c=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("main",P,[Object(r["g"])("form",{onSubmit:t[2]||(t[2]=Object(r["G"])((function(e){return s.login()}),["prevent"])),class:"",autocomplete:"off"},[Object(r["g"])("div",E,[Object(r["g"])("h3",null,[Object(r["i"])(c,{tag:"a",class:"text-decoration-none text-dark fw-bold",to:{name:"home"}},{default:Object(r["E"])((function(){return[q,T]})),_:1})])]),Object(r["g"])("div",L,[Object(r["F"])(Object(r["g"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.form.username=e}),type:"text",class:"form-control",placeholder:"Username",required:""},null,512),[[r["C"],a.form.username]]),$]),Object(r["g"])("div",A,[Object(r["F"])(Object(r["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.form.password=e}),type:"password",class:"form-control",placeholder:"Password",required:""},null,512),[[r["C"],a.form.password]]),B]),N,F],32)])}var D={data:function(){return{form:{username:null,password:null}}},methods:{login:function(){var e={username:this.form.username,password:this.form.password};"kim"==e.username&&"kim"==e.password?(this.$store.dispatch("setCurrentUser",e.username),this.$router.push({name:"dashboard"})):null!=e.password&&null!=e.username||alert("Incorrect Credentials")}}};n("8e27");const H=j()(D,[["render",M],["__scopeId","data-v-df0af95a"]]);var V=H,W={name:"Home",components:{Login:V}};n("f119");const J=j()(W,[["render",U],["__scopeId","data-v-282d9e8d"]]);var G=J,K=n("5502"),R={currentUser:localStorage.getItem("user")||null},z={getCurrentUser:function(e){return e.currentUser},loggedIn:function(e){return null!==e.currentUser}},Q={setCurrentUser:function(e,t){e.currentUser=t},logout:function(e){e.loggedIn=!1,e.currentUser=null}},X={setCurrentUser:function(e,t){localStorage.setItem("user",t),e.commit("setCurrentUser",t)},logout:function(e){localStorage.removeItem("user"),e.commit("logout")}},Y={state:R,getters:z,actions:X,mutations:Q},Z={blogs:[{title:"The 2020 Unspoken Smiles Fellows!",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eius consequuntur ullam nihil sint illum nesciunt porro veniam commodi exercitationem natus voluptatem modi libero, repudiandae alias optio, repellendus blanditiis praesentium at reiciendis neque eos esse dicta nisi. Cum reiciendis maiores nam quisquam sequi accusamus unde dignissimos aliquam, quibusdam praesentium id.",author:"kim"},{title:"The Power of Women in Politics Part 2: Leading Women in Our Community with Lindsey Boylan",description:"For instance, Mental Health is the cornerstone of my campaign platform. It's a subject that people don't like to talk about, which stands to reason why it is not treated on par with physical health, even though it should be. I have been very vocal about my experience growing up in a family that suffered from mental illness and addiction, and my own struggle with postpartum depression. We can't get the help we need unless we speak out on the issues.",author:"kim"}]},ee={getBlogs:function(e){return e.blogs}},te={composeBlog:function(e,t){e.blogs.unshift(t)}},ne={composeBlog:function(e,t){e.commit("composeBlog",t)}},re={state:Z,getters:ee,actions:ne,mutations:te},oe=Object(K["a"])({modules:{store_auth:Y,store_blogs:re}}),ae=[{path:"/",name:"home",component:G,beforeEnter:function(e,t,n){oe.getters.loggedIn?n({name:"dashboard"}):n()}},{path:"/me",name:"dashboard",beforeEnter:function(e,t,n){oe.getters.loggedIn?n():(alert("Sign In Required!"),n({name:"home"}))},component:function(){return n.e("chunk-c42fd57c").then(n.bind(null,"7277"))}},{path:"/compose",name:"compose",component:function(){return n.e("chunk-241dbb6a").then(n.bind(null,"61b5"))}}],se=Object(I["a"])({history:Object(I["b"])("/"),routes:ae}),ce=se;Object(r["c"])(x).use(oe).use(ce).mount("#app")},"8e27":function(e,t,n){"use strict";n("2a35")},a128:function(e,t,n){},bac2:function(e,t,n){},f119:function(e,t,n){"use strict";n("a128")}});
//# sourceMappingURL=app.49df6049.js.map