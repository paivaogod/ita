import Section from '@/components/Section'
import posts from '@/data/posts.json'

export const metadata = {
  title: 'Blog',
  description: 'Artigos e novidades sobre construção, reformas e manutenção.'
}

export default function BlogPage() {
  return (
    <Section title="Blog" intro="Artigos, dicas e atualizações da ITA Construções e Reformas.">
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map(p => (
          <article key={p.slug} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
            {p.cover && <img src={p.cover} alt={p.title} className="h-40 w-full object-cover" />}
            <div className="p-5">
              <h3 className="font-medium">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">{p.excerpt}</p>
              <a href={`/blog/${p.slug}`} className="text-brand text-sm font-medium inline-block mt-3">Ler artigo →</a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
