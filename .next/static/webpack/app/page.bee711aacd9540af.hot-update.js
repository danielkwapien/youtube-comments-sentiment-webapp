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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VideoContext: function() { return /* binding */ VideoContext; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var _components_Chart_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Chart.jsx */ \"(app-pages-browser)/./components/Chart.jsx\");\n/* harmony import */ var _components_Header_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header.jsx */ \"(app-pages-browser)/./components/Header.jsx\");\n/* harmony import */ var _components_Thumbnail_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Thumbnail.jsx */ \"(app-pages-browser)/./components/Thumbnail.jsx\");\n/* harmony import */ var _components_Hero_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Hero.jsx */ \"(app-pages-browser)/./components/Hero.jsx\");\n/* harmony import */ var _components_EmotionChart_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/EmotionChart.jsx */ \"(app-pages-browser)/./components/EmotionChart.jsx\");\n/* harmony import */ var _components_AreaChart_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/AreaChart.jsx */ \"(app-pages-browser)/./components/AreaChart.jsx\");\n/* harmony import */ var _components_Dashboard_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Dashboard.jsx */ \"(app-pages-browser)/./components/Dashboard.jsx\");\n/* __next_internal_client_entry_do_not_use__ VideoContext,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_9__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_9__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_9__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_9__.Legend);\nconst VideoContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction Home() {\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [views, setViews] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [commentCount, setCommentCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [thumbnail, setThumbnail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [timeline, setTimeline] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [emotions, setEmotions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleAnalyzeVideo = async (url)=>{\n        setIsLoading(true);\n        try {\n            const regex = /(?:https?:\\/\\/)?(?:www\\.)?(?:youtube\\.com|youtu\\.be)\\/(?:(?:watch\\?v=)?([^#&?]+))/;\n            const match = url.match(regex);\n            const videoId = match && match[1];\n            const response = await fetch(\"http://localhost:5000/api/\".concat(videoId));\n            const data = await response.json();\n            setTitle(data.title[\"0\"].title);\n            setViews(data.views);\n            setCommentCount(data.count);\n            setThumbnail(data.thumbnail[\"0\"]);\n            setTimeline(data.time);\n            setEmotions(data.proportion);\n        } catch (error) {\n            console.error(error);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VideoContext.Provider, {\n            value: {\n                title,\n                views,\n                commentCount,\n                thumbnail,\n                timeline,\n                emotions,\n                isLoading,\n                analyzeVideo: handleAnalyzeVideo\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                    lineNumber: 64,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                    lineNumber: 65,\n                    columnNumber: 7\n                }, this),\n                emotions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Dashboard_jsx__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                    lineNumber: 66,\n                    columnNumber: 20\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"XstsIL1san1xhEDy1/vR4330B/o=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNxRjtBQUVaO0FBQ3RCO0FBQ0w7QUFDRztBQUNUO0FBQ2dCO0FBQ0Q7QUFDSjtBQUVuRE8sMkNBQU9BLENBQUNXLFFBQVEsQ0FBQ1YsZ0RBQVVBLEVBQUVDLDZDQUFPQSxFQUFFQyw0Q0FBTUE7QUFFckMsTUFBTVMsNkJBQWVkLG9EQUFhQSxHQUFHO0FBRTdCLFNBQVNlOztJQUV0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ3FCLE9BQU9DLFNBQVMsR0FBR3RCLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ3VCLGNBQWNDLGdCQUFnQixHQUFHeEIsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDeUIsV0FBV0MsYUFBYSxHQUFHMUIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDMkIsVUFBVUMsWUFBWSxHQUFHNUIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDNkIsVUFBVUMsWUFBWSxHQUFHOUIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDK0IsV0FBV0MsYUFBYSxHQUFHaEMsK0NBQVFBLENBQUM7SUFFM0MsTUFBTWlDLHFCQUFxQixPQUFPQztRQUNoQ0YsYUFBYTtRQUNULElBQUk7WUFDQSxNQUFNRyxRQUFRO1lBQ2QsTUFBTUMsUUFBUUYsSUFBSUUsS0FBSyxDQUFDRDtZQUN4QixNQUFNRSxVQUFVRCxTQUFTQSxLQUFLLENBQUMsRUFBRTtZQUNqQyxNQUFNRSxXQUFXLE1BQU1DLE1BQU0sNkJBQXFDLE9BQVJGO1lBQzFELE1BQU1HLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQ3JCLFNBQVNvQixLQUFLckIsS0FBSyxDQUFDLElBQUksQ0FBQ0EsS0FBSztZQUM5QkcsU0FBU2tCLEtBQUtuQixLQUFLO1lBQ25CRyxnQkFBZ0JnQixLQUFLRSxLQUFLO1lBQzFCaEIsYUFBYWMsS0FBS2YsU0FBUyxDQUFDLElBQUk7WUFDaENHLFlBQVlZLEtBQUtHLElBQUk7WUFDckJiLFlBQVlVLEtBQUtJLFVBQVU7UUFDL0IsRUFDQSxPQUFPQyxPQUFPO1lBQ1ZDLFFBQVFELEtBQUssQ0FBQ0E7UUFDbEIsU0FDUTtZQUNKYixhQUFhO1FBQ2pCO0lBQ047SUFFQSxxQkFDRSw4REFBQ2U7UUFBS0MsV0FBVTtrQkFDZCw0RUFBQy9CLGFBQWFnQyxRQUFRO1lBQ3RCQyxPQUFPO2dCQUNML0I7Z0JBQ0FFO2dCQUNBRTtnQkFDQUU7Z0JBQ0FFO2dCQUNBRTtnQkFDQUU7Z0JBQ0FvQixjQUFjbEI7WUFDaEI7OzhCQUVBLDhEQUFDdkIsOERBQU1BOzs7Ozs4QkFDUCw4REFBQ0UsNERBQUlBOzs7OztnQkFDSmlCLDBCQUFZLDhEQUFDZCxpRUFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPN0I7R0F4RHdCRztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBDaGFydCBhcyBDaGFydEpTLCBBcmNFbGVtZW50LCBUb29sdGlwLCBMZWdlbmQgfSBmcm9tIFwiY2hhcnQuanNcIjtcbmltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvQ2hhcnQuanN4J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci5qc3gnO1xuaW1wb3J0IFRodW1ibmFpbCBmcm9tIFwiQGNvbXBvbmVudHMvVGh1bWJuYWlsLmpzeFwiXG5pbXBvcnQgSGVybyBmcm9tIFwiQGNvbXBvbmVudHMvSGVyby5qc3hcIjtcbmltcG9ydCBFbW90aW9uQ2hhcnQgZnJvbSBcIkAvY29tcG9uZW50cy9FbW90aW9uQ2hhcnQuanN4XCJcbmltcG9ydCBBcmVhQ2hhcnRIZXJvIGZyb20gXCJAL2NvbXBvbmVudHMvQXJlYUNoYXJ0LmpzeFwiO1xuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL0Rhc2hib2FyZC5qc3hcIjtcblxuQ2hhcnRKUy5yZWdpc3RlcihBcmNFbGVtZW50LCBUb29sdGlwLCBMZWdlbmQpO1xuXG5leHBvcnQgY29uc3QgVmlkZW9Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdmlld3MsIHNldFZpZXdzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY29tbWVudENvdW50LCBzZXRDb21tZW50Q291bnRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt0aHVtYm5haWwsIHNldFRodW1ibmFpbF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3RpbWVsaW5lLCBzZXRUaW1lbGluZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2Vtb3Rpb25zLCBzZXRFbW90aW9uc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVBbmFseXplVmlkZW8gPSBhc3luYyAodXJsKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVnZXggPSAvKD86aHR0cHM/OlxcL1xcLyk/KD86d3d3XFwuKT8oPzp5b3V0dWJlXFwuY29tfHlvdXR1XFwuYmUpXFwvKD86KD86d2F0Y2hcXD92PSk/KFteIyY/XSspKS87XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaChyZWdleCk7XG4gICAgICAgICAgICBjb25zdCB2aWRlb0lkID0gbWF0Y2ggJiYgbWF0Y2hbMV07XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpLyR7dmlkZW9JZH1gKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBzZXRUaXRsZShkYXRhLnRpdGxlWycwJ10udGl0bGUpO1xuICAgICAgICAgICAgc2V0Vmlld3MoZGF0YS52aWV3cyk7XG4gICAgICAgICAgICBzZXRDb21tZW50Q291bnQoZGF0YS5jb3VudCk7XG4gICAgICAgICAgICBzZXRUaHVtYm5haWwoZGF0YS50aHVtYm5haWxbJzAnXSk7XG4gICAgICAgICAgICBzZXRUaW1lbGluZShkYXRhLnRpbWUpO1xuICAgICAgICAgICAgc2V0RW1vdGlvbnMoZGF0YS5wcm9wb3J0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8VmlkZW9Db250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgdmlld3MsXG4gICAgICAgIGNvbW1lbnRDb3VudCxcbiAgICAgICAgdGh1bWJuYWlsLFxuICAgICAgICB0aW1lbGluZSxcbiAgICAgICAgZW1vdGlvbnMsXG4gICAgICAgIGlzTG9hZGluZyxcbiAgICAgICAgYW5hbHl6ZVZpZGVvOiBoYW5kbGVBbmFseXplVmlkZW8sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxIZXJvIC8+XG4gICAgICB7ZW1vdGlvbnMgJiYgPERhc2hib2FyZCAvPn1cbiAgICAgIFxuICAgIDwvVmlkZW9Db250ZXh0LlByb3ZpZGVyPlxuXG4gICAgICBcbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ2hhcnQiLCJDaGFydEpTIiwiQXJjRWxlbWVudCIsIlRvb2x0aXAiLCJMZWdlbmQiLCJDaGFydENvbXBvbmVudCIsIkhlYWRlciIsIlRodW1ibmFpbCIsIkhlcm8iLCJFbW90aW9uQ2hhcnQiLCJBcmVhQ2hhcnRIZXJvIiwiRGFzaGJvYXJkIiwicmVnaXN0ZXIiLCJWaWRlb0NvbnRleHQiLCJIb21lIiwidGl0bGUiLCJzZXRUaXRsZSIsInZpZXdzIiwic2V0Vmlld3MiLCJjb21tZW50Q291bnQiLCJzZXRDb21tZW50Q291bnQiLCJ0aHVtYm5haWwiLCJzZXRUaHVtYm5haWwiLCJ0aW1lbGluZSIsInNldFRpbWVsaW5lIiwiZW1vdGlvbnMiLCJzZXRFbW90aW9ucyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImhhbmRsZUFuYWx5emVWaWRlbyIsInVybCIsInJlZ2V4IiwibWF0Y2giLCJ2aWRlb0lkIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiY291bnQiLCJ0aW1lIiwicHJvcG9ydGlvbiIsImVycm9yIiwiY29uc29sZSIsIm1haW4iLCJjbGFzc05hbWUiLCJQcm92aWRlciIsInZhbHVlIiwiYW5hbHl6ZVZpZGVvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});