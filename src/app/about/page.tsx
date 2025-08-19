import Link from 'next/link';
import portfolioData from '@/data/portfolio.json';

export default function AboutPage() {
  const { intro, academic, socialLinks, hobbies } = portfolioData;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-8 py-16">
        {/* Header */}
        <header className="mb-12">
          <Link
            className="mb-8 inline-block text-muted transition-colors hover:text-foreground"
            href="/"
          >
            ← Back to Portfolio
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
                  <p className="text-muted">
                    {academic.education.institution}
                  </p>
                  <p className="text-muted text-sm">
                    {academic.education.details}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="mb-6 font-normal text-2xl">Professional Experience</h2>
            <div className="space-y-6">
              <div className="space-y-4 rounded-lg border border-foreground/20 p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="font-normal text-xl">Software Engineer</h3>
                    <p className="text-muted">Re:cruit</p>
                    <p className="text-muted text-sm">Current Position</p>
                  </div>
                  <span className="rounded bg-green-400/20 px-3 py-1 text-green-400 text-sm">
                    Active
                  </span>
                </div>
                <p className="text-muted leading-relaxed">
                  Building an AI sidekick with React, NextJS, Python and LLMs. 
                  Specializing in ReactJS, NextJS, and TypeScript to create 
                  scalable, user-focused applications with complex design and 
                  performance requirements.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'NextJS', 'TypeScript', 'Python', 'LLMs', 'AI'].map((tech) => (
                    <span
                      className="rounded bg-foreground/10 px-2 py-1 text-foreground text-xs"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4 rounded-lg border border-foreground/20 p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="font-normal text-xl">Full-Stack Developer</h3>
                    <p className="text-muted">Freelance & Personal Projects</p>
                    <p className="text-muted text-sm">2019 - Present</p>
                  </div>
                </div>
                <p className="text-muted leading-relaxed">
                  Developed multiple AI-powered applications including Coterm (Rust CLI tool), 
                  Ramble (meeting transcription), and Re:sume (AI resume builder). 
                  Over 4 years of experience in full-stack development with focus on 
                  performance and user experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Rust', 'React', 'Node.js', 'TypeScript', 'OpenAI API', 'Vercel'].map((tech) => (
                    <span
                      className="rounded bg-foreground/10 px-2 py-1 text-foreground text-xs"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Research & Publications */}
          <section>
            <h2 className="mb-6 font-normal text-2xl">Research & Publications</h2>
            <div className="space-y-4">
              {academic.research.map((research, index) => (
                <div className="space-y-4 rounded-lg border border-foreground/20 p-6" key={index}>
                  <div className="space-y-2">
                    <h3 className="font-normal text-lg">{research.title}</h3>
                    <p className="text-muted leading-relaxed">
                      {research.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="mb-6 font-normal text-2xl">Certifications</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {academic.certifications.map((cert, index) => (
                <div className="space-y-2 rounded-lg border border-foreground/20 p-4" key={index}>
                  <p className="text-muted text-sm">{cert}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Hobbies & Interests */}
          <section>
            <h2 className="mb-6 font-normal text-2xl">Hobbies & Interests</h2>
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
            <h2 className="mb-6 font-normal text-2xl">Get In Touch</h2>
            <div className="space-y-4">
              <p className="text-lg text-muted leading-relaxed">
                I'm always interested in new opportunities and collaborations. 
                Feel free to reach out if you'd like to discuss a project, 
                share ideas, or just connect.
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
            >
              ← Back to Portfolio
            </Link>

            <div className="flex space-x-6">
              <Link
                className="text-muted transition-colors hover:text-foreground"
                href="/posts"
              >
                Read My Blog
              </Link>
              <Link
                className="text-muted transition-colors hover:text-foreground"
                href="/projects"
              >
                View Projects
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
    title: 'About Shakirul Hasan Khan | Software Engineer & AI Developer',
    description: 'Learn more about Shakirul Hasan Khan - Software Engineer with 4+ years experience in full-stack development, AI, and open source contributions.',
    openGraph: {
      title: 'About Shakirul Hasan Khan',
      description: 'Software Engineer with 4+ years experience in full-stack development, AI, and open source contributions.',
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Shakirul Hasan Khan',
      description: 'Software Engineer with 4+ years experience in full-stack development, AI, and open source contributions.',
    },
  };
}