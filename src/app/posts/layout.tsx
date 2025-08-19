'use client';

import { usePathname } from 'next/navigation';
import BlogLayout from '@/components/BlogLayout';
import CodeHighlight from '@/components/CodeHighlight';
import { getPostBySlug } from '@/lib/blog';

type PostLayoutProps = {
  children: React.ReactNode;
};

export default function PostLayout({ children }: PostLayoutProps) {
  const pathname = usePathname();

  // Extract slug from pathname like /posts/coterm-development
  const pathSegments = pathname.split('/');
  const slug = pathSegments[2]; // posts is pathSegments[1], slug is pathSegments[2]

  if (!slug || slug === '') {
    // For the posts index page, just render children
    return <>{children}</>;
  }

  const post = getPostBySlug(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <BlogLayout post={post}>
      <CodeHighlight />
      <div className="prose prose-invert prose-lg max-w-none">{children}</div>
    </BlogLayout>
  );
}
