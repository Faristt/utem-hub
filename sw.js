const CACHE_NAME = 'utem-hub-moyen-v1';
const assets = [
  '/',
  '/index.html',
  '/manifest.json',
  '/utem mail.png',
  '/utem portal.png',
  '/ulearn.png',
  '/2018 till latest.png',
  '/room booking.png',
  '/pkd dental.jpg',
  '/utem 360.png',
  '/2001 till 2017.png',
  '/moyen.jpg'
];

// Proses Install: Simpan semua aset dalam cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Moyen Service Worker: Caching Assets...');
      return cache.addAll(assets);
    })
  );
});

// Proses Fetch: Ambil dari cache dulu, kalau takde baru guna internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});