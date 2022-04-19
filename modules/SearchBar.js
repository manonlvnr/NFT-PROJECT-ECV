// 1 : Appel de la fonction createSearchBar() dans le load de la page : création de la barre de recherche + appel de la fonction createSearchBar("searchValue")  
// 2 : mySearchBar(searchValue) : display none les nftImages + appel de la fonction fetchSearchResults(searchValue) et appel de la fonction fetchSearchResults(searchValue)
// 3 : fetchSearchResults(searchValue) : appel de l'api en passant le param à l'url d'appel : on renvoie le resultats à la fonction createCards
// 4 : createCards(assets) : création des cards avec les données de l'api
// 5 : 3 addEventListener() pour la barre de recherche : keyup, enter et click sur le bouton de recherche
navbarContent = document.getElementById('middleContent');

function createSearchBar() {
    const searchbar = document.createElement('div');
    searchbar.className = 'input-group flex flex-wrap items-stretch w-full col-span-6 sm:col-span-3';
    navbarContent.appendChild(searchbar);

    const search = document.createElement('input');
    search.id = 'search';
    search.className = 'form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none';
    search.type = 'search';
    search.placeholder = 'Rechercher';
    search.name = 'search';
    searchbar.appendChild(search);

    const searchButton = document.createElement('button');
    searchButton.id = 'searchButton';
    searchButton.className = 'btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out';
    searchButton.type = 'button';
    searchButton.innerHTML = 'Rechercher';
    searchbar.appendChild(searchButton);

    searchButton.addEventListener("click", function () {
        let search = document.getElementById("search");
        let searchValue = search.value;
    
        mySearchBar(searchValue);
        
    });

}


function mySearchBar(query) {
    
    let nftImages = document.getElementsByClassName("nftImage");

    for (let i = 0; i < nftImages.length; i++) {
        nftImages[i].style.display = "none";
    }

    if(query !== "") {
        searchValue = query;
    } else {
        let search = document.getElementById("search");
        searchValue = search.value;
    }
    fetchSearchResults(searchValue);
    
}


function fetchSearchResults(query) {

    try {
        fetch(`https://awesome-nft-app.herokuapp.com/search?q=${query}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const assets = data.assets;
                createCards(assets);
            })
    }
    catch (error) {
        console.log(error);
    }

}


document.body.addEventListener("keyup", function (event) {

    if (event.target.id === "search") {
        let search = document.getElementById("search");
        let searchValue = search.value
                mySearchBar(searchValue);
            
    }

    
});



document.body.addEventListener("focus", function (event) {
    if (event.target.id === "search") {
        if (event.target.value !== "") {
            nftContainer.innerHTML = "";
            mySearchBar();
        }
    }
});

