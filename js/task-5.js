const inputRef = document.querySelector("#name-input");

const nameOutputRef = document.querySelector("#name-output");
const nameOutputTextRef = nameOutputRef.textContent;
console.log(nameOutputTextRef);

const defaultOutPutRef = "незнакомец";

const handleOutputChange = (event) => {
  nameOutputTextRef = event.target.value
    ? event.target.value
    : defaultOutPutRef;
};

inputRef.addEventListener("input", () => handleOutputChange());
