/*
===============================================================================
SITE DA CONSTRUTORA – LANDING PAGE (Next.js + Tailwind) – PT-BR
===============================================================================

✅ Versão **simplificada** (sem libs extras). Tudo em uma landing page.
- Next.js (pages router) + Tailwind
- Paleta neutra (branco, preto, dourado)
- Botão WhatsApp (flutuante e na seção Sobre) usando ícone oficial
- Serviços
- Portfólio (carrossel simples via CSS scroll-snap, 10 itens editáveis em /public/portfolio)
- Depoimentos (carrossel simples via CSS scroll-snap, 10 itens editáveis em /public/testimonials)
- Contato (form estático)
- Blog (cards estáticos; pode apontar para links reais depois)

Como usar:
1) Crie a pasta do projeto e **copie cada bloco FILE abaixo** para o caminho indicado.
2) Rode: `npm i` → `npm run dev` → abra http://localhost:3000
3) Edite número do WhatsApp em `pages/index.tsx` (const `whatsappNumber`).
4) Troque imagens em `/public/portfolio/*.jpg` e `/public/testimonials/*.jpg`.

Pergunta rápida (para eu ajustar se quiser):
- Se `whatsappNumber` estiver vazio, prefere **desabilitar** os botões ou abrir só com texto (`https://wa.me/?text=...`)?

-------------------------------------------------------------------------------
ESTRUTURA DE PASTAS
-------------------------------------------------------------------------------
meu-site-construtora/
├─ pages/
│  ├─ _app.tsx
│  └─ index.tsx
├─ public/
│  ├─ whatsapp.svg
│  ├─ logo.svg
│  ├─ portfolio/
│  │  ├─ 1.jpg ... 10.jpg (adicione suas imagens)
│  └─ testimonials/
│     ├─ 1.jpg ... 10.jpg (adicione fotos reais)
├─ styles/
│  └─ globals.css
├─ tailwind.config.js
├─ postcss.config.js
├─ package.json
├─ tsconfig.json
└─ next.config.js (opcional)

-------------------------------------------------------------------------------
ARQUIVOS (COPIE E COLE)
-------------------------------------------------------------------------------

FILE: package.json
-------------------------------------------------------------------------------
```json
{
  "name": "meu-site-construtora",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.2.4",
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.33",
    "tailwindcss": "^3.4.4",
    "typescript": "^5.4.5"
  }
}
```

FILE: tailwind.config.js
-------------------------------------------------------------------------------
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: "#C2A86E"
      }
    }
  },
  plugins: []
};
```

FILE: postcss.config.js
-------------------------------------------------------------------------------
```js
module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } };
```

FILE: tsconfig.json
-------------------------------------------------------------------------------
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

FILE: next.config.js (opcional)
-------------------------------------------------------------------------------
```js
/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = nextConfig;
```

FILE: styles/globals.css
-------------------------------------------------------------------------------
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body { scroll-behavior: smooth; }
/* Utilitários extras */
.container-std { @apply max-w-6xl mx-auto px-4; }
.section-title { @apply text-3xl font-bold text-center; }
.section-sub { @apply text-center text-gray-600 mt-2; }
.btn { @apply inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium transition; }
.btn-primary { @apply bg-gold text-black hover:opacity-90; }
.btn-outline { @apply border border-gray-300 hover:border-gray-400 rounded-xl px-4 py-2; }
.card { @apply bg-white rounded-xl shadow-sm border border-gray-100; }
.shadow-soft { box-shadow: 0 8px 30px rgba(0,0,0,.06); }
/* Carrossel simples */
.carousel { scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; }
.carousel > * { scroll-snap-align: start; }
```

FILE: pages/_app.tsx
-------------------------------------------------------------------------------
```tsx
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

FILE: pages/index.tsx
-------------------------------------------------------------------------------
```tsx
import Head from 'next/head';

const whatsappNumber = '55SEUNUMERO'; // coloque seu número com DDI/DDD sem símbolos
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento.')}`;

