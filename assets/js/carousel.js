export const carousel = () => {
	const $container = document.querySelector(".carousel");
	const $ul = document.querySelector(".carousel__ul");
	const width = $ul.offsetWidth;
	const speed = 1;

	let $ulClone;
	let x = 0;
	let x2 = width;

	const cloneUl = () => {
		$ulClone = $ul.cloneNode(true);
		$container.appendChild($ulClone);
		$ulClone.style.left = `${width}px`;
		$ulClone.style.width = `${$ul.offsetWidth}px`;
	};

	const moveFirst = () => {
		x -= speed;
		console.log(x);

		if (width >= Math.abs(x)) {
			$ul.style.left = `${x}px`;
		} else {
			x = width;
		}
	};

	const moveSecond = () => {
		x2 -= speed;

		console.log(x2);

		if ($ulClone.offsetWidth >= Math.abs(x2)) {
			$ulClone.style.left = `${x2}px`;
			console.log(x2);
		} else {
			x2 = width;
		}
	};

	cloneUl();

	setInterval(moveFirst, 10);
	setInterval(moveSecond, 10);
};
