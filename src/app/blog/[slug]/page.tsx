import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import blogData from '@/data/blog.json';
import type { Metadata } from 'next';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogData.posts.find((p) => p.slug === slug);

    if (!post) {
        return { title: 'Yazı Bulunamadı' };
    }

    return {
        title: post.title,
        description: post.excerpt,
    };
}

export async function generateStaticParams() {
    return blogData.posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogData.posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = blogData.posts
        .filter((p) => p.id !== post.id)
        .slice(0, 3);

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px]">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex items-end">
                    <div className="container-custom pb-12">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-4 text-sm text-white/80 mb-4">
                                <span className="bg-primary px-3 py-1 rounded-full text-white">
                                    {post.category}
                                </span>
                                <span>{post.date}</span>
                                <span>{post.readTime}</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                                {post.title}
                            </h1>
                            <p className="text-lg text-white/80">{post.excerpt}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <article className="py-16">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                            <Link href="/" className="hover:text-primary">
                                Ana Sayfa
                            </Link>
                            <span>/</span>
                            <Link href="/blog" className="hover:text-primary">
                                Blog
                            </Link>
                            <span>/</span>
                            <span className="text-gray-700">{post.title}</span>
                        </nav>

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none">
                            {post.content.split('\n\n').map((paragraph, index) => {
                                if (paragraph.startsWith('## ')) {
                                    return (
                                        <h2 key={index} className="text-2xl font-bold text-secondary mt-8 mb-4">
                                            {paragraph.replace('## ', '')}
                                        </h2>
                                    );
                                }
                                if (paragraph.startsWith('### ')) {
                                    return (
                                        <h3 key={index} className="text-xl font-semibold text-secondary mt-6 mb-3">
                                            {paragraph.replace('### ', '')}
                                        </h3>
                                    );
                                }
                                if (paragraph.startsWith('- ')) {
                                    const items = paragraph.split('\n');
                                    return (
                                        <ul key={index} className="list-disc list-inside space-y-2 text-gray-700 my-4">
                                            {items.map((item, i) => (
                                                <li key={i}>{item.replace('- ', '')}</li>
                                            ))}
                                        </ul>
                                    );
                                }
                                if (/^\d+\./.test(paragraph)) {
                                    const items = paragraph.split('\n');
                                    return (
                                        <ol key={index} className="list-decimal list-inside space-y-2 text-gray-700 my-4">
                                            {items.map((item, i) => (
                                                <li key={i}>{item.replace(/^\d+\.\s*/, '')}</li>
                                            ))}
                                        </ol>
                                    );
                                }
                                return (
                                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                                        {paragraph}
                                    </p>
                                );
                            })}
                        </div>

                        {/* Author */}
                        <div className="mt-12 pt-8 border-t">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-3xl">
                                        person
                                    </span>
                                </div>
                                <div>
                                    <div className="font-semibold text-secondary">{post.author}</div>
                                    <div className="text-gray-500 text-sm">
                                        Hasarlı araç alım satım konusunda uzman ekibimiz
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Share */}
                        <div className="mt-8 pt-8 border-t">
                            <h4 className="font-semibold text-secondary mb-4">Bu Yazıyı Paylaş</h4>
                            <div className="flex gap-3">
                                <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                                    <span className="text-sm font-bold">f</span>
                                </button>
                                <button className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                                    <span className="text-sm font-bold">X</span>
                                </button>
                                <button className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                                    <span className="material-symbols-outlined text-xl">share</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="container-custom">
                        <h2 className="text-2xl font-bold text-secondary mb-8">İlgili Yazılar</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedPosts.map((relatedPost) => (
                                <Link
                                    key={relatedPost.id}
                                    href={`/blog/${relatedPost.slug}`}
                                    className="group"
                                >
                                    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                        <div className="relative h-48">
                                            <Image
                                                src={relatedPost.image}
                                                alt={relatedPost.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                                                <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                                                    {relatedPost.category}
                                                </span>
                                                <span>{relatedPost.readTime}</span>
                                            </div>
                                            <h3 className="font-bold text-secondary group-hover:text-primary transition-colors line-clamp-2">
                                                {relatedPost.title}
                                            </h3>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-16 bg-secondary text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-bold mb-4">Hasarlı Aracınız İçin Teklif Alın</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Profesyonel ekibimiz aracınızı değerlendirsin. Ücretsiz ekspertiz ve aynı gün
                        ödeme garantisi.
                    </p>
                    <Link href="/iletisim" className="btn-primary">
                        <span className="material-symbols-outlined">phone</span>
                        Hemen İletişime Geç
                    </Link>
                </div>
            </section>
        </>
    );
}
