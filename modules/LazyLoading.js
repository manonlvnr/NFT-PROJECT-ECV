let lazyloadThrottleTimeout;

  function lazyload() {

    let nftImages = document.querySelectorAll("img");

    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function () {

      let scrollTop = window.pageYOffset;

      for (let i = 0; i < nftImages.length; i++) {

        if (nftImages[i].offsetTop < window.innerHeight + scrollTop) {
          nftImages[i].src = nftImages[i].dataset.src;
        }
      }

      if (nftImages.length == 0) {
        document.removeEventListener('scroll', lazyload);
        window.removeEventListener('resize', lazyload);
        window.removeEventListener('orientationChange', lazyload);
      }
    }, 20);
  }
 
  document.addEventListener('scroll', lazyload);
  window.addEventListener('resize', lazyload);
  window.addEventListener('orientationChange', lazyload);
  setTimeout(lazyload, 500);