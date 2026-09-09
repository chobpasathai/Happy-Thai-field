const CACHE_NAME = 'happy-thai-field-v2';
const urlsToCache = [
  './index.html',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondThem ? event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  ) : event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
