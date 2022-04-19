function runFavs(elem) {
    const daddy = elem.parentNode;
    const grandParent = daddy.parentNode;
    const imgContainer = grandParent.firstChild;
    const img = imgContainer.firstChild;

    if(elem.classList.contains('favs')) {
        // console.log('Class present');
        elem.classList.remove('favs');

        for( let i = 0; i < localStorage.length; i++){
            // console.log(localStorage.key(i));
            if (localStorage.key(i) === grandParent.id){
                localStorage.removeItem(localStorage.key(i));
            }
        }
    } else {
        // console.log('Class not present');
        elem.classList.add('favs');
        localStorage.setItem(grandParent.id, img.src);
    }
    // console.log(localStorage);
}

const divContainer = document.createElement('h1');
const favContainer = document.createElement('div');
favContainer.className = "max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8";
favContainer.setAttribute('style', 'display: grid; border: none; border-radius: 10px; background-color: white; grid-template-columns: 1fr 1fr 1fr; gap: 50px;');

function displayFavs() {
    nftContainer.style.display = "none";
    creatorsDiv.style.display = "none";

    const resetBtn = document.createElement('button');
    resetBtn.className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
    resetBtn.innerText = "Clean favorites";
    document.querySelector('body').appendChild(resetBtn);
    
    resetBtn.addEventListener('click', function() {
        favContainer.style.display = "none";
        localStorage.clear();
    })
    
    if (localStorage.length === 0) {
        divContainer.innerHTML = "Oh no... you don't have any favorites"
        document.querySelector('body').appendChild(divContainer);
        console.log('localStorage is empty');
    } else {
        document.querySelector('body').appendChild(favContainer);
        for(let key in localStorage) {
            let fav = document.createElement('img');
            fav.src = localStorage.getItem(key);
            favContainer.appendChild(fav);
            if ( !src ) {
                return null;
            }
        }
    }

}
    