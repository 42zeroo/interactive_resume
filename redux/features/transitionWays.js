export const scale_up = (timeout) => {
  return {
    direction: "slide_up",
    entering: {
      position: `absolute`,
      opacity: 0,
      transform: `scale(0.4)`
    },
    entered: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 1,
      transform: `scale(1)`,
      animation: "blink 2s linear 2"
    },
    exiting: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 0,
      transform: `scale(0.3)`
    }
  };
};
export const slide_up = (timeout) => {
  return {
    direction: "slide_up",
    entering: {
      position: `absolute`,
      opacity: 0.8,
      transform: `translateY(120vh)`
    },
    entered: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 1,
      transform: `translateY(0px)`,
      animation: "blink 2s linear 2"
    },
    exiting: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 0.8,
      transform: `translateY(120vh)`
    }
  };
};

export const slide_down = (timeout) => {
  return {
    direction: "slide_down",
    entering: {
      position: `absolute`,
      opacity: 0.8,
      transform: `translateY(-120vh)`
    },
    entered: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 1,
      transform: `translateY(0px)`,
      animation: "blink 2s linear 2"
    },
    exiting: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 0.8,
      transform: `translateY(-120vh)`
    }
  };
};
export const slide_right = (timeout) => {
  return {
    direction: "slide_right",
    entering: {
      position: `absolute`,
      opacity: 0.8,
      transform: `translateX(120vh)`
    },
    entered: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 1,
      transform: `translateX(0px)`,
      animation: "blink 2s linear 2"
    },
    exiting: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 0.8,
      transform: `translateX(120vh)`
    }
  };
};
