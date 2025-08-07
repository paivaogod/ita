import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'ITA Construções e Reformas',
    template: '%s | ITA Construções e Reformas'
  },
  description: 'Construção civil, reformas e manutenção com foco em qualidade, prazo e segurança.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
