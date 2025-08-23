import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import experiencesData from '@/data/experiences.json' with { type: 'json' };

interface WorkPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const experience = experiencesData[params.slug as keyof typeof experiencesData];
  
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

export default function WorkExperiencePage({ params }: WorkPageProps) {
  const experience = experiencesData[params.slug as keyof typeof experiencesData];

  if (!experience) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <div className="mb-8">
            <Link 
              href="/work"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Work Experience
            </Link>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{experience.position}</h1>
                <p className="text-xl text-muted-foreground mb-2">
                  {experience.company}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{experience.duration}</span>
                  <span>•</span>
                  <span>{experience.type}</span>
                  <span>•</span>
                  <span>{experience.location}</span>
                </div>
              </div>
              <div className="text-sm">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  experience.status === 'active' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
                }`}>
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
              <h2 className="text-2xl font-semibold mb-6">Key Responsibilities</h2>
              <ul className="space-y-3">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-muted-foreground leading-relaxed">
                    <span className="text-accent">•</span> {responsibility}
                  </li>
                ))}
              </ul>
            </section>

            {/* Technologies */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Technologies & Tools</h2>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-muted text-sm rounded-full border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Key Achievements</h2>
              <ul className="space-y-3">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="text-muted-foreground leading-relaxed">
                    <span className="text-accent">✓</span> {achievement}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Footer Navigation */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <Link 
                href="/work"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back to All Experiences
              </Link>
              <Link 
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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