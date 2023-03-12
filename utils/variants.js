const fadeInView = (direction, delay = 0) => {
	return {
		initial: {
			opacity: 0,
			y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
			x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
		},

		animate: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				type: "tween",
				duration: 1.2,
				delay,
				ease: [0.25, 0.25, 0.25, 0.75],
				when: "beforeChildren",
				staggerChildren: 5,
			},
		},
	};
};

const fadeIn = (delay) => {
	return {
		initial: {
			opacity: 0,
			x: -50,
		},
		animate: {
			opacity: 1,
			x: 0,
			transition: {
				type: "tween",
				delay,
			},
		},
	};
};

const grow = () => {
	return {
		initial: {
			opacity: 0,
			width: 0,
		},
		animate: {
			opacity: 1,
			width: 56,
			transition: {
				type: "tween",
			},
		},
	};
};

export { fadeInView, fadeIn, grow };
