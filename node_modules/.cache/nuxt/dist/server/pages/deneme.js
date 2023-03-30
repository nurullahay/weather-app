exports.ids = [2];
exports.modules = {

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("14b4f1d0", content, true, context)
};

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deneme_vue_vue_type_style_index_0_id_3205cdf2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deneme_vue_vue_type_style_index_0_id_3205cdf2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deneme_vue_vue_type_style_index_0_id_3205cdf2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deneme_vue_vue_type_style_index_0_id_3205cdf2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deneme_vue_vue_type_style_index_0_id_3205cdf2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html{font-family:\"Roboto\",sans-serif}*,:after,:before,body{border:0;box-sizing:border-box;margin:0;padding:0}#__nuxt{background-color:#101014;color:#171717!important;margin-top:0!important;max-width:100%;min-height:100vh;overflow:hidden;padding-top:60px!important}.container{height:100%;margin:0 auto;overflow:hidden;width:100%}.container-inner{height:80vh;margin:0 auto;position:relative;width:29vw}.city-input-bar{border:none;border-radius:12px 0 0 12px;font-size:24px;font-weight:700;height:55px;padding-left:15px;width:100%}.city-input-bar,.searchIconBox{background-color:rgba(78,140,180,.8)}.searchIconBox{border-bottom-right-radius:12px;border-top-right-radius:12px;cursor:pointer;padding:10px}.search-icon{border:none;border-radius:12px;font-size:24px;font-weight:700;height:55px;width:-moz-fit-content;width:fit-content;width:20%}.content-area{display:contents}.weather-day{border-radius:12px;height:198px;position:relative;text-align:center;width:19%}.first-day{background-size:cover;height:80vh!important;margin:18px auto;position:relative;transition:background-image 1s ease-in-out;width:100%!important}.desc-row{display:flex;justify-content:space-between;margin-bottom:71px;padding:11px}.row-left,.row-right{display:flex;position:absolute;z-index:10000}.row-right{padding-right:10px;right:0}.today-weather-right-desc{padding:5px}.more-info>p{font-size:15px;font-weight:700;text-align:center}.temp-row{height:110px;width:110px}.temp-row,.today-weather-title{border-radius:50%;margin:0 auto}.today-weather-title{background-color:rgba(78,140,180,.8);font-size:48px;font-weight:700;line-height:49px;padding:30px;position:absolute;width:-moz-fit-content;width:fit-content;z-index:1000}.other-days{bottom:0;display:flex;justify-content:space-between;margin:0 auto;position:absolute;width:29vw}.other-day-title{border-bottom:1px solid #6a7983;border-top-left-radius:8px;border-top-right-radius:8px;margin:0 auto;padding:5px 0;width:80%}.other-days .weather-day:first-child{display:none}.other-day-temp{background-color:#6a7983;border-bottom-left-radius:8px;border-bottom-right-radius:8px;bottom:0;font-size:18px;font-weight:700;justify-content:space-between;padding:5px;position:absolute;width:100%}.today-weather-right-desc{font-size:19px;font-weight:700;line-height:35px}.today-weather-right-desc>p{color:#fff;font-size:44px;font-weight:700;line-height:35px}.sunny{background-image:url(/images/sunny.avif)}.cloudy,.sunny{background-size:cover;border-radius:12px}.cloudy{background-image:url(/images/cloud.webp)}.rainy{background-image:url(/images/rain.jpg);position:relative}.rainy,.snowy{background-size:cover;border-radius:12px}.snowy{background-image:url(/images/snow.jpg)}.thunderstorm{background-image:url(/images/storm.jpeg);border-radius:12px}.foggy{background-image:url(/images/foggy.jpeg);border-radius:12px}.snow{animation:animateSnow1 9s linear infinite;background-image:url(/images/snow2.png)}.rain,.snow{border-radius:12px;padding:10px}.rain{background-image:url(/images/rain2.png)}.fog,.rain{animation:animateSnow1 15s linear infinite}.fog{background-image:url(/images/fog.png);border-radius:12px;padding:10px}@keyframes animateSnow1{0%{background-position:0 0}to{background-position:800px 450px}}@media only screen and (max-width:1100px){.container-inner,.other-days{width:36vw}}@media only screen and (max-width:875px){.container-inner,.other-days{width:44vw}.other-day-title{font-size:18px}}@media only screen and (max-width:685px){.container-inner,.other-days{width:60vw}.other-day-title{font-size:16px}.weather-day{height:195px}}@media only screen and (max-width:500px){.container-inner,.other-days{width:80vw}.other-day-title{font-size:14px}.first-day{height:260px}.weather-day{height:178px}.today-weather-right-desc{font-size:16px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/deneme.vue?vue&type=template&id=3205cdf2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<div class=\"container-inner\">", "</div>", [_vm._ssrNode("<div class=\"input-container\">", "</div>", [_vm._ssrNode("<input type=\"text\" name=\"city\"" + _vm._ssrAttr("value", _vm.city) + " class=\"city-input-bar\"> "), _vm._ssrNode("<div class=\"searchIconBox\">", "</div>", [_c('v-icon', {
    attrs: {
      "name": "search",
      "scale": "2"
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-area\">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("weather-day first-day", _vm.getWeatherClass(_vm.firstDayWeather.id)) + ">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("weather-animation", _vm.getWeatherAnimation(_vm.firstDayWeather.id)) + " style=\"position: absolute; width: 100%; height: 100%;\"></div> "), _vm._ssrNode("<div class=\"desc-row\">", "</div>", [_vm._ssrNode("<div class=\"row-left\">", "</div>", [_vm._ssrNode("<p class=\"today-weather-right-desc\">", "</p>", [_c('v-icon', {
    attrs: {
      "name": "tint",
      "scale": "2"
    }
  })], 1), _vm._ssrNode(" <div class=\"more-info\"><p>Humidity</p> <p>" + _vm._ssrEscape(_vm._s(_vm.firstDayWeather.humidity) + "%") + "</p></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row-right\">", "</div>", [_vm._ssrNode("<div class=\"more-info\"><p>Wind</p> <p>" + _vm._ssrEscape(_vm._s(_vm.firstDayWeather.wind) + " m/s") + "</p></div> "), _vm._ssrNode("<p class=\"today-weather-right-desc\">", "</p>", [_c('v-icon', {
    attrs: {
      "name": "wind",
      "scale": "2"
    }
  })], 1)], 2)], 2), _vm._ssrNode(" <div class=\"temp-row\"><p class=\"today-weather-title\">" + _vm._ssrEscape(_vm._s(parseInt(_vm.firstDayWeather.temp)) + "°") + "</p></div>")], 2), _vm._ssrNode(" <div class=\"other-days\">" + _vm._ssrList(_vm.weather, function (weatherData, date) {
    return "<div" + _vm._ssrClass("weather-day", _vm.getWeatherClass(weatherData.id)) + "><h3 class=\"other-day-title\">" + _vm._ssrEscape(_vm._s(date)) + "</h3> <div class=\"other-day-temp\"><p>" + _vm._ssrEscape(_vm._s(parseInt(weatherData.temp)) + "°") + "</p></div></div>";
  }) + "</div>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/deneme.vue?vue&type=template&id=3205cdf2&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/deneme.vue?vue&type=script&lang=js&
// Include axios in the project

/* harmony default export */ var denemevue_type_script_lang_js_ = ({
  // Define data property and enter default city
  data() {
    return {
      weather: {},
      weatherDescription: '',
      city: 'İstanbul',
      firstDayWeather: {}
    };
  },
  methods: {
    // Getting weather data from OpenWeatherMap API
    GetWeatherData() {
      external_axios_default.a.get('https://api.openweathermap.org/data/2.5/forecast?q=' + this.city + '&appid=201407d0a7da0276e2897b6b43c0c417&units=metric').then(response => {
        console.log(response);
        let forecastData = response.data.list;
        let weatherData = {};
        // Creates an object to store daily weather data by date
        forecastData.forEach(data => {
          // Convert date to weekday
          let date = new Date(data.dt_txt.split(' ')[0]).toLocaleDateString('en-US', {
            weekday: 'short'
          });
          if (weatherData[date]) {
            if (data.main.temp < weatherData[date].temp) {
              weatherData[date].temp = data.main.temp;
            }
          } else {
            weatherData[date] = {
              temp: data.main.temp,
              humidity: data.main.humidity,
              wind: data.wind.speed,
              weatherIcon: data.weather[0].icon,
              id: data.weather[0].id
            };
          }
        });
        // Get the weather id by accessing the "id" property of the first weather forecast data inside the response
        this.weather = weatherData;
        // Get the weather information of the first day
        let firstDate = Object.keys(this.weather)[0];
        this.firstDayWeather = this.weather[firstDate];
      }).catch(error => {
        console.log(error);
      });
    },
    //Giving a CSS class corresponding to the weather icon based on weather data from OpenWeatherMap API
    getWeatherClass(id) {
      if (!id) return '';
      const firstChar = id.toString().charAt(0);
      switch (firstChar) {
        case '2':
          return 'thunderstorm';
        case '3':
        case '5':
          return 'rainy';
        case '6':
          return 'snowy';
        case '7':
          return 'foggy';
        case '8':
          if (id === 800) {
            return 'sunny';
          }
          return 'cloudy';
        default:
          return '';
      }
    },
    getWeatherAnimation(id) {
      if (!id) return '';
      const firstChar = id.toString().charAt(0);
      switch (firstChar) {
        case '2':
        case '3':
        case '5':
          return 'rain';
        case '6':
          return 'snow';
        case '7':
        case '8':
          return 'fog';
        default:
          return '';
      }
    }
  },
  mounted() {
    this.GetWeatherData();
  }
});
// CONCATENATED MODULE: ./pages/deneme.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_denemevue_type_script_lang_js_ = (denemevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/deneme.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(27)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_denemevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6d7ec728"
  
)

/* harmony default export */ var deneme = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=deneme.js.map