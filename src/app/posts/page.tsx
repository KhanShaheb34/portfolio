import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-8 py-16">
        {/* Header */}
        <header className="mb-12">
          <Link
            className="mb-8 inline-block text-muted transition-colors hover:text-foreground"
            href="/"
            prefetch={true}
          >
            ← Back to Portfolio
          </Link>

          <div className="space-y-4">
            <h1 className="font-normal text-4xl">Posts</h1>
            <p className="text-lg text-muted">
              Technical deep-dives, software engineering insights, and lessons
              learned from building scalable applications.
            </p>
          </div>
        </header>

        {/* Posts List */}
        <div className="space-y-12">
          {posts.map((post) => (
            <article className="space-y-4" key={post.slug}>
              <div className="space-y-2">
                <h2 className="font-normal text-2xl">
                  {post.externalUrl ? (
                    <a
                      className="inline-flex items-center gap-2 transition-colors hover:text-muted"
                      href={post.externalUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {post.kind === 'video' && '▶︎ '}
                      {post.title}
                    </a>
                  ) : (
                    <Link
                      className="inline-flex items-center gap-2 transition-colors hover:text-muted"
                      href={`/posts/${post.slug}`}
                      prefetch={true}
                    >
                      {post.kind === 'video' && '▶︎ '}
                      {post.title}
                    </Link>
                  )}
                </h2>

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
                </div>
              </div>

              <p className="text-muted leading-relaxed">{post.excerpt}</p>

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

              {post.externalUrl ? (
                <a
                  className="inline-block text-foreground transition-colors hover:text-muted"
                  href={post.externalUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Watch video →
                </a>
              ) : (
                <Link
                  className="inline-block text-foreground transition-colors hover:text-muted"
                  href={`/posts/${post.slug}`}
                  prefetch={true}
                >
                  Read more →
                </Link>
              )}
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-muted">No posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
