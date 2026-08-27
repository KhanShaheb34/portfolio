import Link from 'next/link';
import InnerPage from '@/components/InnerPage';
import SectionLabel from '@/components/SectionLabel';
import type { BlogPost } from '@/lib/blog';
import { formatPostDate } from '@/lib/dates';

type BlogLayoutProps = {
  post: BlogPost;
  children: React.ReactNode;
};

export default function BlogLayout({ post, children }: BlogLayoutProps) {
  const postUrl = `https://shakirul.com/posts/${post.slug}`;

  return (
    <InnerPage backHref="/posts" backLabel="← Posts">
      <header className="space-y-4">
        <SectionLabel as="h1" title="Posts" />
        <p className="text-md">{post.title}</p>
        <p className="text-muted text-sm">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          {' · '}
          {post.readingTime}
        </p>
      </header>

      <article className="prose prose-invert prose-lg max-w-none">
        {children}
      </article>

      <p className="text-muted text-sm">
        Share on{' '}
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            post.title
          )}&url=${encodeURIComponent(postUrl)}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          Twitter
        </a>
        ,{' '}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            postUrl
          )}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
        {' or '}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            postUrl
          )}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          Facebook
        </a>
      </p>

      <Link className="text-sm" href="/" prefetch={true}>
        Home
      </Link>
    </InnerPage>
  );
}
