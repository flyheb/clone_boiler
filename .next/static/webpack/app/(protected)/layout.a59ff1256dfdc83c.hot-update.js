"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(protected)/layout",{

/***/ "(app-pages-browser)/./components/sidebar.tsx":
/*!********************************!*\
  !*** ./components/sidebar.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Sidebar: () => (/* binding */ Sidebar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_use_supabase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/use-supabase-auth */ \"(app-pages-browser)/./hooks/use-supabase-auth.ts\");\n/* harmony import */ var _utils_supabase_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/supabase/client */ \"(app-pages-browser)/./utils/supabase/client.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_FileText_LayoutDashboard_LayoutGrid_LogOut_Moon_Share2_ShoppingCart_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,FileText,LayoutDashboard,LayoutGrid,LogOut,Moon,Share2,ShoppingCart,Sun!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/layout-dashboard.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_FileText_LayoutDashboard_LayoutGrid_LogOut_Moon_Share2_ShoppingCart_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,FileText,LayoutDashboard,LayoutGrid,LogOut,Moon,Share2,ShoppingCart,Sun!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/file-text.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_FileText_LayoutDashboard_LayoutGrid_LogOut_Moon_Share2_ShoppingCart_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,FileText,LayoutDashboard,LayoutGrid,LogOut,Moon,Share2,ShoppingCart,Sun!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/shopping-cart.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_FileText_LayoutDashboard_LayoutGrid_LogOut_Moon_Share2_ShoppingCart_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,FileText,LayoutDashboard,LayoutGrid,LogOut,Moon,Share2,ShoppingCart,Sun!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/layout-grid.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_FileText_LayoutDashboard_LayoutGrid_LogOut_Moon_Share2_ShoppingCart_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,FileText,LayoutDashboard,LayoutGrid,LogOut,Moon,Share2,ShoppingCart,Sun!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/share-2.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_FileText_LayoutDashboard_LayoutGrid_LogOut_Moon_Share2_ShoppingCart_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,FileText,LayoutDashboard,LayoutGrid,LogOut,Moon,Share2,ShoppingCart,Sun!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-left.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_FileText_LayoutDashboard_LayoutGrid_LogOut_Moon_Share2_ShoppingCart_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,FileText,LayoutDashboard,LayoutGrid,LogOut,Moon,Share2,ShoppingCart,Sun!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/sun.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_FileText_LayoutDashboard_LayoutGrid_LogOut_Moon_Share2_ShoppingCart_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,FileText,LayoutDashboard,LayoutGrid,LogOut,Moon,Share2,ShoppingCart,Sun!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/moon.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_FileText_LayoutDashboard_LayoutGrid_LogOut_Moon_Share2_ShoppingCart_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,FileText,LayoutDashboard,LayoutGrid,LogOut,Moon,Share2,ShoppingCart,Sun!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/log-out.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ui_collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/collapsible */ \"(app-pages-browser)/./components/ui/collapsible.tsx\");\n/* harmony import */ var _hooks_use_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/hooks/use-theme */ \"(app-pages-browser)/./hooks/use-theme.ts\");\n/* __next_internal_client_entry_do_not_use__ Sidebar auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst menuItems = [\n    {\n        href: '/dashboard',\n        label: 'Dashboard',\n        icon: _barrel_optimize_names_ChevronLeft_FileText_LayoutDashboard_LayoutGrid_LogOut_Moon_Share2_ShoppingCart_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    },\n    {\n        href: '/documentos',\n        label: 'Documentos',\n        icon: _barrel_optimize_names_ChevronLeft_FileText_LayoutDashboard_LayoutGrid_LogOut_Moon_Share2_ShoppingCart_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n    },\n    {\n        href: '/pedidos',\n        label: 'Pedidos',\n        icon: _barrel_optimize_names_ChevronLeft_FileText_LayoutDashboard_LayoutGrid_LogOut_Moon_Share2_ShoppingCart_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n    },\n    {\n        href: '/aplicacoes',\n        label: 'Aplicações',\n        icon: _barrel_optimize_names_ChevronLeft_FileText_LayoutDashboard_LayoutGrid_LogOut_Moon_Share2_ShoppingCart_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n    },\n    {\n        href: '/compartilhar',\n        label: 'Compartilhar',\n        icon: _barrel_optimize_names_ChevronLeft_FileText_LayoutDashboard_LayoutGrid_LogOut_Moon_Share2_ShoppingCart_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_13__[\"default\"]\n    }\n];\nfunction Sidebar() {\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const { signOut } = (0,_hooks_use_supabase_auth__WEBPACK_IMPORTED_MODULE_1__.useSupabaseAuth)();\n    const supabase = (0,_utils_supabase_client__WEBPACK_IMPORTED_MODULE_2__.createClient)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { theme, toggleTheme } = (0,_hooks_use_theme__WEBPACK_IMPORTED_MODULE_8__.useTheme)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"Sidebar.useEffect\": ()=>{\n            const getUser = {\n                \"Sidebar.useEffect.getUser\": async ()=>{\n                    const { data: { user } } = await supabase.auth.getUser();\n                    setUser(user);\n                }\n            }[\"Sidebar.useEffect.getUser\"];\n            getUser();\n        }\n    }[\"Sidebar.useEffect\"], [\n        supabase\n    ]);\n    const handleSignOut = async ()=>{\n        await signOut();\n        router.push('/auth');\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_collapsible__WEBPACK_IMPORTED_MODULE_7__.Collapsible, {\n        open: !isCollapsed,\n        onOpenChange: (open)=>setIsCollapsed(!open),\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(\"flex h-screen flex-col bg-secondary/40 text-secondary-foreground transition-all duration-300 relative border-r border-border\", isCollapsed ? \"w-16\" : \"w-64\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between p-4\",\n                children: [\n                    !isCollapsed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-bold\",\n                        children: \"Boilerplate\"\n                    }, void 0, false, {\n                        fileName: \"/home/gustavo/projeto-teste/clone_boiler/components/sidebar.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 26\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_collapsible__WEBPACK_IMPORTED_MODULE_7__.CollapsibleTrigger, {\n                        asChild: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(\"absolute -right-4 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-secondary/40 hover:bg-primary/10\", \"border border-border\", isCollapsed && \"-right-4\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_FileText_LayoutDashboard_LayoutGrid_LogOut_Moon_Share2_ShoppingCart_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(\"h-7 w-7 transition-transform\", isCollapsed && \"rotate-180\")\n                            }, void 0, false, {\n                                fileName: \"/home/gustavo/projeto-teste/clone_boiler/components/sidebar.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/gustavo/projeto-teste/clone_boiler/components/sidebar.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/gustavo/projeto-teste/clone_boiler/components/sidebar.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/gustavo/projeto-teste/clone_boiler/components/sidebar.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_collapsible__WEBPACK_IMPORTED_MODULE_7__.CollapsibleContent, {\n                forceMount: true,\n                className: \"flex flex-col h-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"flex-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"space-y-3 px-2\",\n                            children: menuItems.map((item)=>{\n                                const Icon = item.icon;\n                                const isActive = pathname === item.href;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        href: item.href,\n                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(\"flex items-center transition-colors rounded-lg\", isCollapsed ? \"justify-center w-10 h-10 mx-auto\" : \"gap-3 px-3 py-2\", isActive ? \"bg-primary text-primary-foreground\" : \"text-muted-foreground hover:bg-primary/10 hover:text-primary\"),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                                                className: \"h-5 w-5\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/gustavo/projeto-teste/clone_boiler/components/sidebar.tsx\",\n                                                lineNumber: 101,\n                                                columnNumber: 21\n                                            }, this),\n                                            !isCollapsed && item.label\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/gustavo/projeto-teste/clone_boiler/components/sidebar.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 19\n                                    }, this)\n                                }, item.href, false, {\n                                    fileName: \"/home/gustavo/projeto-teste/clone_boiler/components/sidebar.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 17\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/gustavo/projeto-teste/clone_boiler/components/sidebar.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/gustavo/projeto-teste/clone_boiler/components/sidebar.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-auto border-t border-gray-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(\"px-2 py-2\", isCollapsed ? \"flex flex-col space-y-3\" : \"flex items-center justify-between\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: toggleTheme,\n                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(\"text-muted-foreground hover:bg-primary/10 hover:text-primary rounded-lg\", isCollapsed ? \"w-10 h-10 flex items-center justify-center mx-auto\" : \"p-2\"),\n                                        children: theme === 'dark' ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_FileText_LayoutDashboard_LayoutGrid_LogOut_Moon_Share2_ShoppingCart_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n                                            className: \"h-5 w-5\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/gustavo/projeto-teste/clone_boiler/components/sidebar.tsx\",\n                                            lineNumber: 123,\n                                            columnNumber: 17\n                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_FileText_LayoutDashboard_LayoutGrid_LogOut_Moon_Share2_ShoppingCart_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n                                            className: \"h-5 w-5\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/gustavo/projeto-teste/clone_boiler/components/sidebar.tsx\",\n                                            lineNumber: 125,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/gustavo/projeto-teste/clone_boiler/components/sidebar.tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleSignOut,\n                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(\"flex items-center transition-colors rounded-lg\", isCollapsed ? \"w-10 h-10 justify-center mx-auto\" : \"gap-3 px-3 py-2\", \"text-muted-foreground hover:bg-primary/10 hover:text-primary\"),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_FileText_LayoutDashboard_LayoutGrid_LogOut_Moon_Share2_ShoppingCart_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n                                                className: \"h-5 w-5\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/gustavo/projeto-teste/clone_boiler/components/sidebar.tsx\",\n                                                lineNumber: 137,\n                                                columnNumber: 15\n                                            }, this),\n                                            !isCollapsed && \"Sair\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/gustavo/projeto-teste/clone_boiler/components/sidebar.tsx\",\n                                        lineNumber: 129,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/gustavo/projeto-teste/clone_boiler/components/sidebar.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, this),\n                            !isCollapsed && user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"px-3 py-2 text-sm text-gray-400\",\n                                children: user.email\n                            }, void 0, false, {\n                                fileName: \"/home/gustavo/projeto-teste/clone_boiler/components/sidebar.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/gustavo/projeto-teste/clone_boiler/components/sidebar.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/gustavo/projeto-teste/clone_boiler/components/sidebar.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/gustavo/projeto-teste/clone_boiler/components/sidebar.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(Sidebar, \"tpp6U8MuT0feJLEgRxyZbVwY9PU=\", false, function() {\n    return [\n        _hooks_use_supabase_auth__WEBPACK_IMPORTED_MODULE_1__.useSupabaseAuth,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _hooks_use_theme__WEBPACK_IMPORTED_MODULE_8__.useTheme\n    ];\n});\n_c = Sidebar;\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMkQ7QUFDTDtBQUNYO0FBQ2E7QUFDeEI7QUFXWDtBQUNPO0FBQzBEO0FBQzFDO0FBRTVDLE1BQU1xQixZQUFZO0lBQ2hCO1FBQUVDLE1BQU07UUFBY0MsT0FBTztRQUFhQyxNQUFNakIsK0pBQWVBO0lBQUM7SUFDaEU7UUFBRWUsTUFBTTtRQUFlQyxPQUFPO1FBQWNDLE1BQU1oQixnS0FBUUE7SUFBQztJQUMzRDtRQUFFYyxNQUFNO1FBQVlDLE9BQU87UUFBV0MsTUFBTWYsZ0tBQVlBO0lBQUM7SUFDekQ7UUFBRWEsTUFBTTtRQUFlQyxPQUFPO1FBQWNDLE1BQU1kLGdLQUFVQTtJQUFDO0lBQzdEO1FBQUVZLE1BQU07UUFBaUJDLE9BQU87UUFBZ0JDLE1BQU1iLGdLQUFNQTtJQUFDO0NBQzlEO0FBRU0sU0FBU2M7O0lBQ2QsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUd4QiwrQ0FBUUEsQ0FBTTtJQUN0QyxNQUFNLENBQUN5QixhQUFhQyxlQUFlLEdBQUcxQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLEVBQUUyQixPQUFPLEVBQUUsR0FBRzlCLHlFQUFlQTtJQUNuQyxNQUFNK0IsV0FBVzlCLG9FQUFZQTtJQUM3QixNQUFNK0IsV0FBVzVCLDREQUFXQTtJQUM1QixNQUFNNkIsU0FBUzVCLDBEQUFTQTtJQUN4QixNQUFNLEVBQUU2QixLQUFLLEVBQUVDLFdBQVcsRUFBRSxHQUFHZiwwREFBUUE7SUFFdkNsQixnREFBU0E7NkJBQUM7WUFDUixNQUFNa0M7NkNBQVU7b0JBQ2QsTUFBTSxFQUFFQyxNQUFNLEVBQUVYLElBQUksRUFBRSxFQUFFLEdBQUcsTUFBTUssU0FBU08sSUFBSSxDQUFDRixPQUFPO29CQUN0RFQsUUFBUUQ7Z0JBQ1Y7O1lBQ0FVO1FBQ0Y7NEJBQUc7UUFBQ0w7S0FBUztJQUViLE1BQU1RLGdCQUFnQjtRQUNwQixNQUFNVDtRQUNORyxPQUFPTyxJQUFJLENBQUM7SUFDZDtJQUVBLHFCQUNFLDhEQUFDdkIsd0RBQVdBO1FBQ1Z3QixNQUFNLENBQUNiO1FBQ1BjLGNBQWMsQ0FBQ0QsT0FBU1osZUFBZSxDQUFDWTtRQUN4Q0UsV0FBV3JDLDhDQUFFQSxDQUNYLGdJQUNBc0IsY0FBYyxTQUFTOzswQkFHekIsOERBQUNnQjtnQkFBSUQsV0FBVTs7b0JBQ1osQ0FBQ2YsNkJBQWUsOERBQUNpQjt3QkFBR0YsV0FBVTtrQ0FBb0I7Ozs7OztrQ0FDbkQsOERBQUN4QiwrREFBa0JBO3dCQUFDMkIsT0FBTztrQ0FDekIsNEVBQUNDOzRCQUNDSixXQUFXckMsOENBQUVBLENBQ1gscUhBQ0Esd0JBQ0FzQixlQUFlO3NDQUdqQiw0RUFBQ2YsZ0tBQVdBO2dDQUNWOEIsV0FBV3JDLDhDQUFFQSxDQUNYLGdDQUNBc0IsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPekIsOERBQUNWLCtEQUFrQkE7Z0JBQUM4QixVQUFVO2dCQUFDTCxXQUFVOztrQ0FDdkMsOERBQUNNO3dCQUFJTixXQUFVO2tDQUNiLDRFQUFDTzs0QkFBR1AsV0FBVTtzQ0FDWHRCLFVBQVU4QixHQUFHLENBQUMsQ0FBQ0M7Z0NBQ2QsTUFBTUMsT0FBT0QsS0FBSzVCLElBQUk7Z0NBQ3RCLE1BQU04QixXQUFXdEIsYUFBYW9CLEtBQUs5QixJQUFJO2dDQUV2QyxxQkFDRSw4REFBQ2lDOzhDQUNDLDRFQUFDdkMsa0RBQUlBO3dDQUNITSxNQUFNOEIsS0FBSzlCLElBQUk7d0NBQ2ZxQixXQUFXckMsOENBQUVBLENBQ1gsa0RBQ0FzQixjQUFjLHFDQUFxQyxtQkFDbkQwQixXQUNJLHVDQUNBOzswREFHTiw4REFBQ0Q7Z0RBQUtWLFdBQVU7Ozs7Ozs0Q0FDZixDQUFDZixlQUFld0IsS0FBSzdCLEtBQUs7Ozs7Ozs7bUNBWnRCNkIsS0FBSzlCLElBQUk7Ozs7OzRCQWdCdEI7Ozs7Ozs7Ozs7O2tDQUlKLDhEQUFDc0I7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBSUQsV0FBV3JDLDhDQUFFQSxDQUNoQixhQUNBc0IsY0FBYyw0QkFBNEI7O2tEQUUxQyw4REFBQ21CO3dDQUNDUyxTQUFTckI7d0NBQ1RRLFdBQVdyQyw4Q0FBRUEsQ0FDWCwyRUFDQXNCLGNBQWMsdURBQXVEO2tEQUd0RU0sVUFBVSx1QkFDVCw4REFBQ3BCLGdLQUFHQTs0Q0FBQzZCLFdBQVU7Ozs7O2lFQUVmLDhEQUFDNUIsZ0tBQUlBOzRDQUFDNEIsV0FBVTs7Ozs7Ozs7Ozs7a0RBSXBCLDhEQUFDSTt3Q0FDQ1MsU0FBU2pCO3dDQUNUSSxXQUFXckMsOENBQUVBLENBQ1gsa0RBQ0FzQixjQUFjLHFDQUFxQyxtQkFDbkQ7OzBEQUdGLDhEQUFDaEIsZ0tBQU1BO2dEQUFDK0IsV0FBVTs7Ozs7OzRDQUNqQixDQUFDZixlQUFlOzs7Ozs7Ozs7Ozs7OzRCQUlwQixDQUFDQSxlQUFlRixzQkFDZiw4REFBQ2tCO2dDQUFJRCxXQUFVOzBDQUNaakIsS0FBSytCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU96QjtHQXhIZ0JoQzs7UUFHTXpCLHFFQUFlQTtRQUVsQkksd0RBQVdBO1FBQ2JDLHNEQUFTQTtRQUNPZSxzREFBUUE7OztLQVB6QksiLCJzb3VyY2VzIjpbIi9ob21lL2d1c3Rhdm8vcHJvamV0by10ZXN0ZS9jbG9uZV9ib2lsZXIvY29tcG9uZW50cy9zaWRlYmFyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyB1c2VTdXBhYmFzZUF1dGggfSBmcm9tIFwiQC9ob29rcy91c2Utc3VwYWJhc2UtYXV0aFwiXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL3V0aWxzL3N1cGFiYXNlL2NsaWVudCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVBhdGhuYW1lLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcbmltcG9ydCB7IFxuICBMYXlvdXREYXNoYm9hcmQsIFxuICBGaWxlVGV4dCwgXG4gIFNob3BwaW5nQ2FydCwgXG4gIExheW91dEdyaWQsIFxuICBTaGFyZTIsIFxuICBMb2dPdXQsXG4gIENoZXZyb25MZWZ0LFxuICBTdW4sXG4gIE1vb25cbn0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IENvbGxhcHNpYmxlLCBDb2xsYXBzaWJsZUNvbnRlbnQsIENvbGxhcHNpYmxlVHJpZ2dlciB9IGZyb20gXCIuL3VpL2NvbGxhcHNpYmxlXCJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIkAvaG9va3MvdXNlLXRoZW1lXCJcblxuY29uc3QgbWVudUl0ZW1zID0gW1xuICB7IGhyZWY6ICcvZGFzaGJvYXJkJywgbGFiZWw6ICdEYXNoYm9hcmQnLCBpY29uOiBMYXlvdXREYXNoYm9hcmQgfSxcbiAgeyBocmVmOiAnL2RvY3VtZW50b3MnLCBsYWJlbDogJ0RvY3VtZW50b3MnLCBpY29uOiBGaWxlVGV4dCB9LFxuICB7IGhyZWY6ICcvcGVkaWRvcycsIGxhYmVsOiAnUGVkaWRvcycsIGljb246IFNob3BwaW5nQ2FydCB9LFxuICB7IGhyZWY6ICcvYXBsaWNhY29lcycsIGxhYmVsOiAnQXBsaWNhw6fDtWVzJywgaWNvbjogTGF5b3V0R3JpZCB9LFxuICB7IGhyZWY6ICcvY29tcGFydGlsaGFyJywgbGFiZWw6ICdDb21wYXJ0aWxoYXInLCBpY29uOiBTaGFyZTIgfSxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIFNpZGViYXIoKSB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPGFueT4obnVsbClcbiAgY29uc3QgW2lzQ29sbGFwc2VkLCBzZXRJc0NvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgeyBzaWduT3V0IH0gPSB1c2VTdXBhYmFzZUF1dGgoKVxuICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudCgpXG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IHRoZW1lLCB0b2dnbGVUaGVtZSB9ID0gdXNlVGhlbWUoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0VXNlciA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG4gICAgICBzZXRVc2VyKHVzZXIpXG4gICAgfVxuICAgIGdldFVzZXIoKVxuICB9LCBbc3VwYWJhc2VdKVxuXG4gIGNvbnN0IGhhbmRsZVNpZ25PdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgc2lnbk91dCgpXG4gICAgcm91dGVyLnB1c2goJy9hdXRoJylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbGxhcHNpYmxlXG4gICAgICBvcGVuPXshaXNDb2xsYXBzZWR9XG4gICAgICBvbk9wZW5DaGFuZ2U9eyhvcGVuKSA9PiBzZXRJc0NvbGxhcHNlZCghb3Blbil9XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcImZsZXggaC1zY3JlZW4gZmxleC1jb2wgYmctc2Vjb25kYXJ5LzQwIHRleHQtc2Vjb25kYXJ5LWZvcmVncm91bmQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHJlbGF0aXZlIGJvcmRlci1yIGJvcmRlci1ib3JkZXJcIixcbiAgICAgICAgaXNDb2xsYXBzZWQgPyBcInctMTZcIiA6IFwidy02NFwiXG4gICAgICApfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtNFwiPlxuICAgICAgICB7IWlzQ29sbGFwc2VkICYmIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPkJvaWxlcnBsYXRlPC9oMj59XG4gICAgICAgIDxDb2xsYXBzaWJsZVRyaWdnZXIgYXNDaGlsZD5cbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgICAgXCJhYnNvbHV0ZSAtcmlnaHQtNCB0b3AtNiBmbGV4IGgtOCB3LTggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1zZWNvbmRhcnkvNDAgaG92ZXI6YmctcHJpbWFyeS8xMFwiLFxuICAgICAgICAgICAgICBcImJvcmRlciBib3JkZXItYm9yZGVyXCIsXG4gICAgICAgICAgICAgIGlzQ29sbGFwc2VkICYmIFwiLXJpZ2h0LTRcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2hldnJvbkxlZnQgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICAgICAgXCJoLTcgdy03IHRyYW5zaXRpb24tdHJhbnNmb3JtXCIsXG4gICAgICAgICAgICAgICAgaXNDb2xsYXBzZWQgJiYgXCJyb3RhdGUtMTgwXCJcbiAgICAgICAgICAgICAgKX0gXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0NvbGxhcHNpYmxlVHJpZ2dlcj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Q29sbGFwc2libGVDb250ZW50IGZvcmNlTW91bnQgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBoLWZ1bGxcIj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS0zIHB4LTJcIj5cbiAgICAgICAgICAgIHttZW51SXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IEljb24gPSBpdGVtLmljb25cbiAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBwYXRobmFtZSA9PT0gaXRlbS5ocmVmXG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLmhyZWZ9PlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZmxleCBpdGVtcy1jZW50ZXIgdHJhbnNpdGlvbi1jb2xvcnMgcm91bmRlZC1sZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGlzQ29sbGFwc2VkID8gXCJqdXN0aWZ5LWNlbnRlciB3LTEwIGgtMTAgbXgtYXV0b1wiIDogXCJnYXAtMyBweC0zIHB5LTJcIixcbiAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJnLXByaW1hcnkgdGV4dC1wcmltYXJ5LWZvcmVncm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBob3ZlcjpiZy1wcmltYXJ5LzEwIGhvdmVyOnRleHQtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPlxuICAgICAgICAgICAgICAgICAgICB7IWlzQ29sbGFwc2VkICYmIGl0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1hdXRvIGJvcmRlci10IGJvcmRlci1ncmF5LTcwMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgIFwicHgtMiBweS0yXCIsXG4gICAgICAgICAgICBpc0NvbGxhcHNlZCA/IFwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTNcIiA6IFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgICApfT5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlVGhlbWV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICAgICAgXCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgaG92ZXI6YmctcHJpbWFyeS8xMCBob3Zlcjp0ZXh0LXByaW1hcnkgcm91bmRlZC1sZ1wiLFxuICAgICAgICAgICAgICAgIGlzQ29sbGFwc2VkID8gXCJ3LTEwIGgtMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0b1wiIDogXCJwLTJcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGhlbWUgPT09ICdkYXJrJyA/IChcbiAgICAgICAgICAgICAgICA8U3VuIGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxNb29uIGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2lnbk91dH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgICAgICBcImZsZXggaXRlbXMtY2VudGVyIHRyYW5zaXRpb24tY29sb3JzIHJvdW5kZWQtbGdcIixcbiAgICAgICAgICAgICAgICBpc0NvbGxhcHNlZCA/IFwidy0xMCBoLTEwIGp1c3RpZnktY2VudGVyIG14LWF1dG9cIiA6IFwiZ2FwLTMgcHgtMyBweS0yXCIsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgaG92ZXI6YmctcHJpbWFyeS8xMCBob3Zlcjp0ZXh0LXByaW1hcnlcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TG9nT3V0IGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPlxuICAgICAgICAgICAgICB7IWlzQ29sbGFwc2VkICYmIFwiU2FpclwifVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7IWlzQ29sbGFwc2VkICYmIHVzZXIgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgIHt1c2VyLmVtYWlsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbGxhcHNpYmxlQ29udGVudD5cbiAgICA8L0NvbGxhcHNpYmxlPlxuICApXG59Il0sIm5hbWVzIjpbInVzZVN1cGFiYXNlQXV0aCIsImNyZWF0ZUNsaWVudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUGF0aG5hbWUiLCJ1c2VSb3V0ZXIiLCJjbiIsIkxheW91dERhc2hib2FyZCIsIkZpbGVUZXh0IiwiU2hvcHBpbmdDYXJ0IiwiTGF5b3V0R3JpZCIsIlNoYXJlMiIsIkxvZ091dCIsIkNoZXZyb25MZWZ0IiwiU3VuIiwiTW9vbiIsIkxpbmsiLCJDb2xsYXBzaWJsZSIsIkNvbGxhcHNpYmxlQ29udGVudCIsIkNvbGxhcHNpYmxlVHJpZ2dlciIsInVzZVRoZW1lIiwibWVudUl0ZW1zIiwiaHJlZiIsImxhYmVsIiwiaWNvbiIsIlNpZGViYXIiLCJ1c2VyIiwic2V0VXNlciIsImlzQ29sbGFwc2VkIiwic2V0SXNDb2xsYXBzZWQiLCJzaWduT3V0Iiwic3VwYWJhc2UiLCJwYXRobmFtZSIsInJvdXRlciIsInRoZW1lIiwidG9nZ2xlVGhlbWUiLCJnZXRVc2VyIiwiZGF0YSIsImF1dGgiLCJoYW5kbGVTaWduT3V0IiwicHVzaCIsIm9wZW4iLCJvbk9wZW5DaGFuZ2UiLCJjbGFzc05hbWUiLCJkaXYiLCJoMiIsImFzQ2hpbGQiLCJidXR0b24iLCJmb3JjZU1vdW50IiwibmF2IiwidWwiLCJtYXAiLCJpdGVtIiwiSWNvbiIsImlzQWN0aXZlIiwibGkiLCJvbkNsaWNrIiwiZW1haWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/sidebar.tsx\n"));

/***/ })

});