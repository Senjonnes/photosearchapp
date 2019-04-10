self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open('my-pwa-site')
      .then(cache =>
        cache.addAll([
          'js/axios.js',
          'js/vue.js',
          'css/bootstrap.min.css',
          'images/icons/icon-72x72.png',
          'images/icons/icon-96x96.png',
          'images/icons/icon-128x128.png',
          'images/icons/icon-144x144.png',
          'images/icons/icon-152x152.png',
          'images/icons/icon-192x192.png',
          'images/icons/icon-384x384.png',
          'images/icons/icon-512x512.png',
        ])
      )
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        //we found an entry in the cache!
        return response
      }
      return fetch(event.request)
    })
  )
})