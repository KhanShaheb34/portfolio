type WavyLineProps = {
  hideOnDesktop?: boolean;
};

export default function WavyLine({ hideOnDesktop = false }: WavyLineProps) {
  return <div className={`zig-zag-line ${hideOnDesktop ? 'md:hidden' : ''}`} />;
}
