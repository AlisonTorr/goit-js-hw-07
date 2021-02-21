// const catigories = [
//   {
//     name: "Животные",
//     list: ["Кот", "Хомяк", "Лошадь", "Попугай"],
//   },
//   {
//     name: "Продукты",
//     list: ["Хлеб", "Петрушка", "Творог"],
//   },
//   {
//     name: "Технологии",
//     list: ["HTML", "CSS", "JavaScript", "React", "Node"],
//   },
// ];

// const createCatigoryCard = (catigory) => {
//   const catigoryCardRef = document.createElement("li");
//   catigoryCardRef.classList.add("item");

//   const titleRef = document.createElement("h2");
//   titleRef.textContent = catigory.name;

//   const catigoryListRef = document.createElement("ul");

//   const catigoryItemRef = document.createElement("li");
//   catigoryItemRef.textContent = catigory.list;

//   catigoryListRef.appendChild(catigoryItemRef);

//   catigoryCardRef.append(titleRef, catigoryListRef);

//   return catigoryCardRef;
// };

// const catigoryCards = catigories.map((catigory) =>
//   createCatigoryCard(catigory)
// );

// console.log(catigoryCards);

// const catigoriesRootRef = document.querySelector("#catigories");
// catigoriesRootRef.appendChild(catigoryCardRef);

// const catigoriesNumber = catigories.reduce((acc, catigory) => (acc += 1), 0);
// console.log(catigoriesNumber);

// const catigoryDesc = (catigories) =>
//   `Catigory name: ${catigory.name}, number of elements: ${catigory.list.length}`;
// console.log(catigories.catigoryDesc);

const categoriesListRef = document.querySelector("#categories");
const categoriesNumberRef = categoriesListRef.children.length;
console.log(`в списке ${categoriesNumberRef} категории`);

const itemRef = document.querySelectorAll(".item");
const itemNameRef = document.querySelectorAll("h2");
itemRef.forEach((itemRef) =>
  console.log(
    `категория: ${itemNameRef}, количество элементов: ${itemRef.children.length}`
  )
);
