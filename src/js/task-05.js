const input = document.querySelector("#name-input");
console.log(input);
const span = document.querySelector("#name-output");
input.addEventListener("input", () => {
  span.innerHTML = input.value;
  if (input.value === "") {
    span.innerHTML = "Anonymous";
  }
});
