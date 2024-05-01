var overlayloader = document.getElementById("loader");
const overlayLoader = document.getElementById("loader");

window.addEventListener("load", () => {
  setTimeout(() => {
    overlayLoader.style.display = "none";
  }, 1000); // Hides the loader after 4 seconds (4000 milliseconds)
});

let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

menu.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};

document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  loop: true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },

  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    786: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

let popup = document.getElementById("popup");
let background = document.getElementById("background");

function openPopup() {
  popup.classList.add("open-popup");
  background.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
  background.classList.remove("open-popup");
}



let addToCart = document.querySelectorAll("a.cart");

addToCart.forEach(anchor => {
  anchor.addEventListener("click", () => {
    anchor.textContent = "added";
    setTimeout(() => {
      anchor.textContent = "add to cart";
    }, 5000); // Reset button text after 2 seconds
  });
});