# 🏥 Healthcare Dashboard

A modern, responsive healthcare dashboard application for monitoring patient health data, diagnosis history, and vital statistics. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

![Healthcare Dashboard](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## ✨ Features

- 📊 **Interactive Patient Dashboard** - Real-time patient health monitoring
- 📈 **Diagnosis History** - Visual blood pressure charts with Chart.js
- 🔍 **Patient Search** - Quick search and navigation
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- ⚡ **Performance Optimized** - React.memo, SSG, and optimized images
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🔐 **Secure API Integration** - Basic authentication with retry logic
- 🎨 **Modern UI** - Clean, professional healthcare interface

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/romankolodiipt-hub/healthcare-dashboard.git
cd healthcare-dashboard
```

2. **Install dependencies**

```bash
pnpm install
# or
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the project root:

```env
AUTH_USERNAME=your_username
AUTH_PASSWORD=your_password
```

> **Note:** If credentials are not provided, the app will automatically fallback to mock data.

4. **Run the development server**

```bash
pnpm dev
# or
npm run dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build & Deploy

### Production Build

```bash
pnpm build
pnpm start
```

### Static Export (SSG)

```bash
pnpm build
```

The application uses `generateStaticParams()` to pre-render all patient pages at build time for optimal performance.

## 🏗️ Project Structure

```
healthcare-dashboard/
├── app/                          # Next.js 16 App Router
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Home page
│   └── patients/
│       ├── [slug]/
│       │   └── page.tsx         # Dynamic patient pages (SSG)
│       └── layout.tsx
├── src/
│   ├── components/              # React components
│   │   ├── Chart.tsx           # Blood pressure chart
│   │   ├── PatientCard.tsx     # Patient profile card (memoized)
│   │   ├── Patients.tsx        # Patient list sidebar (memoized)
│   │   ├── HealthMetrics.tsx   # Vital signs display
│   │   └── ...
│   ├── context/
│   │   └── Context.tsx         # Patient data context with types
│   ├── providers/
│   │   └── providers.tsx       # Context provider wrapper
│   ├── hooks/
│   │   └── hooks.ts            # Custom React hooks
│   ├── utils/
│   │   ├── fetchData.ts        # API fetch with retry logic
│   │   └── utils.ts            # Utility functions (JSDoc)
│   ├── types/
│   │   └── types.ts            # TypeScript definitions
│   └── consts/
│       └── consts.ts           # Constants and mock data
├── public/                      # Static assets
│   ├── icons/
│   └── images/
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.ts              # Next.js configuration
```

## 🛠️ Technologies

### Core

- **Next.js 16.1** - React framework with App Router
- **React 19.2** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS

### Data Visualization

- **Chart.js 4.5** - Interactive charts
- **react-chartjs-2 5.3** - React wrapper for Chart.js

### UI/UX

- **react-loading-skeleton 3.5** - Loading states
- **Next/Image** - Optimized image loading
- **Custom animations** - Smooth transitions

## 🔧 Recent Optimizations

### Performance

- ✅ **React.memo** - Prevents unnecessary re-renders in PatientCard and Patients components
- ✅ **Image Optimization** - Responsive sizes, quality tuning, and proper alt text
- ✅ **SSG (Static Site Generation)** - Pre-rendered patient pages for instant loading
- ✅ **Code Splitting** - Automatic by Next.js App Router

### Reliability

- ✅ **Retry Logic** - Exponential backoff for API failures (3 retries with 1s, 2s, 3s delays)
- ✅ **Fallback Data** - Automatic switch to mock data if API is unavailable
- ✅ **Error Boundaries** - Graceful error handling

### Code Quality

- ✅ **TypeScript** - Full type coverage with strict mode
- ✅ **JSDoc Comments** - Comprehensive documentation for all utilities
- ✅ **Enhanced Types** - PatientContextType with isLoading/error states
- ✅ **Enum Support** - MonthsEnum for type-safe month handling

### Bug Fixes

- 🐛 **Fixed:** Temperature level bug in HealthMetrics (was showing respiratory_rate.levels)
- 🐛 **Fixed:** Context re-creation on window resize (removed unnecessary useResize pattern)

## 📊 API Integration

The app fetches patient data from:

```
https://fedskillstest.coalitiontechnologies.workers.dev
```

**Authentication:** Basic Auth (Base64 encoded)

**Features:**

- Automatic retry on failure (3 attempts)
- Exponential backoff (1s → 2s → 3s)
- Fallback to mock data
- No-store cache policy for fresh data

## 🎨 Design Features

- **Custom Color Palette:**

  - Primary: `#01F0D0` (Turquoise)
  - Secondary: `#072635` (Dark Blue)
  - Accent: `#E66FD2` (Pink)

- **Animations:**

  - Fade In: 0.3s ease-in
  - Slide Down: 0.3s ease-out
  - Smooth transitions on hover states

- **Accessibility:**
  - Screen reader support (`sr-only` classes)
  - Proper ARIA labels and roles
  - Keyboard navigation
  - Semantic HTML

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🧪 Development Scripts

```bash
# Development server with hot reload
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## 📝 Environment Variables

| Variable        | Description                 | Required |
| --------------- | --------------------------- | -------- |
| `AUTH_USERNAME` | API authentication username | No\*     |
| `AUTH_PASSWORD` | API authentication password | No\*     |

\*Falls back to mock data if not provided

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Roman Kolodii

- GitHub: [@romankolodiipt-hub](https://github.com/romankolodiipt-hub)
- Repository: [healthcare-dashboard](https://github.com/romankolodiipt-hub/healthcare-dashboard)

## 🙏 Acknowledgments

- Design inspiration from modern healthcare dashboards
- Chart.js for beautiful data visualization
- Next.js team for the excellent framework
- Tailwind CSS for rapid UI development

---

**Built with ❤️ using Next.js, React, and TypeScript**
