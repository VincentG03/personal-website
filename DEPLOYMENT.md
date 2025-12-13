# Deployment Guide

## Deploy to Vercel (Recommended - Free Forever)

### Option 1: CLI Deployment (Fastest)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```
   
3. For production:
   ```bash
   vercel --prod
   ```

### Option 2: GitHub Integration (Most Popular)

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Personal website"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. Go to https://vercel.com
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"
   - Done! Auto-deploys on every push

### Your Live URL

After deployment, your site will be available at:
- `https://YOUR-PROJECT-NAME.vercel.app`

### Custom Domain (Optional)

1. In Vercel dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records as shown
4. SSL automatically configured

---

## Alternative Hosting Options

### Netlify (Also Free)

```bash
npm run build
# Drag the 'out' folder to netlify.app/drop
```

### GitHub Pages (Free, Public Repo Only)

1. Add to `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy
   on:
     push:
       branches: [main]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

2. Enable GitHub Pages in repo settings

---

## Environment Setup

No environment variables required for basic deployment!

## Build Verification

Before deploying:
```bash
npm run build
```

Check the `out/` folder is generated.

---

## Post-Deployment

✅ Test your live site on mobile and desktop
✅ Set up Vercel Analytics (free)
✅ Configure custom domain if desired
✅ Add to your resume/LinkedIn
✅ Share with the world! 🚀
