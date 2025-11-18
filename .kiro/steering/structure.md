# Project Structure

## Root Directory

```
├── src/                    # Source code
├── public/                 # Static assets (favicon, robots.txt, etc.)
├── .kiro/                  # Kiro AI assistant configuration
├── .github/                # GitHub workflows and configuration
├── node_modules/           # Dependencies
└── [config files]          # Vite, TypeScript, Tailwind, ESLint configs
```

## Source Directory (`src/`)

```
src/
├── pages/                  # Route components (one per page)
├── components/             # Reusable React components
│   └── ui/                # shadcn/ui components (auto-generated)
├── contexts/              # React Context providers
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── data/                  # Static data and constants
├── assets/                # Images and media files
├── App.tsx                # Root application component
├── main.tsx               # Application entry point
└── index.css              # Global styles and Tailwind imports
```

## Architecture Patterns

### Pages
- Each route has a dedicated page component in `src/pages/`
- Page components are registered in `App.tsx` routes
- Pages compose smaller components from `src/components/`

### Components
- Feature components live in `src/components/` (e.g., Navigation, Hero, Footer)
- UI primitives from shadcn/ui live in `src/components/ui/`
- Components should be self-contained and reusable

### State Management
- Global state uses React Context (see `CartContext.tsx`)
- Server state uses TanStack Query
- Local state uses React hooks

### Styling
- Tailwind utility classes for styling
- CSS variables defined in `index.css` for theming
- Custom animations and gradients configured in `tailwind.config.ts`
- Use `cn()` utility from `@/lib/utils` for conditional classes

### Routing
- React Router DOM handles all routing
- Routes defined in `App.tsx`
- Dynamic routes use URL parameters (e.g., `/product/:id`)

## File Naming Conventions

- React components: PascalCase (e.g., `ProductPage.tsx`, `Navigation.tsx`)
- Utilities and hooks: kebab-case (e.g., `use-mobile.tsx`, `use-toast.ts`)
- Data files: kebab-case (e.g., `products.ts`)
- CSS files: kebab-case (e.g., `index.css`)

## Import Conventions

Always use path aliases for imports:
```typescript
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/CartContext"
import { cn } from "@/lib/utils"
```

Avoid relative imports like `../../components/...`
