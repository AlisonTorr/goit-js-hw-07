const cuountValueRef = document.querySelector("#value");
console.log(cuountValueRef);

const currentCounterValue = Number(cuountValueRef.textContent);
console.log(currentCounterValue);

const increment = (currentCounterValue) => (currentCounterValue += 1);

const decrement = (currentCounterValue) => (currentCounterValue -= 1);

const incrementBtnRef = document.querySelector(".js-increment-btn");
incrementBtnRef.addEventListener("click", () => increment(currentCounterValue));

const decrementBtnRef = document.querySelector(".js-decrement-btn");
decrementBtnRef.addEventListener("click", () => decrement(currentCounterValue));
