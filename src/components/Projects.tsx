import projects from '@/content/projects.json' with { type: 'json' };
import { WavyDivider } from './WavyDivider';

type Link = { label: string; url: string };
type Project = {
  title: string;
  type: 'APP' | 'PRODUCT' | 'TUTORIAL' | 'LIB' | string;
  summary: string;
  links: Link[];
};

export const Projects = () => {
  const items: Project[] = projects;
  return (
    <div className="grid grid-cols-1 gap-8 md:col-span-3 md:grid-cols-3">
      <div className="text-sm text-white/60 uppercase tracking-widest">
        Assorted Projects
      </div>
      <WavyDivider />
      <div className="space-y-6">
        {items.map((p) => (
          <div className="group" key={p.title}>
            <div className="flex items-center gap-2">
              <h3 className="font-medium">{p.title}</h3>
              <span className="rounded-full border border-white/20 px-2 py-0.5 text-[10px] text-white/70">
                {p.type}
              </span>
            </div>
            <p className="mt-1 text-sm text-white/70">{p.summary}</p>
            <div className="mt-2 flex gap-3 text-white/80 text-xs">
              {p.links.map((l) => (
                <a
                  className="underline"
                  href={l.url}
                  key={l.url}
                  rel="noopener"
                  target="_blank"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
