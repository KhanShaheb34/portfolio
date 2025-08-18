import repos from '@/content/open-source.json' with { type: 'json' };
import { WavyDivider } from './WavyDivider';

type Repo = { name: string; description: string; url: string };

export const OpenSource = () => {
  const items: Repo[] = repos;
  return (
    <div className="grid grid-cols-1 gap-8 md:col-span-3 md:grid-cols-3">
      <div className="text-sm text-white/60 uppercase tracking-widest">
        Open Source
      </div>
      <WavyDivider />
      <div className="space-y-4">
        {items.map((r) => (
          <div key={r.url}>
            <a
              className="font-medium underline"
              href={r.url}
              rel="noopener"
              target="_blank"
            >
              {r.name}
            </a>
            <p className="text-sm text-white/70">{r.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
