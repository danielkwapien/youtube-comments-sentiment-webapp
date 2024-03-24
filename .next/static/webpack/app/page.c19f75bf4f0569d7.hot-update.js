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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var _components_Chart_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Chart.jsx */ \"(app-pages-browser)/./components/Chart.jsx\");\n/* harmony import */ var _components_Header_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header.jsx */ \"(app-pages-browser)/./components/Header.jsx\");\n/* harmony import */ var _components_Thumbnail_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Thumbnail.jsx */ \"(app-pages-browser)/./components/Thumbnail.jsx\");\n/* harmony import */ var _components_ui_input_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/ui/input.jsx */ \"(app-pages-browser)/./components/ui/input.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_6__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_6__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_6__.Legend);\nfunction Home() {\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Loading...\");\n    const [thumbnail, setThumbnail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [timeline, setTimeline] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [emotions, setEmotions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"http://localhost:5000/api/sNMtjs_wQiE\").then((response)=>response.json()).then((data)=>{\n            setTitle(data.title[\"0\"].title);\n            setThumbnail(data.thumbnail[\"0\"]);\n            setTimeline(data.time);\n            setEmotions(data.proportion);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative isolate pt-14 dark:bg-black\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"py-12 sm:py-20 lg:pb-40\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto max-w-7xl px-6 lg:px-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mx-auto max-w-2xl text-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-4xl font-bold tracking-tight sm:text-6xl\",\n                                    children: \"Uncover YouTube Comments\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300\",\n                                    children: [\n                                        \"Analyze youtube comments with ease and understand your \",\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-indigo-600 dark:text-indigo-500\",\n                                            children: \"audience\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-10 flex items-center justify-center gap-x-6\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        type: \"text\",\n                                        placeholder: \"Enter a youtube video link\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            thumbnail && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Thumbnail_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                src: thumbnail,\n                alt: title\n            }, void 0, false, {\n                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                lineNumber: 53,\n                columnNumber: 21\n            }, this),\n            emotions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Chart_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                fetchedData: emotions\n            }, void 0, false, {\n                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                lineNumber: 54,\n                columnNumber: 20\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"IhJPTCHURN4q0tFC1t/7FcxTKrE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQzJEO0FBQ2M7QUFDckI7QUFDTjtBQUNHO0FBQ0o7QUFFN0NLLDJDQUFPQSxDQUFDUSxRQUFRLENBQUNQLGdEQUFVQSxFQUFFQyw2Q0FBT0EsRUFBRUMsNENBQU1BO0FBRTdCLFNBQVNNOztJQUV0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2QsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDZSxXQUFXQyxhQUFhLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNpQixVQUFVQyxZQUFZLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNtQixVQUFVQyxZQUFZLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUV6Q0QsZ0RBQVNBLENBQUM7UUFDUnNCLE1BQU0seUNBQXlDQyxJQUFJLENBQ2pELENBQUNDLFdBQWFBLFNBQVNDLElBQUksSUFDM0JGLElBQUksQ0FDSixDQUFDRztZQUNDWCxTQUFTVyxLQUFLWixLQUFLLENBQUMsSUFBSSxDQUFDQSxLQUFLO1lBQzlCRyxhQUFhUyxLQUFLVixTQUFTLENBQUMsSUFBSTtZQUNoQ0csWUFBWU8sS0FBS0MsSUFBSTtZQUNyQk4sWUFBWUssS0FBS0UsVUFBVTtRQUMxQjtJQUVQLEdBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFVOzswQkFDZCw4REFBQ3JCLDhEQUFNQTs7Ozs7MEJBQ1AsOERBQUNzQjtnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNDO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDQzs0QkFBSUQsV0FBVTs7OENBQ2IsOERBQUNFO29DQUFHRixXQUFVOzhDQUFnRDs7Ozs7OzhDQUc5RCw4REFBQ0c7b0NBQUVILFdBQVU7O3dDQUEwRDt3Q0FDYjtzREFDeEQsOERBQUNJOzRDQUFLSixXQUFVO3NEQUF1Qzs7Ozs7Ozs7Ozs7OzhDQUl6RCw4REFBQ0M7b0NBQUlELFdBQVU7OENBQ2IsNEVBQUNuQixnRUFBS0E7d0NBQUN3QixNQUFLO3dDQUFPQyxhQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU14Q3BCLDJCQUFhLDhEQUFDTixpRUFBU0E7Z0JBQUMyQixLQUFLckI7Z0JBQVdzQixLQUFLeEI7Ozs7OztZQUM3Q00sMEJBQVksOERBQUNaLDZEQUFjQTtnQkFBQytCLGFBQWFuQjs7Ozs7Ozs7Ozs7O0FBR2hEO0dBOUN3QlA7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDaGFydCBhcyBDaGFydEpTLCBBcmNFbGVtZW50LCBUb29sdGlwLCBMZWdlbmQgfSBmcm9tIFwiY2hhcnQuanNcIjtcbmltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXJ0LmpzeCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIuanN4JztcbmltcG9ydCBUaHVtYm5haWwgZnJvbSBcIkBjb21wb25lbnRzL1RodW1ibmFpbC5qc3hcIlxuaW1wb3J0IElucHV0IGZyb20gXCJAY29tcG9uZW50cy91aS9pbnB1dC5qc3hcIjtcblxuQ2hhcnRKUy5yZWdpc3RlcihBcmNFbGVtZW50LCBUb29sdGlwLCBMZWdlbmQpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJMb2FkaW5nLi4uXCIpO1xuICBjb25zdCBbdGh1bWJuYWlsLCBzZXRUaHVtYm5haWxdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt0aW1lbGluZSwgc2V0VGltZWxpbmVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtlbW90aW9ucywgc2V0RW1vdGlvbnNdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvc05NdGpzX3dRaUVcIikudGhlbihcbiAgICAgIChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpXG4gICAgKS50aGVuKFxuICAgICAgKGRhdGEpID0+IHsgXG4gICAgICAgIHNldFRpdGxlKGRhdGEudGl0bGVbJzAnXS50aXRsZSk7IFxuICAgICAgICBzZXRUaHVtYm5haWwoZGF0YS50aHVtYm5haWxbJzAnXSk7XG4gICAgICAgIHNldFRpbWVsaW5lKGRhdGEudGltZSk7XG4gICAgICAgIHNldEVtb3Rpb25zKGRhdGEucHJvcG9ydGlvbik7XG4gICAgICAgICB9XG4gICAgKVxuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGlzb2xhdGUgcHQtMTQgZGFyazpiZy1ibGFja1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTEyIHNtOnB5LTIwIGxnOnBiLTQwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBweC02IGxnOnB4LThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy0yeGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCBzbTp0ZXh0LTZ4bFwiPlxuICAgICAgICAgICAgICAgIFVuY292ZXIgWW91VHViZSBDb21tZW50c1xuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC02IHRleHQtbGcgbGVhZGluZy04IHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgQW5hbHl6ZSB5b3V0dWJlIGNvbW1lbnRzIHdpdGggZWFzZSBhbmQgdW5kZXJzdGFuZCB5b3VyIHtcIiBcIn1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby02MDAgZGFyazp0ZXh0LWluZGlnby01MDBcIj5cbiAgICAgICAgICAgICAgICAgIGF1ZGllbmNlXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLXgtNlwiPlxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSB5b3V0dWJlIHZpZGVvIGxpbmtcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge3RodW1ibmFpbCAmJiA8VGh1bWJuYWlsIHNyYz17dGh1bWJuYWlsfSBhbHQ9e3RpdGxlfSAvPn1cbiAgICAgIHtlbW90aW9ucyAmJiA8Q2hhcnRDb21wb25lbnQgZmV0Y2hlZERhdGE9e2Vtb3Rpb25zfSAvPn1cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkFyY0VsZW1lbnQiLCJUb29sdGlwIiwiTGVnZW5kIiwiQ2hhcnRDb21wb25lbnQiLCJIZWFkZXIiLCJUaHVtYm5haWwiLCJJbnB1dCIsInJlZ2lzdGVyIiwiSG9tZSIsInRpdGxlIiwic2V0VGl0bGUiLCJ0aHVtYm5haWwiLCJzZXRUaHVtYm5haWwiLCJ0aW1lbGluZSIsInNldFRpbWVsaW5lIiwiZW1vdGlvbnMiLCJzZXRFbW90aW9ucyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJ0aW1lIiwicHJvcG9ydGlvbiIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsInAiLCJzcGFuIiwidHlwZSIsInBsYWNlaG9sZGVyIiwic3JjIiwiYWx0IiwiZmV0Y2hlZERhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});