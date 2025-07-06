# Fusion Art Gallery - Replit Documentation

## Overview

Fusion Art Gallery is a full-stack web application showcasing a handcrafted resin art business based in Surat, Gujarat. The application serves as a portfolio and contact platform for displaying custom resin art products including photo frames, clocks, and decorative pieces.

## System Architecture

### Full-Stack Architecture
- **Frontend**: React with TypeScript using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **UI Framework**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom theme variables
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side routing

### Monorepo Structure
The application follows a monorepo pattern with shared code:
- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Shared TypeScript schemas and types

## Key Components

### Frontend Architecture
- **Component Library**: Built on shadcn/ui with extensive Radix UI components
- **Theme System**: Custom light/dark theme implementation with CSS variables
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Form Handling**: React Hook Form with Zod validation (configured but not actively used)
- **Query Management**: TanStack Query for API calls and caching

### Backend Architecture
- **API Server**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: Configured with connect-pg-simple for PostgreSQL sessions
- **Development Tools**: Hot reload with Vite integration
- **Error Handling**: Centralized error middleware

### Database Schema
- **Users Table**: Basic user authentication structure with username/password
- **Migrations**: Drizzle Kit for database migrations in `./migrations`
- **Type Safety**: Full TypeScript integration with Drizzle ORM

### UI Components
- **Design System**: Comprehensive component library with consistent styling
- **Accessibility**: ARIA-compliant components via Radix UI
- **Theming**: CSS custom properties for consistent color schemes
- **Animation**: Smooth transitions and hover effects
- **Icons**: Lucide React icon library

## Data Flow

### Client-Server Communication
1. Frontend makes API requests via TanStack Query
2. Express server handles requests with TypeScript middleware
3. Drizzle ORM manages database interactions
4. Responses flow back through the query client cache

### State Management
- **Server State**: Managed by TanStack Query with automatic caching
- **UI State**: Local React state for component interactions
- **Theme State**: Context-based theme provider with localStorage persistence
- **Form State**: React Hook Form for complex form handling

### Database Interactions
- **Connection**: Neon Database serverless PostgreSQL
- **ORM**: Drizzle with full TypeScript support
- **Schema**: Centralized in `shared/schema.ts`
- **Migrations**: Automated with Drizzle Kit

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router
- **class-variance-authority**: Component variant management

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **date-fns**: Date manipulation utilities

### Development Dependencies
- **vite**: Fast build tool and dev server
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling for server code

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle pushes schema changes to PostgreSQL

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)

### Production Setup
- Server serves static files from `dist/public`
- API routes prefixed with `/api`
- PostgreSQL database hosted on Neon
- Express server handles both API and static file serving

### Development Workflow
- **Hot Reload**: Vite dev server with Express integration
- **Database**: Live schema changes with `npm run db:push`
- **Type Checking**: Continuous TypeScript compilation
- **Error Overlay**: Runtime error handling in development

## Changelog

```
Changelog:
- July 06, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```