import ExperienceCard from '@/components/ExperienceCard';
import InnerPage from '@/components/InnerPage';
import SectionLabel from '@/components/SectionLabel';
import experiencesData from '@/data/experiences.json' with { type: 'json' };

export default function WorkPage() {
  const experiences = Object.entries(experiencesData);

  return (
    <InnerPage>
      <section className="space-y-6">
        <SectionLabel as="h1" title="Work" />
        <p className="text-md text-muted">
          Ramble is the day job. Thinking Lab is a startup with friends in
          Sylhet. Then a completed founding role, teaching, and the older jobs.
        </p>
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
    </InnerPage>
  );
}
