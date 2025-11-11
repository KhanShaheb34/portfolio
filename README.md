# Shakirul Hasan Khan - Portfolio

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](https://shakirul.dev/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)

A modern, performant personal portfolio website showcasing my work, experience, and blog posts. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4.

🔗 **Live Demo:** [https://shakirul.dev/](https://shakirul.dev/)

## ✨ Features

- **Unique Horizontal Scroll Design** - Desktop view with smooth horizontal scrolling, vertical on mobile
- **MDX Blog** - Write blog posts with MDX for rich, interactive content
- **Type-Safe** - Full TypeScript implementation with strict type checking
- **SEO Optimized** - Built-in sitemap, robots.txt, and structured data
- **Performance First** - Optimized for Core Web Vitals with Vercel Analytics
- **Code Quality** - Enforced with Ultracite (Biome) for formatting and linting
- **Accessibility** - WCAG compliant with semantic HTML and ARIA attributes
- **Modern Stack** - Next.js 15 with App Router, React 19, and Tailwind CSS 4
- **Responsive Design** - Mobile-first approach with adaptive layouts
- **Syntax Highlighting** - Beautiful code blocks with rehype-highlight

## 🛠️ Tech Stack

### Core

- **[Next.js 15.4.6](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.0](https://reactjs.org/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first styling

### Content & Data

- **[MDX](https://mdxjs.com/)** - Markdown with JSX support
- **[next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)** - Load MDX content
- **[gray-matter](https://github.com/jonschlinkert/gray-matter)** - Parse frontmatter
- **[reading-time](https://github.com/ngryman/reading-time)** - Estimate reading time
- **[rehype-highlight](https://github.com/rehypejs/rehype-highlight)** - Syntax highlighting

### UI & Icons

- **[@phosphor-icons/react](https://phosphoricons.com/)** - Icon library
- **[@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)** - Prose styling

### Developer Experience

- **[Ultracite](https://github.com/biomejs/biome)** - Fast code formatter and linter
- **[Vercel Analytics](https://vercel.com/analytics)** - Performance monitoring
- **[Bun](https://bun.sh/)** - Fast package manager and runtime

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) 1.0+ (recommended) or Node.js 20+
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/KhanShaheb34/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   # Using bun (recommended)
   bun install

   # Or using npm
   npm install

   # Or using yarn
   yarn install

   # Or using pnpm
   pnpm install
   ```

3. **Run the development server**

   ```bash
   bun dev

   # Or using npm
   npm run dev

   # Or using yarn/pnpm
   yarn dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
.
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/             # About page
│   │   ├── posts/             # Blog posts
│   │   │   ├── [slug]/        # Dynamic blog post pages (MDX)
│   │   │   └── page.tsx       # Blog listing
│   │   ├── projects/          # Projects showcase
│   │   │   ├── [slug]/        # Dynamic project pages
│   │   │   └── page.tsx       # Projects listing
│   │   ├── work/              # Work experience
│   │   │   ├── [slug]/        # Dynamic work experience pages
│   │   │   └── page.tsx       # Work listing
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles
│   │   ├── manifest.ts        # PWA manifest
│   │   ├── sitemap.ts         # Dynamic sitemap
│   │   ├── robots.ts          # Robots.txt
│   │   └── opengraph-image.tsx # OG image generator
│   │
│   ├── components/            # React components
│   │   ├── BlogLayout.tsx     # Blog post layout
│   │   ├── CodeHighlight.tsx  # Code syntax highlighting
│   │   ├── Column.tsx         # Layout column component
│   │   ├── ExperienceCard.tsx # Work experience card
│   │   ├── InterestCard.tsx   # Interest/hobby card
│   │   ├── PostCard.tsx       # Blog post card
│   │   ├── ProjectCard.tsx    # Project card
│   │   ├── ScrollArrows.tsx   # Navigation arrows
│   │   ├── Section.tsx        # Content section
│   │   └── SocialLink.tsx     # Social media link
│   │
│   ├── data/                  # JSON data files
│   │   ├── experiences.json   # Work experience data
│   │   ├── portfolio.json     # Personal info, intro, interests
│   │   └── projects.json      # Project showcase data
│   │
│   ├── hooks/                 # Custom React hooks
│   │   └── useColumnVisibility.ts
│   │
│   ├── lib/                   # Utility functions
│   │   ├── blog.ts           # Blog post utilities
│   │   └── projects.ts       # Project utilities
│   │
│   └── mdx-components.tsx     # Custom MDX components
│
├── public/                    # Static assets
│   └── icons/                # Favicon and app icons
│
├── biome.jsonc               # Biome (Ultracite) configuration
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## ⚙️ Configuration

### Personal Information

Update your personal information in the JSON files located in `src/data/`:

- **`portfolio.json`** - Intro, social links, interests, academic info, hobbies
- **`projects.json`** - Project showcase with descriptions, tech stack, and links
- **`experiences.json`** - Work experience with responsibilities and achievements

### Blog Posts

Create new blog posts in `src/app/posts/[slug]/` directory:

```tsx
// src/app/posts/my-new-post/page.mdx
import BlogLayout from '@/components/BlogLayout';

export const metadata = {
  title: 'My New Post',
  description: 'A brief description of my post',
  date: '2025-10-17',
  author: 'Your Name',
};

# My New Post

Your content here...

export default ({ children }) => (
  <BlogLayout metadata={metadata}>{children}</BlogLayout>
);
```

### Styling

Customize colors and fonts in `src/app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --muted: #737373;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
    --muted: #a3a3a3;
  }
}
```

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```bash
# Add any API keys or environment-specific variables here
# Example:
# NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## 🧪 Development

### Available Scripts

```bash
# Start development server (with Turbopack)
bun dev

# Build for production
bun run build

# Start production server
bun start

# Run linter
bun run lint

# Format and fix code with Ultracite
bunx ultracite format

# Check for issues without fixing
bunx ultracite lint
```

### Code Quality

This project uses [Ultracite](https://github.com/KhanShaheb34/ultracite) (powered by Biome) for code formatting and linting. It enforces:

- Strict type safety
- Accessibility standards (WCAG compliance)
- React and TypeScript best practices
- Consistent code style

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Export your page component

```tsx
// src/app/contact/page.tsx
export default function ContactPage() {
  return (
    <main>
      <h1>Contact Me</h1>
    </main>
  );
}
```

## 📦 Build & Deployment

### Build for Production

```bash
bun run build
```

This creates an optimized production build in the `.next` directory.

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/KhanShaheb34/portfolio)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Configure environment variables (if needed)
4. Deploy!

### Deploy to Other Platforms

This is a standard Next.js application and can be deployed to:

- **Netlify** - Use the `next export` or Next.js Runtime
- **AWS Amplify** - Direct GitHub integration
- **Docker** - Use the included Dockerfile (if you add one)
- **Self-hosted** - Use `bun run build` and `bun start`

## 🎨 Customization Guide

### Using This as a Template

1. **Fork this repository**
2. **Update personal data** in `src/data/*.json`
3. **Modify colors** in `src/app/globals.css`
4. **Replace blog posts** in `src/app/posts/`
5. **Update metadata** in `src/app/layout.tsx`
6. **Update OG image** in `src/app/opengraph-image.tsx`
7. **Deploy** to your hosting provider

### Design Customization

The design uses CSS custom properties for easy theming:

```css
/* src/app/globals.css */
:root {
  --background: #ffffff; /* Main background color */
  --foreground: #171717; /* Main text color */
  --muted: #737373; /* Muted text color */
}
```

### Component Customization

All components are modular and can be easily customized:

- **Layout**: Modify `Column.tsx` and `Section.tsx`
- **Cards**: Customize card components in `src/components/`
- **Navigation**: Update `ScrollArrows.tsx` for different navigation

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Shakirul Hasan Khan**

- Website: [https://shakirul.dev](https://shakirul.dev)
- GitHub: [@KhanShaheb34](https://github.com/KhanShaheb34)
- LinkedIn: [shakirulhasan](https://linkedin.com/in/shakirulhasan)
- Twitter: [@\_khanshaheb](https://x.com/_khanshaheb)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/KhanShaheb34/portfolio/issues).

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⭐ Show Your Support

Give a ⭐️ if this project helped you or if you like the design!

## 📞 Support

If you have any questions or need help with customization:

- Open an [issue](https://github.com/KhanShaheb34/portfolio/issues)
- LinkedIn: [Message me](https://linkedin.com/in/shakirulhasan)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Phosphor Icons](https://phosphoricons.com/)
- Code quality by [Ultracite](https://github.com/KhanShaheb34/ultracite)
- Hosted on [Vercel](https://vercel.com)

---

<p align="center">Made with ❤️ by <a href="https://shakirul.dev">Shakirul Hasan Khan</a></p>
