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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/page */ \"(app-pages-browser)/./app/page.js\");\n/* harmony import */ var _barrel_optimize_names_DonutChart_Legend_tremor_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=DonutChart,Legend!=!@tremor/react */ \"(app-pages-browser)/__barrel_optimize__?names=DonutChart,Legend!=!./node_modules/@tremor/react/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst valueFormatter = (number)=>\"$ \".concat(Intl.NumberFormat(\"us\").format(number).toString());\nfunction Test() {\n    _s();\n    const { emotions } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_app_page__WEBPACK_IMPORTED_MODULE_1__.VideoContext);\n    console.log(emotionsImport);\n    const data = JSON.parse(emotions);\n    console.log(emotions);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center space-x-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_DonutChart_Legend_tremor_react__WEBPACK_IMPORTED_MODULE_2__.DonutChart, {\n                data: data,\n                category: \"sales\",\n                index: \"name\",\n                valueFormatter: valueFormatter,\n                colors: [\n                    \"blue\",\n                    \"cyan\",\n                    \"indigo\",\n                    \"violet\",\n                    \"fuchsia\"\n                ],\n                className: \"w-40\"\n            }, void 0, false, {\n                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Test.jsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_DonutChart_Legend_tremor_react__WEBPACK_IMPORTED_MODULE_2__.Legend, {\n                categories: [\n                    \"New York\",\n                    \"London\",\n                    \"Hong Kong\",\n                    \"San Francisco\",\n                    \"Singapore\"\n                ],\n                colors: [\n                    \"blue\",\n                    \"cyan\",\n                    \"indigo\",\n                    \"violet\",\n                    \"fuchsia\"\n                ],\n                className: \"max-w-xs\"\n            }, void 0, false, {\n                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Test.jsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Test.jsx\",\n        lineNumber: 16,\n        columnNumber: 7\n    }, this);\n}\n_s(Test, \"dvvgARVdr6P2U+o9QnhNK6jgshU=\");\n_c = Test;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Test);\nvar _c;\n$RefreshReg$(_c, \"Test\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVGVzdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEM7QUFDUztBQUNoQjtBQUduQyxNQUFNSSxpQkFBaUIsQ0FBQ0MsU0FDdEIsS0FBdUQsT0FBbERDLEtBQUtDLFlBQVksQ0FBQyxNQUFNQyxNQUFNLENBQUNILFFBQVFJLFFBQVE7QUFFdEQsU0FBU0M7O0lBRVAsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR1IsaURBQVVBLENBQUNILG1EQUFZQTtJQUM1Q1ksUUFBUUMsR0FBRyxDQUFDQztJQUNaLE1BQU1DLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ047SUFDeEJDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixxQkFDSSw4REFBQ087UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNsQiw2RkFBVUE7Z0JBQ1RjLE1BQU9BO2dCQUNQSyxVQUFTO2dCQUNUQyxPQUFNO2dCQUNOakIsZ0JBQWdCQTtnQkFDaEJrQixRQUFRO29CQUFDO29CQUFRO29CQUFRO29CQUFVO29CQUFVO2lCQUFVO2dCQUN2REgsV0FBVTs7Ozs7OzBCQUVaLDhEQUFDakIseUZBQU1BO2dCQUNMcUIsWUFBWTtvQkFBQztvQkFBWTtvQkFBVTtvQkFBYTtvQkFBaUI7aUJBQVk7Z0JBQzdFRCxRQUFRO29CQUFDO29CQUFRO29CQUFRO29CQUFVO29CQUFVO2lCQUFVO2dCQUN2REgsV0FBVTs7Ozs7Ozs7Ozs7O0FBSXBCO0dBdkJTVDtLQUFBQTtBQXlCVCwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Rlc3QuanN4PzcxZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmlkZW9Db250ZXh0IH0gZnJvbSAnQC9hcHAvcGFnZSc7XG5pbXBvcnQgeyBEb251dENoYXJ0LCBMZWdlbmQgfSBmcm9tICdAdHJlbW9yL3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cblxuY29uc3QgdmFsdWVGb3JtYXR0ZXIgPSAobnVtYmVyKSA9PlxuICBgJCAke0ludGwuTnVtYmVyRm9ybWF0KCd1cycpLmZvcm1hdChudW1iZXIpLnRvU3RyaW5nKCl9YDtcblxuZnVuY3Rpb24gVGVzdCgpIHtcblxuICBjb25zdCB7IGVtb3Rpb25zIH0gPSB1c2VDb250ZXh0KFZpZGVvQ29udGV4dClcbiAgY29uc29sZS5sb2coZW1vdGlvbnNJbXBvcnQpXG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGVtb3Rpb25zKVxuICBjb25zb2xlLmxvZyhlbW90aW9ucylcbiAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteC02XCI+XG4gICAgICAgIDxEb251dENoYXJ0XG4gICAgICAgICAgZGF0YT17IGRhdGEgfVxuICAgICAgICAgIGNhdGVnb3J5PVwic2FsZXNcIlxuICAgICAgICAgIGluZGV4PVwibmFtZVwiXG4gICAgICAgICAgdmFsdWVGb3JtYXR0ZXI9e3ZhbHVlRm9ybWF0dGVyfVxuICAgICAgICAgIGNvbG9ycz17WydibHVlJywgJ2N5YW4nLCAnaW5kaWdvJywgJ3Zpb2xldCcsICdmdWNoc2lhJ119XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy00MFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxMZWdlbmRcbiAgICAgICAgICBjYXRlZ29yaWVzPXtbJ05ldyBZb3JrJywgJ0xvbmRvbicsICdIb25nIEtvbmcnLCAnU2FuIEZyYW5jaXNjbycsICdTaW5nYXBvcmUnXX1cbiAgICAgICAgICBjb2xvcnM9e1snYmx1ZScsICdjeWFuJywgJ2luZGlnbycsICd2aW9sZXQnLCAnZnVjaHNpYSddfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC13LXhzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUZXN0Il0sIm5hbWVzIjpbIlZpZGVvQ29udGV4dCIsIkRvbnV0Q2hhcnQiLCJMZWdlbmQiLCJ1c2VDb250ZXh0IiwidmFsdWVGb3JtYXR0ZXIiLCJudW1iZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0IiwidG9TdHJpbmciLCJUZXN0IiwiZW1vdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiZW1vdGlvbnNJbXBvcnQiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2F0ZWdvcnkiLCJpbmRleCIsImNvbG9ycyIsImNhdGVnb3JpZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Test.jsx\n"));

/***/ })

});