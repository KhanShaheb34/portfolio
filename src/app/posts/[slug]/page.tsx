import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import BlogLayout from '@/components/BlogLayout';
import { getPostBySlug, getPostSlugs } from '@/lib/blog';

type PostPageProps = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <BlogLayout post={post}>
      <MDXRemote source={post.content} />
    </BlogLayout>
  );
}

export function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Shakirul Hasan Khan`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}
