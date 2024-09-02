let slider_items = document.querySelectorAll(".slider-item");
let nextBtns = document.querySelectorAll(".arrow-right");
let prevBtns = document.querySelectorAll(".arrow-left");
let dashes = document.querySelectorAll(".dash");

let slide_index = 0;

function showSlide(nextindex) {
  if (nextindex == 3) slide_index = 0; // restart slide
  else if (nextindex < 0) slide_index = slider_items.length - 1; // restart slider

  slider_items.forEach((item) => (item.style.display = "none"));
  dashes.forEach((dash) => (dash.style.opacity = "0.5"));

  dashes[slide_index].style.opacity = "1";
  slider_items[slide_index].style.display = "flex";
}

function autoplay() {
  slide_index += 1;
  showSlide(slide_index);
}

showSlide(slide_index); // show first slider

let autoplayInterval = setInterval(autoplay, 15000);

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    slide_index += 1;
    slider_items.forEach(
      (item) => (item.style.animation = "slide-in 0.3s ease-in-out 0s")
    );
    // // slider_items[slide_index].style.display = "flex";
    showSlide(slide_index);

    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(autoplay, 10000);
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    slide_index -= 1;
    showSlide(slide_index);
    slider_items.forEach(
      (item) => (item.style.animation = "slide-in 0.4s ease-in 0s reverse")
    );

    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(autoplay, 10000);
  });
});

let dashArray = Array.from(dashes);

dashArray.forEach((dash) => {
  dash.addEventListener("click", () => {
    let dashIndex = dashArray.indexOf(dash);

    slider_items.forEach((item) => (item.style.display = "none"));
    dashes.forEach((dash) => (dash.style.opacity = "0.5"));

    dashes[dashIndex].style.opacity = "1";
    slider_items[dashIndex].style.display = "flex";
  });
});

let scrollHeight = 0;

window.addEventListener("scroll", (event) => {
  scrollHeight = this.scrollY;
  if (scrollHeight >= 13) {
    document.querySelector("#header").style.opacity = 1;
    document.querySelector("#header").classList.add("scroll");
  } else {
    document.querySelector("#header").style.opacity = 0.9;
    document.querySelector("#header").classList.remove("scroll");
  }
});

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("displaymobilenav");
});
