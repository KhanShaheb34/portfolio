import InnerPage from '@/components/InnerPage';
import PostCard from '@/components/PostCard';
import SectionLabel from '@/components/SectionLabel';
import { getAllPosts } from '@/lib/blog';

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <InnerPage>
      <section className="space-y-6">
        <SectionLabel as="h1" title="Posts" />
        <p className="text-md text-muted">
          A book, a talk, and a couple of posts.
        </p>
        <div className="space-y-6">
          {posts.map((post) => (
            <div className="space-y-2" key={post.slug}>
              <PostCard
                date={post.date}
                href={post.externalUrl ?? `/posts/${post.slug}`}
                kind={post.kind}
                title={post.title}
              />
              <p className="text-muted text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          ))}
        </div>
      </section>
    </InnerPage>
  );
}
