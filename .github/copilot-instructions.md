# AI Agent Instructions for Esinti E-commerce Project

## Project Overview
This is a modern e-commerce project built with:
- React + TypeScript + Vite
- Shadcn/UI components (based on Radix UI)
- TailwindCSS for styling
- Context API for state management

## Key Architectural Patterns

### Component Organization
- UI components are in `src/components/ui/` - all built on Shadcn/UI system
- Business components are in `src/components/` - reusable sections like `Hero`, `Categories`, etc.
- Pages are in `src/pages/` - each corresponds to a main route
- Context providers in `src/contexts/` handle global state

### State Management
- Cart state is managed through `CartContext` (`src/contexts/CartContext.tsx`)
- Uses localStorage for cart persistence
- Cart items include: id, title, price, variant, quantity, image

### Data Flow
- Product data is stored in `src/data/products.ts`
- Components fetch data through context providers
- State updates trigger localStorage sync and component re-renders

### UI Component Guidelines
- Use Shadcn/UI components from `components/ui/` for consistency
- Custom components should follow Shadcn/UI patterns for styling
- Forms should use react-hook-form with zod validation

## Development Workflow

### Setup & Running
```bash
npm install  # Install dependencies
npm run dev  # Start dev server
```

### Build & Deploy
```bash
npm run build      # Production build
npm run build:dev  # Development build
npm run preview    # Preview production build
```

### Code Organization Conventions
- Place new UI components in `src/components/ui/`
- Business components go in `src/components/`
- Use TypeScript interfaces for component props
- Keep pages simple - logic should live in components/hooks

## Common Integration Points
- Cart updates through `useCart` hook from CartContext
- Product data imports from `src/data/products.ts`
- Responsive design uses `use-mobile` hook for mobile detection
- Toast notifications via `use-toast` hook

## Best Practices
- Use TypeScript for type safety
- Follow Shadcn/UI component patterns
- Keep business logic in custom hooks
- Use context for global state
- Persist user data in localStorage where needed