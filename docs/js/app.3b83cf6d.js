(function(A){function t(t){for(var o,s,r=t[0],a=t[1],h=t[2],d=0,l=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&l.push(i[s][0]),i[s]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(A[o]=a[o]);u&&u(t);while(l.length)l.shift()();return n.push.apply(n,h||[]),e()}function e(){for(var A,t=0;t<n.length;t++){for(var e=n[t],o=!0,r=1;r<e.length;r++){var a=e[r];0!==i[a]&&(o=!1)}o&&(n.splice(t--,1),A=s(s.s=e[0]))}return A}var o={},i={app:0},n=[];function s(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return A[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=A,s.c=o,s.d=function(A,t,e){s.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:e})},s.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},s.t=function(A,t){if(1&t&&(A=s(A)),8&t)return A;if(4&t&&"object"===typeof A&&A&&A.__esModule)return A;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var o in A)s.d(e,o,function(t){return A[t]}.bind(null,o));return e},s.n=function(A){var t=A&&A.__esModule?function(){return A["default"]}:function(){return A};return s.d(t,"a",t),t},s.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},s.p="./";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=t,r=r.slice();for(var h=0;h<r.length;h++)t(r[h]);var u=a;n.push([0,"chunk-vendors"]),e()})({0:function(A,t,e){A.exports=e("56d7")},"4d97":function(A,t,e){"use strict";e("71bb")},"56d7":function(A,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),i=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"app"}},[e("pre",{staticClass:"info-screen"},[A._v("  "),e("h4",[A._v("按 tab 调整获取焦点的元素")]),e("h4",[A._v("按住shift 斜角等比例缩放")]),e("h4",[A._v("按方向键 单步移动元素 （1px）")]),A._v(A._s(A.recs[A.focusIndex]))]),e("div",{staticClass:"canvas"},A._l(A.recs,(function(t,o){return e("vue-drag-resizer",{key:o,attrs:{width:t.width,height:t.height,left:t.left,top:t.top,rotate:t.rotate,focus:A.focusIndex===o,"focus-z-index":999,canvas:"#app"},on:{"update:width":function(e){return A.$set(t,"width",e)},"update:height":function(e){return A.$set(t,"height",e)},"update:left":function(e){return A.$set(t,"left",e)},"update:top":function(e){return A.$set(t,"top",e)},"update:rotate":function(e){return A.$set(t,"rotate",e)},focus:function(t){return A.handleFocus(o)}}},[t.text?e("img",{attrs:{src:t.img,alt:""}}):e("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.img,alt:""}}),t.text?e("div",{staticClass:"text",staticStyle:{width:"100%",height:"100%"},attrs:{src:t.img,alt:""}},[A._v(" "+A._s(t.text)+" ")]):A._e()])})),1)])},n=[],s=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{ref:"drager",class:["yo-canvas-drager",{active:A.mousedown||A.focus}],style:A.DragerStyles,attrs:{tabindex:A.tabindex},on:{focus:A.handleDragerFocus,mousedown:A.handleDragerMouseDown}},[e("div",{ref:"el",staticClass:"yo-drag-el"},[A._t("default")],2),A.focus||A.mousedown?e("div",{staticClass:"yo-drager-resize-spans"},[A._l(8,(function(t){return e("span",{key:t,staticClass:"yo-canvas-drager-pointer",on:{mousedown:function(e){return e.stopPropagation(),e.preventDefault(),A.handlePointMouseDown(e,t)}}})})),e("span",{staticClass:"yo-canvas-drager-rotate-line",style:A.rotateStyle,on:{mousedown:function(t){return t.stopPropagation(),t.preventDefault(),A.handleRoateMouseDown.apply(null,arguments)}}})],2):A._e()])},r=[];e("a9e3"),e("99af"),e("caad");function a(A,t,e){var o=e+A,i=(o-A)/A;return{width:o,height:t+t*i}}var h="data:application/octet-stream;base64,AAACAAEAGBgAAAwADACICQAAFgAAACgAAAAYAAAAMAAAAAEAIAAAAAAAYAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAJwAAAEkAAABpAAAAcAAAAF0AAAA3AAAAEwAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEYAAAC0AAAA8QAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA1wAAAIQAAAAYAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAlAAAAP8AAAD8AAAApgAAAFoAAAA3AAAAMAAAAEQAAAB3AAAAzwAAAP8AAADlAAAAUgAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAC7AAAA/wAAAKUAAAAlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFYAAADgAAAA/wAAAG0AAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0AAAC/AAAAggAAAAAAAAAAAAAAAgAAAAIAAAABAAAAAQAAAAIAAAACAAAAAQAAAAAAAAAdAAAAwQAAAP8AAABVAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAFQAAANoAAADnAAAAIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEMAAAD/AAAAiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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",u={props:{tabindex:{type:Number,default:1},focusZIndex:{type:Number,default:1},left:{type:Number,default:0},top:{type:Number,default:0},rotate:{type:Number,default:0},width:{type:Number,default:0},height:{type:Number,default:0},canvas:{type:String,default:"body"},focus:{type:Boolean,default:!1},leftMousedownStopPropagation:{type:Boolean,default:!0},leftMousedownPreventDefault:{type:Boolean,default:!0},mousemoveStopPropagation:{type:Boolean,default:!0},mousemovePreventDefault:{type:Boolean,default:!0}},computed:{DragerStyles:function(){return"\n        z-index: ".concat(this.zIndex,";\n        width: ").concat(this.width,"px;\n        height: ").concat(this.height,"px;\n        left: ").concat(this.left,"px;\n        top: ").concat(this.top,"px;\n        transform: rotate(").concat(this.rotate,"deg);\n      ")},elementStyle:function(){return"\n        width: ".concat(this.width,"px;\n        height: ").concat(this.height,"px;\n      ")},rotateStyle:function(){return"cursor: url(".concat(h,"), auto;")}},watch:{focus:{immediate:!0,handler:function(A){var t=this;A?this.$nextTick((function(){t.handleDragerFocus()})):this.handleDragerBlur()}}},data:function(){return{zIndex:this.tabindex+1,canvasDom:null,canvasInfo:{bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0},mousedown:!1,mousedownPos:{x:0,y:0},dragerInfo:{top:0,left:0,width:0,height:0},currentDir:0}},methods:{getCanvasInfo:function(){this.canvasDom=document.querySelector(this.canvas),this.canvasInfo=this.canvasDom.getBoundingClientRect()},getDragerInfo:function(){var A=this.$refs.drager,t=A.offsetTop,e=A.offsetLeft,o=A.offsetHeight,i=A.offsetWidth;this.dragerInfo={top:t,left:e,height:o,width:i},this.$emit("update:width",i),this.$emit("update:height",o),this.$emit("update:top",t),this.$emit("update:left",e),this.$emit("change",{top:t,left:e,height:o,width:i,rotate:this.rotate})},handleDragerFocus:function(){this.$emit("focus"),this.getCanvasInfo(),this.zIndex=this.focusZIndex||this.tabindex+1,document.addEventListener("keydown",this.handleDragerKeyDown)},handleDragerBlur:function(){this.$emit("blur"),this.zIndex=this.tabindex+1,this.mousedown=!1,document.removeEventListener("keydown",this.handleDragerKeyDown)},handleDragerKeyDown:function(A){var t=A.keyCode,e=[37,38,39,40],o=this.$refs.drager;if(e.includes(t)){switch(A.preventDefault(),A.stopPropagation(),t){case 37:o.style.left=this.left-1+"px";break;case 38:o.style.top=this.top-1+"px";break;case 39:o.style.left=this.left+1+"px";break;case 40:o.style.top=this.top+1+"px";break}this.getDragerInfo()}},handleDragerMouseDown:function(A){1===A.which&&this.leftMousedownStopPropagation&&A.stopPropagation(),1===A.width&&this.leftMousedownPreventDefault&&A.preventDefault(),this.mousedownPos.x=A.pageX,this.mousedownPos.y=A.pageY,document.addEventListener("mousemove",this.handleDragerMouseMove),document.addEventListener("mouseup",e);var t=this;function e(){document.removeEventListener("mousemove",t.handleDragerMouseMove)}this.getDragerInfo()},handleDragerMouseMove:function(A){this.mousemoveStopPropagation&&A.stopPropagation(),this.mousemovePreventDefault&&A.stopPropagation();var t=this.mousedownPos.x-A.pageX,e=this.mousedownPos.y-A.pageY,o=this.dragerInfo.left-t,i=this.dragerInfo.top-e;o>i&&A.shiftKey?this.$emit("update:left",o):(i>o&&A.shiftKey||this.$emit("update:left",o),this.$emit("update:top",i))},handlePointMouseDown:function(A,t){this.mousedownPos.x=A.pageX,this.mousedownPos.y=A.pageY,this.currentDir=t,document.addEventListener("mousemove",this.handlePointMouseMove),document.addEventListener("mouseup",o);var e=this;function o(){document.removeEventListener("mousemove",e.handlePointMouseMove),document.removeEventListener("mouseup",o),e.getDragerInfo()}this.getDragerInfo()},handlePointMouseMove:function(A){this.mousemovePreventDefault&&A.preventDefault(),this.mousemoveStopPropagation&&A.stopPropagation();var t=this.$refs.drager,e=A.pageX-this.mousedownPos.x,o=A.pageY-this.mousedownPos.y;if(1===this.currentDir)if(A.shiftKey){var i=a(this.width,this.height,e),n=this.height+this.height-i.height,s=this.width+this.width-i.width;t.style.height=n+"px",t.style.width=s+"px",t.style.top=this.dragerInfo.top+(this.height-n)+"px",t.style.left=this.dragerInfo.left+(this.width-s)+"px"}else t.style.height=this.height-o+"px",t.style.width=this.width-e+"px",t.style.top=this.dragerInfo.top+o+"px",t.style.left=this.dragerInfo.left+e+"px";if(2===this.currentDir&&(t.style.height=this.height-o+"px",t.style.top=this.dragerInfo.top+o+"px"),3===this.currentDir)if(A.shiftKey){var r=a(this.width,this.height,e);t.style.height=r.height+"px",t.style.width=r.width+"px",t.style.top=this.dragerInfo.top+(this.height-r.height)+"px"}else t.style.height=this.height-o+"px",t.style.width=this.width+e+"px",t.style.top=this.dragerInfo.top+o+"px";if(4===this.currentDir&&(t.style.height=this.height+"px",t.style.width=this.width-e+"px",t.style.left=this.dragerInfo.left+e+"px"),5===this.currentDir&&(t.style.width=this.width+e+"px",t.style.height=this.height+"px"),6===this.currentDir)if(A.shiftKey){var h=a(this.width,this.height,e);t.style.width=this.width+this.width-h.width+"px",t.style.height=this.height+this.height-h.height+"px",t.style.left=this.dragerInfo.left+e+"px"}else t.style.width=this.width-e+"px",t.style.height=this.height+o+"px",t.style.left=this.dragerInfo.left+e+"px";if(7===this.currentDir&&(t.style.height=this.height+o+"px"),8===this.currentDir)if(A.shiftKey){var u=a(this.width,this.height,e);t.style.width=u.width+"px",t.style.height=u.height+"px"}else t.style.width=this.width+e+"px",t.style.height=this.height+o+"px"},handleRoateMouseDown:function(A){this.canvasDom.style.cursor="url(".concat(h,"),auto");var t=this.$refs.drager,e=window.event,o=t.getBoundingClientRect(),i={x:o.x+o.width/2,y:o.y+o.height/2},n=Math.atan2(e.pageY-i.y,e.pageX-i.x)-this.rotate*Math.PI/180;document.addEventListener("mousemove",r),document.addEventListener("mouseup",a);var s=this;function r(A){s.mousemoveStopPropagation&&A.stopPropagation(),s.mousemovePreventDefault&&A.preventDefault();var t=window.event,e=Math.atan2(t.pageY-i.y,t.pageX-i.x),o=Math.floor(180*(e-n)/Math.PI);s.$emit("update:rotate",o)}function a(){s.canvasDom.style.cursor="default",document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",a)}}}},d=u,l=(e("4d97"),e("2877")),c=Object(l["a"])(d,s,r,!1,null,"57e54b56",null),p=c.exports,f={name:"App",components:{VueDragResizer:p},data:function(){return{focusIndex:0,recs:[{width:200,height:100,left:60,top:80,rotate:0,focus:!1,img:"https://as.zbjimg.com/static/nodejs-zbj-utopiacs-web/widget/header-bd-v1/img/newlogo_5b91b4a.png"},{width:240,height:100,left:60,top:280,rotate:0,focus:!1,img:"https://www.baidu.com/img/flexible/logo/pc/result.png"},{width:240,height:100,left:60,top:480,rotate:0,focus:!1,img:"https://www.baidu.com/img/flexible/logo/pc/result.png",text:"https://www.baidu.com/img/flexible/logo/pc/result.png"}]}},methods:{handleFocus:function(A){this.focusIndex=A}}},g=f,w=(e("5c0b"),Object(l["a"])(g,i,n,!1,null,null,null)),m=w.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(A){return A(m)}}).$mount("#app")},"5c0b":function(A,t,e){"use strict";e("9c0c")},"71bb":function(A,t,e){},"9c0c":function(A,t,e){}});
//# sourceMappingURL=app.3b83cf6d.js.map