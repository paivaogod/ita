import posts from '@/data/posts.json'
import Section from '@/components/Section'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export default function PostPage({ params }: Props) {
  const post = posts.find(p => p.slug === params.slug);
  if (!post) return <Section title="Artigo não encontrado"><div /></Section>;

  return (
    <Section title={post.title} intro={new Date(post.date).toLocaleDateString('pt-BR')}>
      <article className="prose max-w-none prose-p:leading-relaxed" dangerouslySetInnerHTML={{__html: post.html}} />
    </Section>
  )
}
