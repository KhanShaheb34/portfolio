type SectionLabelProps = {
  title: string;
  as?: 'p' | 'h1' | 'h2';
};

export default function SectionLabel({
  title,
  as: Tag = 'p',
}: SectionLabelProps) {
  return (
    <Tag className="border-accent/60 border-l-8 pl-2 font-bold text-accent/60 text-xs uppercase">
      {title}
    </Tag>
  );
}
