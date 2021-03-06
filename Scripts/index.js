const mega = document.querySelector("#mega");
const megaMenu = document.querySelector(".megaMenu");
mega.addEventListener("mouseover", () => {
  megaMenu.classList.add("active");
});
mega.addEventListener("mouseout", () => {
  megaMenu.classList.remove("active");
});
const mouseCursor = document.querySelector(".cursor");
const navLinks = document.querySelectorAll("nav ul li");
const anchorText = document.querySelectorAll("nav ul li a");
const strong = document.querySelectorAll("strong");
const h2 = document.querySelector("h2");
// console.log(h2);

window.addEventListener("mousemove", cursor);
function cursor(e) {
  if (window.innerWidth >= 950) {
    mouseCursor.style.top = e.pageY - 15 + "px";
    mouseCursor.style.left = e.pageX - 15 + "px";
  }
}

// Main functions

const imgs = document.querySelectorAll("img");
function main(element, Class) {
  if (window.innerWidth >= 950) {
    element.forEach((singleElement) => {
      singleElement.addEventListener("mouseover", () => {
        mouseCursor.classList.add(`${Class}`);
      });
      singleElement.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove(`${Class}`);
      });
    });
  }
}
// Submain function
function subMain(element, Class) {
  if (window.innerWidth >= 950) {
    element.addEventListener("mouseover", () => {
      mouseCursor.classList.add(`${Class}`);
    });
    element.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove(`${Class}`);
    });
  }
}

// MouseOver functions
// function mouseOver(element, Class) {
//   element.addEventListener("mouseover", () => {
//     mouseCursor.classList.add(`${Class}`);
//   });
// }
// function mouseleave(element, Class) {
//   element.addEventListener("mouseleave", () => {
//     mouseCursor.classList.remove(`${Class}`);
//   });
// }
// function forEachMouseOver(element, Class) {
//   element.forEach((singleElement) => {
//     singleElement.addEventListener("mouseover", () => {
//       mouseCursor.classList.remove(`${Class}`);
//     });
//   });
// }
// function forEachMouseleave(element, Class) {
//   element.forEach((singleElement) => {
//     singleElement.addEventListener("mouseleave", () => {
//       mouseCursor.classList.remove(`${Class}`);
//     });
//   });
// }
// navlinks Hover
// navLinks.forEach((links) => {
//   links.addEventListener("mouseover", () => {
//     mouseCursor.classList.add("linkGrow");
//   });
//   // mouseCursor + "::after".add("linkGrow");

//   links.addEventListener("mouseleave", () => {
//     mouseCursor.classList.remove("linkGrow");
//   });
// });
main(navLinks, "linkGrow");
// Hover on Strong
// strong.forEach((text) => {
//   text.addEventListener("mouseover", () => {
//     mouseCursor.classList.add("textGrow");
//     // text.style.color = "black";
//   });
//   text.addEventListener("mouseleave", () => {
//     mouseCursor.classList.remove("textGrow");
//     // text.style.color = "";
//   });
// });
main(strong, "textGrow");

// H2 Hover kre jaynege
// h2.addEventListener("mouseover", () => {
//   mouseCursor.classList.add("h2Grow");
// });
// h2.addEventListener("mouseleave", () => {
//   mouseCursor.classList.remove("h2Grow");
// });
subMain(h2, "h2Grow");
// mouseleave(h2, "h2Grow");
/**@ImgHover_kri_jayegi */

main(imgs, "imgGrow");

// download link hover
const downloadBtn = document.querySelector("#hireBtn");

subMain(downloadBtn, "downloadLink");
// mouseleave(downloadBtn, "downloadLink");
// Resume link hover
const resumeBtn = document.querySelector("#resume");
// console.log(resumeBtn);
subMain(resumeBtn, "resumeLink");
// mouseleave(resumeBtn, "resumeLink");

// More about me link hover

const aboutMe = document.querySelector("#aboutMe");

aboutMe.addEventListener("mouseover", () => {
  aboutMe.classList.add("showAbout");
});
aboutMe.addEventListener("mouseleave", () => {
  aboutMe.classList.remove("showAbout");
});
// Anywhere click
function AnywhereClick() {
  window.addEventListener("click", () => {
    mouseCursor.classList.add("anime");
  });
}

// Links repair

// window.addEventListener("scroll", () => {
//   dots.forEach((dot) => {
//     const a = dot.getAttribute("href");

//   });
// });

// Hover on live demo
const liveBtn = document.querySelectorAll(".liveBtn");
main(liveBtn, "hoverLive");

// Source Code
const sourceBtn = document.querySelectorAll(".githubBtn");
main(sourceBtn, "sourceHovered");
// Get in touch function
const getBtn = document.querySelector("#getTouch");

subMain(getBtn, "getTouchHovered");

// Function for navbar
const menuBtn = document.querySelector("#menuBar");
const close = document.querySelector("#close");
const navBar = document.querySelector("header nav ul");

menuBtn.addEventListener("click", () => {
  navBar.style.left = "0";
});
close.addEventListener("click", () => {
  navBar.style.left = "-100%";
});

// Lazy Loading

(function () {
  var elements = document.querySelectorAll("img[data-src]");
  var index = 0;
  var lazyLoad = function () {
    if (index >= elements.length) return;
    var item = elements[index];
    if (this.scrollY + this.innerHeight > item.offsetTop) {
      var src = item.getAttribute("data-src");
      item.src = src;
      item.addEventListener("load", function () {
        item.removeAttribute("data-src");
      });
      index++;
      lazyLoad();
    }
  };
  var init = function () {
    window.addEventListener("scroll", lazyLoad);
    lazyLoad();
  };
  return init();
})();
