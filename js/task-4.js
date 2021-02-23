const cuountValueRef = document.querySelector("#value");

let currentCounterValue = 0;

const increment = (currentCounterValue) => {
  currentCounterValue++;
  cuountValueRef.textContent = currentCounterValue;
};

const decrement = (currentCounterValue) => {
  currentCounterValue -= 1;
  cuountValueRef.textContent = currentCounterValue;
};

const incrementBtnRef = document.querySelector(".js-increment-btn");
incrementBtnRef.addEventListener("click", () =>
  increment(cuountValueRef.textContent)
);

const decrementBtnRef = document.querySelector(".js-decrement-btn");
decrementBtnRef.addEventListener("click", () =>
  decrement(cuountValueRef.textContent)
);
