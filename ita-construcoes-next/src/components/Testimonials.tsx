import testimonials from '@/data/testimonials.json';

export default function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((t) => (
        <figure key={t.author} className="p-5 rounded-2xl border border-gray-100 shadow-sm bg-white">
          <blockquote className="text-gray-800">“{t.quote}”</blockquote>
          <figcaption className="mt-3 text-sm text-gray-600">
            <span className="font-medium text-brand">{t.author}</span> — {t.role}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
