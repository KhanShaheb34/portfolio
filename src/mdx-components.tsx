import type { MDXComponents } from 'mdx/types';
import Mermaid from './components/Mermaid';

type CodeProps = {
  className?: string;
  children?: string;
};

const languagePrefixPattern = /language-/;

const Code = ({ className, children }: CodeProps) => {
  const language = className?.replace(languagePrefixPattern, '');

  if (language === 'mermaid' && children) {
    return <Mermaid chart={children.trim()} />;
  }

  return <code className={className}>{children}</code>;
};

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    ...components,
    code: Code,
    Mermaid,
  };
};
