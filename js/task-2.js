"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientItem = ingredients.map((text) => {
  const ingredientRef = document.createElement("li");
  ingredientRef.textContent = text;

  return ingredientRef;
});

const ingRoot = document.querySelector("#ingredients");

ingRoot.append(...ingredientItem);
