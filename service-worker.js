// simple passthrough implementation of a service worker
// consider workbox for better service worker implementation: https://developers.google.com/web/tools/workbox/
self.addEventListener("fetch", e => e.respondWith(fetch(e.request)));
