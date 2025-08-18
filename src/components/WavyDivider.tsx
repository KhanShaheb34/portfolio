export const WavyDivider = () => {
  return (
    <div className="hidden items-stretch justify-center md:flex">
      <svg
        aria-hidden="true"
        className="stroke-white/30"
        height="100%"
        viewBox="0 0 24 400"
        width="24"
      >
        <title>divider</title>
        <path
          d="M12 0 C6 25, 18 50, 12 75 C6 100, 18 125, 12 150 C6 175, 18 200, 12 225 C6 250, 18 275, 12 300 C6 325, 18 350, 12 375"
          fill="none"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};
