//Prefetch all the images
//Repeating this inside function will hamper the performance

// Mettre toutes les images de la class nftImage dans un array

// addEventListener 

document.addEventListener('DOMContentLoaded', function () {
    var lazyloadImages = document.querySelectorAll("img");
    console.log(lazyloadImages);
    var lazyloadThrottleTimeout;

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function () {

        var scrollTop = window.pageYOffset;

        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < window.innerHeight + scrollTop) {
              console.log(img)
            // img.src = img.dataset.src;
            // img.classList.remove('lazy');
          }
        });
        if (lazyloadImages.length == 0) {
          document.removeEventListener('scroll', lazyload);
          window.removeEventListener('resize', lazyload);
          window.removeEventListener('orientationChange', lazyload);
        }
      }, 20);
    }

    document.addEventListener('scroll', lazyload);
    window.addEventListener('resize', lazyload);
    window.addEventListener('orientationChange', lazyload);
  });