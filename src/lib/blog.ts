// Blog utilities for MDX posts in app directory
const posts = [
  {
    slug: 'montu-mia-system-design',
    title: "Montu Mia's System Design",
    date: '2026-01-01',
    excerpt:
      'A weekly system design book making complex concepts simple for everyone. 2,000+ subscribers, 20,000+ readers.',
    tags: ['System Design', 'Bengali', 'Newsletter', 'Book'],
    author: 'Shakirul Hasan Khan',
    readingTime: 'Weekly',
    kind: 'book' as const,
    externalUrl: 'https://montumia.com',
  },
  {
    slug: 'confusion-about-load-balancers',
    title: 'I confused myself thinking about Load Balancers',
    date: '2025-11-25',
    excerpt:
      'A journey from confusion to clarity about how Load Balancers and DNS work together to route user traffic efficiently.',
    tags: [
      'System Design',
      'Load Balancer',
      'DNS',
      'Networking',
      'Architecture',
    ],
    author: 'Shakirul Hasan Khan',
    readingTime: '3 min read',
    kind: 'post' as const,
  },
  {
    slug: 'mermaid-diagrams-demo',
    title: 'Visualizing Complex Concepts with Mermaid Diagrams',
    date: '2025-11-15',
    excerpt:
      'Explore the power of Mermaid diagrams for creating beautiful flowcharts, sequence diagrams, and more directly in your blog posts',
    tags: ['diagrams', 'visualization', 'documentation', 'mermaid'],
    author: 'Shakirul Hasan Khan',
    readingTime: '8 min read',
    hidden: true,
    kind: 'post' as const,
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
    kind: 'post' as const,
  },
  {
    slug: 'instagram-system-breakdown',
    title: 'Instagram System Breakdown: How they handle 2B users?',
    date: '2025-11-16',
    excerpt:
      'Deep dive into how Instagram designs, scales, and operates their systems to serve billions of users reliably.',
    tags: ['system-design', 'scalability', 'distributed-systems', 'case-study'],
    author: 'Shakirul Hasan Khan',
    readingTime: '1h 40m',
    kind: 'video' as const,
    externalUrl: 'https://interactivecares.com/recorded-events/502',
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
  kind: 'post' | 'video' | 'book';
  externalUrl?: string;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  author: string;
  readingTime: string;
  kind: 'post' | 'video' | 'book';
  externalUrl?: string;
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
      kind: post.kind,
      externalUrl: post.externalUrl,
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
