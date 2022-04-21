let assets;
async function getCreatorsPagination() {
    const response = await fetch('https://awesome-nft-app.herokuapp.com/creators');
    const data = await response.json();
    assets = data.creators;

    nftContainer.style.display = "none";
    creatorsDiv.style.display = "none";
    subMenu.style.display = 'none';
    middleContent.style.display = 'none';

    let perPage = 10;
    displayPageNav(perPage);
    displayItems(1, perPage);
}

// Methode pour afficher le nombre de data par page 
const displayPageNav = (perPage) => {
    let pagination = ``;
    // recupere la longueur du tableau
    const totalItems = assets.length;
    // Si perpage est defini sinon 1
    perPage = perPage ? perPage : 1;
    // Retourne le plus petit entier supérieur ou égal au nombre donné.
    // Retourne le nbr de pages
    const pages = Math.ceil(totalItems / perPage);

    // Pour chaque page tu crée un lien de pagination
    for (let i = 1; i <= pages; i++) {
        pagination += `<a href="#" onClick="displayItems(${i},${perPage})" style=" margin: 10px 5px !important; background: white !important; border: none !important; box-shadow: 0px 2px 2px rgb(0 0 0 / 10%) !important; padding: 10px;" >${i}</a>`;
    }

    document.getElementById('pagination').innerHTML = pagination;
}

const displayItems = (page = 1, perPage) => {

    let index, offSet;

    if (page == 1 || page <= 0) {
        index = 0;
        offSet = perPage
    } else if (page > assets.length) {
        index = page - 1
        offSet = assets.length
    } else {
        index = page * perPage - perPage
        offSet = index + perPage
    }

    // renvoie un objet tableau, contenant une copie superficielle d'une portion du tableau d'origin
    // et qui retourne les data en fonction du nombre de page
    const slicedItems = assets.slice(index, offSet)

    const html = slicedItems.map(item =>
        `<!-- card -->
        <div class="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
            <!-- img -->
            <img class="aspect-video w-96 rounded-t-2xl object-cover object-center" src="${item.profile_url}" />
            <!-- text information -->
            <div class="p-4">
            <h1 class="text-2xl font-medium text-slate-600 pb-2">${item.username}</h1>
            <p class="text-sm tracking-tight font-light text-slate-400 leading-6">${item.address}</p>
            </div>
        </div>
        </div>`)

    document.querySelector('#container .contents').innerHTML = html.join('');
}