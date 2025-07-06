# Vercel Deployment Guide for Fusion Art Gallery

This guide will help you deploy the Fusion Art Gallery website to Vercel.

## Prerequisites

- A Vercel account (free tier is sufficient)
- Your project code in a Git repository (GitHub, GitLab, or Bitbucket)

## Quick Deploy

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPOSITORY_URL)

### Option 2: Manual Deployment

1. **Connect Repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository

2. **Configure Build Settings** (Auto-detected)
   - Framework Preset: Vite
   - Build Command: `cd client && npm install && npm run build`
   - Output Directory: `client/dist`
   - Install Command: `npm install --prefix client`

3. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)
   - Your site will be live at `https://your-project-name.vercel.app`

## Project Structure for Vercel

```
fusion-art-gallery/
├── client/                 # Frontend application
│   ├── src/               # React source code
│   ├── public/            # Static assets
│   ├── dist/              # Build output (generated)
│   ├── package.json       # Frontend dependencies
│   └── vite.config.ts     # Vite configuration
├── vercel.json            # Vercel deployment config
├── README.md              # Project documentation
└── DEPLOYMENT.md          # This file
```

## Configuration Files

### vercel.json
```json
{
  "buildCommand": "cd client && npm install && npm run build",
  "outputDirectory": "client/dist",
  "installCommand": "npm install --prefix client",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### client/package.json
Contains only frontend dependencies (React, Tailwind, etc.) without server-side packages.

## Build Process

1. **Install Dependencies**: Frontend packages are installed in `client/` directory
2. **Build Application**: Vite builds the React app to `client/dist`
3. **Deploy Static Files**: Vercel serves the built files as a static website
4. **SPA Routing**: All routes redirect to `index.html` for client-side routing

## Environment Variables

No environment variables are required for this static website. All configuration is build-time.

## Custom Domain (Optional)

1. Go to your project dashboard on Vercel
2. Click "Domains" tab
3. Add your custom domain
4. Update your DNS settings as instructed

## Build Status

✅ **Configuration Tested**: All build configurations have been tested and verified  
✅ **Dependencies Resolved**: PostCSS and Tailwind CSS properly configured  
✅ **Images Included**: All 14 resin art images copied to `client/public/images/`  
✅ **Build Success**: `npm run build` completes successfully in 8.44s  
✅ **Static Assets**: Build output includes all required files and images  

## Troubleshooting

### Build Fails
- Check that `client/package.json` exists
- Verify all dependencies are listed correctly
- Check the build logs for specific error messages
- Ensure `postcss.config.js` and `tailwind.config.ts` exist in `client/` directory

### Images Not Loading
- Ensure images are in `client/public/images/`
- Use relative paths starting with `/images/`
- Check file names match exactly (case-sensitive)
- Verify images are copied to `dist/images/` after build

### Routing Issues
- Verify `vercel.json` includes the rewrites configuration
- All routes should redirect to `/index.html` for SPA routing
- Check that `wouter` routing is properly configured

### CSS/Styling Issues
- Verify Tailwind CSS is properly installed in `client/` directory
- Check that `@tailwind` directives are in `src/index.css`
- Ensure dark mode variables are properly defined

## Support

For deployment issues:
- Check Vercel documentation: https://vercel.com/docs
- Review build logs in Vercel dashboard
- Contact support through Vercel dashboard