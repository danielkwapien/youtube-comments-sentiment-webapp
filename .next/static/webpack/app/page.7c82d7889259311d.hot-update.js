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

/***/ "(app-pages-browser)/./app/contexts/VideoContext.js":
/*!**************************************!*\
  !*** ./app/contexts/VideoContext.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VideoProvider: function() { return /* binding */ VideoProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// contexts/VideoAnalysisContext.js\n\nvar _s = $RefreshSig$();\n\nconst VideoContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    title: \"\",\n    thumbnail: \"\",\n    timeline: [],\n    emotions: {},\n    isLoading: false,\n    analyzeVideo: ()=>{}\n});\nconst VideoProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [thumbnail, setThumbnail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [timeline, setTimeline] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [emotions, setEmotions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleAnalyzeVideo = async (url)=>{\n        setIsLoading(true);\n        try {\n            const regex = /(?:https?:\\/\\/)?(?:www\\.)?(?:youtube\\.com|youtu\\.be)\\/(?:(?:watch\\?v=)?([^#&?]+))/;\n            const match = url.match(regex);\n            const videoId = match && match[1];\n            const response = await fetch(\"http://localhost:5000/api/\".concat(videoId));\n            const data = await response.json();\n            setTitle(data.title[\"0\"].title);\n            setThumbnail(data.thumbnail[\"0\"]);\n            setTimeline(data.time);\n            setEmotions(data.proportion);\n        } catch (error) {\n            console.error(error);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VideoContext.Provider, {\n        value: {\n            title,\n            thumbnail,\n            timeline,\n            emotions,\n            isLoading,\n            analyzeVideo: handleAnalyzeVideo\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/contexts/VideoContext.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VideoProvider, \"SIOyxjdnBbzFG5mZXDLlnQo3yFM=\");\n_c = VideoProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideoContext);\nvar _c;\n$RefreshReg$(_c, \"VideoProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb250ZXh0cy9WaWRlb0NvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLG1DQUFtQzs7O0FBQ2E7QUFFaEQsTUFBTUUsNkJBQWVGLG9EQUFhQSxDQUFDO0lBQ2pDRyxPQUFPO0lBQ1BDLFdBQVc7SUFDWEMsVUFBVSxFQUFFO0lBQ1pDLFVBQVUsQ0FBQztJQUNYQyxXQUFXO0lBQ1hDLGNBQWMsS0FBTztBQUN2QjtBQUVPLE1BQU1DLGdCQUFnQjtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDeEMsTUFBTSxDQUFDUCxPQUFPUSxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0csV0FBV1EsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNJLFVBQVVRLFlBQVksR0FBR1osK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDSyxVQUFVUSxZQUFZLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ00sV0FBV1EsYUFBYSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNZSxxQkFBcUIsT0FBT0M7UUFDaENGLGFBQWE7UUFDVCxJQUFJO1lBQ0EsTUFBTUcsUUFBUTtZQUNkLE1BQU1DLFFBQVFGLElBQUlFLEtBQUssQ0FBQ0Q7WUFDeEIsTUFBTUUsVUFBVUQsU0FBU0EsS0FBSyxDQUFDLEVBQUU7WUFDakMsTUFBTUUsV0FBVyxNQUFNQyxNQUFNLDZCQUFxQyxPQUFSRjtZQUMxRCxNQUFNRyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaENiLFNBQVNZLEtBQUtwQixLQUFLLENBQUMsSUFBSSxDQUFDQSxLQUFLO1lBQzlCUyxhQUFhVyxLQUFLbkIsU0FBUyxDQUFDLElBQUk7WUFDaENTLFlBQVlVLEtBQUtFLElBQUk7WUFDckJYLFlBQVlTLEtBQUtHLFVBQVU7UUFDL0IsRUFDQSxPQUFPQyxPQUFPO1lBQ1ZDLFFBQVFELEtBQUssQ0FBQ0E7UUFDbEIsU0FDUTtZQUNKWixhQUFhO1FBQ2pCO0lBQ047SUFFQSxxQkFDRSw4REFBQ2IsYUFBYTJCLFFBQVE7UUFDcEJDLE9BQU87WUFDTDNCO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDLGNBQWNRO1FBQ2hCO2tCQUVDTjs7Ozs7O0FBR1AsRUFBRTtHQTFDV0Q7S0FBQUE7QUE0Q2IsK0RBQWVQLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbnRleHRzL1ZpZGVvQ29udGV4dC5qcz9hY2NkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnRleHRzL1ZpZGVvQW5hbHlzaXNDb250ZXh0LmpzXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVmlkZW9Db250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gIHRpdGxlOiAnJyxcbiAgdGh1bWJuYWlsOiAnJyxcbiAgdGltZWxpbmU6IFtdLFxuICBlbW90aW9uczoge30sXG4gIGlzTG9hZGluZzogZmFsc2UsXG4gIGFuYWx5emVWaWRlbzogKCkgPT4ge30sXG59KTtcblxuZXhwb3J0IGNvbnN0IFZpZGVvUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdGh1bWJuYWlsLCBzZXRUaHVtYm5haWxdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt0aW1lbGluZSwgc2V0VGltZWxpbmVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtlbW90aW9ucywgc2V0RW1vdGlvbnNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQW5hbHl6ZVZpZGVvID0gYXN5bmMgKHVybCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gLyg/Omh0dHBzPzpcXC9cXC8pPyg/Ond3d1xcLik/KD86eW91dHViZVxcLmNvbXx5b3V0dVxcLmJlKVxcLyg/Oig/OndhdGNoXFw/dj0pPyhbXiMmP10rKSkvO1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSB1cmwubWF0Y2gocmVnZXgpO1xuICAgICAgICAgICAgY29uc3QgdmlkZW9JZCA9IG1hdGNoICYmIG1hdGNoWzFdO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS8ke3ZpZGVvSWR9YCk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgc2V0VGl0bGUoZGF0YS50aXRsZVsnMCddLnRpdGxlKTtcbiAgICAgICAgICAgIHNldFRodW1ibmFpbChkYXRhLnRodW1ibmFpbFsnMCddKTtcbiAgICAgICAgICAgIHNldFRpbWVsaW5lKGRhdGEudGltZSk7XG4gICAgICAgICAgICBzZXRFbW90aW9ucyhkYXRhLnByb3BvcnRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VmlkZW9Db250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgdGh1bWJuYWlsLFxuICAgICAgICB0aW1lbGluZSxcbiAgICAgICAgZW1vdGlvbnMsXG4gICAgICAgIGlzTG9hZGluZyxcbiAgICAgICAgYW5hbHl6ZVZpZGVvOiBoYW5kbGVBbmFseXplVmlkZW8sXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1ZpZGVvQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvQ29udGV4dDtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJWaWRlb0NvbnRleHQiLCJ0aXRsZSIsInRodW1ibmFpbCIsInRpbWVsaW5lIiwiZW1vdGlvbnMiLCJpc0xvYWRpbmciLCJhbmFseXplVmlkZW8iLCJWaWRlb1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRUaXRsZSIsInNldFRodW1ibmFpbCIsInNldFRpbWVsaW5lIiwic2V0RW1vdGlvbnMiLCJzZXRJc0xvYWRpbmciLCJoYW5kbGVBbmFseXplVmlkZW8iLCJ1cmwiLCJyZWdleCIsIm1hdGNoIiwidmlkZW9JZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInRpbWUiLCJwcm9wb3J0aW9uIiwiZXJyb3IiLCJjb25zb2xlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/contexts/VideoContext.js\n"));

/***/ })

});