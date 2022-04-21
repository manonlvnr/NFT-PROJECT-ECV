  // 1 - toutes les images sont chargées dans une variable nftImages (contient toutes les images de la page)
  // 2 - on crée une variable scrollTop qui contient la position du scroll de la page
  // 3 - on parcours toutes les images de la page
  // 4 - si l'image est dans la zone visible de la page (offsetTop < window.innerHeight + scrollTop) alors on affiche l'image (src = data-src)
  // 5 - si on a parcouru toutes les images de la page, on supprime l'eventListener scroll et on supprime l'eventListener resize
  // 6 - on supprime l'eventListener orientationChange

  
  
  var lazyloadThrottleTimeout;

  function lazyload() {

    let nftImages = document.querySelectorAll("img");

    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function () {

      var scrollTop = window.pageYOffset;

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