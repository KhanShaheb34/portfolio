import Column from '@/components/Column';
import InterestCard from '@/components/InterestCard';
import OpenSourceCard from '@/components/OpenSourceCard';
import PostCard from '@/components/PostCard';
import ProjectCard from '@/components/ProjectCard';
import Section from '@/components/Section';
import SocialLink from '@/components/SocialLink';
import VerticalSeparator from '@/components/VerticalSeparator';
import WavyLine from '@/components/WavyLine';
import portfolioData from '@/data/portfolio.json' with { type: 'json' };

export default function Home() {
  return (
    <main className="h-screen bg-background text-foreground">
      {/* Desktop: Horizontal scrolling container, Mobile: Vertical scrolling */}
      <div className="md:scrollbar-hide scrollbar-hide block h-full overflow-hidden overflow-y-auto md:flex md:h-full md:snap-x md:snap-mandatory md:overflow-x-auto">
        {/* Column 1: INTRO */}
        <Column>
          <Section title="INTRO">
            <div className="space-y-4 text-lg">
              {portfolioData.intro.paragraphs.map((paragraph, index) => (
                <p className={index === 2 ? 'text-muted' : ''} key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </Section>

          <WavyLine />

          <Section title="LINKS" titleSize="lg">
            <div className="space-y-2">
              {portfolioData.socialLinks.map((link, index) => (
                <SocialLink
                  href={link.href}
                  icon={link.icon}
                  key={index}
                  text={link.text}
                />
              ))}
            </div>
          </Section>
        </Column>

        <VerticalSeparator />

        {/* Column 2: ASSORTED PROJECTS */}
        <Column>
          <Section title="ASSORTED PROJECTS">
            <div className="space-y-8">
              {portfolioData.projects.map((project, index) => (
                <ProjectCard
                  badge={project.badge}
                  description={project.description}
                  key={index}
                  title={project.title}
                />
              ))}
            </div>
          </Section>

          <WavyLine />

          <Section title="OPEN SOURCE" titleSize="lg">
            <div className="space-y-6">
              {portfolioData.openSource.map((repo, index) => (
                <OpenSourceCard
                  description={repo.description}
                  href={repo.href}
                  key={index}
                  name={repo.name}
                  stars={repo.stars}
                />
              ))}
            </div>
          </Section>
        </Column>

        <VerticalSeparator />

        {/* Column 3: POSTS */}
        <Column>
          <Section title="POSTS">
            <div className="space-y-4">
              {portfolioData.posts.map((post, index) => (
                <PostCard
                  date={post.date}
                  href={post.href}
                  key={index}
                  title={post.title}
                />
              ))}
            </div>
          </Section>

          <WavyLine />

          <Section title="INTERESTS" titleSize="lg">
            <div className="space-y-4">
              {portfolioData.interests.map((interest, index) => (
                <div key={index}>
                  <h3 className="text-lg">{interest.title}</h3>
                  <p className="text-muted text-sm">{interest.description}</p>
                </div>
              ))}
            </div>
          </Section>
        </Column>

        <VerticalSeparator />

        {/* Column 4: ACADEMIC */}
        <Column>
          <Section title="ACADEMIC">
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg">Education</h3>
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
                <h3 className="mb-2 text-lg">Research</h3>
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
                <h3 className="mb-2 text-lg">Certifications</h3>
                <div className="space-y-2">
                  {portfolioData.academic.certifications.map((cert, index) => (
                    <p className="text-muted text-sm" key={index}>
                      • {cert}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          <WavyLine />

          <Section title="HOBBIES" titleSize="lg">
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
    </main>
  );
}
