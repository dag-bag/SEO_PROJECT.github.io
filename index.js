import { canvas } from "./anime.js";
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
console.log(h2);

window.addEventListener("mousemove", cursor);
function cursor(e) {
  mouseCursor.style.top = e.pageY - 15 + "px";
  mouseCursor.style.left = e.pageX - 15 + "px";
}
// Main functions
const imgs = document.querySelectorAll("img");
function main(element, Class) {
  element.forEach((singleElement) => {
    singleElement.addEventListener("mouseover", () => {
      mouseCursor.classList.add(`${Class}`);
    });
    singleElement.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove(`${Class}`);
    });
  });
}
// MouseOver functions
function mouseOver(element, Class) {
  element.addEventListener("mouseover", () => {
    mouseCursor.classList.add(`${Class}`);
  });
}
function mouseleave(element, Class) {
  element.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove(`${Class}`);
  });
}
function forEachMouseOver(element, Class) {
  element.forEach((singleElement) => {
    singleElement.addEventListener("mouseover", () => {
      mouseCursor.classList.remove(`${Class}`);
    });
  });
}
function forEachMouseleave(element, Class) {
  element.forEach((singleElement) => {
    singleElement.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove(`${Class}`);
    });
  });
}
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
mouseOver(h2, "h2Grow");
mouseleave(h2, "h2Grow");
/**@ImgHover_kri_jayegi */

main(imgs, "imgGrow");

// download link hover
const downloadBtn = document.querySelector("#resume");

mouseOver(downloadBtn, "downloadLink");
mouseleave(downloadBtn, "downloadLink");
// testing
canvas.addEventListener("mouseover", () => {
  mouseCursor.style.display = "none";
  cursor.style;
});
canvas.addEventListener("mouseleave", () => {
  mouseCursor.style.display = "block";
});
