let theme = localStorage.getItem("data-theme");

if (theme === "dark") {
  changeThemeToDark();
} else {
  changeThemeToLight();
}

function changeThemeToDark() {
  document.documentElement.setAttribute("data-theme", "dark"); // set theme to dark
  localStorage.setItem("data-theme", "dark"); // save theme to local storage
}

function changeThemeToLight() {
  document.documentElement.setAttribute("data-theme", "light"); // set theme light
  localStorage.setItem("data-theme", "light"); // save theme to local storage
}

// Get the element based on ID
const checkbox = document.getElementById("switch");

// Apply retrieved them to the website
checkbox.addEventListener("change", () => {
  let theme = localStorage.getItem("data-theme"); // Retrieve saved them from local storage
  if (theme === "dark") {
    changeThemeToLight();
  } else {
    changeThemeToDark();
  }
});

gsap.fromTo(
  ".header_graphics",
  { x: "100vw", opacity: 0 },
  { x: 0, opacity: 1, duration: 0.8, ease: "ease-in" }
);

const headerTimeline = gsap.timeline();

headerTimeline.fromTo(
  ".header_text",
  { x: "-100vw", opacity: 0 },
  { x: 0, opacity: 1, duration: 0.8, ease: "ease-in" }
);

headerTimeline.fromTo(
  ".header_text button",
  { y: 15, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.3, ease: "ease-in" },
  "-=0.1"
);

const productTimeline = gsap.timeline();
const productTimeline1 = gsap.timeline();

gsap.fromTo(
  ".pg1",
  {
    x: "-100vw",
    opacity: 0,
  },
  {
    scrollTrigger: {
      trigger: ".pg1",
      start: "top 62%",
    },

    x: 0,
    opacity: 1,
    duration: 0.8,
    ease: "ease-in",
  }
);

productTimeline.fromTo(
  ".pt1",
  {
    x: "100vw",
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 0.8,
    ease: "ease-in",
  }
);

ScrollTrigger.create({
  trigger: ".pt1",
  start: "top 62%",
  animation: productTimeline,
});

productTimeline.fromTo(
  ".pt1 a",
  { y: 15, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.4, ease: "ease-in" }
);

gsap.fromTo(
  ".pg2",
  {
    x: "100vw",
    opacity: 0,
  },
  {
    scrollTrigger: {
      trigger: ".pg2",
      start: "top 62%",
    },

    x: 0,
    opacity: 1,
    duration: 0.8,
    ease: "ease-in",
  }
);

productTimeline1.fromTo(
  ".pt2",
  {
    x: "-100vw",
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 0.8,
    ease: "ease-in",
  }
);

ScrollTrigger.create({
  trigger: ".pt2",
  start: "top 62%",
  animation: productTimeline1,
});

productTimeline1.fromTo(
  ".pt2 a",
  { y: 15, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.4, ease: "ease-in" }
);
