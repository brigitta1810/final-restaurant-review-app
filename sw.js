//Installing the cache
self.addEventListener('install', function (event) {
  
}); 

var CACHE_NAME = 'restaurant-review-app-cache';
var cacheUrl = [
  '/', './index.html', './restaurant.html', './css/styles.css', './js/dbhelper.js', './js/main.js', './js/restaurant_info.js', './data/restaurants.json', 
  './img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg', './img/6.jpg', './img/7.jpg', './img/8.jpg', './img/9.jpg', './img/10.jpg',
];

self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('chache is opened');
        return cache.addAll(cacheUrl);
      })
  );
});
//activating the cache
self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(function(response) {
        // Responding when cache is fetched
        if (response) {
            return response;
        }
        var fetchRequest = event.request.clone();
        return fetch(fetchRequest).then(function(response) {
            // Making sure the response is valid
            if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
            }
            var cacheResponse = response.clone();
            caches.open(CACHE_NAME).then(function(cache) {
                cache.put(event.request, cacheResponse);
            });
            return response;
        });
    }));
});