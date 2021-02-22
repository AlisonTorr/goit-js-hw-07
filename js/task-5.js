const inputRef = document.querySelector("#name-input");

const nameOutputRef = document.querySelector("#name-output");
const nameOutputTextRef = nameOutputRef.textContent;
console.log(nameOutputTextRef);

const defaultOutPutRef = "незнакомец";

const handleOutputChange = (event) => {
  nameOutputTextRef = inputRef === null ? defaultOutPutRef : event.target.value;
};

inputRef.addEventListener("input", () => handleOutputChange);
