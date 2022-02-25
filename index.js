const mega = document.querySelector("#mega");
const megaMenu = document.querySelector(".megaMenu");
mega.addEventListener("mouseover", () => {
  megaMenu.classList.add("active");
});
mega.addEventListener("mouseout", () => {
  megaMenu.classList.remove("active");
});
