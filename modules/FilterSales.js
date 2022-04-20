// 1 : Appel de la fonction createSearchBar() dans le load de la page : création de la barre de recherche + appel de la fonction createSearchBar("searchValue")
// 2 : mySearchBar(searchValue) : display none les nftImages + appel de la fonction fetchSearchResults(searchValue) et appel de la fonction fetchSearchResults(searchValue)
// 3 : fetchSearchResults(searchValue) : appel de la fonction fetchSearchResults(searchValue) avec en paramètre searchValue

    SubMenuSelector = document.getElementById('subMenu');

    function createFilterSales (){

    const filtre = document.createElement('div');
    filtre.className = 'flex-1';
    SubMenuSelector.appendChild(filtre);

    const select = document.createElement('select');
    select.id = 'filter_search'; 
    select.name = 'filter';
    select.className = 'mt-1 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm';
    filtre.appendChild(select);

    const option1 = document.createElement('option');
    option1.innerHTML = 'Ajoutés récemment';
    option1.value = 'ajoute_recemment';
    select.appendChild(option1);

    const option2 = document.createElement('option');
    option2.innerHTML = 'Les + vendus';
    option2.value = 'plus_vendus';
    select.appendChild(option2);

    }


    document.body.addEventListener("change", function (event) {
        if (event.target.id === "filter_search") {
                let value = event.target.value;
                filterChanged(value);
                
        }
    });

    function filterChanged(value) {
        console.log(value);

        let nftImages = document.getElementsByClassName("nftImage");
        for (let i = 0; i < nftImages.length; i++) {
            nftImages[i].style.display = "none";
        }

        if(value === "ajoute_recemment") {
            fetchResults("");
        } else if(value === "plus_vendus") {
            fetchResults("?sales=false");
        }

    }


    function fetchResults(bool) {

        console.log(bool)

        try {
            fetch(`https://awesome-nft-app.herokuapp.com/${bool}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const assets = data.assets;
                    createCards(assets);
                    lazyload();
                })
        }
        catch (error) {
            console.log(error);
        }
    
    }

    
