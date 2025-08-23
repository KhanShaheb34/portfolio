import Link from 'next/link';
import experiencesData from '@/data/experiences.json' with { type: 'json' };

const MAX_TECHNOLOGIES = 8;

export default function WorkPage() {
  const experiences = Object.entries(experiencesData);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <Link
              className="mb-6 inline-block text-muted-foreground text-sm transition-colors hover:text-foreground"
              href="/"
            >
              ← Back to Portfolio
            </Link>
            <h1 className="mb-4 font-bold text-3xl">Work Experience</h1>
            <p className="text-lg text-muted-foreground">
              My professional journey spanning 4+ years in software engineering
            </p>
          </div>

          {/* Experiences List */}
          <div className="space-y-8">
            {experiences.map(([slug, experience]) => (
              <article
                className="space-y-4 rounded-lg border border-foreground/20 p-6 transition-colors hover:border-foreground/40"
                key={slug}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h2 className="font-normal text-xl">
                      <Link
                        className="transition-colors hover:text-muted"
                        href={`/work/${slug}`}
                        prefetch={true}
                      >
                        {experience.position}
                      </Link>
                    </h2>
                    <span className="rounded bg-muted px-2 py-1 text-background text-xs">
                      {experience.duration}
                    </span>
                  </div>

                  <Link
                    className="text-muted text-sm"
                    href={experience.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {experience.company}, {experience.location}
                  </Link>
                </div>

                <p className="text-muted leading-relaxed">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies
                    .slice(0, MAX_TECHNOLOGIES)
                    .map((tech) => (
                      <span
                        className="rounded bg-foreground/10 px-2 py-1 text-foreground text-xs"
                        key={tech}
                      >
                        {tech}
                      </span>
                    ))}
                  {experience.technologies.length > MAX_TECHNOLOGIES && (
                    <span className="px-2 py-1 text-muted text-xs">
                      +{experience.technologies.length - MAX_TECHNOLOGIES} more
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-4 pt-2 align-bottom">
                  <Link
                    className="text-foreground transition-colors hover:text-muted"
                    href={`/work/${slug}`}
                    prefetch={true}
                  >
                    View Details →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
