const slider = document.querySelector(".slider");
const items = document.querySelectorAll(".slider-item");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const totalItems = items.length;
let index = 0;
const itemsToShow = window.innerWidth <= 768 ? 1 : 3;
function drag() {
  if (index < totalItems - itemsToShow) {
    index++;
  } else {
    index = 0;
  }
  updateSlider();
}
slider.addEventListener("wheel", drag);
slider.addEventListener("touchmove",drag);

nextButton.addEventListener("click", drag);

prevButton.addEventListener("click", () => {
  if (index > 0) {
    index--;
  } else {
    index = totalItems - itemsToShow;
  }
  updateSlider();
});

function updateSlider() {
  const percentage = index * (100 / itemsToShow);
  slider.style.transform = `translateX(-${percentage}%)`;
}
