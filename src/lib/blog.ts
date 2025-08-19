// Blog utilities for MDX posts in app directory
const posts = [
  {
    slug: 'coterm-development',
    title: 'Building AI-Powered Terminal Tools with Rust',
    date: '2023-05-15',
    excerpt:
      "How I built Coterm, a Rust-based terminal copilot that uses OpenAI's API to generate CLI commands from natural language descriptions.",
    tags: ['rust', 'ai', 'cli', 'openai'],
    author: 'Shakirul Hasan Khan',
    readingTime: '8 min read',
  },
  {
    slug: 'react-scalability',
    title: 'Creating Scalable React Applications',
    date: '2023-03-20',
    excerpt:
      'Best practices and patterns for building maintainable React applications at scale, with insights from real-world projects.',
    tags: ['react', 'javascript', 'architecture', 'scalability'],
    author: 'Shakirul Hasan Khan',
    readingTime: '6 min read',
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  author: string;
  content: string;
  readingTime: string;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  author: string;
  readingTime: string;
};

export function getAllPosts(): BlogPostMeta[] {
  return posts
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      date: post.date,
      excerpt: post.excerpt,
      tags: post.tags,
      author: post.author,
      readingTime: post.readingTime,
    }))
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      }
      return -1;
    });
}

export function getPostBySlug(slug: string): BlogPost | null {
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return null;
  }

  return {
    ...post,
    content: '', // Content is now in MDX files
  };
}

export function getPostSlugs(): string[] {
  return posts.map((post) => post.slug);
}
