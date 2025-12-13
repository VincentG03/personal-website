# Personal Website - Vincent Giang

A modern, production-ready personal website built with Next.js, TypeScript, and Tailwind CSS. Features a creative loading animation, smooth scrolling, responsive design, and beautiful animations throughout.

🌐 **[View Live Site](#)** *(URL will be available after deployment)*

---

## 🎨 Features

- **Creative Loading Screen**: Animated ripple effect with progress indicator
- **Smooth Scrolling Navigation**: Persistent navbar with active section highlighting
- **Modern Design**: Gradient effects, hover animations, and polished UI
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Static site generation for fast loading
- **Accessibility**: Semantic HTML and keyboard navigation support

---

## 🏗️ Architecture & Design Decisions

### Technology Stack

**Framework**: Next.js 14 with App Router
- Chosen for excellent performance, SEO capabilities, and developer experience
- Static site generation (SSG) for free hosting compatibility
- Built-in optimizations and code splitting

**Language**: TypeScript
- Type safety reduces bugs and improves code maintainability
- Better IDE support and documentation

**Styling**: Tailwind CSS
- Utility-first approach for rapid development
- Consistent design system with easy customization
- Optimal bundle size with purging

**Animations**: Framer Motion
- Industry-standard animation library
- Declarative syntax for complex animations
- Performance-optimized with hardware acceleration

### Architecture

```
website/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page orchestrating all sections
├── components/              # React components
│   ├── LoadingScreen.tsx    # Initial loading animation
│   ├── Navbar.tsx           # Persistent navigation bar
│   ├── HomeSection.tsx      # Hero section
│   ├── AboutSection.tsx     # About me with skills
│   ├── ProjectsSection.tsx  # Project showcase
│   └── ExperienceSection.tsx # Timeline of experience
├── public/                  # Static assets (if needed)
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

### Design Patterns

1. **Component-Based Architecture**: Each section is a self-contained component
2. **Client-Side Interactivity**: 'use client' directive for interactive components
3. **Intersection Observer**: Scroll-based animations trigger when elements enter viewport
4. **Progressive Enhancement**: Core content works without JavaScript
5. **Mobile-First Design**: Responsive breakpoints ensure mobile compatibility

---

## 🚀 Hosting & Deployment

### Hosting Provider: Vercel

**Why Vercel?**
- ✅ **Free tier**: Generous limits for personal projects
- ✅ **Automatic deployments**: Deploy on every git push
- ✅ **Custom domain support**: Free SSL certificates
- ✅ **Edge network**: Fast global CDN
- ✅ **Zero configuration**: Optimized for Next.js
- ✅ **Always online**: 99.99% uptime SLA

### Deployment Methods

#### Method 1: Deploy with Vercel (Recommended)

1. **Install Vercel CLI** (optional but recommended):
   ```bash
   npm install -g vercel
   ```

2. **Deploy from the command line**:
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Link to your Vercel account (create one if needed)
   - Link to existing project or create new one
   - Accept default settings

3. **Production deployment**:
   ```bash
   vercel --prod
   ```

Your site will be live at: `https://your-project-name.vercel.app`

#### Method 2: Deploy via GitHub Integration

1. **Push code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js settings
   - Click "Deploy"

3. **Automatic deployments**:
   - Every push to `main` branch automatically deploys
   - Pull requests get preview URLs

#### Method 3: Manual Upload

1. **Build the static site**:
   ```bash
   npm run build
   ```

2. **Upload the `out/` folder** to any static hosting service (Netlify, GitHub Pages, etc.)

### Custom Domain Setup

**Free Domain Options**:
- Use Vercel's subdomain: `your-name.vercel.app`
- Or purchase a domain ($10-15/year) and connect it in Vercel dashboard

**To add a custom domain**:
1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your domain
4. Update DNS records as instructed
5. Vercel automatically provisions SSL certificate

---

## 💻 Local Development

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)
- Git

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build production-ready static site
npm run start    # Start production server (for testing)
npm run lint     # Run ESLint to check code quality
```

---

## 🎨 Customization Guide

### Update Personal Information

1. **Name & Title** (`components/HomeSection.tsx`):
   ```typescript
   <h1>Vincent Giang</h1>
   <p>Developer • Creator • Problem Solver</p>
   ```

2. **About Me** (`components/AboutSection.tsx`):
   - Update bio paragraphs
   - Modify skills array

3. **Projects** (`components/ProjectsSection.tsx`):
   - Edit projects array with your own projects
   - Add links to live demos and source code

4. **Experience** (`components/ExperienceSection.tsx`):
   - Update experiences array with your work history
   - Modify social media links

### Color Scheme

Colors are defined in `tailwind.config.ts` and use Tailwind's color palette:
- Primary gradient: `from-blue-400 to-purple-500`
- Background: `bg-black` with gradient overlays
- Adjust these throughout components for different themes

### Animations

All animations use Framer Motion. Adjust timing, delays, and effects in component files:
- `transition={{ duration: 0.8, delay: 0.2 }}`
- Modify `initial`, `animate`, and `exit` props

---

## 📱 Responsive Design

The site is optimized for all screen sizes:

- **Mobile** (< 768px): Stacked layout, hamburger menu
- **Tablet** (768px - 1024px): Adaptive grid layouts
- **Desktop** (> 1024px): Full feature experience

Breakpoints are defined using Tailwind's responsive prefixes:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px

---

## ⚠️ Limitations & Trade-offs

### Free Hosting Constraints

**Vercel Free Tier**:
- ✅ Unlimited personal projects
- ✅ 100 GB bandwidth/month
- ✅ Automatic HTTPS
- ❌ No custom domain (paid: $20/year if needed)
- ❌ Limited to static sites or serverless functions

**Alternatives if needed**:
- **GitHub Pages**: Free, but requires public repo
- **Netlify**: Similar to Vercel, free tier available
- **Cloudflare Pages**: Free with generous limits

### Technical Trade-offs

1. **Static Export**: Site is pre-rendered for free hosting
   - Pro: Blazing fast, no server costs
   - Con: No server-side dynamic content

2. **Image Optimization**: Using `unoptimized: true` for static export
   - Pro: Works on any host
   - Con: Images not automatically optimized

3. **Sample Content**: Currently uses placeholder data
   - You'll need to replace with your actual content

---

## 🔧 Troubleshooting

### Build Errors

**Issue**: Module not found errors
```bash
rm -rf node_modules package-lock.json
npm install
```

**Issue**: TypeScript errors
```bash
npm run lint
# Fix reported issues
```

### Deployment Issues

**Issue**: Vercel deployment fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Next.js config is correct

**Issue**: 404 on deployed site
- Ensure `output: 'export'` is in `next.config.js`
- Check that all routes are statically generated

---

## 📦 Dependencies

### Production Dependencies
- `next`: ^14.2.0 - React framework
- `react`: ^18.3.1 - UI library
- `react-dom`: ^18.3.1 - React DOM renderer
- `framer-motion`: ^11.0.0 - Animation library

### Development Dependencies
- `typescript`: ^5.3.0 - Type safety
- `tailwindcss`: ^3.4.0 - Utility CSS
- `eslint`: ^8.56.0 - Code linting
- Additional type definitions and tooling

---

## 📄 License

This project is open source and available for personal use. Feel free to fork and customize for your own website!

---

## 🤝 Support

For issues or questions:
1. Check this README first
2. Review Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
3. Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)

---

## 🎯 Next Steps

After deployment:

1. ✅ Update all placeholder content with your information
2. ✅ Add your actual projects with links
3. ✅ Connect social media profiles
4. ✅ Consider adding a contact form
5. ✅ Set up analytics (Vercel Analytics is free)
6. ✅ Add your resume/CV as downloadable PDF
7. ✅ Create a custom domain (optional)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
