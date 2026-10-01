import siteData from '@/data/site.json';

export interface LegalSection {
  title: string;
  paragraphs?: string[];
  items?: string[];
}

interface LegalContentProps {
  updatedAt: string;
  intro: string;
  sections: LegalSection[];
}

export default function LegalContent({ updatedAt, intro, sections }: LegalContentProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <article className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          <p className="text-sm text-gray-500 mb-6">Son güncelleme: {updatedAt}</p>
          <p className="mb-10">{intro}</p>

          {sections.map((section, index) => (
            <div key={section.title} className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4">
                {index + 1}. {section.title}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mb-4">
                  {paragraph}
                </p>
              ))}
              {section.items && (
                <ul className="list-disc pl-6 space-y-2">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="rounded-xl bg-gray-50 border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-secondary mb-3">İletişim</h2>
            <ul className="space-y-1 text-sm">
              <li>
                <strong>Unvan:</strong> {siteData.name}
              </li>
              <li>
                <strong>Adres:</strong> {siteData.address}
              </li>
              <li>
                <strong>Telefon:</strong>{' '}
                <a href={`tel:${siteData.phoneRaw}`} className="text-primary hover:underline">
                  {siteData.phone}
                </a>
              </li>
              <li>
                <strong>E-posta:</strong>{' '}
                <a href={`mailto:${siteData.email}`} className="text-primary hover:underline">
                  {siteData.email}
                </a>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
