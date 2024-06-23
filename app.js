function typeWriter(id, txt, i = 0) {
  if (i < txt.length) {
    document.getElementById(id).innerHTML += txt.charAt(i);
    i++;
    setTimeout(function () {
      typeWriter(id, txt, i);
    }, 50);
  }
}

typeWriter("title", "marco b.");

setTimeout(() => {
  typeWriter("paragraph", "porterai minecreft?");
}, 500);
