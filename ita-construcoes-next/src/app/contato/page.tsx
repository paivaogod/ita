import Section from '@/components/Section'

export const metadata = {
  title: 'Contato'
}

export default function ContatoPage() {
  return (
    <Section title="Contato" intro="Solicite um orçamento ou tire suas dúvidas.">
      <form action="https://formspree.io/f/SEU_ID_AQUI" method="POST" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm max-w-xl">
        <div className="grid gap-4">
          <label className="grid gap-1">
            <span className="text-sm text-gray-700">Nome</span>
            <input name="nome" className="border border-gray-200 rounded-lg px-3 py-2" required />
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-gray-700">E-mail</span>
            <input type="email" name="email" className="border border-gray-200 rounded-lg px-3 py-2" required />
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-gray-700">Mensagem</span>
            <textarea name="mensagem" rows={5} className="border border-gray-200 rounded-lg px-3 py-2" required />
          </label>
          <button className="bg-brand text-white px-5 py-2 rounded-lg font-medium">Enviar</button>
        </div>
        <p className="text-xs text-gray-500 mt-3">Dica: Crie um formulário no Formspree e substitua SEU_ID_AQUI.</p>
      </form>
    </Section>
  )
}
