// Calling The Elements
let header = document.querySelector("header");
let menuBtn = document.querySelector(".nav-bars > i");
let navBarMenu = document.querySelector(".nav-bars ul");
let links = document.querySelectorAll(".nav-bars ul li a");
let scrollToTopButton = document.querySelector("header .scroll-to-top");
let portfolioNavBar = document.querySelectorAll(".portfolio .categories span");
let portfolioContent = document.querySelectorAll(".portfolio .content > div");
console.log(portfolioContent);

// Open-Close Menu
menuBtn.onclick = () => {
  navBarMenu.classList.toggle("toggle");
};

// Scrolling To Top
window.onscroll = () => {
  if (scrollY > 500) {
    header.style.background = "rgb(0 0 0 / 80%)";
    scrollToTopButton.style.display = "block";
    scrollToTopButton.onclick = () => {
      window.scrollTo(top);
      links.forEach((e) => {
        e.classList.remove("active");
        links[0].classList.add("active");
      });
    };
  } else {
    scrollToTopButton.style.display = "none";
    header.style.background = "none";
    header.style.position = "fixed";
  }
};

// Active Class
function activeClass(e) {
  e.forEach((ele) => {
    ele.onclick = () => {
      e.forEach((ele) => {
        ele.classList.remove("active");
      });
      ele.classList.add("active");
    };
  });
}

// Active Class For Header
activeClass(links);

// link On Click
links.forEach((link) => {
  link.addEventListener("click", function () {
    menuBtn.click();
  });
});

// Active Class For Portfolio
activeClass(portfolioNavBar);

// Portfolio Contents Filter
portfolioNavBar.forEach((category) => {
  category.addEventListener("click", function () {
    portfolioContent.forEach((content) => {
      if (content.classList.contains(category.getAttribute("data-set"))) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});
