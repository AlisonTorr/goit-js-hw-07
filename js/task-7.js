const controllerRef = document.querySelector("#font-size-control");
const currentFontSizeRef = controllerRef.value;
console.log(currentFontSizeRef);

const textRef = document.querySelector("#text");
// const textValueRef = textRef.textContent;

const handleTextChange = (event) => {
  const value = event.target.value;
  let textFontSizeRef = textRef.style.fontSize;
  textFontSizeRef = currentFontSizeRef += value;
};

controllerRef.addEventListener("input", handleTextChange);
