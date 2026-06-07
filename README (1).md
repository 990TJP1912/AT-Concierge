# Pearce Hotel Engine

A personal boutique-hotel collection and recommendation engine. Curated properties rated and scored against a defined taste profile, plus an AI engine that discovers new boutique hotels and vets candidates.

## Features

- **Collection** — region-color-coded cards with ratings, room counts, and attribute charts. Sort, filter, expand.
- **Profile** — a "Taste DNA" view: average attribute scores, region distribution, and stats that update live as the collection changes.
- **Discover** — enter a destination or region; the engine surfaces matching boutique properties scored against the profile.
- **Vet** — enter a specific hotel; the engine scores it against the collection and gives a verdict.
- **Add / Edit** — manage the collection; data persists in the browser via localStorage.

Discover and Vet run on the Anthropic API and support a Quick mode and a Deep mode (with live web search).

## Setup

1. Clone the repo and open `index.html`, or visit the deployed GitHub Pages URL.
2. The collection, profile, and add/edit features work immediately — no setup required.
3. To enable **Discover** and **Vet**, open **Settings** and paste an Anthropic API key (from [console.anthropic.com](https://console.anthropic.com)). The key is stored only in your browser's localStorage and is never sent anywhere except directly to the Anthropic API.

> **Note:** This is a static client-side app. Your API key stays in your own browser. It is never committed to this repository.

## Install as an app (iOS)

Open the live URL in Safari → **Share** → **Add to Home Screen**. It launches full-screen like a native app.

## Data

The collection seed lives in `data/hotels.json`. Your own edits are saved to localStorage and take precedence over the seed.

## Deploy

Static hosting works out of the box (GitHub Pages, Netlify, Vercel). For GitHub Pages: push to `main`, then enable Pages in repo settings (deploy from `main`, root).
