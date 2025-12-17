# Nexora - AI-Powered Ad Automation Platform

A modern, config-driven SaaS frontend built with Next.js 15, TypeScript, and Tailwind CSS. This project implements a fully configurable, white-label ready architecture for AI-powered advertising automation.

## 🚀 Features

- **100% Config-Driven Architecture** - All text, routes, colors, and branding are configurable
- **SEO Optimized** - Server-rendered meta tags, structured data, and OpenGraph support
- **Type-Safe** - Full TypeScript implementation with strict mode
- **Modern Stack** - Next.js 15 App Router, React 19, Tailwind CSS 4
- **Code Quality** - ESLint, Prettier, and Husky pre-commit hooks
- **Responsive Design** - Mobile-first approach with dark theme
- **Accessible** - ARIA-compliant components

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (dashboard)/        # Dashboard routes (authenticated)
│   │   ├── assets/         # Asset library page
│   │   ├── create/         # Campaign creation wizard
│   │   └── projects/       # Projects management
│   └── api/                # API routes (mock endpoints)
├── components/
│   ├── layout/             # Layout components (Header, Footer, Sidebar)
│   └── ui/                 # Reusable UI components
├── config/                 # Configuration files
│   ├── app.config.ts       # App-level settings
│   ├── theme.config.ts     # Design tokens
│   ├── seo.config.ts       # SEO metadata
│   ├── routes.config.ts    # Route definitions
│   ├── navigation.config.ts # Navigation structure
│   ├── i18n.config.ts      # Internationalization
│   └── content/            # Page content configs
├── lib/                    # Utility functions
├── mock/                   # Mock data and API handlers
└── types/                  # TypeScript type definitions
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15.x (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x
- **Icons**: Lucide React
- **Code Quality**: ESLint 9, Prettier, Husky

## 🏃 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/bhuve1996/aiintegration.git
cd aiintegration

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run lint:fix   # Fix ESLint errors
npm run format     # Format code with Prettier
npm run type-check # Run TypeScript compiler check
```

## ⚙️ Configuration

All configuration is centralized in the `/src/config` directory:

### App Configuration (`app.config.ts`)

```typescript
{
  appName: 'Nexora',
  companyName: 'Nexora Technologies',
  domain: 'nexora.ai',
  // ...more settings
}
```

### Theme Configuration (`theme.config.ts`)

```typescript
{
  colors: {
    primary: '#8366FF',
    background: '#0A0A0F',
    // ...all design tokens
  },
  fonts: { ... },
  radius: { ... },
  shadows: { ... }
}
```

### SEO Configuration (`seo.config.ts`)

```typescript
{
  defaultTitle: 'Nexora - AI-Powered Ad Automation',
  pages: {
    home: { title: '...', description: '...' },
    // ...per-page SEO
  },
  structuredData: { ... }
}
```

## 🎨 White-Labeling

To white-label this application:

1. Update `src/config/app.config.ts` with your brand details
2. Modify `src/config/theme.config.ts` colors and fonts
3. Replace logo assets in `/public`
4. Update `src/config/content/` for page content

## 🔧 Development

### Code Style

This project uses ESLint and Prettier for code consistency. Husky runs these checks on pre-commit.

```bash
# Run linting
npm run lint

# Format code
npm run format
```

### Adding New Pages

1. Create page in `/src/app/(dashboard)/[page-name]/page.tsx`
2. Add route config in `/src/config/routes.config.ts`
3. Add SEO config in `/src/config/seo.config.ts`
4. Add content config in `/src/config/content/[page].config.ts`

## 📦 Mock API

The project includes mock API endpoints for development:

- `GET /api/projects` - List all projects
- `POST /api/projects` - Create new project
- `GET /api/assets` - List all assets
- `POST /api/assets` - Upload new asset
- `GET /api/analytics` - Get dashboard analytics

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy to Vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run lint && npm run type-check`
4. Create a pull request

---

Built with ❤️ using Next.js and TypeScript
