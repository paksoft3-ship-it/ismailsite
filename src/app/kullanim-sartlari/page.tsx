import type { Metadata } from 'next';
import PageHero from '@/components/common/PageHero';
import LegalContent, { LegalSection } from '@/components/common/LegalContent';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import siteData from '@/data/site.json';

const BASE_URL = 'https://www.hasarliaracnoktasi.com';

export const metadata: Metadata = {
  title: 'Kullanım Şartları',
  description:
    'Hasarlı Araç Alım Merkezi web sitesinin ve hasarlı, kazalı, pert ve hurda araç alım hizmetlerimizin kullanım şartları.',
  alternates: {
    canonical: `${BASE_URL}/kullanim-sartlari`,
  },
  openGraph: {
    title: 'Kullanım Şartları',
    description: 'Web sitemizin ve araç alım hizmetlerimizin kullanım şartları.',
    url: `${BASE_URL}/kullanim-sartlari`,
    siteName: siteData.name,
    locale: 'tr_TR',
    type: 'website',
  },
};

const sections: LegalSection[] = [
  {
    title: 'Kapsam',
    paragraphs: [
      `Bu Kullanım Şartları, ${siteData.name} ("Şirket", "biz") tarafından işletilen www.hasarliaracnoktasi.com web sitesinin ("Site") ve Site üzerinden sunulan hasarlı, kazalı, pert, hurda ve arızalı araç alım hizmetlerinin kullanımına ilişkin koşulları düzenler. Siteyi kullanan herkes bu şartları kabul etmiş sayılır.`,
    ],
  },
  {
    title: 'Hizmetin Tanımı',
    paragraphs: [
      'Site; araç sahiplerinin araçları hakkında bilgi vererek fiyat teklifi almalarını, bizimle telefon, WhatsApp veya form aracılığıyla iletişime geçmelerini ve araç alım hizmetlerimiz hakkında bilgi edinmelerini sağlar. Site üzerinden doğrudan bir satış sözleşmesi kurulmaz.',
    ],
  },
  {
    title: 'Fiyat Teklifleri',
    items: [
      'Telefon, WhatsApp veya form üzerinden iletilen bilgi ve fotoğraflara dayanarak verilen fiyatlar ön teklif niteliğindedir ve bağlayıcı değildir.',
      'Kesin fiyat, aracın yerinde veya ekspertiz ile incelenmesinden sonra belirlenir. İnceleme sonucunda beyan edilenden farklı bir durum tespit edilmesi halinde teklif değişebilir.',
      'Araç sahibi, kendisine sunulan teklifi kabul edip etmemekte tamamen serbesttir. Ekspertiz ve değerleme için herhangi bir ücret talep edilmez.',
    ],
  },
  {
    title: 'Alım-Satım Süreci',
    items: [
      'Satış ve devir işlemleri, yürürlükteki mevzuata uygun olarak noter huzurunda gerçekleştirilir.',
      'Satış bedeli, noter işlemi sırasında banka havalesi/EFT veya karşılıklı mutabık kalınan başka bir güvenli yöntemle ödenir.',
      'Rehin, haciz, yakalama veya benzeri kısıtlamalar bulunan araçlarda, satış ancak bu kısıtlamaların kaldırılmasından veya taraflarca mutabık kalınan bir çözümden sonra yapılabilir.',
      'Çekici ve nakliye hizmeti, aksi açıkça kararlaştırılmadıkça Şirket tarafından ücretsiz sağlanır.',
    ],
  },
  {
    title: 'Kullanıcının Yükümlülükleri',
    items: [
      'Araç ve kendisi hakkında doğru, eksiksiz ve güncel bilgi vermek,',
      'Aracın yasal sahibi veya satış için yetkili kişi olmak,',
      'Aracın hasar, kaza, pert ve borç durumu hakkında bildiği bilgileri gizlememek,',
      'Siteyi hukuka aykırı amaçlarla, başkalarının haklarını ihlal edecek şekilde veya Sitenin işleyişini bozacak biçimde kullanmamak.',
    ],
  },
  {
    title: 'Fikri Mülkiyet Hakları',
    paragraphs: [
      'Sitede yer alan metin, logo, görsel, tasarım ve yazılım dahil tüm içeriklerin hakları Şirkete veya lisans verenlere aittir. Bu içerikler, yazılı izin alınmadan kopyalanamaz, çoğaltılamaz, dağıtılamaz veya ticari amaçla kullanılamaz.',
    ],
  },
  {
    title: 'Sorumluluğun Sınırlandırılması',
    paragraphs: [
      'Sitedeki bilgiler genel bilgilendirme amaçlıdır ve en güncel haliyle sunulmaya çalışılsa da doğruluğu, eksiksizliği veya kesintisiz erişilebilirliği garanti edilmez. Site içeriğine dayanılarak yapılan işlemlerden doğabilecek dolaylı zararlardan Şirket sorumlu tutulamaz.',
      'Sitede üçüncü taraf web sitelerine bağlantılar yer alabilir. Bu sitelerin içeriği ve gizlilik uygulamalarından Şirket sorumlu değildir.',
    ],
  },
  {
    title: 'Kişisel Veriler',
    paragraphs: [
      'Site üzerinden paylaştığınız kişisel veriler, Gizlilik Politikası ve KVKK Aydınlatma Metnimize uygun olarak işlenir. Ayrıntılı bilgi için Gizlilik Politikası sayfamızı inceleyebilirsiniz.',
    ],
  },
  {
    title: 'Değişiklikler',
    paragraphs: [
      'Şirket, bu Kullanım Şartlarını önceden bildirimde bulunmaksızın değiştirme hakkını saklı tutar. Güncel şartlar bu sayfada yayımlandığı tarihten itibaren geçerlidir.',
    ],
  },
  {
    title: 'Uygulanacak Hukuk ve Yetkili Mahkeme',
    paragraphs: [
      'Bu Kullanım Şartları Türkiye Cumhuriyeti kanunlarına tabidir. Uyuşmazlıkların çözümünde İstanbul Mahkemeleri ve İcra Daireleri yetkilidir; tüketici sıfatıyla hareket eden kullanıcıların yasal başvuru hakları saklıdır.',
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: BASE_URL },
          { name: 'Kullanım Şartları', url: `${BASE_URL}/kullanim-sartlari` },
        ]}
      />
      <PageHero
        title="Kullanım Şartları"
        subtitle="Web sitemizin ve araç alım hizmetlerimizin kullanım koşulları"
      />
      <LegalContent
        updatedAt="1 Ekim 2026"
        intro="Lütfen web sitemizi kullanmadan ve hizmetlerimizden yararlanmadan önce aşağıdaki kullanım şartlarını dikkatlice okuyunuz."
        sections={sections}
      />
    </>
  );
}
