# Fusion Art Gallery

A modern, responsive website showcasing handcrafted resin art products from Surat, Gujarat. This is a fully static frontend-only website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern black & white design with dark/light mode toggle
- 📱 Fully responsive mobile-first design
- 🖼️ Product gallery with real resin art images
- 📧 Contact form with mailto functionality
- ⚡ Fast loading with Vite build system
- 🌙 Theme persistence with localStorage

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Routing**: Wouter
- **Deployment**: Vercel-ready

## Deployment on Vercel

This website is configured for seamless Vercel deployment:

1. **Connect your repository** to Vercel
2. **Import the project** - Vercel will automatically detect the configuration
3. **Deploy** - The `vercel.json` configuration handles the build process

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Local Development

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

```
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   └── lib/           # Utilities
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
├── vercel.json            # Vercel deployment config
└── README.md
```

## Contact Information

**Fusion Art Gallery**
- **Location**: Surat, Gujarat, India
- **Email**: resinartmoonstone@gmail.com
- **Phone**: +91 93163 46917

## License

MIT License - feel free to use this template for your own art gallery or portfolio website.