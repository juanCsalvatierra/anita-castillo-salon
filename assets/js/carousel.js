export function carousel() {
	const $container = document.querySelector(".carousel");
	const $ul = document.querySelector(".carousel__ul");
	const width = $ul.offsetWidth;
	const speed = 1;

	let $ulClone;
	let x = 0;
	let x2 = width;

	function cloneUl() {
		$ulClone = $ul.cloneNode(true);
		$container.appendChild($ulClone);
		$ulClone.style.left = `${width}px`;
		$ulClone.style.width = `${$ul.offsetWidth}px`;
	}

	function moveFirst() {
		x -= speed;

		if (width >= Math.abs(x)) {
			$ul.style.left = `${x}px`;
		} else {
			x = width;
		}
	}

	function moveSecond() {
		x2 -= speed;

		if ($ulClone.offsetWidth >= Math.abs(x2)) {
			$ulClone.style.left = `${x2}px`;
		} else {
			x2 = width;
		}
	}

	cloneUl();

	setInterval(moveFirst, 10);
	setInterval(moveSecond, 10);
}
