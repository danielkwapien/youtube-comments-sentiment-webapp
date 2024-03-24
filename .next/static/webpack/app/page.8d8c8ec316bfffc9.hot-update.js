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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var _components_chart_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/chart.jsx */ \"(app-pages-browser)/./components/chart.jsx\");\n/* harmony import */ var _components_header_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header.jsx */ \"(app-pages-browser)/./components/header.jsx\");\n/* harmony import */ var _components_thumbnail_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/thumbnail.jsx */ \"(app-pages-browser)/./components/thumbnail.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_5__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_5__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_5__.Legend);\nfunction Home() {\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Loading...\");\n    const [thumbnail, setThumbnail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [timeline, setTimeline] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [emotions, setEmotions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"http://localhost:5000/api/sNMtjs_wQiE\").then((response)=>response.json()).then((data)=>{\n            setTitle(data.title[\"0\"].title);\n            setThumbnail(data.thumbnail[\"0\"]);\n            setTimeline(data.time);\n            setEmotions(data.proportion);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-4xl font-bold text-center\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            thumbnail && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_thumbnail_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                src: thumbnail,\n                alt: title\n            }, void 0, false, {\n                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                lineNumber: 33,\n                columnNumber: 21\n            }, this),\n            emotions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chart_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                fetchedData: emotions\n            }, void 0, false, {\n                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                lineNumber: 34,\n                columnNumber: 20\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"IhJPTCHURN4q0tFC1t/7FcxTKrE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDMkQ7QUFDYztBQUNyQjtBQUNOO0FBQ007QUFFcERLLDJDQUFPQSxDQUFDTyxRQUFRLENBQUNOLGdEQUFVQSxFQUFFQyw2Q0FBT0EsRUFBRUMsNENBQU1BO0FBRTdCLFNBQVNLOztJQUV0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDYyxXQUFXQyxhQUFhLEdBQUdmLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2dCLFVBQVVDLFlBQVksR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2tCLFVBQVVDLFlBQVksR0FBR25CLCtDQUFRQSxDQUFDO0lBRXpDRCxnREFBU0EsQ0FBQztRQUNScUIsTUFBTSx5Q0FBeUNDLElBQUksQ0FDakQsQ0FBQ0MsV0FBYUEsU0FBU0MsSUFBSSxJQUMzQkYsSUFBSSxDQUNKLENBQUNHO1lBQ0NYLFNBQVNXLEtBQUtaLEtBQUssQ0FBQyxJQUFJLENBQUNBLEtBQUs7WUFDOUJHLGFBQWFTLEtBQUtWLFNBQVMsQ0FBQyxJQUFJO1lBQ2hDRyxZQUFZTyxLQUFLQyxJQUFJO1lBQ3JCTixZQUFZSyxLQUFLRSxVQUFVO1FBQzFCO0lBRVAsR0FBRyxFQUFFO0lBQ0wscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDcEIsOERBQU1BOzs7OzswQkFDUCw4REFBQ3FCO2dCQUFJRCxXQUFVOzBCQUFrQ2hCOzs7Ozs7WUFDaERFLDJCQUFhLDhEQUFDTCxpRUFBU0E7Z0JBQUNxQixLQUFLaEI7Z0JBQVdpQixLQUFLbkI7Ozs7OztZQUM3Q00sMEJBQVksOERBQUNYLDZEQUFjQTtnQkFBQ3lCLGFBQWFkOzs7Ozs7Ozs7Ozs7QUFHaEQ7R0EzQndCUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoYXJ0IGFzIENoYXJ0SlMsIEFyY0VsZW1lbnQsIFRvb2x0aXAsIExlZ2VuZCB9IGZyb20gXCJjaGFydC5qc1wiO1xuaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvY2hhcnQuanN4J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlci5qc3gnO1xuaW1wb3J0IFRodW1ibmFpbCBmcm9tIFwiLi4vY29tcG9uZW50cy90aHVtYm5haWwuanN4XCI7XG5cbkNoYXJ0SlMucmVnaXN0ZXIoQXJjRWxlbWVudCwgVG9vbHRpcCwgTGVnZW5kKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiTG9hZGluZy4uLlwiKTtcbiAgY29uc3QgW3RodW1ibmFpbCwgc2V0VGh1bWJuYWlsXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdGltZWxpbmUsIHNldFRpbWVsaW5lXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZW1vdGlvbnMsIHNldEVtb3Rpb25zXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3NOTXRqc193UWlFXCIpLnRoZW4oXG4gICAgICAocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKVxuICAgICkudGhlbihcbiAgICAgIChkYXRhKSA9PiB7IFxuICAgICAgICBzZXRUaXRsZShkYXRhLnRpdGxlWycwJ10udGl0bGUpOyBcbiAgICAgICAgc2V0VGh1bWJuYWlsKGRhdGEudGh1bWJuYWlsWycwJ10pO1xuICAgICAgICBzZXRUaW1lbGluZShkYXRhLnRpbWUpO1xuICAgICAgICBzZXRFbW90aW9ucyhkYXRhLnByb3BvcnRpb24pO1xuICAgICAgICAgfVxuICAgIClcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yNFwiPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1jZW50ZXJcIj57dGl0bGV9PC9kaXY+XG4gICAgICB7dGh1bWJuYWlsICYmIDxUaHVtYm5haWwgc3JjPXt0aHVtYm5haWx9IGFsdD17dGl0bGV9IC8+fVxuICAgICAge2Vtb3Rpb25zICYmIDxDaGFydENvbXBvbmVudCBmZXRjaGVkRGF0YT17ZW1vdGlvbnN9IC8+fVxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiQ2hhcnQiLCJDaGFydEpTIiwiQXJjRWxlbWVudCIsIlRvb2x0aXAiLCJMZWdlbmQiLCJDaGFydENvbXBvbmVudCIsIkhlYWRlciIsIlRodW1ibmFpbCIsInJlZ2lzdGVyIiwiSG9tZSIsInRpdGxlIiwic2V0VGl0bGUiLCJ0aHVtYm5haWwiLCJzZXRUaHVtYm5haWwiLCJ0aW1lbGluZSIsInNldFRpbWVsaW5lIiwiZW1vdGlvbnMiLCJzZXRFbW90aW9ucyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJ0aW1lIiwicHJvcG9ydGlvbiIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJzcmMiLCJhbHQiLCJmZXRjaGVkRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});