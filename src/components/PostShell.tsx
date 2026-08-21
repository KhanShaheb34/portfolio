import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import BlogLayout from '@/components/BlogLayout';
import CodeHighlight from '@/components/CodeHighlight';
import { getPostBySlug } from '@/lib/blog';

type PostShellProps = {
  slug: string;
  children: ReactNode;
};

export default function PostShell({ slug, children }: PostShellProps) {
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <BlogLayout post={post}>
      <CodeHighlight />
      {children}
    </BlogLayout>
  );
}
