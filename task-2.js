"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// ingredients.forEach((ingredients, idx) => {
//   const ingredient = ingredients[idx];

//   console.log(ingredient);
// });

const createIngredientItem = (ingredients) => {
  const ingredientRef = document.createElement("li");
  ingredientRef.textContent = ingredients[i];

  return ingredientRef;
};

const ingredientItem = ingredients.map((ingredients) =>
  createIngredientItem(ingredients[i])
);

const ingRoot = document.querySelector("#ingredients");

ingRoot.appendChild(ingredientRef);
