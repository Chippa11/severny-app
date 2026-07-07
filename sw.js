const CACHE_NAME = 'severny-app-v5-2-qr-install-20260706';
const FILES = [
  './',
  './index.html',
  './install.html',
  './manifest.json',
  './css/main.css',
  './css/components.css',
  './css/animations.css',
  './css/install.css',
  './js/navigation.js',
  './js/ui.js',
  './js/app.js',
  './js/install.js',
  './assets/logo.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/qr-install.png',
  './assets/images/techpark-bg.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
