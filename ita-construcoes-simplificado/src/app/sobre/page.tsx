import Section from '@/components/Section'

export const metadata = { title: 'Sobre' }

export default function SobrePage() {
  return (
    <Section title="Sobre a ITA Construções e Reformas" intro="Experiência em obras residenciais e comerciais no RJ.">
      <p>Atuamos com foco em planejamento, segurança e qualidade de execução. Nossa equipe acompanha cada etapa, do orçamento à entrega final, garantindo transparência e cumprimento de prazos.</p>
      <p className="mt-4">Fale conosco para entender como podemos ajudar no seu projeto.</p>
    </Section>
  )
}
