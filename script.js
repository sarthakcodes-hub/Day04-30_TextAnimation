    const restartButton = document.querySelector(".reset");

restartButton.addEventListener(
    "click",
    () => {
        const textAnimation = document.querySelector(".text-stroke");

        setAnimationName(textAnimation, "none");
        requestAnimationFrame(() =>
            setTimeout(() => setAnimationName(textAnimation, ""), 0)
        );
    },
    false
);

const setAnimationName = (element, animationName) => {
    if (element) {
        element.style.animationName = animationName;
    }
};
