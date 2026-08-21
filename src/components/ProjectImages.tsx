import Image from 'next/image';

type ProjectImagesProps = {
  title: string;
  images: string[];
};

const FILE_LABELS: Record<string, string> = {
  homepage: 'homepage',
  chapter: 'chapter',
  usage: 'usage tab',
  stats: 'stats tab',
  models: 'models tab',
  demo: 'terminal demo',
};

const COMPACT_COUNT = 3;
const COMPACT_WIDTH = 984;
const COMPACT_HEIGHT = 1224;
const WIDE_WIDTH = 1280;
const WIDE_HEIGHT = 800;

function screenshotName(src: string): string {
  const slash = src.lastIndexOf('/');
  const name = slash === -1 ? src : src.slice(slash + 1);
  const dot = name.lastIndexOf('.');
  return dot === -1 ? name : name.slice(0, dot);
}

function screenshotAlt(title: string, src: string): string {
  const file = screenshotName(src);
  const label = FILE_LABELS[file] ?? file.split('-').join(' ');
  return `${title}, ${label}`;
}

export default function ProjectImages({ title, images }: ProjectImagesProps) {
  if (images.length === 0) {
    return null;
  }

  const compact = images.length >= COMPACT_COUNT;

  return (
    <div
      className={
        compact ? 'grid grid-cols-1 gap-3 sm:grid-cols-3' : 'space-y-3'
      }
    >
      {images.map((src) => (
        <Image
          alt={screenshotAlt(title, src)}
          className="h-auto w-full rounded border border-muted/30"
          height={compact ? COMPACT_HEIGHT : WIDE_HEIGHT}
          key={src}
          sizes={
            compact
              ? '(min-width: 640px) 220px, 100vw'
              : '(min-width: 672px) 672px, 100vw'
          }
          src={src}
          width={compact ? COMPACT_WIDTH : WIDE_WIDTH}
        />
      ))}
    </div>
  );
}
