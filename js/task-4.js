const cuountValueRef = document.querySelector("#value");
console.log(cuountValueRef);

let currentCounterValue = 0;
console.log(currentCounterValue);

const increment = (currentCounterValue) => {
  currentCounterValue += 1;
  cuountValueRef.textContent = currentCounterValue;
};

const decrement = (currentCounterValue) => {
  currentCounterValue -= 1;
  cuountValueRef.textContent = currentCounterValue;
};

const incrementBtnRef = document.querySelector(".js-increment-btn");
incrementBtnRef.addEventListener("click", () => increment(currentCounterValue));

const decrementBtnRef = document.querySelector(".js-decrement-btn");
decrementBtnRef.addEventListener("click", () => decrement(currentCounterValue));
