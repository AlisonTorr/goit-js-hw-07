const cuountValueRef = document.querySelector("#value");
console.log(cuountValue);
const countValueText = cuountValueRef.textContent;
console.log(countValueText);

const increment = (countValueText) => (countValueText += 1);

const decrement = (countValueText) => (countValueText -= 1);

const incrementBtnRef = document.querySelector(".js-increment-btn");
incrementBtnRef.addEventListener("click", () => countValueText.increment);

const decrementBtnRef = document.querySelector(".js-decrement-btn");
decrementBtnRef.addEventListener("click", () => countValueText.decrement);
