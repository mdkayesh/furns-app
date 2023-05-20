const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  exit: {
    opacity: 1,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const tabItemVariant = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.3,
    },
  },
};

export { container, fadeUp, tabItemVariant };
