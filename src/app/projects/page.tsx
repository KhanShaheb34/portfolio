import InnerPage from '@/components/InnerPage';
import ProjectCard from '@/components/ProjectCard';
import SectionLabel from '@/components/SectionLabel';
import { getAllProjects } from '@/lib/projects';

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <InnerPage>
      <section className="space-y-6">
        <SectionLabel as="h1" title="Projects" />
        <p className="text-md text-muted">
          Books, products, games, and a few experiments that earned a page.
        </p>
        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard
              badge={project.badge}
              description={project.description}
              key={project.slug}
              slug={project.slug}
              title={project.title}
            />
          ))}
        </div>
      </section>
    </InnerPage>
  );
}
