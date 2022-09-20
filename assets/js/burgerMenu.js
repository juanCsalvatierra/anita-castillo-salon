export const burgerMenu = () => {
	const $burger = document.querySelector(".burger");
	const $container = document.querySelector(".mobile");
	const $mobileAncor = document.querySelectorAll(".mobile__a");

	$burger.addEventListener("click", () => {
		$burger.classList.toggle("active");
		$container.classList.toggle("active");
	});

	$mobileAncor.forEach((a) => {
		a.addEventListener("click", () => {
			$burger.classList.remove("active");
			$container.classList.remove("active");
		});
	});
};
