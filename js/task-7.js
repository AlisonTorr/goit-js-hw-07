const controllerRef = document.querySelector("#font-size-control");
const currentFontSizeRef = controllerRef.value;
console.log(currentFontSizeRef);

const textRef = document.querySelector("#text");

const handleTextChange = () =>
  (textRef.style.fontSize = currentFontSizeRef.value);

controllerRef.addEventListener("input", handleTextChange);
