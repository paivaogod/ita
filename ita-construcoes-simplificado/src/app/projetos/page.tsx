import Section from '@/components/Section'
import projects from '@/data/projects.json'

export const metadata = { title: 'Projetos' }

export default function ProjetosPage() {
  return (
    <Section title="Projetos" intro="Alguns dos trabalhos realizados pela ITA.">
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(p => (
          <article key={p.id} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
            {p.imagens?.[0] && <img src={p.imagens[0]} alt={p.titulo} className="h-40 w-full object-cover" />}
            <div className="p-5">
              <h3 className="font-medium">{p.titulo}</h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">{p.descricao}</p>
              <a href={`/projetos/${p.id}`} className="text-brand text-sm font-medium inline-block mt-3">Ver detalhes →</a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
