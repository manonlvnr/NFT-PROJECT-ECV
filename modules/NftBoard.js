const root = document.querySelector("body");

function createElement(tag, config, parent = null) {
  const { nameNFT, src, ownerNFT, creatorNFT, descriptionNFT, idNFT } = config || {};

  const element = document.createElement(tag);
  // if (color) {
  //     element.style.color = color;
  // }

  // if (text) {
  //     element.innerHTML = text;
  if (config) {
    // Créer un élément img avec l'url de l'image et le mettre dans la variable myDiv
    let cardElement = document.createElement("div");
    let imageContainer = document.createElement("div");
    let imageElement = document.createElement("img");
    let infoContainer = document.createElement("div");
    let name = document.createElement("h5");
    let description = document.createElement("p");
    let creator = document.createElement("p");
    let owner = document.createElement("p");
    let buyBtn = document.createElement("button");
    let likeBtn = document.createElement("button");
    //let idCard = idNFT
    //nftCard.setAttribute('id', idNFT);
    cardElement.className = "flex font-sans p-8 m-8 card nftImage";
    // cardElement.setAttribute('onclick',"runFavs(this)");
    imageContainer.className = "flex-none w-56 relative shadow-md";
    imageElement.className = "absolute inset-0 w-full h-full object-cover rounded-lg ";
    infoContainer.className = "flex-auto p-6 shadow-md";
    name.className = "w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600";
    description.className = "text-sm text-slate-500 ";
    creator.className = "flex-auto font-medium text-slate-900";
    owner.className = "text-sm font-medium text-slate-400";
    buyBtn.className = "h-10 px-6 font-semibold rounded-full bg-violet-600 text-white";
    likeBtn.className = "flex-none flex items-center justify-center w-9 h-9 rounded-full text-violet-600 bg-violet-50 likeBtn";
    likeBtn.setAttribute('onclick',"runFavs(this)");
    
    if (src) {
      imageElement.src = src;
    }

    if (nameNFT) {
      name.innerText = nameNFT;
    }
    if (descriptionNFT) {
      description.innerText = descriptionNFT;
    }
    if (creatorNFT) {
      creator.innerText = creatorNFT;
    }
    if (ownerNFT) {
      owner.innerText = ownerNFT;
    }
    if (idNFT){
      cardElement.setAttribute('id', idNFT);
    }
    buyBtn.innerText = "Buy it";

    cardContainer.appendChild(cardElement);
    cardElement.append(imageContainer, infoContainer);

    imageContainer.appendChild(imageElement);
    infoContainer.append(name, description, creator, owner, buyBtn, likeBtn);

    const tiltEffectSettings = {
        max: 25, // max tilt rotation (degrees (deg))
        perspective: 1000, // transform perspective, the lower the more extreme the tilt gets (pixels (px))
        scale: 1.1, // transform scale - 2 = 200%, 1.5 = 150%, etc..
        speed: 500, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
        easing: "cubic-bezier(.03,.98,.52,.99)" // easing (transition-timing-function) of the enter/exit transition
      };
    
    const cards = document.querySelectorAll(".card ");
      
    // cards.forEach(card => {
    //   card.addEventListener("mouseenter", cardMouseEnter);
    //   card.addEventListener("mousemove", cardMouseMove);
    //   card.addEventListener("mouseleave", cardMouseLeave);
    // });
    
    function cardMouseEnter(event) {
      setTransition(event);
    }
    
    function cardMouseMove(event) {
      const card = event.currentTarget;
      const cardWidth = card.offsetWidth;
      const cardHeight = card.offsetHeight;
      const centerX = card.offsetLeft + cardWidth/2;
      const centerY = card.offsetTop + cardHeight/2;
      const mouseX = event.clientX - centerX;
      const mouseY = event.clientY - centerY;
      const rotateXUncapped = (+1)*tiltEffectSettings.max*mouseY/(cardHeight/2);
      const rotateYUncapped = (-1)*tiltEffectSettings.max*mouseX/(cardWidth/2);
      const rotateX = rotateXUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max : 
                      (rotateXUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateXUncapped);
      const rotateY = rotateYUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max : 
                      (rotateYUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateYUncapped);
    
      card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) 
                              scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
    }
    
    function cardMouseLeave(event) {
      event.currentTarget.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      setTransition(event);
    }
    
    function setTransition(event) {
      const card = event.currentTarget;
      clearTimeout(card.transitionTimeoutId);
      card.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
      card.transitionTimeoutId = setTimeout(() => {
        card.style.transition = "";
      }, tiltEffectSettings.speed);
    }
  }
  if (!parent) {
    root.appendChild(element);
  } else {
    parent.appendChild(element);
  }
  return element;
}

const nftContainer = createElement("div");
nftContainer.className = "nft-container flex";
const cardContainer = createElement("div");
cardContainer.className = "flex-1";
nftContainer.appendChild(cardContainer);
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
        src: el.image_url,
        ownerNFT: el.owner.name,
        creatorNFT: el.creator.username,
        descriptionNFT: el.description,
        idNFT: el.id,
      },
      cardContainer
    );
  });
}


async function createIndex() {
  try {
    const response = await fetch(`https://awesome-nft-app.herokuapp.com/`);
    const data = await response.json();
    const assets = data.assets;

    createCards(assets);
  } catch (error) {
    console.log(error);
  }
}


//createIndex();