function typeWriter(id, txt, i = 0) {
  if (i < txt.length) {
    document.getElementById(id).innerHTML += txt.charAt(i);
    i++;
    setTimeout(function () {
      typeWriter(id, txt, i);
    }, 50);
  }
}

setTimeout(() => {
  typeWriter("title", "giovanni romano");
}, 300);

setTimeout(() => {
  typeWriter("paragraph", "full-stack developer");
}, 1050);
