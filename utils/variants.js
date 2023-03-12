const fadeIn = (direction, delay) => {
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
			},
		},
	};
};

export { fadeIn };
