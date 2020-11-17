const body = document.querySelector('body');
const lockBodyScroll = () => {
	Object.assign(body.style, {
		overflow: 'hidden',
	});
};

const unlockBodyScroll = () => {
	Object.assign(body.style, {
		overflow: '',
	});
};

export {
	lockBodyScroll,
	unlockBodyScroll,
};
