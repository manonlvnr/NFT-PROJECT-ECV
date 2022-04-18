
function displayFavs() {
    nftContainer.innerHTML = "";
    
    if (localStorage.length === 0) {
        const divContainer = document.createElement('h1');
        divContainer.innerHTML = "Oh no... you don't have any favorites"
    } else {
        console.log(localStorage);
    }

}

    // get favorites from local storage or empty array
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    // add class 'fav' to each favorite
    favorites.forEach(function(favorite) {
        document.getElementById(favorite).className = 'fav';
    });
    // register click event listener
    document.querySelector('.nftcontainer').addEventListener('click', function(e) {
        let id = e.target.id,
            item = e.target,
            index = favorites.indexOf(id);
        // return if target doesn't have an id (shouldn't happen)
        if (!id) return;
        // item is not favorite
        if (index == -1) {
            favorites.push(id);
            item.className = 'fav';
        // item is already favorite
        } else {
            favorites.splice(index, 1);
            item.className = '';
        }
        // store array in local storage
        localStorage.setItem('favorites', JSON.stringify(favorites));
    });
    
    console.log(localStorage);

local storage stores strings so we use JSON to stringify for storage and parse to get out of storage