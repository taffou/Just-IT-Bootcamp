let scrollContainer = document.querySelector(".roll");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollContainer = "auto";
});

next.addEventListener("click", () => {
    scrollContainer.style.scrollContainer = "smooth";
    scrollContainer.scrollLeft += 900;
});

prev.addEventListener("click", () => {
    scrollContainer.style.scrollContainer = "smooth";
    scrollContainer.scrollLeft -= 900;
});
