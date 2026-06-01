import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // Explicitly allow AI crawlers
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Amazonbot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'Applebot', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
    ],
    sitemap: 'https://hasarliaracnoktasi.com/sitemap.xml',
    host: 'https://hasarliaracnoktasi.com',
  };
}
