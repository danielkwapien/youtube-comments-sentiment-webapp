"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Test.jsx":
/*!*****************************!*\
  !*** ./components/Test.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/page */ \"(app-pages-browser)/./app/page.js\");\n/* harmony import */ var _barrel_optimize_names_DonutChart_Legend_tremor_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=DonutChart,Legend!=!@tremor/react */ \"(app-pages-browser)/__barrel_optimize__?names=DonutChart,Legend!=!./node_modules/@tremor/react/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst valueFormatter = (number)=>\"$ \".concat(Intl.NumberFormat(\"us\").format(number).toString());\nfunction Test() {\n    //const { emotions } = useContext(VideoContext)\n    let emotions = [\n        {\n            name: \"approval\",\n            value: 2\n        },\n        {\n            name: \"remorse\",\n            value: 4\n        },\n        {\n            name: \"gratitude\",\n            value: 5\n        }\n    ];\n    emotions = [\n        {\n            \"name\": \"approval\",\n            \"sales\": 0.444\n        },\n        {\n            \"name\": \"London\",\n            \"sales\": 0.333\n        },\n        {\n            \"name\": \"Hong Kong\",\n            \"sales\": 0.444\n        }\n    ];\n    emotions = [\n        {\n            \"name\": \"curiosity\",\n            \"value\": 0.4444444444444444\n        },\n        {\n            \"name\": \"gratitude\",\n            \"value\": 0.4444444444444444\n        },\n        {\n            \"name\": \"admiration\",\n            \"value\": 0.1111111111111111\n        }\n    ];\n    console.log(emotions);\n    //const data = JSON.parse(emotions)\n    //console.log(data)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center space-x-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_DonutChart_Legend_tremor_react__WEBPACK_IMPORTED_MODULE_2__.DonutChart, {\n                data: emotions,\n                category: \"sales\",\n                index: \"name\",\n                valueFormatter: valueFormatter,\n                colors: [\n                    \"blue\",\n                    \"cyan\",\n                    \"indigo\",\n                    \"violet\",\n                    \"fuchsia\"\n                ],\n                className: \"w-40\"\n            }, void 0, false, {\n                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Test.jsx\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_DonutChart_Legend_tremor_react__WEBPACK_IMPORTED_MODULE_2__.Legend, {\n                categories: [\n                    \"New York\",\n                    \"London\",\n                    \"Hong Kong\",\n                    \"San Francisco\",\n                    \"Singapore\"\n                ],\n                colors: [\n                    \"blue\",\n                    \"cyan\",\n                    \"indigo\",\n                    \"violet\",\n                    \"fuchsia\"\n                ],\n                className: \"max-w-xs\"\n            }, void 0, false, {\n                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Test.jsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Test.jsx\",\n        lineNumber: 59,\n        columnNumber: 7\n    }, this);\n}\n_c = Test;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Test);\nvar _c;\n$RefreshReg$(_c, \"Test\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVGVzdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQztBQUNTO0FBQ2hCO0FBR25DLE1BQU1JLGlCQUFpQixDQUFDQyxTQUN0QixLQUF1RCxPQUFsREMsS0FBS0MsWUFBWSxDQUFDLE1BQU1DLE1BQU0sQ0FBQ0gsUUFBUUksUUFBUTtBQUV0RCxTQUFTQztJQUVQLCtDQUErQztJQUMvQyxJQUFJQyxXQUFXO1FBQ2I7WUFDRUMsTUFBTTtZQUNOQyxPQUFNO1FBQ1I7UUFDQTtZQUNFRCxNQUFNO1lBQ05DLE9BQU07UUFDUjtRQUNBO1lBQ0VELE1BQU07WUFDTkMsT0FBTTtRQUNSO0tBQ0Q7SUFDREYsV0FBVztRQUNUO1lBQ0UsUUFBUTtZQUNSLFNBQVM7UUFDWDtRQUNBO1lBQ0UsUUFBUTtZQUNSLFNBQVM7UUFDWDtRQUNBO1lBQ0MsUUFBUTtZQUNQLFNBQVM7UUFDWDtLQUNEO0lBQ0RBLFdBQVc7UUFDVDtZQUNFLFFBQVE7WUFDUixTQUFTO1FBQ1g7UUFDQTtZQUNFLFFBQVE7WUFDUixTQUFTO1FBQ1g7UUFDQTtZQUNFLFFBQVE7WUFDUixTQUFTO1FBQ1g7S0FDRDtJQUNERyxRQUFRQyxHQUFHLENBQUNKO0lBQ1osbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUVuQixxQkFDSSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNoQiw2RkFBVUE7Z0JBQ1RpQixNQUFPUDtnQkFDUFEsVUFBUztnQkFDVEMsT0FBTTtnQkFDTmhCLGdCQUFnQkE7Z0JBQ2hCaUIsUUFBUTtvQkFBQztvQkFBUTtvQkFBUTtvQkFBVTtvQkFBVTtpQkFBVTtnQkFDdkRKLFdBQVU7Ozs7OzswQkFFWiw4REFBQ2YseUZBQU1BO2dCQUNMb0IsWUFBWTtvQkFBQztvQkFBWTtvQkFBVTtvQkFBYTtvQkFBaUI7aUJBQVk7Z0JBQzdFRCxRQUFRO29CQUFDO29CQUFRO29CQUFRO29CQUFVO29CQUFVO2lCQUFVO2dCQUN2REosV0FBVTs7Ozs7Ozs7Ozs7O0FBSXBCO0tBbEVTUDtBQW9FVCwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Rlc3QuanN4PzcxZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmlkZW9Db250ZXh0IH0gZnJvbSAnQC9hcHAvcGFnZSc7XG5pbXBvcnQgeyBEb251dENoYXJ0LCBMZWdlbmQgfSBmcm9tICdAdHJlbW9yL3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cblxuY29uc3QgdmFsdWVGb3JtYXR0ZXIgPSAobnVtYmVyKSA9PlxuICBgJCAke0ludGwuTnVtYmVyRm9ybWF0KCd1cycpLmZvcm1hdChudW1iZXIpLnRvU3RyaW5nKCl9YDtcblxuZnVuY3Rpb24gVGVzdCgpIHtcblxuICAvL2NvbnN0IHsgZW1vdGlvbnMgfSA9IHVzZUNvbnRleHQoVmlkZW9Db250ZXh0KVxuICBsZXQgZW1vdGlvbnMgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ2FwcHJvdmFsJyxcbiAgICAgIHZhbHVlOjIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAncmVtb3JzZScsXG4gICAgICB2YWx1ZTo0LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2dyYXRpdHVkZScsXG4gICAgICB2YWx1ZTo1LFxuICAgIH0sXG4gIF1cbiAgZW1vdGlvbnMgPSBbXG4gICAge1xuICAgICAgJ25hbWUnOiAnYXBwcm92YWwnLFxuICAgICAgJ3NhbGVzJzogMC40NDQsXG4gICAgfSxcbiAgICB7XG4gICAgICAnbmFtZSc6ICdMb25kb24nLFxuICAgICAgXCJzYWxlc1wiOiAwLjMzMyxcbiAgICB9LFxuICAgIHtcbiAgICAgXCJuYW1lXCI6ICdIb25nIEtvbmcnLFxuICAgICAgXCJzYWxlc1wiOiAwLjQ0NCxcbiAgICB9XG4gIF07XG4gIGVtb3Rpb25zID0gW1xuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcImN1cmlvc2l0eVwiLFxuICAgICAgXCJ2YWx1ZVwiOiAwLjQ0NDQ0NDQ0NDQ0NDQ0NDRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcImdyYXRpdHVkZVwiLFxuICAgICAgXCJ2YWx1ZVwiOiAwLjQ0NDQ0NDQ0NDQ0NDQ0NDRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcImFkbWlyYXRpb25cIixcbiAgICAgIFwidmFsdWVcIjogMC4xMTExMTExMTExMTExMTExXG4gICAgfSxcbiAgXVxuICBjb25zb2xlLmxvZyhlbW90aW9ucylcbiAgLy9jb25zdCBkYXRhID0gSlNPTi5wYXJzZShlbW90aW9ucylcbiAgLy9jb25zb2xlLmxvZyhkYXRhKVxuXG4gIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNwYWNlLXgtNlwiPlxuICAgICAgICA8RG9udXRDaGFydFxuICAgICAgICAgIGRhdGE9eyBlbW90aW9ucyB9XG4gICAgICAgICAgY2F0ZWdvcnk9XCJzYWxlc1wiXG4gICAgICAgICAgaW5kZXg9XCJuYW1lXCJcbiAgICAgICAgICB2YWx1ZUZvcm1hdHRlcj17dmFsdWVGb3JtYXR0ZXJ9XG4gICAgICAgICAgY29sb3JzPXtbJ2JsdWUnLCAnY3lhbicsICdpbmRpZ28nLCAndmlvbGV0JywgJ2Z1Y2hzaWEnXX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQwXCJcbiAgICAgICAgLz5cbiAgICAgICAgPExlZ2VuZFxuICAgICAgICAgIGNhdGVnb3JpZXM9e1snTmV3IFlvcmsnLCAnTG9uZG9uJywgJ0hvbmcgS29uZycsICdTYW4gRnJhbmNpc2NvJywgJ1NpbmdhcG9yZSddfVxuICAgICAgICAgIGNvbG9ycz17WydibHVlJywgJ2N5YW4nLCAnaW5kaWdvJywgJ3Zpb2xldCcsICdmdWNoc2lhJ119XG4gICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXcteHNcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3QiXSwibmFtZXMiOlsiVmlkZW9Db250ZXh0IiwiRG9udXRDaGFydCIsIkxlZ2VuZCIsInVzZUNvbnRleHQiLCJ2YWx1ZUZvcm1hdHRlciIsIm51bWJlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiLCJ0b1N0cmluZyIsIlRlc3QiLCJlbW90aW9ucyIsIm5hbWUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhIiwiY2F0ZWdvcnkiLCJpbmRleCIsImNvbG9ycyIsImNhdGVnb3JpZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Test.jsx\n"));

/***/ })

});