// document.addEventListener("DOMContentLoaded", () => {
//   const hamburger = document.querySelector(".hamburger-menu");
//   const mobileMenu = document.querySelector(".mobile-menu");

//   hamburger.addEventListener("click", () => {
//     mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const imgContainer = document.querySelector(".hero");

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



let slideIndex = 0;

function showSlides() {
  let slides = document.querySelectorAll(".slide");

  slides.forEach(slide => {
    slide.style.display = "none";
  });

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function changeSlide(n) {
  let slides = document.querySelectorAll(".slide");
  slides[slideIndex - 1].style.display = "none";

  slideIndex += n;
  if (slideIndex < 1) { slideIndex = slides.length; }
  if (slideIndex > slides.length) { slideIndex = 1; }

  slides[slideIndex - 1].style.display = "block";
}

// Start the slideshow
document.addEventListener("DOMContentLoaded", () => {
  showSlides();
});

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");

  const animateCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    const increment = target / 100;
    let count = 0;

    const updateCounter = () => {
      count += increment;
      if (count < target) {
        counter.innerText = Math.ceil(count);
        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  };

  counters.forEach(counter => {
    animateCounter(counter);
  });
});


let container = document.querySelector(".carousel1-container");

const moveSlide = (direction) => {
  if (direction === 1) {
    // Move first slide to end for circular effect
    let firstSlide = container.firstElementChild;
    container.appendChild(firstSlide.cloneNode(true));
    container.removeChild(firstSlide);
  } else if (direction === -1) {
    // Move last slide to beginning
    let lastSlide = container.lastElementChild;
    container.insertBefore(lastSlide.cloneNode(true), container.firstElementChild);
    container.removeChild(lastSlide);
  }
};

// Auto Slide Every 5 Seconds
setInterval(() => moveSlide(1), 3000);


document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");

      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // Show/Hide items based on category
      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute("data-category");
        if (category === "all" || itemCategory === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});

