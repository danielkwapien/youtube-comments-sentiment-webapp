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

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_VideoContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @contexts/VideoContext.js */ \"(app-pages-browser)/./app/contexts/VideoContext.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var _components_Chart_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Chart.jsx */ \"(app-pages-browser)/./components/Chart.jsx\");\n/* harmony import */ var _components_Header_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header.jsx */ \"(app-pages-browser)/./components/Header.jsx\");\n/* harmony import */ var _components_Thumbnail_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Thumbnail.jsx */ \"(app-pages-browser)/./components/Thumbnail.jsx\");\n/* harmony import */ var _components_Hero_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Hero.jsx */ \"(app-pages-browser)/./components/Hero.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_7__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_7__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_7__.Legend);\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_VideoContext_js__WEBPACK_IMPORTED_MODULE_2__.VideoProvider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ3NFO0FBQ0U7QUFFQztBQUNyQjtBQUNOO0FBQ0c7QUFDVDtBQUV4Q1EsMkNBQU9BLENBQUNRLFFBQVEsQ0FBQ1AsZ0RBQVVBLEVBQUVDLDZDQUFPQSxFQUFFQyw0Q0FBTUE7QUFFN0IsU0FBU007SUFFdEIscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUNiLG9FQUFhQTs7OEJBQ1osOERBQUNPLDhEQUFNQTs7Ozs7OEJBQ1AsOERBQUNFLDREQUFJQTs7Ozs7Ozs7Ozs7Ozs7OztBQVViO0tBaEJ3QkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFZpZGVvQ29udGV4dCwgVmlkZW9Qcm92aWRlciB9IGZyb20gXCJAY29udGV4dHMvVmlkZW9Db250ZXh0LmpzXCI7XG5cbmltcG9ydCB7IENoYXJ0IGFzIENoYXJ0SlMsIEFyY0VsZW1lbnQsIFRvb2x0aXAsIExlZ2VuZCB9IGZyb20gXCJjaGFydC5qc1wiO1xuaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhcnQuanN4J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci5qc3gnO1xuaW1wb3J0IFRodW1ibmFpbCBmcm9tIFwiQGNvbXBvbmVudHMvVGh1bWJuYWlsLmpzeFwiXG5pbXBvcnQgSGVybyBmcm9tIFwiQGNvbXBvbmVudHMvSGVyby5qc3hcIjtcblxuQ2hhcnRKUy5yZWdpc3RlcihBcmNFbGVtZW50LCBUb29sdGlwLCBMZWdlbmQpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8VmlkZW9Qcm92aWRlcj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8SGVybyAvPlxuICAgICAgICB7LypcbiAgICAgICAge3RodW1ibmFpbCAmJiA8VGh1bWJuYWlsIHNyYz17dGh1bWJuYWlsfSBhbHQ9e3RpdGxlfSAvPn1cbiAgICAgICAge2Vtb3Rpb25zICYmIDxDaGFydENvbXBvbmVudCBmZXRjaGVkRGF0YT17ZW1vdGlvbnN9IC8+fVxuICAgICAgICAqL31cbiAgICAgIDwvVmlkZW9Qcm92aWRlcj5cblxuICAgICAgXG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VDb250ZXh0IiwiVmlkZW9Db250ZXh0IiwiVmlkZW9Qcm92aWRlciIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkFyY0VsZW1lbnQiLCJUb29sdGlwIiwiTGVnZW5kIiwiQ2hhcnRDb21wb25lbnQiLCJIZWFkZXIiLCJUaHVtYm5haWwiLCJIZXJvIiwicmVnaXN0ZXIiLCJIb21lIiwibWFpbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});