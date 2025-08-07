import Section from '@/components/Section'
import projects from '@/data/projects.json'

type Props = { params: { id: string } }

export function generateStaticParams() {
  return projects.map(p => ({ id: p.id }));
}

export default function ProjetoPage({ params }: Props) {
  const projeto = projects.find(p => p.id === params.id);
  if (!projeto) return <Section title="Projeto não encontrado"><div /></Section>;

  return (
    <Section title={projeto.titulo} intro={`${projeto.local} • ${new Date(projeto.data).toLocaleDateString('pt-BR')}`}>
      <div className="grid gap-4 md:grid-cols-2">
        {projeto.imagens?.map((src: string) => (
          <img key={src} src={src} alt={projeto.titulo} className="w-full rounded-xl border border-gray-100" />
        ))}
      </div>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="text-sm text-gray-600">Cliente</div>
          <div className="font-medium">{projeto.cliente}</div>
        </div>
        <div className="p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="text-sm text-gray-600">Local</div>
          <div className="font-medium">{projeto.local}</div>
        </div>
        <div className="p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="text-sm text-gray-600">Comentários</div>
          <div className="font-medium">{projeto.comentarios}</div>
        </div>
      </div>
    </Section>
  )
}
