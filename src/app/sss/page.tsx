import type { Metadata } from 'next';
import siteData from '@/data/site.json';
import PageHero from '@/components/common/PageHero';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Testimonials from '@/components/sections/Testimonials';
import CallbackRequest from '@/components/sections/CallbackRequest';

export const metadata: Metadata = {
    title: 'Sıkça Sorulan Sorular | Hasarlı Araç Alım',
    description: 'Hasarlı araç alım satım süreci hakkında en çok merak edilen soruları ve cevaplarını inceleyin.',
};

const commonQuestions = [
    {
        question: 'Hasarlı aracım için nasıl fiyat alabilirim?',
        answer: 'Web sitemizdeki WhatsApp butonuna tıklayarak veya bizi telefonla arayarak aracınızın bilgilerini ve fotoğraflarını paylaşabilirsiniz. Ekibimiz yapacağı inceleme sonrası size en iyi fiyat teklifini sunar.'
    },
    {
        question: 'Hangi illerden araç alımı yapıyorsunuz?',
        answer: 'Türkiye\'nin 81 ilinden ve tüm ilçelerinden araç alımı yapıyoruz. Kendi çekici ağımızla aracınızı olduğu yerden masrafsız bir şekilde teslim alıyoruz.'
    },
    {
        question: 'Ödemeyi ne zaman ve nasıl alırım?',
        answer: 'Noter satışı esnasında paranız anında banka hesabınıza havale/EFT yapılır veya nakit olarak ödenir. Güvenli ödeme sistemleri (Bloke Çek vb.) kullanılması mümkündür.'
    },
    {
        question: 'Ağır hasarlı veya pert araç alıyor musunuz?',
        answer: 'Evet, hafif hasarlı, ağır hasarlı, pert kayıtlı, motor arızalı veya çekme belgeli her türlü aracı değerinde satın alıyoruz.'
    },
    {
        question: 'Aracımın borcu veya rehini varsa satabilir miyim?',
        answer: 'Rehinli araçların satışı için önce rehin borcunun kapatılması gerekir. Vergi borcu olan araçların borcu satış bedelinden düşülerek işlem yapılabilir.'
    },
    {
        question: 'Ekspertiz ücreti talep ediyor musunuz?',
        answer: 'Hayır, firmamız tarafından yapılan tüm ekspertiz ve değerleme işlemleri tamamen ücretsizdir.'
    },
    {
        question: 'Çekici ücreti kime ait?',
        answer: 'Aracınızın çekici ile nakliye işlemleri tamamen firmamıza aittir. Sizden herhangi bir nakliye veya çekici ücreti talep edilmez.'
    }
];

export default function FAQPage() {
    return (
        <>
            <PageHero
                title="Sıkça Sorulan Sorular"
                subtitle="Merak ettiğiniz tüm soruların cevapları burada."
                backgroundImage="/images/backgrounds/faq-hero.png"
            />

            <section className="py-16 md:py-24">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-secondary mb-12">
                            Genel Sorular
                        </h2>
                        <FAQ items={commonQuestions} />
                    </div>
                </div>
            </section>

            <CallbackRequest />
            <Testimonials />
            <CTA
                title="Başka Sorunuz mu Var?"
                subtitle="Aklınıza takılan diğer sorular için 7/24 bizimle iletişime geçebilirsiniz."
            />
        </>
    );
}
