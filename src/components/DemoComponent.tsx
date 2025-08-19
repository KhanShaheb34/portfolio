'use client';

export default function DemoComponent() {
  return (
    <div className="my-8 p-6 border border-foreground/20 rounded-lg bg-foreground/5">
      <h3 className="text-lg font-semibold mb-3">🎯 Interactive Demo Component</h3>
      <p className="text-muted mb-4">
        This component is directly imported into the MDX file and demonstrates 
        perfect tree-shaking with @next/mdx. Only posts that import this 
        component will include it in their bundle!
      </p>
      <div className="flex items-center space-x-4">
        <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-sm">Component loaded successfully ✨</span>
      </div>
    </div>
  );
}