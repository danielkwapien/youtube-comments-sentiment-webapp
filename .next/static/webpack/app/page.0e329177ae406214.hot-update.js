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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/page */ \"(app-pages-browser)/./app/page.js\");\n/* harmony import */ var _barrel_optimize_names_DonutChart_Legend_tremor_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=DonutChart,Legend!=!@tremor/react */ \"(app-pages-browser)/__barrel_optimize__?names=DonutChart,Legend!=!./node_modules/@tremor/react/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst valueFormatter = (number)=>\"$ \".concat(Intl.NumberFormat(\"us\").format(number).toString());\nfunction Test() {\n    _s();\n    const { emotions } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_app_page__WEBPACK_IMPORTED_MODULE_1__.VideoContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center space-x-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_DonutChart_Legend_tremor_react__WEBPACK_IMPORTED_MODULE_2__.DonutChart, {\n                data: emotions,\n                category: \"sales\",\n                index: \"name\",\n                valueFormatter: valueFormatter,\n                colors: [\n                    \"blue\",\n                    \"cyan\",\n                    \"indigo\",\n                    \"violet\",\n                    \"fuchsia\"\n                ],\n                className: \"w-40\"\n            }, void 0, false, {\n                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Test.jsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_DonutChart_Legend_tremor_react__WEBPACK_IMPORTED_MODULE_2__.Legend, {\n                categories: [\n                    \"New York\",\n                    \"London\",\n                    \"Hong Kong\",\n                    \"San Francisco\",\n                    \"Singapore\"\n                ],\n                colors: [\n                    \"blue\",\n                    \"cyan\",\n                    \"indigo\",\n                    \"violet\",\n                    \"fuchsia\"\n                ],\n                className: \"max-w-xs\"\n            }, void 0, false, {\n                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Test.jsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Test.jsx\",\n        lineNumber: 13,\n        columnNumber: 7\n    }, this);\n}\n_s(Test, \"XrGoi0S+uiXxJ6i0sElUQ40Z2/0=\");\n_c = Test;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Test);\nvar _c;\n$RefreshReg$(_c, \"Test\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVGVzdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEM7QUFDUztBQUNoQjtBQUduQyxNQUFNSSxpQkFBaUIsQ0FBQ0MsU0FDdEIsS0FBdUQsT0FBbERDLEtBQUtDLFlBQVksQ0FBQyxNQUFNQyxNQUFNLENBQUNILFFBQVFJLFFBQVE7QUFFdEQsU0FBU0M7O0lBRVAsTUFBTSxFQUFDQyxRQUFRLEVBQUMsR0FBR1IsaURBQVVBLENBQUNILG1EQUFZQTtJQUMxQyxxQkFDSSw4REFBQ1k7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNaLDZGQUFVQTtnQkFDVGEsTUFBTUg7Z0JBQ05JLFVBQVM7Z0JBQ1RDLE9BQU07Z0JBQ05aLGdCQUFnQkE7Z0JBQ2hCYSxRQUFRO29CQUFDO29CQUFRO29CQUFRO29CQUFVO29CQUFVO2lCQUFVO2dCQUN2REosV0FBVTs7Ozs7OzBCQUVaLDhEQUFDWCx5RkFBTUE7Z0JBQ0xnQixZQUFZO29CQUFDO29CQUFZO29CQUFVO29CQUFhO29CQUFpQjtpQkFBWTtnQkFDN0VELFFBQVE7b0JBQUM7b0JBQVE7b0JBQVE7b0JBQVU7b0JBQVU7aUJBQVU7Z0JBQ3ZESixXQUFVOzs7Ozs7Ozs7Ozs7QUFJcEI7R0FwQlNIO0tBQUFBO0FBc0JULCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGVzdC5qc3g/NzFlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWaWRlb0NvbnRleHQgfSBmcm9tICdAL2FwcC9wYWdlJztcbmltcG9ydCB7IERvbnV0Q2hhcnQsIExlZ2VuZCB9IGZyb20gJ0B0cmVtb3IvcmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuXG5jb25zdCB2YWx1ZUZvcm1hdHRlciA9IChudW1iZXIpID0+XG4gIGAkICR7SW50bC5OdW1iZXJGb3JtYXQoJ3VzJykuZm9ybWF0KG51bWJlcikudG9TdHJpbmcoKX1gO1xuXG5mdW5jdGlvbiBUZXN0KCkge1xuXG4gIGNvbnN0IHtlbW90aW9uc30gPSB1c2VDb250ZXh0KFZpZGVvQ29udGV4dClcbiAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteC02XCI+XG4gICAgICAgIDxEb251dENoYXJ0XG4gICAgICAgICAgZGF0YT17ZW1vdGlvbnN9XG4gICAgICAgICAgY2F0ZWdvcnk9XCJzYWxlc1wiXG4gICAgICAgICAgaW5kZXg9XCJuYW1lXCJcbiAgICAgICAgICB2YWx1ZUZvcm1hdHRlcj17dmFsdWVGb3JtYXR0ZXJ9XG4gICAgICAgICAgY29sb3JzPXtbJ2JsdWUnLCAnY3lhbicsICdpbmRpZ28nLCAndmlvbGV0JywgJ2Z1Y2hzaWEnXX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQwXCJcbiAgICAgICAgLz5cbiAgICAgICAgPExlZ2VuZFxuICAgICAgICAgIGNhdGVnb3JpZXM9e1snTmV3IFlvcmsnLCAnTG9uZG9uJywgJ0hvbmcgS29uZycsICdTYW4gRnJhbmNpc2NvJywgJ1NpbmdhcG9yZSddfVxuICAgICAgICAgIGNvbG9ycz17WydibHVlJywgJ2N5YW4nLCAnaW5kaWdvJywgJ3Zpb2xldCcsICdmdWNoc2lhJ119XG4gICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXcteHNcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3QiXSwibmFtZXMiOlsiVmlkZW9Db250ZXh0IiwiRG9udXRDaGFydCIsIkxlZ2VuZCIsInVzZUNvbnRleHQiLCJ2YWx1ZUZvcm1hdHRlciIsIm51bWJlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiLCJ0b1N0cmluZyIsIlRlc3QiLCJlbW90aW9ucyIsImRpdiIsImNsYXNzTmFtZSIsImRhdGEiLCJjYXRlZ29yeSIsImluZGV4IiwiY29sb3JzIiwiY2F0ZWdvcmllcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Test.jsx\n"));

/***/ })

});