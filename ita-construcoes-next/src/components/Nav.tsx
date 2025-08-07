'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'classnames';

const links = [
  { href: '/', label: 'Início' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/blog', label: 'Blog' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <nav className="container flex items-center justify-between h-16">
        <Link href="/" className="text-lg font-bold text-brand">ITA Construções e Reformas</Link>
        <ul className="flex items-center gap-4 text-sm">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={cn(
                  "px-3 py-2 rounded-md hover:bg-gray-100 transition-colors",
                  pathname === l.href && "bg-gray-100 text-brand font-medium"
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
