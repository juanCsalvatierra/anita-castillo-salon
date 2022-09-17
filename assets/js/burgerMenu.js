export const burgerMenu = () => {
	const burger = document.querySelector(".burger");
	const container = document.querySelector(".mobile");

	burger.addEventListener("click", () => {
		burger.classList.toggle("active");
		container.classList.toggle("active");
	});
};
