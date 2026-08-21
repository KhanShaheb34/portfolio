import type { ReactNode } from 'react';
import PostShell from '@/components/PostShell';

export default function Layout({ children }: { children: ReactNode }) {
  return <PostShell slug="mermaid-diagrams-demo">{children}</PostShell>;
}
