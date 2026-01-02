export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

export const glowHover = {
  hover: {
    boxShadow: "0 0 20px rgba(245, 158, 11, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.5)",
    y: -5,
    transition: { duration: 0.3 }
  }
};
