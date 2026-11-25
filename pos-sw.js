const CACHE_NAME = "one-bite-pos-v4";

const BASE = self.registration.scope;

const APP_FILES = [
  BASE,
  BASE + "pos.html",
  BASE + "pos.webmanifest",
  BASE + "icon-192.png",
  BASE + "icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_FILES))
  );
  self.skipWaiting();
});
