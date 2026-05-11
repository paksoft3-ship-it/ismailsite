import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center py-16">
      <div className="container-custom text-center">
        <span className="material-symbols-outlined text-8xl text-gray-300 mb-4">
          search_off
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
          Sayfa Bulunamadı
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            <span className="material-symbols-outlined">home</span>
            Ana Sayfaya Dön
          </Link>
          <Link href="/iletisim" className="btn-outline">
            <span className="material-symbols-outlined">support_agent</span>
            İletişime Geç
          </Link>
        </div>
      </div>
    </section>
  );
}
