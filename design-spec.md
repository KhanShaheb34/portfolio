# Design Specification: Kit Langton Portfolio Inspired Website

## Overview

This design specification is based on Kit Langton's portfolio website (https://www.kitlangton.com/) - a minimal, elegant, and blazingly fast personal website with excellent accessibility. The design emphasizes simplicity, readability, and sophisticated use of whitespace with distinctive visual elements.

## Layout Structure

### Main Page Layout

- **Vertical scrolling design**: The page is structured as a traditional vertical scrolling layout with distinct sections
- **Three-column layout per section**: Each section contains three columns:
  - Left column: Content/text
  - Center column: Decorative wavy line divider (squiggly line)
  - Right column: Content/text or links
- **Full-width sections**: Each section spans the full width of the viewport
- **No traditional navigation menu**: Content discovery happens through vertical scrolling

**Note on Navigation**: While the user mentioned horizontal arrow key navigation, the current implementation uses standard vertical scrolling. The "horizontal" sections are arranged side-by-side within each vertical section, creating the three-column layout described above.

### Section Divisions

The signature design element is the **hand-drawn style wavy/squiggly line** that acts as:

- Visual separator between content sections
- Artistic element that adds personality
- Consistent visual thread throughout the site
- Creates rhythm and flow between different content areas

### Sections Structure

1. **INTRO Section**

   - Personal introduction and bio
   - Current projects/focus
   - Social links (GitHub, Twitter, YouTube)

2. **ASSORTED PROJECTS Section**

   - Curated project showcases
   - Mix of apps, tutorials, and tools
   - Each project has title, type badge (APP/TUTORIAL), and description

3. **OPEN SOURCE Section**

   - GitHub repositories
   - Star count displayed prominently
   - Brief descriptions of each project

4. **POSTS Section**

   - Blog posts with dates
   - Clean, minimal presentation

5. **TALKS Section**

   - Speaking engagements
   - YouTube links with dates

6. **VIDEO SECTIONS (Swift/Scala)**
   - Categorized video content
   - Rich preview cards with thumbnails
   - View counts and engagement metrics
   - Organized in grid layout

## Typography

### Hierarchy

- **Primary Font**: Monospace font (appears to be a clean, programmer-friendly typeface)
- **Font Sizes**:
  - Section headers: Large, bold, uppercase
  - Project titles: Medium, regular weight
  - Descriptions: Small, muted
  - Body text: Standard reading size
- **Text Transform**: Section headers are UPPERCASE for emphasis
- **Weight Variations**: Bold for names and emphasis, regular for body text

### Content Structure

- **Project Cards**: Title + badge + description format
- **Date Display**: Consistent date formatting (e.g., "Jan 13, 2025")
- **Badges**: Small, subtle badges for categorization (APP, TUTORIAL)
- **Link Styling**: Clean, underlined or colored links

## Color Scheme

### Base Colors