export default function Home() {
  const hasPhone = whatsappNumber && /\d{8,}/.test(whatsappNumber);

  return (
    <>
      <Head>
        <title>Sua Construtora</title>
        <meta name="description" content="Construção civil com qualidade, segurança e compromisso." />
      </Head>

      <main className="font-sans bg-white text-gray-900">
        {/* HERO / SOBRE */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Sua Construtora</h1>
          <p className="max-w-2xl text-lg mb-6 text-gray-700">Qualidade, segurança e compromisso em cada obra.</p>
          {hasPhone && (
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <img src="/whatsapp.svg" alt="WhatsApp" className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          )}
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="py-16 px-4 bg-gray-50">
          <h2 className="section-title">Serviços</h2>
          <p className="section-sub">Do projeto à entrega, atendemos todas as etapas da obra.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container-std mt-10">
            {['Construção', 'Reforma', 'Gerenciamento de Obras'].map((s, i) => (
              <div key={i} className="card p-6 hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">{s}</h3>
                <p className="text-gray-600">Descrição breve do serviço oferecido.</p>
              </div>
            ))}
          </div>
        </section>

        {/* PORTFÓLIO */}
        <section id="portfolio" className="py-16 px-4">
          <h2 className="section-title">Portfólio</h2>
          <p className="section-sub">Alguns projetos realizados recentemente.</p>
          <div className="container-std mt-8">
            <div className="carousel flex gap-4 overflow-x-auto">
              {Array.from({ length: 10 }).map((_, i) => (
                <figure key={i} className="min-w-full sm:min-w-[48%] lg:min-w-[32%] card overflow-hidden">
                  <img src={`/portfolio/${i+1}.jpg`} alt={`Projeto ${i+1}`} className="w-full h-64 object-cover" />
                  <figcaption className="p-4">
                    <h4 className="font-semibold">Projeto {i+1}</h4>
                    <p className="text-sm text-gray-600 mt-1">Breve descrição do projeto.</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-3">Edite as imagens em <code>/public/portfolio</code>.</p>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section id="depoimentos" className="py-16 px-4 bg-gray-50">
          <h2 className="section-title">Depoimentos</h2>
          <p className="section-sub">A satisfação dos nossos clientes fala por nós.</p>
          <div className="container-std mt-8">
            <div className="carousel flex gap-4 overflow-x-auto">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="min-w-full sm:min-w-[48%] lg:min-w-[32%] card p-6 text-center">
                  <img src={`/testimonials/${i+1}.jpg`} alt={`Cliente ${i+1}`} className="h-16 w-16 rounded-full object-cover mx-auto" />
                  <p className="text-sm text-gray-700 mt-3 italic">“Serviço excelente e atendimento impecável!”</p>
                  <p className="mt-2 font-semibold">Cliente {i+1}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-3">Troque as fotos em <code>/public/testimonials</code>.</p>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="py-16 px-4">
          <h2 className="section-title">Contato</h2>
          <p className="section-sub">Fale com nossa equipe e receba um orçamento.</p>
          <form className="container-std max-w-xl mx-auto mt-8 flex flex-col gap-4" onSubmit={(e)=>e.preventDefault()}>
            <input className="border p-3 rounded" placeholder="Nome" required />
            <input className="border p-3 rounded" placeholder="Email" type="email" required />
            <textarea className="border p-3 rounded" placeholder="Mensagem" rows={5} required></textarea>
            <button className="btn btn-primary w-full" type="submit">Enviar Mensagem</button>
            {hasPhone && (
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-outline justify-center">
                <img src="/whatsapp.svg" alt="WhatsApp" className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            )}
          </form>
        </section>

        {/* BLOG */}
        <section id="blog" className="py-16 px-4 bg-gray-50">
          <h2 className="section-title">Blog</h2>
          <p className="section-sub">Publicações e novidades (adicione seus links).</p>
          <div className="container-std grid gap-6 md:grid-cols-3 mt-10">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="card p-5 hover:shadow-md transition">
                <h3 className="font-semibold">Post {i+1}</h3>
                <p className="text-sm text-gray-600 mt-2">Resumo rápido do post...</p>
                <a href="#" className="text-gold font-medium mt-2 inline-block">Ler mais</a>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Botão flutuante WhatsApp */}
      {hasPhone && (
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 bg-[#25D366] p-3 rounded-full shadow-lg hover:opacity-90 transition" aria-label="Abrir WhatsApp">
          <img src="/whatsapp.svg" alt="WhatsApp" className="h-8 w-8" />
        </a>
      )}
    </>
  );
}
```

FILE: public/whatsapp.svg (ícone oficial)
-------------------------------------------------------------------------------
```svg
<svg width="96" height="96" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
      <stop stop-color="#1FAF38" offset="0%"/>
      <stop stop-color="#60D669" offset="100%"/>
    </linearGradient>
  </defs>
  <g fill="none" fill-rule="evenodd">
    <path d="M0 256l18.3-66.8C9.7 173 5 153.7 5 133 5 61.8 63.4 3.5 134.6 3.5 205.8 3.5 264 61.8 264 133s-58.2 129.5-129.4 129.5c-20.1 0-39.1-4.6-56-12.8L0 256z" fill="url(#a)" transform="translate(-8)"/>
    <path d="M65 214l6.8-24.8a91 91 0 01-19.1-56.2c0-50.5 41-91.5 91.5-91.5S235.7 82.5 235.7 133 194.7 224.5 144.2 224.5c-19.7 0-38-6-53-16.2L65 214z" fill="#fff"/>
    <path d="M144.2 50.5c-45.5 0-82.5 37-82.5 82.5 0 18 5.7 34.6 15.5 48.1l-9.8 35.7 36.7-9.6a82.1 82.1 0 0040.1 10.3c45.5 0 82.5-37 82.5-82.5s-37-82.5-82.5-82.5zm47.2 98.6c-2 5.6-10.1 10.3-13.8 10.9-3.7.6-8.3.9-13.5-2.6-5.2-3.5-17.6-6.7-33.6-21.1-12.4-11.1-20.8-24.9-21.6-26.1-.8-1.2-5.1-7.4-5.1-14.1s3.2-10.1 4.4-11.5c1.1-1.4 2.4-1.8 3.2-1.8.8 0 1.6 0 2.3.1.7.1 1.7-.2 2.7 2 .9 2.3 3.1 7.7 3.4 8.3.3.6.5 1.4.1 2.2-.4.9-.7 1.5-1.4 2.3-.7.8-1.5 1.8-2 2.4-.6.6-1.2 1.3-.5 2.6.7 1.3 3.2 5.4 6.9 8.9 4.8 4.7 9 7.9 12.5 10.1 1.6 1 3 1.9 4.3 2.7 1.4.9 2.7 1.6 3.9 2.2 1.2.6 2.3 1.2 3.3 1.7 1 .5 2 .8 2.7 1.2.8.4 1.9.1 2.6-.5.8-.6 5.7-5.1 7.2-6.9 1.5-1.8 3-1.5 5-.9 2 .6 12.8 6.1 15 7.2 2.2 1.1 3.7 1.7 4.2 2.6.5.9.5 5.2-.9 8.8z" fill="#25D366"/>
  </g>
</svg>
```

FILE: public/logo.svg (placeholder)
-------------------------------------------------------------------------------
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40">
  <rect width="200" height="40" fill="#0E0E0E" rx="8"/>
  <text x="16" y="26" font-size="16" fill="#C2A86E" font-family="Arial, Helvetica, sans-serif">SUA CONSTRUTORA</text>
</svg>
```

===============================================================================
FIM DOS ARQUIVOS
===============================================================================
*/

import React from 'react';

// Componente "vitrine" para o canvas: não faz parte do projeto final.
const GuiaLandingMinima: React.FC = () => {
  return (
    <main style={{ fontFamily: 'ui-sans-serif, system-ui', padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 600, marginBottom: 8 }}>
        Landing Page – Next + Tailwind (Simples)
      </h1>
      <p style={{ color: '#555', marginBottom: 16 }}>
        Copie os blocos marcados como <code>FILE:</code> para os respectivos caminhos
        no seu projeto. Depois rode <code>npm i</code> e <code>npm run dev</code>.
      </p>
      <ol style={{ lineHeight: 1.8 }}>
        <li>Crie as pastas conforme a <b>ESTRUTURA DE PASTAS</b>.</li>
        <li>Edite o número do WhatsApp em <code>pages/index.tsx</code>.</li>
        <li>Troque as imagens em <code>/public/portfolio</code> e <code>/public/testimonials</code>.</li>
      </ol>
    </main>
  );
};

export default GuiaLandingMinima;
