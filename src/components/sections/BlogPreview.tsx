// Path: src/components/sections/BlogPreview.tsx
// Description: Latest blog articles preview with images and excerpts
// Usage: Add to homepage before CTA section, or create a dedicated blog page

import Link from 'next/link';
import blogData from '@/data/blog.json';

interface BlogPreviewProps {
  limit?: number;
}

export default function BlogPreview({ limit = 3 }: BlogPreviewProps) {
  const posts = blogData.posts.slice(0, limit);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">
            BLOG
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
            Faydalı Bilgiler ve Rehberler
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Araç satışı hakkında bilmeniz gereken her şey
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-primary/30">
                    article
                  </span>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">calendar_today</span>
                    {new Date(post.date).toLocaleDateString('tr-TR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">schedule</span>
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all"
                >
                  Devamını Oku
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-4 rounded-lg transition-all"
          >
            Tüm Yazıları Gör
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
