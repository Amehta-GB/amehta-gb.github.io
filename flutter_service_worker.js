'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3f37b07a578aaebe7e573bb68e4520da",
"index.html": "87a3cd6b31b5eb150727a46d10596732",
"/": "87a3cd6b31b5eb150727a46d10596732",
"main.dart.js": "eadbf43fcf21e60ccf471f32df85adea",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4ef9128da0527bf08cc112c414e8c2be",
"assets/AssetManifest.json": "02c180dc11ce138243ce10f70bfb943f",
"assets/NOTICES": "c28c9949724544c42df4fceb0ad5091b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/lhb_right.png": "772bfb4f26df474a99508da8cda2893c",
"assets/assets/images/batsmen2.png": "f1590792c7865ca3e35116ac4adf13a2",
"assets/assets/images/ball.png": "fcd1cdc1c4cbe8bb1a84f7b13bf6cb80",
"assets/assets/images/stumps.png": "ad41fbea13049511bf105e910009ef5b",
"assets/assets/images/cric_logo.png": "199c1bba9839d75668e7da07e3a23781",
"assets/assets/images/10overs.png": "19ddd09e98dd9f9630b59f758f9b9975",
"assets/assets/images/field_heavy_left.png": "4e115f1744f0a5bb25959b4b7fdb182b",
"assets/assets/images/field_heavy_right.png": "b6a4ecd72f78075de4721781a897e800",
"assets/assets/images/pitch_straight.png": "713e628f055ede19f53c73fb6cfdf691",
"assets/assets/images/exit.jpeg": "72cbf47ed526bb701db39d56f1c70c9d",
"assets/assets/images/india_logo.png": "3741d11fb515920fc67d4dd80bd69956",
"assets/assets/images/powerbuttonactive.png": "d9bea76b9350f54b153d1f8f0cb2ae8b",
"assets/assets/images/lhb_still.png": "a82476da03dc9f10187191a2926bc64b",
"assets/assets/images/nl_logo.png": "96c8a693ca6129ffe074bbc079f23e73",
"assets/assets/images/england_logo.png": "9d046127d93db07f9f5f0d50130c2226",
"assets/assets/images/rhb_straight.png": "6ef1c9de5c8ef8f285f45fca8551d298",
"assets/assets/images/sound_off.png": "5a67d972f719a00948af1f1277ec3faa",
"assets/assets/images/stadium.png": "6b585b7e8bc93985eab787bb94149094",
"assets/assets/images/right_button.png": "efe67346e96e779da938eda9841ac903",
"assets/assets/images/number_1.png": "d0b1fc2a55b5b5a9fe53e87417d7d171",
"assets/assets/images/number_0.png": "f888d16be15485ab8c7cd66f756a9389",
"assets/assets/images/pitch_new.png": "c11cb377b5876a17006a0997ac104c7e",
"assets/assets/images/field_heavy_straight.png": "09986b6beb4a09c00ea4c3ebf043060b",
"assets/assets/images/straight_pitch.png": "f766cbf0178429e7b47b3c610c2e324d",
"assets/assets/images/number_2.png": "3f61de6fa6bfb81eaf064d649f789818",
"assets/assets/images/ballhitting.mp3": "f8b8a2454b3c362f7f3fadd24f3bc247",
"assets/assets/images/sl_logo.png": "9905cc8e836956a258a56ddd6129b51a",
"assets/assets/images/number_3.png": "b2050965f13dc15308cbf12b6640be92",
"assets/assets/images/pause.png": "6d0203ae7f104ded951fd4230888b170",
"assets/assets/images/boundary.mp3": "fc97da44ca9fc2f7a4195339b553e4db",
"assets/assets/images/left_pitch.png": "cf3bd0c68f91ca12e2de3b6b5c60985c",
"assets/assets/images/stumps_out.png": "f98dac5204430ce0e22e1f91da384201",
"assets/assets/images/woodBreak.mp3": "8ea726da56320011c3615e751df01777",
"assets/assets/images/umpire.png": "193f60f4142062b44b6620c4e6605004",
"assets/assets/images/number_w.png": "bba8e18696b2332f9124677fcc70f802",
"assets/assets/images/number_6.png": "f35439021213dcfc23c988b5f3cbd770",
"assets/assets/images/pak_logo.png": "b370a2b1d95a42e7e80b828e2ff2407d",
"assets/assets/images/number_4.png": "7029087c4e0c7e1fbcb442afdc0f9390",
"assets/assets/images/rhb_right.png": "ea39e2850dd9e807fb51305c44c355d5",
"assets/assets/images/powerbuttonoff.png": "45c545102123f436c61fe5d193f2c1fe",
"assets/assets/images/line_target.png": "30cae0db7675f791887abd4c574299fc",
"assets/assets/images/bowler_run.gif": "5d21292df3b2c8c8f3253e4c8b62fe1a",
"assets/assets/images/right_pitch.png": "3a6e39310cf45a4e5bbe47fbb0ec8a38",
"assets/assets/images/bowler_photo.png": "9f7aaee0daa7cba47ce107b44f49b2c6",
"assets/assets/images/sa_logo.png": "f06a53111eedb39bf967a7bb84fa6483",
"assets/assets/images/left_button.png": "bb3680cf5eeeba1628679bfbec678fa2",
"assets/assets/images/top_button.png": "10b9996a0938d097617cb02001315332",
"assets/assets/images/wi_logo.png": "47ee2c2c27cb3e6a6d10708166c8d5c4",
"assets/assets/images/rhb_left.png": "0be86235fb3c5683f0e7cf6bd8374995",
"assets/assets/images/sound_on.png": "0fb64172ba56949772a08c7342007f58",
"assets/assets/images/play.png": "10cc8c50d99714aeed10fe7262326d18",
"assets/assets/images/lhb_left.png": "f86233023fc1b3c3eb01c64ef7f02327",
"assets/assets/images/rhb_still.png": "8dd460bff5f3581c4258400fbf4f39a9",
"assets/assets/images/crowd.mp3": "904388ddc4a6772219fa4e7419d557ca",
"assets/assets/images/lhb_straight.png": "26de7f6172a5da4c61831c1c085af262",
"assets/assets/images/australia_logo.png": "1fe762d918fa5c62ad1c8596c9ac84b7",
"assets/assets/images/20overs.png": "3cc6c797c201c8aa334b1e8b7c884a20",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
