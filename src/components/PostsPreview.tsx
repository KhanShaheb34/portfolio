import Link from 'next/link';
import posts from '@/content/posts-index.json' with { type: 'json' };
import { WavyDivider } from './WavyDivider';

type Post = { slug: string; title: string; date: string };
const PREVIEW_COUNT = 5;

export const PostsPreview = () => {
  const items: Post[] = posts.slice(0, PREVIEW_COUNT);
  return (
    <div className="grid grid-cols-1 gap-8 md:col-span-3 md:grid-cols-3">
      <div className="text-sm text-white/60 uppercase tracking-widest">
        Posts
      </div>
      <WavyDivider />
      <div className="space-y-3">
        {items.map((p) => (
          <div
            className="flex items-baseline justify-between gap-4"
            key={p.slug}
          >
            <Link className="underline" href={`/posts/${p.slug}`}>
              {p.title}
            </Link>
            <span className="text-white/50 text-xs">
              {new Date(p.date).toLocaleDateString()}
            </span>
          </div>
        ))}
        <div className="pt-2">
          <Link className="text-white/80 underline" href="/posts">
            All posts →
          </Link>
        </div>
      </div>
    </div>
  );
};
