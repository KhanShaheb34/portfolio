import Link from 'next/link';
import ExperienceCard from '@/components/ExperienceCard';
import InnerPage from '@/components/InnerPage';
import InterestCard from '@/components/InterestCard';
import SectionLabel from '@/components/SectionLabel';
import SocialLink from '@/components/SocialLink';
import WavyLine from '@/components/WavyLine';
import experiencesData from '@/data/experiences.json' with { type: 'json' };
import portfolioData from '@/data/portfolio.json' with { type: 'json' };

export default function AboutPage() {
  const { intro, academic, socialLinks, hobbies } = portfolioData;
  const experiences = Object.entries(experiencesData);

  return (
    <InnerPage>
      <section className="space-y-6">
        <SectionLabel as="h1" title="About" />
        <div className="space-y-4 text-md">
          {intro.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <WavyLine />

      <section className="space-y-6">
        <SectionLabel as="h2" title="Education" />
        <div className="space-y-1">
          <p className="text-md">{academic.education.degree}</p>
          <p className="text-muted text-sm">{academic.education.institution}</p>
          <p className="text-muted text-sm">{academic.education.details}</p>
        </div>
      </section>

      <WavyLine />

      <section className="space-y-6">
        <SectionLabel as="h2" title="Work" />
        <div className="space-y-8">
          {experiences.map(([slug, experience]) => (
            <ExperienceCard
              company={experience.company}
              description={experience.description}
              duration={experience.duration}
              key={slug}
              position={experience.position}
              slug={slug}
            />
          ))}
        </div>
      </section>

      <WavyLine />

      <section className="space-y-6">
        <SectionLabel as="h2" title="Paper" />
        <div className="space-y-4">
          {academic.research.map((research, index) => (
            <div className="space-y-1" key={index}>
              {research.url ? (
                <a
                  className="text-md"
                  href={research.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {research.title}
                </a>
              ) : (
                <p className="text-md">{research.title}</p>
              )}
              <p className="text-muted text-sm">{research.description}</p>
            </div>
          ))}
        </div>
      </section>

      <WavyLine />

      <section className="space-y-6">
        <SectionLabel as="h2" title="Teaching" />
        <div className="space-y-4">
          {academic.teaching.map((item, index) => (
            <div className="space-y-1" key={index}>
              <p className="text-md">{item.title}</p>
              <p className="text-muted text-sm">{item.institution}</p>
              <p className="text-muted text-sm">{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      <WavyLine />

      <section className="space-y-6">
        <SectionLabel as="h2" title="Certificates and awards" />
        <div className="space-y-2">
          {academic.certifications.map((cert, index) => (
            <p className="text-muted text-sm" key={index}>
              • {cert}
            </p>
          ))}
        </div>
      </section>

      <WavyLine />

      <section className="space-y-6">
        <SectionLabel as="h2" title="Hobbies" />
        <div className="space-y-4">
          {hobbies.map((hobby, index) => (
            <InterestCard
              description={hobby.description}
              href={hobby.href}
              key={index}
              title={hobby.title}
            />
          ))}
        </div>
      </section>

      <WavyLine />

      <section className="space-y-6">
        <SectionLabel as="h2" title="Say hi" />
        <p className="text-md">
          I'm usually building something. A product, a chapter of Montu Mia, or
          a tool I needed the week before. If you want to talk about a project
          or system design in Bengali, say hi.
        </p>
        <div className="space-y-2">
          {socialLinks.map((link) => (
            <SocialLink
              href={link.href}
              icon={link.icon}
              key={link.text}
              text={link.text}
            />
          ))}
        </div>
      </section>

      <div className="flex space-x-6 text-sm">
        <Link href="/posts" prefetch={true}>
          Posts
        </Link>
        <Link href="/projects" prefetch={true}>
          Projects
        </Link>
      </div>
    </InnerPage>
  );
}

export function generateMetadata() {
  return {
    title: 'About Shakirul Hasan Khan',
    description:
      "Software engineer in Bangladesh. I work on Peaches at Ramble and write Montu Mia's System Design.",
    openGraph: {
      title: 'About Shakirul Hasan Khan',
      description:
        "Software engineer in Bangladesh. I work on Peaches at Ramble and write Montu Mia's System Design.",
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Shakirul Hasan Khan',
      description:
        "Software engineer in Bangladesh. I work on Peaches at Ramble and write Montu Mia's System Design.",
    },
  };
}
