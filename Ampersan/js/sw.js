const Ampercache = "Ampercachev1"
const Ampercachecomps = [
  "/",
  "/Ampersan/assets/",
  "/Ampersan/assets/icons/",
  "/Ampersan/assets/Amperdesktop_Backgrounds/",
  "/Ampersan/js/",
  "/Ampersan/css/",
  "/Ampersan/Settings/",
  "/Ampersan/Settings/html/",
  "/Ampersan/Settings/js/",
  "/Ampersan/",
  "/Ampersan/Amperdesktop/",
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