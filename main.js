// Calling The Elements
// Header
let header = document.querySelector("header");
let menuBtn = document.querySelector(".nav-bars > i");
let navBarMenu = document.querySelector(".nav-bars ul");
let links = document.querySelectorAll(".nav-bars ul li a");

// Scroll Button
let scrollToTopButton = document.querySelector("header .scroll-to-top");

// Portfolio Section
let portfolioNavBar = document.querySelectorAll(".portfolio .categories span");
let portfolioContent = document.querySelectorAll(".portfolio .content > div");

// Statistics Section
let statisticsSection = document.querySelector(".statistics");
let statisticsNumbers = document.querySelectorAll(
  ".statistics .container .status p:first-of-type"
);

// Testimonial Section
let testimonialSkillSection = document.querySelector(".testimonials-skills");
let progressBars = document.querySelectorAll(
  ".testimonials-skills .skills .progress"
);

// Landing Section
let landingSection = document.querySelector(".landing");
let rightArrow = document.querySelector(".landing .right-btn");
let leftArrow = document.querySelector(".landing .left-btn");
let landingBullets = Array.from(
  document.querySelectorAll(".landing .bullets span")
);

// Open-Close Menu
menuBtn.onclick = () => {
  navBarMenu.classList.toggle("toggle");
};

let startedCounting = false;
let startedProgressBar = false; // start the function
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

  if (scrollY >= testimonialSkillSection.offsetTop - 150) {
    if (!startedProgressBar) {
      progressBars.forEach((progress) => {
        progressBar(progress, 1500);
        progress.style.width = progress.dataset.number;
      });
    }
    startedProgressBar = true;
  }

  if (scrollY >= statisticsSection.offsetTop - 300) {
    if (!startedCounting) {
      statisticsNumbers.forEach((number) => progressBar(number, 1));
    }
    startedCounting = true;
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

function progressBar(progress, seconds) {
  let goal = +progress.dataset.number.match(/\d+/g);
  let incerment = setInterval(() => {
    progress.dataset.text++;
    if (+progress.dataset.text == goal) {
      clearInterval(incerment);
    }
  }, seconds / goal);
}

// Changing Landing Section WallPaper
let landingWallPapers = [
  "url(images/landing-image02.jpg)",
  "url(images/landing-image01.jpg)",
  "url(images/landing-image03.webp)",
];

let currentLandingPaper = 1;

function displayWallPaper(index) {
  landingSection.style.backgroundImage = landingWallPapers[index];
}

function removeAddActiveClass(index) {
  landingBullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });
  landingBullets[index].classList.add("active");
}

rightArrow.onclick = () => {
  if (
    currentLandingPaper >= 0 &&
    currentLandingPaper < landingWallPapers.length - 1
  ) {
    currentLandingPaper++;
  }
  console.log(currentLandingPaper);
  displayWallPaper(currentLandingPaper);
  removeAddActiveClass(currentLandingPaper);
};

leftArrow.onclick = () => {
  if (
    currentLandingPaper > 0 &&
    currentLandingPaper <= landingWallPapers.length - 1
  ) {
    currentLandingPaper--;
  }

  displayWallPaper(currentLandingPaper);
  removeAddActiveClass(currentLandingPaper);
};
