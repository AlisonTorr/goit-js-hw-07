const inputRef = document.querySelector("#validation-input");
inputRef.classList.add("primary");

const validInputLengthRef = inputRef.dataset[length];
console.log(validInputLengthRef);

const validate = (str) => {
  return str.length === validInputLengthRef;
};

const isValid = (event) => {
  if (validate(event.target.value.length)) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
};

inputRef.addEventListener("blur", isValid);
