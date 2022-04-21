
function createElementCreator(tag, config, parent = null) {
    const { username, dataSrc, img, address, href } = config || {};

    const element = document.createElement(tag);

        // Style du grid
        element.className = 'flex font-sans ';
        element.href = "https://www.ethereum.org/";
        element.classList.add("grid", "grid-cols-1", "gap-y-10", "sm:grid-cols-2", "gap-x-6", "lg:grid-cols-3", "xl:grid-cols-4", "xl:gap-x-8");
        element.style.display = 'grid';
        element.style.border = '2px solid #eaeaea';
        element.style.borderRadius = '10px';
        element.style.backgroundColor = ' #f9fafc';




        // Image
        if (img) {
            const imgDiv = document.createElement('div');
           
            imgDiv.style.display = 'flex';
            imgDiv.style.justifyContent = 'center';
            imgDiv.style.alignItems = 'center';

            const imgElement = document.createElement('img');
            imgElement.className= 'w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8';
            imgElement.src = img;
            imgElement.dataset.src = dataSrc;
            imgElement.style.justifyContent = 'center';


            imgDiv.appendChild(imgElement);

            if (img !== '') {
                element.appendChild(imgDiv);

            }

        }

        // Username
        if (username) {
            const usernameElement = document.createElement('h3');
            usernameElement.innerText = username;
            usernameElement.style.display = 'flex';
            usernameElement.style.justifyContent = 'center';
            usernameElement.style.alignItems = 'center';
            element.className = 'mt-1 text-lg font-medium text-gray-900  card';
            usernameElement.style.marginTop = '20px';
            usernameElement.style.color = '#5046e5';

            if (username !== '') {
                element.appendChild(usernameElement);


            }
        }

        if (address){
            const addressElement = document.createElement('a');
            addressElement.innerText = address;
            addressElement.style.color = '#868686';
            addressElement.style.fontSize = '12px';
            addressElement.style.display = 'flex';
            addressElement.style.justifyContent = 'center';
            addressElement.style.alignItems = 'center';

            addressElement.href = `https://etherscan.io/address/${address}`;


            if (address !== '') {
                element.appendChild(addressElement);
        }
    }

        // Button
        if (address){
        const button = document.createElement('button');
        button.className = ' mt-4 text-sm inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';
        button.innerHTML = 'Voir la collection';
        button.style.maxWidth = '300px';
        button.style.margin = 'auto';
        button.style.marginTop = '10px';
        button.style.marginBottom = '20px';
        button.setAttribute('href', href)

        element.appendChild(button);
        }


        if (!parent) {
            root.appendChild(element);
        } else {
            parent.appendChild(element);
        }
        return element;
    }

    const creatorsDiv = createElementCreator('div');
    creatorsDiv.style.gridGap = '50px';
    creatorsDiv.className ="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8";
    creatorsDiv.style.border = 'none';
    creatorsDiv.style.backgroundColor = 'white';

    function createCreatorCards(data) {
        data.forEach(el => {
            if (el.username) {
                createElementCreator('div', {
                    img: './load.jpg',
                    dataSrc : el.profile_url,
                    username: el.username,
                    address: el.address,
                    // A ajouter
                    href: `/creator-collection.html?username=${el.username}`,
                }, creatorsDiv);
            }
        })
    }

    async function getCreators() {

        const response = await fetch('https://awesome-nft-app.herokuapp.com/creators');
        const data = await response.json();
        const creators = data.creators
        createCreatorCards(creators);
    }

