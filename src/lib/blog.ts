// Blog utilities for MDX posts in app directory
const posts = [
  {
    slug: 'mermaid-diagrams-demo',
    title: 'Visualizing Complex Concepts with Mermaid Diagrams',
    date: '2025-01-15',
    excerpt:
      'Explore the power of Mermaid diagrams for creating beautiful flowcharts, sequence diagrams, and more directly in your blog posts',
    tags: ['diagrams', 'visualization', 'documentation', 'mermaid'],
    author: 'Shakirul Hasan Khan',
    readingTime: '8 min read',
    hidden: true,
  },
  {
    slug: 'why-not-px',
    title: 'Why Should You Not Use px?',
    date: '2024-01-10',
    excerpt:
      'Exploring Responsive Design: Embracing Flexible CSS Units for a Better Web Experience',
    tags: ['css', 'ui', 'design', 'guidelines'],
    author: 'Shakirul Hasan Khan',
    readingTime: '10 min read',
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
    .filter((post) => !post.hidden)
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
