const inputRef = document.querySelector("#validation-input");
inputRef.classList.add(".primary");
let inputTextRef = inputRef.textContent;
const validInputLengthRef = inputRef.getAttribute("data-length");
console.log(validInputLengthRef);

let inputLengthRef;

const handleInputChange = (event) => {
  inputTextRef = event.target.value;
  inputLengthRef = inputTextRef.length;
  return inputLengthRef;
};

inputRef.addEventListener("input", handleInputChange);

console.log(inputLengthRef);

const validate = (str) => {
  return str.length === validInputLengthRef;
};

const isValid = (event) => {
  validate(event.target.value)
    ? inputRef.classList.add(".valid")
    : inputRef.classList.add(".invalid");
};

inputRef.addEventListener("blur", isValid);
