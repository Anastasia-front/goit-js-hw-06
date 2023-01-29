const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
for (let index = 0; index < categories.length; index++) {
  const heading = document.querySelectorAll("h2");
  const ul = document.querySelectorAll("h2+ul");
  const li = ul[index].childElementCount;
  console.log(`Category: ${heading[index].textContent}`);
  console.log(`Elements: ${li}`);
}
