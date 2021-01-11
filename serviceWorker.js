const Ampercache = "Ampersanv1"
const Ampercachecomps = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/Forgot.html",
  "/manifest.json",
  "/favicon.ico",
  "/navbars.css",
  "/Apps.html",
  "/settings_Account.html",
  "/settings_User.html",
  "/assets/Ampersan__alpha_small.png",
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