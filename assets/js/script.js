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

/* Funzione che genera l'invio di una mail tramite il form(aprirà il client di posta elettronica impostato sul computer */

function Email() {
  var nome = document.modulo.nome.value;
  var oggetto = document.modulo.oggetto.value;
  var messaggio = document.modulo.messaggio.value;
  if (nome == "" || nome == "undefined") {
    alert("Inserire un indirizzo nome valido.");
    document.modulo.nome.focus();
  } else if (oggetto == "" || oggetto == "undefined") {
    alert("Inserire un oggetto.");
    document.modulo.oggetto.focus();
  } else if (messaggio == "" || messaggio == "undefined") {
    alert("Inserire un messaggio.");
    document.modulo.messaggio.focus();
  } else {
    location.href =
      "mailto:" +
      "emiliano@t04.it" +
      "?Subject=" +
      oggetto +
      " messaggio inviato da " +
      nome +
      "&Body=" +
      "Testo messaggio: " +
      messaggio;
  }
}
