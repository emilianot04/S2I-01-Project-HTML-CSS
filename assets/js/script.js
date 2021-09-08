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

/* Funzione che chiude il menu una volta che viene cliccata la voce -Solo Mobile- */
function clickNavBar(showDisable) {
  var disable = document.querySelector(showDisable);

  document.addEventListener("click", () => {
    disable.classList.remove("show");
  });
}

clickNavBar(".navbar-collapse");
