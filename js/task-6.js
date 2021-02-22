const inputRef = document.querySelector("#validation-input");
inputRef.classList.add(".primary");
const inputTextRef = inputRef.textContent;
const validInputLengthRef = inputRef.getAttribute("data-length");
console.log(validInputLengthRef);

const handleInputChange = (event) => {
  inputTextRef = event.target.value;
};

inputRef.addEventListener("input", handleInputChange);

const inputLengthRef = inputTextRef.length;

const isValid = () => {
  inputLengthRef === validInputLengthRef
    ? inputRef.classList.add(".valid")
    : inputRef.classList.add(".invalid");
};

inputRef.addEventListener("blur", () => isValid);
