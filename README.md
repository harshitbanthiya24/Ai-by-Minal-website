# Ai by Minal

A modern portfolio and personal brand website built with Next.js, showcasing AI expertise, design work, and creative projects.

## Features

- 🎨 Beautiful dark theme with indigo-purple-yellow gradient design
- 📱 Fully responsive and mobile-friendly
- ⚡ Fast static site generation with Next.js
- 🚀 Automatic deployment to GitHub Pages
- 🎯 SEO optimized
- ✨ Smooth animations and transitions

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Playfair Display (serif), Geist (sans-serif)
- **Deployment**: GitHub Pages

## Getting Started

### Development

1. Clone the repository:
```bash
git clone https://github.com/harshitbanthiya24/Ai-by-Minal-website.git
cd Ai-by-Minal-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Building

To build for production:
```bash
npm run build
```

This generates a static export in the `out/` directory.

## Deployment

This project is configured for free hosting on **GitHub Pages** with automatic deployment via GitHub Actions.

The site will be automatically deployed to:
- `https://harshitbanthiya24.github.io/Ai-by-Minal-website`

## Project Structure

```
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles
├── public/               # Static assets
├── .github/workflows/
│   └── deploy.yml        # GitHub Actions deployment workflow
├── tailwind.config.ts    # Tailwind configuration
├── next.config.ts        # Next.js configuration
└── package.json          # Dependencies and scripts
```

## Customization

### Update Personal Information

Edit `app/page.tsx` to update:
- About section content
- Featured work/projects
- Contact form details
- Social links

### Modify Colors

The color scheme is defined in `app/page.tsx`. Key colors:
- Background: `#06030f` (dark navy)
- Primary gradient: Indigo → Purple → Yellow
- Accent: Indigo and Purple

### Add New Sections

Add new sections to `app/page.tsx` by creating new `<section>` elements and linking them in the navigation.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue on the GitHub repository.
