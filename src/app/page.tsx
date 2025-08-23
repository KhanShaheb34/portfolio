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
import projectsData from '@/data/projects.json' with { type: 'json' };
import { getAllPosts } from '@/lib/blog';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Shakirul Hasan Khan',
  jobTitle: 'Software Engineer',
  description:
    'Software Engineer with 4+ years experience in full-stack development, AI, and open source. Currently building AI-powered applications with React, NextJS, and Rust.',
  url: 'https://shakirul.dev',
  sameAs: [
    'https://github.com/KhanShaheb34',
    'https://linkedin.com/in/shakirulhasan',
    'https://x.com/_khanshaheb',
  ],
  knowsAbout: [
    'Software Engineering',
    'Artificial Intelligence',
    'React',
    'NextJS',
    'TypeScript',
    'Rust',
    'Python',
    'Full-Stack Development',
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Shahjalal University of Science & Technology',
    degree: 'B.Sc. (Engg.) Software Engineering',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Re:cruit',
  },
};

export default function Home() {
  const posts = getAllPosts();

  const projectsArray = Object.values(projectsData);
  const experiencesArray = Object.values(experiencesData);

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
          <Column index={0}>
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
              </div>
            </Section>
            <WavyLine hideOnDesktop />
          </Column>

          <VerticalSeparator />

          {/* Column 2: ASSORTED PROJECTS */}
          <Column index={1}>
            <Section title="ASSORTED PROJECTS">
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

            <WavyLine />

            <Section title="WORK EXPERIENCE">
              <div className="space-y-6">
                {experiencesArray.map((experience, index) => {
                  const slug = Object.keys(experiencesData)[index];
                  return (
                    <ExperienceCard
                      company={experience.company}
                      description={experience.description}
                      duration={experience.duration}
                      key={index}
                      position={experience.position}
                      slug={slug}
                    />
                  );
                })}
              </div>
            </Section>
            <WavyLine hideOnDesktop />
          </Column>

          <VerticalSeparator />

          {/* Column 4: ACADEMIC */}
          <Column index={2}>
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
                        <p className="font-medium">{item.title}</p>
                        <p className="text-muted text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-md">Certifications & Awards</h3>
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

            <WavyLine hideOnDesktop />
          </Column>

          <VerticalSeparator />

          {/* Column 3: POSTS */}
          <Column index={3}>
            <Section title="POSTS">
              <div className="space-y-4">
                {posts.map((post, index) => (
                  <PostCard
                    date={post.date}
                    href={`/posts/${post.slug}`}
                    key={index}
                    title={post.title}
                  />
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
