export default function Home() {
  return (
    <main className="h-screen overflow-hidden bg-background text-foreground">
      {/* Desktop: Horizontal scrolling container, Mobile: Vertical scrolling */}
      <div className="md:flex md:h-full md:overflow-x-auto md:scrollbar-hide md:snap-x md:snap-mandatory block h-full overflow-y-auto scrollbar-hide">
        
        {/* Column 1: INTRO */}
        <div className="md:flex-none md:w-[40vw] lg:w-[33.33vw] xl:w-[28.57vw] md:h-full md:flex md:flex-col md:snap-start w-full min-h-screen flex flex-col">
          {/* INTRO Section */}
          <div className="flex-1 p-8 overflow-y-auto scrollbar-hide">
            <div className="space-y-6">
              <h1 className="text-3xl font-normal">INTRO</h1>
              <div className="space-y-4 text-lg">
                <p>
                  Hi, I'm Shakirul Hasan Khan, and this is my website.
                  I have written a lot of code.
                </p>
                <p>
                  I'm the Founder & Lead Engineer of Ponno, building AI-powered 
                  conversational commerce. Lately, I've been working on Rust, 
                  TypeScript, and AI research.
                </p>
                <p className="text-muted">
                  Software Engineer with 4+ years experience, B.Sc. in Software Engineering (3.66 CGPA)
                </p>
              </div>
            </div>
          </div>
          
          {/* Horizontal squiggly line separator */}
          <div className="h-16 flex items-center justify-center">
            <svg width="200" height="40" viewBox="0 0 200 40" className="stroke-current text-foreground">
              <path d="M 10 20 Q 50 10 100 20 Q 150 30 190 20" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          
          {/* LINKS Section */}
          <div className="flex-1 p-8 overflow-y-auto scrollbar-hide">
            <div className="space-y-8">
              <h2 className="text-2xl font-normal">LINKS</h2>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span>🔗</span>
                  <a href="https://github.com/shakirulhkhan" className="hover:text-muted transition-colors">
                    GitHub
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span>💼</span>
                  <a href="https://linkedin.com/in/shakirulhkhan" className="hover:text-muted transition-colors">
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🐦</span>
                  <a href="https://twitter.com/shakirulhkhan" className="hover:text-muted transition-colors">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical line separator - hidden on mobile */}
        <div className="hidden md:block flex-none w-px bg-foreground"></div>

        {/* Column 2: ASSORTED PROJECTS */}
        <div className="md:flex-none md:w-[40vw] lg:w-[33.33vw] xl:w-[28.57vw] md:h-full w-full min-h-screen">
          <div className="md:h-full p-8 md:overflow-y-auto scrollbar-hide">
            <div className="space-y-8">
              <h1 className="text-3xl font-normal">ASSORTED PROJECTS</h1>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl">Ponno</h3>
                    <span className="text-xs bg-muted text-background px-2 py-1 rounded">STARTUP</span>
                  </div>
                  <p className="text-muted">AI-powered conversational commerce platform</p>
                </div>
                
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl">Coterm</h3>
                    <span className="text-xs bg-muted text-background px-2 py-1 rounded">CLI TOOL</span>
                  </div>
                  <p className="text-muted">Rust-based terminal application for developer productivity</p>
                </div>
                
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl">Ramble</h3>
                    <span className="text-xs bg-muted text-background px-2 py-1 rounded">APP</span>
                  </div>
                  <p className="text-muted">Transcription and meeting management platform</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl">Re:sume</h3>
                    <span className="text-xs bg-muted text-background px-2 py-1 rounded">AI TOOL</span>
                  </div>
                  <p className="text-muted">AI-powered resume builder and optimization</p>
                </div>
                
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl">BnPC Dataset</h3>
                    <span className="text-xs bg-muted text-background px-2 py-1 rounded">RESEARCH</span>
                  </div>
                  <p className="text-muted">Bangla paraphrase detection dataset for NLP research</p>
                </div>
                
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl">Portfolio Projects</h3>
                    <span className="text-xs bg-muted text-background px-2 py-1 rounded">SHOWCASE</span>
                  </div>
                  <p className="text-muted">Collection of full-stack applications</p>
                </div>

                {/* Horizontal squiggly line separator */}
                <div className="py-8">
                  <svg width="200" height="40" viewBox="0 0 200 40" className="stroke-current text-foreground">
                    <path d="M 10 20 Q 50 10 100 20 Q 150 30 190 20" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                </div>

                <h2 className="text-2xl font-normal">OPEN SOURCE</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <a href="https://github.com/shakirulhkhan/coterm" className="text-lg hover:text-muted transition-colors">
                        coterm
                      </a>
                      <span className="text-muted">⭐ 12</span>
                    </div>
                    <p className="text-muted text-sm">Rust CLI tool for enhanced terminal experience</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <a href="https://github.com/shakirulhkhan/ramble-transcription" className="text-lg hover:text-muted transition-colors">
                        ramble-transcription
                      </a>
                      <span className="text-muted">⭐ 8</span>
                    </div>
                    <p className="text-muted text-sm">Open-source transcription platform</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <a href="https://github.com/shakirulhkhan/bnpc-dataset" className="text-lg hover:text-muted transition-colors">
                        bnpc-dataset
                      </a>
                      <span className="text-muted">⭐ 15</span>
                    </div>
                    <p className="text-muted text-sm">Bangla paraphrase detection research dataset</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <a href="https://github.com/shakirulhkhan/resume-ai" className="text-lg hover:text-muted transition-colors">
                        resume-ai
                      </a>
                      <span className="text-muted">⭐ 6</span>
                    </div>
                    <p className="text-muted text-sm">AI-powered resume optimization tool</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical line separator - hidden on mobile */}
        <div className="hidden md:block flex-none w-px bg-foreground"></div>

        {/* Column 3: POSTS */}
        <div className="md:flex-none md:w-[40vw] lg:w-[33.33vw] xl:w-[28.57vw] md:h-full md:flex md:flex-col md:snap-start w-full min-h-screen flex flex-col">
          {/* POSTS Section */}
          <div className="flex-1 p-8 md:overflow-y-auto scrollbar-hide">
            <div className="space-y-6">
              <h1 className="text-3xl font-normal">POSTS</h1>
              <div className="space-y-4">
                <div>
                  <a href="/posts/ai-conversational-commerce" className="text-lg hover:text-muted transition-colors block">
                    The Future of AI in Commerce
                  </a>
                  <p className="text-muted text-sm">Aug 15, 2025</p>
                </div>
                
                <div>
                  <a href="/posts/rust-performance" className="text-lg hover:text-muted transition-colors block">
                    Rust for High-Performance Applications
                  </a>
                  <p className="text-muted text-sm">Jul 28, 2025</p>
                </div>

                <div>
                  <a href="/posts/typescript-advanced" className="text-lg hover:text-muted transition-colors block">
                    Advanced TypeScript Patterns
                  </a>
                  <p className="text-muted text-sm">Jun 10, 2025</p>
                </div>

                <div>
                  <a href="/posts/ai-research" className="text-lg hover:text-muted transition-colors block">
                    Bangla NLP Research Insights
                  </a>
                  <p className="text-muted text-sm">May 22, 2025</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Horizontal squiggly line separator */}
          <div className="h-16 flex items-center justify-center">
            <svg width="200" height="40" viewBox="0 0 200 40" className="stroke-current text-foreground">
              <path d="M 10 20 Q 50 10 100 20 Q 150 30 190 20" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          
          {/* INTERESTS Section */}
          <div className="flex-1 p-8 md:overflow-y-auto scrollbar-hide">
            <div className="space-y-6">
              <h2 className="text-2xl font-normal">INTERESTS</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg">AI & Machine Learning</h3>
                  <p className="text-muted text-sm">Natural Language Processing, Computer Vision</p>
                </div>
                
                <div>
                  <h3 className="text-lg">Systems Programming</h3>
                  <p className="text-muted text-sm">Rust, Performance Optimization</p>
                </div>

                <div>
                  <h3 className="text-lg">Web Technologies</h3>
                  <p className="text-muted text-sm">TypeScript, React, Next.js</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical line separator - hidden on mobile */}
        <div className="hidden md:block flex-none w-px bg-foreground"></div>

        {/* Column 4: ACADEMIC */}
        <div className="md:flex-none md:w-[40vw] lg:w-[33.33vw] xl:w-[28.57vw] md:h-full md:flex md:flex-col md:snap-start w-full min-h-screen flex flex-col">
          {/* ACADEMIC Section */}
          <div className="flex-1 p-8 md:overflow-y-auto scrollbar-hide">
            <div className="space-y-6">
              <h1 className="text-3xl font-normal">ACADEMIC</h1>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg mb-2">Education</h3>
                  <div className="space-y-2">
                    <p className="font-medium">B.Sc. Software Engineering</p>
                    <p className="text-muted text-sm">Shahjalal University of Science & Technology</p>
                    <p className="text-muted text-sm">CGPA: 3.66 | 2018-2023</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg mb-2">Research</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">BnPC Dataset</p>
                      <p className="text-muted text-sm">Bangla paraphrase detection dataset for NLP research</p>
                    </div>
                    
                    <div>
                      <p className="font-medium">Thesis</p>
                      <p className="text-muted text-sm">Software Engineering methodologies and practices</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg mb-2">Certifications</h3>
                  <div className="space-y-2">
                    <p className="text-muted text-sm">• Deep Learning Specialization (Coursera)</p>
                    <p className="text-muted text-sm">• TensorFlow Developer Certificate</p>
                    <p className="text-muted text-sm">• Neural Networks and Deep Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Horizontal squiggly line separator */}
          <div className="h-16 flex items-center justify-center">
            <svg width="200" height="40" viewBox="0 0 200 40" className="stroke-current text-foreground">
              <path d="M 10 20 Q 50 10 100 20 Q 150 30 190 20" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          
          {/* HOBBIES Section */}
          <div className="flex-1 p-8 md:overflow-y-auto scrollbar-hide">
            <div className="space-y-6">
              <h2 className="text-2xl font-normal">HOBBIES</h2>
              <div className="space-y-4">
                <div>
                  <a href="https://instagram.com/shakirulhkhan" className="text-lg hover:text-muted transition-colors block">
                    Photography
                  </a>
                  <p className="text-muted text-sm">Capturing moments and stories through lens</p>
                </div>
                
                <div>
                  <a href="https://goodreads.com/shakirulhkhan" className="text-lg hover:text-muted transition-colors block">
                    Reading Books
                  </a>
                  <p className="text-muted text-sm">Always learning from great minds</p>
                </div>

                <div>
                  <h3 className="text-lg">Traveling</h3>
                  <p className="text-muted text-sm">Exploring new cultures and places</p>
                </div>

                <div>
                  <h3 className="text-lg">Chess</h3>
                  <p className="text-muted text-sm">Strategic thinking and problem solving</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
