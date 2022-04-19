function scrollReveal() {
	const revealPoint = 150;
	const revealElement = document.querySelectorAll(".card");
	for (let i = 0; i < revealElement.length; i++) {
		let windowHeight = window.innerHeight;
		let revealTop = revealElement[i].getBoundingClientRect().top;
		if (revealTop < windowHeight - revealPoint) {
			revealElement[i].classList.add("active");
		} else {
			revealElement[i].classList.remove("active");
		}
	}
}
scrollReveal();
window.addEventListener("scroll", scrollReveal);

window.addEventListener("load", scrollReveal);
