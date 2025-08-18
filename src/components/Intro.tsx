import { WavyDivider } from './WavyDivider';

const introCopy = `I am Shakirul Hasan and this is my website.
I ship a lot of UI.

I’ve enjoyed React, Next.js, TypeScript, Tailwind, and a bit of Node.
But really, good UX is language‑agnostic.

Lately, I’ve been shipping trading dashboards, AI/voice toys, and tiny libraries.`;

export const Intro = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:col-span-3 md:grid-cols-3">
      <div className="text-sm text-white/60 uppercase tracking-widest">
        Intro
      </div>
      <WavyDivider />
      <div className="whitespace-pre-wrap leading-8">
        {introCopy}
        <div className="mt-6 flex gap-4 text-sm text-white/80">
          <a
            className="underline"
            href="https://github.com/khanshaheb34"
            rel="noopener"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="underline"
            href="https://www.linkedin.com/in/shakirulhasan/"
            rel="noopener"
            target="_blank"
          >
            LinkedIn
          </a>
          <a className="underline" href="mailto:shakirulhkhan@gmail.com">
            Email
          </a>
        </div>
      </div>
    </div>
  );
};
