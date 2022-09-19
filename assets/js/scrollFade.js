export const scrollFade = () => {
	window.onscroll = () => {
		let services = document.querySelector(".services");
		let about = document.querySelector(".about");
		let work = document.querySelector(".work");
		let servicesDistance, aboutDistance, workDistance;

		servicesDistance =
			window.innerHeight - services.getBoundingClientRect().top;
		if (servicesDistance >= 200) {
			services.classList.add("animation");
		}

		aboutDistance = window.innerHeight - about.getBoundingClientRect().top;
		if (aboutDistance >= 200) {
			about.classList.add("animation");
		}

		workDistance = window.innerHeight - work.getBoundingClientRect().top;
		if (workDistance >= 200) {
			work.classList.add("animation");
		}
	};
};
