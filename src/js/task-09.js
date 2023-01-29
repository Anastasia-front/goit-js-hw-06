function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const span = document.querySelector(".color");
const button = document.querySelector("button");
button.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  span.innerHTML = getRandomHexColor();
});
