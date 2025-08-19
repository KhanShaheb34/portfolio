import projectsData from '@/data/projects.json' with { type: 'json' };

export type Project = {
  title: string;
  badge: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  github?: string | null;
  demo?: string | null;
  images: string[];
  challenges: string[];
  impact: string[];
  date: string;
  status: 'active' | 'completed' | 'archived';
};

export interface ProjectWithSlug extends Project {
  slug: string;
}

export function getAllProjects(): ProjectWithSlug[] {
  return Object.entries(projectsData)
    .map(([slug, project]) => ({
      slug,
      ...project,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getProjectBySlug(slug: string): ProjectWithSlug | null {
  const project = projectsData[slug as keyof typeof projectsData];
  if (!project) {
    return null;
  }

  return {
    slug,
    ...project,
  };
}

export function getProjectSlugs(): string[] {
  return Object.keys(projectsData);
}
