const categorys = document.querySelectorAll(".item");

console.log(`List has ${categorys.length} items`);

for (const category of categorys) {
  console.log(category.querySelector("h2").innerText);
  console.log(category.querySelectorAll("li").length);
}
