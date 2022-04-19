// Navbar test pour tester le routage :
// A chaque boutton on ajoute un attribut href avec la valeur de l'url

const navbar = document.createElement('div');
navbar.id = 'navbar';
navbar.style.position = 'fixed';

navbar.style.top = '0';
navbar.style.left = '0';
navbar.style.right = '0';
navbar.style.zIndex = '100';
navbar.style.backgroundColor = '#fff';
navbar.style.boxShadow = '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)';
navbar.style.height = '60px';
navbar.style.display = 'flex';
navbar.style.alignItems = 'center';
navbar.style.padding = '0 20px';
navbar.style.fontSize = '20px';
document.body.appendChild(navbar);

const navbtn1 = document.createElement('button');
const navbtn2 = document.createElement('button');
const navbtn3 = document.createElement('button');
const navItems = [navbtn1, navbtn2, navbtn3];

navItems.forEach(function(navItem) {
    document.createElement('button');
    navItem.style.display = 'flex';
    navItem.style.alignItems = 'center';
    navItem.style.justifyContent = 'center';
    navItem.style.height = '100%';
    navItem.style.width = '100px';

});

navbtn1.id = 'navbtn1';
navbtn1.innerHTML = 'Home';
navbtn1.setAttribute('href', '/index.html');


navbtn2.id = 'navbtn2';
navbtn2.innerHTML = 'Page 1';
navbtn2.setAttribute('href', '/page1.html');

navbtn3.id = 'navbtn3';
navbtn3.innerHTML = 'Page 2';
navbtn3.setAttribute('href', '/page2.html');

navbar.appendChild(navbtn1);
navbar.appendChild(navbtn2);
navbar.appendChild(navbtn3);