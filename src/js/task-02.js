const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
for (const ingredient of ingredients) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  ul.prepend(li);
}
