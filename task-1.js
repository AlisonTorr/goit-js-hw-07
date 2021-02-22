const categoriesListRef = document.querySelector("#categories");
const categoriesNumberRef = categoriesListRef.children.length;
console.log(`в списке ${categoriesNumberRef} категории`);

const itemRefs = document.querySelectorAll(".item");
console.log(itemRefs);

for (const itemRef of itemRefs) {
  console.log(
    `категория: ${itemRef.firstElementChild.textContent} , количество элементов: ${itemRef.lastElementChild.children.length}`
  );
}
