import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';

type BlogLayoutProps = {
  post: BlogPost;
  children: React.ReactNode;
};

export default function BlogLayout({ post, children }: BlogLayoutProps) {
  const postUrl = `https://shakirul.dev/posts/${post.slug}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-8 py-16">
        {/* Header */}
        <header className="mb-12">
          <Link
            className="mb-8 inline-block text-muted transition-colors hover:text-foreground"
            href="/"
            prefetch={true}
          >
            ← Home
          </Link>

          <div className="space-y-4">
            <h1 className="font-normal text-4xl">{post.title}</h1>

            <div className="flex items-center space-x-4 text-muted text-sm">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>•</span>
              <span>{post.readingTime}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>

            {post.tags.length > 0 && (
              <div className="flex items-center space-x-2">
                {post.tags.map((tag) => (
                  <span
                    className="rounded bg-muted px-2 py-1 text-background text-xs"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          {children}
        </article>

        {/* Footer */}
        <footer className="mt-16 border-foreground/20 border-t pt-8">
          <div className="flex items-center justify-between">
            <Link
              className="text-muted transition-colors hover:text-foreground"
              href="/"
              prefetch={true}
            >
              ← Home
            </Link>

            <div className="flex items-center space-x-4">
              <span className="text-muted">
                Share on{' '}
                <a
                  className="transition-colors hover:text-foreground"
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
                  className="transition-colors hover:text-foreground"
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    postUrl
                  )}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>{' '}
                or{' '}
                <a
                  className="transition-colors hover:text-foreground"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    postUrl
                  )}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Facebook
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
