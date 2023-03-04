/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "088324124e4587b528643c99310da8f7"
  },
  {
    "url": "about.html",
    "revision": "5d86c440045d6f567beff2feda5f7a1f"
  },
  {
    "url": "assets/css/0.styles.a35552dd.css",
    "revision": "154f1ebd9d5eedb9bd72d9299b242cb7"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/alipay.8701cc62.svg",
    "revision": "8701cc6229ab9a0b625126cdc1838777"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/github.23fc8f81.svg",
    "revision": "23fc8f81f92bb2981d8f9e089d7df14a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/love.335eff6a.svg",
    "revision": "335eff6a0aefd9ce25d8624c9cae2f54"
  },
  {
    "url": "assets/img/paypal.0614c8ec.svg",
    "revision": "0614c8ec69152b15a48a6508c9ab7373"
  },
  {
    "url": "assets/img/qq.63e39c8c.svg",
    "revision": "63e39c8cb5ba4f6931ea28f722e0f065"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/img/wechat.702bca7b.svg",
    "revision": "702bca7befb1db3ac5dace5bb9912188"
  },
  {
    "url": "assets/js/1.1e94013f.js",
    "revision": "c6ef41949d957bece740d4b9cc4c4b13"
  },
  {
    "url": "assets/js/10.baee942d.js",
    "revision": "f6fff26b615547761c3832db07b914e8"
  },
  {
    "url": "assets/js/11.faf006ac.js",
    "revision": "585696f09694d0ebb645a2df04ff3476"
  },
  {
    "url": "assets/js/12.377eda9d.js",
    "revision": "694b521753f7f8ecaa0dc7d0039a851c"
  },
  {
    "url": "assets/js/13.5081ee20.js",
    "revision": "54a7b457db6d5cf3a71c66982e025399"
  },
  {
    "url": "assets/js/14.dcdf7caf.js",
    "revision": "d1fb783339d778286e57ea0eb9ff8407"
  },
  {
    "url": "assets/js/15.32f753cb.js",
    "revision": "2a078f5d340ffe159d6a89ee80376f2b"
  },
  {
    "url": "assets/js/16.ffe21c22.js",
    "revision": "c9903831b120c59776ea6f40a6d5d77b"
  },
  {
    "url": "assets/js/17.a349a14d.js",
    "revision": "6cbf08f52617f5d88a19c9f3a425d5fa"
  },
  {
    "url": "assets/js/18.1077ac91.js",
    "revision": "508dd8286d422508e061cdb92071ae6d"
  },
  {
    "url": "assets/js/19.e3150a11.js",
    "revision": "960dc4f6c85690e123008c3e121cd8f4"
  },
  {
    "url": "assets/js/20.c23884f8.js",
    "revision": "42e3b4664629cdf1e9e8bb3eb38dae7c"
  },
  {
    "url": "assets/js/21.0c054075.js",
    "revision": "a301ae1878680af41b5c26c1a27e3b15"
  },
  {
    "url": "assets/js/22.d8cfe038.js",
    "revision": "c99712bb785ce8b14bcb5864a1cca3fb"
  },
  {
    "url": "assets/js/23.172d23a1.js",
    "revision": "e8f6f92f4fa667b26b37a730f99fc3b3"
  },
  {
    "url": "assets/js/24.6f860345.js",
    "revision": "87fb4b1d33b976004a3d7ff2900b5f24"
  },
  {
    "url": "assets/js/4.3a80a758.js",
    "revision": "7a63b204f5382c2398a707c014944a26"
  },
  {
    "url": "assets/js/5.3ba65b3e.js",
    "revision": "6f0c52798f6f3ef4f58e0e0582b16ff7"
  },
  {
    "url": "assets/js/6.d213f782.js",
    "revision": "35b2e6e4dee42e453d891eefe646eb8c"
  },
  {
    "url": "assets/js/7.b1b45191.js",
    "revision": "0109f9549f311876efc92deb25f3081c"
  },
  {
    "url": "assets/js/8.cee06747.js",
    "revision": "b526575219e87165587877ac926d7a31"
  },
  {
    "url": "assets/js/9.5cb09c57.js",
    "revision": "ca24a811515f6f360f0d6ff69f6031ea"
  },
  {
    "url": "assets/js/app.b3c661db.js",
    "revision": "d00d0e0e4c453bffd970e52d409dd69c"
  },
  {
    "url": "assets/js/vendors~docsearch.e65bccb1.js",
    "revision": "2f99cd91da275dcdf2fb86dff4f13bc0"
  },
  {
    "url": "categories/FAQ/index.html",
    "revision": "4260824e684341be284c4702a14c22b1"
  },
  {
    "url": "categories/index.html",
    "revision": "15985dad082d238a72945dd9249c5d5d"
  },
  {
    "url": "donate.html",
    "revision": "e449ac497bd17c4fad4c8919161a0c80"
  },
  {
    "url": "faq.html",
    "revision": "e40f1334bb44d1df72edfd3ae7c82d24"
  },
  {
    "url": "features/Assistant.html",
    "revision": "d05ba8a9beb8270fbb5d06c5b49345e3"
  },
  {
    "url": "features/Bika.html",
    "revision": "b9ab17fa1de6189034d957a2bae35c19"
  },
  {
    "url": "features/GroupAdmin.html",
    "revision": "69fd0bac5b44562779e8968dcf96306e"
  },
  {
    "url": "features/Notice.html",
    "revision": "10c615823f4698f77f303722dae3c385"
  },
  {
    "url": "features/PicSearch.html",
    "revision": "dc1cf01a237dfff9aee097b0d74cba8e"
  },
  {
    "url": "features/Pixiv.html",
    "revision": "7537b003f41238927c03c645d5f7a690"
  },
  {
    "url": "features/State.html",
    "revision": "55b78e50caa737a8822703903d42acc1"
  },
  {
    "url": "help.html",
    "revision": "e3b5864af8c129e88c70378c7f1053d0"
  },
  {
    "url": "icons/favicon144.png",
    "revision": "c3258ba800a02ed0d788e99c72a2f377"
  },
  {
    "url": "icons/favicon192.png",
    "revision": "80afc1e17911532c93cb8637268d1bbb"
  },
  {
    "url": "icons/favicon48.png",
    "revision": "811da0e0a83246091d2cc380fe84a186"
  },
  {
    "url": "icons/favicon512.png",
    "revision": "ce21c96aceea3078edbb17160f44195f"
  },
  {
    "url": "icons/favicon72.png",
    "revision": "774b55d2b580031b720e7c03867ee2ad"
  },
  {
    "url": "icons/favicon96.png",
    "revision": "05df80e0bd02da9d7d6c0dae2a1e1821"
  },
  {
    "url": "img/hero.png",
    "revision": "abf3416c55d2fb966064d1f14eb29dbc"
  },
  {
    "url": "img/SauceNAO.png",
    "revision": "7c96dc5254055628a50e71feb8fa64c1"
  },
  {
    "url": "img/状态.png",
    "revision": "23f18717ef352a21452c2320319db7b7"
  },
  {
    "url": "index.html",
    "revision": "f16ce29f26b24c0ce710e75cb6a72153"
  },
  {
    "url": "logo.png",
    "revision": "0cc478288d7f216ad5b9ee3730aaf6a3"
  },
  {
    "url": "pixiv-token/cmd.png",
    "revision": "8378543e981cfa8c637e4143028e936f"
  },
  {
    "url": "pixiv-token/filter.png",
    "revision": "8d49e7a36ec73320cc088f24040bd9f8"
  },
  {
    "url": "pixiv-token/request.png",
    "revision": "19fb2103681a50b2d694820d1f983f0f"
  },
  {
    "url": "sponsor-qrcode/qrcode-alipay.png",
    "revision": "a6128053f374aea2a8877d478f44d300"
  },
  {
    "url": "sponsor-qrcode/qrcode-qq.png",
    "revision": "82b629dbc521ce9013ea68b38b464a9b"
  },
  {
    "url": "sponsor-qrcode/qrcode-wechat.png",
    "revision": "012bb035d7d8e93633a3ddecb5ca66ed"
  },
  {
    "url": "tag/index.html",
    "revision": "b7c9488d303cabc27369ea1c5f9c033a"
  },
  {
    "url": "timeline/index.html",
    "revision": "d6abf0366a110821cf76c102b4394ec8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
