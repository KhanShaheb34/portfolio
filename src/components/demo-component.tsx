'use client';

export default function DemoComponent() {
  return (
    <div className="my-8 rounded-lg border border-foreground/20 bg-foreground/5 p-6">
      <h3 className="mb-3 font-semibold text-lg">
        🎯 Interactive Demo Component
      </h3>
      <p className="mb-4 text-muted">
        This component is directly imported into the MDX file and demonstrates
        perfect tree-shaking with @next/mdx. Only posts that import this
        component will include it in their bundle!
      </p>
      <div className="flex items-center space-x-4">
        <div className="h-4 w-4 animate-pulse rounded-full bg-green-500" />
        <span className="text-sm">Component loaded successfully ✨</span>
      </div>
    </div>
  );
}
