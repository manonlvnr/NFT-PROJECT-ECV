const root = document.querySelector('body');

function createElement(tag, config, parent = null) {

    const { src, href, className } = config || {};

    const element = document.createElement(tag);

    element.className = "gridItem";


    if (src) {
        element.src = src;
        // element.dataSrc = src;

        element.alt = '...';

        element.style.backgroundColor = ' #f9fafc';

        element.style.width = '350px';
        element.style.height = '350px';
        element.href = href;
        element.className = className;
    }

    if (!parent) {
        root.appendChild(element);
    } else {
        parent.appendChild(element);
    }
    return element;
}


const nftContainer = createElement('div');
nftContainer.style.display = 'grid';
nftContainer.style.gridTemplateColumns = '1fr 1fr 1fr';
nftContainer.style.gridGap = '50px';
nftContainer.className = "max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8";
nftContainer.style.border = 'none';
nftContainer.style.backgroundColor = 'white';



const data = ['Hello', 'world', 'toto', 'tata'];



// Créateur
// Nombre de ventes
// Détails des produits NFT
// Liste des produits NFT

function createCards(assets) {

    assets.forEach(el => {

        if (el.image_url) {
            createElement('img', {
                src: el.image_url,
                dataSrc : el.image_url,
                href: '#',
                className: 'nftImage'
            }, nftContainer);
        }


    })
}



async function createIndex() {
try{
        const response = await fetch(`https://awesome-nft-app.herokuapp.com/`);
        const data = await response.json();
        const assets = data.assets;

        createCards(assets);

    } catch (error) {

        console.log(error);

    }
}
