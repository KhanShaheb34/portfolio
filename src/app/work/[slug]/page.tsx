import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import InnerPage from '@/components/InnerPage';
import SectionLabel from '@/components/SectionLabel';
import WavyLine from '@/components/WavyLine';
import experiencesData from '@/data/experiences.json' with { type: 'json' };

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = experiencesData[slug as keyof typeof experiencesData];

  if (!experience) {
    return {
      title: 'Work not found',
    };
  }

  return {
    title: `${experience.position} at ${experience.company} | Shakirul Hasan Khan`,
    description: experience.description,
    keywords: experience.technologies,
  };
}

export function generateStaticParams() {
  return Object.keys(experiencesData).map((slug) => ({
    slug,
  }));
}

export default async function WorkExperiencePage({ params }: WorkPageProps) {
  const { slug } = await params;
  const experience = experiencesData[slug as keyof typeof experiencesData];

  if (!experience) {
    notFound();
  }

  return (
    <InnerPage backHref="/work" backLabel="← Work">
      <section className="space-y-4">
        <SectionLabel as="h1" title="Work" />
        <div className="space-y-1">
          <p className="text-md">{experience.position}</p>
          {experience.link ? (
            <Link
              className="text-muted text-sm"
              href={experience.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              {experience.company}
            </Link>
          ) : (
            <p className="text-muted text-sm">{experience.company}</p>
          )}
          <p className="text-muted text-sm">
            {experience.duration} · {experience.location}
            {experience.status === 'active' ? ' · Current' : ''}
          </p>
        </div>
        <p className="text-muted text-sm leading-relaxed">
          {experience.longDescription}
        </p>
      </section>

      <WavyLine />

      <section className="space-y-4">
        <SectionLabel as="h2" title="What I did" />
        <ul className="space-y-2">
          {experience.responsibilities.map((responsibility, index) => (
            <li className="text-muted text-sm leading-relaxed" key={index}>
              • {responsibility}
            </li>
          ))}
        </ul>
      </section>

      <WavyLine />

      <section className="space-y-4">
        <SectionLabel as="h2" title="Stack" />
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
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
        <SectionLabel as="h2" title="What came of it" />
        <ul className="space-y-2">
          {experience.achievements.map((achievement, index) => (
            <li className="text-muted text-sm leading-relaxed" key={index}>
              • {achievement}
            </li>
          ))}
        </ul>
      </section>

      <Link className="text-sm" href="/" prefetch>
        Home
      </Link>
    </InnerPage>
  );
}
