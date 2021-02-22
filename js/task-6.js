const inputRef = document.querySelector("#validation-input");
inputRef.classList.add(".primary");
const validInputLengthRef = inputRef.getAttribute("data-length");
console.log(validInputLengthRef);

const inputLengthRef = inputRef.target.value.length;

const isValid = () => {
  inputLengthRef === validInputLengthRef
    ? inputRef.classList.add(".valid")
    : inputRef.classList.add(".invalid");
};

inputRef.addEventListener("blur", () => isValid);
