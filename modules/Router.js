// 1- on sélectionne toutes les attributs href de tous les bouttons dans une variable activeRoutes 
// 2- au click sur un boutton, on récupère l'attribut href de ce boutton
// 3- si la route n'est pas dans myRoutes alors on affiche une erreur 404
// 4- si la route est dans myRoutes alors on redirige vers la route

// PS : la variable url est à modifier selon l'adresse de l'environnement
// Fichiers concernées : modules/Router.js -- modules/CreatorsList.js -- NftBoard.js


const url = 'http://127.0.0.1:5500/'

document.addEventListener('DOMContentLoaded', function () {


    function navigate(event) {

        let query = ''
        let route = ''

        if (event.includes('?')) {
            route = event.slice(0, event.indexOf('?'))
            query = event.slice(event.indexOf('?') + 1)


            if (query == 'username='){
                query = ''
            }

        }

         console.log(query)
         console.log(route)
         //debugger

        let routeInfo = myRouter.routes.filter(function (r) {
            return r.path === route;
        })[0];



        if (!routeInfo) {
            console.log('Cette route n\'existe pas');
            return;


        } else {

            // Gérer les paramètres de la route

            // S'il y a des paramètres dans la route
            if (query !== '') {


                window.location.href = url + routeInfo.path + '?' + query;


            // S'il n'y a pas de paramètres dans la route
            } else {

                window.location.pathname = url + routeInfo.path
       
            }
        }
    };


    document.addEventListener('click', function (event) {
        if (event.target.hasAttribute('href')) {
            console.log(event.target.getAttribute('href'))
            let route = event.target.getAttribute('href')
            navigate(route);
        }
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
            name: 'creator-collection',
            path: `/creator-collection.html`
        },
        {
            name: 'single',
            path: `/single.html`
        }

    ]);

    
});