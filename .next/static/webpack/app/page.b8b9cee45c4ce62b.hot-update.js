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

/***/ "(app-pages-browser)/./components/Dashboard.jsx":
/*!**********************************!*\
  !*** ./components/Dashboard.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Card_Metric_Text_tremor_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=Card,Metric,Text!=!@tremor/react */ \"(app-pages-browser)/__barrel_optimize__?names=Card,Metric,Text!=!./node_modules/@tremor/react/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/page */ \"(app-pages-browser)/./app/page.js\");\n/* harmony import */ var _components_EmotionChart_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/EmotionChart.jsx */ \"(app-pages-browser)/./components/EmotionChart.jsx\");\n/* harmony import */ var _components_AreaChart_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/AreaChart.jsx */ \"(app-pages-browser)/./components/AreaChart.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Dashboard() {\n    _s();\n    const { title, thumbnail } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_app_page__WEBPACK_IMPORTED_MODULE_3__.VideoContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto max-w-7xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-3xl font-bold tracking-tight sm:text-4xl\",\n                    children: \"Information\"\n                }, void 0, false, {\n                    fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Dashboard.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Dashboard.jsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \" grid grid-rows-2 grid-flow-col gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_Metric_Text_tremor_react__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                        className: \"mx-auto max-w-4xl row-span-3 col-span-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-tremor-default text-tremor-content dark:text-dark-tremor-content\",\n                                children: \"Thumbnail\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Dashboard.jsx\",\n                                lineNumber: 18,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: thumbnail.url,\n                                alt: title\n                            }, void 0, false, {\n                                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Dashboard.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Dashboard.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_Metric_Text_tremor_react__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                        className: \"mx-auto max-w-4xl col-span-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-tremor-default text-tremor-content dark:text-dark-tremor-content\",\n                                children: \"Title\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Dashboard.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-2xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Dashboard.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Dashboard.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_Metric_Text_tremor_react__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                        className: \"mx-auto max-w-4xl row-span-2 col-span-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-tremor-default text-tremor-content dark:text-dark-tremor-content\",\n                                children: \"Total views\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Dashboard.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-4xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold\",\n                                children: \"123213\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Dashboard.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Dashboard.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_Metric_Text_tremor_react__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                        className: \"mx-auto max-w-4xl row-span-2 col-span-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-tremor-default text-tremor-content dark:text-dark-tremor-content\",\n                                children: \"Total comments\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Dashboard.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-4xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold\",\n                                children: \"123213\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Dashboard.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Dashboard.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Dashboard.jsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_Metric_Text_tremor_react__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EmotionChart_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Dashboard.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Dashboard.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Dashboard.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_Metric_Text_tremor_react__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AreaChart_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Dashboard.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Dashboard.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Dashboard.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Dashboard.jsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/Dashboard.jsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_s(Dashboard, \"9kaMpNY63vOlEDfNgqWPqJa6fdI=\");\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBQ2hCO0FBQ087QUFDYztBQUNEO0FBRXZELFNBQVNPOztJQUVMLE1BQU0sRUFBQ0MsS0FBSyxFQUFFQyxTQUFTLEVBQUMsR0FBR04saURBQVVBLENBQUNDLG1EQUFZQTtJQUVsRCxxQkFDSSw4REFBQ007UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEOzBCQUNHLDRFQUFDRTtvQkFBR0QsV0FBVTs4QkFBZ0Q7Ozs7Ozs7Ozs7OzBCQUVsRSw4REFBQ0Q7Z0JBQUlHLE9BQU07O2tDQUNQLDhEQUFDYixzRkFBSUE7d0JBQUNXLFdBQVU7OzBDQUNaLDhEQUFDRztnQ0FBRUgsV0FBVTswQ0FBd0U7Ozs7OzswQ0FDckYsOERBQUNJO2dDQUFJQyxLQUFLUCxVQUFVUSxHQUFHO2dDQUFFQyxLQUFLVjs7Ozs7Ozs7Ozs7O2tDQUdsQyw4REFBQ1Isc0ZBQUlBO3dCQUFDVyxXQUFVOzswQ0FDWiw4REFBQ0c7Z0NBQUVILFdBQVU7MENBQXdFOzs7Ozs7MENBQ3JGLDhEQUFDRztnQ0FBRUgsV0FBVTswQ0FBMEZIOzs7Ozs7Ozs7Ozs7a0NBRzNHLDhEQUFDUixzRkFBSUE7d0JBQUNXLFdBQVU7OzBDQUNaLDhEQUFDRztnQ0FBRUgsV0FBVTswQ0FBd0U7Ozs7OzswQ0FDckYsOERBQUNHO2dDQUFFSCxXQUFVOzBDQUF5Rjs7Ozs7Ozs7Ozs7O2tDQUcxRyw4REFBQ1gsc0ZBQUlBO3dCQUFDVyxXQUFVOzswQ0FDWiw4REFBQ0c7Z0NBQUVILFdBQVU7MENBQXdFOzs7Ozs7MENBQ3JGLDhEQUFDRztnQ0FBRUgsV0FBVTswQ0FBeUY7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHOUcsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNYLHNGQUFJQTtzQ0FDRCw0RUFBQ0ssb0VBQVlBOzs7Ozs7Ozs7Ozs7Ozs7a0NBSXJCLDhEQUFDSzt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ1gsc0ZBQUlBO3NDQUNELDRFQUFDTSxpRUFBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVN0QztHQWhEU0M7S0FBQUE7QUFrRFQsK0RBQWVBLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQuanN4Pzk4M2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgTWV0cmljLCBUZXh0IH0gZnJvbSAnQHRyZW1vci9yZWFjdCc7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlkZW9Db250ZXh0IH0gZnJvbSAnQC9hcHAvcGFnZSc7XG5pbXBvcnQgRW1vdGlvbkNoYXJ0IGZyb20gXCJAL2NvbXBvbmVudHMvRW1vdGlvbkNoYXJ0LmpzeFwiXG5pbXBvcnQgQXJlYUNoYXJ0SGVybyBmcm9tIFwiQC9jb21wb25lbnRzL0FyZWFDaGFydC5qc3hcIjtcblxuZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuICAgIFxuICAgIGNvbnN0IHt0aXRsZSwgdGh1bWJuYWlsfSA9IHVzZUNvbnRleHQoVmlkZW9Db250ZXh0KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteC1hdXRvIG1heC13LTd4bCc+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgc206dGV4dC00eGxcIj5JbmZvcm1hdGlvbjwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIgZ3JpZCBncmlkLXJvd3MtMiBncmlkLWZsb3ctY29sIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy00eGwgcm93LXNwYW4tMyBjb2wtc3Bhbi0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtdHJlbW9yLWRlZmF1bHQgdGV4dC10cmVtb3ItY29udGVudCBkYXJrOnRleHQtZGFyay10cmVtb3ItY29udGVudFwiPlRodW1ibmFpbDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RodW1ibmFpbC51cmx9IGFsdD17dGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctNHhsIGNvbC1zcGFuLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC10cmVtb3ItZGVmYXVsdCB0ZXh0LXRyZW1vci1jb250ZW50IGRhcms6dGV4dC1kYXJrLXRyZW1vci1jb250ZW50XCI+VGl0bGU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtdHJlbW9yLWNvbnRlbnQtc3Ryb25nIGRhcms6dGV4dC1kYXJrLXRyZW1vci1jb250ZW50LXN0cm9uZyBmb250LXNlbWlib2xkXCI+e3RpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTR4bCByb3ctc3Bhbi0yIGNvbC1zcGFuLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC10cmVtb3ItZGVmYXVsdCB0ZXh0LXRyZW1vci1jb250ZW50IGRhcms6dGV4dC1kYXJrLXRyZW1vci1jb250ZW50XCI+VG90YWwgdmlld3M8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtdHJlbW9yLWNvbnRlbnQtc3Ryb25nIGRhcms6dGV4dC1kYXJrLXRyZW1vci1jb250ZW50LXN0cm9uZyBmb250LXNlbWlib2xkXCI+MTIzMjEzPC9wPlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cblxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctNHhsIHJvdy1zcGFuLTIgY29sLXNwYW4tMVwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXRyZW1vci1kZWZhdWx0IHRleHQtdHJlbW9yLWNvbnRlbnQgZGFyazp0ZXh0LWRhcmstdHJlbW9yLWNvbnRlbnRcIj5Ub3RhbCBjb21tZW50czwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC00eGwgdGV4dC10cmVtb3ItY29udGVudC1zdHJvbmcgZGFyazp0ZXh0LWRhcmstdHJlbW9yLWNvbnRlbnQtc3Ryb25nIGZvbnQtc2VtaWJvbGRcIj4xMjMyMTM8L3A+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMiBnYXAtNCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zcGFuLTEnPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxFbW90aW9uQ2hhcnQgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tMic+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFyZWFDaGFydEhlcm8gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIFxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkIl0sIm5hbWVzIjpbIkNhcmQiLCJNZXRyaWMiLCJUZXh0IiwidXNlQ29udGV4dCIsIlZpZGVvQ29udGV4dCIsIkVtb3Rpb25DaGFydCIsIkFyZWFDaGFydEhlcm8iLCJEYXNoYm9hcmQiLCJ0aXRsZSIsInRodW1ibmFpbCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiY2xhc3MiLCJwIiwiaW1nIiwic3JjIiwidXJsIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Dashboard.jsx\n"));

/***/ })

});