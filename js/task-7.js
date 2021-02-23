const controllerRef = document.querySelector("#font-size-control");
const currentFontSizeRef = controllerRef.value;
console.log(currentFontSizeRef);

const textRef = document.querySelector("#text");

const textValueRef = textRef.textContent;

const handleTextChange = (event) => {
  const value = event.target.value;
  textRef.style.fontSize = value + "px";
};

controllerRef.addEventListener("input", handleTextChange);
