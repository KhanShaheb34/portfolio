import Link from 'next/link';
import experiencesData from '@/data/experiences.json' with { type: 'json' };
import portfolioData from '@/data/portfolio.json' with { type: 'json' };

const MAX_TECHNOLOGIES = 6;

export default function AboutPage() {
  const { intro, academic, socialLinks, hobbies } = portfolioData;
  const experiences = Object.entries(experiencesData);

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
            ← Home
          </Link>

          <div className="space-y-4">
            <h1 className="font-normal text-4xl">About Shakirul</h1>
            <div className="space-y-4">
              {intro.paragraphs.map((paragraph, index) => (
                <p className="text-lg text-muted leading-relaxed" key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Education */}
          <section>
            <h2 className="mb-6 font-normal text-2xl">Education</h2>
            <div className="space-y-4 rounded-lg border border-foreground/20 p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h3 className="font-normal text-xl">
                    {academic.education.degree}
                  </h3>
                  <p className="text-muted">{academic.education.institution}</p>
                  <p className="text-muted text-sm">
                    {academic.education.details}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="mb-6 font-normal text-2xl">Work</h2>
            <div className="space-y-6">
              {experiences.map(([slug, experience]) => (
                <div
                  className="space-y-4 rounded-lg border border-foreground/20 p-6"
                  key={slug}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="font-normal text-xl">
                        <Link href={`/work/${slug}`}>
                          {experience.position}
                        </Link>
                      </h3>
                      <p className="text-muted">{experience.company}</p>
                      <p className="text-muted text-sm">
                        {experience.duration} · {experience.location}
                      </p>
                    </div>
                    {experience.status === 'active' && (
                      <span className="rounded bg-green-400/20 px-3 py-1 text-green-400 text-sm">
                        Active
                      </span>
                    )}
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
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Research & Publications */}
          <section>
            <h2 className="mb-6 font-normal text-2xl">Paper</h2>
            <div className="space-y-4">
              {academic.research.map((research, index) => (
                <div
                  className="space-y-4 rounded-lg border border-foreground/20 p-6"
                  key={index}
                >
                  <div className="space-y-2">
                    <h3 className="font-normal text-lg">
                      {research.url ? (
                        <a
                          href={research.url}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {research.title}
                        </a>
                      ) : (
                        research.title
                      )}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {research.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Teaching */}
          <section>
            <h2 className="mb-6 font-normal text-2xl">Teaching</h2>
            <div className="space-y-4">
              {academic.teaching.map((item, index) => (
                <div
                  className="space-y-2 rounded-lg border border-foreground/20 p-6"
                  key={index}
                >
                  <h3 className="font-normal text-lg">{item.title}</h3>
                  <p className="text-muted">{item.institution}</p>
                  <p className="text-muted text-sm">{item.details}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="mb-6 font-normal text-2xl">
              Certificates and awards
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {academic.certifications.map((cert, index) => (
                <div
                  className="space-y-2 rounded-lg border border-foreground/20 p-4"
                  key={index}
                >
                  <p className="text-muted text-sm">{cert}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Hobbies & Interests */}
          <section>
            <h2 className="mb-6 font-normal text-2xl">Hobbies</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {hobbies.map((hobby, index) => (
                <div className="space-y-2" key={index}>
                  <h3 className="font-normal text-lg">{hobby.title}</h3>
                  <p className="text-muted leading-relaxed">
                    {hobby.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="mb-6 font-normal text-2xl">Say hi</h2>
            <div className="space-y-4">
              <p className="text-lg text-muted leading-relaxed">
                I'm usually building something. A product, a chapter of Montu
                Mia, or a tool I needed the week before. If you want to talk
                about a project or system design in Bengali, say hi.
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    className="flex items-center space-x-2 text-foreground transition-colors hover:text-muted"
                    href={link.href}
                    key={link.text}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>{link.text}</span>
                    <span>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-16 border-foreground/20 border-t pt-8">
          <div className="flex items-center justify-between">
            <Link
              className="text-muted transition-colors hover:text-foreground"
              href="/"
              prefetch={true}
            >
              ← Home
            </Link>

            <div className="flex space-x-6">
              <Link
                className="text-muted transition-colors hover:text-foreground"
                href="/posts"
                prefetch={true}
              >
                Posts
              </Link>
              <Link
                className="text-muted transition-colors hover:text-foreground"
                href="/projects"
                prefetch={true}
              >
                Projects
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export function generateMetadata() {
  return {
    title: 'About Shakirul Hasan Khan',
    description:
      "Software engineer in Bangladesh. I own Peaches at Ramble and write Montu Mia's System Design.",
    openGraph: {
      title: 'About Shakirul Hasan Khan',
      description:
        "Software engineer in Bangladesh. I own Peaches at Ramble and write Montu Mia's System Design.",
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Shakirul Hasan Khan',
      description:
        "Software engineer in Bangladesh. I own Peaches at Ramble and write Montu Mia's System Design.",
    },
  };
}
