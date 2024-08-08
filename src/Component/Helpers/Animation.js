export const modalVariants = {
	start: {
		opacity: 1,
	},
	end: {
		opacity: 1,
		transition: { duration: 0 },
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.25,
		},
	},
};
export const alertVariants = {
	start: {
		opacity: 0,
		y: "20rem",
	},
	end: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4 },
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.25,
		},
	},
};
export const courseVariants = {
	start: {
		y: "5rem",
		scale: 0.75,
		opacity: 0,
	},
	end: {
		y: 0,
		scale: 1,
		opacity: 1,
		transition: { duration: 0.3 },
	},
	exit: {
		scale: 0,
		transition: {
			duration: 0.3,
		},
	},
};
export const supportVariants = {
	start: {
		y: "5rem",
		opacity: 0,
	},
	end: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.3 },
	},
	exit: {
		scale: 0,
		transition: {
			duration: 0.3,
		},
	},
};

export const loaderVariants = {
	start: {
		opacity: 0.5,
	},
	end: {
		opacity: 1,
		transition: { duration: 0.4 },
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.3,
		},
	},
};

export const containerVariants = {
	start: {
		opacity: 1,
	},
	end: {
		opacity: 1,
		transition: {
			duration: 0,
			staggerChildren: 0.1,
			delayChildren: 0.1,
			ease: "easeInOut",
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.75,
			staggerChildren: 0.2,
			delayChildren: 0.4,
		},
	},
};
export const formVariants = {
	start: {
		opacity: 1,
		x: "50rem",
	},
	end: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.4,
			ease: "easeInOut",
		},
	},
	exit: {
		opacity: 0,
		x: "-50rem",
		transition: {
			duration: 0.3,
		},
	},
};
