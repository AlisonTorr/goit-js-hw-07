const cuountValue = document.querySelector("#value");
console.log(cuountValue);

const increment = (cuountValue) => (cuountValue += 1);

const decrement = (cuountValue) => (cuountValue -= 1);

const incrementBtnRef = document.querySelector("button.increment");
incrementBtnRef.addEventListener("click", () => cuountValue.increment);

const decrementBtnRef = document.querySelector("button.decrement");
decrementBtnRef.addEventListener("click", () => cuountValue.decrement);
