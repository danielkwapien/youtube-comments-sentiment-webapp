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

/***/ "(app-pages-browser)/./components/EmotionChart.jsx":
/*!*************************************!*\
  !*** ./components/EmotionChart.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/page */ \"(app-pages-browser)/./app/page.js\");\n/* harmony import */ var _barrel_optimize_names_DonutChart_Legend_tremor_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=DonutChart,Legend!=!@tremor/react */ \"(app-pages-browser)/__barrel_optimize__?names=DonutChart,Legend!=!./node_modules/@tremor/react/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst dataFormatter = (number)=>\"\".concat(Intl.NumberFormat(\"us\").format(number).toString());\nfunction EmotionChart() {\n    _s();\n    const { emotions } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_app_page__WEBPACK_IMPORTED_MODULE_1__.VideoContext);\n    const uniqueEmotions = Array.from(new Set(emotions.map((emotion)=>emotion.name)));\n    // Define a mapping object for emotions to colors\n    const emotionColors = {\n        approval: \"blue\",\n        sad: \"cyan\",\n        angry: \"indigo\",\n        excited: \"violet\",\n        neutral: \"fuchsia\"\n    };\n    // Map emotions to colors\n    const colors = uniqueEmotions.map((emotion)=>emotionColors[emotion] || \"gray\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center space-x-6\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_DonutChart_Legend_tremor_react__WEBPACK_IMPORTED_MODULE_2__.DonutChart, {\n            data: emotions,\n            variant: \"donut\",\n            category: \"value\",\n            index: \"name\",\n            valueFormatter: dataFormatter,\n            showLabel: false,\n            colors: {\n                colors\n            },\n            className: \"w-40\"\n        }, void 0, false, {\n            fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/EmotionChart.jsx\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/EmotionChart.jsx\",\n        lineNumber: 29,\n        columnNumber: 7\n    }, this);\n}\n_s(EmotionChart, \"dvvgARVdr6P2U+o9QnhNK6jgshU=\");\n_c = EmotionChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmotionChart);\nvar _c;\n$RefreshReg$(_c, \"EmotionChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRW1vdGlvbkNoYXJ0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQztBQUNTO0FBQ2hCO0FBRW5DLE1BQU1JLGdCQUFnQixDQUFDQyxTQUNyQixHQUFxRCxPQUFsREMsS0FBS0MsWUFBWSxDQUFDLE1BQU1DLE1BQU0sQ0FBQ0gsUUFBUUksUUFBUTtBQUVwRCxTQUFTQzs7SUFFUCxNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHUixpREFBVUEsQ0FBQ0gsbURBQVlBO0lBRTVDLE1BQU1ZLGlCQUFpQkMsTUFBTUMsSUFBSSxDQUFDLElBQUlDLElBQUlKLFNBQVNLLEdBQUcsQ0FBQyxDQUFDQyxVQUFZQSxRQUFRQyxJQUFJO0lBRWhGLGlEQUFpRDtJQUNqRCxNQUFNQyxnQkFBZ0I7UUFDcEJDLFVBQVU7UUFDVkMsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsU0FBUztJQUVYO0lBRUEseUJBQXlCO0lBQ3pCLE1BQU1DLFNBQVNiLGVBQWVJLEdBQUcsQ0FBQyxDQUFDQyxVQUFZRSxhQUFhLENBQUNGLFFBQVEsSUFBSTtJQUd6RSxxQkFDSSw4REFBQ1M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQzFCLDZGQUFVQTtZQUNUMkIsTUFBT2pCO1lBQ1BrQixTQUFRO1lBQ1JDLFVBQVM7WUFDVEMsT0FBTTtZQUNOQyxnQkFBZ0I1QjtZQUNoQjZCLFdBQVc7WUFDWFIsUUFBUTtnQkFBQ0E7WUFBTTtZQUNmRSxXQUFVOzs7Ozs7Ozs7OztBQUlwQjtHQWxDU2pCO0tBQUFBO0FBb0NULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRW1vdGlvbkNoYXJ0LmpzeD8wYTY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZpZGVvQ29udGV4dCB9IGZyb20gJ0AvYXBwL3BhZ2UnO1xuaW1wb3J0IHsgRG9udXRDaGFydCwgTGVnZW5kIH0gZnJvbSAnQHRyZW1vci9yZWFjdCc7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBkYXRhRm9ybWF0dGVyID0gKG51bWJlcikgPT5cbiAgYCR7SW50bC5OdW1iZXJGb3JtYXQoJ3VzJykuZm9ybWF0KG51bWJlcikudG9TdHJpbmcoKX1gO1xuXG5mdW5jdGlvbiBFbW90aW9uQ2hhcnQoKSB7XG5cbiAgY29uc3QgeyBlbW90aW9ucyB9ID0gdXNlQ29udGV4dChWaWRlb0NvbnRleHQpXG5cbiAgY29uc3QgdW5pcXVlRW1vdGlvbnMgPSBBcnJheS5mcm9tKG5ldyBTZXQoZW1vdGlvbnMubWFwKChlbW90aW9uKSA9PiBlbW90aW9uLm5hbWUpKSk7XG5cbiAgLy8gRGVmaW5lIGEgbWFwcGluZyBvYmplY3QgZm9yIGVtb3Rpb25zIHRvIGNvbG9yc1xuICBjb25zdCBlbW90aW9uQ29sb3JzID0ge1xuICAgIGFwcHJvdmFsOiAnYmx1ZScsXG4gICAgc2FkOiAnY3lhbicsXG4gICAgYW5ncnk6ICdpbmRpZ28nLFxuICAgIGV4Y2l0ZWQ6ICd2aW9sZXQnLFxuICAgIG5ldXRyYWw6ICdmdWNoc2lhJyxcbiAgICAvLyBBZGQgbW9yZSBlbW90aW9ucyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBjb2xvcnMgYXMgbmVlZGVkXG4gIH07XG5cbiAgLy8gTWFwIGVtb3Rpb25zIHRvIGNvbG9yc1xuICBjb25zdCBjb2xvcnMgPSB1bmlxdWVFbW90aW9ucy5tYXAoKGVtb3Rpb24pID0+IGVtb3Rpb25Db2xvcnNbZW1vdGlvbl0gfHwgJ2dyYXknKTtcblxuXG4gIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNwYWNlLXgtNlwiPlxuICAgICAgICA8RG9udXRDaGFydFxuICAgICAgICAgIGRhdGE9eyBlbW90aW9ucyB9XG4gICAgICAgICAgdmFyaWFudD0nZG9udXQnXG4gICAgICAgICAgY2F0ZWdvcnk9J3ZhbHVlJ1xuICAgICAgICAgIGluZGV4PVwibmFtZVwiXG4gICAgICAgICAgdmFsdWVGb3JtYXR0ZXI9e2RhdGFGb3JtYXR0ZXJ9XG4gICAgICAgICAgc2hvd0xhYmVsPXtmYWxzZX1cbiAgICAgICAgICBjb2xvcnM9e3tjb2xvcnN9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctNDBcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtb3Rpb25DaGFydDsiXSwibmFtZXMiOlsiVmlkZW9Db250ZXh0IiwiRG9udXRDaGFydCIsIkxlZ2VuZCIsInVzZUNvbnRleHQiLCJkYXRhRm9ybWF0dGVyIiwibnVtYmVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdCIsInRvU3RyaW5nIiwiRW1vdGlvbkNoYXJ0IiwiZW1vdGlvbnMiLCJ1bmlxdWVFbW90aW9ucyIsIkFycmF5IiwiZnJvbSIsIlNldCIsIm1hcCIsImVtb3Rpb24iLCJuYW1lIiwiZW1vdGlvbkNvbG9ycyIsImFwcHJvdmFsIiwic2FkIiwiYW5ncnkiLCJleGNpdGVkIiwibmV1dHJhbCIsImNvbG9ycyIsImRpdiIsImNsYXNzTmFtZSIsImRhdGEiLCJ2YXJpYW50IiwiY2F0ZWdvcnkiLCJpbmRleCIsInZhbHVlRm9ybWF0dGVyIiwic2hvd0xhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/EmotionChart.jsx\n"));

/***/ })

});