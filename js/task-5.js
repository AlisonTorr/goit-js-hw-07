const inputRef = document.querySelector("#name-input");

const nameOutputRef = document.querySelector("#name-output");

const defaultOutPutRef = "незнакомец";

function handleOutputChange(event) {
  if (event.target.value) {
    nameOutputRef.textContent = event.target.value;
  } else nameOutputRef.textContent = defaultOutPutRef;
}

inputRef.addEventListener("input", handleOutputChange);
