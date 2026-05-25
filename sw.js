self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('dyemind-cache').then(cache => {
      return cache.addAll([
        '/',
        '/dyemind-ai/',
        '/dyemind-ai/index.html',
        '/dyemind-ai/splash.html',
        '/dyemind-ai/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
