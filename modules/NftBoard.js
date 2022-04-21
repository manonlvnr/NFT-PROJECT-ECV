const root = document.querySelector("body");

function createElement(tag, config, parent = null) {
  const { nameNFT, src, ownerNFT, creatorNFT, descriptionNFT, idNFT, dataSrc, href } = config || {};
  const element = document.createElement(tag);
  

  if (config) {
    let cardElement = document.createElement("div");
    let imageContainer = document.createElement("div");
    let imageElement = document.createElement("img");
    let infoContainer = document.createElement("div");
    let name = document.createElement("h5");
    let buyBtn = document.createElement("button");
    let likeBtn = document.createElement("button");
    likeBtn.innerHTML = "❤"
    cardElement.className = "flex font-sans card nftImage m-8 w-[40%] transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl";
    imageContainer.className = "flex-none w-56 relative shadow-md";
    imageElement.className = "absolute inset-0 w-full h-full object-cover rounded-lg ";
    infoContainer.className = "flex-auto p-6 shadow-md";
    name.className = "w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600";
    buyBtn.className = "h-10 px-6 font-semibold rounded-full bg-violet-600 text-white";
    likeBtn.className = "flex text-white items-center justify-center w-10 h-10 rounded-full likeBtn";
    likeBtn.setAttribute('onclick',"runFavs(this)");    
    likeBtn.style.backgroundColor = "grey";
    
    if (src) {
      imageElement.src = src;
      imageElement.dataset.src = dataSrc
    }

    if (nameNFT) {
      name.innerText = nameNFT;
    }
   
    if (idNFT){
      cardElement.setAttribute('id', idNFT);
    }
    if (href) {
      buyBtn.setAttribute('href', href);
    }
    buyBtn.innerText = "View more";
    buyBtn.onclick = function () {
        //window.location.href = `single.html?id=${idNFT}`;
    }



    nftContainer.appendChild(cardElement);
    cardElement.append(imageContainer, infoContainer);

    imageContainer.appendChild(imageElement);
    infoContainer.append(name, buyBtn, likeBtn);
    
  }
  if (!parent) {
    root.appendChild(element);
  } else {
    parent.appendChild(element);
  }
  return element;
}

const nftContainer = createElement("div");
nftContainer.className = "nft-container flex flex-wrap justify-center mt-9";
// Créateur
// Nombre de ventes
// Détails des produits NFT
// Liste des produits NFT

function createCards(assets) {
  assets.forEach((el) => {
    createElement(
      "div",
      {
        nameNFT: el.name,
        //src: el.image_url,
        src: './load.jpg',
        dataSrc : el.image_url,
        ownerNFT: el.owner.name,
        creatorNFT: el.creator.username,
        descriptionNFT: el.description,
        idNFT: el.id,
        href: `/single.html?id=${el.id}`,
      },
      nftContainer
    );
  });
}


async function createIndex() {
  try {
    const response = await fetch(`https://awesome-nft-app.herokuapp.com/`);
    const data = await response.json();
    const assets = data.assets;
    if(assets){
    createCards(assets);
}
  } catch (error) {
    console.log(error);
  }
}


//createIndex();