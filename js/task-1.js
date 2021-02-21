const categoriesListRef = document.querySelector("#categories");
const categoriesNumberRef = categoriesListRef.children.length;
console.log(`в списке ${categoriesNumberRef} категории`);

const itemRefs = document.querySelectorAll(".item");
console.log(itemRefs);

const categoryDesc = (itemRefs) => {
  return itemRefs.forEach((itemRef) => {
    const itemHeadRef = document.querySelector("h2");
    const itemNameRef = itemHeadRef.textContent;
    const lastChildItems = itemRef.lastChild.length;
    return `категория: ${itemNameRef}, количество элементов: ${lastChildItems}`;
  });
};

console.log(categoryDesc(itemRefs));
