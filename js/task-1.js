const categoriesListRef = document.querySelector("#categories");
const categoriesNumberRef = categoriesListRef.children.length;
console.log(`в списке ${categoriesNumberRef} категории`);

const itemRefs = document.querySelectorAll(".item");
console.log(itemRefs);

const itemHeadRef = document.querySelectorAll("h2");
const itemHeadRefArr = Array.from(...itemHeadRef);
const itemNameRef = itemHeadRefArr.forEach((head) => head.textContent);
console.log(itemNameRef);

const categoryDescRef = Array.from(...itemRefs);

getCategoryDesc = categoryDescRef.forEach((ref) => {
  const itemHeadRef = document.querySelector("h2");
  const itemNameRef = itemHeadRef.textContent;
  const lastChildItems = ref.lastChild.length;
  return `категория: ${itemNameRef}, количество элементов: ${lastChildItems}`;
});

console.log(getCategoryDesc(itemRefs));
