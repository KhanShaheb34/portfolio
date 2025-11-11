type WavyLineProps = {
  hideOnDesktop?: boolean;
};

const WavyLine = ({ hideOnDesktop = false }: WavyLineProps) => {
  const classes = ['zig-zag-line'];
  if (hideOnDesktop) {
    classes.push('md:hidden');
  }

  return <div className={classes.join(' ')} />;
};

export default WavyLine;
