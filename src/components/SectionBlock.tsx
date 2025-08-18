type Props = { title: string; children?: React.ReactNode };

export const SectionBlock = ({ title, children }: Props) => (
  <section>
    <h2 className="mb-4 text-white/60 text-xs uppercase tracking-[0.2em]">
      {title}
    </h2>
    {children}
  </section>
);
