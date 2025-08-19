# Overview

This is a portfolio website application built as a full-stack TypeScript project showcasing a data engineer's professional experience, skills, and education. The application features a modern, responsive design with smooth animations and interactive elements. It serves as a comprehensive resume and portfolio platform with sections for experience, projects, skills, education, and contact information.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system and CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible components
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds
- **Design System**: Custom color palette with primary (blue), secondary (green), and accent (purple/orange) colors

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development Server**: Custom Vite integration for seamless full-stack development
- **API Structure**: RESTful API with `/api` prefix routing
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Logging**: Custom request/response logging middleware for API endpoints

## Data Architecture
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Shared TypeScript schemas using Zod for validation
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Data Models**: Structured schemas for projects, experience, skills, education, and contact information

## Component Architecture
- **Layout**: Single-page application with smooth scrolling navigation
- **Animation**: Intersection Observer API for scroll-triggered animations
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Component Structure**: Modular components for each portfolio section (Hero, Experience, Skills, Education, Contact)
- **Icon System**: Lucide React icons with dynamic icon mapping based on content types

## Development Workflow
- **Type Safety**: Comprehensive TypeScript configuration with strict mode
- **Path Aliases**: Organized imports with `@/` for client code and `@shared/` for shared utilities
- **Hot Reload**: Vite HMR for instant development feedback
- **Build Process**: Optimized production builds with code splitting and asset optimization

## Deployment Architecture
- **Static Assets**: Vite-generated static files served from `/dist/public`
- **Server Bundle**: ESBuild-compiled Node.js server for production
- **Environment**: Environment-based configuration for development and production modes

# External Dependencies

## Database & ORM
- **PostgreSQL**: Primary database using Neon serverless PostgreSQL
- **Drizzle ORM**: Type-safe ORM with migration support
- **Drizzle Kit**: Database migration and schema management tools

## UI & Styling
- **Radix UI**: Comprehensive set of accessible React primitives (accordion, dialog, dropdown, etc.)
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Class Variance Authority**: Type-safe variant API for component styling
- **Embla Carousel**: Touch-friendly carousel component

## Development Tools
- **Vite**: Build tool and development server
- **ESBuild**: Fast JavaScript bundler for production
- **TSX**: TypeScript execution for development server
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## React Ecosystem
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with Hookform resolvers
- **Wouter**: Lightweight routing library
- **React Day Picker**: Date picker component

## Utilities
- **Zod**: TypeScript-first schema validation
- **Date-fns**: Date utility library
- **clsx & tailwind-merge**: Conditional CSS class utilities
- **nanoid**: Unique ID generation

## Fonts & Assets
- **Google Fonts**: Inter, Architects Daughter, DM Sans, Fira Code, and Geist Mono
- **Lucide React**: Icon library for consistent iconography

## Development Integrations
- **Replit**: Development environment with specific Vite plugins for Replit integration
- **Runtime Error Modal**: Development error handling overlay