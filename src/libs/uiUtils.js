const ease = (value, easePower = 2) => {
	// https://youtu.be/ZPlYZRubXkU
	return 1 - Math.pow(1 - value, easePower);
};

export function scrollTopAnimate(toY, duration = 300, cb = () => {}) {
	const fromY = window.scrollY;
	const delta = toY - fromY;
	const start = window.performance.now();
	const update = () => {
		const time = window.performance.now() - start;
		const percent = ease(Math.min(time / duration, 1), 5);
		const newY = fromY + delta * percent;
		window.scrollTo(0, newY);
		if (percent < 1) {
			window.requestAnimationFrame(update);
		} else {
			cb();
		}
	};

	window.requestAnimationFrame(update);
}

export function throttleByAnimationFrame(func = () => {}) {
	let isWaiting = false;
	return function() {
		if(isWaiting) {
			return;
		}
		isWaiting = true;
		window.requestAnimationFrame(() => {
			func();
			isWaiting = false;
		});
	};
}
