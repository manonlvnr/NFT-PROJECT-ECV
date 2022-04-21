function runFavs(elem) {
    const daddy = elem.parentNode;
    const grandParent = daddy.parentNode;
    const imgContainer = grandParent.firstChild;
    const img = imgContainer.firstChild;

    if(elem.classList.contains('favs')) {
        elem.classList.remove('favs');
        elem.style.backgroundColor = "#c0dfef";

        for( let i = 0; i < localStorage.length; i++){
            console.log(localStorage.key(i));
            if (localStorage.key(i) === grandParent.id){
                localStorage.removeItem(localStorage.key(i));
            }
        }
    } else {
        elem.classList.add('favs');
        elem.style.backgroundColor = "pink";
        localStorage.setItem(grandParent.id, img.src);
    }
    console.log(localStorage);
}

const wrapper = document.createElement('div');
wrapper.className = "flex flex-col-reverse justify-center items-center py-6";
const divContainer = document.createElement('h1');
const favWrapper = document.createElement('div');
document.querySelector('body').appendChild(favWrapper);
favWrapper.className = "flex flex-col justify-center items-center py-6";
const favContainer = document.createElement('div');
favContainer.className = "max-w-2xl mx-auto py-6 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8";
favContainer.setAttribute('style', 'display: grid; border: none; border-radius: 10px; background-color: white; grid-template-columns: 1fr 1fr 1fr; gap: 20px;');

function displayFavs() {
    nftContainer.style.display = "none";
    creatorsDiv.style.display = "none";

    const resetBtn = document.createElement('button');
    resetBtn.className = "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
    resetBtn.innerText = "Clean favorites";
    favWrapper.appendChild(resetBtn);
    
    resetBtn.addEventListener('click', function() {
        favContainer.style.display = "none";
        localStorage.clear();
    })
    
    if (localStorage.length === 0) {
        const noFavs1 = document.createElement('p'); 
        noFavs1.innerHTML = "Oh no... you don't have any favorites";
        noFavs1.className = "font-medium leading-tight text-3xl";
        const noFavs2 = document.createElement('p'); 
        noFavs2.innerHTML = "Quick add Some !";
        noFavs2.className = "font-medium leading-tight text-2xl text-gray-500";
        document.querySelector('body').appendChild(wrapper);
        wrapper.appendChild(divContainer);

        divContainer.append(noFavs1, noFavs2);
        console.log('localStorage is empty');
    } else {
        favWrapper.appendChild(favContainer);
        for(let key in localStorage) {
            let fav = document.createElement('img');
            fav.className = "basis-1/4"
            fav.src = localStorage.getItem(key);
            favContainer.appendChild(fav);
        }
        if ( document.querySelector('img').src === 404 ) {
            console.log('shit');
        }
    }

}