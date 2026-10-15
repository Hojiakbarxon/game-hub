<div align="center">

# 🎮 Game Hub

**Discover and explore thousands of video games — filter by genre and platform, sort, search, and dive into trailers and screenshots.**

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Chakra UI](https://img.shields.io/badge/Chakra_UI-2-319795?logo=chakraui&logoColor=white)
![React Query](https://img.shields.io/badge/TanStack_Query-5-FF4154?logo=reactquery&logoColor=white)

</div>

---

## 📖 About

**Game Hub** is a responsive front-end application for browsing video games, built with React and TypeScript. It consumes the public [RAWG Video Games Database API](https://rawg.io/apidocs) and lets users explore games by genre and platform, search by name, change the sort order, and open a detailed page for every game with its description, attributes, trailer, and screenshots.

The project focuses on clean architecture: a typed API layer, reusable data-fetching hooks, global state with Zustand, and smart caching with React Query.

## ✨ Features

- 🔍 **Search** — find games by name from the navigation bar
- 🧭 **Genre filter** — browse by genre from the sidebar (desktop)
- 🖥️ **Platform filter** — PC, PlayStation, Xbox, Nintendo, Mac, Linux, Android, iOS and more
- ↕️ **Sorting** — order by relevance, date added, name, release date, popularity, or average rating
- ♾️ **Infinite scroll** — games load automatically as you scroll
- 🎬 **Game detail page** — description with *Show more / Show less*, platforms, metascore, genres, publishers, trailer, and screenshot gallery
- 🌗 **Dark / Light mode** — dark by default, with a custom Chakra UI theme
- 🦴 **Skeleton loaders** — smooth loading states while data is fetched
- 📱 **Fully responsive** — grid adapts from 1 to 4 columns depending on screen size
- ⚠️ **Error handling** — dedicated error page for invalid routes and unexpected errors
- ⚡ **Optimized caching** — query results are cached for 24 hours; genres and platforms are preloaded with static data for instant rendering

## 🛠️ Tech Stack

| Category | Technologies |
| --- | --- |
| **Framework** | React 19, TypeScript |
| **Build tool** | Vite |
| **UI library** | Chakra UI, Emotion, Framer Motion |
| **Server state** | TanStack React Query (with `useInfiniteQuery`) |
| **Client state** | Zustand |
| **Routing** | React Router v6 |
| **HTTP client** | Axios |
| **Icons** | React Icons |
| **Linting** | Oxlint |

## 🏗️ Architecture

```
src/
├── assets/        # Logo, emoji images, placeholder image
├── components/    # Reusable UI components (GameCard, GenreList, NavBar, ...)
├── data/          # Static genres & platforms used as initial data
├── entities/      # TypeScript interfaces (Game, Genre, Platform, ...)
├── hooks/         # Data-fetching hooks (useGames, useGenres, useTrailers, ...)
├── pages/         # Route pages (HomePage, GameDetailPage, Layout, ErrorPage)
├── services/      # API client and image URL helper
├── routes.tsx     # Application routes
├── store.ts       # Zustand store for game query state
└── theme.ts       # Chakra UI theme configuration
```

**Key design decisions**

- **Generic `APIClient<T>` class** — one typed Axios wrapper reused for every endpoint (games, genres, platforms, screenshots, trailers).
- **Custom hooks per resource** — components stay clean; all fetching, caching, and pagination logic lives in hooks.
- **Centralized query state** — genre, platform, sort order, and search text live in a single Zustand store, and the React Query key depends on it, so any filter change automatically refetches the right data.
- **Optimized images** — game thumbnails are requested in a cropped 600×400 size to reduce bandwidth.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (or yarn / pnpm)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Hojiakbarxon/game-hub.git

# 2. Go to the project folder
cd game-hub

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Using your own API key

The project uses the free [RAWG API](https://rawg.io/apidocs). Get your own key and set it in `src/services/api-client.ts`:

```ts
params: {
  key: "YOUR_RAWG_API_KEY"
}
```

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint the code with Oxlint |


## 👨‍💻 Author

**Hojiakbarxon Olimxo'jayev**
Fullstack(Backend focused) developer.

[![GitHub](https://img.shields.io/badge/GitHub-hojiakbarxon-181717?logo=github)](https://github.com/hojiakbarxon)

## 🙏 Acknowledgements

- [RAWG](https://rawg.io/) for the games database API
- [Chakra UI](https://chakra-ui.com/) for the component library

---

<div align="center">

⭐ If you like this project, consider giving it a star!

</div>
