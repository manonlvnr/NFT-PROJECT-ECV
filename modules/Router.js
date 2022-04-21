
const url = 'https://manonlvnr.github.io/NFT-PROJECT-ECV/'

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
            if (query !== '') {
                window.location.href = url + routeInfo.path + '?' + query;
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