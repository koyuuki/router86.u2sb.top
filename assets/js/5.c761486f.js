(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{349:function(e,t,a){},396:function(e,t,a){"use strict";var i=a(349);a.n(i).a},402:function(e,t,a){"use strict";a.r(t);a(75),a(175);var i={props:{bvid:{type:String,default:null,required:!0},page:{type:Number,default:1,required:!1},highQuality:{type:Boolean,default:!1,required:!1},danmaku:{type:Boolean,default:!1,required:!1}},data:function(){return{src:"//player.bilibili.com/player.html?bvid=".concat(this.bvid,"&page=").concat(this.page,"&high_quality=").concat(this.highQuality?1:0,"&danmaku=").concat(this.danmaku)}}},n=(a(396),a(50)),l=Object(n.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("iframe",{staticClass:"bbplayer",attrs:{src:this.src,allowfullscreen:"allowfullscreen",scrolling:"no",frameborder:"0",sandbox:"allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups"}}),this._v(" "),t("script",[this._v('\n    var bbplayers = document.getElementsByClassName("bbplayer");\n    bbplayers.forEach(function (item, index, arr) {\n      item.style.height = item.scrollWidth * 0.76 + "px";\n    });\n    window.onresize = function () {\n      bbplayers.forEach(function (item, index, arr) {\n        item.style.height = item.scrollWidth * 0.76 + "px";\n      });\n    };\n  ')])])}),[],!1,null,"7bfa509a",null);t.default=l.exports}}]);