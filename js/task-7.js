const inputRef = document.querySelector("#font-size-control");

const textRef = document.querySelector("#text");

const handleTextChange = () => (textRef.style.fontSize = "30px");

inputRef.addEventListener("input", () => handleTextChange);
