import Link from 'next/link'
import Section from '@/components/Section'
import posts from '@/data/posts.json'
import Testimonials from '@/components/Testimonials'

export const dynamic = 'force-static';

export default function Home() {
  const latest = posts.slice(0,3);
  return (
    <>
      <section className="relative bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center">
        <div className="bg-brand/70">
          <div className="container py-28 text-white">
            <h1 className="text-4xl font-bold max-w-2xl">Construímos com qualidade, entregamos com confiança.</h1>
            <p className="mt-4 max-w-xl text-white/90">Projetos residenciais e comerciais, reformas e manutenção. Do planejamento à entrega, cuidamos de tudo.</p>
            <div className="mt-8 flex gap-4">
              <Link href="/projetos" className="inline-block bg-white text-brand px-5 py-3 rounded-xl font-medium">Ver Projetos</Link>
              <Link href="/contato" className="inline-block border border-white/70 px-5 py-3 rounded-xl">Solicitar Orçamento</Link>
            </div>
          </div>
        </div>
      </section>

      <Section title="Serviços" intro="Atendemos obras novas, reformas e manutenção predial.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: 'Construção', d: 'Execução de obras do zero com gestão de prazos e custos.'},
            { t: 'Reformas', d: 'Intervenções residenciais e comerciais com mínima interrupção.'},
            { t: 'Manutenção', d: 'Planos preventivos e corretivos para seu patrimônio.'},
          ].map(s => (
            <div key={s.t} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="text-brand font-semibold">{s.t}</div>
              <p className="text-gray-600 mt-2">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Últimos Artigos" intro="Conteúdo para clientes e parceiros: dicas, tendências e novidades.">
        <div className="grid md:grid-cols-3 gap-6">
          {latest.map(p => (
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
        <div className="mt-6">
          <a href="/blog" className="text-brand font-medium">Ver todos os artigos →</a>
        </div>
      </Section>

      <Section title="Depoimentos" intro="O que nossos clientes dizem sobre nós.">
        <Testimonials />
      </Section>
    </>
  )
}
