export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-10 mt-16">
      <div className="container grid sm:grid-cols-2 gap-6 text-sm text-gray-600">
        <div>
          <div className="font-semibold text-brand">ITA Construções e Reformas</div>
          <p className="mt-2">Construção civil, reformas e manutenção com foco em qualidade, prazo e segurança.</p>
        </div>
        <div className="sm:text-right">
          <p>© {new Date().getFullYear()} ITA Construções e Reformas.</p>
          <p>Feito com Next.js + Tailwind. Hospedagem: Vercel</p>
        </div>
      </div>
    </footer>
  )
}
