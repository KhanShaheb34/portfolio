import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import { getProjectSlugs } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shakirul-dev.vercel.app';

  // Get all blog posts
  const posts = getAllPosts();
  const postSitemapEntries = posts.map((post) => {
    // Ensure valid date or use fallback
    const postDate = post.date ? new Date(post.date) : new Date();
    const validDate = Number.isNaN(postDate.getTime()) ? new Date() : postDate;

    return {
      url: `${baseUrl}/posts/${post.slug}`,
      lastModified: validDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    };
  });

  // Get all projects
  const projectSlugs = getProjectSlugs();
  const projectSitemapEntries = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...postSitemapEntries,
    ...projectSitemapEntries,
  ];
}
