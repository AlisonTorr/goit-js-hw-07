const inputRef = document.querySelector("#validation-input");
inputRef.classList.add(".primary");
const inputTextRef = inputRef.textContent;
const validInputLengthRef = inputRef.getAttribute("data-length");

const validate = (str) => {
  return str.length === validInputLengthRef;
};

const isValid = () => {
  if (validate(inputTextRef)) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
};

inputRef.addEventListener("blur", isValid);
