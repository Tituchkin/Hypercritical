const cacheName="Hypercritical-offline";let offlineUrl="offline.html",offlineFont="fonts/MonumentExtended-Regular.woff",offlineMask="assets/masks/hypercritical-main-logo.png";const cacheAssets=[offlineUrl,offlineFont,offlineMask];self.addEventListener("install",(e=>{e.waitUntil(caches.open(cacheName).then((e=>{e.addAll(cacheAssets)})).then((()=>self.skipWaiting())))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((e=>Promise.all(e.map((e=>{if(e!==cacheName)return caches.delete(e)}))))))})),self.addEventListener("fetch",(e=>{e.respondWith(fetch(e.request).catch((()=>caches.match(offlineUrl))))}));