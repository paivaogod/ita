# ITA Construções e Reformas — Site Simplificado (Next.js + Tailwind)

100% estático (sem `fs`) para evitar erros no Vercel. Conteúdo em JSON:
- Blog: `src/data/posts.json` (com HTML simples no campo `html`)
- Projetos: `src/data/projects.json`
- Depoimentos: `src/data/testimonials.json`

## Rodando localmente
```bash
npm install
npm run dev
```

## Publicando na Vercel (GitHub → Vercel)
1. Suba estes arquivos na **raiz** do seu repositório (precisa ver `package.json`, `src/`, `public/` na raiz).
2. Na Vercel: **New Project → Import Git Repository** → selecione o repo → Deploy.

## Editando conteúdo
### Blog (exemplo de item em `src/data/posts.json`)
```json
{
  "slug": "novo-artigo",
  "title": "Título do post",
  "date": "2025-08-01",
  "excerpt": "Resumo curto",
  "cover": "https://... (opcional)",
  "html": "<p>Seu conteúdo em HTML aqui.</p>"
}
```

### Projetos
Edite `src/data/projects.json` (id único por projeto).

### Depoimentos
Edite `src/data/testimonials.json`.

### Contato
Crie um formulário no **Formspree** e substitua `SEU_ID_AQUI`.

## Dicas de 404 na Vercel
- Confirme que os arquivos estão na **raiz** do repo (sem pasta duplicada).
- Se importou uma subpasta, ajuste **Root Directory** nas configurações do projeto na Vercel.