- **Background**: Pure black (#000000) or very dark background
- **Text**: White/light gray for high contrast
- **Accent Color**: Minimal use of accent colors, primarily for highlights
- **Muted Text**: Gray tones for secondary information like dates and descriptions

### Visual Contrast

- **High contrast design**: Excellent accessibility with strong contrast ratios
- **Monochromatic approach**: Primarily black and white with minimal color accents
- **Clean differentiation**: Visual hierarchy through typography rather than color

## Visual Elements

### Squiggly Line Dividers

- **Hand-drawn aesthetic**: Organic, flowing lines that appear hand-sketched
- **Consistent width**: Uniform thickness throughout
- **Vertical orientation**: Lines flow vertically to separate content sections
- **Artistic touch**: Adds personality while maintaining professionalism

### Cards and Content Blocks

- **Minimal cards**: Clean, borderless content blocks
- **Generous whitespace**: Ample spacing between elements
- **Subtle grouping**: Related content grouped through proximity rather than borders

### Interactive Elements

- **Hover effects**: Subtle hover states for links and interactive elements
- **Clean focus states**: Accessible focus indicators
- **Smooth transitions**: Subtle animations for user interactions

## Blog Page Design

### Layout

- **Single column layout**: Focused reading experience with centered content
- **Narrow content width**: Optimal line length for readability (approximately 65-75 characters)
- **Generous margins**: Extensive whitespace around content for comfortable reading
- **Consistent typography**: Maintains main site's monospace aesthetic but optimized for reading
- **Header image**: Each post features a distinctive header image that sets the mood

### Content Structure

- **Visual header**: Large header image with artistic/abstract imagery
- **Article metadata**: Title and publication date prominently displayed
- **Content hierarchy**: Clear distinction between paragraphs, quotes, and emphasis
- **Rich text formatting**:
  - Blockquotes with distinctive formatting and attribution
  - Inline links with subtle styling
  - Strong emphasis (bold) for key points
  - Inline images with proper spacing
- **Navigation**: Elegant back-to-home link using symbolic character (∎)

### Typography

- **Reading-optimized typography**: Larger font size than main site for comfortable reading
- **Generous line height**: Excellent readability with ample spacing between lines
- **Quote styling**:
  - Distinctive blockquote formatting with quotation marks
  - Attribution styling for quoted sources
  - Indented presentation
- **Paragraph spacing**: Clear visual separation with consistent vertical rhythm
- **Link treatment**: Subtle underlined or colored links that don't distract from reading flow

### Visual Design

- **Header imagery**: Each post features a unique, atmospheric header image
- **Consistent branding**: Maintains the site's dark theme and minimal aesthetic
- **Focus on content**: All design elements support the reading experience
- **Elegant simplicity**: No distracting elements, pure focus on typography and content

## Responsive Design Considerations

### Breakpoints

- **Mobile-first approach**: Scalable design from mobile to desktop
- **Flexible grid**: Adapts seamlessly to different screen sizes
- **Readable typography**: Maintains legibility across all devices
- **Touch-friendly**: Appropriate sizing for mobile interactions

### Mobile Adaptations

- **Section stacking**: The three-column desktop layout transforms into single-column vertical stacking on mobile
- **Content reordering**: Sections that appear side-by-side on desktop stack vertically on mobile in logical reading order
- **Squiggly line adaptation**: The wavy dividers are removed or simplified on mobile to avoid visual clutter
- **Typography scaling**: Font sizes adjust appropriately for smaller screens while maintaining readability
- **Touch optimization**: Links and interactive elements are sized appropriately for finger navigation
- **Simplified layout**: Mobile focuses on content hierarchy without the complex three-column desktop layout
- **Consistent vertical rhythm**: Despite the layout changes, the vertical spacing and rhythm remain consistent

### Key Responsive Features

- **Seamless transformation**: The horizontal sections elegantly collapse into a long, vertically scrollable page on mobile
- **Content preservation**: All content remains accessible and well-organized despite the layout transformation
- **Performance maintained**: Mobile version retains the fast, minimal loading characteristics
- **Navigation consistency**: The simple navigation pattern works consistently across all screen sizes

## Performance & Accessibility

### Performance

- **Fast loading**: Minimal assets and optimized delivery
- **Efficient rendering**: Clean HTML structure
- **Progressive enhancement**: Core content accessible without JavaScript

### Accessibility

- **High contrast**: Excellent color contrast ratios
- **Semantic HTML**: Proper heading hierarchy and structure
- **Keyboard navigation**: Full keyboard accessibility
- **Screen reader friendly**: Proper ARIA labels and structure
- **Clear focus states**: Visible focus indicators

## Technical Implementation Notes

### Key Features to Implement

1. **Custom squiggly line component**: SVG or canvas-based drawing for the signature wavy dividers
2. **Vertical scrolling layout**: Smooth, traditional scrolling experience
3. **Responsive grid system**: Flexible three-column layout that adapts to screen sizes
4. **Typography system**: Dual typography approach - monospace for main site, reading-optimized for blog
5. **Dark theme optimization**: High contrast design system with pure black backgrounds
6. **Blog post templating**: Individual post layout with header images and focused typography
7. **Performance optimization**: Fast loading and minimal bundle size
8. **Navigation system**: Simple, elegant navigation between pages and back to home

### Content Management

- **Markdown support**: For blog posts and content
- **Project showcase system**: Easy content updates
- **Social integration**: Links to external platforms
- **SEO optimization**: Proper meta tags and structure

## Conclusion

This design exemplifies modern minimalism with personality. The key is balancing stark simplicity with distinctive visual elements (the squiggly lines) that add character without overwhelming the content. The result is a sophisticated, fast, and highly accessible portfolio that puts content first while maintaining visual interest and professional polish.

The design's strength lies in its restraint - using typography, whitespace, and a single distinctive visual element to create a memorable and effective personal brand presentation.
