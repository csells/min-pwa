importScripts('workbox-sw.prod.v2.1.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "apple-touch-icon.png",
    "revision": "b06202e51935a320fbc61c7861db1939"
  },
  {
    "url": "favicon.ico",
    "revision": "3437ceec028acd2163ffa964432e90e9"
  },
  {
    "url": "icon-192x192.png",
    "revision": "07cdea3af63bea89261db97332d57dd3"
  },
  {
    "url": "icon-512x512.png",
    "revision": "1484cfaa983b90316422414e9a7bd5dc"
  },
  {
    "url": "index.html",
    "revision": "ded21d19da8cbfbe7c45608fe88589cd"
  },
  {
    "url": "manifest.json",
    "revision": "aca72360672e9a96babfab20ecfa4a44"
  },
  {
    "url": "README.md",
    "revision": "6cdd0342c0083206ce770e040c70a30a"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
