// Offline cache. Pages load network-first (so updates reach people right away,
// with no "clear the cache" step); other files are served from cache and refreshed in the background.
const CACHE = 'english-benkyou-v2';
const SHELL = ['./', 'index.html', 'manifest.json', 'icon.svg', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
const keep = (req, res) => {
  if (res.ok && (new URL(req.url).origin === location.origin || req.url.includes('fonts.g'))) {
    const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy));
  }
  return res;
};
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(res => keep(req, res))
      .catch(() => caches.match(req).then(hit => hit || caches.match('index.html'))));
    return;
  }
  e.respondWith(caches.match(req).then(hit => {
    const net = fetch(req).then(res => keep(req, res)).catch(() => hit);
    return hit || net;
  }));
});
