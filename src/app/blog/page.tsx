import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/common/PageHero';
import blogData from '@/data/blog.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog | Hasarlı Araç Rehberi',
    description:
        'Hasarlı araç satışı, pert araç değerleme, sigorta süreçleri ve daha fazlası hakkında bilgilendirici yazılar.',
};

export default function BlogPage() {
    const posts = blogData.posts;

    return (
        <>
            <PageHero
                title="Blog"
                subtitle="Hasarlı araç alım satım süreçleri, sigorta işlemleri ve araç değerleme hakkında faydalı bilgiler"
                backgroundImage="/images/backgrounds/faq-hero.png"
            />

            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container-custom">
                    {/* Featured Post */}
                    {posts.length > 0 && (
                        <div className="mb-16">
                            <Link href={`/blog/${posts[0].slug}`} className="group">
                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    <div className="grid md:grid-cols-2 gap-0">
                                        <div className="relative h-64 md:h-96">
                                            <Image
                                                src={posts[0].image}
                                                alt={posts[0].title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                                                    Öne Çıkan
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-8 md:p-12 flex flex-col justify-center">
                                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                                <span className="bg-gray-100 px-3 py-1 rounded-full">
                                                    {posts[0].category}
                                                </span>
                                                <span>{posts[0].date}</span>
                                                <span>{posts[0].readTime}</span>
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                                                {posts[0].title}
                                            </h2>
                                            <p className="text-gray-600 mb-6">{posts[0].excerpt}</p>
                                            <span className="text-primary font-semibold inline-flex items-center gap-2">
                                                Devamını Oku
                                                <span className="material-symbols-outlined">arrow_forward</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}

                    {/* Post Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.slice(1).map((post) => (
                            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                                <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                                    <div className="relative h-48">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                                            <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                                                {post.category}
                                            </span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-400">{post.date}</span>
                                            <span className="text-primary font-medium inline-flex items-center gap-1">
                                                Oku
                                                <span className="material-symbols-outlined text-sm">
                                                    arrow_forward
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-secondary text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-bold mb-4">Hasarlı Aracınızı Değerlendirelim</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Aracınızın değerini öğrenmek için hemen bizimle iletişime geçin. Ücretsiz
                        ekspertiz ve aynı gün nakit ödeme garantisi.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/iletisim" className="btn-primary">
                            <span className="material-symbols-outlined">contact_phone</span>
                            İletişime Geç
                        </Link>
                        <Link
                            href="https://wa.me/905322888080"
                            target="_blank"
                            className="btn-whatsapp"
                        >
                            <span className="material-symbols-outlined">chat</span>
                            WhatsApp ile Yaz
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
