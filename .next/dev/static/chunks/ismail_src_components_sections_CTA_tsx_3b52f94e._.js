(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ismail/src/components/sections/CTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ismail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ismail/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ismail$2f$src$2f$data$2f$site$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/ismail/src/data/site.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ismail$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ismail/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
'use client';
;
;
;
function CTA({ title = 'Hemen Ücretsiz Teklif Alın!', subtitle = 'Aracınızın değerini öğrenmek için bizi arayın veya WhatsApp üzerinden ulaşın. 7/24 hizmetinizdeyiz.' }) {
    const handleWhatsAppClick = ()=>{
        if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.gtag) {
            window.gtag('event', 'conversion', {
                send_to: `${__TURBOPACK__imported__module__$5b$project$5d2f$ismail$2f$src$2f$data$2f$site$2e$json__$28$json$29$__["default"].googleAds.conversionId}/${__TURBOPACK__imported__module__$5b$project$5d2f$ismail$2f$src$2f$data$2f$site$2e$json__$28$json$29$__["default"].googleAds.whatsappConversionLabel}`
            });
        }
        window.open(`https://wa.me/${__TURBOPACK__imported__module__$5b$project$5d2f$ismail$2f$src$2f$data$2f$site$2e$json__$28$json$29$__["default"].whatsapp}?text=${encodeURIComponent('Merhaba, hasarlı aracım için fiyat teklifi almak istiyorum.')}`, '_blank');
    };
    const handlePhoneClick = ()=>{
        if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.gtag) {
            window.gtag('event', 'conversion', {
                send_to: `${__TURBOPACK__imported__module__$5b$project$5d2f$ismail$2f$src$2f$data$2f$site$2e$json__$28$json$29$__["default"].googleAds.conversionId}/${__TURBOPACK__imported__module__$5b$project$5d2f$ismail$2f$src$2f$data$2f$site$2e$json__$28$json$29$__["default"].googleAds.phoneConversionLabel}`
            });
        }
        window.location.href = `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$ismail$2f$src$2f$data$2f$site$2e$json__$28$json$29$__["default"].phone.replace(/\s/g, '')}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ismail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ismail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ismail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0",
                    style: {
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
                    }
                }, void 0, false, {
                    fileName: "[project]/ismail/src/components/sections/CTA.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/ismail/src/components/sections/CTA.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ismail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-custom relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ismail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center max-w-3xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ismail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/ismail/src/components/sections/CTA.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ismail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg md:text-xl text-white/90 mb-8",
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/ismail/src/components/sections/CTA.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ismail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-center justify-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ismail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handlePhoneClick,
                                    className: "w-full sm:w-auto bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ismail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ismail$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPhone"], {
                                            className: "text-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/ismail/src/components/sections/CTA.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$ismail$2f$src$2f$data$2f$site$2e$json__$28$json$29$__["default"].phone
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ismail/src/components/sections/CTA.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ismail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleWhatsAppClick,
                                    className: "w-full sm:w-auto bg-whatsapp hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ismail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ismail$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                                            className: "text-2xl"
                                        }, void 0, false, {
                                            fileName: "[project]/ismail/src/components/sections/CTA.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this),
                                        "WhatsApp ile Yaz"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ismail/src/components/sections/CTA.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ismail/src/components/sections/CTA.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ismail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-6 text-white/70 text-sm",
                            children: "7/24 Hizmet • Aynı Gün Ödeme • Ücretsiz Değerlendirme"
                        }, void 0, false, {
                            fileName: "[project]/ismail/src/components/sections/CTA.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ismail/src/components/sections/CTA.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/ismail/src/components/sections/CTA.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ismail/src/components/sections/CTA.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = CTA;
var _c;
__turbopack_context__.k.register(_c, "CTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=ismail_src_components_sections_CTA_tsx_3b52f94e._.js.map