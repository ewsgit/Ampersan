const Ampercache = "Ampercachev1"
const Ampercachecomps = [
  "/",
  "assets/",
  "assets/icons/",
  "assets/Amperdesktop_Backgrounds/",
  "js/",
  "css/",
  "Settings/",
  "Settings/html/",
  "Settings/js/",
  "",
  "Amperdesktop/",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(Ampercache).then(cache => {
      cache.addAll(Ampercachecomps)
      console.log("Ampercache Has Installed Successfully");
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
        console.log("Ampercache Has Loaded Successfully");
      })
    )   
  })

console.log("Ampercache Has Concluded Successfully!");
console.log(":D");