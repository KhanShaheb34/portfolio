import Link from 'next/link';
import { getAllProjects } from '@/lib/projects';

export default function ProjectsPage() {
  const projects = getAllProjects();
  const MAX_TECHNOLOGIES = 3;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-8 py-16">
        {/* Header */}
        <header className="mb-12">
          <Link
            className="mb-8 inline-block text-muted transition-colors hover:text-foreground"
            href="/"
          >
            ← Back to Portfolio
          </Link>

          <div className="space-y-4">
            <h1 className="font-normal text-4xl">Projects</h1>
            <p className="text-lg text-muted">
              A collection of applications, tools, and research projects
              showcasing full-stack development, AI integration, and innovative
              problem-solving.
            </p>
          </div>
        </header>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              className="space-y-4 rounded-lg border border-foreground/20 p-6 transition-colors hover:border-foreground/40"
              key={project.slug}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="font-normal text-xl">
                    <Link
                      className="transition-colors hover:text-muted"
                      href={`/projects/${project.slug}`}
                    >
                      {project.title}
                    </Link>
                  </h2>
                  <span className="rounded bg-muted px-2 py-1 text-background text-xs">
                    {project.badge}
                  </span>
                </div>

                <div className="flex items-center space-x-4 text-muted text-sm">
                  <time dateTime={project.date}>
                    {new Date(project.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                    })}
                  </time>
                  <span>•</span>
                  <span
                    className={
                      project.status === 'active'
                        ? 'text-green-400'
                        : 'text-muted'
                    }
                  >
                    {project.status === 'active' ? 'Active' : 'Completed'}
                  </span>
                </div>
              </div>

              <p className="text-muted leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, MAX_TECHNOLOGIES).map((tech) => (
                  <span
                    className="rounded bg-foreground/10 px-2 py-1 text-foreground text-xs"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > MAX_TECHNOLOGIES && (
                  <span className="px-2 py-1 text-muted text-xs">
                    +{project.technologies.length - MAX_TECHNOLOGIES} more
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-4 pt-2">
                <Link
                  className="text-foreground transition-colors hover:text-muted"
                  href={`/projects/${project.slug}`}
                >
                  View Details →
                </Link>

                {project.github && (
                  <a
                    className="text-muted transition-colors hover:text-foreground"
                    href={project.github}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    className="text-muted transition-colors hover:text-foreground"
                    href={project.demo}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-muted">
              No projects yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
