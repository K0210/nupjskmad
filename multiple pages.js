const current;
function goto(to_page) {
  const page = document.getElementById(current);
  page.style.visibility = "hidden";
  current = to_page;
  page = document.getElementById(current);
  page.style.visibility = "visible";
}

function main() {
  current = "p1";
  goto("p1");
}

window.onload = main;
