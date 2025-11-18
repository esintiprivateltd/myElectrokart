# Tech Stack

## Core Technologies

- **Build Tool**: Vite 5.4
- **Framework**: React 18.3 with TypeScript 5.8
- **Compiler**: SWC (via @vitejs/plugin-react-swc)
- **Styling**: Tailwind CSS 3.4 with CSS variables for theming
- **UI Components**: shadcn/ui with Radix UI primitives
- **Routing**: React Router DOM 6.30
- **State Management**: React Context API (CartContext) + TanStack Query 5.83
- **Forms**: React Hook Form 7.61 with Zod validation
- **Icons**: Lucide React
- **Notifications**: Sonner toasts

## Key Libraries

- **date-fns**: Date manipulation
- **recharts**: Data visualization
- **embla-carousel-react**: Carousels
- **next-themes**: Theme switching
- **class-variance-authority & clsx**: Conditional styling
- **tailwind-merge**: Tailwind class merging

## Development Tools

- **Linting**: ESLint 9 with TypeScript ESLint
- **Type Checking**: TypeScript with relaxed settings (noImplicitAny: false, strictNullChecks: false)

## Path Aliases

The project uses `@/` as an alias for `./src/`:
- `@/components` → UI components
- `@/lib` → Utility functions
- `@/hooks` → Custom React hooks
- `@/contexts` → React contexts
- `@/pages` → Route pages
- `@/data` → Static data

## Common Commands

```bash
# Development server (runs on port 8080)
npm run dev

# Production build
npm run build

# Development build
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Configuration Notes

- Vite dev server runs on `::` (all interfaces) port 8080
- Component tagger plugin enabled in development mode only
- TypeScript configured with relaxed type checking for rapid development
