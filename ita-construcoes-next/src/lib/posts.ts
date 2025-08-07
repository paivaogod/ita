import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export type PostMeta = {
  title: string;
  date: string;
  excerpt?: string;
  cover?: string;
  slug: string;
};

const postsDir = path.join(process.cwd(), 'content', 'blog');

export function getAllPostsMeta(): PostMeta[] {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, '');
    const fullPath = path.join(postsDir, file);
    const raw = fs.readFileSync(fullPath, 'utf-8');
    const { data } = matter(raw);
    return {
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      cover: data.cover || '',
      slug
    } as PostMeta;
  });
  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDir, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(raw);
  const html = marked.parse(content);
  const meta: PostMeta = {
    title: data.title || slug,
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt || '',
    cover: data.cover || '',
    slug,
  };
  return { meta, html };
}
