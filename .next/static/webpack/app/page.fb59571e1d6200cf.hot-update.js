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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/page */ \"(app-pages-browser)/./app/page.js\");\n/* harmony import */ var _barrel_optimize_names_DonutChart_Legend_tremor_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=DonutChart,Legend!=!@tremor/react */ \"(app-pages-browser)/__barrel_optimize__?names=DonutChart,Legend!=!./node_modules/@tremor/react/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst valueFormatter = (number)=>\"$ \".concat(Intl.NumberFormat(\"us\").format(number).toString());\nfunction Test() {\n    _s();\n    const { emotions } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_app_page__WEBPACK_IMPORTED_MODULE_1__.VideoContext);\n    console.log(json);\n    const json = '[\\n    {\\n      \"name\": \"curiosity\",\\n      \"value\": 0.4444444444444444\\n    },\\n    {\\n      \"name\": \"gratitude\",\\n      \"value\": 0.4444444444444444\\n    },\\n    {\\n      \"name\": \"admiration\",\\n      \"value\": 0.1111111111111111\\n    }\\n]';\n    const data = JSON.parse(json);\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center space-x-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_DonutChart_Legend_tremor_react__WEBPACK_IMPORTED_MODULE_2__.DonutChart, {\n                data: data,\n                category: \"sales\",\n                index: \"name\",\n                valueFormatter: valueFormatter,\n                colors: [\n                    \"blue\",\n                    \"cyan\",\n                    \"indigo\",\n                    \"violet\",\n                    \"fuchsia\"\n                ],\n                className: \"w-40\"\n            }, void 0, false, {\n                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Test.jsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_DonutChart_Legend_tremor_react__WEBPACK_IMPORTED_MODULE_2__.Legend, {\n                categories: [\n                    \"New York\",\n                    \"London\",\n                    \"Hong Kong\",\n                    \"San Francisco\",\n                    \"Singapore\"\n                ],\n                colors: [\n                    \"blue\",\n                    \"cyan\",\n                    \"indigo\",\n                    \"violet\",\n                    \"fuchsia\"\n                ],\n                className: \"max-w-xs\"\n            }, void 0, false, {\n                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Test.jsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Test.jsx\",\n        lineNumber: 30,\n        columnNumber: 7\n    }, this);\n}\n_s(Test, \"dvvgARVdr6P2U+o9QnhNK6jgshU=\");\n_c = Test;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Test);\nvar _c;\n$RefreshReg$(_c, \"Test\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVGVzdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEM7QUFDUztBQUNoQjtBQUduQyxNQUFNSSxpQkFBaUIsQ0FBQ0MsU0FDdEIsS0FBdUQsT0FBbERDLEtBQUtDLFlBQVksQ0FBQyxNQUFNQyxNQUFNLENBQUNILFFBQVFJLFFBQVE7QUFFdEQsU0FBU0M7O0lBRVAsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR1IsaURBQVVBLENBQUNILG1EQUFZQTtJQUM1Q1ksUUFBUUMsR0FBRyxDQUFDQztJQUNaLE1BQU1BLE9BQVE7SUFjZCxNQUFNQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNIO0lBQ3hCRixRQUFRQyxHQUFHLENBQUNFO0lBQ1oscUJBQ0ksOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDbEIsNkZBQVVBO2dCQUNUYyxNQUFPQTtnQkFDUEssVUFBUztnQkFDVEMsT0FBTTtnQkFDTmpCLGdCQUFnQkE7Z0JBQ2hCa0IsUUFBUTtvQkFBQztvQkFBUTtvQkFBUTtvQkFBVTtvQkFBVTtpQkFBVTtnQkFDdkRILFdBQVU7Ozs7OzswQkFFWiw4REFBQ2pCLHlGQUFNQTtnQkFDTHFCLFlBQVk7b0JBQUM7b0JBQVk7b0JBQVU7b0JBQWE7b0JBQWlCO2lCQUFZO2dCQUM3RUQsUUFBUTtvQkFBQztvQkFBUTtvQkFBUTtvQkFBVTtvQkFBVTtpQkFBVTtnQkFDdkRILFdBQVU7Ozs7Ozs7Ozs7OztBQUlwQjtHQXJDU1Q7S0FBQUE7QUF1Q1QsK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0LmpzeD83MWUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZpZGVvQ29udGV4dCB9IGZyb20gJ0AvYXBwL3BhZ2UnO1xuaW1wb3J0IHsgRG9udXRDaGFydCwgTGVnZW5kIH0gZnJvbSAnQHRyZW1vci9yZWFjdCc7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5cbmNvbnN0IHZhbHVlRm9ybWF0dGVyID0gKG51bWJlcikgPT5cbiAgYCQgJHtJbnRsLk51bWJlckZvcm1hdCgndXMnKS5mb3JtYXQobnVtYmVyKS50b1N0cmluZygpfWA7XG5cbmZ1bmN0aW9uIFRlc3QoKSB7XG5cbiAgY29uc3QgeyBlbW90aW9ucyB9ID0gdXNlQ29udGV4dChWaWRlb0NvbnRleHQpXG4gIGNvbnNvbGUubG9nKGpzb24pXG4gIGNvbnN0IGpzb24gPSBgW1xuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcImN1cmlvc2l0eVwiLFxuICAgICAgXCJ2YWx1ZVwiOiAwLjQ0NDQ0NDQ0NDQ0NDQ0NDRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcImdyYXRpdHVkZVwiLFxuICAgICAgXCJ2YWx1ZVwiOiAwLjQ0NDQ0NDQ0NDQ0NDQ0NDRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcImFkbWlyYXRpb25cIixcbiAgICAgIFwidmFsdWVcIjogMC4xMTExMTExMTExMTExMTExXG4gICAgfVxuXWA7XG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGpzb24pXG4gIGNvbnNvbGUubG9nKGRhdGEpXG4gIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNwYWNlLXgtNlwiPlxuICAgICAgICA8RG9udXRDaGFydFxuICAgICAgICAgIGRhdGE9eyBkYXRhIH1cbiAgICAgICAgICBjYXRlZ29yeT1cInNhbGVzXCJcbiAgICAgICAgICBpbmRleD1cIm5hbWVcIlxuICAgICAgICAgIHZhbHVlRm9ybWF0dGVyPXt2YWx1ZUZvcm1hdHRlcn1cbiAgICAgICAgICBjb2xvcnM9e1snYmx1ZScsICdjeWFuJywgJ2luZGlnbycsICd2aW9sZXQnLCAnZnVjaHNpYSddfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctNDBcIlxuICAgICAgICAvPlxuICAgICAgICA8TGVnZW5kXG4gICAgICAgICAgY2F0ZWdvcmllcz17WydOZXcgWW9yaycsICdMb25kb24nLCAnSG9uZyBLb25nJywgJ1NhbiBGcmFuY2lzY28nLCAnU2luZ2Fwb3JlJ119XG4gICAgICAgICAgY29sb3JzPXtbJ2JsdWUnLCAnY3lhbicsICdpbmRpZ28nLCAndmlvbGV0JywgJ2Z1Y2hzaWEnXX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy14c1wiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdCJdLCJuYW1lcyI6WyJWaWRlb0NvbnRleHQiLCJEb251dENoYXJ0IiwiTGVnZW5kIiwidXNlQ29udGV4dCIsInZhbHVlRm9ybWF0dGVyIiwibnVtYmVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdCIsInRvU3RyaW5nIiwiVGVzdCIsImVtb3Rpb25zIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2F0ZWdvcnkiLCJpbmRleCIsImNvbG9ycyIsImNhdGVnb3JpZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Test.jsx\n"));

/***/ })

});