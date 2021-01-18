webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/CurrentCity/utils/index.js":
/*!***************************************************!*\
  !*** ./src/components/CurrentCity/utils/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _constants_apiLinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/apiLinks */ "./src/constants/apiLinks.js");

var utils = {
  getFlagLink: function getFlagLink(country) {
    return "".concat(_constants_apiLinks__WEBPACK_IMPORTED_MODULE_0__["FLAG_LINK"]).concat(country, ".svg");
  },
  getWeatherIcon: function getWeatherIcon(icon) {
    return "".concat(_constants_apiLinks__WEBPACK_IMPORTED_MODULE_0__["ICON_LINK"]).concat(icon, ".png");
  },
  getWindArrowIconSrc: function getWindArrowIconSrc() {
    return "".concat(_constants_apiLinks__WEBPACK_IMPORTED_MODULE_0__["ICON_LINK"], "wind-arrow.png");
  },
  getSunSetIconSrc: function getSunSetIconSrc() {
    return "".concat(_constants_apiLinks__WEBPACK_IMPORTED_MODULE_0__["ICON_LINK"], "sunset.png");
  },
  getSunRiseIconSrc: function getSunRiseIconSrc() {
    return "".concat(_constants_apiLinks__WEBPACK_IMPORTED_MODULE_0__["ICON_LINK"], "sunrise.png");
  }
};
/* harmony default export */ __webpack_exports__["default"] = (utils);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ3VycmVudENpdHkvdXRpbHMvaW5kZXguanMiXSwibmFtZXMiOlsidXRpbHMiLCJnZXRGbGFnTGluayIsImNvdW50cnkiLCJGTEFHX0xJTksiLCJnZXRXZWF0aGVySWNvbiIsImljb24iLCJJQ09OX0xJTksiLCJnZXRXaW5kQXJyb3dJY29uU3JjIiwiZ2V0U3VuU2V0SWNvblNyYyIsImdldFN1blJpc2VJY29uU3JjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsS0FBSyxHQUFHO0FBQ1pDLGFBRFksdUJBQ0FDLE9BREEsRUFDUztBQUNuQixxQkFBVUMsNkRBQVYsU0FBc0JELE9BQXRCO0FBQ0QsR0FIVztBQUlaRSxnQkFKWSwwQkFJR0MsSUFKSCxFQUlTO0FBQ25CLHFCQUFVQyw2REFBVixTQUFzQkQsSUFBdEI7QUFDRCxHQU5XO0FBT1pFLHFCQVBZLGlDQU9VO0FBQ3BCLHFCQUFVRCw2REFBVjtBQUNELEdBVFc7QUFVWkUsa0JBVlksOEJBVU87QUFDakIscUJBQVVGLDZEQUFWO0FBQ0QsR0FaVztBQWFaRyxtQkFiWSwrQkFhUTtBQUNsQixxQkFBVUgsNkRBQVY7QUFDRDtBQWZXLENBQWQ7QUFpQmVOLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM1YWQ3NGIzMDUwZDMxMjlhZWNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGTEFHX0xJTkssIElDT05fTElOSyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9hcGlMaW5rcyc7XG5cbmNvbnN0IHV0aWxzID0ge1xuICBnZXRGbGFnTGluayhjb3VudHJ5KSB7XG4gICAgcmV0dXJuIGAke0ZMQUdfTElOS30ke2NvdW50cnl9LnN2Z2A7XG4gIH0sXG4gIGdldFdlYXRoZXJJY29uKGljb24pIHtcbiAgICByZXR1cm4gYCR7SUNPTl9MSU5LfSR7aWNvbn0ucG5nYDtcbiAgfSxcbiAgZ2V0V2luZEFycm93SWNvblNyYygpIHtcbiAgICByZXR1cm4gYCR7SUNPTl9MSU5LfXdpbmQtYXJyb3cucG5nYDtcbiAgfSxcbiAgZ2V0U3VuU2V0SWNvblNyYygpIHtcbiAgICByZXR1cm4gYCR7SUNPTl9MSU5LfXN1bnNldC5wbmdgO1xuICB9LFxuICBnZXRTdW5SaXNlSWNvblNyYygpIHtcbiAgICByZXR1cm4gYCR7SUNPTl9MSU5LfXN1bnJpc2UucG5nYDtcbiAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCB1dGlscztcbiJdLCJzb3VyY2VSb290IjoiIn0=