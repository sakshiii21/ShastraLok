# ShastraLok

ShastraLok is a React frontend for exploring scripture chapters, a small quiz, map views, and generated illustrations. Scripture content is served from static JSON files in `public/data`; the map loads a public GeoJSON file, and image generation connects to a Gradio model.

**Live site:** [shastra-7eif7otzw-sakshi-s-projects-543a07c8.vercel.app](https://shastra-7eif7otzw-sakshi-s-projects-543a07c8.vercel.app/)

**Source:** [github.com/sakshiii21/ShastraLok](https://github.com/sakshiii21/ShastraLok)

## Features

- Browse scripture collections and chapters from the bundled JSON data.
- Navigate the app's map section, which uses React Leaflet and GeoJSON.
- Take a short quiz with questions stored in the frontend.
- Request an illustration through the configured Gradio model.

## Stack

React · Vite · JavaScript · React Router · Leaflet · React Leaflet · Gradio client

## Run locally

Requires Node.js and npm.

```bash
git clone https://github.com/sakshiii21/ShastraLok.git
cd ShastraLok
npm ci
```

Create `.env.local` in the project root to configure the model used by the image-generation page:

```dotenv
VITE_FLUX_MODEL=your_gradio_model_id
```

Start the development server:

```bash
npm run dev
```

Vite prints the local URL. The image-generation page requires a reachable Gradio model identifier. The map also fetches GeoJSON from an external public URL.

## Scripts

- `npm run dev` — start Vite.
- `npm run build` — build the frontend.
- `npm run lint` — run ESLint.
- `npm run preview` — preview the production build.

## Project layout

- `src/components/` — scripture browser, map, quiz, and image-generation views.
- `src/data/scriptures.js` — scripture navigation data.
- `public/data/script/` — bundled scripture indexes and chapter JSON.
- `public/` — static assets and data.

This repository contains a frontend only; it does not include a Node/Express API or MongoDB service.
