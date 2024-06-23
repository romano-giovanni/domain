function typeWriter(id, txt, i = 0) {
  if (i < txt.length) {
    document.getElementById(id).innerHTML += txt.charAt(i);
    i++;
    setTimeout(function () {
      typeWriter(id, txt, i);
    }, 50);
  }
}

typeWriter("title", "giovanni romano");

setTimeout(() => {
  typeWriter("paragraph", "full-stack developer");
}, 700);
