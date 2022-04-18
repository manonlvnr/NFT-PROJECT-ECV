// let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
// console.log(nftTabs);
// console.log(localStorage);

function runFavs(elem) {
        if(elem.classList.contains('favs')) {
            console.log('Class present');
            elem.classList.remove('favs');
            // localStorage.removeItem('nftId', nftId);
        } else {
            console.log('Class not present');
            elem.classList.add('favs');
            localStorage.setItem(elem.id, elem.src);
        }
        console.log(localStorage);
    }

function displayFavs() {
    nftContainer.style.display = "none";
    creatorsDiv.style.display = "none";
    
    if (localStorage.length === 0) {
        // const divContainer = document.createElement('h1');
        // divContainer.innerHTML = "Oh no... you don't have any favorites"
        console.log('localStorage is empty');
    } else {
        const favContainer = document.createElement('div');
        document.querySelector('body').appendChild(favContainer);
        for (i = 0; i < localStorage.length; i++) {
            let fav = document.createElement('img');
            fav.style.width = '350px';
            fav.style.height = '350px';
            favContainer.appendChild(fav);
            fav.src = localStorage.getItem();
        }
        console.log(localStorage);
    }

}

//     // get favorites from local storage or empty array
//     let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     // add class 'fav' to each favorite
//     favorites.forEach(function(favorite) {
//         document.getElementById(favorite).className = 'fav';
//     });
//     // register click event listener
//     document.querySelector('.nftcontainer').addEventListener('click', function(e) {
//         let id = e.target.id,
//             item = e.target,
//             index = favorites.indexOf(id);
//         // return if target doesn't have an id (shouldn't happen)
//         if (!id) return;
//         // item is not favorite
//         if (index == -1) {
//             favorites.push(id);
//             item.className = 'fav';
//         // item is already favorite
//         } else {
//             favorites.splice(index, 1);
//             item.className = '';
//         }
//         // store array in local storage
//         localStorage.setItem('favorites', JSON.stringify(favorites));
//     });
    
//     console.log(localStorage);
// local storage stores strings so we use JSON to stringify for storage and parse to get out of storage.
