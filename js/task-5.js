const inputRef = document.querySelector("#name-input");

const nameOutputRef = document.querySelector("#name-output");

const defaultOutPutRef = "незнакомец";

const handleOutputChange = (event) => {
  nameOutputRef.textContent = event.target.value;
};

inputRef.addEventListener("input", () => handleOutputChange());
