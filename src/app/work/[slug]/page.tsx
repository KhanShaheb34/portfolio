import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
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
      title: 'Work Experience Not Found',
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
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          {/* Navigation */}
          <div className="mb-8">
            <Link
              className="text-muted-foreground text-sm transition-colors hover:text-foreground"
              href="/work"
            >
              ← Back to Work Experience
            </Link>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h1 className="mb-2 font-bold text-3xl">
                  {experience.position}
                </h1>
                <p className="mb-2 text-muted-foreground text-xl">
                  {experience.company}
                </p>
                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                  <span>{experience.duration}</span>
                  <span>•</span>
                  <span>{experience.type}</span>
                  <span>•</span>
                  <span>{experience.location}</span>
                </div>
              </div>
              <div className="text-sm">
                <span
                  className={`inline-block rounded-full px-3 py-1 font-medium text-xs ${
                    experience.status === 'active'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
                  }`}
                >
                  {experience.status === 'active' ? 'Current' : 'Completed'}
                </span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>{experience.longDescription}</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid gap-12">
            {/* Responsibilities */}
            <section>
              <h2 className="mb-6 font-semibold text-2xl">
                Key Responsibilities
              </h2>
              <ul className="space-y-3">
                {experience.responsibilities.map((responsibility, index) => (
                  <li
                    className="text-muted-foreground leading-relaxed"
                    key={index}
                  >
                    <span className="text-accent">•</span> {responsibility}
                  </li>
                ))}
              </ul>
            </section>

            {/* Technologies */}
            <section>
              <h2 className="mb-6 font-semibold text-2xl">
                Technologies & Tools
              </h2>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    className="rounded-full border border-border bg-muted/40 px-3 py-1 text-sm"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h2 className="mb-6 font-semibold text-2xl">Key Achievements</h2>
              <ul className="space-y-3">
                {experience.achievements.map((achievement, index) => (
                  <li
                    className="text-muted-foreground leading-relaxed"
                    key={index}
                  >
                    <span className="text-accent">✓</span> {achievement}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Footer Navigation */}
          <div className="mt-16 border-border border-t pt-8">
            <div className="flex items-center justify-between">
              <Link
                className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                href="/work"
              >
                ← Back to All Experiences
              </Link>
              <Link
                className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                href="/"
                prefetch
              >
                Back to Portfolio →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
