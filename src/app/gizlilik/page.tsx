import type { Metadata } from 'next';
import PageHero from '@/components/common/PageHero';
import LegalContent, { LegalSection } from '@/components/common/LegalContent';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import siteData from '@/data/site.json';

const BASE_URL = 'https://www.hasarliaracnoktasi.com';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası ve KVKK Aydınlatma Metni',
  description:
    'Hasarlı Araç Alım Merkezi olarak kişisel verilerinizi 6698 sayılı KVKK kapsamında nasıl topladığımızı, işlediğimizi ve koruduğumuzu açıklıyoruz.',
  alternates: {
    canonical: `${BASE_URL}/gizlilik`,
  },
  openGraph: {
    title: 'Gizlilik Politikası ve KVKK Aydınlatma Metni',
    description:
      'Kişisel verilerinizin 6698 sayılı KVKK kapsamında nasıl toplandığı, işlendiği ve korunduğu hakkında bilgi.',
    url: `${BASE_URL}/gizlilik`,
    siteName: siteData.name,
    locale: 'tr_TR',
    type: 'website',
  },
};

const sections: LegalSection[] = [
  {
    title: 'Veri Sorumlusu',
    paragraphs: [
      `6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu, ${siteData.address} adresinde faaliyet gösteren ${siteData.name}'dir ("Şirket", "biz").`,
    ],
  },
  {
    title: 'Topladığımız Kişisel Veriler',
    paragraphs: ['Hizmetlerimizi sunabilmek için aşağıdaki kişisel verileri işleyebiliriz:'],
    items: [
      'Kimlik ve iletişim bilgileri: ad, soyad, telefon numarası, e-posta adresi, şehir/ilçe bilgisi.',
      'Araç bilgileri: marka, model, yıl, plaka, kilometre, hasar durumu, ruhsat bilgileri ve tarafımıza ilettiğiniz araç fotoğrafları.',
      'İşlem bilgileri: teklif, satış ve noter işlemlerine ilişkin bilgiler ile ödeme için gerekli banka hesap (IBAN) bilgileri.',
      'İletişim kayıtları: telefon, WhatsApp veya form aracılığıyla bizimle yaptığınız yazışmaların içeriği.',
      'Kullanım verileri: ziyaret edilen sayfalar, tıklanan butonlar, cihaz ve tarayıcı bilgileri ile geri döndürülemez şekilde maskelenmiş (hash) IP adresi.',
    ],
  },
  {
    title: 'Kişisel Verilerin İşlenme Amaçları',
    items: [
      'Aracınız için fiyat teklifi hazırlamak ve size geri dönüş yapmak,',
      'Ekspertiz, çekici, alım-satım ve noter işlemlerini yürütmek,',
      'Satış bedelinin ödenmesini sağlamak,',
      'Yasal yükümlülüklerimizi yerine getirmek ve resmi makamların taleplerini karşılamak,',
      'Web sitemizin güvenliğini sağlamak, performansını ölçmek ve hizmet kalitemizi geliştirmek,',
      'Açık rızanız bulunması halinde reklam ve pazarlama faaliyetlerini yürütmek.',
    ],
  },
  {
    title: 'Hukuki Sebepler ve Toplama Yöntemi',
    paragraphs: [
      'Kişisel verileriniz; web sitemizdeki formlar, telefon görüşmeleri, WhatsApp mesajları, çerezler ve benzeri teknolojiler aracılığıyla elektronik veya sözlü ortamda toplanmaktadır.',
      "Bu veriler KVKK'nın 5. maddesinde yer alan; bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması, veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi, bir hakkın tesisi, kullanılması veya korunması ve ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru menfaati hukuki sebeplerine dayanılarak işlenir. Pazarlama amaçlı işlemeler ve zorunlu olmayan çerezler için açık rızanız alınır.",
    ],
  },
  {
    title: 'Çerezler ve Analiz Araçları',
    paragraphs: [
      'Web sitemizde, sitenin düzgün çalışması, ziyaret istatistiklerinin tutulması ve reklam performansının ölçülmesi amacıyla çerezler ve benzeri teknolojiler kullanılmaktadır. Bu kapsamda Google Tag Manager, Google Analytics, Google Ads ve Vercel Analytics hizmetlerinden yararlanılabilir.',
      'Tarayıcınızın ayarlarından çerezleri silebilir veya engelleyebilirsiniz. Ancak bazı çerezlerin engellenmesi sitenin bazı özelliklerinin çalışmamasına neden olabilir.',
    ],
  },
  {
    title: 'Kişisel Verilerin Aktarılması',
    paragraphs: [
      "Kişisel verileriniz, yukarıdaki amaçlarla sınırlı olarak ve KVKK'nın 8. ve 9. maddelerine uygun şekilde aşağıdaki taraflara aktarılabilir:",
    ],
    items: [
      'Alım-satım ve devir işlemleri için noterlikler ve ilgili kamu kurum ve kuruluşları,',
      'Aracınızın taşınması için anlaşmalı çekici ve lojistik firmaları,',
      'Ödemelerin gerçekleştirilmesi için bankalar,',
      'Barındırma, analiz ve iletişim hizmeti aldığımız; yurt dışında sunucuları bulunabilen hizmet sağlayıcılar (ör. Vercel, Google, WhatsApp/Meta),',
      'Yasal olarak yetkili kamu kurum ve kuruluşları ile yargı mercileri.',
    ],
  },
  {
    title: 'Saklama Süresi',
    paragraphs: [
      'Kişisel verileriniz, işlenme amacının gerektirdiği süre ve ilgili mevzuatta öngörülen yasal saklama süreleri boyunca saklanır. Bu sürelerin sona ermesiyle birlikte verileriniz silinir, yok edilir veya anonim hale getirilir.',
    ],
  },
  {
    title: 'Veri Güvenliği',
    paragraphs: [
      'Kişisel verilerinizin hukuka aykırı olarak işlenmesini, verilere hukuka aykırı olarak erişilmesini önlemek ve verilerin muhafazasını sağlamak amacıyla uygun güvenlik düzeyini temin etmeye yönelik gerekli teknik ve idari tedbirleri almaktayız.',
    ],
  },
  {
    title: 'KVKK Kapsamındaki Haklarınız',
    paragraphs: ["KVKK'nın 11. maddesi uyarınca tarafımıza başvurarak;"],
    items: [
      'Kişisel verilerinizin işlenip işlenmediğini öğrenme,',
      'İşlenmişse buna ilişkin bilgi talep etme,',
      'İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,',
      'Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,',
      'Eksik veya yanlış işlenmiş olması halinde düzeltilmesini isteme,',
      'KVKK\'nın 7. maddesindeki şartlar çerçevesinde silinmesini veya yok edilmesini isteme,',
      'Düzeltme, silme ve yok etme işlemlerinin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,',
      'Münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme,',
      'Kanuna aykırı işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme',
    ],
  },
  {
    title: 'Başvuru Yöntemi',
    paragraphs: [
      `Haklarınıza ilişkin taleplerinizi, kimliğinizi tespit edici bilgilerle birlikte yazılı olarak ${siteData.address} adresine iletebilir veya ${siteData.email} adresine e-posta gönderebilirsiniz. Başvurularınız, talebin niteliğine göre en geç 30 gün içinde ücretsiz olarak sonuçlandırılır.`,
    ],
  },
  {
    title: 'Politikadaki Değişiklikler',
    paragraphs: [
      'Bu Gizlilik Politikası, yasal düzenlemeler ve hizmetlerimizdeki değişikliklere bağlı olarak güncellenebilir. Güncel metin her zaman bu sayfada yayımlanır.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: BASE_URL },
          { name: 'Gizlilik Politikası', url: `${BASE_URL}/gizlilik` },
        ]}
      />
      <PageHero
        title="Gizlilik Politikası"
        subtitle="Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni"
      />
      <LegalContent
        updatedAt="1 Ekim 2026"
        intro={`${siteData.name} olarak kişisel verilerinizin güvenliğine önem veriyoruz. Bu metin, web sitemizi ziyaret ettiğinizde ve hizmetlerimizden yararlandığınızda kişisel verilerinizin hangi amaçlarla ve nasıl işlendiğini açıklamaktadır.`}
        sections={sections}
      />
    </>
  );
}
