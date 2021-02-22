const cuountValueRef = document.querySelector("#value");
console.log(cuountValueRef);

const startCounterValue = Number(cuountValueRef.textContent);
console.log(startCounterValue);

const increment = (startCounterValue) => (startCounterValue += 1);

const decrement = (startCounterValue) => (startCounterValue -= 1);

const incrementBtnRef = document.querySelector(".js-increment-btn");
incrementBtnRef.addEventListener("click", () => increment(startCounterValue));

const decrementBtnRef = document.querySelector(".js-decrement-btn");
decrementBtnRef.addEventListener("click", () => decrement(startCounterValue));
