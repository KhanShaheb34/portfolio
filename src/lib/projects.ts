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
  live?: string | null;
  images: string[];
  challenges: string[];
  impact: string[];
  status: 'active' | 'completed' | 'archived';
};

export interface ProjectWithSlug extends Project {
  slug: string;
}

export function getAllProjects(): ProjectWithSlug[] {
  return Object.entries(projectsData).map(([slug, project]) => ({
    ...project,
    slug,
    status: project.status as 'active' | 'completed' | 'archived',
  }));
}

export function getProjectBySlug(slug: string): ProjectWithSlug | null {
  const project = projectsData[slug as keyof typeof projectsData];
  if (!project) {
    return null;
  }

  return {
    ...project,
    slug,
    status: project.status as 'active' | 'completed' | 'archived',
  };
}

export function getProjectSlugs(): string[] {
  return Object.keys(projectsData);
}
