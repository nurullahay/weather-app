(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2],{292:function(t,e,r){var content=r(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(135).default)("76f9abed",content,!0,{sourceMap:!1})},293:function(t,e,r){"use strict";r(292)},294:function(t,e,r){var n=r(134)((function(i){return i[1]}));n.push([t.i,'html{font-family:"Roboto",sans-serif}*,:after,:before,body{border:0;box-sizing:border-box;margin:0;padding:0}#__nuxt{background-color:#101014;color:#171717!important;margin-top:0!important;max-width:100%;min-height:100vh;overflow:hidden;padding-top:60px!important}.container{height:100%;margin:0 auto;overflow:hidden;width:100%}.container-inner{height:80vh;margin:0 auto;position:relative;width:29vw}.input-container{display:flex}.city-input-bar{background-color:#4e8cb4;border:none;border-radius:12px 0 0 12px;font-size:24px;font-weight:700;height:55px;padding-left:15px;width:100%}.searchIconBox{background-color:#4e8cb4;border-bottom-right-radius:12px;border-top-right-radius:12px;cursor:pointer;padding:10px}.search-icon{border:none;border-radius:12px;font-size:24px;font-weight:700;height:55px;width:-moz-fit-content;width:fit-content;width:20%}.content-area{display:contents}.weather-day{border-radius:12px;height:198px;position:relative;text-align:center;width:19%}.first-day{background-size:cover;height:80vh!important;margin:18px auto;position:relative;transition:background-image 1s ease-in-out;width:100%!important}.desc-row{display:flex;justify-content:space-between;margin-bottom:71px;padding:11px}.row-left,.row-right{display:flex;position:absolute;z-index:10000}.row-right{padding-right:10px;right:0}.today-weather-right-desc{padding:5px}.more-info>p{font-size:15px;font-weight:700;text-align:center}.temp-row{height:110px;width:110px}.temp-row,.today-weather-title{border-radius:50%;margin:0 auto}.today-weather-title{background-color:rgba(78,140,180,.8);font-size:48px;font-weight:700;line-height:49px;padding:30px;position:absolute;width:-moz-fit-content;width:fit-content;z-index:1000}.other-days{bottom:0;display:flex;justify-content:space-between;margin:0 auto;position:absolute;width:29vw}.other-day-title{border-bottom:1px solid #6a7983;border-top-left-radius:8px;border-top-right-radius:8px;margin:0 auto;padding:5px 0;width:80%}.other-days .weather-day:first-child{display:none}.other-day-temp{background-color:rgba(78,140,180,.8);border-bottom-left-radius:8px;border-bottom-right-radius:8px;bottom:0;font-size:18px;font-weight:700;justify-content:space-between;padding:5px;position:absolute;width:100%}.today-weather-right-desc{font-size:19px;font-weight:700;line-height:35px}.today-weather-right-desc>p{color:#fff;font-size:44px;font-weight:700;line-height:35px}.sunny{background-image:url(/images/sunny.avif)}.cloudy,.sunny{background-size:cover;border-radius:12px}.cloudy{background-image:url(/images/cloud.webp)}.rainy{background-image:url(/images/rain.jpg);position:relative}.rainy,.snowy{background-size:cover;border-radius:12px}.snowy{background-image:url(/images/snow.jpg)}.thunderstorm{background-image:url(/images/storm.jpeg);border-radius:12px}.foggy{background-image:url(/images/foggy.jpeg);border-radius:12px}.snow{animation:animateSnow1 9s linear infinite;background-image:url(/images/snow2.png)}.rain,.snow{border-radius:12px;padding:10px}.rain{background-image:url(/images/rain2.png)}.fog,.rain{animation:animateSnow1 15s linear infinite}.fog{background-image:url(/images/fog.png);border-radius:12px;padding:10px}@keyframes animateSnow1{0%{background-position:0 0}to{background-position:800px 450px}}@media only screen and (max-width:1100px){.container-inner,.other-days{width:36vw}}@media only screen and (max-width:875px){.container-inner,.other-days{width:44vw}.other-day-title{font-size:18px}}@media only screen and (max-width:685px){.container-inner,.other-days{width:60vw}.other-day-title{font-size:16px}.weather-day{height:195px}}@media only screen and (max-width:500px){.container-inner,.other-days{width:80vw}.other-day-title{font-size:14px}.first-day{height:260px}.weather-day{height:178px}.today-weather-right-desc{font-size:16px}}',""]),n.locals={},t.exports=n},296:function(t,e,r){"use strict";r.r(e);r(19),r(33),r(39),r(82);var n=r(81),o=r.n(n),d={data:function(){return{weather:{},weatherDescription:"",city:"İstanbul",firstDayWeather:{}}},methods:{GetWeatherData:function(){var t=this;o.a.get("https://api.openweathermap.org/data/2.5/forecast?q="+this.city+"&appid=201407d0a7da0276e2897b6b43c0c417&units=metric").then((function(e){console.log(e);var r=e.data.list,n={};r.forEach((function(data){var t=new Date(data.dt_txt.split(" ")[0]).toLocaleDateString("en-US",{weekday:"short"});n[t]?data.main.temp<n[t].temp&&(n[t].temp=data.main.temp):n[t]={temp:data.main.temp,humidity:data.main.humidity,wind:data.wind.speed,weatherIcon:data.weather[0].icon,id:data.weather[0].id}})),t.weather=n;var o=Object.keys(t.weather)[0];t.firstDayWeather=t.weather[o]})).catch((function(t){console.log(t)}))},getWeatherClass:function(t){if(!t)return"";switch(t.toString().charAt(0)){case"2":return"thunderstorm";case"3":case"5":return"rainy";case"6":return"snowy";case"7":return"foggy";case"8":return 800===t?"sunny":"cloudy";default:return""}},getWeatherAnimation:function(t){if(!t)return"";switch(t.toString().charAt(0)){case"2":case"3":case"5":return"rain";case"6":return"snow";case"7":case"8":return"fog";default:return""}}},mounted:function(){this.GetWeatherData()}},c=(r(293),r(47)),component=Object(c.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"container-inner"},[e("div",{staticClass:"input-container"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"city-input-bar",attrs:{type:"text",name:"city"},domProps:{value:t.city},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.GetWeatherData.apply(null,arguments)},input:function(e){e.target.composing||(t.city=e.target.value)}}}),t._v(" "),e("div",{staticClass:"searchIconBox"},[e("v-icon",{attrs:{name:"search",scale:"2"}})],1)]),t._v(" "),e("div",{staticClass:"content-area"},[e("div",{staticClass:"weather-day first-day",class:t.getWeatherClass(t.firstDayWeather.id)},[e("div",{staticClass:"weather-animation",class:t.getWeatherAnimation(t.firstDayWeather.id),staticStyle:{position:"absolute",width:"100%",height:"100%"}}),t._v(" "),e("div",{staticClass:"desc-row"},[e("div",{staticClass:"row-left"},[e("p",{staticClass:"today-weather-right-desc"},[e("v-icon",{attrs:{name:"tint",scale:"2"}})],1),t._v(" "),e("div",{staticClass:"more-info"},[e("p",[t._v("Humidity")]),t._v(" "),e("p",[t._v(t._s(t.firstDayWeather.humidity)+"%")])])]),t._v(" "),e("div",{staticClass:"row-right"},[e("div",{staticClass:"more-info"},[e("p",[t._v("Wind")]),t._v(" "),e("p",[t._v(t._s(t.firstDayWeather.wind)+" m/s")])]),t._v(" "),e("p",{staticClass:"today-weather-right-desc"},[e("v-icon",{attrs:{name:"wind",scale:"2"}})],1)])]),t._v(" "),e("div",{staticClass:"temp-row"},[e("p",{staticClass:"today-weather-title"},[t._v(t._s(parseInt(t.firstDayWeather.temp))+"°")])])]),t._v(" "),e("div",{staticClass:"other-days"},t._l(t.weather,(function(r,n){return e("div",{key:n,staticClass:"weather-day",class:t.getWeatherClass(r.id)},[e("h3",{staticClass:"other-day-title"},[t._v(t._s(n))]),t._v(" "),e("div",{staticClass:"other-day-temp"},[e("p",[t._v(t._s(parseInt(r.temp))+"°")])])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports},300:function(t,e,r){"use strict";r.r(e);var n={name:"IndexPage",components:{Weather:r(296).default}},o=r(47),component=Object(o.a)(n,(function(){return(0,this._self._c)("Weather")}),[],!1,null,null,null);e.default=component.exports}}]);