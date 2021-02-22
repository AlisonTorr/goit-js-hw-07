const controllerRef = document.querySelector("#font-size-control");
const currentFontSize = controllerRef.value;
console.log(currentFontSize);

const textRef = document.querySelector("#text");

const handleTextChange = () => (textRef.style.fontSize = "30px");

controllerRef.addEventListener("input", handleTextChange);
