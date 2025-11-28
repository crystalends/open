document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-item__header");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      if (content) {
        content.classList.toggle("accordion-item__value--active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".header__menu-toggle");
  const burgerMenu = document.querySelector(".burger-menu");
  const overlay = document.querySelector(".burger-menu__overlay");

  const toggleMenu = () => {
    burgerMenu.classList.toggle("burger-menu--active");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    burgerMenu.classList.remove("burger-menu--active");
    document.body.style.overflow = "";
  };

  menuToggle.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeMenu);
});
