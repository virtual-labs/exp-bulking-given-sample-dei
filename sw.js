importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"98ceab3b3a1a328fa4d6b8b1ff6f26da","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"60c8de2c194c02fcfa0ac677106abe60","url":"feedback.html"},{"revision":"8d4e4559870bfba3252c66a879029634","url":"index.html"},{"revision":"dd16f4309a53d42ecba8aae48fb8eb4e","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"92795b03728caf044b7d1fba5ca096f5","url":"posttest.html"},{"revision":"2d128223738cc57c078620de8959560d","url":"posttest.json"},{"revision":"3ba4c1781161c885111578d25679abd6","url":"pretest.html"},{"revision":"efd280f16190f87bcae49637aa3ce79e","url":"pretest.json"},{"revision":"935f366d2f21891e2b0fd1d6c8b009e4","url":"procedure.html"},{"revision":"7bf41dd6009bb93d17af5684fea88b13","url":"references.html"},{"revision":"de346d36f06c7d358ce1d9319f6b1453","url":"simulation.html"},{"revision":"408ac7bd44c2719cf45ea9e342f6183a","url":"simulation/css/Loading.css"},{"revision":"ad5efe6bd0d49c81d8cdd87e5b3bddde","url":"simulation/css/main.css"},{"revision":"347b11c65135b4808dcd3120487bb08b","url":"simulation/css/startingstep.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"simulation/css/step1.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"simulation/css/step2.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"simulation/css/step3.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"simulation/css/step4.css"},{"revision":"dc22395a6823525fe4f93af9047db806","url":"simulation/css/style.css"},{"revision":"436d2a8f140a143050c53eb4acdc4679","url":"simulation/images/FRONT PAGE.png"},{"revision":"6e2bbcd25590a83a12c018bb8eab8f09","url":"simulation/images/FRONT PAGE1.png"},{"revision":"3df4c980acc80cc0d7966a77761b7fae","url":"simulation/images/Slide 1.png"},{"revision":"218624f6114ab513bcbb84b8e428e67a","url":"simulation/images/slide10.png"},{"revision":"da2254293c396913e340e08bfc342188","url":"simulation/images/slide11.png"},{"revision":"a891a6e438d821ff068c2316dcd28b79","url":"simulation/images/slide12.png"},{"revision":"55c54c490efc0d8f743345158feff8e8","url":"simulation/images/slide13.png"},{"revision":"0f7e9cd0b89ac66309038450dad8171d","url":"simulation/images/slide14.png"},{"revision":"438fa96d2a1bcdf1793726d4ae4c3107","url":"simulation/images/slide15.png"},{"revision":"aaa13e092b872bd0d51571ff3d41282b","url":"simulation/images/slide16.png"},{"revision":"dde0ee11221331e42ae8b50a83772635","url":"simulation/images/slide19.png"},{"revision":"35d0ac82a49420bb546af20c80834334","url":"simulation/images/slide2.png"},{"revision":"ac49f68e44802c4fd6fae8604a373f65","url":"simulation/images/slide3.png"},{"revision":"51532caf6ec0025ba6804dc6ebb28f3f","url":"simulation/images/slide4.png"},{"revision":"ddd33d12237d4270e8f62f075505492a","url":"simulation/images/slide4a.png"},{"revision":"7d37859794a884fb829e56db3e69ed37","url":"simulation/images/slide6.png"},{"revision":"96c852ddb8d6fd9500e7da0cf1f78dbc","url":"simulation/images/slide8.png"},{"revision":"9a109dc5633a993cadebe84a7f63730a","url":"simulation/images/slide9.png"},{"revision":"48b63a3dc7f03b6e2348313db3165e5a","url":"simulation/images/transbox.png"},{"revision":"cfcfb28ca782bcf270e3910e5be09cdd","url":"simulation/index.html"},{"revision":"289baf75519a688680465d157cb7934f","url":"simulation/js/main.js"},{"revision":"b3d921096dbbab6d1ce15e31b177515a","url":"theory.html"},{"revision":"99b1ad203facc7e6e6e2ce1e46e9b4c0","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );