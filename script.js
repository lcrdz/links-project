function toggleMode() {
  const html = document.documentElement;
  const img = html.querySelector("#profile img");
  const lightMode = "light";

  html.classList.toggle(lightMode);

  if (html.classList.contains(lightMode)) {
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png");
  }
}
