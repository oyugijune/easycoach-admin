const CACHE_NAME= "EasyCoach-Admin-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/styles/index.css",
    "/scripts/index.js",
    "/scripts/log-in.js",
    "/scripts/reg.js",
    "/scripts/rec.js",
    "/images/icon.png"
];

self.addEventListener("install", (event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache)=>{
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", (event)=>{
    event.respondWith(
        caches.match(event.request).then((response)=>{
            return response || fetch(event.request);
        })
    );
});

self.addEventListener("activate", (event)=>{
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(caches.keys().then((cacheNames)=> Promise.all(
        cacheNames.map((cacheName)=>{
            if (!cacheWhitelist.includes(cacheName)){
                return caches.delete(cacheName)
            }
        })
    )))
})