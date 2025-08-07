# ITA Construções e Reformas — Site (Next.js + Tailwind)

Site institucional em PT-BR com **blog (Markdown)**, **depoimentos**, **portfólio de projetos** e **contato**.

## Stack
- Next.js (App Router)
- Tailwind CSS
- Markdown (blog em `content/blog/*.md`)
- JSON para projetos/depoimentos (`src/data/*.json`)

## Rodando localmente
```bash
npm install
npm run dev
# abre em http://localhost:3000
```

## Como publicar na Vercel via GitHub
1. Crie um repositório no GitHub (vazio).
2. Faça o commit e push deste projeto:
   ```bash
   git init
   git add .
   git commit -m "feat: site ITA Construções e Reformas"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/ita-construcoes.git
   git push -u origin main
   ```
3. No painel da **Vercel**, clique em **New Project** → **Import Git Repository** e selecione o repo.
4. Aceite os padrões de build. Pronto!

## Editando conteúdo
### Blog
Crie novos arquivos `.md` em `content/blog`. Exemplo de frontmatter:
```md
---
title: "Título do post"
date: "2025-08-01"
excerpt: "Resumo do artigo"
cover: "https://... (opcional)"
---

Seu conteúdo em Markdown aqui.
```

### Projetos
Edite `src/data/projects.json`. Exemplo:
```json
{
  "id": "minha-obra",
  "titulo": "Minha Obra",
  "descricao": "Descrição curta",
  "local": "Petrópolis - RJ",
  "cliente": "Cliente X",
  "data": "2025-08-01",
  "imagens": ["https://..."],
  "comentarios": "Observações da obra"
}
```

### Depoimentos
Edite `src/data/testimonials.json`:
```json
{ "author": "Fulano", "role": "Cliente", "quote": "Excelente trabalho!" }
```

### Contato
Crie um formulário no **Formspree** e substitua `SEU_ID_AQUI` em `/contato`.

## Customização rápida
- Cores: altere `brand` em `tailwind.config.ts`.
- Título/descrição do site: `src/app/layout.tsx`.
- Logo: troque `public/favicon.svg` e/ou edite o cabeçalho em `src/components/Nav.tsx`.

## Licença
MIT
