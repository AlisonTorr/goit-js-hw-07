const inputRef = document.querySelector("#validation-input");
inputRef.classList.add(".primary");
const inputTextRef = inputRef.textContent;
const validInputLengthRef = inputRef.getAttribute("data-length");

// let inputLengthRef;

// const handleInputChange = (event) => {
//   ininputLengthRef = event.target.value.length;

//   return inputLengthRef;
// };

// console.log(inputLengthRef);

// inputRef.addEventListener("input", handleInputChange);

// console.log(inputLengthRef);

const validate = (str) => {
  return str.length === validInputLengthRef;
};

const isValid = () => {
  validate(inputTextRef)
    ? inputRef.classList.add(".valid")
    : inputRef.classList.add(".invalid");
};

inputRef.addEventListener("blur", isValid);
