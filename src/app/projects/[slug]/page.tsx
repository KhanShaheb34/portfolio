import Link from 'next/link';
import { notFound } from 'next/navigation';
import InnerPage from '@/components/InnerPage';
import SectionLabel from '@/components/SectionLabel';
import WavyLine from '@/components/WavyLine';
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
    <InnerPage backHref="/projects" backLabel="← Projects">
      <section className="space-y-4">
        <SectionLabel as="h1" title="Projects" />
        <div className="flex items-center space-x-2">
          <p className="text-md">{project.title}</p>
          <span className="rounded bg-muted px-2 py-0.5 text-background text-xs">
            {project.badge}
          </span>
        </div>
        <p className="text-muted text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          {project.github && (
            <a href={project.github} rel="noopener noreferrer" target="_blank">
              GitHub ↗
            </a>
          )}
          {project.demo && (
            <a href={project.demo} rel="noopener noreferrer" target="_blank">
              Demo ↗
            </a>
          )}
          {project.live && (
            <a href={project.live} rel="noopener noreferrer" target="_blank">
              Live ↗
            </a>
          )}
        </div>
      </section>

      <WavyLine />

      <section className="space-y-4">
        <SectionLabel as="h2" title="What it is" />
        <p className="text-muted text-sm leading-relaxed">
          {project.longDescription}
        </p>
      </section>

      <WavyLine />

      <section className="space-y-4">
        <SectionLabel as="h2" title="Stack" />
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              className="rounded bg-muted px-2 py-0.5 text-background text-xs"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <WavyLine />

      <section className="space-y-4">
        <SectionLabel as="h2" title="What it does" />
        <ul className="space-y-2">
          {project.features.map((feature, index) => (
            <li className="text-muted text-sm leading-relaxed" key={index}>
              • {feature}
            </li>
          ))}
        </ul>
      </section>

      {project.challenges.length > 0 && (
        <>
          <WavyLine />
          <section className="space-y-4">
            <SectionLabel as="h2" title="What was hard" />
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <li className="text-muted text-sm leading-relaxed" key={index}>
                  • {challenge}
                </li>
              ))}
            </ul>
          </section>
        </>
      )}

      {project.impact.length > 0 && (
        <>
          <WavyLine />
          <section className="space-y-4">
            <SectionLabel as="h2" title="What happened" />
            <ul className="space-y-2">
              {project.impact.map((impact, index) => (
                <li className="text-muted text-sm leading-relaxed" key={index}>
                  • {impact}
                </li>
              ))}
            </ul>
          </section>
        </>
      )}

      <Link className="text-sm" href="/" prefetch={true}>
        Home
      </Link>
    </InnerPage>
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
