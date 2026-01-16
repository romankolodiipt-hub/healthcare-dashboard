# Healthcare Dashboard - AI Coding Instructions

## Architecture Overview

**Stack:** Next.js 16 App Router + React 19 + TypeScript 5 + Tailwind CSS 4

**Data Flow:**

1. Server: `app/layout.tsx` fetches patient data via `fetchData()` at build/runtime
2. Provider: `PatientsProvider` wraps app with `PatientContextType` context
3. Client: Components consume via `useContext(PatientsContext)` or `useGetPatient()` hook
4. SSG: Dynamic routes pre-render via `generateStaticParams()` in `[slug]/page.tsx`

## Critical Patterns

### Context Structure (Modified Pattern)

```tsx
// Context provides { patients: Patient[], isLoading: boolean, error: string | null }
// NOT just Patient[] array - this was recently refactored
const context = useContext(PatientsContext);
const patients = context?.patients || []; // Always use optional chaining
```

**Why:** Previously caused re-renders on window resize. Now immutable after initial load.

### Performance Optimizations

```tsx
// ALL list/card components MUST use React.memo
export const ComponentName = memo(Component, (prev, next) => {
  return prev.patient.name === next.patient.name; // Custom comparison
});
```

**Files using memo:** `PatientCard.tsx`, `Patients.tsx`

### Image Optimization (Required Pattern)

```tsx
<Image
  src={url}
  alt={`Descriptive text with ${variable}`} // NOT "Not Found" or generic text
  width={192}
  height={192}
  priority={false} // Only true for above-fold images
  sizes="(max-width: 768px) 96px, 192px" // Responsive sizes
  quality={75} // Default is 100, use 75 for balance
/>
```

### API Integration with Retry Logic

`src/utils/fetchData.ts` implements:

- 3 retry attempts with exponential backoff (1s, 2s, 3s)
- Automatic fallback to `MOCK_DATA_PATIENTS` on failure
- Validates `AUTH_USERNAME` and `AUTH_PASSWORD` env vars

**Never call API directly** - always use `fetchData()` wrapper.

### SSG Pattern for Dynamic Routes

```tsx
// REQUIRED in app/patients/[slug]/page.tsx
export async function generateStaticParams() {
  const patients = await fetchData();
  return patients.map(({ name }) => ({ slug: convertToSlug(name) }));
}
```

## File Organization

```
src/
├── components/     # All "use client" - use memo for lists
├── context/        # PatientContextType definition
├── providers/      # Context provider wrapper
├── hooks/          # useGetPatient() for current patient by slug
├── utils/          # fetchData (with retry), convertToSlug, convertDate
├── types/          # Central TypeScript definitions
└── consts/         # MOCK_DATA_PATIENTS, table headers
```

## TypeScript Conventions

**Patient Context Type:**

```tsx
interface PatientContextType {
  patients: Patient[];
  isLoading: boolean;
  error: string | null;
}
```

**New types added:** `MonthsEnum`, enhanced `LabResult` interface, `ApiResponse<T>` generic

**All utility functions have JSDoc** - follow this pattern for new functions.

## Component Patterns

### Client Components

- Start with `"use client"`
- Import types from `@/src/types/types`
- Use absolute imports: `@/src/...` NOT relative `../`

### Accessibility Requirements

- Buttons: `aria-label` for icon-only buttons
- Images: Descriptive `alt` text (not "Not Found")
- Headings: Use `sr-only` class for screen-reader-only titles
- Links: Add `aria-current="page"` for active nav items

### Tailwind Conventions

Custom colors defined in `tailwind.config.js`:

- `primary`: #01F0D0 (Turquoise) - use `bg-primary` instead of hex
- `secondary`: #072635 (Dark Blue)
- `accent`: #E66FD2 (Pink)

Custom animations: `animate-fadeIn`, `animate-slideDown`

**Always use `transition-*` classes** for hover states, not raw CSS.

## Known Issues & Deprecated Code

**DEPRECATED:** `useResize()` hook still exists for backward compatibility but should NOT be used in new code. It caused unnecessary context re-creation.

**Fixed bugs to avoid:**

- ❌ Copying wrong prop: `level={respiratory_rate.levels}` for temperature card
- ❌ Using context directly as array: `useContext(PatientsContext)` returns object now
- ❌ Missing memo on list components causes performance issues

## Development Workflow

```bash
pnpm dev          # Development with hot reload
pnpm build        # Production build + SSG generation
pnpm start        # Serve production build
pnpm lint         # ESLint check
```

**Environment:** Create `.env.local` with `AUTH_USERNAME` and `AUTH_PASSWORD` (optional - falls back to mocks)

## When Making Changes

1. **Adding new patient-consuming components:** Use `useGetPatient()` hook, not raw context
2. **New list components:** Always wrap with `memo()` and custom comparison
3. **New API calls:** Add to `fetchData.ts` with retry logic, never direct fetch
4. **New utilities:** Add JSDoc comments following existing pattern
5. **New types:** Add to `src/types/types.ts`, use interfaces for objects
6. **Images:** Always include `sizes` prop for responsive optimization

## Comments Convention

- Code comments in Ukrainian (`// Отримуємо контекст...`)
- JSDoc in Ukrainian or English
- Git commits in English with emoji prefixes (🐛, ⚡, 📊, etc.)
