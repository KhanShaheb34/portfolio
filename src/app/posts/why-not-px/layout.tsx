import type { ReactNode } from 'react';
import PostShell from '@/components/PostShell';

export default function Layout({ children }: { children: ReactNode }) {
  return <PostShell slug="why-not-px">{children}</PostShell>;
}
