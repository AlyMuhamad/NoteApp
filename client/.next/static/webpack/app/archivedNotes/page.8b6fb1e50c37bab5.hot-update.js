"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/archivedNotes/page",{

/***/ "(app-pages-browser)/./app/(ui)/StyledSidebar.tsx":
/*!************************************!*\
  !*** ./app/(ui)/StyledSidebar.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _StyledSidebar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StyledSidebar.module.css */ \"(app-pages-browser)/./app/(ui)/StyledSidebar.module.css\");\n/* harmony import */ var _StyledSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_StyledSidebar_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _barrel_optimize_names_HiOutlineCalendarDays_react_icons_hi2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=HiOutlineCalendarDays!=!react-icons/hi2 */ \"(app-pages-browser)/./node_modules/react-icons/hi2/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_FiEdit_react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=FiEdit!=!react-icons/fi */ \"(app-pages-browser)/./node_modules/react-icons/fi/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_GoArchive_react_icons_go__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=GoArchive!=!react-icons/go */ \"(app-pages-browser)/./node_modules/react-icons/go/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_IoHomeOutline_IoMenuOutline_IoSettingsSharp_react_icons_io5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=IoHomeOutline,IoMenuOutline,IoSettingsSharp!=!react-icons/io5 */ \"(app-pages-browser)/./node_modules/react-icons/io5/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../(hooks)/AuthProvider */ \"(app-pages-browser)/./app/(hooks)/AuthProvider.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction StyledSidebar(param) {\n    let { showmenu } = param;\n    _s();\n    const auth = (0,_hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    const [showMenu, setShowMenu] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [authenticated, setAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)( true && localStorage.getItem(\"token\") ? true : false);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function getInfos() {\n            if (authenticated) {\n                auth.getProfile().then((user)=>{\n                    setName(user.name);\n                    setId(user._id);\n                });\n            }\n        }\n        getInfos();\n    }, []);\n    if (authenticated) {\n        auth.getProfile().then((user)=>{\n            setName(user.name);\n            setId(user._id);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"\".concat((_StyledSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navList), \" \").concat(showmenu && (_StyledSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default().showMenu)),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/\",\n                    style: {\n                        fontSize: \"2.4rem\"\n                    },\n                    children: \"Logo\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: (_StyledSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navLink),\n                    href: \"/\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoHomeOutline_IoMenuOutline_IoSettingsSharp_react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoHomeOutline, {}, void 0, false, {\n                            fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: (_StyledSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navLink),\n                    href: \"/addNotes\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiEdit_react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiEdit, {}, void 0, false, {\n                            fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Notes\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: (_StyledSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navLink),\n                    href: \"/archivedNotes\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_GoArchive_react_icons_go__WEBPACK_IMPORTED_MODULE_7__.GoArchive, {}, void 0, false, {\n                            fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Archive\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: (_StyledSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navLink),\n                    href: \"/calender\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiOutlineCalendarDays_react_icons_hi2__WEBPACK_IMPORTED_MODULE_8__.HiOutlineCalendarDays, {}, void 0, false, {\n                            fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Calender\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: (_StyledSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navLink),\n                    href: \"/settings\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoHomeOutline_IoMenuOutline_IoSettingsSharp_react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoSettingsSharp, {}, void 0, false, {\n                            fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Settings\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoHomeOutline_IoMenuOutline_IoSettingsSharp_react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoMenuOutline, {\n                    className: (_StyledSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuIcon),\n                    onClick: ()=>{\n                        setShowMenu(!showMenu);\n                    }\n                }, void 0, false, {\n                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this),\n                showMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_StyledSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuOpt),\n                    children: authenticated ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_StyledSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default().profileOpt),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                href: \"/\",\n                                className: (_StyledSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default().optLink),\n                                children: \"My account\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                href: \"/\",\n                                className: (_StyledSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default().optLink),\n                                children: \"Settings\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                href: \"/\",\n                                className: (_StyledSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default().optLink),\n                                children: \"Log out\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 15\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_StyledSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default().unauth),\n                        children: [\n                            \"Notes will not be saved,\",\n                            \"  \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                href: \"/signup\",\n                                className: (_StyledSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default().authLink),\n                                children: \"Sign up\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\Vvv\\\\Zprojects\\\\notesappv3\\\\client\\\\app\\\\(ui)\\\\StyledSidebar.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(StyledSidebar, \"Ev6gSQA8Vu8+HAGj6tkFHc9ErwE=\", false, function() {\n    return [\n        _hooks_AuthProvider__WEBPACK_IMPORTED_MODULE_3__.useAuth\n    ];\n});\n_c = StyledSidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StyledSidebar);\nvar _c;\n$RefreshReg$(_c, \"StyledSidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8odWkpL1N0eWxlZFNpZGViYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRWdEO0FBQ25CO0FBQzJCO0FBQ2hCO0FBQ0c7QUFDcUM7QUFDcEM7QUFDTTtBQU1sRCxTQUFTVyxjQUFjLEtBQXVCO1FBQXZCLEVBQUVDLFFBQVEsRUFBYSxHQUF2Qjs7SUFDckIsTUFBTUMsT0FBWUgsNERBQU9BO0lBQ3pCLE1BQU0sQ0FBQ0ksVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNPLGVBQWVDLGlCQUFpQixHQUFHUiwrQ0FBUUEsQ0FDaEQsS0FBa0IsSUFBZVMsYUFBYUMsT0FBTyxDQUFDLFdBQ2xELE9BQ0E7SUFFTixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBO0lBQ2hDLE1BQU0sQ0FBQ2EsSUFBSUMsTUFBTSxHQUFHZCwrQ0FBUUE7SUFFNUJELGdEQUFTQSxDQUFDO1FBQ1IsZUFBZWdCO1lBQ2IsSUFBSVIsZUFBZTtnQkFDakJILEtBQUtZLFVBQVUsR0FBR0MsSUFBSSxDQUFDLENBQUNDO29CQUN0Qk4sUUFBUU0sS0FBS1AsSUFBSTtvQkFDakJHLE1BQU1JLEtBQUtDLEdBQUc7Z0JBQ2hCO1lBQ0Y7UUFDRjtRQUNBSjtJQUNGLEdBQUcsRUFBRTtJQUVMLElBQUlSLGVBQWU7UUFDakJILEtBQUtZLFVBQVUsR0FBR0MsSUFBSSxDQUFDLENBQUNDO1lBQ3RCTixRQUFRTSxLQUFLUCxJQUFJO1lBQ2pCRyxNQUFNSSxLQUFLQyxHQUFHO1FBQ2hCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUNDO1lBQUdDLFdBQVcsR0FBcUJuQixPQUFsQlosMEVBQWMsRUFBQyxLQUErQixPQUE1QlksWUFBWVosMkVBQWU7OzhCQUM3RCw4REFBQ0MsaURBQUlBO29CQUFDZ0MsTUFBSztvQkFBSUMsT0FBTzt3QkFBRUMsVUFBVTtvQkFBUzs4QkFBRzs7Ozs7OzhCQUc5Qyw4REFBQ2xDLGlEQUFJQTtvQkFBQzhCLFdBQVcvQiwwRUFBYztvQkFBRWlDLE1BQUs7O3NDQUNwQyw4REFBQzVCLDZIQUFhQTs7Ozs7c0NBQ2QsOERBQUNnQztzQ0FBSzs7Ozs7Ozs7Ozs7OzhCQUdSLDhEQUFDcEMsaURBQUlBO29CQUFDOEIsV0FBVy9CLDBFQUFjO29CQUFFaUMsTUFBSzs7c0NBQ3BDLDhEQUFDOUIsZ0ZBQU1BOzs7OztzQ0FDUCw4REFBQ2tDO3NDQUFLOzs7Ozs7Ozs7Ozs7OEJBR1IsOERBQUNwQyxpREFBSUE7b0JBQUM4QixXQUFXL0IsMEVBQWM7b0JBQUVpQyxNQUFLOztzQ0FDcEMsOERBQUM3QixzRkFBU0E7Ozs7O3NDQUNWLDhEQUFDaUM7c0NBQUs7Ozs7Ozs7Ozs7Ozs4QkFHUiw4REFBQ3BDLGlEQUFJQTtvQkFBQzhCLFdBQVcvQiwwRUFBYztvQkFBRWlDLE1BQUs7O3NDQUNwQyw4REFBQy9CLCtHQUFxQkE7Ozs7O3NDQUN0Qiw4REFBQ21DO3NDQUFLOzs7Ozs7Ozs7Ozs7OEJBR1IsOERBQUNwQyxpREFBSUE7b0JBQUM4QixXQUFXL0IsMEVBQWM7b0JBQUVpQyxNQUFLOztzQ0FDcEMsOERBQUMzQiwrSEFBZUE7Ozs7O3NDQUNoQiw4REFBQytCO3NDQUFLOzs7Ozs7Ozs7Ozs7OEJBRVIsOERBQUM5Qiw2SEFBYUE7b0JBQ1p3QixXQUFXL0IsMkVBQWU7b0JBQzFCdUMsU0FBUzt3QkFDUHhCLFlBQVksQ0FBQ0Q7b0JBQ2Y7Ozs7OztnQkFFREEsMEJBQ0MsOERBQUNlO29CQUFJRSxXQUFXL0IsMEVBQWM7OEJBQzNCZ0IsOEJBQ0MsOERBQUNhO3dCQUFJRSxXQUFXL0IsNkVBQWlCOzswQ0FDL0IsOERBQUNDLGlEQUFJQTtnQ0FBQ2dDLE1BQUs7Z0NBQUlGLFdBQVcvQiwwRUFBYzswQ0FBRTs7Ozs7OzBDQUcxQyw4REFBQ0MsaURBQUlBO2dDQUFDZ0MsTUFBSztnQ0FBSUYsV0FBVy9CLDBFQUFjOzBDQUFFOzs7Ozs7MENBRzFDLDhEQUFDQyxpREFBSUE7Z0NBQUNnQyxNQUFLO2dDQUFJRixXQUFXL0IsMEVBQWM7MENBQUU7Ozs7Ozs7Ozs7OzZDQUs1Qyw4REFBQzZCO3dCQUFJRSxXQUFXL0IseUVBQWE7OzRCQUFFOzRCQUNKOzBDQUN6Qiw4REFBQ0MsaURBQUlBO2dDQUFDZ0MsTUFBSztnQ0FBVUYsV0FBVy9CLDJFQUFlOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JqRTtHQXJHU1c7O1FBQ1dELHdEQUFPQTs7O0tBRGxCQztBQXVHVCwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHVpKS9TdHlsZWRTaWRlYmFyLnRzeD8xNTAzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TdHlsZWRTaWRlYmFyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBIaU91dGxpbmVDYWxlbmRhckRheXMgfSBmcm9tICdyZWFjdC1pY29ucy9oaTInO1xyXG5pbXBvcnQgeyBGaUVkaXQgfSBmcm9tICdyZWFjdC1pY29ucy9maSc7XHJcbmltcG9ydCB7IEdvQXJjaGl2ZSB9IGZyb20gJ3JlYWN0LWljb25zL2dvJztcclxuaW1wb3J0IHsgSW9Ib21lT3V0bGluZSwgSW9TZXR0aW5nc1NoYXJwLCBJb01lbnVPdXRsaW5lIH0gZnJvbSAncmVhY3QtaWNvbnMvaW81JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLyhob29rcykvQXV0aFByb3ZpZGVyJztcclxuXHJcbmludGVyZmFjZSBTaWRlUHJvcHMge1xyXG4gIHNob3dtZW51OiBib29sZWFuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTdHlsZWRTaWRlYmFyKHsgc2hvd21lbnUgfTogU2lkZVByb3BzKSB7XHJcbiAgY29uc3QgYXV0aDogYW55ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IFtzaG93TWVudSwgc2V0U2hvd01lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthdXRoZW50aWNhdGVkLCBzZXRBdXRoZW50aWNhdGVkXSA9IHVzZVN0YXRlKFxyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcclxuICAgICAgPyB0cnVlXHJcbiAgICAgIDogZmFsc2VcclxuICApO1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0SW5mb3MoKSB7XHJcbiAgICAgIGlmIChhdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgYXV0aC5nZXRQcm9maWxlKCkudGhlbigodXNlcjogYW55KSA9PiB7XHJcbiAgICAgICAgICBzZXROYW1lKHVzZXIubmFtZSk7XHJcbiAgICAgICAgICBzZXRJZCh1c2VyLl9pZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGdldEluZm9zKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBpZiAoYXV0aGVudGljYXRlZCkge1xyXG4gICAgYXV0aC5nZXRQcm9maWxlKCkudGhlbigodXNlcjogYW55KSA9PiB7XHJcbiAgICAgIHNldE5hbWUodXNlci5uYW1lKTtcclxuICAgICAgc2V0SWQodXNlci5faWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT17YCR7c3R5bGVzLm5hdkxpc3R9ICR7c2hvd21lbnUgJiYgc3R5bGVzLnNob3dNZW51fWB9PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgc3R5bGU9e3sgZm9udFNpemU6ICcyLjRyZW0nIH19PlxyXG4gICAgICAgICAgTG9nb1xyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlcy5uYXZMaW5rfSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPElvSG9tZU91dGxpbmUgLz5cclxuICAgICAgICAgIDxzcGFuPkhvbWU8L3NwYW4+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlcy5uYXZMaW5rfSBocmVmPVwiL2FkZE5vdGVzXCI+XHJcbiAgICAgICAgICA8RmlFZGl0IC8+XHJcbiAgICAgICAgICA8c3Bhbj5Ob3Rlczwvc3Bhbj5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT17c3R5bGVzLm5hdkxpbmt9IGhyZWY9XCIvYXJjaGl2ZWROb3Rlc1wiPlxyXG4gICAgICAgICAgPEdvQXJjaGl2ZSAvPlxyXG4gICAgICAgICAgPHNwYW4+QXJjaGl2ZTwvc3Bhbj5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT17c3R5bGVzLm5hdkxpbmt9IGhyZWY9XCIvY2FsZW5kZXJcIj5cclxuICAgICAgICAgIDxIaU91dGxpbmVDYWxlbmRhckRheXMgLz5cclxuICAgICAgICAgIDxzcGFuPkNhbGVuZGVyPC9zcGFuPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzdHlsZXMubmF2TGlua30gaHJlZj1cIi9zZXR0aW5nc1wiPlxyXG4gICAgICAgICAgPElvU2V0dGluZ3NTaGFycCAvPlxyXG4gICAgICAgICAgPHNwYW4+U2V0dGluZ3M8L3NwYW4+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxJb01lbnVPdXRsaW5lXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZW51SWNvbn1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0U2hvd01lbnUoIXNob3dNZW51KTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7c2hvd01lbnUgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51T3B0fT5cclxuICAgICAgICAgICAge2F1dGhlbnRpY2F0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlT3B0fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtzdHlsZXMub3B0TGlua30+XHJcbiAgICAgICAgICAgICAgICAgIE15IGFjY291bnRcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtzdHlsZXMub3B0TGlua30+XHJcbiAgICAgICAgICAgICAgICAgIFNldHRpbmdzXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT17c3R5bGVzLm9wdExpbmt9PlxyXG4gICAgICAgICAgICAgICAgICBMb2cgb3V0XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51bmF1dGh9PlxyXG4gICAgICAgICAgICAgICAgTm90ZXMgd2lsbCBub3QgYmUgc2F2ZWQseycgICd9XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiIGNsYXNzTmFtZT17c3R5bGVzLmF1dGhMaW5rfT5cclxuICAgICAgICAgICAgICAgICAgU2lnbiB1cFxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7Lyoge2F1dGhlbnRpY2F0ZWQgJiYgKFxyXG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtgJHtzdHlsZXMucHJvZmlsZX1gfSBocmVmPXtgL3VzZXIvJHtpZH1gfT5cclxuICAgICAgICAgICAgPENnUHJvZmlsZSBzdHlsZT17c3R5bGV9IC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5IZWxsbywge25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICl9ICovfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkU2lkZWJhcjtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkxpbmsiLCJIaU91dGxpbmVDYWxlbmRhckRheXMiLCJGaUVkaXQiLCJHb0FyY2hpdmUiLCJJb0hvbWVPdXRsaW5lIiwiSW9TZXR0aW5nc1NoYXJwIiwiSW9NZW51T3V0bGluZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXV0aCIsIlN0eWxlZFNpZGViYXIiLCJzaG93bWVudSIsImF1dGgiLCJzaG93TWVudSIsInNldFNob3dNZW51IiwiYXV0aGVudGljYXRlZCIsInNldEF1dGhlbnRpY2F0ZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibmFtZSIsInNldE5hbWUiLCJpZCIsInNldElkIiwiZ2V0SW5mb3MiLCJnZXRQcm9maWxlIiwidGhlbiIsInVzZXIiLCJfaWQiLCJkaXYiLCJ1bCIsImNsYXNzTmFtZSIsIm5hdkxpc3QiLCJocmVmIiwic3R5bGUiLCJmb250U2l6ZSIsIm5hdkxpbmsiLCJzcGFuIiwibWVudUljb24iLCJvbkNsaWNrIiwibWVudU9wdCIsInByb2ZpbGVPcHQiLCJvcHRMaW5rIiwidW5hdXRoIiwiYXV0aExpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(ui)/StyledSidebar.tsx\n"));

/***/ })

});