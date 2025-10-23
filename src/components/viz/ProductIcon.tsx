"use client";

import * as React from "react";
import * as icons from "simple-icons/icons";

export type ProductIconProps = {
  name: keyof typeof icons extends `si${string}` ? keyof typeof icons : never | string;
  title?: string;
  className?: string;
  size?: number;
};

const toPascalKey = (name: string): string => {
  const cleaned = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
  return `si${cleaned}`;
};

export default function ProductIcon({ name, title, className, size = 20 }: ProductIconProps) {
  const key = React.useMemo(() => {
    if (name.startsWith("si")) return name;
    return toPascalKey(name);
  }, [name]);

  // @ts-expect-error dynamic index access into module
  const def = (icons as any)[key] as { path: string; title: string; hex: string } | undefined;

  if (!def) {
    return (
      <span
        className={"inline-block align-middle rounded-sm bg-muted text-foreground/70 px-1 text-[10px]"}
        aria-label={title ?? name}
        title={title ?? name}
        role="img"
      >
        {name}
      </span>
    );
  }

  const label = title ?? def.title ?? name;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-label={label}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{label}</title>
      <path d={def.path} fill={`#${def.hex}`} />
    </svg>
  );
}
