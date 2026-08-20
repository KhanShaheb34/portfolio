import Column from '@/components/Column';
import ExperienceCard from '@/components/ExperienceCard';
import InterestCard from '@/components/InterestCard';
import PostCard from '@/components/PostCard';
import ProjectCard from '@/components/ProjectCard';
import ScrollArrows from '@/components/ScrollArrows';
import Section from '@/components/Section';
import SocialLink from '@/components/SocialLink';
import VerticalSeparator from '@/components/VerticalSeparator';
import WavyLine from '@/components/WavyLine';
import experiencesData from '@/data/experiences.json' with { type: 'json' };
import portfolioData from '@/data/portfolio.json' with { type: 'json' };
import { getAllPosts } from '@/lib/blog';
import { getFeaturedProjects } from '@/lib/projects';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Shakirul Hasan Khan',
  jobTitle: 'Software Engineer',
  description:
    "Software engineer from Bangladesh. I work at Ramble, write Montu Mia's System Design, and I'm starting Thinking Lab in Sylhet.",
  url: 'https://shakirul.dev',
  sameAs: [
    'https://github.com/KhanShaheb34',
    'https://linkedin.com/in/shakirulhasan',
    'https://montumia.com',
    'https://x.com/_khanshaheb',
  ],
  knowsAbout: [
    'Software Engineering',
    'Artificial Intelligence',
    'System Design',
    'React',
    'NextJS',
    'TypeScript',
    'Rust',
    'Python',
    'Swift',
    'Full-Stack Development',
    'Technical Writing',
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Shahjalal University of Science & Technology',
    degree: 'B.Sc. (Engg.) Software Engineering',
  },
  worksFor: [
    {
      '@type': 'Organization',
      name: 'Ramble',
      url: 'https://www.ramble.ai/',
    },
    {
      '@type': 'Organization',
      name: 'Thinking Lab',
      url: 'https://thinkinglab.info',
    },
  ],
};

export default function Home() {
  const posts = getAllPosts();

  const projectsArray = getFeaturedProjects();
  const experiencesEntries = Object.entries(experiencesData);

  return (
    <>
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <Setting data for search engine>
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />
      <main className="relative h-screen bg-background text-foreground">
        {/* Desktop: Horizontal scrolling container, Mobile: Vertical scrolling */}
        <div
          className="md:scrollbar-hide scrollbar-hide block h-full overflow-hidden overflow-y-auto md:flex md:h-full md:snap-x md:snap-mandatory md:overflow-x-auto"
          data-scroll-container
        >
          {/* Column 1: INTRO */}
          <Column>
            <Section title="INTRO">
              <div className="space-y-4 text-md">
                {portfolioData.intro.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </Section>

            <WavyLine />

            <Section title="LINKS">
              <div className="space-y-2">
                {portfolioData.socialLinks.map((link, index) => (
                  <SocialLink
                    href={link.href}
                    icon={link.icon}
                    key={index}
                    text={link.text}
                  />
                ))}
                <SocialLink href="/about" icon="user" text="About" />
                <SocialLink href="/resume" icon="resume" text="Resume" />
              </div>
            </Section>
            <WavyLine hideOnDesktop />
          </Column>

          <VerticalSeparator />

          {/* Column 2: PROJECTS */}
          <Column>
            <Section title="PROJECTS">
              <div className="space-y-8">
                {projectsArray.map((project, index) => (
                  <ProjectCard
                    badge={project.badge}
                    description={project.description}
                    key={index}
                    slug={project.slug}
                    title={project.title}
                  />
                ))}
              </div>
            </Section>
            <WavyLine hideOnDesktop />
          </Column>

          <VerticalSeparator />

          {/* Column 3: ACADEMIC & WORK EXPERIENCE */}
          <Column>
            <Section title="ACADEMIC">
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-md">Education</h3>
                  <div className="space-y-2">
                    <p className="font-medium">
                      {portfolioData.academic.education.degree}
                    </p>
                    <p className="text-muted text-sm">
                      {portfolioData.academic.education.institution}
                    </p>
                    <p className="text-muted text-sm">
                      {portfolioData.academic.education.details}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-md">Research</h3>
                  <div className="space-y-4">
                    {portfolioData.academic.research.map((item, index) => (
                      <div key={index}>
                        {item.url ? (
                          <a
                            className="font-medium"
                            href={item.url}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {item.title}
                          </a>
                        ) : (
                          <p className="font-medium">{item.title}</p>
                        )}
                        <p className="text-muted text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-md">Teaching</h3>
                  <div className="space-y-4">
                    {portfolioData.academic.teaching.map((item, index) => (
                      <div key={index}>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-muted text-sm">{item.institution}</p>
                        <p className="text-muted text-sm">{item.details}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-md">Certificates and awards</h3>
                  <div className="space-y-2">
                    {portfolioData.academic.certifications.map(
                      (cert, index) => (
                        <p className="text-muted text-sm" key={index}>
                          • {cert}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
            </Section>

            <WavyLine />

            <Section title="WORK">
              <div className="space-y-6">
                {experiencesEntries.map(([slug, experience]) => (
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
            </Section>
            <WavyLine hideOnDesktop />
          </Column>

          <VerticalSeparator />

          {/* Column 4: WRITING & TALKS */}
          <Column>
            <Section title="WRITING">
              <div className="space-y-4">
                {posts.map((post, index) => (
                  <PostCard
                    date={post.date}
                    href={post.externalUrl ?? `/posts/${post.slug}`}
                    key={index}
                    kind={post.kind}
                    title={post.title}
                  />
                ))}
              </div>
            </Section>

            <WavyLine />

            <Section title="INTERESTS">
              <div className="space-y-4">
                {portfolioData.interests.map((interest, index) => (
                  <div key={index}>
                    <h3 className="text-md">{interest.title}</h3>
                    <p className="text-muted text-sm">{interest.description}</p>
                  </div>
                ))}
              </div>
            </Section>

            <WavyLine />

            <Section title="HOBBIES">
              <div className="space-y-4">
                {portfolioData.hobbies.map((hobby, index) => (
                  <InterestCard
                    description={hobby.description}
                    href={hobby.href}
                    key={index}
                    title={hobby.title}
                  />
                ))}
              </div>
            </Section>
          </Column>
        </div>

        {/* Fade gradient to suggest more content (desktop only) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-16 bg-gradient-to-l from-background to-transparent md:block" />

        <ScrollArrows />
      </main>
    </>
  );
}
