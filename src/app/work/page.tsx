import Link from 'next/link';
import experiencesData from '@/data/experiences.json' with { type: 'json' };

export default function WorkPage() {
  const experiences = Object.entries(experiencesData);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link 
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block"
            >
              ← Back to Portfolio
            </Link>
            <h1 className="text-3xl font-bold mb-4">Work Experience</h1>
            <p className="text-muted-foreground text-lg">
              My professional journey spanning 4+ years in software engineering
            </p>
          </div>

          {/* Experiences List */}
          <div className="space-y-8">
            {experiences.map(([slug, experience]) => (
              <Link
                key={slug}
                href={`/work/${slug}`}
                className="block group p-6 rounded-lg border border-border hover:border-accent/50 transition-all duration-200 hover:bg-muted/30"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold group-hover:text-accent transition-colors">
                      {experience.position}
                    </h2>
                    <p className="text-muted-foreground">
                      {experience.company} • {experience.duration} • {experience.type}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {experience.location}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}