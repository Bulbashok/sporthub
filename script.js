document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.getElementById("burger-menu");
  const closeBtn = document.getElementById("closeBurger");
  const overlay = document.getElementById("burgerOverlay");
  const backdrop = document.getElementById("backdrop");

  const openMenu = () => {
    overlay.classList.add("active");
    backdrop.classList.add("active");
    document.documentElement.classList.add("no-scroll");
  };

  const closeMenu = () => {
    overlay.classList.remove("active");
    backdrop.classList.remove("active");
    document.documentElement.classList.remove("no-scroll");
  };

  burgerBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  backdrop.addEventListener("click", closeMenu);

  overlay.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
});

//SLIDER
const heroSlider = document.getElementById("heroSlider");
const bgElement = document.getElementById("heroSliderBg");
const prevBtn = heroSlider.querySelector(".slider-btn--prev");
const nextBtn = heroSlider.querySelector(".slider-btn--next");
const dotsContainer = document.getElementById("sliderDots");

const backgrounds = [
  "images/bg0.png",
  "images/bg1.png",
  "images/bg2.png",
  "images/bg3.png",
];

let currentIndex = 0;

backgrounds.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("slider-dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

bgElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${backgrounds[0]})`;

function preloadImage(src) {
  const img = new Image();
  img.src = src;
}

function goToSlide(index) {
  currentIndex = index;
  bgElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${backgrounds[index]})`;

  document.querySelectorAll(".slider-dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  const nextIndex = (index + 1) % backgrounds.length;
  preloadImage(backgrounds[nextIndex]);
}

prevBtn.addEventListener("click", () => {
  const prevIndex =
    (currentIndex - 1 + backgrounds.length) % backgrounds.length;
  goToSlide(prevIndex);
});

nextBtn.addEventListener("click", () => {
  const nextIndex = (currentIndex + 1) % backgrounds.length;
  goToSlide(nextIndex);
});

let autoSlide = setInterval(() => {
  goToSlide((currentIndex + 1) % backgrounds.length);
}, 5000);

[prevBtn, nextBtn, ...document.querySelectorAll(".slider-dot")].forEach(
  (btn) => {
    btn.addEventListener("click", () => {
      clearInterval(autoSlide);
    });
  }
);
