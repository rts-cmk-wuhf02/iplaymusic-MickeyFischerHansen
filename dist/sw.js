let cacheName = 'static-cache-v1';
let fileToCache = [
    '/',
    '/index.html'
]

self.addEventListener('install',function(event){
    console.log('service worker installed');
    event.waitUntil(
        caches.open(cacheName)
        .then(function(cache){
            cache.addAll(fileToCache)
        })
    )
});

self.addEventListener('activate',function(event){
    console.log('activate', event);
});

self.addEventListener('fetch',function(event){
    console.log('fetch', event);
});
