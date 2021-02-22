const inputRef = document.querySelector("#name-input");

const nameOutputRef = document.querySelector("#name-output");
const defaultOutPutRef = "незнакомец";

const handleInputChange = (event) =>
  (nameOutputRef.textContent = event.target.value);

if (inputRef === null) {
  nameOutputRef.textContent = defaultOutPutRef;
} else {
  inputRef.addEventListener("input", () => handleInputChange);
}
