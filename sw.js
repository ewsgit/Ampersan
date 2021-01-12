const Ampercache = "Ampersanv1"
const Ampercachecomps = [
  "/",
  "/assets/",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(Ampercache).then(cache => {
      cache.addAll(Ampercachecomps)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )   
  })