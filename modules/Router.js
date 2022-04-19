// 1- on sélectionne toutes les attributs href de tous les bouttons dans une variable activeRoutes 
// 2- au click sur un boutton, on récupère l'attribut href de ce boutton
// 3- si la route n'est pas dans myRoutes alors on affiche une erreur 404
// 4- si la route est dans myRoutes alors on redirige vers la route

// PS : la variable url est à modifier selon l'adresse de l'environnement

const url = '/C:/xamppp/htdocs/NFT-PROJECT-ECV'

document.addEventListener('DOMContentLoaded', function () {

    let activeRoutes = Array.from(document.querySelectorAll('[href]'))


    function navigate(event) {

        let route = event.target.getAttribute('href');

        let routeInfo = myRouter.routes.filter(function (r) {
            return r.path === route;
        })[0];

        if (!routeInfo) {
            console.log('Cette route n\'existe pas');
            return;
        } else {
            window.location.pathname = url + routeInfo.path;
        }
    };

    activeRoutes.forEach(function (route) {
        route.addEventListener('click', navigate, false);
    });

    let Router = function (name, routes) {
        return {
            name: name,
            routes: routes,
        }
    };

    let myRouter = new Router('myRouter', [
        {
            name: 'home',
            path: '/index.html',

        },
        {
            name: 'page1',
            path: '/page1.html',
        },
        {
            name: 'page2',
            path: '/page2.html',
        },

        {
            name: 'creator-collection',
            path: '/creator-collection.html'
        }

    ]);

    
});