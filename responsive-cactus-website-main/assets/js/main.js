/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  })
);

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  if (window.scrollY >= 50) {
    header.classList.add("blur-header");
  } else {
    header.classList.remove("blur-header");
  }
};
window.addEventListener("scroll", blurHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  if (window.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    const sectionLink = document.querySelector(
      `.nav__menu a[href*="${sectionId}"]`
    );

    if (
      scrollY >= sectionTop &&
      scrollY < sectionTop + sectionHeight
    ) {
      sectionLink?.classList.add("active-link");
    } else {
      sectionLink?.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2500,
  delay: 300,
});

sr.reveal(".home__img, .new__data, .care__img, .contact__content, .footer");
sr.reveal(".home__data, .care__list, .contact__img", { delay: 500 });
sr.reveal(".new__card", { delay: 500, interval: 100 });
sr.reveal(".shop__card", { interval: 100 });
