const inputRef = document.querySelector("#name-input");

const nameOutputRef = document.querySelector("#name-output");
const defaultOutPutRef = "незнакомец";

const handleInputChange = (event) => {
  nameOutputRef.textContent =
    inputRef === null ? defaultOutPutRef : event.target.value;
};

inputRef.addEventListener("input", () => handleInputChange);
