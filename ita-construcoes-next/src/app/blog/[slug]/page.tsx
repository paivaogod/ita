import { getAllPostsMeta, getPostBySlug } from '@/lib/posts'
import Section from '@/components/Section'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return getAllPostsMeta().map(p => ({ slug: p.slug }));
}

export default function PostPage({ params }: Props) {
  const { meta, html } = getPostBySlug(params.slug);
  return (
    <Section title={meta.title} intro={new Date(meta.date).toLocaleDateString('pt-BR')}>
      <article className="prose max-w-none prose-p:leading-relaxed" dangerouslySetInnerHTML={{__html: html}} />
    </Section>
  )
}
