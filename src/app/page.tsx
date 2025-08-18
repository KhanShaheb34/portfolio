export default function Home() {
  return (
    <main className="h-screen bg-background p-6 text-foreground md:p-8">
      {/* Desktop: Horizontal scrolling container, Mobile: Vertical scrolling */}
      <div className="md:scrollbar-hide scrollbar-hide block h-full overflow-hidden overflow-y-auto md:flex md:h-full md:snap-x md:snap-mandatory md:overflow-x-auto">
        {/* Column 1: INTRO */}
        <div className="min-h-screen w-full md:mr-4 md:h-full md:w-[40vw] md:flex-none md:snap-start md:flex-col lg:w-[33.33vw] xl:w-[28.57vw]">
          <div className="scrollbar-hide overflow-y-auto p-8 md:h-full">
            {/* INTRO Section */}
            <div className="flex-1 p-8">
              <div className="space-y-6">
                <h1 className="font-normal text-3xl">INTRO</h1>
                <div className="space-y-4 text-lg">
                  <p>
                    Hi, I'm Shakirul Hasan Khan, and this is my website. I have
                    written a lot of code.
                  </p>
                  <p>
                    I'm the Founder & Lead Engineer of Ponno, building
                    AI-powered conversational commerce. Lately, I've been
                    working on Rust, TypeScript, and AI research.
                  </p>
                  <p className="text-muted">
                    Software Engineer with 4+ years experience, B.Sc. in
                    Software Engineering (3.66 CGPA)
                  </p>
                </div>
              </div>
            </div>

            {/* Horizontal wavy line separator */}
            <div className="wavy-line" />

            {/* LINKS Section */}
            <div className="flex-1 p-8">
              <div className="space-y-8">
                <h2 className="font-normal text-2xl">LINKS</h2>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span>🔗</span>
                    <a
                      className="transition-colors hover:text-muted"
                      href="https://github.com/shakirulhkhan"
                    >
                      GitHub
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>💼</span>
                    <a
                      className="transition-colors hover:text-muted"
                      href="https://linkedin.com/in/shakirulhkhan"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>🐦</span>
                    <a
                      className="transition-colors hover:text-muted"
                      href="https://twitter.com/shakirulhkhan"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical line separator - hidden on mobile */}
        <div className="hidden w-px flex-none bg-foreground opacity-30 md:block" />

        {/* Column 2: ASSORTED PROJECTS */}
        <div className="min-h-screen w-full md:mr-4 md:h-full md:w-[40vw] md:flex-none md:snap-start md:flex-col lg:w-[33.33vw] xl:w-[28.57vw]">
          <div className="scrollbar-hide overflow-y-auto p-8 md:h-full">
            <div className="space-y-8">
              <h1 className="font-normal text-3xl">ASSORTED PROJECTS</h1>
              <div className="space-y-8">
                <div>
                  <div className="mb-2 flex items-center space-x-2">
                    <h3 className="text-xl">Ponno</h3>
                    <span className="rounded bg-muted px-2 py-1 text-background text-xs">
                      STARTUP
                    </span>
                  </div>
                  <p className="text-muted">
                    AI-powered conversational commerce platform
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-center space-x-2">
                    <h3 className="text-xl">Coterm</h3>
                    <span className="rounded bg-muted px-2 py-1 text-background text-xs">
                      CLI TOOL
                    </span>
                  </div>
                  <p className="text-muted">
                    Rust-based terminal application for developer productivity
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-center space-x-2">
                    <h3 className="text-xl">Ramble</h3>
                    <span className="rounded bg-muted px-2 py-1 text-background text-xs">
                      APP
                    </span>
                  </div>
                  <p className="text-muted">
                    Transcription and meeting management platform
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-center space-x-2">
                    <h3 className="text-xl">Re:sume</h3>
                    <span className="rounded bg-muted px-2 py-1 text-background text-xs">
                      AI TOOL
                    </span>
                  </div>
                  <p className="text-muted">
                    AI-powered resume builder and optimization
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-center space-x-2">
                    <h3 className="text-xl">BnPC Dataset</h3>
                    <span className="rounded bg-muted px-2 py-1 text-background text-xs">
                      RESEARCH
                    </span>
                  </div>
                  <p className="text-muted">
                    Bangla paraphrase detection dataset for NLP research
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-center space-x-2">
                    <h3 className="text-xl">Portfolio Projects</h3>
                    <span className="rounded bg-muted px-2 py-1 text-background text-xs">
                      SHOWCASE
                    </span>
                  </div>
                  <p className="text-muted">
                    Collection of full-stack applications
                  </p>
                </div>

                {/* Horizontal wavy line separator */}
                <div className="wavy-line" />

                <h2 className="font-normal text-2xl">OPEN SOURCE</h2>
                <div className="space-y-6">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <a
                        className="text-lg transition-colors hover:text-muted"
                        href="https://github.com/shakirulhkhan/coterm"
                      >
                        coterm
                      </a>
                      <span className="text-muted">⭐ 12</span>
                    </div>
                    <p className="text-muted text-sm">
                      Rust CLI tool for enhanced terminal experience
                    </p>
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <a
                        className="text-lg transition-colors hover:text-muted"
                        href="https://github.com/shakirulhkhan/ramble-transcription"
                      >
                        ramble-transcription
                      </a>
                      <span className="text-muted">⭐ 8</span>
                    </div>
                    <p className="text-muted text-sm">
                      Open-source transcription platform
                    </p>
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <a
                        className="text-lg transition-colors hover:text-muted"
                        href="https://github.com/shakirulhkhan/bnpc-dataset"
                      >
                        bnpc-dataset
                      </a>
                      <span className="text-muted">⭐ 15</span>
                    </div>
                    <p className="text-muted text-sm">
                      Bangla paraphrase detection research dataset
                    </p>
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <a
                        className="text-lg transition-colors hover:text-muted"
                        href="https://github.com/shakirulhkhan/resume-ai"
                      >
                        resume-ai
                      </a>
                      <span className="text-muted">⭐ 6</span>
                    </div>
                    <p className="text-muted text-sm">
                      AI-powered resume optimization tool
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical line separator - hidden on mobile */}
        <div className="hidden w-px flex-none bg-foreground opacity-30 md:block" />

        {/* Column 3: POSTS */}
        <div className="min-h-screen w-full md:mr-4 md:h-full md:w-[40vw] md:flex-none md:snap-start md:flex-col lg:w-[33.33vw] xl:w-[28.57vw]">
          <div className="scrollbar-hide overflow-y-auto p-8 md:h-full">
            {/* POSTS Section */}
            <div className="flex-1 p-8">
              <div className="space-y-6">
                <h1 className="font-normal text-3xl">POSTS</h1>
                <div className="space-y-4">
                  <div>
                    <a
                      className="block text-lg transition-colors hover:text-muted"
                      href="/posts/ai-conversational-commerce"
                    >
                      The Future of AI in Commerce
                    </a>
                    <p className="text-muted text-sm">Aug 15, 2025</p>
                  </div>

                  <div>
                    <a
                      className="block text-lg transition-colors hover:text-muted"
                      href="/posts/rust-performance"
                    >
                      Rust for High-Performance Applications
                    </a>
                    <p className="text-muted text-sm">Jul 28, 2025</p>
                  </div>

                  <div>
                    <a
                      className="block text-lg transition-colors hover:text-muted"
                      href="/posts/typescript-advanced"
                    >
                      Advanced TypeScript Patterns
                    </a>
                    <p className="text-muted text-sm">Jun 10, 2025</p>
                  </div>

                  <div>
                    <a
                      className="block text-lg transition-colors hover:text-muted"
                      href="/posts/ai-research"
                    >
                      Bangla NLP Research Insights
                    </a>
                    <p className="text-muted text-sm">May 22, 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal wavy line separator */}
            <div className="wavy-line" />

            {/* INTERESTS Section */}
            <div className="flex-1 p-8">
              <div className="space-y-6">
                <h2 className="font-normal text-2xl">INTERESTS</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg">AI & Machine Learning</h3>
                    <p className="text-muted text-sm">
                      Natural Language Processing, Computer Vision
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg">Systems Programming</h3>
                    <p className="text-muted text-sm">
                      Rust, Performance Optimization
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg">Web Technologies</h3>
                    <p className="text-muted text-sm">
                      TypeScript, React, Next.js
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical line separator - hidden on mobile */}
        <div className="hidden w-px flex-none bg-foreground opacity-30 md:block" />

        {/* Column 4: ACADEMIC */}
        <div className="min-h-screen w-full md:mr-4 md:h-full md:w-[40vw] md:flex-none md:snap-start md:flex-col lg:w-[33.33vw] xl:w-[28.57vw]">
          <div className="scrollbar-hide overflow-y-auto p-8 md:h-full">
            {/* ACADEMIC Section */}
            <div className="flex-1 p-8">
              <div className="space-y-6">
                <h1 className="font-normal text-3xl">ACADEMIC</h1>
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 text-lg">Education</h3>
                    <div className="space-y-2">
                      <p className="font-medium">B.Sc. Software Engineering</p>
                      <p className="text-muted text-sm">
                        Shahjalal University of Science & Technology
                      </p>
                      <p className="text-muted text-sm">
                        CGPA: 3.66 | 2018-2023
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg">Research</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">BnPC Dataset</p>
                        <p className="text-muted text-sm">
                          Bangla paraphrase detection dataset for NLP research
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">Thesis</p>
                        <p className="text-muted text-sm">
                          Software Engineering methodologies and practices
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg">Certifications</h3>
                    <div className="space-y-2">
                      <p className="text-muted text-sm">
                        • Deep Learning Specialization (Coursera)
                      </p>
                      <p className="text-muted text-sm">
                        • TensorFlow Developer Certificate
                      </p>
                      <p className="text-muted text-sm">
                        • Neural Networks and Deep Learning
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal wavy line separator */}
            <div className="wavy-line" />

            {/* HOBBIES Section */}
            <div className="flex-1 p-8">
              <div className="space-y-6">
                <h2 className="font-normal text-2xl">HOBBIES</h2>
                <div className="space-y-4">
                  <div>
                    <a
                      className="block text-lg transition-colors hover:text-muted"
                      href="https://instagram.com/shakirulhkhan"
                    >
                      Photography
                    </a>
                    <p className="text-muted text-sm">
                      Capturing moments and stories through lens
                    </p>
                  </div>

                  <div>
                    <a
                      className="block text-lg transition-colors hover:text-muted"
                      href="https://goodreads.com/shakirulhkhan"
                    >
                      Reading Books
                    </a>
                    <p className="text-muted text-sm">
                      Always learning from great minds
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg">Traveling</h3>
                    <p className="text-muted text-sm">
                      Exploring new cultures and places
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg">Chess</h3>
                    <p className="text-muted text-sm">
                      Strategic thinking and problem solving
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
