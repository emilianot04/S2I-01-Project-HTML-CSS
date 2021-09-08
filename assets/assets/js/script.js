/* Funzione scroll Nav Bar */
function scrollNavBar(menuNav) {
  var navbar = document.querySelector(menuNav);

  document.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("border-botton-black");
      navbar.classList.add("bg-color-menu");
    } else {
      navbar.classList.remove("border-botton-black");
      navbar.classList.remove("bg-color-menu");
    }
  });
}

scrollNavBar("#nav");
