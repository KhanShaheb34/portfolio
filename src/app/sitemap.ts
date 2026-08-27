import type { MetadataRoute } from 'next';
import experiencesData from '@/data/experiences.json' with { type: 'json' };
import { getAllPosts } from '@/lib/blog';
import { getProjectSlugs } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shakirul.com';

  const posts = getAllPosts();
  const postSitemapEntries = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const projectSlugs = getProjectSlugs();
  const projectSitemapEntries = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const workSitemapEntries = Object.keys(experiencesData).map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...postSitemapEntries,
    ...projectSitemapEntries,
    ...workSitemapEntries,
  ];
}
