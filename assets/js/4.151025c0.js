(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{326:function(t,e,n){"use strict";var o=n(0),a=n(177).trim;o({target:"String",proto:!0,forced:n(327)("trim")},{trim:function(){return a(this)}})},327:function(t,e,n){var o=n(1),a=n(178);t.exports=function(t){return o((function(){return!!a[t]()||"​᠎"!="​᠎"[t]()||a[t].name!==t}))}},350:function(t,e,n){},397:function(t,e,n){"use strict";var o=n(350);n.n(o).a},403:function(t,e,n){"use strict";n.r(e);n(75),n(19),n(9),n(28),n(326),n(38);var o=n(106),a={props:{src:{type:String,default:"",required:!0},screenshot:{type:Boolean,default:!1},subtitle:{type:String,default:""},danmuId:{type:String,default:""},danmuApi:{type:String,default:"https://danmu.u2sb.top/api/danmu/dplayer/"},danmuAddition:{type:String,default:""},danmuAddition1:{type:String,default:null},danmuAddition2:{type:String,default:null},autoplay:{type:Boolean,default:!1},theme:{type:String,default:"#b7daff"},loop:{type:Boolean,default:!1},hotkey:{type:Boolean,default:!0},preload:{type:String,default:"auto"},logo:{type:String,default:""},mutex:{type:Boolean,default:!0},crossOrigin:{type:Boolean,default:!1},proxy:{type:String,default:"https://cors-anywhere.herokuapp.com"}},data:function(){return{shouldShowPlayer:!1}},methods:{showPlayer:function(){var t=this;this.shouldShowPlayer=!0,Promise.all([n.e(2).then(n.t.bind(null,399,7))]).then((function(e){new(0,Object(o.a)(e,1)[0].default)({container:t.$refs.container,autoplay:t.autoplay,theme:t.theme,loop:t.loop,screenshot:t.screenshot,hotkey:t.hotkey,preload:t.preload,logo:t.logo,video:{url:t.crossOrigin?"".concat(t.proxy,"/").concat(t.src):t.src},subtitle:t.subtitle?{url:t.crossOrigin?"".concat(t.proxy,"/").concat(t.subtitle):t.subtitle,color:"#000000",fontSize:"25px",bottom:"2%"}:null,danmaku:{id:t.danmuId,api:t.danmuApi,addition:[t.danmuAddition,t.danmuAddition1,t.danmuAddition2].filter((function(t){return t&&t.trim()})),maximum:1e4,bottom:"15%"},mutex:t.mutex}).on("fullscreen",(function(){/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&screen.orientation.lock("landscape")}))}))}}},i=(n(397),n(50)),r=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dplayer"},[e("button",{directives:[{name:"show",rawName:"v-show",value:!this.shouldShowPlayer,expression:"!shouldShowPlayer"}],staticClass:"btn-show-player",on:{click:this.showPlayer}},[this._v("点击加载播放器")]),this._v(" "),this.shouldShowPlayer?e("div",{ref:"container"}):this._e()])}),[],!1,null,"5135c794",null);e.default=r.exports}}]);