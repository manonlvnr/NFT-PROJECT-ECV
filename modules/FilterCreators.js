// Etape 1 : Fetch tous les creators ('https://awesome-nft-app.herokuapp.com/creators') et les renvoyer a la fonction createFilterAuthors(creators)
// Etape 2 : Créer une div qui comprend un select // une option tous les créateurs // et les creators (foreach)
// Etape 3 : Créer un event listener onchange : si le change est sur id === "filter_creators", on display none les images : si value !== '' alors renvoyer la fonction filterResults(value); sinon createIndex();
// Etape 4 : Dans filterResults(value) on fait un call à l'api en passant le param à l'url d'appel : on renvoie le resultats à la fonction createCards
SubMenuSelector = document.getElementById('subMenu');

function createFilterAuthors(creators) {

    const filtre = document.createElement('div'); 
    filtre.className = 'flex-1';
    SubMenuSelector.appendChild(filtre);
    const select = document.createElement('select');
    select.id = 'filter';
    select.className = 'mt-1 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm';
    select.name = 'filter';
    filtre.appendChild(select);

    const optionNull = document.createElement('option');
    optionNull.innerHTML = 'Tous les créateurs';
    optionNull.value = '';
    select.appendChild(optionNull);

    creators.forEach(el => {
        if (el.username) {
            const option = document.createElement('option');
            option.innerHTML = el.username;
            select.appendChild(option);
        }
    });


}


async function createFilterCreators() {

    const response = await fetch('https://awesome-nft-app.herokuapp.com/creators');
    const data = await response.json();
    const creators = data.creators
    createFilterAuthors(creators);
}

document.body.addEventListener("change", function (event) {
    if (event.target.id === "filter") {

        let nftImages = document.getElementsByClassName("nftImage");
            for (let i = 0; i < nftImages.length; i++) {
                nftImages[i].style.display = "none";
            }

        if (event.target.value !== "") {
        
            let value = event.target.value;
            filterResults(value);
        }else{
            createIndex()
        }
    }
});

filterResults = (value) => {
    try {
        fetch(`https://awesome-nft-app.herokuapp.com/creators/${value}`)
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

