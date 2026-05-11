module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/data/site.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"name":"Hasarlı Araç Alım Merkezi","title":"Kazalı & Hasarlı Araç Alımı | En Yüksek Fiyat - Hasarlı Araç Alım Merkezi","description":"Türkiye'nin her yerinden hasarlı, kazalı, pert ve hurda araçlarınızı 30 dakikada değerlendiriyoruz. En yüksek fiyat, ücretsiz çekici ve anında nakit ödeme garantisiyle.","phone":"+90 507 071 65 13","phoneRaw":"+905070716513","whatsapp":"905070716513","email":"info@hasarliaracalim.com","address":"Otoport Galericiler Sitesi, Esenyurt / İSTANBUL","workingHours":"7/24 Hizmet","gaId":"G-XXXXXXXXXX","gtmId":"GTM-XXXXXXX","siteName":"Hasarlı Araç Alım Merkezi","siteTitle":"Kazalı & Hasarlı Araç Alımı | En Yüksek Fiyat - Hasarlı Araç Alım Merkezi","siteDescription":"Türkiye'nin her yerinden hasarlı, kazalı, pert ve hurda araçlarınızı 30 dakikada değerlendiriyoruz. En yüksek fiyat, ücretsiz çekici ve anında nakit ödeme garantisiyle.","contact":{"phone":"+90 507 071 65 13","phoneRaw":"+905070716513","whatsapp":"905070716513","email":"info@hasarliaracalim.com","address":"Otoport Galericiler Sitesi, Esenyurt / İSTANBUL"},"social":{"facebook":"https://facebook.com/hasarliaracalim","instagram":"https://instagram.com/hasarliaracalim","twitter":"https://twitter.com/hasarliaracalim","youtube":"https://youtube.com/hasarliaracalim"},"navigation":[{"title":"Ana Sayfa","href":"/"},{"title":"Hizmetler","href":"/hizmetler","hasDropdown":true},{"title":"Şehirler","href":"/sehirler","hasDropdown":true},{"title":"Bilgiler","href":"/bilgiler"},{"title":"Hakkımızda","href":"/hakkimizda"},{"title":"İletişim","href":"/iletisim"}],"topBar":[{"icon":"schedule","text":"7/24 Hizmet"},{"icon":"payments","text":"Aynı Gün Nakit"},{"icon":"auto_towing","text":"Ücretsiz Çekici"}],"trustIndicators":[{"icon":"verified_user","text":"Güvenli İşlem"},{"icon":"bolt","text":"Hızlı Ödeme"},{"icon":"local_shipping","text":"Yerinden Alım"}],"googleAds":{"conversionId":"AW-XXXXXXXXX","phoneConversionLabel":"XXXXXXXXX","whatsappConversionLabel":"XXXXXXXXX","formConversionLabel":"XXXXXXXXX"},"gtm":{"containerId":"GTM-XXXXXXX"},"analytics":{"measurementId":"G-XXXXXXXXXX"}});}),
"[project]/src/lib/tracking/lead.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trackLead",
    ()=>trackLead
]);
function trackLead({ type, source, label, value }) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
}),
"[project]/src/components/common/ContactButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/site.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tracking$2f$lead$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/tracking/lead.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function ContactButton({ type, children, className = '', onClick, position, whatsappMessage, suppressTracking = false }) {
    const handlePhoneClick = (e)=>{
        if (!suppressTracking) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tracking$2f$lead$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackLead"])({
                type: 'phone_call',
                source: position,
                label: typeof children === 'string' ? children : 'Phone Button'
            });
        }
        if (onClick) onClick();
    };
    const handleWhatsAppClick = (e)=>{
        if (!suppressTracking) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tracking$2f$lead$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackLead"])({
                type: 'whatsapp_call',
                source: position,
                label: typeof children === 'string' ? children : 'WhatsApp Button'
            });
        }
        if (onClick) onClick();
    };
    if (type === 'phone') {
        // Ensure siteData.phone exists, fallback if necessary (though siteData usually has it)
        const phoneNumber = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$json__$28$json$29$__["default"].phone || '';
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: `tel:${phoneNumber.replace(/\s/g, '')}`,
            onClick: handlePhoneClick,
            className: className,
            "aria-label": "Telefonla Ara",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/common/ContactButton.tsx",
            lineNumber: 56,
            columnNumber: 13
        }, this);
    }
    if (type === 'whatsapp') {
        const message = whatsappMessage || 'Merhaba, hasarlı aracım için fiyat teklifi almak istiyorum.';
        // Ensure siteData.whatsapp exists
        const whatsappNumber = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$json__$28$json$29$__["default"].contact?.whatsapp || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$json__$28$json$29$__["default"].whatsapp || '';
        // Note: siteData structure might vary, checking both just in case, or stick to what was there.
        // Previous code used siteData.whatsapp.
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: whatsappUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            onClick: handleWhatsAppClick,
            className: className,
            "aria-label": "WhatsApp ile İletişime Geç",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/common/ContactButton.tsx",
            lineNumber: 77,
            columnNumber: 13
        }, this);
    }
    return null;
}
}),
"[project]/src/data/services.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"services\":[{\"id\":1,\"slug\":\"hasarli-arac-alim-satim\",\"title\":\"Hasarlı Araç Alım Satım\",\"shortTitle\":\"Hasarlı Araç\",\"icon\":\"car_crash\",\"iconColor\":\"orange\",\"description\":\"Her türlü hasarlı aracınızı en iyi fiyatla satın alıyoruz.\",\"metaTitle\":\"Hasarlı Araç Alım Satım | 30 Dakikada Teklif - Hasarlı Araç Alım Merkezi\",\"metaDescription\":\"Hasarlı aracınızı 30 dakikada değerlendiriyoruz. En yüksek fiyat garantisi, ücretsiz çekici, aynı gün nakit ödeme. Hemen fiyat teklifi alın!\",\"heroTitle\":\"Hasarlı Araç Alım Satım\",\"heroSubtitle\":\"Aracınızın hasar durumu ne olursa olsun, değerinde nakit olarak satın alıyoruz. Güvenli işlem, hızlı ödeme ve yerinden teslim alma avantajlarıyla.\",\"heroImage\":\"/images/backgrounds/hasarli-hero.png\",\"content\":{\"intro\":\"Hasarlı araç alım satımında Türkiye'nin en güvenilir adresi olarak, her marka ve model aracınızı değerinde satın alıyoruz. Küçük çiziklerden ağır hasarlara kadar her türlü durumda aracınız için en iyi fiyatı sunuyoruz.\",\"details\":[\"Kaporta hasarlı araçlar\",\"Boyalı araçlar\",\"Çarpışma hasarlı araçlar\",\"Sel hasarlı araçlar\",\"Dolu hasarlı araçlar\",\"Yangın hasarlı araçlar\"],\"benefits\":[\"Piyasanın üzerinde fiyat teklifi\",\"Aynı gün nakit ödeme\",\"Ücretsiz ekspertiz hizmeti\",\"Türkiye geneli hizmet\"],\"pricingFactors\":[{\"title\":\"Hasar Boyutu\",\"description\":\"Lokal boya mı yoksa ağır parça değişimi mi gerektiği fiyatı belirler.\"},{\"title\":\"Kilometre\",\"description\":\"Düşük kilometreli hasarlı araçlar, yüksek kilometrelilere göre daha değerlidir.\"},{\"title\":\"Yedek Parça Erişimi\",\"description\":\"Parçası kolay bulunan modellerde alım fiyatı daha yüksektir.\"},{\"title\":\"Piyasa Talebi\",\"description\":\"İkinci elde çok tercih edilen modeller hasarlı olsa da hızlı satılır.\"}],\"commonMistakes\":[\"Hasarı gizlemeye çalışmak (noterde sorun çıkarır)\",\"Onarım maliyetini olduğundan az hesaplamak\",\"Güvenilir olmayan şahıslara vekalet vermek\",\"Aracı piyasa değerinin çok altında acil satmak\"],\"comparison\":[{\"feature\":\"Ödeme Süresi\",\"us\":\"Anında Nakit\",\"others\":\"1-3 İş Günü\"},{\"feature\":\"Çekici Hizmeti\",\"us\":\"Ücretsiz\",\"others\":\"Ücretli\"},{\"feature\":\"Evrak Takibi\",\"us\":\"Biz Yapıyoruz\",\"others\":\"Müşteri Yapıyor\"},{\"feature\":\"Fiyat Garantisi\",\"us\":\"En Yüksek\",\"others\":\"Değişken\"}],\"longDescription\":\"<h3>Hasarlı Araç Satışında Şeffaf Süreç</h3><p>Hasarlı araç alım satımında en kritik nokta güven ve şeffaflıktır. Hasarlı Araç Alım Merkezi olarak, aracınızın mevcut durumunu detaylı bir şekilde analiz ediyor ve piyasadaki en adil teklifi sunuyoruz. Bir aracın sadece 'hasarlı' olması, onun değerini tamamen yitirdiği anlamına gelmez. Motor durumu, şasi bütünlüğü ve iç aksam kalitesi gibi birçok faktörü göz önünde bulundurarak profesyonel bir değerleme yapıyoruz.</p><h4>Neden Profesyonel Bir Firmaya Satmalısınız?</h4><p>Şahıslara yapılan satışlarda genellikle kaparo dolandırıcılığı veya devir işlemlerinde yaşanan aksaklıklar büyük risk taşır. Biz kurumsal bir yapı olarak tüm yasal süreçleri noter huzurunda ve resmi evraklarla yürütüyoruz. Bu sayede hem aracınızın satışından sonra doğabilecek hukuki risklerden kurtulursunuz hem de paranızı anında nakit olarak alırsınız.</p>\"},\"faq\":[{\"question\":\"Hasarlı aracımı nasıl satarım?\",\"answer\":\"WhatsApp veya telefon üzerinden bizimle iletişime geçin, aracınızın fotoğraflarını gönderin. Size hemen fiyat teklifi sunalım ve anlaşma sağlanırsa aynı gün işlemi tamamlayalım.\"},{\"question\":\"Hangi hasarlı araçları alıyorsunuz?\",\"answer\":\"Kaporta hasarı, boya hasarı, çarpışma hasarı, sel hasarı, dolu hasarı ve yangın hasarı olan tüm araçları satın alıyoruz.\"},{\"question\":\"Ödeme nasıl yapılıyor?\",\"answer\":\"Noter satışı anında banka havale/EFT veya nakit olarak ödeme yapıyoruz. Tercih size ait.\"}]},{\"id\":2,\"slug\":\"kazali-arac-alim-satim\",\"title\":\"Kazalı Araç Alım Satım\",\"shortTitle\":\"Kazalı Araç\",\"icon\":\"minor_crash\",\"iconColor\":\"red\",\"description\":\"Kaza yapmış araçlarınızı değerinde satın alıyoruz.\",\"metaTitle\":\"Kazalı Araç Alım Satım | 30 Dakikada Teklif - Hasarlı Araç Alım Merkezi\",\"metaDescription\":\"Kazalı aracınızı 30 dakikada değerlendiriyoruz. En yüksek fiyat garantisi, ücretsiz çekici, aynı gün nakit ödeme. Hemen arayın!\",\"heroTitle\":\"Kazalı Araç Alım Satım\",\"heroSubtitle\":\"Trafik kazası geçirmiş aracınızı hasar durumuna bakılmaksızın değerinde satın alıyoruz. Hızlı ve güvenli satış süreci.\",\"heroImage\":\"/images/backgrounds/kazali-hero.png\",\"content\":{\"intro\":\"Trafik kazası sonucu hasar görmüş araçlarınızı satın alıyoruz. Hafif çarpışmalardan ağır hasarlara kadar her türlü kazalı aracınız için en iyi fiyatı sunuyoruz.\",\"details\":[\"Hafif çarpışmalı araçlar\",\"Ağır kazalı araçlar\",\"Ön darbe hasarlı araçlar\",\"Arka darbe hasarlı araçlar\",\"Yan çarpışmalı araçlar\",\"Takla atmış araçlar\"],\"benefits\":[\"Kaza raporlu araçlara özel fiyat\",\"7/24 ekspertiz hizmeti\",\"Sigorta işlemlerinde destek\",\"Türkiye'nin her yerinden alım\"],\"pricingFactors\":[{\"title\":\"Hava Yastığı Durumu\",\"description\":\"Airbag açmış araçlarda fiyatlandırma farklı kriterlere göre yapılır.\"},{\"title\":\"Şasi ve Direkler\",\"description\":\"Aracın iskelet yapısındaki hasar oranı en önemli fiyat kriteridir.\"},{\"title\":\"Tramer Kaydı\",\"description\":\"Kaza raporundaki tutar ve hasar kodu değerlemeyi etkiler.\"},{\"title\":\"Motor Sağlığı\",\"description\":\"Kaza motor aksamına zarar vermediyse araç daha değerlidir.\"}],\"commonMistakes\":[\"Kaza tespit tutanağı olmadan satış yapmaya çalışmak\",\"Aracın ağır hasarlı olduğunu gizlemek\",\"Sigorta şirketinden ödeme almadan aracı ucuza elden çıkarmak\"],\"comparison\":[{\"feature\":\"Değerleme Hızı\",\"us\":\"30 Dakika\",\"others\":\"24 Saat\"},{\"feature\":\"Ekspertiz\",\"us\":\"Ücretsiz Yerinde\",\"others\":\"Müşteri Getirir\"},{\"feature\":\"Noter Masrafı\",\"us\":\"Bizden\",\"others\":\"Müşteriden\"}],\"longDescription\":\"<h3>Kazalı Araçlar İçin Profesyonel Değerleme</h3><p>Trafik kazası sonrası aracınızın durumu ne kadar kötü görünürse görünsün, mutlaka uzman görüşü almalısınız. Kazalı araçların onarımı çoğu zaman ekonomik olmasa da, yedek parça ve geri dönüşüm değeri oldukça yüksektir. Kazalı Araç Alım Merkezi olarak kaza geçirmiş tüm araçları marka ve model gözetmeksizin satın alıyoruz.</p><h4>Kaza Sonrası Hızlı Çözüm</h4><p>Aracınız kaza yerinde veya serviste bekliyor olabilir. Depolama ve çekici maliyetleriyle uğraşmak yerine, bize bir telefonla ulaşıp aracınızı olduğu yerden satabilirsiniz. Kaza tutanağı ve ruhsat bilgilerinizle bize ulaştığınızda, uzman ekibimiz en kısa sürede yanınıza gelerek nakit ödemeyi gerçekleştirir ve aracı teslim alır.</p>\"},\"faq\":[{\"question\":\"Ağır kazalı araç alıyor musunuz?\",\"answer\":\"Evet, hasar durumu ne olursa olsun tüm kazalı araçları satın alıyoruz. Ağır hasarlı araçlar için de rekabetçi fiyat sunuyoruz.\"},{\"question\":\"Kaza raporlu araç satılabilir mi?\",\"answer\":\"Evet, tramer kaydı bulunan veya kaza raporu olan araçları da satın alıyoruz. Bu durum fiyatı etkiler ancak satış mümkündür.\"}]},{\"id\":3,\"slug\":\"hurda-arac-alim-satim\",\"title\":\"Hurda Araç Alım Satım\",\"shortTitle\":\"Hurda Araç\",\"icon\":\"recycling\",\"iconColor\":\"stone\",\"description\":\"Hurda araçlarınızı geri dönüşüme kazandırıyoruz.\",\"metaTitle\":\"Hurda Araç Alımı | Hurda Belgesi & En İyi Fiyat - Hasarlı Araç Alım Merkezi\",\"metaDescription\":\"Hurda belgeli araçları en yüksek fiyata alıyoruz. Resmi belgeli işlem, ücretsiz çekici, anında ödeme. Hurda araç satmak için arayın!\",\"heroTitle\":\"Hurda Araç Alım Satım\",\"heroSubtitle\":\"Ekonomik ömrünü tamamlamış, kullanılamaz durumdaki hurda araçlarınızı değerinde satın alıp geri dönüşüme kazandırıyoruz.\",\"heroImage\":\"/images/backgrounds/hurda-hero.png\",\"content\":{\"intro\":\"Hurda araç alımında yasal prosedürlere uygun şekilde işlem yapıyoruz. Araçlarınızı çevre dostu yöntemlerle geri dönüşüme kazandırırken size en iyi fiyatı sunuyoruz.\",\"details\":[\"Ekonomik ömrünü tamamlamış araçlar\",\"Uzun süredir çalışmayan araçlar\",\"Onarımı ekonomik olmayan araçlar\",\"Parça parça satılamayan araçlar\",\"Ağır hasarlı eski model araçlar\"],\"benefits\":[\"Yasal hurda işlemleri\",\"Çevre dostu geri dönüşüm\",\"Hurda belgesi düzenleme\",\"Vergi borcu olan araçlarda çözüm\"],\"pricingFactors\":[{\"title\":\"Metal Ağırlığı\",\"description\":\"Aracın toplam metal tonajı hurda fiyatını belirleyen temel etkendir.\"},{\"title\":\"Katalizör Durumu\",\"description\":\"Değerli maden içeren katalizörün araç üzerinde olması fiyatı artırır.\"},{\"title\":\"Parça Değeri\",\"description\":\"Hala kullanılabilir durumdaki şanzıman veya motor parçaları ek değer sağlar.\"},{\"title\":\"Nakliye Mesafesi\",\"description\":\"Aracın bulunduğu konum ile geri dönüşüm tesisi arasındaki mesafe.\"}],\"commonMistakes\":[\"Trafikten düşüm işlemini yapmadan aracı teslim etmek\",\"Resmi olmayan hurdacılara satış yapmak\",\"Vergi ve trafik cezalarını kapatmadan hurda işlemi beklemek\"],\"comparison\":[{\"feature\":\"Hurda Belgesi\",\"us\":\"Anında Düzenlenir\",\"others\":\"Haftalar Sürebilir\"},{\"feature\":\"Geri Dönüşüm\",\"us\":\"Çevre Lisanslı\",\"others\":\"Kaçak Tesisler\"},{\"feature\":\"Ödeme\",\"us\":\"Nakit / Havale\",\"others\":\"Soru İşareti\"}],\"longDescription\":\"<h3>Hurda Araçlar İçin En Yüksek Değer</h3><p>Ekonomik ömrünü tamamlamış veya onarılamaz durumdaki araçlarınızın 'çöp' olmadığını biliyoruz. Hurda Araç Alım Merkezi olarak, aracınızın metal değerini ve yedek parça potansiyelini en doğru şekilde hesaplıyoruz. Türkiye genelindeki geniş hizmet ağımızla, hurda aracınızı bulunduğu yerden ücretsiz çekicimizle alıyoruz.</p><h4>Yasal Hurda Prosedürleri</h4><p>Hurda araç satışında en önemli konu yasal süreçtir. Aracınızın trafikten çekilmesi ve hurda belgesinin düzenlenmesi işlemlerinde size tam destek sağlıyoruz. Çevre ve Şehircilik Bakanlığı lisanslı tesislerimizde yapılan geri dönüşüm işlemleri sayesinde, hem aracınızdan en yüksek kazancı elde edersiniz hem de doğaya katkıda bulunursunuz.</p>\"},\"faq\":[{\"question\":\"Hurda araç nasıl satılır?\",\"answer\":\"Hurda aracınızın fotoğraflarını gönderin, fiyat teklifi alalım. Anlaşma sağlanırsa çekicimizi gönderip aracı alalım ve noter işlemlerini tamamlayalım.\"},{\"question\":\"Hurda belgesi ne işe yarar?\",\"answer\":\"Hurda belgesi, aracın trafikten düşürüldüğünü ve yasal olarak bertaraf edildiğini belgeler. MTV ve sigorta yükümlülüklerinden kurtulmanızı sağlar.\"}]},{\"id\":4,\"slug\":\"pert-arac-alim-satim\",\"title\":\"Pert Araç Alım Satım\",\"shortTitle\":\"Pert Araç\",\"icon\":\"no_crash\",\"iconColor\":\"red\",\"description\":\"Sigorta şirketi pert kararı vermiş araçları alıyoruz.\",\"metaTitle\":\"Pert Araç Alımı | Sigorta Pert Raporlu Araç Alan - Hasarlı Araç Alım Merkezi\",\"metaDescription\":\"Sigorta pert raporlu araçlarınızı 30 dakikada değerlendiriyoruz. En yüksek fiyat, hızlı işlem, ücretsiz çekici, anında ödeme.\",\"heroTitle\":\"Pert Araç Alım Satım\",\"heroSubtitle\":\"Sigorta şirketi tarafından pert kararı verilmiş araçlarınızı değerinde satın alıyoruz. Pert-total ve pert-parça araçlara özel fiyat.\",\"heroImage\":\"/images/backgrounds/pert-hero.png\",\"content\":{\"intro\":\"Sigorta şirketleri tarafından pert kararı verilen araçları satın alıyoruz. Pert-total veya pert-parça fark etmeksizin aracınız için en iyi fiyatı sunuyoruz.\",\"details\":[\"Pert-total araçlar\",\"Pert-parça araçlar\",\"Ağır hasarlı pert araçlar\",\"Sel nedeniyle pert araçlar\",\"Yangın nedeniyle pert araçlar\",\"Hırsızlık sonucu bulunan pert araçlar\"],\"benefits\":[\"Pert raporu olan araçlara özel değerleme\",\"Sigorta şirketi ile koordinasyon\",\"Pert kaydı çıkarma desteği\",\"Hızlı ve güvenli işlem\"],\"pricingFactors\":[{\"title\":\"Pert-Total Kararı\",\"description\":\"Sigortanın verdiği total kayıp kararı fiyatlandırma zeminini oluşturur.\"},{\"title\":\"Donanım Seviyesi\",\"description\":\"Aracın full donanım olması pert durumunda bile parça değerini artırır.\"},{\"title\":\"Evrak Durumu\",\"description\":\"Çekme belgeli veya hurda belgeli olması satış hızını ve fiyatını etkiler.\"},{\"title\":\"Piyasa Rayiç Değeri\",\"description\":\"Aracın kaza anındaki güncel piyasa değeri baz alınır.\"}],\"commonMistakes\":[\"Sigorta şirketinin teklifine hemen 'evet' demek\",\"Sovtaj bedelini yanlış hesaplamak\",\"Pert aracın onarılabileceğini düşünerek gereksiz masraf yapmak\"],\"comparison\":[{\"feature\":\"Sovtaj Teklifi\",\"us\":\"Piyasa Üstü\",\"others\":\"Düşük Teklifler\"},{\"feature\":\"İşlem Süresi\",\"us\":\"Aynı Gün\",\"others\":\"7-10 Gün\"},{\"feature\":\"Danışmanlık\",\"us\":\"Ücretsiz Uzman\",\"others\":\"Yok\"}],\"longDescription\":\"<h3>Pert Araçlarda Uzman Değerleme</h3><p>Sigorta şirketiniz aracınız için 'pert' kararı verdiyse panik yapmayın. Genellikle sigorta şirketlerinin sunduğu sovtaj (hurda) bedeli piyasa gerçeklerinin altında kalabilir. Pert Araç Alım Merkezi olarak, pert raporlu araçlarınız için sigorta şirketlerinden daha iyi teklifler sunuyoruz.</p><h4>Sovtaj ve Satış Süreci</h4><p>Pert araçların satışında sigorta şirketleri ile olan yazışmalar ve yasal süreçler karmaşık olabilir. 20 yılı aşkın tecrübemizle, tüm bu süreçleri sizin adınıza yönetiyoruz. Aracınızın pert-total veya ağır hasarlı olması fark etmeksizin, en yüksek sovtaj bedeliyle nakit alım yapıyoruz. Tüm işlemlerimizi şeffaf bir şekilde yürütüyor, ödemenizi noter satışı anında gerçekleştiriyoruz.</p>\"},\"faq\":[{\"question\":\"Pert araç nedir?\",\"answer\":\"Pert araç, sigorta şirketi tarafından onarım masrafı aracın değerinin belirli bir yüzdesini geçtiği için ekonomik olarak onarılmaya değmez bulunan araçtır.\"},{\"question\":\"Pert araç satılabilir mi?\",\"answer\":\"Evet, pert kaydı olan araçlar satılabilir. Biz bu araçları değerinde satın alıyoruz ve gerekli işlemlerde size destek sağlıyoruz.\"}]},{\"id\":5,\"slug\":\"motor-arizali-arac-alim-satim\",\"title\":\"Motor Arızalı Araç Alım Satım\",\"shortTitle\":\"Motor Arızalı\",\"icon\":\"engineering\",\"iconColor\":\"yellow\",\"description\":\"Motor arızalı araçlarınızı değerinde satın alıyoruz.\",\"metaTitle\":\"Motor Arızalı Araç Alım Satım | Motor Yanmış Araç Fiyatı\",\"metaDescription\":\"Motor arızalı, motoru yanmış veya yatak sarmış aracınızı satın alıyoruz. Ücretsiz çekici, aynı gün ödeme. Fiyat teklifi için arayın!\",\"heroTitle\":\"Motor Arızalı Araç Alım Satım\",\"heroSubtitle\":\"Motoru yanmış, yatak sarmış veya mekanik arızası olan araçlarınızı değerinde satın alıyoruz.\",\"heroImage\":\"/images/backgrounds/motor-hero.png\",\"content\":{\"intro\":\"Motor arızası olan araçları satın alıyoruz. Onarım masrafı yüksek olan motor problemli araçlarınız için rekabetçi fiyat sunuyoruz.\",\"details\":[\"Motoru yanmış araçlar\",\"Yatak sarmış araçlar\",\"Silindir kapağı hasarlı araçlar\",\"Krank mili hasarlı araçlar\",\"Turbo arızalı araçlar\",\"Şanzıman arızalı araçlar\"],\"benefits\":[\"Motor hasarına özel değerleme\",\"Yürümeyen araçlara ücretsiz çekici\",\"Parça değeri üzerinden fiyat\",\"Hızlı ekspertiz ve ödeme\"]},\"faq\":[{\"question\":\"Motoru yanmış araç satılır mı?\",\"answer\":\"Evet, motoru yanmış araçları satın alıyoruz. Aracın diğer parçaları ve genel durumu değerlendirilerek size en iyi fiyat sunulur.\"},{\"question\":\"Araç yürümüyor, nasıl teslim ederim?\",\"answer\":\"Ücretsiz çekici hizmetimizle aracınızı bulunduğu adresten alıyoruz. Türkiye'nin her yerinden çekici gönderiyoruz.\"}]},{\"id\":6,\"slug\":\"cekme-belgeli-arac-alim-satim\",\"title\":\"Çekme Belgeli Araç Alım Satım\",\"shortTitle\":\"Çekme Belgeli\",\"icon\":\"description\",\"iconColor\":\"gray\",\"description\":\"Trafikten çekme belgeli araçlarınızı satın alıyoruz.\",\"metaTitle\":\"Çekme Belgeli Araç Alım Satım | Trafikten Men Araç\",\"metaDescription\":\"Çekme belgeli aracınızı değerinde satın alıyoruz. Trafikten men edilmiş araçlara en iyi fiyat. Hemen fiyat teklifi alın!\",\"heroTitle\":\"Çekme Belgeli Araç Alım Satım\",\"heroSubtitle\":\"Trafikten çekme belgesi almış veya men edilmiş araçlarınızı değerinde satın alıyoruz.\",\"heroImage\":\"/images/backgrounds/cekme-hero.png\",\"content\":{\"intro\":\"Trafikten çekilmiş veya çekme belgesi düzenlenmiş araçları satın alıyoruz. Yasal süreçlerde size destek sağlıyoruz.\",\"details\":[\"Trafikten çekme belgeli araçlar\",\"Muayene geçmeyen araçlar\",\"Vergi borcu nedeniyle yakalama olan araçlar\",\"Egzoz emisyon geçmeyen araçlar\",\"Teknik uyumsuz araçlar\"],\"benefits\":[\"Çekme belgeli araçlara özel fiyat\",\"Yasal süreçlerde danışmanlık\",\"Vergi borcu çözümü\",\"Hızlı ve sorunsuz işlem\"]},\"faq\":[{\"question\":\"Çekme belgeli araç satılabilir mi?\",\"answer\":\"Evet, çekme belgeli araçlar noter satışı ile satılabilir. Biz bu araçları değerinde satın alıyoruz.\"},{\"question\":\"Vergi borcu olan araç satılır mı?\",\"answer\":\"Vergi borcu olan araçları da satın alıyoruz. Borç kapatılarak veya düzenlenerek satış işlemi gerçekleştirilebilir.\"}]}]}"));}),
"[project]/src/data/cities.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"cities\":[{\"id\":1,\"slug\":\"istanbul\",\"name\":\"İstanbul\",\"region\":\"Marmara\",\"plateCode\":\"34\",\"population\":\"15840900\",\"isPopular\":true,\"metaTitle\":\"İstanbul Araç Alımı | 2 Saatte Teklif - Hasarlı Araç Alım Merkezi\",\"metaDescription\":\"İstanbul'da hasarlı, kazalı, pert ve hurda araç alımı yapıyoruz. 2 saat içinde teklif, ücretsiz çekici, aynı gün nakit ödeme. Hemen arayın!\",\"heroTitle\":\"İstanbul Hasarlı Araç Alımı\",\"heroSubtitle\":\"İstanbul'un tüm ilçelerinde hasarlı araç alım hizmeti veriyoruz. Avrupa ve Anadolu yakası fark etmez, ücretsiz çekici ile aracınızı alıyoruz.\",\"heroImage\":\"/images/backgrounds/istanbul-hero.png\",\"districts\":[\"Kadıköy\",\"Beşiktaş\",\"Şişli\",\"Bakırköy\",\"Ataşehir\",\"Maltepe\",\"Pendik\",\"Kartal\",\"Üsküdar\",\"Fatih\",\"Beyoğlu\",\"Sarıyer\",\"Beykoz\",\"Zeytinburnu\",\"Güngören\",\"Bahçelievler\",\"Bağcılar\",\"Küçükçekmece\",\"Başakşehir\",\"Esenyurt\",\"Beylikdüzü\",\"Avcılar\",\"Büyükçekmece\",\"Silivri\",\"Çatalca\",\"Arnavutköy\",\"Eyüpsultan\",\"Sultangazi\",\"Gaziosmanpaşa\",\"Kağıthane\",\"Tuzla\",\"Çekmeköy\",\"Sancaktepe\",\"Ümraniye\",\"Sultanbeyli\",\"Şile\",\"Adalar\"],\"advantages\":[\"Avrupa ve Anadolu yakası hizmet ağı\",\"İstanbul trafiğine takılmadan hızlı işlem\",\"Tüm ilçelere ücretsiz çekici\",\"Aynı gün ekspertiz ve ödeme\"],\"content\":\"İstanbul'da hasarlı, kazalı, pert ve hurda araç alımı konusunda en güvenilir adresiniz. 34 plakalı tüm araçları değerinde satın alıyoruz. Avrupa yakası ve Anadolu yakası fark etmeksizin ücretsiz çekici hizmeti ile aracınızı bulunduğu yerden alıyoruz.\"},{\"id\":2,\"slug\":\"ankara\",\"name\":\"Ankara\",\"region\":\"İç Anadolu\",\"plateCode\":\"06\",\"population\":\"5747325\",\"isPopular\":true,\"metaTitle\":\"Ankara Araç Alımı | 2 Saatte Teklif - Hasarlı Araç Alım Merkezi\",\"metaDescription\":\"Ankara'da hasarlı, kazalı ve pert araç alımı. Tüm ilçelerde 2 saatte teklif, ücretsiz çekici, anında nakit ödeme. Ankara araç satmak için arayın!\",\"heroTitle\":\"Ankara Hasarlı Araç Alımı\",\"heroSubtitle\":\"Başkent Ankara'nın tüm ilçelerinde hasarlı araç alım hizmeti. Merkez ve çevre ilçelerde ücretsiz çekici.\",\"heroImage\":\"/images/backgrounds/ankara-hero.png\",\"districts\":[\"Çankaya\",\"Keçiören\",\"Yenimahalle\",\"Mamak\",\"Etimesgut\",\"Sincan\",\"Altındağ\",\"Pursaklar\",\"Gölbaşı\",\"Polatlı\",\"Beypazarı\",\"Çubuk\"],\"advantages\":[\"Ankara merkez ve çevre ilçelere hizmet\",\"Organize sanayi bölgelerinden araç alımı\",\"Devlet dairesi araçlarında uzmanlık\",\"Hızlı ekspertiz ve ödeme\"],\"content\":\"Ankara'da hasarlı araç alımında güvenilir çözüm ortağınız. 06 plakalı tüm araçları değerinde satın alıyoruz. Çankaya'dan Sincan'a, Keçiören'den Gölbaşı'na tüm ilçelerde hizmet veriyoruz.\"},{\"id\":3,\"slug\":\"izmir\",\"name\":\"İzmir\",\"region\":\"Ege\",\"plateCode\":\"35\",\"population\":\"4425789\",\"isPopular\":true,\"metaTitle\":\"İzmir Araç Alımı | 2 Saatte Teklif - Hasarlı Araç Alım Merkezi\",\"metaDescription\":\"İzmir ve çevre ilçelerde hasarlı araç alımı. 2 saatte teklif, ücretsiz çekici, anında nakit ödeme. İzmir araç fiyatları için hemen arayın!\",\"heroTitle\":\"İzmir Hasarlı Araç Alımı\",\"heroSubtitle\":\"Ege'nin incisi İzmir'de hasarlı araç alımı yapıyoruz. Kıyı ilçelerinden iç kesimlere tüm İzmir'de hizmet.\",\"heroImage\":\"/images/backgrounds/izmir-hero.png\",\"districts\":[\"Konak\",\"Bornova\",\"Karşıyaka\",\"Buca\",\"Bayraklı\",\"Çiğli\",\"Gaziemir\",\"Balçova\",\"Narlıdere\",\"Karabağlar\",\"Torbalı\",\"Menemen\",\"Kemalpaşa\",\"Ödemiş\",\"Bergama\",\"Aliağa\"],\"advantages\":[\"İzmir merkez ve tüm ilçelere hizmet\",\"Ege Bölgesi çapında alım ağı\",\"Liman bölgesinden araç alımı\",\"Turistik bölgelere özel hizmet\"],\"content\":\"İzmir'de hasarlı araç satmak istiyorsanız doğru adrestesiniz. 35 plakalı tüm araçları değerinde satın alıyoruz. Alsancak'tan Bornova'ya, Karşıyaka'dan Torbalı'ya ücretsiz çekici hizmeti.\"},{\"id\":4,\"slug\":\"bursa\",\"name\":\"Bursa\",\"region\":\"Marmara\",\"plateCode\":\"16\",\"population\":\"3147818\",\"isPopular\":true,\"metaTitle\":\"Bursa Hasarlı Araç Alımı | Sanayi Şehri Hizmeti\",\"metaDescription\":\"Bursa'da hasarlı araç alımı yapıyoruz. Tüm ilçelerde ücretsiz çekici, aynı gün ödeme. Bursa hasarlı araç satış için arayın!\",\"heroTitle\":\"Bursa Hasarlı Araç Alımı\",\"heroSubtitle\":\"Sanayi şehri Bursa'da hasarlı araç alımı. Otomotiv sektörü tecrübemizle en iyi fiyatı sunuyoruz.\",\"heroImage\":\"/images/backgrounds/bursa-hero.png\",\"districts\":[\"Osmangazi\",\"Nilüfer\",\"Yıldırım\",\"Mudanya\",\"Gemlik\",\"İnegöl\",\"Karacabey\",\"Mustafakemalpaşa\",\"Gürsu\",\"Kestel\"],\"advantages\":[\"Otomotiv sektörü uzmanlığı\",\"Sanayi bölgelerinden alım\",\"Organize sanayi erişimi\",\"Hızlı değerleme ve ödeme\"],\"content\":\"Bursa'da hasarlı araç alımında sektör tecrübesiyle hizmet veriyoruz. 16 plakalı araçları değerinde satın alıyoruz. Otomotiv sanayisinin merkezi Bursa'da profesyonel hizmet.\"},{\"id\":5,\"slug\":\"antalya\",\"name\":\"Antalya\",\"region\":\"Akdeniz\",\"plateCode\":\"07\",\"population\":\"2619832\",\"isPopular\":true,\"metaTitle\":\"Antalya Hasarlı Araç Alımı | Akdeniz Bölgesi Hizmeti\",\"metaDescription\":\"Antalya'da hasarlı araç alımı. Turistik bölgeler dahil tüm ilçelerde ücretsiz çekici. Antalya araç satış için arayın!\",\"heroTitle\":\"Antalya Hasarlı Araç Alımı\",\"heroSubtitle\":\"Turizm şehri Antalya'da hasarlı araç alımı yapıyoruz. Kıyı şeridinden iç kesimlere tüm ilçelerde hizmet.\",\"heroImage\":\"/images/backgrounds/antalya-hero.png\",\"districts\":[\"Muratpaşa\",\"Kepez\",\"Konyaaltı\",\"Aksu\",\"Döşemealtı\",\"Alanya\",\"Manavgat\",\"Serik\",\"Kumluca\",\"Kaş\",\"Kemer\",\"Finike\"],\"advantages\":[\"Turistik bölgelere özel hizmet\",\"Kiralık araç şirketlerine hizmet\",\"Akdeniz kıyı şeridi kapsama\",\"Sezonluk araç alımında uzmanlık\"],\"content\":\"Antalya'da hasarlı araç satmak için en iyi adres. 07 plakalı tüm araçları değerinde alıyoruz. Alanya'dan Kaş'a, Manavgat'tan Kemer'e ücretsiz çekici hizmeti.\"},{\"id\":6,\"slug\":\"adana\",\"name\":\"Adana\",\"region\":\"Akdeniz\",\"plateCode\":\"01\",\"population\":\"2274106\",\"isPopular\":true,\"metaTitle\":\"Adana Hasarlı Araç Alımı | Çukurova Bölgesi Hizmeti\",\"metaDescription\":\"Adana'da hasarlı araç alımı yapıyoruz. Tüm ilçelerde ücretsiz çekici, anında nakit ödeme. Adana araç satış için hemen arayın!\",\"heroTitle\":\"Adana Hasarlı Araç Alımı\",\"heroSubtitle\":\"Çukurova'nın merkezi Adana'da hasarlı araç alımı. Tarım ve sanayi araçlarında da uzmanız.\",\"heroImage\":\"/images/backgrounds/adana-hero.png\",\"districts\":[\"Seyhan\",\"Çukurova\",\"Yüreğir\",\"Sarıçam\",\"Ceyhan\",\"Kozan\",\"İmamoğlu\",\"Karaisalı\",\"Pozantı\",\"Tufanbeyli\"],\"advantages\":[\"Çukurova bölgesi kapsama\",\"Tarım araçları alımı\",\"Sanayi bölgesi erişimi\",\"Güneydoğu bağlantı noktası\"],\"content\":\"Adana'da hasarlı araç alımında güvenilir adresiniz. 01 plakalı tüm araçları değerinde satın alıyoruz. Seyhan'dan Ceyhan'a tüm ilçelerde hizmet.\"},{\"id\":7,\"slug\":\"kocaeli\",\"name\":\"Kocaeli\",\"region\":\"Marmara\",\"plateCode\":\"41\",\"population\":\"2079072\",\"isPopular\":true,\"metaTitle\":\"Kocaeli Hasarlı Araç Alımı | Sanayi Kenti Hizmeti\",\"metaDescription\":\"Kocaeli'de hasarlı araç alımı. İzmit ve tüm ilçelerde ücretsiz çekici. Kocaeli hasarlı araç satış için arayın!\",\"heroTitle\":\"Kocaeli Hasarlı Araç Alımı\",\"heroSubtitle\":\"Sanayi kenti Kocaeli'de hasarlı araç alımı. Otomotiv fabrikalarına yakın konumumuzla hızlı hizmet.\",\"heroImage\":\"/images/backgrounds/kocaeli-hero.png\",\"districts\":[\"İzmit\",\"Gebze\",\"Darıca\",\"Çayırova\",\"Dilovası\",\"Körfez\",\"Derince\",\"Gölcük\",\"Kartepe\",\"Başiskele\",\"Kandıra\",\"Karamürsel\"],\"advantages\":[\"Otomotiv sanayisi merkezi\",\"Gebze OSB erişimi\",\"İstanbul-Ankara güzergahı\",\"Liman bölgesi hizmeti\"],\"content\":\"Kocaeli'de hasarlı araç satmak için doğru adres. 41 plakalı araçları değerinde alıyoruz. İzmit'ten Gebze'ye sanayi bölgesinde uzman hizmet.\"},{\"id\":8,\"slug\":\"konya\",\"name\":\"Konya\",\"region\":\"İç Anadolu\",\"plateCode\":\"42\",\"population\":\"2296347\",\"isPopular\":true,\"metaTitle\":\"Konya Hasarlı Araç Alımı | İç Anadolu Hizmeti\",\"metaDescription\":\"Konya'da hasarlı araç alımı yapıyoruz. Tüm ilçelerde ücretsiz çekici, aynı gün ödeme. Konya araç satış için arayın!\",\"heroTitle\":\"Konya Hasarlı Araç Alımı\",\"heroSubtitle\":\"Türkiye'nin en geniş ili Konya'da hasarlı araç alımı. Merkez ve çevre ilçelerde ücretsiz çekici.\",\"heroImage\":\"/images/backgrounds/konya-hero.png\",\"districts\":[\"Selçuklu\",\"Meram\",\"Karatay\",\"Ereğli\",\"Akşehir\",\"Beyşehir\",\"Seydişehir\",\"Cihanbeyli\",\"Kulu\",\"Çumra\"],\"advantages\":[\"Geniş coğrafi kapsama\",\"Tarım araçları uzmanlığı\",\"İç Anadolu bağlantısı\",\"Hızlı değerleme ve ödeme\"],\"content\":\"Konya'da hasarlı araç alımında güvenilir hizmet. 42 plakalı tüm araçları değerinde satın alıyoruz. Selçuklu'dan Ereğli'ye tüm Konya'da hizmet.\"},{\"id\":9,\"slug\":\"mersin\",\"name\":\"Mersin\",\"region\":\"Akdeniz\",\"plateCode\":\"33\",\"population\":\"1916432\",\"isPopular\":true,\"metaTitle\":\"Mersin Hasarlı Araç Alımı | Liman Kenti Hizmeti\",\"metaDescription\":\"Mersin'de hasarlı araç alımı. Tüm ilçelerde ücretsiz çekici, anında ödeme. Mersin hasarlı araç satış için arayın!\",\"heroTitle\":\"Mersin Hasarlı Araç Alımı\",\"heroSubtitle\":\"Akdeniz'in liman kenti Mersin'de hasarlı araç alımı. Kıyı şeridinden iç kesimlere hizmet.\",\"heroImage\":\"/images/backgrounds/mersin-hero.png\",\"districts\":[\"Akdeniz\",\"Mezitli\",\"Toroslar\",\"Yenişehir\",\"Tarsus\",\"Silifke\",\"Erdemli\",\"Anamur\",\"Mut\",\"Gülnar\"],\"advantages\":[\"Liman bölgesi uzmanlığı\",\"Serbest bölge erişimi\",\"Akdeniz kıyı hizmeti\",\"Ticari araç alımı\"],\"content\":\"Mersin'de hasarlı araç satmak için en iyi adres. 33 plakalı araçları değerinde alıyoruz. Tarsus'tan Silifke'ye tüm Mersin'de ücretsiz çekici.\"},{\"id\":10,\"slug\":\"gaziantep\",\"name\":\"Gaziantep\",\"region\":\"Güneydoğu Anadolu\",\"plateCode\":\"27\",\"population\":\"2130432\",\"isPopular\":true,\"metaTitle\":\"Gaziantep Hasarlı Araç Alımı | Güneydoğu Hizmeti\",\"metaDescription\":\"Gaziantep'te hasarlı araç alımı yapıyoruz. Tüm ilçelerde ücretsiz çekici. Gaziantep araç satış için hemen arayın!\",\"heroTitle\":\"Gaziantep Hasarlı Araç Alımı\",\"heroSubtitle\":\"Güneydoğu'nun sanayi merkezi Gaziantep'te hasarlı araç alımı. OSB ve merkez ilçelerde hizmet.\",\"heroImage\":\"/images/backgrounds/gaziantep-hero.png\",\"districts\":[\"Şahinbey\",\"Şehitkamil\",\"Nizip\",\"İslahiye\",\"Nurdağı\",\"Oğuzeli\",\"Araban\",\"Yavuzeli\",\"Karkamış\"],\"advantages\":[\"Güneydoğu Anadolu merkezi\",\"Sanayi bölgesi erişimi\",\"Sınır ticareti uzmanlığı\",\"Ticari araç alımı\"],\"content\":\"Gaziantep'te hasarlı araç alımında güvenilir adres. 27 plakalı tüm araçları değerinde satın alıyoruz. Şahinbey'den Nizip'e tüm ilçelerde hizmet.\"},{\"id\":11,\"slug\":\"samsun\",\"name\":\"Samsun\",\"region\":\"Karadeniz\",\"plateCode\":\"55\",\"population\":\"1371274\",\"isPopular\":true,\"metaTitle\":\"Samsun Hasarlı Araç Alımı | Karadeniz Hizmeti\",\"metaDescription\":\"Samsun'da hasarlı araç alımı. Tüm ilçelerde ücretsiz çekici, anında ödeme. Samsun araç satış için arayın!\",\"heroTitle\":\"Samsun Hasarlı Araç Alımı\",\"heroSubtitle\":\"Karadeniz'in merkezi Samsun'da hasarlı araç alımı. Kıyı ve iç kesim ilçelerde hizmet.\",\"heroImage\":\"/images/backgrounds/samsun-hero.png\",\"districts\":[\"İlkadım\",\"Atakum\",\"Canik\",\"Tekkeköy\",\"Bafra\",\"Çarşamba\",\"Vezirköprü\",\"Havza\",\"Terme\",\"Alaçam\"],\"advantages\":[\"Karadeniz bölgesi merkezi\",\"Liman erişimi\",\"Tarım araçları alımı\",\"Bölgesel kapsama\"],\"content\":\"Samsun'da hasarlı araç satmak için doğru adres. 55 plakalı araçları değerinde alıyoruz. İlkadım'dan Bafra'ya tüm Samsun'da ücretsiz çekici.\"},{\"id\":12,\"slug\":\"eskisehir\",\"name\":\"Eskişehir\",\"region\":\"İç Anadolu\",\"plateCode\":\"26\",\"population\":\"906617\",\"isPopular\":false,\"metaTitle\":\"Eskişehir Hasarlı Araç Alımı | Üniversite Kenti Hizmeti\",\"metaDescription\":\"Eskişehir'de hasarlı araç alımı yapıyoruz. Tüm ilçelerde ücretsiz çekici, aynı gün ödeme. Eskişehir araç satış için arayın!\",\"heroTitle\":\"Eskişehir Hasarlı Araç Alımı\",\"heroSubtitle\":\"Üniversite kenti Eskişehir'de hasarlı araç alımı. Merkez ve çevre ilçelerde profesyonel hizmet.\",\"heroImage\":\"/images/backgrounds/eskisehir-hero.png\",\"districts\":[\"Odunpazarı\",\"Tepebaşı\",\"Çifteler\",\"Sivrihisar\",\"Mahmudiye\",\"Seyitgazi\",\"Alpu\",\"İnönü\"],\"advantages\":[\"Üniversite kenti avantajı\",\"Genç nüfusa özel hizmet\",\"Ankara-İstanbul güzergahı\",\"Hızlı ulaşım imkanı\"],\"content\":\"Eskişehir'de hasarlı araç alımında profesyonel hizmet. 26 plakalı tüm araçları değerinde satın alıyoruz.\"},{\"id\":13,\"slug\":\"kayseri\",\"name\":\"Kayseri\",\"region\":\"İç Anadolu\",\"plateCode\":\"38\",\"population\":\"1441523\",\"isPopular\":false,\"metaTitle\":\"Kayseri Hasarlı Araç Alımı | İç Anadolu Hizmeti\",\"metaDescription\":\"Kayseri'de hasarlı araç alımı. Tüm ilçelerde ücretsiz çekici. Kayseri hasarlı araç satış için arayın!\",\"heroTitle\":\"Kayseri Hasarlı Araç Alımı\",\"heroSubtitle\":\"Ticaret şehri Kayseri'de hasarlı araç alımı. Sanayi ve ticaret araçlarında uzmanlık.\",\"heroImage\":\"/images/backgrounds/kayseri-hero.png\",\"districts\":[\"Melikgazi\",\"Kocasinan\",\"Talas\",\"Hacılar\",\"İncesu\",\"Develi\",\"Yahyalı\",\"Bünyan\"],\"advantages\":[\"Ticaret merkezi\",\"Sanayi bölgesi erişimi\",\"Mobilya sektörü bağlantısı\",\"İç Anadolu kavşağı\"],\"content\":\"Kayseri'de hasarlı araç satmak için güvenilir adres. 38 plakalı araçları değerinde alıyoruz.\"},{\"id\":14,\"slug\":\"diyarbakir\",\"name\":\"Diyarbakır\",\"region\":\"Güneydoğu Anadolu\",\"plateCode\":\"21\",\"population\":\"1804880\",\"isPopular\":false,\"metaTitle\":\"Diyarbakır Hasarlı Araç Alımı | Güneydoğu Hizmeti\",\"metaDescription\":\"Diyarbakır'da hasarlı araç alımı yapıyoruz. Tüm ilçelerde ücretsiz çekici. Diyarbakır araç satış için arayın!\",\"heroTitle\":\"Diyarbakır Hasarlı Araç Alımı\",\"heroSubtitle\":\"Güneydoğu Anadolu'nun kalbi Diyarbakır'da hasarlı araç alımı. Bölgesel hizmet ağımızla yanınızdayız.\",\"heroImage\":\"/images/backgrounds/diyarbakir-hero.png\",\"districts\":[\"Bağlar\",\"Kayapınar\",\"Sur\",\"Yenişehir\",\"Bismil\",\"Ergani\",\"Silvan\",\"Çermik\",\"Çınar\",\"Dicle\"],\"advantages\":[\"Güneydoğu bölgesi kapsama\",\"Tarım araçları uzmanlığı\",\"Bölgesel bağlantılar\",\"Profesyonel hizmet\"],\"content\":\"Diyarbakır'da hasarlı araç alımında güvenilir çözüm ortağınız. 21 plakalı tüm araçları değerinde satın alıyoruz.\"},{\"id\":15,\"slug\":\"denizli\",\"name\":\"Denizli\",\"region\":\"Ege\",\"plateCode\":\"20\",\"population\":\"1056332\",\"isPopular\":false,\"metaTitle\":\"Denizli Hasarlı Araç Alımı | Ege Bölgesi Hizmeti\",\"metaDescription\":\"Denizli'de hasarlı araç alımı. Tüm ilçelerde ücretsiz çekici. Denizli araç satış için hemen arayın!\",\"heroTitle\":\"Denizli Hasarlı Araç Alımı\",\"heroSubtitle\":\"Tekstil kenti Denizli'de hasarlı araç alımı. Pamukkale'den Çivril'e tüm ilçelerde hizmet.\",\"heroImage\":\"/images/backgrounds/denizli-hero.png\",\"districts\":[\"Merkezefendi\",\"Pamukkale\",\"Çivril\",\"Acıpayam\",\"Buldan\",\"Honaz\",\"Tavas\",\"Sarayköy\"],\"advantages\":[\"Tekstil sektörü bağlantısı\",\"Ege Bölgesi erişimi\",\"Turistik bölge hizmeti\",\"Profesyonel değerleme\"],\"content\":\"Denizli'de hasarlı araç satmak için doğru adres. 20 plakalı araçları değerinde alıyoruz.\"},{\"id\":16,\"slug\":\"manisa\",\"name\":\"Manisa\",\"region\":\"Ege\",\"plateCode\":\"45\",\"population\":\"1456626\",\"isPopular\":false,\"metaTitle\":\"Manisa Hasarlı Araç Alımı | Ege Hizmeti\",\"metaDescription\":\"Manisa'da hasarlı araç alımı yapıyoruz. Tüm ilçelerde ücretsiz çekici. Manisa araç satış için arayın!\",\"heroTitle\":\"Manisa Hasarlı Araç Alımı\",\"heroSubtitle\":\"Tarım ve sanayi şehri Manisa'da hasarlı araç alımı. İzmir'e yakın konumumuzla hızlı hizmet.\",\"heroImage\":\"/images/backgrounds/manisa-hero.png\",\"districts\":[\"Şehzadeler\",\"Yunusemre\",\"Turgutlu\",\"Akhisar\",\"Salihli\",\"Soma\",\"Alaşehir\",\"Saruhanlı\"],\"advantages\":[\"İzmir yakınlığı\",\"Tarım araçları alımı\",\"Sanayi bölgesi erişimi\",\"Hızlı teslimat\"],\"content\":\"Manisa'da hasarlı araç alımında güvenilir hizmet. 45 plakalı tüm araçları değerinde satın alıyoruz.\"},{\"id\":17,\"slug\":\"trabzon\",\"name\":\"Trabzon\",\"region\":\"Karadeniz\",\"plateCode\":\"61\",\"population\":\"818023\",\"isPopular\":false,\"metaTitle\":\"Trabzon Hasarlı Araç Alımı | Karadeniz Hizmeti\",\"metaDescription\":\"Trabzon'da hasarlı araç alımı. Tüm ilçelerde ücretsiz çekici. Trabzon araç satış için arayın!\",\"heroTitle\":\"Trabzon Hasarlı Araç Alımı\",\"heroSubtitle\":\"Karadeniz'in incisi Trabzon'da hasarlı araç alımı. Kıyı şeridinden yaylalara hizmet.\",\"heroImage\":\"/images/backgrounds/trabzon-hero.png\",\"districts\":[\"Ortahisar\",\"Akçaabat\",\"Yomra\",\"Arsin\",\"Of\",\"Sürmene\",\"Çaykara\",\"Maçka\",\"Vakfıkebir\"],\"advantages\":[\"Doğu Karadeniz merkezi\",\"Liman erişimi\",\"Yayla araçları alımı\",\"Bölgesel kapsama\"],\"content\":\"Trabzon'da hasarlı araç satmak için güvenilir adres. 61 plakalı araçları değerinde alıyoruz.\"},{\"id\":18,\"slug\":\"sanliurfa\",\"name\":\"Şanlıurfa\",\"region\":\"Güneydoğu Anadolu\",\"plateCode\":\"63\",\"population\":\"2143020\",\"isPopular\":false,\"metaTitle\":\"Şanlıurfa Hasarlı Araç Alımı | Güneydoğu Hizmeti\",\"metaDescription\":\"Şanlıurfa'da hasarlı araç alımı yapıyoruz. Tüm ilçelerde ücretsiz çekici. Şanlıurfa araç satış için arayın!\",\"heroTitle\":\"Şanlıurfa Hasarlı Araç Alımı\",\"heroSubtitle\":\"Tarih şehri Şanlıurfa'da hasarlı araç alımı. GAP bölgesi merkezi olarak geniş hizmet ağı.\",\"heroImage\":\"/images/backgrounds/sanliurfa-hero.png\",\"districts\":[\"Eyyübiye\",\"Haliliye\",\"Karaköprü\",\"Birecik\",\"Viranşehir\",\"Suruç\",\"Akçakale\",\"Siverek\",\"Harran\"],\"advantages\":[\"GAP bölgesi merkezi\",\"Tarım araçları uzmanlığı\",\"Geniş coğrafi kapsama\",\"Sınır ticareti bağlantısı\"],\"content\":\"Şanlıurfa'da hasarlı araç alımında profesyonel hizmet. 63 plakalı tüm araçları değerinde satın alıyoruz.\"},{\"id\":19,\"slug\":\"sakarya\",\"name\":\"Sakarya\",\"region\":\"Marmara\",\"plateCode\":\"54\",\"population\":\"1060876\",\"isPopular\":false,\"metaTitle\":\"Sakarya Hasarlı Araç Alımı | Marmara Hizmeti\",\"metaDescription\":\"Sakarya'da hasarlı araç alımı. Tüm ilçelerde ücretsiz çekici. Sakarya araç satış için arayın!\",\"heroTitle\":\"Sakarya Hasarlı Araç Alımı\",\"heroSubtitle\":\"Sanayi şehri Sakarya'da hasarlı araç alımı. Adapazarı ve tüm ilçelerde profesyonel hizmet.\",\"districts\":[\"Adapazarı\",\"Serdivan\",\"Erenler\",\"Arifiye\",\"Hendek\",\"Sapanca\",\"Karasu\",\"Akyazı\",\"Geyve\",\"Kaynarca\"],\"advantages\":[\"Otomotiv sanayi merkezi\",\"İstanbul yakınlığı\",\"D-100 güzergahı\",\"Hızlı erişim\"],\"content\":\"Sakarya'da hasarlı araç satmak için doğru adres. 54 plakalı araçları değerinde alıyoruz.\"},{\"id\":20,\"slug\":\"malatya\",\"name\":\"Malatya\",\"region\":\"Doğu Anadolu\",\"plateCode\":\"44\",\"population\":\"812580\",\"isPopular\":false,\"metaTitle\":\"Malatya Hasarlı Araç Alımı | Doğu Anadolu Hizmeti\",\"metaDescription\":\"Malatya'da hasarlı araç alımı yapıyoruz. Tüm ilçelerde ücretsiz çekici. Malatya araç satış için arayın!\",\"heroTitle\":\"Malatya Hasarlı Araç Alımı\",\"heroSubtitle\":\"Kayısı diyarı Malatya'da hasarlı araç alımı. Doğu Anadolu bağlantısıyla geniş hizmet.\",\"districts\":[\"Battalgazi\",\"Yeşilyurt\",\"Akçadağ\",\"Darende\",\"Doğanşehir\",\"Hekimhan\",\"Arguvan\",\"Arapgir\"],\"advantages\":[\"Doğu Anadolu merkezi\",\"Tarım araçları alımı\",\"Bölgesel bağlantılar\",\"Profesyonel değerleme\"],\"content\":\"Malatya'da hasarlı araç alımında güvenilir hizmet. 44 plakalı tüm araçları değerinde satın alıyoruz.\"},{\"id\":21,\"slug\":\"kahramanmaras\",\"name\":\"Kahramanmaraş\",\"region\":\"Akdeniz\",\"plateCode\":\"46\",\"population\":\"1177436\",\"isPopular\":false,\"metaTitle\":\"Kahramanmaraş Hasarlı Araç Alımı | Akdeniz-Güneydoğu Hizmeti\",\"metaDescription\":\"Kahramanmaraş'ta hasarlı araç alımı. Tüm ilçelerde ücretsiz çekici. Maraş araç satış için arayın!\",\"heroTitle\":\"Kahramanmaraş Hasarlı Araç Alımı\",\"heroSubtitle\":\"Tekstil şehri Kahramanmaraş'ta hasarlı araç alımı. Sanayi araçlarında uzmanlık.\",\"heroImage\":\"/images/backgrounds/kahramanmaras-hero.png\",\"districts\":[\"Onikişubat\",\"Dulkadiroğlu\",\"Elbistan\",\"Afşin\",\"Göksun\",\"Pazarcık\",\"Türkoğlu\",\"Andırın\"],\"advantages\":[\"Tekstil sanayi merkezi\",\"Akdeniz-Güneydoğu kavşağı\",\"Ticari araç alımı\",\"Bölgesel erişim\"],\"content\":\"Kahramanmaraş'ta hasarlı araç satmak için güvenilir adres. 46 plakalı araçları değerinde alıyoruz.\"},{\"id\":22,\"slug\":\"erzurum\",\"name\":\"Erzurum\",\"region\":\"Doğu Anadolu\",\"plateCode\":\"25\",\"population\":\"749754\",\"isPopular\":false,\"metaTitle\":\"Erzurum Hasarlı Araç Alımı | Doğu Anadolu Hizmeti\",\"metaDescription\":\"Erzurum'da hasarlı araç alımı yapıyoruz. Tüm ilçelerde ücretsiz çekici. Erzurum araç satış için arayın!\",\"heroTitle\":\"Erzurum Hasarlı Araç Alımı\",\"heroSubtitle\":\"Doğu Anadolu'nun kapısı Erzurum'da hasarlı araç alımı. Kış şartlarına dayanıklı hizmet ağı.\",\"districts\":[\"Yakutiye\",\"Palandöken\",\"Aziziye\",\"Horasan\",\"Oltu\",\"Pasinler\",\"Aşkale\",\"Tortum\",\"İspir\"],\"advantages\":[\"Doğu Anadolu kapısı\",\"Kış turizmi bölgesi\",\"Askeri araç uzmanlığı\",\"Geniş coğrafi kapsama\"],\"content\":\"Erzurum'da hasarlı araç alımında profesyonel hizmet. 25 plakalı tüm araçları değerinde satın alıyoruz.\"},{\"id\":23,\"slug\":\"van\",\"name\":\"Van\",\"region\":\"Doğu Anadolu\",\"plateCode\":\"65\",\"population\":\"1141015\",\"isPopular\":false,\"metaTitle\":\"Van Hasarlı Araç Alımı | Doğu Anadolu Hizmeti\",\"metaDescription\":\"Van'da hasarlı araç alımı. Tüm ilçelerde ücretsiz çekici. Van araç satış için arayın!\",\"heroTitle\":\"Van Hasarlı Araç Alımı\",\"heroSubtitle\":\"Doğu Anadolu'nun incisi Van'da hasarlı araç alımı. Göl çevresinden sınır ilçelerine hizmet.\",\"districts\":[\"İpekyolu\",\"Tusba\",\"Edremit\",\"Erciş\",\"Çaldıran\",\"Başkale\",\"Özalp\",\"Gevaş\",\"Muradiye\"],\"advantages\":[\"Sınır ticareti merkezi\",\"Geniş coğrafi kapsama\",\"Ticari araç uzmanlığı\",\"Bölgesel bağlantılar\"],\"content\":\"Van'da hasarlı araç satmak için güvenilir adres. 65 plakalı araçları değerinde alıyoruz.\"},{\"id\":24,\"slug\":\"balikesir\",\"name\":\"Balıkesir\",\"region\":\"Marmara\",\"plateCode\":\"10\",\"population\":\"1250610\",\"isPopular\":false,\"metaTitle\":\"Balıkesir Hasarlı Araç Alımı | Marmara-Ege Hizmeti\",\"metaDescription\":\"Balıkesir'de hasarlı araç alımı yapıyoruz. Tüm ilçelerde ücretsiz çekici. Balıkesir araç satış için arayın!\",\"heroTitle\":\"Balıkesir Hasarlı Araç Alımı\",\"heroSubtitle\":\"Marmara ve Ege'nin kesişim noktası Balıkesir'de hasarlı araç alımı. Kıyıdan iç kesimlere hizmet.\",\"districts\":[\"Altıeylül\",\"Karesi\",\"Bandırma\",\"Edremit\",\"Ayvalık\",\"Burhaniye\",\"Bigadiç\",\"Gönen\",\"Susurluk\",\"Erdek\"],\"advantages\":[\"Marmara-Ege kavşağı\",\"Turistik ilçeler hizmeti\",\"Tarım araçları alımı\",\"Geniş kapsama alanı\"],\"content\":\"Balıkesir'de hasarlı araç alımında güvenilir hizmet. 10 plakalı tüm araçları değerinde satın alıyoruz.\"},{\"id\":25,\"slug\":\"tekirdag\",\"name\":\"Tekirdağ\",\"region\":\"Marmara\",\"plateCode\":\"59\",\"population\":\"1113194\",\"isPopular\":false,\"metaTitle\":\"Tekirdağ Hasarlı Araç Alımı | Trakya Hizmeti\",\"metaDescription\":\"Tekirdağ'da hasarlı araç alımı. Tüm ilçelerde ücretsiz çekici. Tekirdağ araç satış için arayın!\",\"heroTitle\":\"Tekirdağ Hasarlı Araç Alımı\",\"heroSubtitle\":\"Trakya'nın kalbi Tekirdağ'da hasarlı araç alımı. Sanayi bölgelerinden kıyıya hizmet.\",\"districts\":[\"Süleymanpaşa\",\"Çorlu\",\"Çerkezköy\",\"Ergene\",\"Kapaklı\",\"Malkara\",\"Muratlı\",\"Hayrabolu\",\"Şarköy\",\"Marmaraereğlisi\"],\"advantages\":[\"Avrupa sanayi merkezi\",\"İstanbul yakınlığı\",\"Lojistik merkezi\",\"Hızlı erişim\"],\"content\":\"Tekirdağ'da hasarlı araç satmak için doğru adres. 59 plakalı araçları değerinde alıyoruz.\"},{\"id\":26,\"slug\":\"aydin\",\"name\":\"Aydın\",\"region\":\"Ege\",\"plateCode\":\"09\",\"population\":\"1148241\",\"isPopular\":false,\"metaTitle\":\"Aydın Hasarlı Araç Alımı | Ege Hizmeti\",\"metaDescription\":\"Aydın'da hasarlı araç alımı yapıyoruz. Tüm ilçelerde ücretsiz çekici. Aydın araç satış için arayın!\",\"heroTitle\":\"Aydın Hasarlı Araç Alımı\",\"heroSubtitle\":\"Ege'nin tarım merkezi Aydın'da hasarlı araç alımı. Kıyıdan iç kesimlere profesyonel hizmet.\",\"heroImage\":\"/images/backgrounds/aydin-hero.png\",\"districts\":[\"Efeler\",\"Kuşadası\",\"Didim\",\"Nazilli\",\"Söke\",\"Germencik\",\"İncirliova\",\"Çine\",\"Sultanhisar\",\"Koçarlı\"],\"advantages\":[\"Turistik ilçeler hizmeti\",\"Tarım araçları alımı\",\"Ege Bölgesi erişimi\",\"Hızlı değerleme\"],\"content\":\"Aydın'da hasarlı araç alımında güvenilir hizmet. 09 plakalı tüm araçları değerinde satın alıyoruz.\"},{\"id\":27,\"slug\":\"mugla\",\"name\":\"Muğla\",\"region\":\"Ege\",\"plateCode\":\"48\",\"population\":\"1021141\",\"isPopular\":false,\"metaTitle\":\"Muğla Hasarlı Araç Alımı | Ege-Akdeniz Hizmeti\",\"metaDescription\":\"Muğla'da hasarlı araç alımı. Tüm ilçelerde ücretsiz çekici. Muğla araç satış için arayın!\",\"heroTitle\":\"Muğla Hasarlı Araç Alımı\",\"heroSubtitle\":\"Turizm cenneti Muğla'da hasarlı araç alımı. Bodrum'dan Marmaris'e, Fethiye'den Datça'ya hizmet.\",\"heroImage\":\"/images/backgrounds/mugla-hero.png\",\"districts\":[\"Menteşe\",\"Bodrum\",\"Fethiye\",\"Marmaris\",\"Milas\",\"Dalaman\",\"Ortaca\",\"Köyceğiz\",\"Datça\",\"Ula\"],\"advantages\":[\"Turizm merkezi hizmeti\",\"Kiralık araç şirketleri\",\"Sezonluk araç alımı\",\"Premium değerleme\"],\"content\":\"Muğla'da hasarlı araç satmak için güvenilir adres. 48 plakalı araçları değerinde alıyoruz.\"},{\"id\":28,\"slug\":\"hatay\",\"name\":\"Hatay\",\"region\":\"Akdeniz\",\"plateCode\":\"31\",\"population\":\"1686043\",\"isPopular\":false,\"metaTitle\":\"Hatay Hasarlı Araç Alımı | Akdeniz Hizmeti\",\"metaDescription\":\"Hatay'da hasarlı araç alımı yapıyoruz. Tüm ilçelerde ücretsiz çekici. Hatay araç satış için arayın!\",\"heroTitle\":\"Hatay Hasarlı Araç Alımı\",\"heroSubtitle\":\"Medeniyetler şehri Hatay'da hasarlı araç alımı. Antakya'dan İskenderun'a tüm ilçelerde hizmet.\",\"districts\":[\"Antakya\",\"İskenderun\",\"Defne\",\"Samandağ\",\"Dörtyol\",\"Kırıkhan\",\"Reyhanlı\",\"Arsuz\",\"Erzin\",\"Payas\"],\"advantages\":[\"Sınır ticareti merkezi\",\"Liman erişimi\",\"Ticari araç uzmanlığı\",\"Akdeniz kıyı hizmeti\"],\"content\":\"Hatay'da hasarlı araç alımında profesyonel hizmet. 31 plakalı tüm araçları değerinde satın alıyoruz.\"}]}"));}),
"[project]/src/components/icons/WhatsAppIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhatsAppIcon",
    ()=>WhatsAppIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const WhatsAppIcon = ({ className = "w-6 h-6", color = "currentColor" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        className: className,
        fill: color,
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/WhatsAppIcon.tsx",
            lineNumber: 11,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons/WhatsAppIcon.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/layout/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ContactButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/ContactButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/site.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/services.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cities$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/cities.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$WhatsAppIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/WhatsAppIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
const popularCities = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cities$2e$json__$28$json$29$__["default"].cities.filter((city)=>city.isPopular).slice(0, 8);
function Header() {
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeDropdown, setActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mobileSubmenu, setMobileSubmenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-secondary text-white py-2 text-sm hidden md:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-custom flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-primary text-lg",
                                            children: "schedule"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this),
                                        "7/24 Hizmet"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-primary text-lg",
                                            children: "payments"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this),
                                        "Aynı Gün Nakit Ödeme"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-primary text-lg",
                                            children: "local_shipping"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this),
                                        "Ücretsiz Çekici"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ContactButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                type: "phone",
                                position: "header_topbar",
                                className: "flex items-center gap-2 hover:text-primary transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPhone"], {
                                        className: "text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$json__$28$json$29$__["default"].phone
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-lg' : 'bg-white'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-custom",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between h-16 md:h-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center gap-2 group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-16 w-64 group-hover:scale-105 transition-transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/logo_transparent.png",
                                        alt: "Hasarlı Araç Alım Merkezi",
                                        fill: true,
                                        className: "object-contain object-left",
                                        sizes: "(max-width: 768px) 200px, 250px",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "hidden lg:flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors",
                                        children: "Ana Sayfa"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        onMouseEnter: ()=>setActiveDropdown('services'),
                                        onMouseLeave: ()=>setActiveDropdown(null),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/hizmetler",
                                                className: "px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors flex items-center gap-1",
                                                children: [
                                                    "Hizmetler",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                                                        className: `text-xs transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Header.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this),
                                            activeDropdown === 'services' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl py-2 border border-gray-100",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$json__$28$json$29$__["default"].services.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/hizmetler/${service.slug}`,
                                                        className: "flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined text-primary",
                                                                children: service.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                                lineNumber: 114,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700",
                                                                children: service.shortTitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                                lineNumber: 117,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, service.slug, true, {
                                                        fileName: "[project]/src/components/layout/Header.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 107,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        onMouseEnter: ()=>setActiveDropdown('cities'),
                                        onMouseLeave: ()=>setActiveDropdown(null),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/sehirler",
                                                className: "px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors flex items-center gap-1",
                                                children: [
                                                    "Şehirler",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                                                        className: `text-xs transition-transform ${activeDropdown === 'cities' ? 'rotate-180' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Header.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 130,
                                                columnNumber: 17
                                            }, this),
                                            activeDropdown === 'cities' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl py-2 border border-gray-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-1 p-2",
                                                        children: popularCities.map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/sehirler/${city.slug}`,
                                                                className: "flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-md transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "material-symbols-outlined text-primary text-sm",
                                                                        children: "location_on"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/Header.tsx",
                                                                        lineNumber: 146,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-700 text-sm",
                                                                        children: city.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/Header.tsx",
                                                                        lineNumber: 149,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, city.slug, true, {
                                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Header.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-t mt-2 pt-2 px-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/sehirler",
                                                            className: "text-primary hover:underline text-sm font-medium",
                                                            children: "Tüm Şehirleri Gör →"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Header.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Header.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 138,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/hakkimizda",
                                        className: "px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors",
                                        children: "Hakkımızda"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/blog",
                                        className: "px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors",
                                        children: "Blog"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/iletisim",
                                        className: "px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors",
                                        children: "İletişim"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ContactButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        type: "whatsapp",
                                        position: "header_cta",
                                        className: "btn-whatsapp text-sm px-4 py-2 flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$WhatsAppIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhatsAppIcon"], {
                                                className: "w-5 h-5",
                                                color: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this),
                                            "WhatsApp"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ContactButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        type: "phone",
                                        position: "header_cta",
                                        className: "btn-primary text-sm px-4 py-2 flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPhone"], {}, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 200,
                                                columnNumber: 17
                                            }, this),
                                            "Hemen Ara"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                className: "lg:hidden p-2 text-gray-700 hover:text-primary",
                                "aria-label": "Menü",
                                children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTimes"], {
                                    className: "text-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 212,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaBars"], {
                                    className: "text-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 214,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40 lg:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/50",
                        onClick: ()=>setIsMobileMenuOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 224,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 border-b flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-secondary",
                                        children: "Menü"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsMobileMenuOpen(false),
                                        className: "p-2 text-gray-500 hover:text-gray-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTimes"], {}, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 235,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 229,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "block py-3 text-gray-700 border-b",
                                        onClick: ()=>setIsMobileMenuOpen(false),
                                        children: "Ana Sayfa"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/hizmetler",
                                                        className: "flex-1 py-3 text-gray-700",
                                                        onClick: ()=>setIsMobileMenuOpen(false),
                                                        children: "Hizmetler"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Header.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setMobileSubmenu(mobileSubmenu === 'services' ? null : 'services'),
                                                        className: "p-3 text-gray-700",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                                                            className: `transition-transform ${mobileSubmenu === 'services' ? 'rotate-180' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Header.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Header.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 248,
                                                columnNumber: 17
                                            }, this),
                                            mobileSubmenu === 'services' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pl-4 pb-3 space-y-2",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$json__$28$json$29$__["default"].services.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/hizmetler/${service.slug}`,
                                                        className: "block py-2 text-gray-600 text-sm",
                                                        onClick: ()=>setIsMobileMenuOpen(false),
                                                        children: service.shortTitle
                                                    }, service.slug, false, {
                                                        fileName: "[project]/src/components/layout/Header.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 269,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/sehirler",
                                                        className: "flex-1 py-3 text-gray-700",
                                                        onClick: ()=>setIsMobileMenuOpen(false),
                                                        children: "Şehirler"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Header.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setMobileSubmenu(mobileSubmenu === 'cities' ? null : 'cities'),
                                                        className: "p-3 text-gray-700",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                                                            className: `transition-transform ${mobileSubmenu === 'cities' ? 'rotate-180' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Header.tsx",
                                                            lineNumber: 299,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Header.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 285,
                                                columnNumber: 17
                                            }, this),
                                            mobileSubmenu === 'cities' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pl-4 pb-3 space-y-2",
                                                children: [
                                                    popularCities.map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/sehirler/${city.slug}`,
                                                            className: "block py-2 text-gray-600 text-sm",
                                                            onClick: ()=>setIsMobileMenuOpen(false),
                                                            children: city.name
                                                        }, city.slug, false, {
                                                            fileName: "[project]/src/components/layout/Header.tsx",
                                                            lineNumber: 308,
                                                            columnNumber: 23
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/sehirler",
                                                        className: "block py-2 text-primary text-sm font-medium",
                                                        onClick: ()=>setIsMobileMenuOpen(false),
                                                        children: "Tüm Şehirler →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Header.tsx",
                                                        lineNumber: 317,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 306,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 284,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/hakkimizda",
                                        className: "block py-3 text-gray-700 border-b",
                                        onClick: ()=>setIsMobileMenuOpen(false),
                                        children: "Hakkımızda"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 328,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/blog",
                                        className: "block py-3 text-gray-700 border-b",
                                        onClick: ()=>setIsMobileMenuOpen(false),
                                        children: "Blog"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 335,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/iletisim",
                                        className: "block py-3 text-gray-700 border-b",
                                        onClick: ()=>setIsMobileMenuOpen(false),
                                        children: "İletişim"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 342,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ContactButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                type: "whatsapp",
                                                position: "header_mobile",
                                                onClick: ()=>setIsMobileMenuOpen(false),
                                                className: "btn-whatsapp w-full flex items-center justify-center gap-2 px-4 py-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$WhatsAppIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhatsAppIcon"], {
                                                        className: "w-5 h-5",
                                                        color: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Header.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 19
                                                    }, this),
                                                    "WhatsApp ile Ulaşın"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 352,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ContactButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                type: "phone",
                                                position: "header_mobile",
                                                onClick: ()=>setIsMobileMenuOpen(false),
                                                className: "btn-primary w-full flex items-center justify-center gap-2 px-4 py-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPhone"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Header.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 19
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$json__$28$json$29$__["default"].phone
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 361,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 351,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 223,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/common/ChatWidget.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ContactButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/ContactButton.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const faqs = [
    {
        question: "Aracımı nasıl satabilirim?",
        answer: "WhatsApp üzerinden veya telefonla bize ulaşarak aracınızın bilgilerini ve fotoğraflarını gönderin. Size hemen bir fiyat teklifi sunalım. Anlaşırsak adresinize gelip nakit ödeme ile aracı teslim alalım."
    },
    {
        question: "Ödeme süreci nasıl işliyor?",
        answer: "Ödemelerimiz noter satışı sırasında, bloke çek, havale/EFT veya nakit olarak güvenli bir şekilde yapılmaktadır."
    },
    {
        question: "Hangi tür araçları alıyorsunuz?",
        answer: "Hasarlı, kazalı, pert kayıtlı, hurda, motor arızalı, çekme belgeli her marka ve model aracı değerinde alıyoruz."
    },
    {
        question: "Çekici hizmeti ücretli mi?",
        answer: "Hayır, çekici hizmetimiz tamamen ücretsizdir. Aracınızı bulunduğu yerden kendi çekicimizle alıyoruz."
    },
    {
        question: "Hangi illerden alım yapıyorsunuz?",
        answer: "Türkiye'nin 81 ilinden ve tüm ilçelerinden araç alımı yapmaktayız."
    }
];
function ChatWidget() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openFaqIndex, setOpenFaqIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const widgetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleClickOutside(event) {
            if (widgetRef.current && !widgetRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const toggleFaq = (index)=>{
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: widgetRef,
        children: [
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-16 right-0 w-[320px] sm:w-[350px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden text-left z-50 mb-4 animate-fade-in-up origin-bottom-right",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-primary p-4 flex items-center justify-between text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-white/20 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaRobot"], {
                                            className: "text-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/ChatWidget.tsx",
                                            lineNumber: 62,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/common/ChatWidget.tsx",
                                        lineNumber: 61,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-sm",
                                                children: "Sanal Asistan"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/ChatWidget.tsx",
                                                lineNumber: 65,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-white/80",
                                                children: "Size nasıl yardımcı olabilirim?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/ChatWidget.tsx",
                                                lineNumber: 66,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/common/ChatWidget.tsx",
                                        lineNumber: 64,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/common/ChatWidget.tsx",
                                lineNumber: 60,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(false),
                                className: "text-white/80 hover:text-white transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTimes"], {}, void 0, false, {
                                    fileName: "[project]/src/components/common/ChatWidget.tsx",
                                    lineNumber: 70,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/ChatWidget.tsx",
                                lineNumber: 69,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/ChatWidget.tsx",
                        lineNumber: 59,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 max-h-[400px] overflow-y-auto bg-gray-50/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>toggleFaq(index),
                                                className: "w-full flex items-center justify-between p-3 text-left text-sm font-medium text-secondary hover:bg-gray-50 transition-colors",
                                                children: [
                                                    faq.question,
                                                    openFaqIndex === index ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaChevronUp"], {
                                                        className: "text-xs text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/common/ChatWidget.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 67
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                                                        className: "text-xs text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/common/ChatWidget.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 119
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/common/ChatWidget.tsx",
                                                lineNumber: 79,
                                                columnNumber: 37
                                            }, this),
                                            openFaqIndex === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 pt-0 text-xs text-gray-600 border-t border-gray-50 bg-gray-50/30",
                                                children: faq.answer
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/ChatWidget.tsx",
                                                lineNumber: 87,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/components/common/ChatWidget.tsx",
                                        lineNumber: 78,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/ChatWidget.tsx",
                                lineNumber: 76,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 pt-4 border-t border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mb-2 text-center",
                                        children: "Farklı bir sorunuz mu var?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/common/ChatWidget.tsx",
                                        lineNumber: 96,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ContactButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        type: "whatsapp",
                                        position: "chat_widget",
                                        whatsappMessage: "Merhaba, Chatbot üzerinden ulaşıyorum, bir sorum var.",
                                        className: "w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-green-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                                                className: "text-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/ChatWidget.tsx",
                                                lineNumber: 103,
                                                columnNumber: 33
                                            }, this),
                                            "WhatsApp Canlı Destek"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/common/ChatWidget.tsx",
                                        lineNumber: 97,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/common/ChatWidget.tsx",
                                lineNumber: 95,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/ChatWidget.tsx",
                        lineNumber: 75,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/ChatWidget.tsx",
                lineNumber: 57,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-full shadow-lg shadow-primary/30 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all text-2xl z-40 relative",
                children: [
                    isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTimes"], {}, void 0, false, {
                        fileName: "[project]/src/components/common/ChatWidget.tsx",
                        lineNumber: 116,
                        columnNumber: 27
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaRobot"], {}, void 0, false, {
                        fileName: "[project]/src/components/common/ChatWidget.tsx",
                        lineNumber: 116,
                        columnNumber: 41
                    }, this),
                    !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-secondary text-xs font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap hidden group-hover:block sm:block animate-pulse",
                        children: "Soru Sor?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/ChatWidget.tsx",
                        lineNumber: 120,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/ChatWidget.tsx",
                lineNumber: 112,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/ChatWidget.tsx",
        lineNumber: 54,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/common/FloatingActions.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ChatWidget$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/ChatWidget.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ContactButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/ContactButton.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function FloatingActions() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ContactButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        type: "phone",
                        position: "floating_desktop",
                        className: "w-14 h-14 bg-white text-primary rounded-full shadow-lg border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110 active:scale-95 group relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPhone"], {
                                className: "text-xl transform group-hover:rotate-12 transition-transform"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/FloatingActions.tsx",
                                lineNumber: 19,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-secondary text-xs font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
                                children: "Hemen Ara"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/FloatingActions.tsx",
                                lineNumber: 20,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/FloatingActions.tsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ContactButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        type: "whatsapp",
                        position: "floating_desktop",
                        className: "w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-900/20 flex items-center justify-center hover:bg-[#20bd5a] transition-all hover:scale-110 active:scale-95 group relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                                className: "text-3xl"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/FloatingActions.tsx",
                                lineNumber: 31,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-secondary text-xs font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
                                children: "WhatsApp"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/FloatingActions.tsx",
                                lineNumber: 32,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/FloatingActions.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ChatWidget$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/common/FloatingActions.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/FloatingActions.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg safe-area-bottom",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-stretch",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ContactButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            type: "phone",
                            position: "floating_mobile",
                            className: "flex-1 flex items-center justify-center gap-2 py-4 bg-primary text-white font-bold text-sm active:bg-primary-dark transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPhone"], {
                                    className: "text-lg"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/FloatingActions.tsx",
                                    lineNumber: 50,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Hemen Ara"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/FloatingActions.tsx",
                                    lineNumber: 51,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/common/FloatingActions.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ContactButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            type: "whatsapp",
                            position: "floating_mobile",
                            className: "flex-1 flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white font-bold text-sm active:bg-[#20bd5a] transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                                    className: "text-xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/FloatingActions.tsx",
                                    lineNumber: 60,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "WhatsApp"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/FloatingActions.tsx",
                                    lineNumber: 61,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/common/FloatingActions.tsx",
                            lineNumber: 55,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/common/FloatingActions.tsx",
                    lineNumber: 43,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/common/FloatingActions.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/seo/GoogleTagManager.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GoogleTagManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/site.json (json)");
'use client';
;
;
;
;
function GoogleTagManager() {
    const gaId = process.env.NEXT_PUBLIC_GA4_ID || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$json__$28$json$29$__["default"].gaId;
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$json__$28$json$29$__["default"].gtmId;
    // Ads ID is usually managed inside GTM, but if initial config is needed:
    // const adsId = process.env.NEXT_PUBLIC_ADS_ID || siteData.googleAds.conversionId;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.dataLayer = window.dataLayer || [];
        function gtag(...args) {
            window.dataLayer.push(args);
        }
        window.gtag = gtag;
        gtag('js', new Date());
        if (gaId) gtag('config', gaId);
        // Ads config might be handled by GTM tags, but if we want to keep it consistent with previous code:
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$json__$28$json$29$__["default"].googleAds.conversionId) gtag('config', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$json__$28$json$29$__["default"].googleAds.conversionId);
    }, [
        gaId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            gtmId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "gtm-script",
                strategy: "afterInteractive",
                dangerouslySetInnerHTML: {
                    __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
            `
                }
            }, void 0, false, {
                fileName: "[project]/src/components/seo/GoogleTagManager.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this),
            gaId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
                strategy: "afterInteractive"
            }, void 0, false, {
                fileName: "[project]/src/components/seo/GoogleTagManager.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this),
            gtmId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("noscript", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                    src: `https://www.googletagmanager.com/ns.html?id=${gtmId}`,
                    height: "0",
                    width: "0",
                    style: {
                        display: 'none',
                        visibility: 'hidden'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/seo/GoogleTagManager.tsx",
                    lineNumber: 63,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/seo/GoogleTagManager.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
} // Conversion tracking is now handled by src/lib/tracking/lead.ts
 // GTM should be configured to trigger tags on 'lead_action' event.
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8101c214._.js.map