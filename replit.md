# Pinnacle Analytics

## Overview

Pinnacle Analytics is a corporate marketing/landing page website for a data analytics consulting firm. It features a homepage with service offerings, a blog system with individual post pages, and a "Book Demo" inquiry form. The app is a full-stack TypeScript application with a React frontend and Express backend, using PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend (client/)
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router)
- **State/Data Fetching**: TanStack React Query for server state management
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming (corporate blue theme with Inter/Montserrat fonts)
- **Animations**: Framer Motion for scroll reveals and interactions
- **Forms**: React Hook Form with Zod resolver for validation
- **Pages**: Home (landing), Blog (list), BlogPost (detail), BookDemo (inquiry form), 404

### Backend (server/)
- **Framework**: Express 5 on Node.js with TypeScript (run via tsx)
- **API Pattern**: RESTful JSON API under `/api/*` prefix
- **API Contract**: Shared route definitions in `shared/routes.ts` define method, path, input validation (Zod), and response schemas — used by both client and server for type safety
- **Database ORM**: Drizzle ORM with PostgreSQL (node-postgres driver)
- **Schema**: Defined in `shared/schema.ts` using Drizzle's `pgTable`, with Zod schemas generated via `drizzle-zod`
- **Storage Layer**: `server/storage.ts` provides a `DatabaseStorage` class implementing an `IStorage` interface, abstracting all DB operations
- **Dev Server**: Vite dev server is integrated as middleware in development; in production, static files are served from `dist/public`

### Shared Code (shared/)
- `shared/schema.ts` — Database table definitions (inquiries, posts) and Zod validation schemas
- `shared/routes.ts` — API contract object defining endpoints, methods, paths, input/output schemas. Both client hooks and server routes reference this for consistency.

### Build System
- **Dev**: `tsx server/index.ts` runs the server with Vite middleware for HMR
- **Build**: Custom `script/build.ts` runs Vite build for client and esbuild for server, outputting to `dist/`
- **Database Migrations**: `drizzle-kit push` for schema synchronization (no migration files needed in dev)

### Key Design Decisions
1. **Shared API contract** — The `shared/routes.ts` file acts as a single source of truth for API shapes, preventing client-server type drift
2. **No authentication** — This is a public-facing marketing site; no auth system is implemented
3. **Database seeding** — The `seedDatabase()` function in routes.ts populates initial blog posts on server start
4. **Path aliases** — `@/` maps to `client/src/`, `@shared/` maps to `shared/`, configured in both tsconfig and Vite

## External Dependencies

### Database
- **PostgreSQL** — Required. Connection via `DATABASE_URL` environment variable. Uses `pg` (node-postgres) pool with Drizzle ORM.
- **connect-pg-simple** — Listed as dependency (session store), though sessions aren't actively used yet

### Key npm Packages
- **drizzle-orm** + **drizzle-kit** — ORM and migration tooling for PostgreSQL
- **drizzle-zod** — Generates Zod schemas from Drizzle table definitions
- **express** v5 — HTTP server framework
- **@tanstack/react-query** — Client-side data fetching and caching
- **wouter** — Lightweight client-side routing
- **framer-motion** — Animation library
- **react-hook-form** + **@hookform/resolvers** — Form handling with Zod validation
- **shadcn/ui components** — Full suite of Radix-based UI primitives (accordion, dialog, select, toast, etc.)
- **lucide-react** — Icon library
- **recharts** — Charting library (available via shadcn chart component)

### Environment Variables
- `DATABASE_URL` — PostgreSQL connection string (required)