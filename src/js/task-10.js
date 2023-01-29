function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const number = document.querySelector("input");
const boxes = document.querySelector("#boxes");

const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = number.value;
  let size = 30;
  for (let index = 0; index < amount; index++) {
    const markup = `<div id="remove" style="background-color:${getRandomHexColor()}; width:${size}px; height:${size}px;"></div>`;
    size += 10;
    boxes.insertAdjacentHTML("beforeend", markup);
  }
}

function destroyBoxes() {
  const remove = document.querySelectorAll("#remove");
  for (const del of remove) {
    del.remove();
  }
}
