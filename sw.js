// The Pearce Collection — service worker
// Caches the app shell so it works offline, and (more importantly)
// existing at all is what makes Chrome show the "Install app" prompt.

const CACHE = 'pearce-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './favicon.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Never cache Supabase or Anthropic API calls — those must hit the network live.
  if (url.hostname.includes('supabase.co') || url.hostname.includes('anthropic.com')) {
    return; // let browser handle normally
  }

  // Only handle GETs for caching.
  if (event.request.method !== 'GET') return;

  // Network-first, fall back to cache when offline.
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const clone = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, clone)).catch(() => {});
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
