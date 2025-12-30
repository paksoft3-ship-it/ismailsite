'use client';

import { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaWhatsapp, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ContactButton from './ContactButton';
import siteConfig from '@/data/site.json';

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

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
    const widgetRef = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="relative" ref={widgetRef}>
            {/* Chat Dialog */}
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-[320px] sm:w-[350px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden text-left z-50 mb-4 animate-fade-in-up origin-bottom-right">
                    {/* Header */}
                    <div className="bg-primary p-4 flex items-center justify-between text-white">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <FaRobot className="text-xl" />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">Sanal Asistan</h3>
                                <p className="text-xs text-white/80">Size nasıl yardımcı olabilirim?</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                            <FaTimes />
                        </button>
                    </div>

                    {/* Chat Body (FAQs) */}
                    <div className="p-4 max-h-[400px] overflow-y-auto bg-gray-50/50">
                        <div className="space-y-3">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm">
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex items-center justify-between p-3 text-left text-sm font-medium text-secondary hover:bg-gray-50 transition-colors"
                                    >
                                        {faq.question}
                                        {openFaqIndex === index ? <FaChevronUp className="text-xs text-gray-400" /> : <FaChevronDown className="text-xs text-gray-400" />}
                                    </button>
                                    {openFaqIndex === index && (
                                        <div className="p-3 pt-0 text-xs text-gray-600 border-t border-gray-50 bg-gray-50/30">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="text-xs text-gray-500 mb-2 text-center">Farklı bir sorunuz mu var?</p>
                            <ContactButton
                                type="whatsapp"
                                position="chat_widget"
                                whatsappMessage="Merhaba, Chatbot üzerinden ulaşıyorum, bir sorum var."
                                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-green-200"
                            >
                                <FaWhatsapp className="text-lg" />
                                WhatsApp Canlı Destek
                            </ContactButton>
                        </div>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-full shadow-lg shadow-primary/30 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all text-2xl z-40 relative"
            >
                {isOpen ? <FaTimes /> : <FaRobot />}

                {/* Helper popup if closed */}
                {!isOpen && (
                    <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-secondary text-xs font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap hidden group-hover:block sm:block animate-pulse">
                        Soru Sor?
                    </span>
                )}
            </button>
        </div>
    );
}
