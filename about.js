



document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const imgContainer = document.querySelector(".about-banner");

  hamburger.addEventListener("click", () => {
    // Toggle the menu display
    mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";

    // Add space when menu is visible
    if (mobileMenu.style.display === "flex") {
      imgContainer.classList.add("spaced");
    } else {
      imgContainer.classList.remove("spaced");
    }
  });
});
