const cuountValue = document.querySelector("#value");
console.log(cuountValue);

const increment = () => (cuountValue += 1);

const decrement = () => (cuountValue -= 1);

const incrementBtnRef = document.querySelector(".js-increment-btn");
incrementBtnRef.addEventListener("click", () => cuountValue.increment);

const decrementBtnRef = document.querySelector(".js-decrement-btn");
decrementBtnRef.addEventListener("click", () => cuountValue.decrement);
