# LinkedIn Clone – Frontend

A React frontend that mimics core LinkedIn flows: landing, sign up, login, and feeds, with a responsive navbar and Google Sign-In.

## Tech stack

- **React 19** + **TypeScript**
- **Vite** (Rolldown) – dev server and build
- **Tailwind CSS 4** – styling
- **React Router 7** – routing
- **MUI (Material UI)** – icons and components
- **@react-oauth/google** – Google Sign-In

## Features

- **Landing page** – hero, “Continue with Google”, “Sign in with email”, legal links
- **Sign up / Login** – email forms and Google Sign-In
- **Feeds** – placeholder feed view (for logged-in users)
- **Navbar** – two variants: minimal (guest) and full nav with search, Home, My Network, Jobs, Messages, Notifications, Profile
- **Footer** – site-wide footer
- **Constants** – shared routes, nav config, and class names in `src/constants/`

## Prerequisites

- **Node.js** 18+ (recommend 20+)
- **npm** (or yarn/pnpm)

## Getting started

### 1. Clone and install

```bash
git clone <repository-url>
cd linkedin-frontend
npm install
```

### 2. Environment variables

Google Sign-In needs a client ID:

1. Copy the example env file:
   ```bash
   cp .env.example .env.local
   ```
2. Get a [Google OAuth 2.0 Client ID](https://console.cloud.google.com/apis/credentials) (Web application).
3. In Google Cloud Console, add `http://localhost:5173` (and your production origin) under **Authorized JavaScript origins**.
4. Put the Client ID in `.env.local`:
   ```
   VITE_GOOGLE_CLIENT_ID=your_client_id_here
   ```

### 3. Run the app

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). You should see the landing page.

## Scripts

| Command           | Description                |
|------------------|----------------------------|
| `npm run dev`    | Start dev server (HMR)     |
| `npm run build`  | Production build           |
| `npm run preview`| Serve production build    |
| `npm run lint`   | Run ESLint                 |
| `npm run typecheck` | Run TypeScript check   |

## Project structure

```
src/
├── components/       # Reusable UI (Footer, NavbarV1/V2, GoogleLoginButton)
├── constants/        # appConstants.ts (routes, nav, URLs), classes.ts (shared Tailwind classes)
├── pages/            # Route-level pages (Landing, Login, SignUp, Feeds)
├── App.tsx           # Root layout, routing, navbar toggle by auth state
├── main.tsx          # Entry (React + Router + Google OAuth provider)
└── index.css         # Global styles, Tailwind
```

## Notes

- **Auth state**: The app currently uses a hardcoded `isLoggedIn` in `App.tsx` to switch between guest navbar (Navbar1) and logged-in navbar (Navbar2). Replace this with real auth (e.g. context + token/session) when wiring to a backend.
- **Google Sign-In**: Wrapped in `GoogleOAuthProvider` in `main.tsx`; ensure `VITE_GOOGLE_CLIENT_ID` is set for “Continue with Google” to work.
