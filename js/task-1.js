const categoriesListRef = document.querySelector("#categories");
const categoriesNumberRef = categoriesListRef.children.length;
console.log(`в списке ${categoriesNumberRef} категории`);

const itemRef = document.querySelectorAll(".item");
console.log(itemRef);

itemRef.map((...itemRef) => {
  const itemHeadRef = document.querySelectorAll("h2");
  const itemNameRef = itemHeadRef.textContent;
  const lastChildItems = itemRef.lastChild.length;
  console.log(
    `категория: ${itemNameRef}, количество элементов: ${lastChildItems}`
  );
});
