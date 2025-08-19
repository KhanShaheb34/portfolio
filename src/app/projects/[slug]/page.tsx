import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getProjectSlugs } from '@/lib/projects';

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-8 py-16">
        {/* Header */}
        <header className="mb-12">
          <Link
            className="mb-8 inline-block text-muted transition-colors hover:text-foreground"
            href="/"
            prefetch={true}
          >
            ← Back to Portfolio
          </Link>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <h1 className="font-normal text-4xl">{project.title}</h1>
              <span className="rounded bg-muted px-3 py-1 text-background text-sm">
                {project.badge}
              </span>
              <span
                className={`rounded px-3 py-1 text-sm ${
                  project.status === 'active'
                    ? 'bg-green-400/20 text-green-400'
                    : 'bg-foreground/20 text-foreground'
                }`}
              >
                {project.status === 'active' ? 'Active' : 'Completed'}
              </span>
            </div>

            <div className="flex items-center space-x-4 text-muted text-sm">
              <time dateTime={project.date}>
                {new Date(project.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                })}
              </time>
            </div>

            <p className="text-lg text-muted leading-relaxed">
              {project.description}
            </p>

            {/* Links */}
            <div className="flex items-center space-x-6">
              {project.github && (
                <a
                  className="flex items-center space-x-2 text-foreground transition-colors hover:text-muted"
                  href={project.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>View on GitHub</span>
                  <span>↗</span>
                </a>
              )}

              {project.demo && (
                <a
                  className="flex items-center space-x-2 text-foreground transition-colors hover:text-muted"
                  href={project.demo}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Live Demo</span>
                  <span>↗</span>
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="space-y-12">
          {/* Overview */}
          <section>
            <h2 className="mb-4 font-normal text-2xl">Overview</h2>
            <p className="text-lg text-muted leading-relaxed">
              {project.longDescription}
            </p>
          </section>

          {/* Technologies */}
          <section>
            <h2 className="mb-4 font-normal text-2xl">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  className="rounded-lg bg-foreground/10 px-3 py-2 text-foreground"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="mb-4 font-normal text-2xl">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li className="flex items-start space-x-3" key={index}>
                  <span className="mt-1 text-muted">•</span>
                  <span className="text-muted leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Challenges */}
          {project.challenges.length > 0 && (
            <section>
              <h2 className="mb-4 font-normal text-2xl">
                Technical Challenges
              </h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li className="flex items-start space-x-3" key={index}>
                    <span className="mt-1 text-muted">•</span>
                    <span className="text-muted leading-relaxed">
                      {challenge}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Impact */}
          {project.impact.length > 0 && (
            <section>
              <h2 className="mb-4 font-normal text-2xl">Impact & Results</h2>
              <ul className="space-y-3">
                {project.impact.map((impact, index) => (
                  <li className="flex items-start space-x-3" key={index}>
                    <span className="mt-1 text-muted">•</span>
                    <span className="text-muted leading-relaxed">{impact}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-16 border-foreground/20 border-t pt-8">
          <div className="flex items-center justify-between">
            <Link
              className="text-muted transition-colors hover:text-foreground"
              href="/"
              prefetch={true}
            >
              ← Back to Portfolio
            </Link>

            <Link
              className="text-muted transition-colors hover:text-foreground"
              href="/projects"
              prefetch={true}
            >
              View All Projects →
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Shakirul Hasan Khan`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
    },
  };
}
