import type { MDXComponents } from "mdx/types";
import Mermaid from "./components/Mermaid";

type CodeProps = {
  className?: string;
  children?: string;
};

function Code({ className, children }: CodeProps) {
  const language = className?.replace(/language-/, "");

  if (language === "mermaid" && children) {
    return <Mermaid chart={children.trim()} />;
  }

  return <code className={className}>{children}</code>;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    code: Code,
    Mermaid,
  };
}