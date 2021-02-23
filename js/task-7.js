const controllerRef = document.querySelector("#font-size-control");
const currentFontSizeRef = controllerRef.value;
console.log(currentFontSizeRef);

const textRef = document.querySelector("#text");
console.log(textRef);
const textValueRef = textRef.textContent;
console.log(textValueRef);

const handleTextChange = (event) => {
  const value = event.target.value;
  console.log(value);
  textRef.style.fontSize = value + "px";
};

controllerRef.addEventListener("input", handleTextChange);
