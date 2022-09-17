export const carousel = () => {
	const $container = document.querySelector(".carousel");
	const $ul = document.querySelector(".carousel__ul");
	const width = $ul.offsetWidth;

	const speed = 1;
	let x = 0;
	let x2 = width;

	const $ulClone = $ul.cloneNode(true);
	$container.appendChild($ulClone);
	$ulClone.style.left = `${width}px`;

	const moveFirst = () => {
		x -= speed;

		if (width >= Math.abs(x)) {
			$ul.style.left = `${x}px`;
		} else {
			x = width;
		}
	};

	const moveSecond = () => {
		x2 -= speed;

		if ($ulClone.offsetWidth >= Math.abs(x2)) {
			$ulClone.style.left = `${x2}px`;
		} else {
			x2 = width;
		}
	};

	setInterval(moveFirst, 10);
	setInterval(moveSecond, 10);
};
