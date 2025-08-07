import { ReactNode } from 'react';

export default function Section({ title, intro, children }:{ title?: string, intro?: string, children: ReactNode }) {
  return (
    <section className="container py-12">
      {title && <h2 className="text-2xl font-semibold">{title}</h2>}
      {intro && <p className="text-gray-600 mt-2">{intro}</p>}
      <div className="mt-6">
        {children}
      </div>
    </section>
  )
}
