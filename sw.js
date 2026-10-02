const VERSION='2.3.7';
const CACHE='kennzeichen-shell-'+VERSION;

const ASSETS=[
  './',
  './index.html',
  './research.html',
  './app.js?v=2.2.1',
  './history.js?v=1',
  './manifest.webmanifest',
  './icon.svg'
];

self.addEventListener('install',event=>{
  event.waitUntil(
    caches.open(CACHE)
      .then(cache=>cache.addAll(ASSETS))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(
        keys
          .filter(key=>key.startsWith('kennzeichen-shell-') && key!==CACHE)
          .map(key=>caches.delete(key))
      ))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  const request=event.request;

  if(
    request.method!=='GET' ||
    new URL(request.url).origin!==self.location.origin
  ) return;

  if(request.mode==='navigate'){
    event.respondWith(
      fetch(request)
        .then(response=>{
          if(response.ok){
            const copy=response.clone();
            event.waitUntil(
              caches.open(CACHE).then(cache=>cache.put(request,copy))
            );
          }
          return response;
        })
        .catch(()=>
          caches.match(request)
            .then(hit=>hit||caches.match('./index.html'))
        )
    );
    return;
  }

  event.respondWith(
    caches.match(request)
      .then(hit=>hit||fetch(request)
        .then(response=>{
          if(response.ok){
            const copy=response.clone();
            event.waitUntil(
              caches.open(CACHE).then(cache=>cache.put(request,copy))
            );
          }
          return response;
        })
      )
  );
});
